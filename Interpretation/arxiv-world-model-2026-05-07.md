---
date: 2026-05-07
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-07（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605061600 TO 202605071559] OR lastUpdatedDate:[202605061600 TO 202605071559]))
```

## Reconstruction or Semantics? What Makes a Latent Space Useful for Robotic World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.06388v1>
- **ID**: `2605.06388v1`
- **分类**: cs.CV, cs.LG, cs.RO
- **作者**: Nilaksh, Saurav Jha, Artem Zholus, Sarath Chandar
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Reconstruction or Semantics What Makes a Latent Space Useful for Robotic World Models.pdf](../pdfs/Reconstruction or Semantics What Makes a Latent Space Useful for Robotic World Models.pdf)

### 摘要（自动抓取）

World model-based policy evaluation is a practical proxy for testing real-world robot control by rolling out candidate actions in action-conditioned video diffusion models. As these models increasingly adopt latent diffusion modeling (LDM), choosing the right latent space becomes critical. While the status quo uses autoencoding latent spaces like VAEs that are primarily trained for pixel reconstruction, recent work suggests benefits from pretrained encoders with representation-aligned semantic latent spaces. We systematically evaluate these latent spaces for action-conditioned LDM by comparing six reconstruction and semantic encoders to train world model variants under a fixed protocol on BridgeV2 dataset, and show effective world model training in high-dimensional representation spaces with and without dimension compression. We then propose three axes to assess robotic world model performance: visual fidelity, planning and downstream policy performance, and latent representation quality. Our results show visual fidelity alone is insufficient for world model selection. While reconstruction encoders like VAE and Cosmos achieve strong pixel-level scores, semantic encoders such as V-JEPA 2.1 (strongest overall on policy), Web-DINO, and SigLIP 2 generally excel across the other two axes at all model scales. Our study advocates semantic latent space as stronger foundation for policy-relevant robotics diffusion world models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Earth-o1: A Grid-free Observation-native Atmospheric World Model

- **arXiv**: <https://export.arxiv.org/abs/2605.06337v1>
- **ID**: `2605.06337v1`
- **分类**: cs.CV
- **作者**: Junchao Gong, Kaiyi Xu, Wangxu Wei, Siwei Tu, Jingyi Xu, Zili Liu, Hang Fan, Zhiwang Zhou, Tao Han, Yi Xiao, Xinyu Gu, Zhangrui Li, Wenlong Zhang, Hao Chen, Xiaokang Yang, Yaqiang Wang, Lijing Cheng, Pierre Gentine, Wanli Ouyang, Feng Zhang, Zhe-Min Tan, Bowen Zhou, Fenghua Ling, Ben Fei, Lei Bai
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Earth-o1 A Grid-free Observation-native Atmospheric World Model.pdf](../pdfs/Earth-o1 A Grid-free Observation-native Atmospheric World Model.pdf)

### 摘要（自动抓取）

Despite the unprecedented volume of multimodal data provided by modern Earth observation systems, our ability to model atmospheric dynamics remains constrained. Traditional modeling frameworks force heterogeneous measurements into predefined spatial grids, inherently limiting the full exploitation of raw sensor data and creating severe computational bottlenecks. Here we present Earth-o1, an observation-native atmospheric world model that overcomes these structural limitations. Rather than relying on conventional atmospheric dynamical modeling systems or traditional data assimilation, Earth-o1 directly learns the continuous, three-dimensional physical evolution of the Earth system from ungridded observational data. By integrating diverse sensor inputs into a unified, grid-free dynamical field, the model autonomously advances the atmospheric state in space and time. We show that this fundamentally distinct paradigm enables direct, real-time forecasting and cross-sensor inference without the overhead of explicit numerical solvers. In hindcast evaluations, Earth-o1 achieves surface forecast skill comparable to the operational Integrated Forecasting System (IFS). These results establish that continuous, observation-driven world models -- a new class of fully observation-native geophysical simulators -- can match the fidelity of established physical frameworks, providing a scalable data-driven foundation for a digital twin of the Earth.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## MANTRA: Synthesizing SMT-Validated Compliance Benchmarks for Tool-Using LLM Agents

- **arXiv**: <https://export.arxiv.org/abs/2605.06334v1>
- **ID**: `2605.06334v1`
- **分类**: cs.CL, cs.LG, cs.LO
- **作者**: Ashwani Anand, Ivi Chatzi, Ritam Raha, Anne-Kathrin Schmuck
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [MANTRA Synthesizing SMT-Validated Compliance Benchmarks for Tool-Using LLM Agents.pdf](../pdfs/MANTRA Synthesizing SMT-Validated Compliance Benchmarks for Tool-Using LLM Agents.pdf)

### 摘要（自动抓取）

Tool-using large language model (LLM) agents are increasingly deployed in settings where their reliable behavior is governed by strict procedural manuals. Ensuring that such agents comply with the rules from these manuals is challenging, as they are typically written for humans in natural language while agent behavior manifests as an execution trace of tool calls. Existing evaluations of LLM agents rely on manually constructed benchmarks or LLM-based judges, which either do not scale or lack reliability for complex, long-horizon manuals. To overcome these limitations, we present MANTRA, a framework for automatically synthesizing machine-checkable compliance benchmarks from natural-language manuals and tool schemas. MANTRA independently generates (i) a symbolic world model capturing procedural dependencies, and (ii) a set of trace-level compliance checks for a given task, and validates their consistency using SMT solving. A structured repair loop resolves inconsistencies, requiring human intervention only as a fallback. %This yields benchmarks that are formally validated. Importantly, MANTRA supports arbitrary domains and long procedural manuals, and provides a tunable notion of task complexity which is utilized to automatically derive challenging tasks accompanying compliance checks. Using MANTRA, we build a new benchmark suite with 285 tasks across 6 domains scaling to 50+ page manuals with minimal human effort. Empirically, we show that the compliance checks are richer with stronger constraint enforcement compared to existing benchmarks. Additionally, the granularity of the checks can be used for debugging the agents' failure modes. These results demonstrate that combining automated benchmark generation with formally grounded validation methods enables scalable and reliable benchmarking of tool-using agents.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Render, Don't Decode: Weight-Space World Models with Latent Structural Disentanglement

- **arXiv**: <https://export.arxiv.org/abs/2605.06298v1>
- **ID**: `2605.06298v1`
- **分类**: cs.CV, cs.AI
- **作者**: Roussel Desmond Nzoyem, Mauro Comi
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Render, Don't Decode Weight-Space World Models with Latent Structural Disentanglement.pdf](../pdfs/Render, Don't Decode Weight-Space World Models with Latent Structural Disentanglement.pdf)

### 摘要（自动抓取）

Training world models on vast quantities of unlabelled videos is a critical step toward fully autonomous intelligence. However, the prevailing paradigm of encoding raw pixels into opaque latent spaces and relying on heavy decoders for reconstruction leaves these models computationally expensive and uninterpretable. We address this problem by introducing NOVA, a world modelling framework that represents the system state as the weights and biases of an auxiliary coordinate-based implicit neural representation (INR). This structured representation is analytically rendered, which eliminates the decoder bottleneck while conferring compactness, portability, and zero-shot super-resolution. Furthermore, like most latent action models, NOVA can be distilled into a context-dependent video generator via an action-matching objective. Surprisingly, without resorting to auxiliary losses or adversarial objectives, NOVA can disentangle structural scene components such as background, foreground, and inter-frame motion, enabling users to edit either content or dynamics without compromising the other. We validate our framework on several challenging datasets, achieving strong controllable forecasting while operating on a single consumer GPU at $\sim$40M parameters. Ultimately, structured representations like INRs not only enhance our understanding of latent dynamics but also pave the way for immersive and customisable virtual experiences.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## EA-WM: Event-Aware Generative World Model with Structured Kinematic-to-Visual Action Fields

- **arXiv**: <https://export.arxiv.org/abs/2605.06192v1>
- **ID**: `2605.06192v1`
- **分类**: cs.CV, cs.AI, cs.RO
- **作者**: Zhaoyang Yang, Yurun Jin, Lizhe Qi, Cong Huang, Kai Chen
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [EA-WM Event-Aware Generative World Model with Structured Kinematic-to-Visual Action Fields.pdf](../pdfs/EA-WM Event-Aware Generative World Model with Structured Kinematic-to-Visual Action Fields.pdf)

### 摘要（自动抓取）

Pretrained video diffusion models provide powerful spatiotemporal generative priors, making them a natural foundation for robotic world models. While recent world-action models jointly optimize future videos and actions, they predominantly treat video generation as an auxiliary representation for policy learning. Consequently, they insufficiently explore the inverse problem: leveraging action signals to guide video synthesis, thereby often failing to preserve precise robot spatial geometry and fine-grained robot-object interaction dynamics in the generated rollouts. To bridge this gap, we present EA-WM, an Event-Aware Generative World Model that effectively closes the loop between kinematic control and visual perception. Rather than injecting joint or end-effector actions as abstract, low-dimensional tokens, EA-WM projects actions and kinematic states directly into the target camera view as Structured Kinematic-to-Visual Action Fields. To fully exploit this geometrically grounded representation, we introduce event-aware bidirectional fusion blocks that modulate cross-branch attention, capturing object state changes and interaction dynamics. Evaluated on the comprehensive WorldArena benchmark, EA-WM achieves state-of-the-art performance, outperforming existing baselines by a significant margin.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Causal Reinforcement Learning for Complex Card Games: A Magic The Gathering Benchmark

- **arXiv**: <https://export.arxiv.org/abs/2605.06066v1>
- **ID**: `2605.06066v1`
- **分类**: cs.LG, cs.AI
- **作者**: Cristiano da Costa Cunha, Ajmal Mian, Tim French, Wei Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Causal Reinforcement Learning for Complex Card Games A Magic The Gathering Benchmark.pdf](../pdfs/Causal Reinforcement Learning for Complex Card Games A Magic The Gathering Benchmark.pdf)

### 摘要（自动抓取）

Causal reinforcement learning (RL) lacks benchmarks for complex systems that combine sequential decision making, hidden information, large masked action spaces, and explicit causal structure. We introduce MTG-Causal-RL, a Gymnasium benchmark built on Magic: The Gathering with a 3,077-dimensional partial observation, a 478-action masked discrete action space, five competitive Standard archetypes, three reward schemes, and a hand-specified Structural Causal Model (SCM) over strategic variables. Every episode exposes causal variables, SCM-predicted intervention effects, and per-factor credit traces, making causal credit assignment, leave-one-out cross-archetype transfer, and policy auditability first-class metrics. We adapt a panel of reference baselines: random, heuristic, masked PPO, a causal-world-model PPO variant, and an architecture-matched scalar control. We propose Causal Graph-Factored Advantage PPO (CGFA-PPO) as a reference causal agent that uses SCM parents of win probability as factor-aligned critic targets with an intervention-calibration loss. All comparisons use paired seeds, paired-bootstrap confidence intervals, and Holm-Bonferroni correction within pre-registered families. Masked PPO and CGFA-PPO reach competitive in-distribution win rates and exceed the random baseline; per-factor calibration trajectories and leave-one-out transfer gaps expose diagnostic structure that scalar win rate alone cannot. We release the benchmark, reference-baseline results, and full evaluation protocol openly. By coupling a strategically rich, partially observed domain with an explicit causal interface and statistical protocol, MTG-Causal-RL gives causal-RL, world-model, and LLM-agent research a shared testbed for questions current benchmarks cannot pose together: causal credit assignment under masked action spaces, structural transfer across archetypes, and SCM-grounded policy auditability.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## HaM-World: Soft-Hamiltonian World Models with Selective Memory for Planning

- **arXiv**: <https://export.arxiv.org/abs/2605.05951v1>
- **ID**: `2605.05951v1`
- **分类**: cs.AI
- **作者**: Haoyun Tang, Haodong Cui, Keyao Xu, Kun Wang, Zhandong Mei
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [HaM-World Soft-Hamiltonian World Models with Selective Memory for Planning.pdf](../pdfs/HaM-World Soft-Hamiltonian World Models with Selective Memory for Planning.pdf)

### 摘要（自动抓取）

World models enable model-based planning through learned latent dynamics, but imagined rollouts become unstable as the planning horizon grows or the dynamics distribution shifts. We argue that this instability reflects two missing structures in planner-facing latents: history-conditioned memory for approximate Markov completeness, and geometric organization that separates configuration, momentum, and task semantics. We propose HaM-World (HMW), a structured world model that decomposes the latent state into a canonical (q, p) subspace and a context subspace c, while using Mamba selective state-space memory as the history-conditioned input to the same latent dynamics. Within this interface, (q, p) evolves through an energy-derived Hamiltonian vector field plus learnable residual/control dynamics, while c captures semantic, dissipative, and non-conservative factors. This gives the planner a single latent state shared by dynamics prediction, reward/value estimation, imagined rollouts, and CEM action search. On four DeepMind Control Suite tasks, HaM-World reaches the highest Avg. AUC (117.9, +9.5%), reduces long-horizon rollout error to 45% of a strong baseline model, and wins 11/12 k in {3,5,7} MSE cells. Under 12 OOD perturbations spanning dynamics shifts, action delay, and observation masking, HaM-World achieves the highest return in every condition, with average OOD-return gains of 10.2% on Finger Spin and 13.6% on Reacher Easy. Mechanism diagnostics further show bounded action-free Hamiltonian-energy drift, structured energy variation under policy rollouts, and coherent control-induced energy transfer, supporting the intended Soft-Hamiltonian dynamics design.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## LoViF 2026 The First Challenge on Holistic Quality Assessment for 4D World Model (PhyScore)

- **arXiv**: <https://export.arxiv.org/abs/2605.05187v1>
- **ID**: `2605.05187v1`
- **分类**: cs.CV
- **作者**: Wei Luo, Yiting Lu, Xin Li, Haoran Li, Fengbin Guan, Chen Gao, Xin Jin, Yong Li, Zhibo Chen, Sijing Wu, Kang Fu, Yunhao Li, Ziang Xiao, Huiyu Duan, Jing Liu, Qiang Hu, Xiongkuo Min, Guangtao Zhai, Manxi Sun, Zixuan Guo, Yun Li, Ziyang Chen, Manabu Tsukada, Zhengyang Li, Zhenglin Du, Yi Wen, Licheng Jiao, Fang Liu, Lingling Li, Yiwen Ren, Zhilong Song, Dubing Chen, Yucheng Zhou, Tianyi Yan, Huan Zheng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

This paper reports on the LoViF 2026 PhyScore challenge, a competition on holistic quality assessment of world-model-generated videos across both 2D and 4D generation settings. The challenge is motivated by a central gap in current evaluation practice: perceptual quality alone is insufficient to judge whether generated dynamics are physically plausible, temporally coherent, and consistent with input conditions. Participants are required to build a metric that jointly predicts four dimensions, i.e., Video Quality, Physical Realism, Condition-Video Alignment, and Temporal Consistency. Depart from that, participants also need to localize physical anomaly timestamps for fine-grained diagnosis. The benchmark dataset contains 1,554 videos generated by seven representative world generative models, organized into three tracks (text-2D, image-to-4D, and video-to-4D) and spanning 26 categories. These categories explicitly cover physics-relevant scenarios, including dynamics, optics, and thermodynamics, together with diverse real-world and creative content. To ensure label reliability, scores and anomaly timestamps are produced through trained human annotation with an additional automated quality-control pass. Evaluation is based on both score prediction and anomaly localization, with a composite protocol that combines TimeStamp_IOU and SRCC/PLCC. This report summarizes the challenge design and provides method-level insights from submitted solutions.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Executable World Models for ARC-AGI-3 in the Era of Coding Agents

- **arXiv**: <https://export.arxiv.org/abs/2605.05138v1>
- **ID**: `2605.05138v1`
- **分类**: cs.AI
- **作者**: Sergey Rodionov
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Executable World Models for ARC-AGI-3 in the Era of Coding Agents.pdf](../pdfs/Executable World Models for ARC-AGI-3 in the Era of Coding Agents.pdf)

### 摘要（自动抓取）

We evaluate an initial coding-agent system for ARC-AGI-3 in which the agent maintains an executable Python world model, verifies it against previous observations, refactors it toward simpler abstractions as a practical proxy for an MDL-like simplicity bias, and plans through the model before acting. The system is intentionally direct: it uses a scripted controller, predefined world-model interfaces, verifier programs, and a plan executor, but no hand-coded game-specific logic. We report results on the 25 public ARC-AGI-3 games. Each recorded playthrough uses a fresh agent instance with no access to previous playthrough-specific files or conversation state. Most games have a single recorded playthrough; for a few games, we report multiple independent fresh-agent playthroughs to expose run-to-run variability. The agent fully solved 7 games, achieved a Relative Human Action Efficiency greater than 75%, on 6 games, and obtained a mean per-game RHAE of 32.58%. Because the system uses no game-specific code, it can serve as a game-general baseline for ARC-AGI-3. Performance on the private validation set remains to be tested. Overall, the results provide preliminary evidence that verifier-driven executable world models are a promising approach for ARC-AGI-3 agents.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Manifold Steering Reveals the Shared Geometry of Neural Network Representation and Behavior

- **arXiv**: <https://export.arxiv.org/abs/2605.05115v1>
- **ID**: `2605.05115v1`
- **分类**: cs.LG
- **作者**: Daniel Wurgaft, Can Rager, Matthew Kowal, Vasudev Shyam, Sheridan Feucht, Usha Bhalla, Tal Haklay, Eric Bigelow, Raphael Sarfati, Thomas McGrath, Owen Lewis, Jack Merullo, Noah Goodman, Thomas Fel, Atticus Geiger, Ekdeep Singh Lubana
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Neural representations carry rich geometric structure; but does that structure causally shape behavior? To address this question, we intervene along paths through activation space defined by different geometries, and measure the behavioral trajectories they induce. In particular, we test whether interventions that respect the geometry of activation space will yield behaviors close to those the model exhibits naturally. Concretely, we first fit an activation manifold $M_h$ to representations and a behavior manifold $M_y$ to output probability distributions. We then test the link $M_h \leftrightarrow M_y$ via interventions: we find that steering along $M_h$, which we term manifold steering, yields behavioral trajectories that follow $M_y$, while linear steering -- which assumes a Euclidean geometry -- cuts through off-manifold regions and hence produces unnatural outputs. Moreover, optimizing interventions in activation space to produce paths along $M_y$ recovers activation trajectories that trace the curvature of $M_h$. We demonstrate this bidirectional relationship between the geometry of representation and behavior across tasks and modalities. In language models, we use reasoning tasks with cyclic and sequential geometries as well as in-context learning tasks with more complex graph geometries. In a video world model, we use a task with geometry corresponding to physical dynamics. Overall, our work shows that geometry in neural representation is not merely incidental, but is in fact the proper object for enabling principled control via intervention on internals. This recasts the core problem of steering from finding the right direction to finding the right geometry.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Driver-WM: A Driver-Centric Traffic-Conditioned Latent World Model for In-Cabin Dynamics Rollout

- **arXiv**: <https://export.arxiv.org/abs/2605.05092v1>
- **ID**: `2605.05092v1`
- **分类**: cs.RO, cs.AI, cs.CV
- **作者**: Haozhuang Chi, Daosheng Qiu, Hao Su, Haochen Liu, Zirui Li, Haoruo Zhang, Chen Lv
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Driver-WM A Driver-Centric Traffic-Conditioned Latent World Model for In-Cabin Dynamics Rollout.pdf](../pdfs/Driver-WM A Driver-Centric Traffic-Conditioned Latent World Model for In-Cabin Dynamics Rollout.pdf)

### 摘要（自动抓取）

Safe L2/L3 driving automation requires anticipating human-in-the-loop reactions during shared-control transitions. While most driving world models forecast the external environment, in-cabin intelligence remains strictly recognition-oriented and lacks multi-step rollout capabilities for driver dynamics. We introduce Driver-WM, a driver-centric latent world model that rolls out in-cabin dynamics causally conditioned on out-cabin traffic context. This formulation unifies physical kinematics forecasting with auxiliary behavioral and emotional semantic recognition. Operating in a compact latent space constructed from frozen vision-language features, Driver-WM adopts a dual-stream architecture to separately encode external traffic and internal driver states. These streams are directionally coupled via a gated causal injection mechanism, which uses a learned vector gate to modulate external contextual perturbations while strictly enforcing temporal causality. Evaluations on a multi-task assistive driving benchmark demonstrate that Driver-WM yields robust long-horizon geometric forecasting for reactive high-motion maneuvers and improves semantic alignment for both driver and traffic states. Finally, the explicit external-to-internal conditioning allows for controlled test-time interventions to systematically analyze mechanism responses.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

