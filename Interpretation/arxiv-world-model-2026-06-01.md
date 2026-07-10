---
date: 2026-06-01
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-06-01（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605311600 TO 202606011559] OR lastUpdatedDate:[202605311600 TO 202606011559]))
```

## Policy and World Modeling Co-Training for Language Agents

- **arXiv**: <https://export.arxiv.org/abs/2606.02388v1>
- **ID**: `2606.02388v1`
- **分类**: cs.LG, cs.AI
- **作者**: Ning Lu, Baijiong Lin, Shengcai Liu, Jiahao Wu, Haoze Lv, Yanbin Wei, Lingting Zhu, Shengju Qian, Xin Wang, Ying-Cong Chen, Qi Wang, Ke Tang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Reinforcement learning (RL) improves large language model (LLM) agents by teaching them which actions lead to high rewards, but provides little supervision on what those actions do to the environment. World modeling (WM) can fill this gap, yet existing approaches often require separate simulators, extra training stages, or additional inference-time computation. We observe that on-policy RL rollouts already contain the needed signal: each transition pairs an action with its resulting next observation. Based on this observation, we propose PaW, a Policy and World modeling co-training framework that adds auxiliary WM supervision to the same policy during RL, without changing the inference paradigm. To make auxiliary WM supervision informative and stable, PaW introduces three components: action-entropy-based WM data selection, noise-tolerant WM loss, and reward-adaptive loss balancing. Experiments on three agentic task benchmarks show consistent improvements over strong RL baselines across models and RL algorithms. These results suggest that standard RL rollouts are a practical source of WM supervision for language-agent training.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## TabPrep: Closing the Feature Engineering Gap in Tabular Benchmarks

- **arXiv**: <https://export.arxiv.org/abs/2606.02384v1>
- **ID**: `2606.02384v1`
- **分类**: cs.LG
- **作者**: Andrej Tschalzev, Nick Erickson, Yuyang Wang, Huzefa Rangwala, Stefan Lüdtke, Heiner Stuckenschmidt, Christian Bartelt
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Progress in tabular machine learning has largely focused on increasingly sophisticated model architectures. At the same time, feature engineering remains a critical yet underexplored component of real-world modeling pipelines that is entirely absent from modern benchmarks, which creates an unquantified evaluation gap. In this work, we introduce TabPrep, a lightweight preprocessing pipeline composed of feature generators that are carefully designed to target three specific structural data patterns. We show that many widely used model classes exhibit predictable blind spots to these patterns and that systematic feature engineering alone can establish new peak performance. Across the TabArena benchmark, integrating TabPrep into model training and tuning consistently improves performance for tree-based, neural, linear, and foundation models, often surpassing gains achieved by model-centric innovations alone. TabPrep outperforms previous automated feature engineering approaches in performance, efficiency, and applicability across datasets, enabling integration into large-scale benchmarks. By releasing TabPrep (see https://github.com/atschalz/tabprep), we enable researchers to integrate feature engineering into their benchmarking setup, filling a longstanding gap in tabular evaluations.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## COMAP: Co-Evolving World Models and Agent Policies for LLM Agents

- **arXiv**: <https://export.arxiv.org/abs/2606.02372v1>
- **ID**: `2606.02372v1`
- **分类**: cs.AI, cs.CL
- **作者**: Youwei Liu, Jian Wang, Hanlin Wang, Wenjie Li
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Equipping language agents with world models enables them to anticipate environment dynamics and evaluate candidate actions before execution. However, existing textual world models are typically fixed after training, preventing them from adapting to the on-policy state-action distributions induced by an evolving agent. Meanwhile, agent-improvement methods often rely on external rewards or verifiers, limiting their applicability in realistic interactive environments. In this paper, we propose COMAP, a novel framework that co-evolves textual world models and agent policies through closed-loop interaction. At each decision step, the world model predicts future state feedback for candidate actions, and the agent performs future-aware reflection by estimating the reliability of this feedback and refining its action accordingly. The resulting on-policy trajectories are then used to update the world model via self-distillation, allowing it to better match the agent's evolving interaction distribution. Across embodied task planning, Web navigation, and tool-use benchmarks, COMAP consistently outperforms competitive baselines, e.g., +16.75% relative improvement with Qwen3-4B. Further analyses show that the co-evolutionary loop improves the world model's prediction accuracy over time and leads to more effective long-horizon decision-making. Our code is available at: https://github.com/loyiv/CoMAP.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Minimax-Optimal Policy Regret in Partially Observable Markov Games

- **arXiv**: <https://export.arxiv.org/abs/2606.02363v1>
- **ID**: `2606.02363v1`
- **分类**: cs.LG, stat.ML
- **作者**: Raman Arora
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

We study sequential decision-making in partially observable environments against strategic, adaptive opponents, modeled as partially observable Markov games (POMGs). The central challenge is to learn latent dynamics from partial observations while facing an adversary whose behavior depends on the learner's strategy, making standard regret notions inadequate. We prove that an epoch-based optimistic maximum-likelihood algorithm achieves $\tilde{O}(\sqrt{T})$ policy regret for fixed problem parameters, with explicit dependence on the horizon, adversary memory, confidence radius, and the aggregate Eluder dimension of the observable-operator class. The algorithm selects one policy per geometrically growing epoch using confidence sets built cumulatively from past data, which keeps the cost of comparing adversary responses across policies logarithmic in $T$. We also prove a lower bound matching the $\sqrt{T}$ and aggregate-Eluder-dimension dependence, up to problem-dependent and logarithmic factors. Finally, we extend the framework to horizon-adaptive guarantees and adversaries with geometric fading memory.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Dynamics Are Learned, Not Told: Semi-Supervised Discovery of Latent Dynamics Geometries For Zero-Shot Policy Adaptation

- **arXiv**: <https://export.arxiv.org/abs/2606.02280v1>
- **ID**: `2606.02280v1`
- **分类**: cs.RO
- **作者**: Zhiming Xu, Weitao Zhou, Xianghui Pan, Nanshan Deng, Chengju Liu, Qijun Chen, Chenpeng Yao
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Real-world dynamics shifts pose a critical challenge for reinforcement learning in robotics, as policies tightly coupled to nominal environments often fail catastrophically when physical conditions change. Most existing methods rely on encoding explicitly identified physical parameters into a latent context, a parameter-centric paradigm that depends on pre-specified axes of variation and becomes brittle under unmodeled or compound dynamics changes. We revisit dynamics adaptation from an outcome-centric perspective: rather than telling policies what the dynamics are, we enable them to learn how dynamics affect interaction outcomes. Theoretically, this is grounded in a monotonic relationship between target-domain regret and the Lipschitz constant of a trajectory dynamics encoder. Practically, this constant can be upper-bounded through contrastive learning, yielding a smooth, task-relevant latent topology without privileged dynamics information. On MuJoCo benchmarks, our method consistently outperforms parameter-centric baselines under severe dynamics shifts, including unmodeled and time-varying parameters, while also improving in-distribution stability and latent interpretability. Overall, these results validate that controlling latent geometry is a principled mechanism for robust adaptation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## World-Task Factorization for Robot Learning

- **arXiv**: <https://export.arxiv.org/abs/2606.02027v1>
- **ID**: `2606.02027v1`
- **分类**: cs.RO, cs.LG, cs.MA
- **作者**: Eduardo Sebastián, Adrian Pfisterer, Vito Mengers, Oliver Brock, Amanda Prorok
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Robot learning must produce policies that generalize to new combinations of constraints, teammates, and environments. To achieve this, we must structurally factor the policy, which is a choice that dictates what generalizes, what requires retraining, and what remains entangled. Existing methods span a wide spectrum, from expecting structure to emerge from data scaling, to hand-designing it via hierarchies, skill libraries or learned specializations. In this paper, we study what we argue is the most fundamental factorization in robotics: separating the world from the task. We investigate the conditions under which this factorization is principled. World factors are properties of the embodied system and the environment; they exist independently of intent. Task factors are defined by the task's logic over what the world admits. We formalize this asymmetry through Bayesian model evidence: it aligns with the data-generating process, maintains high likelihood through an analytical world model, and reduces the Occam razor's penalty on task parameters. We instantiate this factorization by pairing AICON, a differentiable graph of recursive estimators and interconnections that is compositional, operates without task-specific data, and propagates cost gradients to actuators, with a compact, learned policy that modulates gradient paths. Gradients serve as the interface between the two factors: they carry world structure through the graph and task structure through costs, enabling low-dimensional learning while preserving structural generalization. We test the world/task factorization across three problems that encompass heterogeneous robots, environments, task logic and sensorimotor modalities. Our framework outperforms end-to-end baselines and analytical heuristics in all settings, generalizes zero-shot to out-of-distribution configurations, and transfers to real hardware without retraining.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## SafeMCP: Proactive Power Regulation for LLM Agent Defense via Environment-Grounded Look-Ahead Reasoning

- **arXiv**: <https://export.arxiv.org/abs/2606.01991v1>
- **ID**: `2606.01991v1`
- **分类**: cs.AI, cs.CL, cs.CY
- **作者**: Lichao Wang, Zhaoxing Ren, Tianzhuo Yang, Jiaming Ji, Chi Harold Liu, Yaodong Yang, Juntao Dai
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

As Large Language Model (LLM) agents increasingly leverage the Model Context Protocol (MCP) to operate in complex environments, the expansion of their action spaces offers agents unsafe capabilities and underscores the risk of power-seeking. While broad action space and greater environment influence are essential for task fulfillment, they create a fragile risk surface where minor errors or hallucinations are magnified into catastrophic failures. In response, we propose SafeMCP, a {server-side} defense plugin that constrains tool acquisition via predictive reasoning regarding future safety risks. SafeMCP utilizes an internal world model for look-ahead reasoning to implement a two-tier defense: proactive tool filtering to constrain hazardous power expansion and immediate intervention as a fail-safe. To train SafeMCP, we introduce a three-stage pipeline comprising environmental dynamic grounding, safe policy initialization, and reinforcement learning (RL) with dual verifiable rewards. Experiments on PowerSeeking Bench, ToolEmu, and AgentHarm show that SafeMCP achieves a safe equilibrium, effectively mitigating risks while preserving agent utility.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Learning Action-Conditional and Object-Centric Gaussian Splatting World Models for Rigid Objects

- **arXiv**: <https://export.arxiv.org/abs/2606.01950v1>
- **ID**: `2606.01950v1`
- **分类**: cs.RO, cs.CV, cs.LG
- **作者**: Jens U. Kreber, Lukas Mack, Joerg Stueckler
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models enable intelligent agents to predict the consequences of their actions on the environment. In this paper, we propose Multi Rigid Object Gaussian World Model (MRO-GWM), a novel model that learns action-conditional dynamics of rigid objects in 3D. By representing the scene by object-centric Gaussians, we can represent arbitrary object shapes and multi-object scenes. We develop a novel spatio-temporal transformer architecture that predicts future rigid body motion from a history of object Gaussians and future actions. Objects are represented by their Gaussians in a canonical frame, which allows for describing object motion as rigid body transformation. Our model is trained on reconstructions from multiple viewpoints, which requires the model to handle partial observations of objects due to occlusions. We analyze prediction performance of our approach on synthetic datasets composed of typical household objects with multi-object dynamics and interactions by a robot end effector. We also evaluate our model in model-predictive control for non-prehensile manipulation in simulation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning

- **arXiv**: <https://export.arxiv.org/abs/2606.01935v1>
- **ID**: `2606.01935v1`
- **分类**: cs.CV
- **作者**: Ziyang Yao, Zeyu Zhu, YunCheng Jiang, Zibin Guo, Huijing Zhao
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision. The tokenizer aligns its discrete bottleneck with a frozen DINO feature space through feature decoding, while preserving appearance via RGB reconstruction with perceptual and adversarial losses. To inject geometric state-related cues, we add adjacent-frame depth and relative-pose supervision during training and stabilize joint objectives with multi-codebook quantization. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model. Experiments on NAVSIM show improved reconstruction fidelity and representation consistency, competitive planning performance under a fixed decoder, and better generative quality under matched settings.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Physically-Constrained Mamba-SDE for Remaining Useful Life Prediction under Irregular Observations

- **arXiv**: <https://export.arxiv.org/abs/2606.01894v1>
- **ID**: `2606.01894v1`
- **分类**: cs.AI
- **作者**: Deyu Zhuang, Peiliang Gong, Yang Shao, Liyuan Shu, Qi Zhu, Xiaoli Li, Daoqiang Zhang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Accurate Remaining Useful Life prediction is critical for industrial predictive maintenance. However, real-world deployment is challenging due to the irregular nature of sensor observations, characterized by asynchronous sampling, burst missingness, and temporal jitter. Compounding this issue, purely data-driven models often generate physically implausible degradation trajectories that violate the irreversible nature of damage accumulation. To address this, we propose PC-MambaSDE, a unified continuous-time framework for robust RUL prediction under irregular observations. Specifically, we design a Mask-Aware Continuous Mamba Encoder that explicitly leverages observation masks to extract context-rich control signals. Furthermore, we introduce a Physics-Guided Latent SDE with parametrically rectified hybrid drift, superimposing a global physical bias to enforce monotonic degradation even amid severe observation gaps. Additionally, we formulate RUL prediction as a boundary value problem via a Terminal Degradation Penalty, which decouples a Health Index dimension and applies a penalty loss to guide trajectories toward the failure state. Theoretically, we prove that our variational objective is mathematically equivalent to minimizing the KL divergence via Girsanov's theorem, and we guarantee the global asymptotic stability of the learned dynamics through Lyapunov analysis. To enable rigorous evaluation, we develop a Hybrid Irregularity Generation Scheme that simulates realistic industrial imperfections. Extensive experiments on public benchmarks demonstrate that PC-MambaSDE significantly outperforms state-of-the-art methods, particularly under extreme observation scarcity, validating the efficacy of embedding physical priors into continuous-time latent dynamics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## IMWM: Intuition Models Complement World Models for Latent Planning

- **arXiv**: <https://export.arxiv.org/abs/2606.01626v1>
- **ID**: `2606.01626v1`
- **分类**: cs.LG
- **作者**: Baoqi Gao, Ruize Han, Miao Wang, Song Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Planning with a learned latent world model is a promising route to control from raw pixels, but a strong world model alone is not enough. We show this experimentally: even with a perfect world model (operationalized by replacing the learned forward predictor with an idealized rollout of the true environment dynamics), a finite-budget sample-based planner still fails on some tasks, indicating that the bottleneck can lie in search rather than in world-model accuracy. Motivated by this gap, we propose IMWM (Intuition Model + World Model), which pairs the world model with an intuition model trained from demonstrations to recognize promising actions. The two models collaborate through three lightweight components: (i) Retrieval Initialization, which initializes the planner's action proposal from a retrieved demonstration; (ii) Hybrid Cost, which combines the intuition score with the world-model rollout cost; and (iii) a Reliability Gate, which adjusts how much the planner trusts intuition in each setting. Across four pixel-based goal-reaching tasks (Two-Room, Reacher, Push-T, and OGBench-Cube), IMWM has higher mean success than the world-model-only planner on all four, with the largest gains on Two-Room (99.2%, +11.5 percentage points) and OGBench-Cube (94.7%, +28.5 percentage points).

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2606.01600v1>
- **ID**: `2606.01600v1`
- **分类**: cs.CV, cs.CL, cs.RO
- **作者**: Huiqiong Li, Jiayu Wang, Zhiting Mei, Anirudha Majumdar, Jingjing Chen, Bin Zhu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. We introduce RoboTrustBench, a benchmark for evaluating the trustworthiness of video world models under four scenarios: Normal, Constraint-Sensitive, Counterfactual, and Adversarial. Built from real-world DROID episodes, RoboTrustBench contains 1,207 expert-validated instruction-image pairs and a six-dimensional evaluation protocol with 13 fine-grained criteria. Evaluating seven representative video world models with human and MLLM assessment, we find that current models often generate visually coherent videos, but struggle with constraint reasoning, counterfactual grounding, physical interaction, and unsafe-instruction suppression. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## TERRA: Task-Embedded Reasoning and Representation Architecture for Cross-Domain Applications

- **arXiv**: <https://export.arxiv.org/abs/2606.01520v1>
- **ID**: `2606.01520v1`
- **分类**: cs.AI
- **作者**: Shayan Shokri
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

A single action-conditioned latent predictive architecture can in principle be trained on the structured state of a driving scene, a robot workspace, or a financial order book. The ingredients for doing so within any one domain already exist and are individually validated: masked-latent prediction, action-conditioned latent world models, discrete action tokenization, and joint-embedding prediction on voxelized state. What is not established, and what TERRA addresses, is the transfer question: when does a representation or predictor learned in one structured-state domain carry over to a structurally analogous but otherwise unrelated domain, and by how much. We give this question a formal treatment. We model each domain as a controlled Markov process on a graded latent grid, factor any instantiation into thin domain adapters and a shared domain-invariant core, and identify a cross-domain correspondence with an approximate Markov decision process homomorphism whose quality is measured by a lax bisimulation discrepancy and, for domains lacking a shared coordinate system, by a Gromov-Wasserstein distance between their action-conditioned transition operators. Under a Lipschitz predictor we derive a transfer bound that separates source-model error from structural mismatch, grows geometrically in the prediction horizon, and is certified from below by the Gromov-Wasserstein distance; we then connect latent error to decision regret through the Lipschitz value property of bisimulation metrics. The resulting Structured-State Transfer Hypothesis is stated as a falsifiable claim with a preregistered experimental program, centered on a transfer test from driving scenes to order books, including conditions under which it is refuted. We present no empirical results: this is a research proposal that converts a widely repeated intuition into testable theory.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Self-Revising Discovery Systems for Science: A Categorical Framework for Agentic Artificial Intelligence

- **arXiv**: <https://export.arxiv.org/abs/2606.01444v1>
- **ID**: `2606.01444v1`
- **分类**: cs.AI, cond-mat.mtrl-sci, cs.CL, cs.LG, math.CT
- **作者**: Fiona Y. Wang, Markus J. Buehler
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Scientific discovery is not only answer generation but revision of the representational regime in which evidence, artifacts, operations, and verifiers are typed. We develop a category-theoretic account of agentic discovery for materials science. In a fixed regime b with schema category S_b, the system state is a copresheaf I_t: S_b -> Set, and provenance is the category of elements \int_{S_b} I_t. Fixed-regime operation is an update on such states, endofunctorial only when provenance-preserving refinements are specified and preserved. Discovery is instead a verified regime transition u: S_b -> S_b': old artifacts are preserved, transported by the left Kan extension Lan_u I_t, and compared with the post-transition state to identify residual content beyond functorial transport. This separates retrieval, search, and discovery without subjective novelty. We instantiate the framework in two systems. In Builder/Breaker, a protein-mechanics world model is revised under a Minimum Description Length gate; the accepted law expresses within-chain flexibility as all-mode elastic compliance conditioned by slow collective-mode participation, or mode-conditioned compliance. In CategoryScienceClaw, typed skills, artifacts, open needs, workflow mutation, gates, stress tests, and public discourse become a proof-carrying knowledge-computation graph. A fiber-network example records candidate models, rejected alternatives, an AIC gate, perturbation tests, and an accepted orientation-tensor anisotropic stiffness surrogate over an isotropic fiber-count descriptor. Together, the cases show how category theory can be both a mathematical language for discovery and an engineering specification for self-revising AI discovery systems.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## BRo-JEPA: Learning Modular Arithmetic in Latent Space

- **arXiv**: <https://export.arxiv.org/abs/2606.01372v1>
- **ID**: `2606.01372v1`
- **分类**: cs.LG, cs.AI, cs.CV
- **作者**: Divyansh Jha, Yuanfang Xie, Varan Mehra, Brennen Yu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Can neural networks learn abstract algebraic rules, or do they merely memorize training patterns? We investigate this using MNIST digits as states and modular arithmetic operations as actions in a JEPA-style latent world model. Standard supervised baselines and JEPA models with additive operation embeddings fit seen operations but fail to extrapolate reliably to unseen ones. To bridge this gap, we introduce a block-rotation predictor that imposes the circular structure of modulo-10 arithmetic in latent space. This enables strong zero-shot generalization, with the best ResNet-based JEPA block-rotation model achieving 99.46\% zero-shot and 99.46\% rollout accuracy. Our results suggest that latent world models can learn symbolic transformation rules when architecture matches the structure of the problem. Our code can be \href{https://github.com/DL-World-Models/mnist-math}{accessed here}.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

