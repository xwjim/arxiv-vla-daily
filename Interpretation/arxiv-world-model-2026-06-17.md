---
date: 2026-06-17
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-06-17（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202606161600 TO 202606171559] OR lastUpdatedDate:[202606161600 TO 202606171559]))
```

## Lifecycle-Aware Dynamic Analysis for Secure ML Model Execution

- **arXiv**: <https://export.arxiv.org/abs/2606.19023v1>
- **ID**: `2606.19023v1`
- **分类**: cs.CR, cs.LG
- **作者**: Gabriele Digregorio, Marco Di Gennaro, Francesco Pastore, Stefano Zanero, Stefano Longari, Michele Carminati
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

The growing reliance on pre-trained Machine Learning (ML) models has introduced new attack surfaces. Recent vulnerabilities demonstrate that malicious behavior can be embedded within model artifacts, often bypassing existing defenses. Current model-scanning solutions primarily rely on static, format-specific rules or known attack signatures, which limit their ability to generalize across frameworks and to detect novel exploitation paths. In contrast, we propose a solution that focuses on the effects an attack has on the host system executing the model and builds on foundational intuitions about ML model execution. In particular, we observe that ML models operate within well-defined lifecycle phases and that, within each phase, interactions with the host system are highly structured and predictable. We translate these intuitions into Moat, a dynamic lifecycle-aware approach for securing ML model execution, and instantiate this design in Re-Moat, our reference implementation. We evaluate Re-Moat across multiple ML frameworks using 77,974 real-world model artifacts from the Hugging Face Hub, 31 Proofs-of-Concept (PoCs) from CVEs, and 334 models from a state-of-the-art dataset, and compare it against state-of-the-art model-scanning solutions. Our results show that our approach detects all evaluated attack classes while maintaining a close-to-zero false-positive rate, validating our intuitions and motivating dynamic analysis for securing ML model execution.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Mem-World: Memory-Augmented Action-Conditioned World Models for Persistent Robot Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2606.18960v1>
- **ID**: `2606.18960v1`
- **分类**: cs.CV, cs.RO
- **作者**: Zirui Zheng, Jiaqian Yu, Xiongfeng Peng, jun shi, Mingyi Li, Chao Zhang, Weiming Li, Dong Wang, Huchuan Lu, Xu Jia
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Action-conditioned world models have emerged as a promising paradigm for robot learning, offering a scalable alternative to costly real-world experimentation by generating action-consistent video rollouts. However, persistent world modeling remains challenging in manipulation: frequent end-effector occlusions and rapid wrist-camera motion make the current observation insufficient for predicting future views, causing models to forget or hallucinate scene details seen in earlier frames. Existing memory retrieval strategies often fail to identify informative history in dynamic manipulation scenarios. To address this limitation, we propose Mem-World, a memory-augmented multi-view action-conditioned world model. At its core, we present W-VMem, a 4D wrist-view-centered surfel-indexed memory that anchors historical observations to temporally evolving surface elements. By explicitly modeling when and where scene elements are observed, W-VMem enables geometry-aware retrieval of relevant history frames conditioned on future actions. During generation, relevant history frames are selected via surfel-based rendering and scoring, providing informative and non-redundant context for prediction. Extensive experiments show that Mem-World generates persistent rollouts in complex manipulation scenarios, enables more reliable policy evaluation than Ctrl-World, improving the Pearson correlation with real-world performance by 14.5\%, and supports effective policy improvement through synthetic data generation, increasing success rates from 58\% to 72\% on long-horizon tasks.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Physics-IQ Verified

- **arXiv**: <https://export.arxiv.org/abs/2606.18943v1>
- **ID**: `2606.18943v1`
- **分类**: cs.CV
- **作者**: Tim Rädsch, Yuki M Asano, Hilde Kuehne, Stefan Bauer, Priyank Jaini, Robert Geirhos, Carsten T. Lüth
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Video generative models ( VGMs) have become a new frontier that can be used not just for video generation but for a multitude of downstream tasks, including world modeling. To advance these tasks, a good video model must understand the physical reality of the world. Evaluating this understanding is an emerging field and has led to the Physics-IQ benchmark, which quantifies this explicitly by comparing model-generated videos to real-world videos of physical experiments. In this work, we present a systematic audit of the Physics-IQ benchmark, expose shortcomings and propose three solutions that sharpen how we can measure physical understanding of VGMs. Specifically, we improve prompt and ground-truth quality to reduce the influence of confounding factors and further introduce a sample-level scoring system that weights each sample and metric equally. Our resulting benchmark, Physics-IQ Verified, refines 57.6\% of all samples and improves over 34.8\% of prompts. In a comparison study using six image-to-video generative models, we observe moderate but meaningful ranking changes (Kendall's $τ= 0.46$). We hope Physics-IQ Verified advances the community by providing a more reliable signal toward physically accurate VGMs. The code for the benchmark can be accessed at https://github.com/google-deepmind/physics-iq-benchmark

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## DreamReg: Belief-Driven World Model for 2D-3D Ultrasound Registration

- **arXiv**: <https://export.arxiv.org/abs/2606.18825v1>
- **ID**: `2606.18825v1`
- **分类**: cs.CV
- **作者**: Luoyao Kang, Yuelin Zhang, Jiwei Shan, Haifan Gong, Qingpeng Ding, Shing Shin Cheng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Ultrasound (US) is widely used for surgical navigation, yet real-time registration between intraoperative 2D slices and preoperative 3D volumes remains challenging due to partial observability, speckle noise, and the action-dependent US acquisition. Existing methods are one-shot or short-horizon, making it hard for them to gather evidence over time or capture how surgeons adjust probe motion based on on-screen feedback. We propose DreamReg, a belief-driven world-model framework that formulates 2D-3D registration as belief updating over rigid transformations. DreamReg maintains a latent belief state that summarizes past observations and poses information, and continuously refines the transformation through learned dynamics as new slices arrive. During training, DreamReg is exposed to probe-motion trajectories that mimic clinical scanning behavior and learns to update its belief by conditioning pose refinement on the current US observation. During inference, DreamReg refines registration via internal imagination: it rolls out the learned world model to simulate candidate probe motions and their predicted observations, and integrates these imagined outcomes to converge to an accurate rigid transformation. Experiments on CAMUS and u-RegPro datasets demonstrate improved robustness and competitive registration accuracy for real-time guidance compared with state-of-the-art methods.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Stealthy World Model Manipulation via Data Poisoning

- **arXiv**: <https://export.arxiv.org/abs/2606.18697v1>
- **ID**: `2606.18697v1`
- **分类**: cs.LG, cs.CR, cs.RO
- **作者**: Yibin Hu, Xiaolin Sun, Zizhan Zheng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Stealthy World Model Manipulation via Data Poisoning.pdf](../pdfs/Stealthy World Model Manipulation via Data Poisoning.pdf)

### 摘要（自动抓取）

Model-based learning agents use learned world models to predict future states, plan actions, and adapt to new environments. However, the process of updating world models from collected experience creates a training-time attack surface: adversarially poisoned fine-tuning trajectories can manipulate the learned dynamics and thereby corrupt downstream planning. In this paper, we propose SWAAP, the first two-stage data poisoning framework for learned world models. In the first stage, SWAAP identifies a harmful target world model that induces low-return behavior under planning while remaining close to clean dynamics, using first-order bilevel optimization enabled by a transition-gradient theorem. In the second stage, SWAAP realizes this target through stealth-constrained gradient matching, modifying only a limited fraction of fine-tuning transition targets so that the induced training gradients steer the victim model toward the adversarial target, while a prediction-error regularizer encourages the poisoned targets to remain close to the world model's natural approximation error. To assess attack stealthiness, we evaluate defenses and detectability across three stages of the poisoning pipeline: pre-training detection of poisoned transitions, robust training during fine-tuning, and test-time monitoring of the resulting world model. Across diverse continuous-control tasks, SWAAP causes substantial performance degradation while keeping poisoned transitions close to clean data and evading the evaluated non-adaptive residual/CUSUM/TRIM-style defenses. These results reveal a practical vulnerability in world-model adaptation pipelines and highlight the need for robustness methods that protect both world-model training data and learned dynamics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Dual-Channel Grounded World Modeling (DCGWM): Structural Prevention of Objective Interference Collapse via Heterogeneous External Grounding with Inward-Only Gradient Flow

- **arXiv**: <https://export.arxiv.org/abs/2606.18688v1>
- **ID**: `2606.18688v1`
- **分类**: cs.LG, cs.AI
- **作者**: Akshay Hazare
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Dual-Channel Grounded World Modeling (DCGWM) Structural Prevention of Objective Interference Collapse via Heterogeneous External.pdf](../pdfs/Dual-Channel Grounded World Modeling (DCGWM) Structural Prevention of Objective Interference Collapse via Heterogeneous External.pdf)

### 摘要（自动抓取）

Joint Embedding Predictive Architectures (JEPAs) are a leading approach to world model representation learning. We identify a failure mode in JEPA-based world models grounded against two qualitatively distinct external signals: physical dynamics (sparse, high-magnitude, constraint-satisfying gradient corrections) and social-behavioral dynamics (diffuse, distribution-matching corrections). We term this Objective Interference Collapse (OIC): we argue that joint learning in a shared latent space causes the dominant channel to systematically collapse the subordinate channel's representational subspace, in a manner not resolvable by loss weighting alone. We propose Dual-Channel Grounded World Modeling (DCGWM), designed to structurally prevent OIC through a partitioned latent space (physical subspace Z_p, behavioral subspace Z_b) with inward-only gradient flow. A Physical Grounding Channel updates only Z_p via VICReg-style alignment to physical measurements; a Social-Behavioral Grounding Channel updates only Z_b via alignment to trajectories from an emergent multi-agent simulation. An Inter-Channel Interface Module couples the subspaces at the task level without cross-subspace gradients. An Asymmetric Grounding Adherence Loss penalizes rollout drift with a hard hinge for physical violations and a soft KL for behavioral divergence. A Generative Rendering Layer is architecturally isolated from the latent world model. We present three theoretical results: the partition removes the gradient-interference pathway implicated in OIC; each grounded subspace inherits anti-collapse guarantees from its alignment objective; and generative isolation is necessary under a stated assumption on the generative objective's geometry. This manuscript establishes the problem formulation and architecture; experimental validation is ongoing and will be reported in a future revision.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## SC3-Eval: Evaluating Robot Foundation Models via Self-Consistent Video Generation

- **arXiv**: <https://export.arxiv.org/abs/2606.18610v1>
- **ID**: `2606.18610v1`
- **分类**: cs.RO, cs.CV
- **作者**: Wei-Cheng Tseng, Gashon Hussein, Yuzhu Dong, Allen Z. Ren, Lucy X. Shi, XuDong Wang, Sergey Levine, Zhaoshuo Li, Jinwei Gu, Florian Shkurti, Ming-Yu Liu, Quan Vuong
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Evaluating generalist robot manipulation policies in the real world is expensive, slow, and difficult to scale. Action-conditioned video world models offer a scalable alternative by simulating policy rollouts. Autoregressive rollouts accumulate compounding errors, observations across multiple camera views must remain mutually consistent, and the evaluator must generalize to policies whose behaviors lie outside the training distribution. We address these challenges with SC3-Eval, a self-consistent video generation recipe that adapts a pre-trained video foundation model into an accurate policy evaluator by enforcing three complementary forms of consistency. First, forward-inverse dynamics consistency jointly trains the model to predict frames from actions and to recover actions from frames, anchoring generated rollouts to a physically plausible action manifold and counteracting the drift a forward-only model cannot penalize. Second, cross-view consistency trains the model to inpaint each camera view from the other, keeping the multi-camera observation coherent over long rollouts without any explicit memory mechanism. Third, test-time consistency reuses the inverse dynamics mode at inference as a per-action-chunk uncertainty signal that terminates rollouts whose generated frames drift away from the requested actions. We also demonstrate SC3-Eval rollouts reproduce the failure modes that policies exhibit in real-world rollouts, supporting fine-grained diagnostic comparison rather than aggregate ranking alone. Across seven real-world vision-language-action policies, SC3-Eval attains a closed-loop Pearson correlation of $0.929$ and MMRV of $0.119$, outperforming three strong prior video-model-based baselines, and generalizes to new tasks.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## DREAM-Chunk: Reactive Action Chunking with Latent World Model

- **arXiv**: <https://export.arxiv.org/abs/2606.18589v1>
- **ID**: `2606.18589v1`
- **分类**: cs.RO
- **作者**: Wenxi Chen, Kaidi Zhang, Chi Lin, Zhiyuan Zhang, Yu She, Yuejiang Liu, Raymond A. Yeh, Shaoshuai Mou, Yan Gu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [DREAM-Chunk Reactive Action Chunking with Latent World Model.pdf](../pdfs/DREAM-Chunk Reactive Action Chunking with Latent World Model.pdf)

### 摘要（自动抓取）

Action chunking has become a common interface for vision-language-action (VLA) models, enabling low-frequency policy inference to drive high-frequency robot execution. However, once an action chunk is committed, its open-loop execution can be brittle under stochastic dynamics, hardware execution errors, and partial observability. We propose DREAM-Chunk, a test-time scaling method that augments chunking-based policies with a lightweight latent world model, without requiring additional policy fine-tuning. At test time, DREAM-Chunk samples multiple candidate action chunks, rolls out their predicted latent futures, and selects actions from the chunk whose predicted state best matches the observed rollout. In this way, DREAM-Chunk uses additional test-time computation to cover multiple plausible stochastic futures and improve reactivity during long-horizon chunk execution. On the Kinetix benchmark, DREAM-Chunk improves robustness under increasing action noise and benefits from larger candidate sample sizes, especially when demonstrations contain corrective behaviors. We further validate DREAM-Chunk on four manipulation tasks across two robot platforms and two VLA policies under various sources of stochasticity. Across simulation and hardware experiments, DREAM-Chunk improves the robustness of action-chunking policies in stochastic dynamics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## PAIWorld: A 3D-Consistent World Foundation Model for Robotic Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2606.18375v1>
- **ID**: `2606.18375v1`
- **分类**: cs.RO
- **作者**: Yuhang Huang, Xuan Lv, Junyan Xu, Zhiyuan Yu, Jiazhao Zhang, Ruizhen Hu, Wancheng Feng, Shilong Zou, Hewen Xiao, Ziqiao Zhou, Kaiyun Huang, Zhiyu Peng, Juzhan Xu, Hang Zhao, Chenyang Zhu, Renjiao Yi, Yifei Huang, Douhui Wu, Yan Zhang, Kexu Cheng, Chunhe Song, Yunzhi Xue, Xiuhong Zhang, Leitao Guo, Yunji Chen, Bin Wu, Haibin Yu, Kai Xu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World foundation models (WFMs) are powerful simulators, yet they predominantly operate in a single-view setting and lack the multi-view 3D consistency required for robotic manipulation. While robotic systems rely on multiple cameras (egocentric, eye-to-hand, and wrist-mounted) for policy learning, current multi-view world models simply concatenate view tokens without explicit geometric reasoning. This causes cross-view object drift, depth inconsistency, and texture misalignment. We trace these failures to two deficiencies: the absence of an explicit inter-view communication mechanism and the lack of a 3D geometric prior. We argue that resolving both simultaneously is necessary and sufficient. To address this, we present PAIWorld, a framework that augments diffusion-transformer world models via three core components: (1) Geometry-Aware Cross-View Attention blocks that establish an explicit pathway across views, (2) Geometric Rotary Position Embedding that encodes camera ray directions and extrinsic poses into the attention mechanism, and (3) Latent 3D-REPA, which distills 3D-aware features from frozen 3D foundation models to ensure 3D consistency. Built upon a DiT-based world foundation model, PAIWorld achieves state-of-the-art multi-view 3D consistency on robotic manipulation benchmarks, ranking 1st on the WorldArena leaderboard and 2nd on the AgiBot-Challenge2026 leaderboard, while enabling downstream applications such as model-based planning, world action models, and multi-view policy post-training.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Future Dynamic 3D Reconstruction: A 3D World Model with Disentangled Ego-Motion

- **arXiv**: <https://export.arxiv.org/abs/2606.18250v1>
- **ID**: `2606.18250v1`
- **分类**: cs.CV
- **作者**: Nils Morbitzer, Jonathan Evers, Artem Savkin, Thomas Stauner, Nassir Navab, Federico Tombari, Stefano Gasperini
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Future Dynamic 3D Reconstruction A 3D World Model with Disentangled Ego-Motion.pdf](../pdfs/Future Dynamic 3D Reconstruction A 3D World Model with Disentangled Ego-Motion.pdf)

### 摘要（自动抓取）

Forecasting the evolution of dynamic environments is crucial for autonomous agents. While generative world models have recently achieved high photorealism in 2D video synthesis by mixing ego-motion and environmental dynamics within the image plane, they exhibit physical inconsistencies, such as morphing or vanishing objects, especially over long time horizons. In this paper, we propose FR3D, a world model that predicts a persistent 3D latent representation for future dynamic 3D reconstruction. Unlike prior works that treat the world as a sequence of image-based features, FR3D explicitly decouples the 3D evolution of the scene from the agent's trajectory, treating the inferred ego-motion as a latent proxy for action. This disentanglement resolves the ambiguities between self-motion and world-motion, ensuring geometric consistency into the future. Furthermore, we introduce a teacher-student distillation strategy that leverages the spatial "common sense" of off-the-shelf foundation models, leading to robust zero-shot generalization. Extensive experiments demonstrate FR3D's strong performance for future dynamic 3D reconstruction from monocular observations across multiple datasets, even 2 seconds into the future. Project page: https://fr3d-wm.github.io.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Looped World Models

- **arXiv**: <https://export.arxiv.org/abs/2606.18208v1>
- **ID**: `2606.18208v1`
- **分类**: cs.LG, cs.AI, cs.CL, cs.CV
- **作者**: Hongyuan Adam Lu, Z. L. Victor Wei, Qun Zhang, Jinrui Zeng, Bowen Cao, Lingwei Meng, Mocheng Li, Zezhong Wang, Haonan Yin, Naifu Xue, Minyu Chen, Cenyuan Zhang, Zefan Zhang, Hao Wei, Jiawei Zhou, Haoran Xu, Hao Yang, Ronglai Zuo, Tongda Xu, Yonghao Li, Jian Chen, Hebin Wang, Zeyu Gao, Yang Li, Wei Zhao, Qimin Zhong, Siqi Liu, Yumeng Zhang, Leyan Cui, Zhangyu Wang, Wai Lam
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Looped World Models.pdf](../pdfs/Looped World Models.pdf)

### 摘要（自动抓取）

Current world models face a fundamental tension: faithful long-horizon simulation demands deep computation, but deeper models are expensive to deploy and prone to compounding errors. We resolve this by introducing Looped World Models (LoopWM), which are the first looped architectures for world modelling. Our method iteratively refines latent environment states through a parameter-shared transformer block. This yield up to 100x parameter efficiency over conventional approaches with adaptive computation that automatically scales depth to match the complexity of each prediction step. Orthogonal to scaling model size and training data, LoopWM establishes iterative latent depth as a new scaling axis for world simulation, which might significantly push the community forward.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## EgoCS-400K: An Egocentric Gameplay Dataset for World Models

- **arXiv**: <https://export.arxiv.org/abs/2606.18180v1>
- **ID**: `2606.18180v1`
- **分类**: cs.CV
- **作者**: Rongjin Guo, Dong Liang, Yuhao Liu, Fang Liu, Tianyu Huang, Gerhard P. Hancke, Rynson W. H. Lau
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [EgoCS-400K An Egocentric Gameplay Dataset for World Models.pdf](../pdfs/EgoCS-400K An Egocentric Gameplay Dataset for World Models.pdf)

### 摘要（自动抓取）

The shift from video generation to interactive world modeling places new demands on data: beyond captioned videos, world models require temporally aligned video-action-language trajectories grounded in the actions, camera motion, states, and events that drive future scene changes. However, such data is difficult to obtain at scale. Web video datasets offer broad visual coverage but lack executable actions and reliable states; robotic datasets provide action and state supervision but are costly and limited in scene diversity; and existing simulators often lack large-scale human-driven interaction trajectories. In this paper, we introduce EgoCS-400K, a large-scale replay-grounded egocentric Counter-Strike dataset for world models, built from public professional CS and CS2 match demos that preserve human gameplay trajectories and enable parsing, replaying, rendering, and temporal alignment. We extract player states, view directions, movements, keyboard/button inputs, view-angle changes, weapon usage, game events, and round-level context, and render clean first-person videos from the same trajectories. EgoCS-400K contains over 400,000 first-person videos and 10,000 hours of gameplay from more than 1,000 matches and 40,000 rounds, covering 13 maps and 10 player viewpoints per round. It supports a range of interactive visual modeling tasks, including action-conditioned future prediction, state- and event-aware scene rollout, replay-grounded captioning, and agent egocentric action understanding. By connecting visual observations with human actions, camera motion, game states, and events at scale, EgoCS-400K serves as a practical bridge between passive web videos, controllable game simulation, and costly real-world embodied data.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

