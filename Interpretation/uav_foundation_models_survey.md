# 面向无人机的基座模型相关工作调研

更新时间：2026-05-04

## 0. 结论先行

面向无人机的“基座模型”目前还没有形成类似地面机器人 OpenVLA / π0 那样公认统一的模型谱系，更像是在快速收敛到三条路线：

1. **低空 UAV 多模态理解基座**：先解决低空视角、远小目标、俯视/斜视几何、复杂天气和区域级 grounding。代表是 UAVBench/UAVIT-1M、MM-UAVBench、UAVReason。
2. **UAV-VLN / UAV-VLA 导航基座**：从“语言指令 + 视觉观测 -> waypoint/动作”演进到端到端 VLA。代表是 AerialVLN、OpenFly、FlightGPT、AerialVLA、VLA-AN。
3. **UAV 世界模型 / 想象式规划基座**：学习动作条件下的未来视觉观测，用生成式世界模型给候选轨迹打分。代表是 ANWM / Aerial World Model。

从落地角度看，当前最值得重点跟踪的是：

- **AerialVLA**：最激进的端到端 UAV-VLA，去掉 dense oracle guidance 和外部检测器，用双视角图像 + fuzzy directional prompt 直接输出 3-DoF 控制 token 和 LAND。
- **VLA-AN**：更工程化的机载闭环系统，强调 3D-GS 数据、三阶段训练、安全 action module、Jetson Orin NX 上 2-3 Hz 部署。
- **ANWM / Aerial World Model**：不是直接控制基座，而是“空中导航世界模型”，用未来画面生成支持长距离 3D 轨迹选择。
- **UAVBench/UAVReason**：给 UAV-native MLLM/VLM 预训练和评测补了关键数据基础，尤其提醒我们通用 MLLM 在低空 UAV 场景有明显 domain gap。

## 1. 领域定义：这里的“无人机基座模型”包括什么

建议把无人机基座模型分成四层，而不是只看“能不能控制无人机”：

| 层级 | 输入 | 输出 | 典型任务 | 代表工作 |
|---|---|---|---|---|
| 低空视觉-语言理解 | UAV 图像/视频、区域、问题 | 答案、caption、bbox/region、任务计划 | VQA、caption、检测、visual grounding、规划问答 | UAVBench/UAVIT-1M、MM-UAVBench、UAVReason |
| UAV-VLN | 指令、第一视角视觉、位姿/历史 | waypoint、导航动作、路径 | 城市场景/室内外语言导航 | AerialVLN、OpenFly、FlightGPT、TravelUAV 系列 |
| UAV-VLA | 指令、视觉、多模态状态 | 连续控制、action token、landing/stop | 端到端导航、跟踪、避障、精确降落 | AerialVLA、VLA-AN、RaceVLA、TrackVLA |
| UAV 世界模型 | 历史帧、动作/轨迹、目标图像 | 未来观测、轨迹价值/相似度 | look-ahead planning、视觉想象、轨迹筛选 | ANWM / Aerial World Model |

这四层的关系是：UAVBench/UAVReason 这类数据基准支撑 VLM/MLLM 具备低空视觉语义；VLN/VLA 把语义接到导航/控制；世界模型提供长时预测和候选轨迹评估；机载部署和安全过滤是把模型变成可飞系统的最后一公里。

## 2. 重点论文原文阅读

### 2.1 AerialVLA: A Vision-Language-Action Model for UAV Navigation via Minimalist End-to-End Control

原文：本地 PDF `pdfs/AerialVLA A Vision-Language-Action Model for UAV Navigation via Minimalist End-to-End Control.pdf`；arXiv:2603.14363。

**核心问题**：现有 UAV-VLN 很多依赖两根“拐杖”：一是沿专家轨迹给出的 dense oracle guidance，二是用 Grounding DINO 等外部检测器决定何时 landing。AerialVLA 试图用单一 VLA 策略把巡航和终止统一起来。

**方法要点**：

- 双视角输入：front view + down view 做 vertical mosaic，压缩多摄像头冗余。
- 语言输入：不是精确导航指令，而是由 IMU/GPS 估计出的粗粒度方位提示，例如 straight ahead、forward-right、to your left rear。
- 模型：OpenVLA-7B / Llama-2 backbone，视觉编码器冻结，LoRA 微调语言骨干和 projector。
- 动作空间：3-DoF `<Δx, Δz, Δψ>`，token 化到 0-98 数字 token；另有 LAND token。
- landing：LAND token 或近零位移触发，避免外部 detector。
- 执行：把位移映射成恒速 velocity-duration 控制，降低 abrupt acceleration 和 motion blur。

**数据与实验**：

- 使用 TravelUAV 的 UAV-Need-Help，训练 7,922 条轨迹、约 420k frames。
- Test Seen：SR 47.96%，SPL 38.54%，高于 LongFly 的 SR 36.39%、SPL 31.07。
- Unseen Object：SR 56.60%，SPL 46.61%。
- Unseen Map：SR 37.58%，SPL 28.22%，约为 LongFly SR 11.27% 的三倍。
- RTX 4090 上总延迟 0.38s、17GB VRAM；相对 TravelUAV 去掉 Assist/Grounding DINO 后更快。

**优点**：

- 定位很清楚：用极简 reactive VLA 验证“无人机端到端控制”可行。
- 对 unseen map 的提升很亮眼，说明少依赖历史地图/外部模块反而增强迁移。
- 数字 token 借用了 LLM 的数量先验，比自定义 action token ablation 更稳。

**局限**：

- 本质仍是 behavior cloning，极端 OOD 下会保守 hover。
- 无显式长程记忆，在重复城市结构中全局 backtracking 弱。
- 实验仍主要在 AirSim/TravelUAV 仿真，没有真实机载闭环飞行证明。

### 2.2 VLA-AN: An Efficient and Onboard Vision-Language-Action Framework for Aerial Navigation

原文：本地 PDF `pdfs/VLA-AN An Efficient and Onboard Vision-Language-Action Framework for Aerial Navigation in Complex Environments.pdf`；arXiv:2512.15258。

**核心问题**：通用 VLA 多为地面机器人/机械臂设计，直接上无人机会遇到数据域差、时序推理不足、生成动作不安全、机载算力不足四个问题。

**方法要点**：

- 数据：用 3D Gaussian Splatting 构建高保真场景，混合 3D-GS、mesh、真实数据；论文声称超过 100K navigation trajectories 和 1M multimodal samples。
- 训练：三阶段 progressive training。
  - Stage I：grounding/reasoning SFT。
  - Stage II：导航专项 SFT，学习 3D waypoints、yaw、replan。
  - Stage III：RFT/GRPO 类强化微调，强化复杂指令和格式合规。
- 动作：不是让 LLM 直接输出低层电机/连续控制，而是输出 3D waypoints、yaw、replan token，再由轻量 action module 做安全修正。
- 安全：基于 depth map 检查轨迹与障碍交叉，生成 repulsive gradient force 修正轨迹。
- 部署：Jetson Orin NX 16GB，30W 模式；flash-attention、FFN-Norm fusion、KV-cache preloading、CUDA graph；闭环 2-3 Hz。

**实验信息**：

- 与 OpenVLA、π0、GR00T N1.5 对比，覆盖 8 类导航场景。
- 物体导航任务平均 SR 超过 98%，目标跟踪任务在训练样本不足 1% 时仍达到 82.0% SR。
- 真实实验部署在两类无人机平台，使用 RealSense D435/D455。
- 数据 ablation：仅 3D-GS 数据接近真实数据；仅 mesh 数据在 unseen 上明显弱；hybrid data 最好。

**优点**：

- 更接近真实飞行系统：数据、训练、action safety、部署 pipeline 都考虑了。
- 3D-GS 作为数据引擎很值得重视，可能是 UAV sim-to-real 的近期主线之一。
- 不迷信纯生成动作，用几何安全修正补足 VLA 安全短板，工程上更稳。

**局限**：

- 技术报告式表达较强，部分 benchmark 细节和可复现实验协议还需要后续代码/数据验证。
- 2-3 Hz 对慢速导航够用，但对高速穿越/避障仍偏低，作者也把 10 Hz 作为未来目标。
- 输出 waypoint + action module 的设计更像“VLA + 传统规划控制融合”，端到端程度弱于 AerialVLA。

### 2.3 Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space / ANWM

原文：本地 PDF `pdfs/Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space.pdf`；arXiv:2512.21887。

**核心问题**：无人机大尺度 3D 导航不能只优化避障和平滑，还需要提前“想象”不同轨迹终点会看到什么，从而选择语义上更接近目标图像的路径。

**方法要点**：

- 任务：给定当前第一视角观测和目标图像，候选轨迹经过世界模型生成未来观测，最终用 LPIPS 与目标图像比较选择轨迹。
- 动作：4-DoF 相对变换 `<Δx, Δy, Δz, Δφ>`。
- 数据：从 AerialVLN、OpenFly、OpenUAV 等 AVLN benchmark replay 轨迹，动作增强后形成约 350k trajectory segments。
- 模型：基于 CDiT 的 action-conditioned video/world model。
- 关键模块：
  - Future Frame Projection：把历史帧按未来视角投影，提供粗几何先验。
  - Independent Latent Modulation：对真实历史帧 latent 和投影未来帧 latent 分别调制，降低投影误差干扰。

**实验信息**：

- 生成评测：4s/8s/16s/32s 上 LPIPS、DreamSim、FID 均优于 NWM、YUME、Matrix-Game。
- 3D 导航：ANWM SR 60.0%，NWM 58.0%；2D 导航 ANWM SR 73.0%，NWM 63.0%。
- 长距离约 100m 仍可生成较合理观测；200m 左右出现 mode collapse 和纹理不一致。

**优点**：

- 明确把 UAV 的 3D/4-DoF 动作接到未来视觉生成，这是普通地面 navigation world model 没覆盖好的部分。
- FFP 把几何投影和生成模型结合，比纯视频扩散更适合无人机视角变化。

**局限**：

- 目前主要作为候选轨迹 reranker，不是完整控制策略。
- 轨迹候选默认数量很小，复杂环境下全局搜索能力有限。
- 成功率提升相对温和，世界模型生成质量和导航收益之间仍有落差。

### 2.4 UAVReason: Unified Benchmark for Aerial Scene Reasoning and Generation

原文：本地 PDF `pdfs/UAVReason A Unified, Large-Scale Benchmark for Multimodal Aerial Scene Reasoning and Generation.pdf`；arXiv:2604.05377。

**定位**：不是控制模型，而是为 UAV-native MLLM 提供“俯视视角 + 几何 + 时序 + 生成”的统一 benchmark。

**数据与任务**：

- 273K VQA pairs。
- 23.6K 单帧详细 caption。
- 68.2K 两帧时序序列。
- 188.8K cross-modal generation samples。
- 22 类 reasoning types，覆盖空间、时间、计数、比较、方向、caption、RGB/depth/seg 互相生成。

**关键观察**：

- 通用 MLLM 在 UAV nadir-view 上很弱，尤其是方向、远小目标、密集目标、重复纹理。
- 论文的 UAVReason-Bagel 用统一多任务训练后，在 VQA/caption/generation 上显著优于 off-the-shelf VLM。

**价值**：给未来 UAV 基座模型补了“统一理解-生成”的预训练/评测任务，尤其适合训练视觉 tokenizer、空间推理能力和几何一致性。

## 3. 支撑性工作与谱系

### 3.1 AerialVLN

arXiv:2308.06735，ICCV 2023。它定义了 UAV-based outdoor VLN，构建 25 个 city-level 3D scenarios 的模拟器，并用 CMA 类 cross-modal alignment baseline 证明与人类有明显差距。它是后续 UAV-VLN 的起点：第一次把“空中 3D 导航 + 语言指令”从地面 VLN 中拆出来。

### 3.2 OpenFly

arXiv:2502.18041 / 2026 ICLR 相关版本。核心贡献是平台化：multi-engine simulation、自动数据收集、100k 轨迹数据、keyframe-aware agent。它的价值不是单个模型 SOTA，而是让 UAV-VLN 数据规模和实验生态上了一个台阶。

### 3.3 FlightGPT

arXiv:2505.12835 / EMNLP 2025。它是 VLM-based UAV-VLN 的代表：两阶段训练，先 SFT 学示范和结构化推理，再用 GRPO 类算法按目标准确性、推理质量和格式合规做 RL；引入 CoT 增强可解释性。在 CityNav unseen 环境上比最强 baseline 高 9.22% SR。它偏高层导航推理，不是纯低层控制。

### 3.4 UAVBench / UAVIT-1M

arXiv:2603.14336。UAVBench 包含 43 个 test units、966k 高质量样本、10 个 image/region-level 任务；UAVIT-1M 有约 1.24M instructions、789k 多场景低空 UAV 图像、约 2000 种空间分辨率、11 个任务。结论是现有开源 MLLM 对低空 UAV 内容的对话/识别明显落后，使用 UAVIT-1M 微调能显著缩小差距。

### 3.5 MM-UAVBench

arXiv:2512.23219。面向低空 UAV 的 perception/cognition/planning 三维评测，19 个子任务、5.7K 人工标注问题，覆盖 16 个开源/闭源 MLLM。它特别指出 spatial bias 和 multi-view understanding 是关键瓶颈。

### 3.6 Vision-and-Language Navigation for UAVs: Progress, Challenges, and a Research Roadmap

arXiv:2604.13654。该综述把 UAV-VLN 建模为 POMDP，并给出从 classical pipeline、modular deep learning、VLM explicit world models、VLA、flow-based VLA、generative world models 到世界模型 + VLA 融合的时间线。对梳理“基座模型化”的演进很有帮助。

## 4. 横向比较

| 工作 | 类型 | 数据/环境 | 模型输出 | 是否端到端控制 | 是否机载/真实 | 核心亮点 |
|---|---|---|---|---|---|---|
| AerialVLN | UAV-VLN 基准 | 25 city-level scenarios | 离散/连续导航动作 baseline | 否 | 仿真 | 定义 UAV-VLN 起点 |
| OpenFly | 平台/数据 | 100k 轨迹，多引擎仿真 | keyframe-aware navigation | 部分 | 仿真 | 大规模平台化 |
| FlightGPT | VLM 导航 | CityNav | 高层导航决策/推理 | 否 | 仿真 | SFT + GRPO + CoT |
| AerialVLA | UAV-VLA | TravelUAV，420k frames | 3-DoF 数字 action + LAND | 是 | 仿真 | 去 oracle / detector，极简 reactive |
| VLA-AN | UAV-VLA 系统 | 3D-GS + mesh + real，>100k traj | waypoint/yaw/replan + safety module | 半端到端 | 真实机载 | 2-3 Hz Jetson 部署、安全修正 |
| ANWM | UAV 世界模型 | 350k trajectory segments | future observations / trajectory ranking | 否 | 仿真 | 4-DoF 空中未来视觉想象 |
| UAVBench/UAVIT-1M | 理解数据/基准 | 966k eval + 1.24M instruction | VQA/caption/detection/grounding | 否 | 真实低空图像 | UAV-native MLLM 数据 |
| UAVReason | 理解+生成基准 | 273K VQA + 188.8K generation | VQA/caption/depth/seg/RGB generation | 否 | 仿真/高保真 | 空间-时序-生成统一评测 |

## 5A. 无人机 VLA 模型训练细节补充

这一节专门补 UAV-VLA 的模型架构、数据集和训练方法。这里的“VLA”不只指端到端输出电机控制的模型，也包括输出 waypoint/action chunk，再交给飞控或安全模块执行的语言条件飞行策略。当前论文大致有四类技术路线。

### 5A.1 通用训练范式

多数 UAV-VLA 都沿用机器人 VLA 的基本结构：

```text
视觉观测 I_t / I_{t-k:t} + 语言指令 L + 无人机状态 S_t
        ↓
视觉编码器 ViT / SigLIP / DINOv2 / PaliGemma vision tower
        ↓
Projector / temporal compressor / state projector
        ↓
LLM 或 VLM backbone
        ↓
Action decoder
        ↓
waypoint / velocity / 3-DoF token / action chunk / LAND / replan
```

但无人机和机械臂的差异使训练不能简单照搬 OpenVLA/π0：

- **输入更依赖多视角和时序**：前视用于避障和目标识别，下视用于落点/抓取/地面目标对齐，历史帧用于估计目标速度和相对运动。
- **状态量更重要**：无人机通常需要加入 pose、velocity、yaw、altitude、gripper aperture、IMU/GPS/深度等 proprioception，否则纯视觉很难稳定。
- **动作空间更敏感**：小的 yaw/altitude 错误会导致碰撞或目标丢失，动作需要物理约束、安全过滤或高频重规划。
- **训练数据更难收集**：真实飞行有风险，常用仿真、3D-GS 重建、专家遥操作、自动轨迹规划和 domain randomization 混合。

### 5A.2 架构路线一：OpenVLA/Llama 系列的离散 action-token VLA

代表：**AerialVLA**。

**输入设计**：

- 视觉：front view + down view 拼接成 vertical mosaic，再送入视觉编码器。论文采用 SigLIP 侧重语义、DINOv2 侧重空间特征，随后经 MLP projector 对齐到 LLM token 空间。
- 语言：`<image>` + fuzzy directional hint + target description。例如 “Fly forward-right and find ...”。方位提示不是 oracle path，而是由 onboard IMU/GPS 估计的相对方位粗分桶。
- 状态：没有显式长历史 memory，强调 reactive policy，降低推理延迟和历史误差累积。

**动作表示**：

- 输出三个数字 token：`<c_x, c_z, c_ψ>`，每个取值 0-98。
- 反量化后得到连续控制：`Δx ∈ [0, 5]m`、`Δz ∈ [-5, 5]m`、`Δψ ∈ [-π, π]`。
- 另有 `LAND` 文本 token；若生成 LAND 或预测近零位移，则触发终止/降落。
- 执行层把空间位移转为恒速 velocity-duration 指令，通过 AirSim `moveByVelocityAsync` 执行。

**训练数据**：

- TravelUAV / UAV-Need-Help。
- 训练集 7,922 条专家轨迹，约 420k frames。
- 数据包含 front/down 观测、目标描述、专家动作。
- 论文做了 geometry-consistent filtering：当目标在侧向但专家 yaw 近零时，用侧向深度判断是否因避障而必须直飞；清理约 4% 有歧义样本。

**训练方法**：

- 行为克隆 BC，本质是 action token 的 next-token prediction。
- OpenVLA-7B backbone，Llama-2 风格语言模型；LoRA 微调语言骨干，视觉 encoder 冻结，projector 全量训练。
- LoRA 配置：`r=64`、`alpha=128`、dropout `0.05`。
- AdamW，weight decay `0.03`，gradient clip `1.0`，cosine schedule，peak LR `2e-4`，5% warmup。
- 4×RTX 4090，global batch size 64，BF16，5 epochs，约 35 小时。

**训练启示**：

- 数字 token 比自定义 action token 更好，因为能利用 LLM 对数值大小的已有表示。
- 双视角比五视角更强，说明无人机 VLA 不是摄像头越多越好，多余视角会带来冗余和过拟合。
- reactive BC 在 unseen map 泛化不错，但缺少全局回溯和主动探索。

### 5A.3 架构路线二：VLM backbone + waypoint/replan/action module 的工程化 VLA

代表：**VLA-AN**。

**输入设计**：

- 当前 RGB、depth、UAV pose；部分训练/任务使用多帧和多摄像头。
- 语言指令可包含复杂空间关系和多步任务，例如“先到黑色椅子，再到柱子，最后降落在地毯上”。
- 模型架构包括 ViT、MLP projector、LLM、tokenizer、action module。

**动作表示**：

- 不直接预测低层电机命令，而是输出：
  - 3D waypoint；
  - yaw；
  - mission replan token；
  - task completion / temporal comparison 信号。
- 之后由 action module 生成连续轨迹，并基于 depth map 做几何安全修正。

**数据集构造**：

- 3D-GS 高保真场景：采集室内办公室、走廊，室外公园、街道等视频，重建为 3D Gaussian Splatting 场景，再导入 Unity。
- 自动轨迹生成：人工定义任务元数据，包括语言指令、起点、终点；随机采样起止点增加多样性；用 gradient-based / kinodynamic planner 生成满足 UAV 动力学的避障轨迹。
- 多视角同步采集：Unity 中 10 Hz 记录 front/rear/left/right RGB、depth map、4D pose。
- 混合数据：3D-GS 数据负责真实纹理和光照，mesh 数据负责可编辑和 domain randomization，真实数据负责校准现实分布。
- 论文声称构建超过 100K navigation trajectories 和 1M multimodal samples。

**训练方法**：

- 三阶段 progressive training：
  - **Stage I: grounding-reasoning SFT**。用 VQA、grounding、reasoning、STEM 等多模态数据增强场景理解、空间定位、逻辑推理。
  - **Stage II: navigation-specific SFT**。加入导航轨迹，学习 3D waypoint、yaw prediction、dynamic re-planning、长程任务执行。
  - **Stage III: RFT / GRPO-style reinforcement fine-tuning**。用 reward model 和 rollout reward 优化复杂任务、格式合规、失败模式修正。奖励包含任务成功、导航距离、IoU/grounding 等。
- 训练后再做部署优化：flash-attention、FFN-Norm fusion、KV-cache preloading、CUDA graph、CPU action module pipeline。

**安全控制**：

- action module 检查参考轨迹是否与 depth-map 障碍物相交。
- 若相交，把局部几何 cue 转成 surface anchors 和 repulsive directions，生成可微 repulsive gradient force 修正轨迹。
- 重新分配时间并重建动态可行轨迹。

**训练启示**：

- UAV-VLA 若要真实部署，waypoint/action-module 路线比纯 token 控制更稳。
- 3D-GS-only 数据接近 real-only，mesh-only 在 unseen 上明显弱；最优是 hybrid data。
- 三阶段训练的任务分工很清晰：reasoning 负责语义/空间，navigation SFT 负责飞行技能，RFT 负责复杂失败模式。

### 5A.4 架构路线三：π0/π0.5 flow-matching action expert 迁移到无人机

代表：**AirVLA / π, But Make It Fly**、**UAV-Track VLA**。

这一路线不是把动作离散成文本 token，而是用 flow matching / diffusion-style action expert 输出连续 action chunk。它最接近 π0、π0.5 这类新一代机器人 VLA。

#### AirVLA：从机械臂 VLA 迁移到空中操作

**输入**：

- 三路 RGB：外部相机、下视相机、前视相机，分辨率 `256×256`。
- 自身状态：motion capture pose、gripper aperture。
- 语言任务：pick/place/gate navigation/compositional instruction。

**动作空间**：

- action chunk `A ∈ R^{H×D}`。
- 包含 4-DoF drone delta pose / position+yaw 和 gripper command。
- 10 Hz 生成并由 PX4 以 position setpoints 执行。

**训练数据**：

- 少量真实 teleoperation seed flights。
- 3D Gaussian Splatting 合成数据：用真实飞行/场景重建 GS，再合成多视角导航轨迹。
- 合成时加入 drone semi-kinematic dynamics：
  - state `x = (p_W, v_W, q_W^B)`；
  - control 为 normalized thrust 和 body angular velocity；
  - 用 ACADOS 前向积分；
  - 渲染时根据 body-to-camera transform 生成图像。
- domain randomization：
  - 随机起始状态扰动；
  - 随机目标 hover 高度 `[1.0, 1.5]m`；
  - gate 后 waypoint 在半径 0.125m 球内扰动；
  - 插入 near-gate extremity waypoint 诱导 recovery behavior。

**训练/推理方法**：

- 在 π0 上 fine-tune，而不是从零训练。
- 关键发现：视觉表示迁移有效，但飞行动力学不迁移。
- 使用 RTC real-time chunking：不断重采样未来 action chunk 的 suffix，已执行 prefix 保持连续，减轻 compounding error。
- 使用 payload-aware guidance：在 flow matching sampling 过程中加入垂直方向 tracking loss。当 gripper close 且 aperture 显示可能携带物体时，对 z 方向加入上偏置，补偿抓取后的有效质量增加导致的下沉。

**结果摘录**：

- navigation synthetic + RTC 可把 gate traversal 提到 95%-100%。
- payload-aware guidance 把 pick-and-place 中 place success 从 23% 提到 50%。
- 长程组合任务整体条件成功率约 62.5%。

**训练启示**：

- “拿机械臂 VLA 直接飞”不够，必须补飞行动力学和载荷扰动。
- 物理约束可以不重训 foundation model，而在 flow sampling 时做 inference-time guidance。
- 3D-GS 合成轨迹特别适合补无人机数据稀缺。

#### UAV-Track VLA：面向动态跟踪的时序压缩 + 双解码器

**输入**：

- 当前帧 + 3 帧历史图像 `I_{t-3:t}`。
- 语言指令，例如 “Track the royal blue vehicle at a suitable distance.”
- UAV 状态 `S_t`，包括速度、yaw rate 等。

**模型架构**：

- backbone：基于 π0.5 / PaliGemma。
- vision tower：SigLIP，每帧 256 visual tokens。
- temporal compression net：将 3 个历史帧各自的 256 tokens 压缩到 64 tokens，再与当前帧 256 tokens 拼接，得到 `64×3 + 256 = 448` 个视觉 tokens。
- 加 learnable positional encoding 表示时序顺序。
- state projection 把 UAV state 投到模型空间。
- dual-branch decoder：
  - spatial-aware auxiliary grounding head：预测目标相对 3D position 和 yaw deviation，只在训练中作为辅助监督。
  - flow matching action expert：输出 25-step continuous action displacement sequence。

**动作表示**：

- 输出 4-DoF 连续动作：`Vx, Vy, Vz, ω_yaw`。
- action chunk 长度为 25 steps，用于高频追踪。

**数据集**：

- CARLA 构建 UAV-Track benchmark。
- 892,756 frames，其中约 200K 人类专家演示，约 690K 自动采集。
- 85 个目标，176 个细粒度 tracking tasks。
- 覆盖 rural/city/highway，sunny/windy/cloudy/rainy，不同 morning/afternoon/evening/night。
- 目标包括 pedestrian、vehicle、two-wheeler；速度范围 0-70 m/s。
- 自动增强使用 Artificial Potential Field，随机扰动 UAV 控制让其偏离理想轨迹，再用 APF 生成恢复路径，以缓解 imitation learning 的 covariate shift。

**训练方法**：

- 多任务损失：action expert 的 flow-matching loss + auxiliary grounding loss。
- 辅助 grounding head 训练时反向传播空间误差，迫使共享 encoder 学到几何先验；推理时主要使用 action branch。
- 这种 bypass auxiliary design 避免把显式空间预测和连续控制绑死，同时改善特征表示。

**结果摘录**：

- seen map long-distance pedestrian tracking：SR 61.76%，平均 tracking frames 269.65。
- unseen maps far pedestrian：SR 55.00%，明显高于 π0.5 的 5.88%。
- 单步推理延迟 0.0571s，比 π0.5 的 0.0857s 降低约 33.4%。

**训练启示**：

- 动态 UAV tracking 必须有时序输入，但历史帧不能简单堆叠，否则 token 冗余和延迟爆炸。
- 辅助几何监督对小目标/行人追踪非常关键，尤其是 unseen map。
- flow action chunk 比离散 token 更适合高速连续追踪。

### 5A.5 架构路线四：VLA 只做语义/任务队列，控制交给传统模块

代表：**DroneVLA**。

这类工作名字里有 VLA，但更准确说是 VLM/VLA-assisted aerial manipulation，不是端到端 action learning。

**架构**：

- VLA/VLM 模块：解析自然语言意图，生成抓取对象的优先级任务队列。
- Grounding DINO：open-vocabulary object detection。
- RealSense RGB-D：目标 3D localization。
- A* / dynamic planner：导航到目标。
- MediaPipe：人姿态、朝向、handover pose。
- visual servoing：在交接阶段保持无人机位于人前方 0.6-0.8m、胸口高度 1.0-1.3m 左右。

**训练特点**：

- 基本没有端到端 VLA 训练，主要是模块集成和真实系统验证。
- 10 次实验，平均欧氏定位误差约 0.070m，RMSE 0.084m。

**价值**：

- 说明在 aerial manipulation 里，纯 VLA 黑盒控制有安全风险，语义推理和可验证控制解耦仍是现实路线。
- 可作为 UAV-VLA 数据收集前的工程 scaffold：先用 Grounding DINO/MediaPipe/规划器跑通系统，再记录轨迹训练端到端策略。

### 5A.6 数据集设计共性

无人机 VLA 数据集通常需要同时覆盖四类信息：

| 数据维度 | 内容 | 作用 |
|---|---|---|
| 视觉 | front/down/side RGB，depth，segmentation，多帧历史 | 目标识别、避障、落点对齐、速度估计 |
| 语言 | 高层任务、目标描述、空间关系、距离偏好、动作风格 | 任务条件化、open-vocabulary 泛化 |
| 状态 | pose、velocity、yaw/yaw rate、altitude、IMU/GPS、gripper aperture | 稳定控制、动作反量化、载荷判断 |
| 动作 | waypoint、velocity、delta pose、yaw、LAND、replan、gripper command | BC/RFT/flow matching 监督 |

常见数据来源：

- **专家遥操作**：质量高但规模小、成本高。
- **自动规划器生成**：Ego-Planner、Fast-Planner、gradient/kinodynamic planner、A*、APF；可规模化但可能策略偏单一。
- **仿真平台**：AirSim、CARLA、Unity、Unreal Engine；适合风险低的闭环评测。
- **3D-GS 重建合成**：从少量真实视频构建可渲染场景，兼顾真实纹理和多视角合成。
- **真实飞行 logs**：最有价值但最贵，常用于最终验证或少量 fine-tuning。

### 5A.7 训练方法共性

**1. Behavior Cloning / SFT**

最常见。把专家动作离散成 token 或保留为连续 action，训练模型拟合：

```text
L_BC = - sum log p(a_t | I_t, L, S_t, a_<t)
```

或对连续动作使用 MSE / L1 / flow matching loss。AerialVLA 属于 action-token BC；VLA-AN Stage II 属于 navigation SFT。

**2. Flow Matching / Diffusion Action Expert**

适合连续 action chunk。模型学习从噪声 action 到真实 action trajectory 的向量场，推理时采样一段动作。π0、π0.5、AirVLA、UAV-Track VLA 属于这条线。优点是连续控制更平滑，缺点是需要实时 chunking 和安全约束。

**3. Auxiliary Grounding Supervision**

给 VLA 加一个辅助头预测目标相对位置、bbox、mask、yaw deviation 或 spatial relation。训练时帮助 encoder 学几何，推理时可以不用。UAV-Track VLA 证明这对动态跟踪尤其有效。

**4. RL / RFT / GRPO**

用于修正 SFT 的失败模式和格式问题。VLA-AN、FlightGPT 这类高层导航模型采用 reward model 或 rule-based reward，对任务成功、路径合理、grounding IoU、格式合规等打分。

**5. Inference-time Guidance**

AirVLA 的 payload-aware guidance 是很有价值的范式：不改变 foundation model 参数，而是在 flow matching 采样过程中加入物理 tracking loss。未来可扩展到：

- collision-aware guidance；
- altitude floor/ceiling guidance；
- battery-aware guidance；
- wind compensation guidance；
- no-fly-zone constraint guidance。

**6. Safety Filter / Action Shield**

训练模型输出未必安全，所以常在执行前加一层：

- depth-based geometric correction；
- CBF / MPC shield；
- local planner replan；
- velocity/yaw/altitude clipping；
- landing condition double-check。

### 5A.8 一个可复用的 UAV-VLA 训练配方

如果要训练一个实用的无人机 VLA，可以按下面路线组织：

1. **基础模型选择**
   - 导航/语言理解：OpenVLA/Qwen-VL/PaliGemma/InternVL + action head。
   - 高速连续控制：π0/π0.5-style flow action expert。
   - 机载轻量化：2B-3B VLM + 小 action module，或大模型蒸馏到小策略。

2. **观测设计**
   - 最小组合：front RGB + down RGB + pose/yaw/altitude。
   - 动态任务：加入 3-5 帧历史，但用 temporal compression。
   - 避障/室内：加入 depth。
   - 操作任务：加入 gripper aperture / payload indicator。

3. **动作空间选择**
   - 慢速导航：3D waypoint + yaw + LAND/replan。
   - 端到端仿真导航：`Δx, Δz, Δψ` 数字 token。
   - 动态跟踪/操作：`Vx, Vy, Vz, ω_yaw` 或 delta pose action chunk。
   - 真实部署：始终保留低层 PX4/DJI/PID 控制器。

4. **数据构造**
   - 先用 planner 在 AirSim/CARLA/Unity 收集 10^5-10^6 帧。
   - 用少量真实飞行视频做 3D-GS 场景重建并合成恢复轨迹。
   - 加专家遥操作覆盖困难 corner cases。
   - 对轨迹加入扰动和 recovery labels，缓解 covariate shift。

5. **训练阶段**
   - Stage A：UAV 视觉-语言理解 SFT，使用 UAVBench/UAVReason/自建 VQA-caption-grounding。
   - Stage B：导航/跟踪 BC 或 flow matching，学习动作。
   - Stage C：辅助几何监督，预测目标相对位置/深度/yaw。
   - Stage D：RFT/RL 或 DAgger-style 数据聚合，修正闭环失败。
   - Stage E：部署蒸馏、量化、KV cache、CUDA graph、异步 action chunking。

6. **验证指标**
   - 任务成功率 SR、SPL/路径效率、navigation error。
   - 碰撞率、最小障碍距离、失联恢复、LAND 误触发率。
   - 推理延迟、控制频率、单次飞行耗电。
   - seen/unseen map、seen/unseen object、weather/time-of-day 泛化。

## 5. 技术趋势判断

### 5.1 从“模块化 UAV 自动飞行”走向“VLA + 安全控制”

传统无人机系统是 perception-mapping-planning-control 串联，可靠但语义弱；新工作试图用 VLM/VLA 统一语言、视觉、动作。但纯生成动作存在安全风险，VLA-AN 的 waypoint + geometric safety correction 可能比纯端到端更快落地。

### 5.2 低空 UAV domain gap 是硬问题

通用 VLM/MLLM 的训练分布以地面视角和普通图像为主，低空 UAV 图像的远小目标、密集重复纹理、俯视方向、尺度变化会显著破坏 grounding。UAVBench、MM-UAVBench、UAVReason 都在证明这一点。未来 UAV 基座模型不能只拿通用 MLLM 做 prompt engineering，需要 UAV-native instruction tuning 或预训练。

### 5.3 3D-GS 会成为 UAV 数据引擎

VLA-AN 用 3D-GS 做高保真数据，ANWM 用已有 AVLN simulators replay 和视角投影；两者共同说明：无人机需要高质量 3D 视觉/几何数据。3D-GS 的优势是真实纹理、连续几何、可渲染多视角，对 sim-to-real 友好。

### 5.4 世界模型还没取代策略，但会成为长航程规划模块

ANWM 显示世界模型可以生成候选轨迹未来视觉并改善导航，但导航 SR 提升还不算压倒性。短期更现实的形态是：VLA 负责局部 reactive 控制，世界模型负责长程候选路径想象和风险评估。

### 5.5 机载部署从“可运行”到“够实时”仍差一截

VLA-AN 的 2-3 Hz 已经很有意义，但高速无人机通常需要更高频控制闭环。未来可能需要：

- 小模型 VLA / action head distillation；
- 异步推理 + action chunking；
- onboard VLM 只做关键帧理解；
- 传统控制器负责高频稳定，VLA 负责低频语义决策。

## 6. 关键空白

1. **真实世界公开飞行数据少**：大部分强结果仍在 AirSim/Unity/UE 仿真，真实机载 benchmark 缺失。
2. **安全评测不足**：碰撞率、最小障碍距离、失控恢复、通信丢失、动态障碍等没有统一评测。
3. **长程记忆与实时性冲突**：AerialVLA 靠 reactive 简化带来泛化，但牺牲回溯；长历史模型又会增加延迟。
4. **多机协同仍偏 agentic planning**：TACOS/SwarmGPT 类工作更像 LLM 调度器，还没形成真正 swarm foundation policy。
5. **动作空间不统一**：有的输出 waypoint，有的输出 velocity，有的输出 action token，有的输出 LAND/replan，难以跨论文比较。
6. **低空视觉基座与控制基座尚未打通**：UAVBench/UAVReason 提供理解能力，AerialVLA/VLA-AN 提供控制能力，但端到端预训练还没有统一范式。

## 7. 推荐阅读优先级

**第一优先级，直接决定 UAV 基座模型路线：**

1. AerialVLA: A Vision-Language-Action Model for UAV Navigation via Minimalist End-to-End Control。
2. VLA-AN: An Efficient and Onboard Vision-Language-Action Framework for Aerial Navigation。
3. Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space。

**第二优先级，理解数据和评测生态：**

4. UAVBench and UAVIT-1M。
5. UAVReason。
6. MM-UAVBench。

**第三优先级，补历史与综述：**

7. AerialVLN。
8. OpenFly。
9. FlightGPT。
10. Vision-and-Language Navigation for UAVs: Progress, Challenges, and a Research Roadmap。

## 8. 参考链接

- AerialVLA: https://arxiv.org/abs/2603.14363
- VLA-AN: https://arxiv.org/abs/2512.15258
- Aerial World Model / ANWM: https://arxiv.org/abs/2512.21887
- UAVReason: https://arxiv.org/abs/2604.05377
- UAVBench/UAVIT-1M: https://arxiv.org/abs/2603.14336 ，项目页 https://uavbench.github.io/
- MM-UAVBench: https://arxiv.org/abs/2512.23219
- AerialVLN: https://arxiv.org/abs/2308.06735
- FlightGPT: https://arxiv.org/abs/2505.12835
- UAV-VLN Roadmap: https://arxiv.org/abs/2604.13654
- OpenFly: https://arxiv.org/abs/2502.18041
- AirVLA / π, But Make It Fly: https://airvla.github.io
- UAV-Track VLA: https://github.com/Hub-Tian/UAV-Track_VLA
- RaceVLA: https://arxiv.org/abs/2503.02572
- UAV-VLA mission generation: https://doi.org/10.1109/HRI61500.2025.10974117
