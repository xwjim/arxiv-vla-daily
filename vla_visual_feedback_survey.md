# VLA 视觉反馈、泛化与鲁棒性调研

更新时间：2026-04-30

## 1. 问题定义

本文把 VLA 中的“视觉反馈”定义为：模型在执行前、执行中或执行后，利用当前图像、历史图像、视频预测、内部视觉特征或视觉语言推理结果，对动作进行验证、风险判断、失败诊断、纠错恢复或再训练。

它与普通视觉输入的区别在于：

- 普通 VLA：`image + instruction -> action`
- 视觉反馈型 VLA：`image/video/action history -> progress/risk/failure/correction -> refined action`

核心研究问题：

1. VLA 如何知道自己即将失败？
2. 视觉信号如何区分“任务未完成”“执行偏差”“规划错误”“物理接触失败”？
3. 失败之后，模型如何从视觉状态中生成可执行恢复动作？
4. 这些机制如何跨任务、跨场景、跨机器人泛化？

## 2. 论文族谱

### 2.1 基础 VLA 与通用机器人策略

| 工作 | 年份 | 代表文件/链接 | 主要贡献 | 与视觉反馈的关系 |
|---|---:|---|---|---|
| RT-1 | 2022 | https://robotics-transformer1.github.io/ | Transformer-based language-conditioned robot policy | 以视觉观测和语言指令直接预测动作，偏开环 |
| PaLM-E | 2023 | https://palm-e.github.io/ | Embodied multimodal language model | 强化视觉语言语义推理，但动作控制仍非核心 |
| RT-2 | 2023 | https://robotics-transformer2.github.io/ | 将 web-scale VLM 知识迁移到动作 token | 证明视觉语义预训练可提升开放世界泛化 |
| Open X-Embodiment / RT-X | 2023 | https://robotics-transformer-x.github.io/ | 跨机器人、跨任务数据混训 | 通过数据多样性增强视觉鲁棒性 |
| Octo | 2024 | https://octo-models.github.io/ | 开源通用机器人策略 | 支持多机器人、多输入输出规格，适合做反馈模块基座 |
| OpenVLA | 2024 | https://openvla.github.io/ | 开源 7B VLA，DINOv2+SigLIP+Llama | 常作为 SAFE、FailSafe 等反馈方法的 backbone |
| pi0 / pi0-FAST | 2024-2025 | https://www.physicalintelligence.company/research | flow/action expert 架构，连续动作生成 | 更适合高频闭环与 action chunk 纠错 |
| GR00T N1 | 2025 | https://research.nvidia.com/publication/2025-03_nvidia-isaac-gr00t-n1-open-foundation-model-humanoid-robots | humanoid foundation model，双系统架构 | 体现“慢思考 VLM + 快动作模型”的闭环潜力 |

总结：基础 VLA 的主线是视觉语义泛化和动作生成，但大多数没有显式验证器、失败检测器和恢复策略，因此在真实扰动下仍脆弱。

### 2.2 失败检测与视觉推理

| 工作 | 年份 | 代表文件/链接 | 输入 | 输出 | 核心创新 | 局限 |
|---|---:|---|---|---|---|---|
| AHA | 2024/ICLR 2025 | https://aha-vlm.github.io/ | 图像/视频 + 任务描述 | 自由文本失败解释 | 用 FailGen 从 RLBench 成功轨迹程序化扰动，生成失败推理数据；把失败检测建模为 VLM free-form reasoning | 输出主要是文本解释，不直接给底层动作 |
| SAFE | 2025/NeurIPS | https://vla-safe.github.io/ | VLA 内部 latent feature 序列 | failure score | 发现 VLA latent 已含通用成功/失败信息；用 MLP/LSTM + conformal prediction 做早期失败检测 | 主要检测失败，不负责诊断和恢复 |
| Guardian | 2025 | https://openreview.net/forum?id=wps46mtC9B | 多视角高分辨率图像 + prompt | 二分类、细粒度类别、推理链 | 自动合成 planning/execution failure，构建 RLBench-Fail、BridgeDataV2-Fail、UR5-Fail；多视角 VLM 失败推理 | 偏外部 VLM 监督，实时性和动作接口仍需优化 |
| RoboFAC | 2025 | https://mint-sjtu.github.io/RoboFAC.io/ | 失败轨迹 + QA | 任务理解、失败分析、失败纠正文本 | 9,440 条错误轨迹、78,623 QA；轻量多模态模型；作为 VLA 外部 supervisor 提升真实任务成功率 | correction 多为语言级指导，动作级闭环仍有限 |

差异凝练：

- AHA 偏“失败解释能力”：让 VLM 看懂为什么失败。
- SAFE 偏“及时检测能力”：用 VLA 自身 latent 做轻量、可校准检测。
- Guardian 偏“多视角、细粒度失败类别”：覆盖 planning error 和 execution error。
- RoboFAC 偏“失败分析 + 纠错文本 + 数据集”：面向真实恢复管线。

### 2.3 失败预测与动作纠错

| 工作 | 年份 | 代表文件/链接 | 机制 | 关键创新 | 局限 |
|---|---:|---|---|---|---|
| FPC-VLA | 2025/2026 | https://www.sciencedirect.com/science/article/pii/S095741742600655X | VLA + VLM supervisor + dual-stream action fusion | 在 keyframe 触发 VLM supervisor，预测动作是否可行，并输出方向/幅度修正；从 RLDS 自动生成 failure prediction/correction 数据 | 主要围绕 gripper 状态变化，对 post-grasp 滑落/接触力失败覆盖不足 |
| FailSafe | 2025 | https://huggingface.co/papers/2510.01642 | failure generation + executable recovery action | 自动生成失败案例并配对可执行恢复动作；可接 OpenVLA、OpenVLA-OFT、pi0-FAST | 主要在 ManiSkill 等仿真任务验证，真实世界泛化仍需加强 |
| ViFailback | 2025 | https://hongsong-wang.github.io/RO_arXiv_07_12/ | visual symbols + failure diagnosis + correction guidance | 通过显式视觉符号提升标注效率，包含真实轨迹和 VQA | 需要进一步验证符号提示在复杂开放场景下的鲁棒性 |

差异凝练：

- FPC-VLA 是“执行前/关键帧预测 + 动作修正”。
- FailSafe 是“失败状态 + 可执行恢复动作”。
- ViFailback 是“视觉符号辅助的诊断与纠正数据构建”。

从研究潜力看，FailSafe 的“可执行恢复动作”比纯文本解释更接近 VLA 闭环控制，但仍缺少统一的跨 embodiment action interface。

### 2.4 预测式视觉反馈与世界模型

| 工作 | 年份 | 链接 | 核心思路 | 与反馈的关系 |
|---|---:|---|---|---|
| Video Prediction Policy | 2024 | https://huggingface.co/papers/2412.14803 | 通过视频预测学习动态视觉表征 | 让视觉表征包含“状态会如何变化” |
| Unified World Models | 2025 | https://huggingface.co/papers/2504.02792 | 统一 action diffusion、video diffusion、forward/inverse dynamics | 可用未来视觉 rollout 评估动作 |
| VideoVLA | 2025 | https://videovla-nips2025.github.io/ | 基于视频生成模型，同时预测动作序列和未来视觉结果 | 把“视觉想象”直接接入 VLA 动作生成 |

这一方向的关键转变：

- 检测式反馈：当前是否失败。
- 预测式反馈：如果执行这个动作，未来是否会失败。

更适合做 model-predictive VLA supervisor。

### 2.5 结构化视觉约束与闭环控制

| 工作 | 年份 | 链接 | 核心思路 | 可借鉴点 |
|---|---:|---|---|---|
| SayCan | 2022 | https://say-can.github.io/ | LLM plan + affordance value | 把语言可行性与环境可行性分离 |
| Code as Policies | 2022 | https://code-as-policies.github.io/ | LLM 生成可执行策略代码 | 适合把视觉反馈写成 explicit monitor |
| VoxPoser | 2023 | https://voxposer.github.io/ | LLM/VLM 生成 3D value maps | 把语言目标转成空间价值场 |
| ReKep | 2024 | https://rekep-robot.github.io/ | 关系关键点约束与优化 | 将视觉反馈结构化为可优化约束 |

这类工作不是典型端到端 VLA，但对“泛化型视觉反馈”很关键：显式关键点、约束、value map 通常比纯 action token 更容易跨物体和场景泛化。

## 3. 方法差异的系统对比

| 维度 | 开环 VLA | SAFE 类检测器 | AHA/Guardian/RoboFAC 类 VLM 监督器 | FPC-VLA/FailSafe 类纠错器 | 世界模型/VideoVLA |
|---|---|---|---|---|---|
| 主要目标 | 完成任务 | 及时发现失败 | 解释失败原因 | 修正或恢复动作 | 预测未来结果 |
| 输入 | 当前图像+指令 | VLA hidden states/轨迹 | 图像/多视角/视频+prompt | 图像+动作+失败状态 | 图像+动作+语言 |
| 输出 | 动作 | failure score | 文本解释/类别 | correction/recovery action | 未来视频/动作 |
| 泛化来源 | 预训练和数据规模 | VLA latent 中的通用失败特征 | VLM 语义推理和失败数据 | 可执行恢复数据 | 动态建模和视觉想象 |
| 实时性 | 较好 | 好 | 中等或较慢 | 中等 | 通常较慢 |
| 可解释性 | 低 | 中 | 高 | 中高 | 中 |
| 可执行性 | 高 | 低 | 低到中 | 高 | 中到高 |
| 当前短板 | 缺少自检 | 不会恢复 | 文本难落到动作 | 恢复数据稀缺 | 代价高、误差累积 |

## 4. 现有工作共同动机

1. 成功轨迹偏置：大多数机器人数据只包含成功演示，模型不知道失败状态长什么样。
2. 开环执行脆弱：action chunk 或 autoregressive action 一旦偏离，误差会累积。
3. 视觉语义强但物理反馈弱：VLM 能识别物体和关系，但不一定知道接触、滑落、夹持稳定性。
4. failure data 稀缺：真实机器人失败数据昂贵且不安全，推动程序化扰动、仿真合成、多视角标注。
5. 泛化检测比单任务检测更重要：VLA 是 generalist policy，检测器也必须跨任务泛化。
6. 文本解释不足以闭环：失败解释需要转成机器人可执行的恢复动作。

## 5. 可优化方向

### 5.1 从“失败检测”走向“风险预测”

现有 SAFE/AHA/RoboFAC 多数在失败已经出现或接近出现时检测。更强的问题定义是：

```text
Given current observation, instruction, and candidate action chunk,
predict whether executing this chunk will lead to failure within H steps.
```

可优化点：

- 将 action proposal 纳入 verifier 输入，而不是只看视觉状态。
- 输出 time-to-failure，而不是单一 failure score。
- 用 conformal prediction 或 risk-sensitive threshold 保证低漏报率。
- 区分 recoverable risk 和 catastrophic risk。

### 5.2 从“文本纠错”走向“可执行恢复”

AHA、RoboFAC、Guardian 的文本解释有助于理解，但 VLA 需要动作。

可优化点：

- 构建 `failure state -> recovery trajectory` 数据。
- 将恢复动作表示成统一 action schema：delta pose、keypoint target、subgoal image、language subgoal。
- 设计 two-level recovery：高层选择恢复策略，低层生成连续动作。
- 将恢复动作与原始 policy 融合，而不是完全替换。

### 5.3 从单视角图像走向多模态闭环

FPC-VLA 明确提到仅视觉无法处理 post-grasp slipping/dropping，需要力/触觉/顺应控制。

可优化点：

- wrist camera + third-person camera + depth + tactile/force 的多模态 verifier。
- 对接触阶段单独训练 contact-aware feedback head。
- 对遮挡任务使用 active vision：先移动相机/机械臂观察，再执行。
- 区分 pre-contact、in-contact、post-contact 三阶段视觉反馈。

### 5.4 从离线标注走向自举数据飞轮

现有失败数据多来自程序化扰动或人工/半自动 QA。

可优化点：

- 部署 VLA 时在线记录失败、早停、人工接管和恢复片段。
- 用 VLM 初标失败原因，再由少量人工验证。
- 将失败样本加入 DPO/RL/behavior cloning 的 post-training。
- 对高不确定性状态主动采集数据，形成 active failure mining。

### 5.5 从“检测准确率”走向完整闭环评测

只看 failure classification accuracy 不够。

建议指标：

- Success rate under perturbation：扰动后的最终成功率。
- Detection latency：提前多少步发现失败。
- False alarm cost：误报警导致的时间/动作损耗。
- Recovery success rate：失败后恢复成功率。
- Intervention rate：需要人工接管比例。
- Cross-task generalization：未见任务失败检测。
- Cross-embodiment generalization：未见机器人/相机配置。
- Physical robustness：遮挡、滑落、碰撞、目标移动、光照变化。
- Calibration quality：风险分数与真实失败概率的一致性。

## 6. 建议研究切入点

### 方向一：Action-conditioned Visual Risk Predictor

动机：SAFE 看 latent，但没有显式看候选动作；FPC-VLA 看动作可行性，但触发点和失败类型有限。

方案：

```text
o_t, instruction, candidate action chunk a_{t:t+k}
    -> visual-action risk model
    -> risk score, failure type, time-to-failure
```

创新点：

- 以候选 action chunk 为条件做未来失败预测。
- 使用 VLA hidden state + raw visual tokens + action embeddings。
- 可插拔到 OpenVLA、pi0-FAST、RDT 等模型。

### 方向二：Executable Recovery Dataset for VLA

动机：AHA/RoboFAC 提供失败解释，FailSafe 提供可执行恢复但仍偏仿真。

方案：

```text
failure video + task instruction + diagnosis
    -> recovery subgoal
    -> recovery action trajectory
    -> resumed success trajectory
```

创新点：

- 同时包含文本诊断和动作级恢复。
- 将失败恢复分为 re-localize、re-grasp、re-align、retreat、retry、ask-human。
- 建立 sim-to-real 和 real-to-real 的恢复泛化 benchmark。

### 方向三：Predictive Visual Supervisor with Video Rollout

动机：VideoVLA/UWM 表明未来视觉结果与动作可靠性相关，但尚未形成标准 VLA supervisor。

方案：

```text
candidate actions -> predicted future frames
future frames + instruction -> goal progress / risk / safety
select or refine action
```

创新点：

- 将视频生成模型作为 action verifier。
- 用目标达成度、物体稳定性、碰撞风险评估未来 rollout。
- 可做 test-time reranking 或 MPC-style correction。

### 方向四：Structured Visual Feedback via Keypoints/Constraints

动机：端到端 VLA 泛化差，VoxPoser/ReKep 说明显式视觉约束可提升可迁移性。

方案：

```text
VLM detects task-relevant objects/keypoints/relations
constraint monitor tracks whether relation is improving
controller corrects delta pose
```

创新点：

- 将视觉反馈表示为 progress constraints。
- 对 long-horizon task 做阶段级 monitor。
- 可解释、易调试、适合工业/精细操作。

## 7. 推荐优先阅读顺序

1. RT-2、OpenVLA、pi0：理解 VLA 基础范式。
2. Open X-Embodiment、DROID、LIBERO、SIMPLER：理解数据和评测生态。
3. AHA、SAFE、RoboFAC、Guardian：理解失败检测与推理。
4. FPC-VLA、FailSafe、ViFailback：理解纠错和恢复。
5. UWM、VideoVLA、Video Prediction Policy：理解预测式视觉反馈。
6. VoxPoser、ReKep：理解结构化视觉约束。

## 8. 一句话结论

现有 VLA 的泛化主要来自大规模视觉语言预训练和跨机器人演示数据；下一阶段的鲁棒性突破，很可能来自视觉闭环：执行前预测风险、执行中监控偏差、失败后诊断并生成可执行恢复动作，再把失败经验回流到训练中。

