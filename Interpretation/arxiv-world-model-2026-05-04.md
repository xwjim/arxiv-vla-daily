---
date: 2026-05-04
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-04（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605031600 TO 202605041559] OR lastUpdatedDate:[202605031600 TO 202605041559]))
```

## DynoSLAM: Dynamic SLAM with Generative Graph Neural Networks for Real-World Social Navigation

- **arXiv**: <https://export.arxiv.org/abs/2605.02759v1>
- **ID**: `2605.02759v1`
- **分类**: cs.RO, cs.CV
- **作者**: Danil Tokhchukov, Veronika Morozova, Gonzalo Ferrer
- **总结状态**: 已总结
- **标签**: SLAM, 动态环境, GNN, 不确定性建模, 世界模型
- **PDF**: [DynoSLAM Dynamic SLAM with Generative Graph Neural Networks for Real-World Social Navigation.pdf](../pdfs/DynoSLAM Dynamic SLAM with Generative Graph Neural Networks for Real-World Social Navigation.pdf)

### 摘要（自动抓取）

Traditional Simultaneous Localization and Mapping (SLAM) algorithms rely heavily on the static environment assumption, which severely limits their applicability in real-world spaces populated by moving entities, such as pedestrians. In this work, we propose DynoSLAM, a tightly-coupled Dynamic GraphSLAM architecture that integrates socially-aware Graph Neural Networks (GNNs) directly into the factor graph optimization. Unlike conventional approaches that use rigid constant-velocity heuristics or deterministic single-agent neural priors, our framework formulates pedestrian motion forecasting as a stochastic World Model. By utilizing Monte Carlo rollouts from a trained GNN, we capture the multimodal epistemic uncertainty of human interactions and embed it into the SLAM graph via a dynamic Mahalanobis distance factor. We demonstrate through extensive simulated experiments that this stochastic formulation not only maintains highly accurate retrospective tracking but also prevents the optimization failures caused by the deterministic "argmax problem". Ultimately, extracting the empirical mean and covariance matrices of future pedestrian states provides a mathematically rigorous, probabilistic safety envelope for downstream local planners, enabling anticipatory and collision-free robot navigation in densely crowded environments.

### 一、论文元数据

- **标题**: DynoSLAM: Dynamic SLAM with Generative Graph Neural Networks for Real-World Social Navigation
- **核心机构**: 未提及
- **一句话本质**: 把“行人运动预测”做成带不确定性的随机世界模型（GNN + Monte Carlo rollout），并作为因子直接嵌入 GraphSLAM 优化，提升拥挤动态环境下的定位/建图鲁棒性与可用安全边界。

### 二、破局点 (The Gap)

- **传统假设**: 经典 SLAM 假设环境静态，遇到行人等动态实体时容易失效。
- **常见补丁**: 常速模型或确定性单模态先验易出现“argmax 问题”（选错模式导致优化崩溃）。

### 三、核心机制 (How it works)

- **动态 GraphSLAM**: 将社会交互感知的 GNN 直接耦合进因子图优化，而非事后剔除动态点。
- **随机世界模型**: 用训练好的 GNN 做 Monte Carlo rollouts，得到未来行人状态的经验均值与协方差，显式刻画多模态与认知不确定性。
- **因子注入**: 以动态 Mahalanobis 距离因子将预测分布嵌入 SLAM 图，从而让优化“知道不确定性有多大”。
- **下游接口**: 均值/协方差形成概率安全包络（safety envelope），供局部规划器做前瞻避碰。

### 四、关键发现 (Key Insights)

- 在仿真实验中，随机表述既保持高精度回溯跟踪，又能避免确定性预测引发的优化失败。
- 把不确定性显式写入因子图，比单点预测更适合拥挤场景的社会导航。

### 五、局限与后续 (Limitations / Next Steps)

- 摘要未披露真实数据集验证与计算开销；建议从 PDF 补齐：实时性、传感器配置、对比基线与拥挤程度分层评测。
- 需要进一步评估 GNN 预测分布失配时对 SLAM 稳定性的影响（分布外人群行为/拥堵形态）。


---

## Shadow-Loom: Causal Reasoning over Graphical World Model of Narratives

- **arXiv**: <https://export.arxiv.org/abs/2605.02475v1>
- **ID**: `2605.02475v1`
- **分类**: cs.AI, cs.CL
- **作者**: David Wilmot
- **总结状态**: 已总结
- **标签**: 图世界模型, 因果推理, 反事实推理, 叙事理解, 工程框架
- **PDF**: [Shadow-Loom Causal Reasoning over Graphical World Model of Narratives.pdf](../pdfs/Shadow-Loom Causal Reasoning over Graphical World Model of Narratives.pdf)

### 摘要（自动抓取）

Stories hold a reader's attention because they have causes, secrets, and consequences. Shadow-Loom is an experimental open-source framework that turns a narrative into a versioned graphical world model and lets two engines act on it: a causal physics grounded in Pearl's ladder of causation and a recently proposed counterfactual calculus over Ancestral Multi-World Networks; and a narrative physics that scores the same graph against four structural reader-states -- mystery, dramatic irony, suspense, and surprise -- in the tradition of Sternberg's curiosity/suspense/surprise triad, with suspense formalised in the structural-affect line of work on story comprehension and computational suspense. Large language models are used only at the boundary: extraction, rendering, and audit; identification, intervention, and counterfactual reasoning are carried out in typed code over the graph. The system is offered as a research artefact rather than as a benchmarked NLP model; code, fixtures, and pipeline are released open source.

### 一、论文元数据

- **标题**: Shadow-Loom: Causal Reasoning over Graphical World Model of Narratives
- **核心机构**: 未提及
- **一句话本质**: 将故事抽取为“可版本化”的图世界模型，在图上用类型化代码做因果/反事实推理与叙事物理评分；LLM 只负责边界的抽取/渲染/审计，不承担核心推理。

### 二、破局点 (The Gap)

- **问题**: 叙事吸引力来自因果与秘密/后果，但纯 LLM 端到端推理难以保证可控性与可验证性。
- **目标**: 把叙事理解转为显式结构（graphical world model），让推理过程可追踪、可干预、可复现。

### 三、核心机制 (How it works)

- **图世界模型**: 将叙事转成版本化图（实体/事件/关系随时间演化）。
- **两类“物理”引擎**:
  - **因果物理**: 基于 Pearl 因果阶梯与一套反事实演算（摘要提到 Ancestral Multi-World Networks 上的 counterfactual calculus）。
  - **叙事物理**: 在同一图上对读者结构状态打分：mystery、dramatic irony、suspense、surprise（与 Sternberg 三分法相关）。
- **LLM 位置**: 只用于边界任务（抽取、渲染、审计）；识别、干预与反事实推理由类型化代码在图上执行。
- **开源工件**: 框架作为 research artefact 提供（代码、fixtures、pipeline）。

### 四、关键发现 (Key Insights)

- 关键价值在于把“叙事推理”从不可控生成转为“可计算的结构化推理”，便于做反事实干预与一致性检查。
- 将“读者状态”作为结构评分对象，为叙事生成/编辑提供可优化的目标信号。

### 五、局限与后续 (Limitations / Next Steps)

- 摘要强调其为研究工件而非 benchmark 模型：缺少统一评测指标/数据集对比；后续可围绕可复现任务集与定量评估补强。
- 叙事抽取质量对下游推理影响很大；需要明确抽取误差的容错与审计流程（哪些错误会破坏因果一致性）。


---

## Closed-Loop CO2 Storage Control With History-Based Reinforcement Learning and Latent Model-Based Adaptation

- **arXiv**: <https://export.arxiv.org/abs/2605.02405v1>
- **ID**: `2605.02405v1`
- **分类**: cs.LG
- **作者**: Sofianos Panagiotis Fotias, Vassilis Gaganis
- **总结状态**: 已总结
- **标签**: 强化学习, 部分可观测, 潜变量动力学, 适应性控制, CO2封存
- **PDF**: [Closed-Loop CO2 Storage Control With History-Based Reinforcement Learning and Latent Model-Based Adaptation.pdf](../pdfs/Closed-Loop CO2 Storage Control With History-Based Reinforcement Learning and Latent Model-Based Adaptation.pdf)

### 摘要（自动抓取）

Closed-loop management of geological CO2 storage requires control policies that adapt to uncertain reservoir behavior while relying on observations that are realistically available during operation. This work formulates CO2 injection and brine-production control as a partially observable sequential decision problem and studies deployable deep reinforcement-learning controllers trained with high-fidelity reservoir simulation. We first compare privileged-state, well-only, history-conditioned, masking-curriculum, and asymmetric teacher-student model-free policies in order to quantify the value of temporal well-response information and training-time privileged simulator states. We then evaluate a latent model-based adaptation pipeline that reuses nominal latent dynamics and retunes controllers under known injector failure, leakage-induced dynamics and reward shift, and compartmentalized reservoir connectivity. The results show that history-conditioned policies recover nearly all of the privileged-state performance while using only deployable well-level information, and that latent model-based retuning outperforms direct model-free retuning under the same scenario-specific real-simulator budget in the abnormal operating cases. The proposed framework therefore provides a simulator-budget-aware alternative to repeated online history matching and re-optimization for closed-loop CO2 storage control.

### 一、论文元数据

- **标题**: Closed-Loop CO2 Storage Control With History-Based Reinforcement Learning and Latent Model-Based Adaptation
- **核心机构**: 未提及
- **一句话本质**: 面向地质 CO2 封存的闭环注入/产卤控制，将问题建模为 POMDP，用“历史条件”策略在仅井口可观测信息下逼近特权状态性能，并用潜变量模型做低预算的异常工况适配再调参。

### 二、破局点 (The Gap)

- **现实约束**: 运行期可用观测有限（井口/井级信息为主），但储层行为高度不确定。
- **常见代价**: 传统在线 history matching + 再优化耗费大量模拟预算，难以频繁迭代。

### 三、核心机制 (How it works)

- **POMDP 表述**: CO2 注入与卤水生产作为部分可观测序列决策问题。
- **策略对比与归因**: 比较 privileged-state、well-only、history-conditioned、masking curriculum、以及 asymmetric teacher-student 等策略，量化“时间序列井响应信息”和“训练期特权状态”对性能的价值。
- **潜变量模型适配**: 复用名义（nominal）潜变量动力学，在异常场景（注入井失效、泄漏导致动力学与奖励偏移、储层连通性分隔等）下做 controller retuning。
- **预算意识**: 强调在相同真实模拟器预算下，潜变量模型再调参优于直接 model-free retuning。

### 四、关键发现 (Key Insights)

- history-conditioned 策略在仅用可部署井级信息的情况下，几乎恢复 privileged-state 的性能。
- 在异常工况下，基于潜变量动力学的再调参更节省模拟预算，可作为反复 history matching 的替代路径。

### 五、局限与后续 (Limitations / Next Steps)

- 依赖高保真模拟器训练与评估；需要明确不同储层分布外情况下的稳健性与失败风险。
- 建议从 PDF 补齐：观测/动作空间定义、奖励设计、安全约束（泄漏/压力上限等）与具体实验规模。


---

## Video Generation with Predictive Latents

- **arXiv**: <https://export.arxiv.org/abs/2605.02134v1>
- **ID**: `2605.02134v1`
- **分类**: cs.CV
- **作者**: Yian Zhao, Feng Wang, Qiushan Guo, Chang Liu, Xiangyang Ji, Jian Zhang, Jie Chen
- **总结状态**: 已总结
- **标签**: 视频VAE, 预测学习, 世界模型, 潜变量扩散, FVD
- **PDF**: [Video Generation with Predictive Latents.pdf](../pdfs/Video Generation with Predictive Latents.pdf)

### 摘要（自动抓取）

Video Variational Autoencoder (VAE) enables latent video generative modeling by mapping the visual world into compact spatiotemporal latent spaces, improving training efficiency and stability. While existing video VAEs achieve commendable reconstruction quality, continued optimization of reconstruction does not necessarily translate into improved generative performance. How to enhance the diffusability of video latents remains a critical and unresolved challenge. In this work, inspired by principles of predictive world modeling, we investigate the potential of predictive learning to improve the video generative modeling. To this end, we introduce a simple and effective predictive reconstruction objective that unifies predictive learning with video reconstruction. Specifically, we randomly discard future frames and encode only partial past observations, while training the decoder to reconstruct the observed frames and predict future ones simultaneously. This design encourages the latent space to encode temporally predictive structures and build a more coherent understanding of video dynamics, thereby improving generation quality. Our model, termed Predictive Video VAE (PV-VAE), achieves superior performance on video generation, with 52% faster convergence and a 34.42 FVD improvement over the Wan2.2 VAE on UCF101. Furthermore, comprehensive analyses demonstrate that PV-VAE not only exhibits favorable scalability, with generative performance improving alongside VAE training, but also yields consistent gains in downstream video understanding, underscoring a latent space that effectively captures temporal coherence and motion priors.

### 一、论文元数据

- **标题**: Video Generation with Predictive Latents
- **核心机构**: 未提及
- **一句话本质**: 用“预测式重建”把视频 VAE 的潜变量训练从纯重建转向包含未来预测的表征学习，从而提升潜空间的可扩散性（diffusability）与生成质量。

### 二、破局点 (The Gap)

- **现象**: 视频 VAE 继续优化重建质量，并不必然提升下游视频生成质量。
- **关键问题**: 潜空间是否“易于扩散建模”（diffusability）是生成性能瓶颈，但缺少直接有效的训练目标。

### 三、核心机制 (How it works)

- **预测重建目标**: 随机丢弃未来帧，只编码部分过去观测；训练 decoder 同时重建已观测帧并预测未来帧。
- **动机**: 迫使潜空间编码可预测的时序结构，形成对视频动力学更一致的表示（借鉴 predictive world modeling 思路）。
- **模型命名**: Predictive Video VAE（PV-VAE）。

### 四、关键发现 (Key Insights)

- 在 UCF101 上，相对 Wan2.2 VAE：收敛速度快 52%，FVD 改善 34.42。
- 分析显示：PV-VAE 具有更好的可扩展性（训练越充分生成越好），并对下游视频理解也有一致增益，暗示潜空间捕获了更强的时序一致性与运动先验。

### 五、局限与后续 (Limitations / Next Steps)

- 需要进一步验证在更复杂数据集与更长时序上的泛化，以及对不同扩散骨干/采样策略的兼容性。
- 建议从 PDF 补齐：PV-VAE 结构细节、丢帧策略超参、与不同 video diffusion pipeline 的组合方式与消融。


---

## TRAP: Tail-aware Ranking Attack for World-Model Planning

- **arXiv**: <https://export.arxiv.org/abs/2605.01950v1>
- **ID**: `2605.01950v1`
- **分类**: cs.LG, cs.AI
- **作者**: Siyuan Duan, Ke Zhang, Xizhao Luo
- **总结状态**: 已总结
- **标签**: 安全, 后门攻击, 轨迹排序, 世界模型规划, DreamerV3
- **PDF**: [TRAP Tail-aware Ranking Attack for World-Model Planning.pdf](../pdfs/TRAP Tail-aware Ranking Attack for World-Model Planning.pdf)

### 摘要（自动抓取）

World models enable long-horizon planning by internally generating and evaluating imagined trajectories, making them a promising foundation for generalist agents. However, this imagination-driven decision process also introduces new security risks. Existing backdoor attacks typically aim to manipulate local features, one-step predictions, or instantaneous policy outputs. While such objectives may suffice for weaker reactive models, they are often ineffective against world models, where the learned dynamics prior and planning process can absorb or wash out the effects of shallow perturbations. More importantly, we find that world models exhibit a distinct backdoor vulnerability rooted in the long-tailed ranking structure of imagined trajectories, where disrupting the ordering of a few decision-critical trajectories can systematically hijack planning. To exploit this vulnerability, we propose TRAP, a backdoor attack framework for world models that targets imagined trajectory ranking. TRAP combines a tail-aware ranking loss to focus optimization on decision-critical trajectories with dual gating mechanisms that stabilize optimization and regulate when and where the attack penalty is applied. Under trigger conditions, TRAP alters the relative ranking of imagined trajectories to redirect planning outcomes, while largely maintaining the normal ranking structure on clean inputs. Experiments on DreamerV3 and TD-MPC2 across diverse tasks show that TRAP consistently induces sustained behavioral deviations and significant performance degradation, highlighting the need for dedicated security evaluation of world-model-based agents.

### 一、论文元数据

- **标题**: TRAP: Tail-aware Ranking Attack for World-Model Planning
- **核心机构**: 未提及
- **一句话本质**: 面向世界模型的长时规划，攻击者不必“改动力学”，只要在触发条件下扰乱少数关键想象轨迹的排序，就能系统性劫持规划决策；TRAP 用尾部感知的排序损失与门控机制实现该后门。

### 二、破局点 (The Gap)

- **已有攻击**: 多针对局部特征/一步预测/瞬时策略输出。
- **世界模型差异**: 规划会生成并评估大量想象轨迹，浅层扰动容易被动力学先验与规划过程“洗掉”。
- **新脆弱点**: 想象轨迹存在长尾排序结构；少数“决策关键”轨迹的相对名次改变就会翻转最终决策。

### 三、核心机制 (How it works)

- **目标**: 直接攻击 imagined trajectory ranking，而非预测值或局部特征。
- **tail-aware ranking loss**: 将优化聚焦在决策关键（尾部）轨迹的排序扰动上。
- **dual gating**: 两套门控机制稳定优化，并控制攻击惩罚在“何时/何处”生效（触发条件下生效，干净输入下尽量保持排序结构）。

### 四、关键发现 (Key Insights)

- 在 DreamerV3 与 TD-MPC2 的多任务实验中，TRAP 能稳定诱导持续行为偏离并显著降性能，说明需要专门面向世界模型的安全评估范式。
- 该工作提醒：世界模型规划的关键风险面在“比较/排序”环节，而非仅在感知或一步预测。

### 五、局限与后续 (Limitations / Next Steps)

- 建议从 PDF 补齐：触发器形式、注入位置（观测/潜变量/奖励等）、以及不同规划器/采样规模下的敏感性分析。
- 防御方向可从：轨迹排序鲁棒化、异常排序检测、以及对想象轨迹分布施加一致性约束入手。


---

