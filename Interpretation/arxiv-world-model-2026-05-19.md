---
date: 2026-05-19
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-19（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605181600 TO 202605191559] OR lastUpdatedDate:[202605181600 TO 202605191559]))
```

## World-Ego Modeling for Long-Horizon Evolution in Hybrid Embodied Tasks

- **arXiv**: <https://export.arxiv.org/abs/2605.19957v1>
- **ID**: `2605.19957v1`
- **分类**: cs.CV, cs.AI, cs.RO
- **作者**: Zuyao Lin, Jianhui Zhang, Peidong Jia, Xiaoguang Zhao, Shanghang Zhang, Xingyu Chen
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [World-Ego Modeling for Long-Horizon Evolution in Hybrid Embodied Tasks.pdf](../pdfs/World-Ego Modeling for Long-Horizon Evolution in Hybrid Embodied Tasks.pdf)

### 摘要（自动抓取）

World models are widely explored in embodied intelligence, yet they typically predict distinct evolutions of the world and the ego within a single stream, where the world captures persistent instruction-agnostic scene regularities and the ego captures robot-centric instruction-conditioned dynamics. This world-ego entanglement leads to a degradation in long-horizon embodied scenarios, particularly in hybrid tasks with interleaved navigation and manipulation behaviors. In this paper, we introduce \emph{World-Ego Modeling}, a new conceptual paradigm that decomposes future evolution into world and ego components. We define the world-ego boundary from three perspectives, i.e., motion-, semantic-, and intention-based views, and analyze three disentanglement strategies with post-, pre-, and full disentanglement. Further, we instantiate this paradigm as the World-Ego Model (WEM), a unified embodied world model that couples an implicit separate world-ego planner with a cascade-parallel mixture-of-experts (CP-MoE) diffusion generator. To enable rigorous evaluation, we further construct HTEWorld, the first benchmark for long-horizon world modeling with hybrid navigation-manipulation tasks, providing 125K video clips (over 4.5M frames) with fine-grained action annotations and 300 multi-turn evaluation trajectories (over 2K instructions). Extensive experiments show that WEM achieves state-of-the-art performance on HTEWorld while remaining competitive on existing manipulation-only benchmarks.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## AffectVerse: Emotional World Models for Multimodal Affective Computing

- **arXiv**: <https://export.arxiv.org/abs/2605.19950v1>
- **ID**: `2605.19950v1`
- **分类**: cs.CV
- **作者**: Bo Zhao, Fanghua Ye, Yixin Ji, Sicheng Zhao, Xiaojiang Peng, Zitong YU
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Humans infer emotions by integrating observed multimodal cues with expectations about how affective states may unfold. Existing multimodal large language models (MLLMs), however, often treat emotion recognition as static fusion over complete audiovisual-text inputs, leaving affective dynamics implicit. We propose AffectVerse, a Qwen2.5-Omni-based model equipped with an Emotion World Module (EWM), an action-free representation-level module for short-horizon latent affective prediction. \rev{EWM contains three modules: 1) Cross-Modal Temporal Imagination predicts future video/audio representations from past tokens with multi-step rollout. 2) MAMA(Modality-Aware Multi-step Attention) Belief Aggregation compresses imagined tokens into modality-aware belief tokens. 3) Belief Injection inserts these belief tokens into the LLM for affective reasoning.} AffectVerse uses future prediction as a past-conditioned self-supervised signal: it does not replace modeling observed history or require unseen signals at inference, but forces the current belief state to encode transition cues that are predictive of subsequent affective change. Across nine benchmarks, AffectVerse improves at least 2.57\% over other models, while controlled ablations show additive gains from temporal imagination, cross-modal rollout, and belief aggregation. These results suggest predictive belief-state modeling is a practical alternative for affective computing.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## RoHIL: Robust Human-in-the-Loop Robotic Reinforcement Learning Against Illumination Variations

- **arXiv**: <https://export.arxiv.org/abs/2605.19924v1>
- **ID**: `2605.19924v1`
- **分类**: cs.RO
- **作者**: Shuoqin Zhang, Yixin Xiong, Xiru Gao, Kai Liu, Ke Wang, Xichuan Zhou, Zhe Hu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Human-in-the-loop reinforcement learning systems achieve near-perfect success on the workstation where they are trained, but collapse when the same robot is moved to a workstation a few meters away due to shifts in the visual input distribution caused by new lamp positions and window light. Re-collecting demonstrations and re-running HIL on every workstation is incompatible with deployment, and naively fine-tuning on shifted-light data triggers catastrophic forgetting of the source workstation. To close this cross-domain gap, we present RoHIL, an offline fine-tuning framework that uses no extra real-robot interaction. RoHIL combines (i) a world-model-based image relighter that re-synthesises the visual stream of source-workstation trajectories under multiple virtual HDRI environments, leaving actions and rewards real; (ii) Illumination-Retention Replay (IRR), a data-level anti-forgetting mechanism that interleaves relit adaptation transitions with original-light retention transitions to preserve source-workstation Bellman coverage; and (iii) an anchored Bellman-actor regulariser that constrains representation and policy drift from the original source-workstation policy. Across four real-robot manipulation tasks under significant cross-workstation illumination variations, RoHIL substantially improves shifted-light performance where standard HIL-RL collapses, while preserving source-workstation performance, eliminating the need to re-collect data and retrain for every new workstation and environment. Project page: https://anonymous4365.github.io/RoHIL/

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## HEAT: Heterogeneous End-to-End Autonomous Driving via Trajectory-Guided World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.19631v1>
- **ID**: `2605.19631v1`
- **分类**: cs.RO, cs.CV
- **作者**: Hoonhee Cho, Giwon Lee, Jae-Young Kang, Hyemin Yang, Heejun Park, Kuk-Jin Yoon
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [HEAT Heterogeneous End-to-End Autonomous Driving via Trajectory-Guided World Models.pdf](../pdfs/HEAT Heterogeneous End-to-End Autonomous Driving via Trajectory-Guided World Models.pdf)

### 摘要（自动抓取）

End-to-end autonomous driving has emerged as a compelling alternative to traditional modular pipelines by directly mapping raw sensor data to driving actions. While recent approaches achieve strong performance on single-domain datasets, their performance degrades significantly when trained jointly across multiple heterogeneous domains. In practice, however, autonomous systems must operate across diverse environments with heterogeneous distributions, including different cities, sensor configurations, and traffic patterns, without domain-specific retraining. This gap highlights a key challenge in multi-domain learning: domain-specific variations across heterogeneous domains introduce conflicting learning signals, driving models toward compromised solutions that are suboptimal across domains. To address this, we propose a trajectory-driven learning paradigm that organizes training around planning trajectories, enabling the model to capture domain-invariant representations of driving intent. Furthermore, we incorporate a world model that predicts future latent features conditioned on ego actions, improving feature consistency and mitigating domain-induced biases. We evaluate our approach on three benchmarks, nuScenes, NAVSIM, and the Waymo end-to-end dataset, and show substantial improvements over existing methods across all domains. Our results demonstrate that a single unified model can be trained on heterogeneous datasets while maintaining strong performance within each domain, highlighting a step toward scalable real-world deployment. We will make our code publicly available.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## FlyMirage: A Fully Automated Generation Pipeline for Diverse and Scalable UAV Flight Data via Generative World Model

- **arXiv**: <https://export.arxiv.org/abs/2605.19600v1>
- **ID**: `2605.19600v1`
- **分类**: cs.RO
- **作者**: Jinhan Li, Xijie Huang, Zhaoqi Wang, Yijin Wang, Weiqi Ge, Qiyi He, Mo Zhu, Fei Gao, Yuze Wu, Xin Zhou
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [FlyMirage A Fully Automated Generation Pipeline for Diverse and Scalable UAV Flight Data via Generative World Model.pdf](../pdfs/FlyMirage A Fully Automated Generation Pipeline for Diverse and Scalable UAV Flight Data via Generative World Model.pdf)

### 摘要（自动抓取）

In the field of Vision-Language Navigation (VLN), aerial datasets remain limited in their ability to combine scale, diversity, and realism, often relying on either costly real-world scenes or visually limited simulations. To address these challenges, we introduce FlyMirage, a highly scalable and fully automated data generation pipeline for aerial VLN. Our approach leverages large language models (LLM) as an environment designer to promote scene diversity, paired with a generative world model that instantiates these designs into high-fidelity 3D Gaussian Splatting (3DGS) scenes. To substantially reduce human labor and ensure the feasibility of flight data, FlyMirage automates scene exploration and semantic information acquisition, and further integrates a dynamically feasible planner for uncrewed aerial vehicle (UAV) trajectory generation. Utilizing this toolchain, we generate a large-scale, diverse, and photorealistic aerial VLN dataset, with dynamically feasible flying trajectories, designed to support the development of next-generation embodied navigation models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## HalluWorld: A Controlled Benchmark for Hallucination via Reference World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.19341v1>
- **ID**: `2605.19341v1`
- **分类**: cs.CL, cs.AI, cs.LG, stat.ML
- **作者**: Emmy Liu, Varun Gangal, Michael Yu, Zhuofu Tao, Karan Singh, Sachin Kumar, Steven Y. Feng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [HalluWorld A Controlled Benchmark for Hallucination via Reference World Models.pdf](../pdfs/HalluWorld A Controlled Benchmark for Hallucination via Reference World Models.pdf)

### 摘要（自动抓取）

Hallucination remains a central failure mode of large language models, but existing benchmarks operationalize it inconsistently across summarization, question answering, retrieval-augmented generation, and agentic interaction. This fragmentation makes it unclear whether a mitigation that works in one setting reduces hallucinations across contexts. Current benchmarks either require human annotation and fixed references that may be memorized, or rely on observations in settings that are difficult to reproduce. To study root causes, we introduce HalluWorld, an extensible benchmark grounded in an explicit reference-world formulation: a model hallucinates when it produces an observable claim that is false with respect to this world. Building on this view, we construct synthetic and semi-synthetic environments in which the reference world is fully specified, the model's view is controlled, and hallucination labels are generated automatically. HalluWorld spans gridworlds, chess, and realistic terminal tasks, enabling controlled variation of world complexity, observability, temporal change, and source-conflict policy, and disentangling hallucinations into fine-grained error categories. We evaluate frontier and open-weight language models across these settings and find consistent patterns: perceptual hallucination on directly observed information is near-solved for frontier models, while multi-step state tracking and causal forward simulation remain difficult and are not generally solved by extended thinking. In the terminal setting, models also struggle with when to abstain. The uneven profile of failures across probe types and domains suggests that hallucinations arise from distinct failure modes rather than a single capability. Our results suggest that controlled reference worlds offer a scalable and reproducible path toward measuring and reducing hallucinations in modern language models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## SWEET: Sparse World Modeling with Image Editing for Embodied Task Execution

- **arXiv**: <https://export.arxiv.org/abs/2605.19319v1>
- **ID**: `2605.19319v1`
- **分类**: cs.CV
- **作者**: Yiren Song, Yihan Wang, Xiyao Deng, Zhuoran Yan, Mike Zheng Shou
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Visual prediction has emerged as a promising paradigm for embodied control, where future observations are generated and then translated into actions. However, dense video generation is computationally expensive and often unnecessary for many manipulation tasks, whose progress can be summarized by a small number of task-relevant visual states. In this work, we study whether image editing models can serve as sparse visual world models for robot manipulation by predicting task-level future states without dense video rollout. We first conduct a controlled comparison between the video generation model Wan2.2 and the image editing model FLUX-Kontext under the same robotic data setting, and find that image editing produces more reliable task-level keyframes with better visual fidelity and substantially lower inference cost. Motivated by this observation, we propose SWEET, a one-shot sparse visual planning framework that progressively generates a sequence of task-relevant manipulation keyframes through successive image editing, conditioned on language instructions and optional arrow-based spatial guidance. A goal-conditioned diffusion action predictor then converts adjacent imagined keyframes into executable action chunks. To reduce the mismatch between real and edited visual subgoals, we further introduce a mixed-training strategy with filtered edited targets. Experiments on DROID and RoboMimic show that SWEET improves keyframe prediction across seen and unseen scenes and enables a full pipeline from sequential keyframe planning to executable robot actions, suggesting that image editing is a promising and underexplored direction for embodied visual prediction.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## PhyWorld: Physics-Faithful World Model for Video Generation

- **arXiv**: <https://export.arxiv.org/abs/2605.19242v1>
- **ID**: `2605.19242v1`
- **分类**: cs.CV, cs.AI, cs.ET, cs.LG, cs.MM
- **作者**: Pu Zhao, Juyi Lin, Timothy Rupprecht, Arash Akbari, Chence Yang, Rahul Chowdhury, Elaheh Motamedi, Arman Akbari, Yumei He, Chen Wang, Geng Yuan, Weiwei Chen, Yanzhi Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World simulators can provide safe and scalable environments for training Physical AI systems before real-world deployment. Large video generation models are emerging as a promising basis for such simulators because they can generate diverse and realistic visual futures. However, using them as world simulators requires physically faithful video continuations, namely, generated videos that preserve the physical state implied by the conditioning input, and evolve in ways consistent with basic physical principles. We propose PhyWorld, a video generation world model designed to produce temporally coherent and physically faithful scene continuations through two-stage post-training. In the first stage, we improve video-to-video continuation with flow matching fine-tuning, encouraging stable visual attributes and coherent motion dynamics across frames. In the second stage, we align generated dynamics with physical principles using Direct Preference Optimization (DPO) over physics preference pairs, guiding the model toward outputs with higher physical plausibility. To evaluate PhyWorld, we use both standard video-quality benchmarks and a dedicated physical-faithfulness benchmark with per-law scoring. Experiments show that PhyWorld improves video consistency, achieving an average score of 0.769 on VBench compared with 0.756 or below for state-of-the-art baselines. PhyWorld also improves physical plausibility, reaching an average score of 3.09 on our physical-faithfulness benchmark compared with 2.99 for the strongest baseline. These results suggest that post-training large video generation models with continuation and physics-preference signals can make them more effective world simulators for Physical AI.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Not all uncertainty is alike: volatility, stochasticity, and exploration

- **arXiv**: <https://export.arxiv.org/abs/2605.19215v1>
- **ID**: `2605.19215v1`
- **分类**: cs.AI
- **作者**: Payam Piray
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Not all uncertainty is alike volatility, stochasticity, and exploration.pdf](../pdfs/Not all uncertainty is alike volatility, stochasticity, and exploration.pdf)

### 摘要（自动抓取）

Adaptive decision-making in biological and artificial intelligence requires balancing the exploitation of known outcomes with the exploration of uncertain alternatives. Although prior work suggests that uncertainty generally promotes exploration, it has typically treated distinct sources of environmental uncertainty as equivalent. We consider environments with latent reward states that drift over time (volatility) and are observed through noisy outcomes (stochasticity). Both increase posterior uncertainty, yet we show they drive optimal exploration in opposite directions: volatility enhances it, stochasticity suppresses it. We establish this asymmetry formally by extending the Gittins index framework to Gaussian state-space bandits with latent dynamics. We further derive Cause-Aware Uncertainty-Sensitive Exploration (CAUSE), a closed-form exploration bonus obtained via control-as-inference that inherits the same monotonicities. CAUSE outperforms standard exploration strategies in environments with heterogeneous noise structure, and also improves on a Gittins-per-arm policy whose rested-bandit optimality does not transfer to restless settings. Learning and exploration are governed by the same noise-inference asymmetry, and the framework predicts that pathological noise inference produces \emph{reversed} rather than merely impaired exploration, with implications for computational accounts of psychiatric conditions.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## The impact of observation density on Bayesian inversion of latent dynamics in shock-dominated flows

- **arXiv**: <https://export.arxiv.org/abs/2605.19076v1>
- **ID**: `2605.19076v1`
- **分类**: cs.LG, physics.flu-dyn
- **作者**: Bipin Tiwari, Muhammad Abid, Omer San
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [The impact of observation density on Bayesian inversion of latent dynamics in shock-dominated flows.pdf](../pdfs/The impact of observation density on Bayesian inversion of latent dynamics in shock-dominated flows.pdf)

### 摘要（自动抓取）

Inferring unknown initial states in shock-dominated compressible flows from sparse and noisy measurements is a challenging ill-posed inverse problem due to nonlinear wave interactions and limited sensing. In this work, we develop a non-intrusive reduced-order modeling framework for efficient Bayesian initial-state inversion with uncertainty quantification. The framework combines a convolutional autoencoder with a learned latent-space forward operator. The autoencoder compresses high-dimensional flow fields into a compact nonlinear latent representation, while the forward operator predicts final-time latent states from encoded initial conditions. This AE-ROM surrogate enables rapid forward evaluations and is embedded within a No-U-Turn Sampler (NUTS) for posterior exploration. The framework is demonstrated using 500 high-fidelity Sod shock tube simulations generated through Latin hypercube sampling and solved using a fifth-order WENO scheme. The inverse problem seeks to recover unknown left and right density and pressure states from sparse noisy observations of final-time density and pressure fields. Results show that the AE-ROM accurately reconstructs key shock-tube structures, including the rarefaction wave, contact discontinuity, and shock front. A latent dimension of 32 provides an effective balance between reconstruction accuracy and reduced-space compactness, while 250 training simulations are sufficient for accurate reconstruction. Increasing observation density significantly contracts posterior uncertainty, reducing the mean posterior standard deviation by approximately 78% for density and 76% for pressure. Overall, the proposed framework provides a computationally efficient and uncertainty-aware approach for inverse analysis of shock-dominated flows, with potential extensions to multidimensional compressible-flow and digital-twin applications.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Actionable World Representation

- **arXiv**: <https://export.arxiv.org/abs/2605.18743v1>
- **ID**: `2605.18743v1`
- **分类**: cs.AI
- **作者**: Kunqi Xu, Jitao Li, Jianglong Ye, Tianshu Tang, Isabella Liu, Sifei Liu, Xueyan Zou
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Inspired by the emergent behaviors in large language models that generalized human intelligence, the research community is pursuing similar emergent capabilities within world models, with a emphasis on modeling the physical world. Within the scope of physical world model, objects are the fundamental primitives that constitute physical reality. From humans to computers, nearly everything we interact with is an object. These objects are rarely static; they are actionable entities with varying states determined by their intrinsic properties. While current methods approach object action states either via video generation or dynamic scene reconstruction, none explicitly model this basic element in a unified, principled way to build an actionable object representation. We propose WorldString, a neural architecture capable of modeling the state manifold of real-world objects by learning directly from point clouds or RGB-D video streams. Serving as a versatile digital twin, it acts as a foundational building block for physical world models; thus, we name it WorldString. Sweetly, its fully differentiable structure seamlessly enables future integration with policy learning and neural dynamics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Robo-Cortex: A Self-Evolving Embodied Agent via Dual-Grain Cognitive Memory and Autonomous Knowledge Induction

- **arXiv**: <https://export.arxiv.org/abs/2605.18729v1>
- **ID**: `2605.18729v1`
- **分类**: cs.RO, cs.CV
- **作者**: Nga Teng Chan, Yi Zhang, Yechi Liu, Renwen Cui, Fanhu Zeng, Zeyuan Ding, Xiancong Ren, Zhang Zhang, Qifeng Chen, Jian Liu, Yong Dai, Xiaozhu Ju
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

The ability to navigate and interact with complex environments is central to real-world embodied agents, yet navigation in unseen environments remains challenging due to "experiential amnesia," where existing trajectory-driven or reactive policies fail to synthesize generalizable strategies from past interactions. We propose Robo-Cortex, a self-evolving framework that enables robots to autonomously induce navigation heuristics and refine cognitive strategies through a continuous reflection-adaptation loop. By abstracting success patterns and failure pitfalls into natural-language heuristics, Robo-Cortex enables a transition from passive execution to active strategy evolution. Our core innovation is an Autonomous Knowledge Induction (AKI) mechanism that distills multimodal trajectories into a structured Navigation Heuristic Library for knowledge generalization. The architecture further incorporates a Dual-Grain Cognitive Memory system, comprising a Short-term Reflective Memory (SRM) for real-time local progress analysis, and a Long-term Principle Memory (LPM) that abstracts past trajectories into reusable guiding and cautionary principles. To ensure robust decision-making, we introduce a multimodal Imagine-then-Verify loop, where a world model simulates potential outcomes and a VLM-based evaluator validates action plans. Extensive evaluations on IGNav, AR, and AEQA show that Robo-Cortex consistently outperforms strong baselines in both task success and exploration efficiency, with gains of up to +4.16% SPL over the strongest prior method and up to +15.30% SPL under heuristic transfer to unseen environments. Preliminary real-world robotic experiments further support the effectiveness of Robo-Cortex in physical settings.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Incantation: Natural Language as the Action Interface for Multi-Entity Video World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.18601v1>
- **ID**: `2605.18601v1`
- **分类**: cs.CV
- **作者**: Shangwen Zhu, Qianyu Peng, Zhao Pu, Zhilei Shu, Xiangrui Ke, Zhaohu Xing, Zizhao Tong, Zeqing Wang, Xinyu Cui, Huangji Wang, Jian Zhao, Yeying Jin, Fan Cheng, Ruili Feng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Modern interactive video world models have achieved impressive visual fidelity, yet lack fine-grained multi-entity control and cross-entity, cross-world generalization. We trace this gap to the action interface: standard control protocols (e.g. animation IDs, device inputs, scene-level captions) bind action semantics to specific entities or engines at design time. We propose natural language as the interface to unlock expressiveness that no prior interface can achieve, and we present Incantation, the first interactive video world model with per-latent-frame (0.25 s) natural-language conditioning that supports simultaneous multi-entity control and concept-level cross-entity transfer beyond any fixed rendering pipeline. We pair a pretrained bidirectional video backbone with frame-local text cross-attention, and enable real-time long-horizon streaming through ODE-initialized Self-Forcing distillation with a RoPE-decoupled sliding KV-cache. We surpass the Action-Index baseline on cross-entity transfer (89% vs. 43%) and out-of-vocabulary prompts (90% vs. 0%), and our 2-step student sustains 19.7 FPS at 480p with stable FVD over 2-hour rollouts. We further apply the same architecture and training recipe to The King of Fighters, changing only the per-entity action vocabulary slots. We have released a preview subset of the Incantation dataset at https://huggingface.co/datasets/zhush/incantation-elden-ring-scenes, containing manually collected Elden Ring player-boss combat clips with structured action-oriented metadata. Larger-scale Elden Ring and KOF data will be released with the full project.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

