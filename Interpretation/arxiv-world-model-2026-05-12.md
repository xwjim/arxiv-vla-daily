---
date: 2026-05-12
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-12（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605111600 TO 202605121559] OR lastUpdatedDate:[202605111600 TO 202605121559]))
```

## PriorZero: Bridging Language Priors and World Models for Decision Making

- **arXiv**: <https://export.arxiv.org/abs/2605.12289v1>
- **ID**: `2605.12289v1`
- **分类**: cs.LG, cs.AI
- **作者**: Junyu Xiong, Yuan Pu, Jia Tang, Yazhe Niu
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 导航/规划, 评测/基准
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Leveraging the rich world knowledge of Large Language Models (LLMs) to enhance Reinforcement Learning (RL) agents offers a promising path toward general intelligence. However, a fundamental prior-dynamics mismatch hinders existing approaches: static LLM knowledge cannot directly adapt to the complex transition dynamics of long-horizon tasks. Using LLM priors as fixed policies limits exploration diversity, as the prior is blind to environment-specific dynamics; while end-to-end fine-tuning suffers from optimization instability and credit assignment issues. To bridge this gap, we propose PriorZero, a unified framework that integrates LLM-derived conceptual priors into world-model-based planning through a decoupled rollout-training design. During rollout, a novel root-prior injection mechanism incorporates LLM priors exclusively at the root node of Monte Carlo Tree Search (MCTS), focusing search on semantically promising actions while preserving the world model's deep lookahead capability. During training, PriorZero decouples world-model learning from LLM adaptation: the world model is continuously refined on interaction data to jointly improve its dynamics, policy, and value predictions, its value estimates are then leveraged to provide fine-grained credit assignment signals for stable LLM fine-tuning via alternating optimization. Experiments across diverse benchmarks, including text-based adventure games in Jericho and instruction-following gridworld tasks in BabyAI, demonstrate that PriorZero consistently improves both exploration efficiency and asymptotic performance, establishing a promising framework for LLM-empowered decision-making. Our code is available at https://github.com/opendilab/LightZero.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Leveraging the rich world knowledge of Large Language Models (LLMs) to enhance Reinforcement Learning (RL) agents offers a promising path toward general intelligence.
  - 方法/贡献：To bridge this gap, we propose PriorZero, a unified framework that integrates LLM-derived conceptual priors into world-model-based planning through a decoupled rollout-training design.
  - 结果/结论：During training, PriorZero decouples world-model learning from LLM adaptation: the world model is continuously refined on interaction data to jointly improve its dynamics, policy, and value predictions, its value estima…
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## Why Conclusions Diverge from the Same Observations: Formalizing World-Model Non-Identifiability via an Inference

- **arXiv**: <https://export.arxiv.org/abs/2605.12255v1>
- **ID**: `2605.12255v1`
- **分类**: cs.AI, cs.CY, cs.LG
- **作者**: Toru Takahashi
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 方法
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

When people share the same documents and observations yet reach different conclusions, the disagreement often shifts into a judgment that the other party is cognitively defective, irrational, or acting in bad faith. This paper argues that such divergence is better described as a form of non-identifiability inherent in inference and learning, rather than as a defect of the other party. We organize the phenomenon into two levels: (i) $θ$-level non-identifiability, where conclusions diverge under the same world model $W$ because inference settings differ; and (ii) $W$-level non-identifiability, where repeated use of an inference setting $θ$ biases data exposure and update rules, causing the learned world model $W$ itself to diverge. We introduce an inference profile $θ= (R, E, S, D)$, consisting of Reference, Exploration, Stabilization, and Horizon, and show how outputs can split even for the same observation $o$ and the same $W$. We further explain why disagreements tend to project onto a small number of bases -- abstract versus concrete, externalizability, and order versus freedom -- as a consequence of general constraints on learning systems: computational, observational, and coordination constraints. Finally, we relate the framework to deep representation learning, including representation hierarchy, latent-state estimation, and regularization-exploration trade-offs, and illustrate the framework through a case study on AI regulation debates.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：When people share the same documents and observations yet reach different conclusions, the disagreement often shifts into a judgment that the other party is cognitively defective, irrational, or acting in bad faith.
  - 方法/贡献：We introduce an inference profile $θ= (R, E, S, D)$, consisting of Reference, Exploration, Stabilization, and Horizon, and show how outputs can split even for the same observation $o$ and the same $W$.
  - 结果/结论：This paper argues that such divergence is better described as a form of non-identifiability inherent in inference and learning, rather than as a defect of the other party.
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## Do Enterprise Systems Need Learned World Models? The Importance of Context to Infer Dynamics

- **arXiv**: <https://export.arxiv.org/abs/2605.12178v1>
- **ID**: `2605.12178v1`
- **分类**: cs.AI, cs.CL, cs.LG
- **作者**: Jishnu Sethumadhavan Nair, Patrice Bechard, Rishabh Maheshwary, Surajit Dasgupta, Sravan Ramachandran, Aakash Bhagat, Shruthan Radhakrishna, Pulkit Pattnaik, Johan Obando-Ceron, Shiva Krishna Reddy Malay, Sagar Davasam, Seganrasan Subramanian, Vipul Mittal, Sridhar Krishna Nemala, Christopher Pal, Srinivas Sunkara, Sai Rajeswar
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 安全/鲁棒, 评测/基准, 系统/实时
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models enable agents to anticipate the effects of their actions by internalizing environment dynamics. In enterprise systems, however, these dynamics are often defined by tenant-specific business logic that varies across deployments and evolves over time, making models trained on historical transitions brittle under deployment shift. We ask a question the world-models literature has not addressed: when the rules can be read at inference time, does an agent still need to learn them? We argue, and demonstrate empirically, that in settings where transition dynamics are configurable and readable, runtime discovery complements offline training by grounding predictions in the active system instance. We propose enterprise discovery agents, which recover relevant transition dynamics at runtime by reading the system's configuration rather than relying solely on internalized representations. We introduce CascadeBench, a reasoning-focused benchmark for enterprise cascade prediction that adopts the evaluation methodology of World of Workflows on diverse synthetic environments, and use it together with deployment-shift evaluation to show that offline-trained world models can perform well in-distribution but degrade as dynamics change, whereas discovery-based agents are more robust under shift by grounding their predictions in the current instance. Our findings suggest that, in configurable enterprise environments, agents should not rely solely on fixed internalized dynamics, but should incorporate mechanisms for discovering relevant transition logic at runtime.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：World models enable agents to anticipate the effects of their actions by internalizing environment dynamics.
  - 方法/贡献：We propose enterprise discovery agents, which recover relevant transition dynamics at runtime by reading the system's configuration rather than relying solely on internalized representations.
  - 结果/结论：In enterprise systems, however, these dynamics are often defined by tenant-specific business logic that varies across deployments and evolves over time, making models trained on historical transitions brittle under depl…
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## World Action Models: The Next Frontier in Embodied AI

- **arXiv**: <https://export.arxiv.org/abs/2605.12090v1>
- **ID**: `2605.12090v1`
- **分类**: cs.RO, cs.CL, cs.CV
- **作者**: Siyin Wang, Junhao Shi, Zhaoyang Fu, Xinzhe He, Feihong Liu, Chenchen Yang, Yikang Zhou, Zhaoye Fei, Jingjing Gong, Jinlan Fu, Mike Zheng Shou, Xuanjing Huang, Xipeng Qiu, Yu-Gang Jiang
- **总结状态**: 已总结
- **标签**: World Model, VLA, RL微调, 模仿学习, 评测/基准, 综述
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Vision-Language-Action (VLA) models have achieved strong semantic generalization for embodied policy learning, yet they learn reactive observation-to-action mappings without explicitly modeling how the physical world evolves under intervention. A growing body of work addresses this limitation by integrating world models, predictive models of environment dynamics, into the action generation pipeline. We term this emerging paradigm World Action Models (WAMs): embodied foundation models that unify predictive state modeling with action generation, targeting a joint distribution over future states and actions rather than actions alone. However, the literature remains fragmented across architectures, learning objectives, and application scenarios, lacking a unified conceptual framework. We formally define WAMs and disambiguate them from related concepts, and trace the foundations and early integration of VLA and world model research that gave rise to this paradigm. We organize existing methods into a structured taxonomy of Cascaded and Joint WAMs, with further subdivision by generation modality, conditioning mechanism, and action decoding strategy. We systematically analyze the data ecosystem fueling WAMs development, spanning robot teleoperation, portable human demonstrations, simulation, and internet-scale egocentric video, and synthesize emerging evaluation protocols organized around visual fidelity, physical commonsense, and action plausibility. Overall, this survey provides the first systematic account of the WAMs landscape, clarifies key architectural paradigms and their trade-offs, and identifies open challenges and future opportunities for this rapidly evolving field.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Vision-Language-Action (VLA) models have achieved strong semantic generalization for embodied policy learning, yet they learn reactive observation-to-action mappings without explicitly modeling how the physical world ev…
  - 方法/贡献：A growing body of work addresses this limitation by integrating world models, predictive models of environment dynamics, into the action generation pipeline.
  - 结果/结论：We term this emerging paradigm World Action Models (WAMs): embodied foundation models that unify predictive state modeling with action generation, targeting a joint distribution over future states and actions rather tha…
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## Closing the Motion Execution Gap: From Semantic Motion Task Constraints to Kinematic Control

- **arXiv**: <https://export.arxiv.org/abs/2605.12053v1>
- **ID**: `2605.12053v1`
- **分类**: cs.RO
- **作者**: Simon Stelter, Vanessa Hassouna, Malte Huerkamp, Michael Beetz
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 导航/规划
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

This paper addresses the Motion Execution Gap, the disconnect between high-level symbolic task descriptions using semantic constraints and executable robot motions. Motion Statecharts are introduced as an executable symbolic representation for complex motions. They allow the arbitrary arrangement of motion constraints, monitors or nested statecharts in parallel and sequence. World-centric motion specification and generalization across embodiments are enabled through the use of a unified differentiable kinematic world model of both, robots and environments. Motion execution is realized through a lMPC-based implementation of the task-function approach, in which smooth transitions during task switches are ensured using jerk bounds. Cross-platform transferability was demonstrated by deploying the method on eight robot platforms, operating in diverse environments. The proposed framework is called Giskard and is available open source: https://github.com/cram2/cognitive_robot_abstract_machine.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：This paper addresses the Motion Execution Gap, the disconnect between high-level symbolic task descriptions using semantic constraints and executable robot motions.
  - 方法/贡献：Motion Statecharts are introduced as an executable symbolic representation for complex motions.
  - 结果/结论：They allow the arbitrary arrangement of motion constraints, monitors or nested statecharts in parallel and sequence.
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## Debiased Model-based Representations for Sample-efficient Continuous Control

- **arXiv**: <https://export.arxiv.org/abs/2605.11711v1>
- **ID**: `2605.11711v1`
- **分类**: cs.LG, cs.AI
- **作者**: Jiafei Lyu, Zichuan Lin, Scott Fujimoto, Kai Yang, Yangkun Chen, Saiyong Yang, Zongqing Lu, Deheng Ye
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 评测/基准
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Model-based representations recently stand out as a promising framework that embeds latent dynamics information into the representations for downstream off-policy actor-critic learning. It implicitly combines the advantages of both model-free and model-based approaches while avoiding the training costs associated with model-based methods. Nevertheless, existing model-based representation methods can fail to capture sufficient information about relevant variables and can overfit to early experiences in the replay buffer. These incur biases in representation and actor-critic learning, leading to inferior performance. To address this, we propose Debiased model-based Representations for Q-learning, tagged DR.Q algorithm. DR.Q explicitly maximizes the mutual information between the representations of the current state-action pair and the next state besides minimizing their deviations, and samples transitions with faded prioritized experience replay. We evaluate DR.Q on numerous continuous control benchmarks with a single set of hyperparameters, and the results demonstrate that DR.Q can match or surpass recent strong baselines, sometimes outperforming them by a large margin. Our code is available at https://github.com/dmksjfl/DR.Q.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Model-based representations recently stand out as a promising framework that embeds latent dynamics information into the representations for downstream off-policy actor-critic learning.
  - 方法/贡献：To address this, we propose Debiased model-based Representations for Q-learning, tagged DR.Q algorithm.
  - 结果/结论：We evaluate DR.Q on numerous continuous control benchmarks with a single set of hyperparameters, and the results demonstrate that DR.Q can match or surpass recent strong baselines, sometimes outperforming them by a larg…
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## HorizonDrive: Self-Corrective Autoregressive World Model for Long-horizon Driving Simulation

- **arXiv**: <https://export.arxiv.org/abs/2605.11596v1>
- **ID**: `2605.11596v1`
- **分类**: cs.CV
- **作者**: Conglang Zhang, Yifan Zhan, Qingjie Wang, Zhanpeng Ouyang, Yu Li, Zihao Yang, Xiaoyang Guo, Weiqiang Ren, Qian Zhang, Zhen Dong, Yinqiang Zheng, Wei Yin, Zhengqing Chen
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 系统/实时
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Closed-loop driving simulation requires real-time interaction beyond short offline clips, pushing current driving world models toward autoregressive (AR) rollout. Existing AR distillation approaches typically rely on frame sinks or student-side degradation training. The former transfers poorly to driving due to fast ego-motion and rapid scene changes, while the latter remains bounded by the teacher's single-pass output length and thus provides only a limited supervision horizon. A natural question is: can the teacher itself be extended via AR rollout to provide unbounded-horizon supervision at bounded memory cost? The key difficulty is that a standard teacher drifts under its own predictions, contaminating the supervision it provides. Our key insight is to make the teacher rollout-capable, ensuring reliable supervision from its own AR rollouts. This is instantiated as HorizonDrive, an anti-drifting training-and-distillation framework for AR driving simulation. First, scheduled rollout recovery (SRR) trains the base model to reconstruct ground-truth future clips from prediction-corrupted histories, yielding a teacher that remains stable across long AR rollouts. Second, the rollout-capable teacher is extended via AR rollout, providing long-horizon distribution-matching supervision under bounded memory, while a short-window student aligns to it with teacher rollout DMD (TRD) for efficient real-time deployment. HorizonDrive natively supports minute-scale AR rollout under bounded memory; on nuScenes, HorizonDrive reduces FID by 52% and FVD by 37%, and lowers ARE and DTW by 21% and 9% relative to the strongest long-horizon streaming baselines, while remaining competitive with single-pass driving video generators.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Closed-loop driving simulation requires real-time interaction beyond short offline clips, pushing current driving world models toward autoregressive (AR) rollout.
  - 方法/贡献：Existing AR distillation approaches typically rely on frame sinks or student-side degradation training.
  - 结果/结论：The former transfers poorly to driving due to fast ego-motion and rapid scene changes, while the latter remains bounded by the teacher's single-pass output length and thus provides only a limited supervision horizon.
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## The DAWN of World-Action Interactive Models

- **arXiv**: <https://export.arxiv.org/abs/2605.11550v1>
- **ID**: `2605.11550v1`
- **分类**: cs.CV
- **作者**: Hongbo Lu, Liang Yao, Chenghao He, Haoyu Wang, Xiang Gu, Xianfei Li, Wenlong Liao, Tao He, Pai Peng
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 导航/规划, 安全/鲁棒, 评测/基准
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

A plausible scene evolution depends on the maneuver being considered, while a good maneuver depends on how the scene may evolve. Existing World Action Models (WAMs) largely miss this reciprocity, treating world prediction and action generation as either isolated parallel branches or rigid predict-then-plan pipelines. We formalize this perspective as World-Action Interactive Models (WAIMs), and instantiate it in autonomous driving with \textbf{DAWN} (\textbf{D}enoising \textbf{A}ctions and \textbf{W}orld i\textbf{N}teractive model), a simple yet strong latent generative baseline. DAWN operates in a compact semantic latent space and couples a \emph{World Predictor} with a \emph{World-Conditioned Action Denoiser}: the predicted world hypothesis conditions action denoising, while the denoised action hypothesis is fed back to update the world prediction, so that both are recursively refined during inference. Rather than eliminating test-time world evolution altogether or rolling out the full future in pixel space, DAWN performs a short explicit latent rollout that is sufficient to support long-horizon trajectory generation in complex interactive scenes. Experiments show that DAWN achieves strong planning performance and favorable safety-related results across multiple autonomous driving benchmarks. More broadly, our results suggest that interactive world-action generation is a principled path toward truly actionable world models.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：A plausible scene evolution depends on the maneuver being considered, while a good maneuver depends on how the scene may evolve.
  - 方法/贡献：Experiments show that DAWN achieves strong planning performance and favorable safety-related results across multiple autonomous driving benchmarks.
  - 结果/结论：Existing World Action Models (WAMs) largely miss this reciprocity, treating world prediction and action generation as either isolated parallel branches or rigid predict-then-plan pipelines.
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## 3D-Belief: Embodied Belief Inference via Generative 3D World Modeling

- **arXiv**: <https://export.arxiv.org/abs/2605.11367v1>
- **ID**: `2605.11367v1`
- **分类**: cs.CV
- **作者**: Yifan Yin, Zehao Wen, Jieneng Chen, Zehan Zheng, Nanru Dai, Haojun Shi, Suyu Ye, Aydan Huang, Zheyuan Zhang, Alan Yuille, Jianwen Xie, Ayush Tewari, Tianmin Shu
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 导航/规划, 多视角/3D, 评测/基准
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Recent advances in visual generative models have highlighted the promise of learning generative world models. However, most existing approaches frame world modeling as novel-view synthesis or future-frame prediction, emphasizing visual realism rather than the structured uncertainty required by embodied agents acting under partial observability. In this work, we propose a different perspective: world modeling as embodied belief inference in 3D space. From this view, a world model should not merely render what may be seen, but maintain and update an agent's belief about the unobserved 3D world as new observations are acquired. We identify several key capabilities for such models, including spatially consistent scene memory, multi-hypothesis belief sampling, sequential belief updating, and semantically informed prediction of unseen regions. We instantiate these ideas in 3D-Belief, a generative 3D world model that infers explicit, actionable 3D beliefs from partial observations and updates them online over time. Unlike prior visual prediction models, 3D-Belief represents uncertainty directly in 3D, enabling embodied agents to imagine plausible scene completions and reason over partially observed environments. We evaluate 3D-Belief on 2D visual quality for scene memory and unobserved-scene imagination, object- and scene-level 3D imagination using our proposed 3D-CORE benchmark, and challenging object navigation tasks in both simulation and the real world. Experiments show that 3D-Belief improves 2D and 3D imagination quality and downstream embodied task performance compared to state-of-the-art methods.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Recent advances in visual generative models have highlighted the promise of learning generative world models.
  - 方法/贡献：In this work, we propose a different perspective: world modeling as embodied belief inference in 3D space.
  - 结果/结论：Experiments show that 3D-Belief improves 2D and 3D imagination quality and downstream embodied task performance compared to state-of-the-art methods.
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## HarmoWAM: Harmonizing Generalizable and Precise Manipulation via Adaptive World Action Models

- **arXiv**: <https://export.arxiv.org/abs/2605.10942v1>
- **ID**: `2605.10942v1`
- **分类**: cs.RO
- **作者**: Qiuxuan Feng, Jiale Yu, Jiaming Liu, Yueru Jia, Zhuangzhe Wu, Hao Chen, Zezhong Qian, Shuo Gu, Peng Jia, Siwei Ma, Shanghang Zhang
- **总结状态**: 已总结
- **标签**: World Model, VLA, RL微调, 机器人操控, 评测/基准, 综述
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World Action Models (WAMs) have emerged as a promising paradigm for robot control by modeling physical dynamics. Current WAMs generally follow two paradigms: the "Imagine-then-Execute" approach, which uses video prediction to infer actions via inverse dynamics, and the "Joint Modeling" approach, which jointly models actions and video representations. Based on systematic experiments, we observe a fundamental trade-off between these paradigms: the former explicitly leverages world models for generalizable transit but lacks interaction precision, whereas the latter enables fine-grained, temporally coherent action generation but is constrained by the exploration space of the training distribution. Motivated by these findings, we propose HarmoWAM, an end-to-end WAM that fully leverages a world model to unify predictive and reactive control, enabling both generalizable transit and precise manipulation. Specifically, the world model provides spatio-temporal physical priors that condition two complementary action experts: a predictive expert that leverages latent dynamics for iterative action generation, and a reactive expert that directly infers actions from predicted visual evolution. To enable adaptive coordination, a Process-Adaptive Gating Mechanism is proposed to automatically determine the timing and location of switching between them. This allows the world model to drive the reactive expert to expand the exploration space and the predictive expert to perform precise interactions across different stages of a task. For evaluation, we construct three training-unseen test environments across six real-world robotic tasks, covering variations in background, position, and object semantics. Notably, HarmoWAM achieves strong zero-shot generalization across these scenarios, significantly outperforming prior state-of-the-art VLA models and WAMs by margins of 33% and 29%, respectively.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：World Action Models (WAMs) have emerged as a promising paradigm for robot control by modeling physical dynamics.
  - 方法/贡献：Motivated by these findings, we propose HarmoWAM, an end-to-end WAM that fully leverages a world model to unify predictive and reactive control, enabling both generalizable transit and precise manipulation.
  - 结果/结论：Current WAMs generally follow two paradigms: the "Imagine-then-Execute" approach, which uses video prediction to infer actions via inverse dynamics, and the "Joint Modeling" approach, which jointly models actions and vi…
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## Is Your Driving World Model an All-Around Player?

- **arXiv**: <https://export.arxiv.org/abs/2605.10858v1>
- **ID**: `2605.10858v1`
- **分类**: cs.CV, cs.RO
- **作者**: Lingdong Kong, Ao Liang, Tianyi Yan, Hongsi Liu, Wesley Yang, Ziqi Huang, Xian Sun, Wei Yin, Jialong Zuo, Yixuan Hu, Dekai Zhu, Dongyue Lu, Youquan Liu, Guangfeng Jiang, Linfeng Li, Xiangtai Li, Long Zhuo, Lai Xing Ng, Benoit R. Cottereau, Changxin Gao, Liang Pan, Wei Tsang Ooi, Ziwei Liu
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 导航/规划, 多视角/3D, 评测/基准
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Today's driving world models can generate remarkably realistic dash-cam videos, yet no single model excels universally. Some generate photorealistic textures but violate basic physics; others maintain geometric consistency but fail when subjected to closed-loop planning. This disconnect exposes a critical gap: the field evaluates how real generated worlds appear, but rarely whether they behave realistically. We introduce WorldLens, a unified benchmark that measures world-model fidelity across the full spectrum, from pixel quality and 4D geometry to closed-loop driving and human perceptual alignment, through five complementary aspects and 24 standardized dimensions. Our evaluation of six representative models reveals that no existing approach dominates across all axes: texture-rich models violate geometry, geometry-aware models lack behavioral fidelity, and even the strongest performers achieve only 2-3 out of 10 on human realism ratings. To bridge algorithmic metrics with human perception, we further contribute WorldLens-26K, a 26,808-entry human-annotated preference dataset pairing numerical scores with textual rationales, and WorldLens-Agent, a vision-language evaluator distilled from these judgments that enables scalable, explainable auto-assessment. Together, the benchmark, dataset, and agent form a unified ecosystem for assessing generated worlds not merely by visual appeal, but by physical and behavioral fidelity.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Today's driving world models can generate remarkably realistic dash-cam videos, yet no single model excels universally.
  - 方法/贡献：We introduce WorldLens, a unified benchmark that measures world-model fidelity across the full spectrum, from pixel quality and 4D geometry to closed-loop driving and human perceptual alignment, through five complementa…
  - 结果/结论：Our evaluation of six representative models reveals that no existing approach dominates across all axes: texture-rich models violate geometry, geometry-aware models lack behavioral fidelity, and even the strongest perfo…
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---

## PhyGround: Benchmarking Physical Reasoning in Generative World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.10806v1>
- **ID**: `2605.10806v1`
- **分类**: cs.CV, cs.AI, cs.LG
- **作者**: Juyi Lin, Arash Akbari, Yumei He, Lin Zhao, Haichao Zhang, Arman Akbari, Xingchen Xu, Zoe Y. Lu, Enfu Nan, Hokin Deng, Edmund Yeh, Sarah Ostadabbas, Yun Fu, Jennifer Dy, Pu Zhao, Yanzhi Wang
- **总结状态**: 已总结
- **标签**: World Model, RL微调, 机器人操控, 安全/鲁棒, 评测/基准, 综述
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Generative world models are increasingly used for video generation, where learned simulators are expected to capture the physical rules that govern real-world dynamics. However, evaluating whether generated videos actually follow these rules remains challenging. Existing physics-focused video benchmarks have made important progress, but they still face three key challenges, including the coarse evaluation frameworks that hide law-specific failures, response biases and fatigue that undermine the validity of annotation judgments, and automated evaluators that are insufficiently physics-aware or difficult to audit. To address those challenges, we introduce PhyGround, a criteria-grounded benchmark for evaluating physical reasoning in video generation. The benchmark contains 250 curated prompts, each augmented with an expected physical outcome, and a taxonomy of 13 physical laws across solid-body mechanics, fluid dynamics, and optics. Each law is operationalized through observable sub-questions to enable per-law diagnostics. We evaluate eight modern video generation models through a large-scale, quality-controlled human study, grounded on social science lab experiment design. A total of 459 annotators provided 5,796 complete annotations and over 37.4K fine-grained labels; after quality control, the retained annotations exhibited high split-half model-ranking correlations (Spearman's rho > 0.90). To support reproducible automated evaluation, we release PhyJudge-9B, an open physics-specialized VLM judge. PhyJudge-9B achieves substantially lower aggregate relative bias than Gemini-3.1-Pro (3.3% vs. 16.6%). We release prompts, human annotations, model checkpoints, and evaluation code on the project page https://phyground.github.io/.

### 解读状态

- 当前模式：手动补写（基于摘要；未使用 API）
- 结构化总结：
  - 目标/问题：Generative world models are increasingly used for video generation, where learned simulators are expected to capture the physical rules that govern real-world dynamics.
  - 方法/贡献：To address those challenges, we introduce PhyGround, a criteria-grounded benchmark for evaluating physical reasoning in video generation.
  - 结果/结论：However, evaluating whether generated videos actually follow these rules remains challenging.
  - 适用场景：可作为后续复现/对比的线索（仅基于摘要，细节以论文为准）。
---
