---
date: 2026-04-29
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-04-29（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604281600 TO 202604291559])
```

## Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising

- **arXiv**: <https://export.arxiv.org/abs/2604.26694v1>
- **ID**: `2604.26694v1`
- **分类**: cs.RO, cs.AI, cs.CV
- **作者**: Jun Guo, Qiwei Li, Peiyan Li, Zilong Chen, Nan Sun, Yifei Su, Heyun Wang, Yuan Zhang, Xinghang Li, Huaping Liu
- **核心机构：** Tsinghua University; Peking University
- **总结状态**: 已总结
- **标签**: 世界模型, 4D重建, 视频扩散, 动作解码, 异步去噪
- **PDF**: [Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising.pdf](../pdfs/Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising.pdf)

### 摘要（自动抓取）

We propose X-WAM, a Unified 4D World Model that unifies real-time robotic action execution and high-fidelity 4D world synthesis (video + 3D reconstruction) in a single framework, addressing the critical limitations of prior unified world models (e.g., UWM) that only model 2D pixel-space and fail to balance action efficiency and world modeling quality. To leverage the strong visual priors of pretrained video diffusion models, X-WAM imagines the future world by predicting multi-view RGB-D videos, and obtains spatial information efficiently through a lightweight structural adaptation: replicating the final few blocks of the pretrained Diffusion Transformer into a dedicated depth prediction branch for the reconstruction of future spatial information. Moreover, we propose Asynchronous Noise Sampling (ANS) to jointly optimize generation quality and action decoding efficiency. ANS applies a specialized asynchronous denoising schedule during inference, which rapidly decodes actions with fewer steps to enable efficient real-time execution, while dedicating the full sequence of steps to generate high-fidelity video. Rather than entirely decoupling the timesteps during training, ANS samples from their joint distribution to align with the inference distribution. Pretrained on over 5,800 hours of robotic data, X-WAM achieves 79.2% and 90.7% average success rate on RoboCasa and RoboTwin 2.0 benchmarks, while producing high-fidelity 4D reconstruction and generation surpassing existing methods in both visual and geometric metrics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：
  - **一句话**：把“动作执行”和“高保真 4D 世界生成”统一到同一扩散式世界模型中，并用异步去噪实现“动作快、世界好”。
  - **破局点**：既有统一世界模型多停留在 2D 像素层，难兼顾动作解码效率与世界建模质量。
  - **方法**：
    - 以预训练视频扩散模型为先验，预测未来多视角 **RGB-D** 视频以支撑 4D 重建。
    - 通过复制 Diffusion Transformer 末端少量 block 构建轻量 **深度分支**，高效获得未来空间信息。
    - 提出 **ANS（Asynchronous Noise Sampling）**：推理时动作用更少去噪步快速解码，视频用完整步数保证质量；训练时从其联合分布采样以贴合推理分布。
  - **结果（摘要）**：在 RoboCasa / RoboTwin 2.0 上报告较高成功率（79.2% / 90.7%），并在视觉与几何指标上超过既有方法。
  - **局限**：依赖大规模机器人数据预训练与算力；异步调度与多视角 RGB-D 预测在不同任务上的鲁棒性仍需更细化证据。
- 后续操作：如需落地到你的项目，可重点看 ANS 的推理调度如何与控制频率/规划粒度对齐。


---

## AGEL-Comp: A Neuro-Symbolic Framework for Compositional Generalization in Interactive Agents

- **arXiv**: <https://export.arxiv.org/abs/2604.26522v1>
- **ID**: `2604.26522v1`
- **分类**: cs.AI, cs.LG, cs.LO, cs.MA, cs.SC
- **作者**: Mahnoor Shahid, Hannes Rothe
- **核心机构：** 未提取
- **总结状态**: 已总结
- **标签**: 神经符号, 组合泛化, 因果图, ILP, LLM代理
- **PDF**: [AGEL-Comp A Neuro-Symbolic Framework for Compositional Generalization in Interactive Agents.pdf](../pdfs/AGEL-Comp A Neuro-Symbolic Framework for Compositional Generalization in Interactive Agents.pdf)

### 摘要（自动抓取）

Large Language Model (LLM)-based agents exhibit systemic failures in compositional generalization, limiting their robustness in interactive environments. This work introduces AGEL-Comp, a neuro-symbolic AI agent architecture designed to address this challenge by grounding actions of the agent. AGEL-Comp integrates three core innovations: (1) a dynamic Causal Program Graph (CPG) as a world model, representing procedural and causal knowledge as a directed hypergraph; (2) an Inductive Logic Programming (ILP) engine that synthesizes new Horn clauses from experiential feedback, grounding symbolic knowledge through interaction; and (3) a hybrid reasoning core where an LLM proposes a set of candidate sub-goals that are verified for logical consistency by a Neural Theorem Prover (NTP). Together, these components operationalize a deduction--abduction learning cycle: enabling the agent to deduce plans and abductively expand its symbolic world model, while a neural adaptation phase keeps its reasoning engine aligned with new knowledge. We propose an evaluation protocol within the \texttt{Retro Quest} simulation environment to probe for compositional generalization scenarios to evaluate our AGEL agent. Our findings clearly indicate the better performance of our AGEL model over pure LLM-based models. Our framework presents a principled path toward agents that build an explicit, interpretable, and compositionally structured understanding of their world.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：
  - **一句话**：用“显式符号世界模型 + 逻辑归纳 + 神经一致性校验”补齐纯 LLM 代理在组合泛化上的系统性短板。
  - **破局点**：纯 LLM 在交互环境里容易产生看似合理但逻辑不稳的计划，且难把新经验沉淀为可组合规则。
  - **方法**：
    - 动态 **CPG（Causal Program Graph）**：以有向超图表达过程与因果知识，作为可解释、可增量的世界模型。
    - **ILP**：从交互反馈中归纳新的 Horn 子句，把经验“固化”为规则库。
    - 混合推理：LLM 提出候选子目标，**NTP（Neural Theorem Prover）**做逻辑一致性验证，形成 deduction–abduction 学习循环。
  - **结果（摘要）**：在 Retro Quest 仿真环境的组合泛化评测中优于纯 LLM 基线。
  - **局限**：多组件系统工程复杂度高；评测依赖特定仿真环境，跨环境/长时交互的稳定性需要更多证据。
- 后续操作：如果你要复用其思路，建议先抽象出“可检验的世界状态/规则表示”，再考虑把 LLM 放在“提案者”而非“裁判者”的位置。


---

## DepthPilot: From Controllability to Interpretability in Colonoscopy Video Generation

- **arXiv**: <https://export.arxiv.org/abs/2604.26232v1>
- **ID**: `2604.26232v1`
- **分类**: cs.CV, cs.AI
- **作者**: Junhu Fu, Ke Chen, Weidong Guo, Shuyu Liang, Jie Xu, Chen Ma, Kehao Wang, Shengli Lin, Zeju Li, Yuanyuan Wang, Yi Guo, Shuo Li
- **核心机构：** College of Biomedical Engineering, Fudan University; Key Laboratory; Department of Endoscopy, Fudan University; Shanghai Cancer Center; Endoscopy Center; Endoscopy Research Institute
- **总结状态**: 已总结
- **标签**: 视频生成, 深度一致性, 医学影像, 几何约束, 世界模型
- **PDF**: [DepthPilot From Controllability to Interpretability in Colonoscopy Video Generation.pdf](../pdfs/DepthPilot From Controllability to Interpretability in Colonoscopy Video Generation.pdf)

### 摘要（自动抓取）

Controllable medical video generation has achieved remarkable progress, but it still lacks interpretability, which requires the alignment of generated contents with physical priors and faithful clinical manifestations. To push the boundaries from mere controllability to interpretability, we propose DepthPilot, the first interpretable framework for colonoscopy video generation. This work takes a step toward trustworthy generation through two synergistic paradigms. To achieve explicit geometric grounding, DepthPilot devises a prior distribution alignment strategy, injecting depth constraints into the diffusion backbone via parameter-efficient fine-tuning to ensure anatomical fidelity. To enhance intrinsic nonlinear modeling under these geometric constraints, DepthPilot employs an adaptive spline denoising module, replacing fixed linear weights with learnable spline functions to capture complex spatio-temporal dynamics. Extensive evaluations across three public datasets and in-house clinical data confirm DepthPilot's robust ability to produce physically consistent videos. It achieves FID scores below 15 across all benchmarks and ranks first in clinician assessments, bridging the gap between "visually realistic" and "clinically interpretable". Moreover, DepthPilot-generated videos are expected to enable reliable 3D reconstruction, facilitating surgical navigation and blind region identification, and serve as a foundation toward the colorectal world model.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：
  - **一句话**：把“深度几何先验”显式注入扩散生成过程，让结肠镜视频不仅逼真，还更几何一致、可解释、可用于 3D 下游。
  - **破局点**：医学视频生成在“可控”上进展快，但常缺少与物理/解剖先验对齐的“可解释性”，导致几何不稳、临床难用。
  - **方法**：
    - **先验分布对齐 + 参数高效微调**：在扩散骨干中注入深度约束以保证解剖/几何忠实度。
    - **自适应样条去噪**：用可学习样条函数替代固定线性权重，更好建模几何约束下的非线性时空动态。
  - **结果（摘要）**：在多套公开数据与内部临床数据上，FID < 15；临床医生主观评估排名第一；强调“视觉真实”到“临床可解释”的跨越。
  - **局限**：摘要未说明不同病灶/器械/成像条件下的泛化边界；“可解释性”是否直接转化为导航/重建的量化收益仍需闭环验证。
- 后续操作：若要用于世界模型/导航，建议优先关注其深度约束的注入位置与约束强度对重建误差的影响。


---

## Lifting Embodied World Models for Planning and Control

- **arXiv**: <https://export.arxiv.org/abs/2604.26182v1>
- **ID**: `2604.26182v1`
- **分类**: cs.CV, cs.AI, cs.LG
- **作者**: Alex N. Wang, Trevor Darrell, Pavel Izmailov, Yutong Bai, Amir Bar
- **核心机构：** 未提取
- **总结状态**: 已总结
- **标签**: 世界模型, 高层动作, 降维规划, CEM, 人体控制
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models of embodied agents predict future observations conditioned on an action taken by the agent. For complex embodiments, action spaces are high-dimensional and difficult to specify: for example, precisely controlling a human agent requires specifying the motion of each joint. This makes the world model hard to control and expensive to plan with as search-based methods like CEM scale poorly with action dimensionality. To address this issue, we train a lightweight policy that maps high-level actions to sequences of low-level joint actions. Composing this policy with the frozen world model produces a lifted world model that predicts a sequence of future observations from a single high-level action. We instantiate this framework for a human-like embodiment, defining the high-level action space as a small set of 2D waypoints annotated on the current observation frame, each specifying a near-term goal position for a leaf joint (pelvis, head, hands). Waypoints are low-dimensional, visually interpretable, and easy to specify manually or to search over. We show that the lifted world model substantially outperforms searching directly in low-level joint space ($3.8\times$ lower mean joint error to the goal pose), while remaining more compute-efficient and generalizing to environments unseen by the policy.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：
  - **一句话**：用“高层可视化 waypoint 动作”替代“高维关节动作”去规划，把世界模型的可控性与规划效率同时拉上来。
  - **破局点**：在高维动作空间中用 CEM 等搜索式方法规划会随维度急剧恶化，世界模型既难控又昂贵。
  - **方法**：
    - 训练轻量策略把 **高层动作 → 低层关节动作序列**；
    - 将该策略与冻结世界模型组合，得到 lifted world model：一次高层动作即可预测未来观测序列；
    - 高层动作设计为当前帧上少量 **2D waypoints**（对应骨盆/头/手等末端的短期目标位置），低维、直观、易搜索。
  - **结果（摘要）**：相比直接在低层关节空间搜索，平均关节到目标姿态误差更低（摘要给出约 3.8×），计算更高效，并可泛化到未见环境。
  - **局限**：waypoint 动作空间的表达上限受设计约束；策略误差与世界模型误差叠加时的长时稳定性需要更系统评测。
- 后续操作：如果你要用在 UAV/具身规划里，这一招最值得借鉴的是“可视化、可搜索的高层动作接口”如何定义。


---

## Observable Neural ODEs for Identifiable Causal Forecasting in Continuous Time

- **arXiv**: <https://export.arxiv.org/abs/2604.26070v1>
- **ID**: `2604.26070v1`
- **分类**: cs.LG, math.OC, math.ST, q-bio.QM
- **作者**: Jennifer Wendland, Nicolas Freitag, Maik Kschischo
- **核心机构：** University of Koblenz
- **总结状态**: 已总结
- **标签**: 因果推断, Neural ODE, 可观测性, 连续时间, 反事实预测
- **PDF**: [Observable Neural ODEs for Identifiable Causal Forecasting in Continuous Time.pdf](../pdfs/Observable Neural ODEs for Identifiable Causal Forecasting in Continuous Time.pdf)

### 摘要（自动抓取）

Causal inference in continuous-time sequential decision problems is challenged by hidden confounders. We show that, in latent state-space models with time-varying interventions, observability of the latent dynamics from observed data is necessary for identifying dynamic treatment effects, linking control-theoretic observability to causal identifiability, even when hidden confounders affect both treatments and outcomes. We derive a continuous-time adjustment formula expressing potential outcome distributions under treatment trajectories via the measurement model, latent dynamics, and the filtering distribution over latent states given observed histories. We propose Observable Neural ODEs (ObsNODEs), Neural ODE models in observable normal form for causal forecasting. ObsNODEs learn continuous-time dynamics with states reconstructible from observations, enabling outcome prediction under alternative treatment paths. Experiments on synthetic cancer data, semi-synthetic data based on MIMIC-IV, and real-world sepsis data show strong performance over recent sequence models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：
  - **一句话**：把“潜在动力学可观测”作为连续时间因果辨识的必要条件，并据此设计可辨识的 Neural ODE 结构来做反事实预测。
  - **破局点**：隐藏混杂使连续时间动态治疗效应难辨识；仅靠黑盒序列预测并不能保证反事实可用。
  - **方法**：
    - 连接控制论可观测性与因果可辨识性：在带时变干预的潜在状态空间模型中，只有潜在状态可从观测重建，治疗效应才可辨识（摘要表述）。
    - 推导连续时间调整公式，用测量模型、潜在动力学与滤波分布表达不同治疗轨迹下的潜在结果分布。
    - 提出 **ObsNODE**：将 Neural ODE 约束在“可观测标准形”，确保状态可由观测重建，从而支持替代治疗路径预测。
  - **结果（摘要）**：在合成癌症、基于 MIMIC-IV 的半合成与真实脓毒症数据上表现优于近期序列模型。
  - **局限**：可观测性约束可能更敏感于噪声/缺失；实践中仍需明确干预机制与数据收集过程前提，避免“预测更准≠因果更真”。
- 后续操作：如果你关心 world model 与因果的结合，这篇更像是“连续时间动力学 + 因果辨识”的形式化抓手。


---

