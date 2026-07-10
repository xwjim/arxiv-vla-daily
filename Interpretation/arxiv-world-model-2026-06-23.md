---
date: 2026-06-23
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-06-23（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202606221600 TO 202606231559] OR lastUpdatedDate:[202606221600 TO 202606231559]))
```

## Trimming the Long-Tail of Visual World Modeling Evaluation

- **arXiv**: <https://export.arxiv.org/abs/2606.24256v1>
- **ID**: `2606.24256v1`
- **分类**: cs.CV
- **作者**: Bingxuan Li, Yining Hong, Cheng Qian, Hyeonjeong Ha, Jiateng Liu, Zhenhailong Wang, Yue Guo, Yunzhu Li, Heng Ji
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Trimming the Long-Tail of Visual World Modeling Evaluation.pdf](../pdfs/Trimming the Long-Tail of Visual World Modeling Evaluation.pdf)

### 摘要（自动抓取）

Physical interactions follow a long-tailed distribution: a set of common and regular interactions dominates human experience and visual data, while a broad spectrum of rare and irregular interactions remains underrepresented. Although recent visual world models, including image and video generation models, achieve impressive realism on existing benchmarks, they primarily focus on simulating common physical interactions. This raises a central question: Do current visual world models internalize and generalize physical principles? In this work, we introduce Tailor-Bench, a benchmark that challenges world models to simulate irregular physical interactions. To enable systematic evaluation, we design three scenario modes that progressively challenge model reasoning: Regular scenarios reflect common tool-task pairs, Unconventional scenarios replace conventional tools with attribute-compatible substitutes to test affordance generalization, and Impossible scenarios introduce attribute-violating tools to probe constraint awareness. Additionally, we design two complementary settings under a unified evaluation protocol: predictive generation requires inferring outcomes without guidance, while descriptive generation specifies the target outcome for faithful realization. Our experimental results reveal a clear long-tail gap in physical world modeling: performance degrades from Regular to Unconventional and Impossible scenarios, indicating limited generalization beyond common interactions. Failure analysis further shows that models rely on superficial visual patterns: image models fail to realize correct state changes, while video models further suffer from temporal inconsistencies.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Autonomous Video Generation with Counterfactual Controllability for Self-Evolving World Models

- **arXiv**: <https://export.arxiv.org/abs/2606.24152v1>
- **ID**: `2606.24152v1`
- **分类**: cs.CV, cs.LG
- **作者**: Xin Wang, Wenxuan Liu, Tongtong Feng, Wenwu Zhu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Autonomous Video Generation with Counterfactual Controllability for Self-Evolving World Models.pdf](../pdfs/Autonomous Video Generation with Counterfactual Controllability for Self-Evolving World Models.pdf)

### 摘要（自动抓取）

Existing literature claims that video generation essentially is world modelling. On the one hand, the claim is productive because it pushes generative AI beyond static images and toward temporally extended physical scenes. On the other hand, this claim dangerously relies on the belief that scaling visual prediction alone will automatically yield physical agents. We prefer a more accurate statement: video generation models learn a partial, implicit spatiotemporal world model, but not a fully grounded or controllable one. The reason is as follows: a model may generate a plausible video of a drone crossing a forest or a robot arm manipulating a cup, yet still fail to know which variables are controllable, which constraints belong to a particular body and which futures remain valid under intervention. The frontier in essence is not predictive realism alone, instead it emphasizes a self-evolving generative nature that requires the decisive criterion to be counterfactual controllability: the capability of asking what would happen under an action, to test whether the generated future can survive embodiment constraints and to feed the resulting action knowledge back into future imagination (generation). Therefore, in this paper we present a new perspective, i.e., autonomous video generation with counterfactual controllability is one promising way to realize self-evolving world models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## NavWM: A Unified Navigation World Model for Foresight-Driven Planning

- **arXiv**: <https://export.arxiv.org/abs/2606.24101v1>
- **ID**: `2606.24101v1`
- **分类**: cs.RO, cs.CV
- **作者**: Yanghong Mei, Longteng Guo, Ming-Ming Yu, Guiyu Zhao, Xingjian He, Jing Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [NavWM A Unified Navigation World Model for Foresight-Driven Planning.pdf](../pdfs/NavWM A Unified Navigation World Model for Foresight-Driven Planning.pdf)

### 摘要（自动抓取）

Conventional visual navigation policies often struggle with myopic decision-making and mode collapse in complex environments. While world models offer a promising alternative, existing paradigms typically isolate perception, generation, and control, failing to capture their shared spatio-temporal dynamics. In this paper, we propose NavWM, a unified navigation world model that seamlessly integrates latent world reasoning, multimodal action prediction, and controllable visual generation. At its core, NavWM leverages latent world tokens to distill geometric and semantic priors, endowing the agent with robust structural understanding. To overcome the limitations of deterministic policies, we introduce an anchor-based multimodal trajectory forecasting framework that generates a diverse action space. This inherent diversity explicitly empowers the generative world model to act as a robust closed-loop planner, utilizing visual foresight to evaluate and select the optimal path. Extensive experiments across diverse robotics datasets demonstrate that NavWM significantly advances the state-of-the-art, delivering remarkable improvements in both high-fidelity future state generation and zero-shot navigation success.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## DynaWM: Dynamics-Aware Distillation with World Model and Momentum Targets for Smooth Locomotion over Continuous Stairs

- **arXiv**: <https://export.arxiv.org/abs/2606.24089v1>
- **ID**: `2606.24089v1`
- **分类**: cs.RO, cs.AI
- **作者**: Haidong Hou, Zhangguo Yu, Hengbo Qi, Jianlin Zhang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [DynaWM Dynamics-Aware Distillation with World Model and Momentum Targets for Smooth Locomotion over Continuous Stairs.pdf](../pdfs/DynaWM Dynamics-Aware Distillation with World Model and Momentum Targets for Smooth Locomotion over Continuous Stairs.pdf)

### 摘要（自动抓取）

Recent advances in control have enabled bipedal-wheeled robots to traverse slopes and single-step obstacles, yet long staircase traversal remains challenging as current teacher-student frameworks suffer from weakened dynamics-aware representations and incomplete terrain geometry encoding. To bridge this gap, we propose DynaWM, a dynamics-aware representation learning framework. To enhance terrain encoding capability and enable transparent assessment, we introduce a world model as a regularizer to enforce forward-dynamics awareness, preserving comprehensive terrain geometry while facilitating hierarchical encoding visualization. To stabilize knowledge transfer, we employ a momentum target encoder to provide consistent distillation targets, preventing dimensional collapse from non-stationary teacher updates. Evaluation of the learned representations through Principal Component Analysis (PCA) visualization and quantitative metrics reveals that our encoder hierarchically captures terrain geometry with higher terrain encoding capability, leading to enhanced terrain adaptability and motion smoothness. Experimental results in simulation and real hardware demonstrate that our method achieves superior terrain adaptability and motion smoothness, enabling bipedal-wheeled robots to overcome diverse continuous stairs, as shown in Fig. 1.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Critique of Agent Model

- **arXiv**: <https://export.arxiv.org/abs/2606.23991v1>
- **ID**: `2606.23991v1`
- **分类**: cs.AI, cs.LG, cs.MA, cs.RO
- **作者**: Eric Xing, Mingkai Deng, Jinyu Hou
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Critique of Agent Model.pdf](../pdfs/Critique of Agent Model.pdf)

### 摘要（自动抓取）

What is an agent? What constitutes agency? With the rise of Large Language Model (LLM) systems marketed as ``coding agents'', ``AI co-scientists'', and other ``agentic" tools that promise to drive up productivity, and at the same time, ``existential" concerns such as AI escaping human control with destructive power under a speculative ``machine agency" against humans, it has become essential to clarify where automation ends and agency begins, both for building capable systems and for understanding whether and what to fear. Drawing on Descartes' grounding of agency in independent thought, and on portrayals of autonomous beings in science fiction, we survey the current landscape of AI agents, and analyze agent architectures along five dimensions: goal, identity, decision-making, self-regulation, and learning. Specifically, we argue that genuine agency requires these structures to be \emph{internalized within the system itself} rather than assembled through external scaffolding. This distinction between \emph{agentic} systems, whose competence resides in engineered workflows, and \emph{agentive} systems, whose capabilities (including social interaction) arise endogenously, defines the boundary between systems designed for prescribed tasks, and those capable of operating in the open world with true autonomy. Building on this analysis, we propose the Goal-Identity-Configurator (GIC) architecture for a general-purpose agent model, combining hierarchical goal decomposition, identity evolution, simulative reasoning grounded in a separately trained world model, learned self-regulation, and self-directed learning from both real and simulated experience. Furthermore, we share insight on the auditability, controllability, and safety of agentive systems that possess greater autonomy and ``agency", but remain under human oversight.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## LaST-HD: Learning Latent Physical Reasoning from Scalable Human Data for Robot Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2606.23685v1>
- **ID**: `2606.23685v1`
- **分类**: cs.RO
- **作者**: Jiaming Liu, Yinxi Wang, Chenyang Gu, Siyuan Qian, Xiangju Mi, Hao Chen, Jiawei Chen, Qingpo Wuwu, Xiaoqi Li, Nuowei Han, Yiming Zhang, Xuheng Zhang, Yang Yue, Yeqing Yang, Lei Wang, Peng Jia, Hao Tang, Shanghang Zhang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [LaST-HD Learning Latent Physical Reasoning from Scalable Human Data for Robot Manipulation.pdf](../pdfs/LaST-HD Learning Latent Physical Reasoning from Scalable Human Data for Robot Manipulation.pdf)

### 摘要（自动抓取）

Human-hand demonstrations provide a direct and scalable source of physical interaction data for robot learning. While manual retargeting is indispensable for establishing kinematic action correspondence across different morphologies, robust transfer requires going beyond geometry to address the underlying alignment of physical dynamics between human and robot manipulation. To address this, we introduce LaST-HD, a novel human-to-robot action learning paradigm that extends reasoning-before-acting VLA by aligning human-hand and robot demonstrations in a shared latent reasoning space. Rather than mimicking human kinematics, LaST-HD trains an auxiliary action-conditioned world model on unpaired human-hand and robot trajectories to synthesize unified latent targets. After aligning cross-embodiment representations in this shared forward-dynamics space, these targets supervise LaST-HD's latent reasoning process, enabling it to internalize shared physical dynamics and drive efficient human-hand action learning. Moreover, we develop Out-of-Lab (OOL) Glove, a low-cost motion-capture glove tailored to LaST-HD for human-hand data collection. The captured human data provide precise keypoints and serve as universal action supervision across grippers and dexterous hands. Armed with the aligned latent space and high-fidelity human-hand data, we develop a progressive mixed-to-human training recipe comprising mixed human-robot co-training and human-hand online correction post-training. Through mixed co-training, LaST-HD improves generalization to novel objects, scenes, and positions using only human-hand demonstrations. With online correction, LaST-HD further adapts to novel environments and achieves over 90\% accuracy using only 20 minutes of OOL glove data.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

