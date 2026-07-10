---
date: 2026-06-24
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-06-24（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202606231600 TO 202606241559] OR lastUpdatedDate:[202606231600 TO 202606241559]))
```

## USS: Unified Spatial-Semantic Prompts for Embodied Visual Tracking with Latent Dynamics Learning

- **arXiv**: <https://export.arxiv.org/abs/2606.25880v1>
- **ID**: `2606.25880v1`
- **分类**: cs.CV
- **作者**: Yuchen Xie, Xinyu Zhou, Kuangji Zuo, Yanshuo Lu, Fengrui Huang, Boyu Ma, Jianfei Yang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [USS Unified Spatial-Semantic Prompts for Embodied Visual Tracking with Latent Dynamics Learning.pdf](../pdfs/USS Unified Spatial-Semantic Prompts for Embodied Visual Tracking with Latent Dynamics Learning.pdf)

### 摘要（自动抓取）

Embodied Visual Tracking (EVT) requires an agent to continuously follow a specified target while actively moving through dynamic environments. However, prevailing EVT paradigms predominantly rely on language-based target indication. While language is expressive and convenient, cluttered scenes often contain multiple objects that satisfy the same semantic description, leading to ambiguous target grounding. We therefore propose a paradigm shift, reframing target indication in EVT from text-only specification to unified spatial-semantic prompting. Based on this paradigm, we introduce Unified Spatial-Semantic Prompts for Embodied Visual Tracking with Latent Dynamics Learning, USS, an end-to-end embodied tracking framework that supports text, point, bounding box, and mask prompts within a unified architecture. USS encodes heterogeneous prompts with modality-specific encoders, fuses prompt tokens with visual features through hybrid attention, and decodes compact prompt-conditioned representations into egocentric waypoints. To further improve temporal robustness, USS incorporates a latent world model that predicts future representations through self-supervised alignment. Real-robot experiments demonstrate that explicit spatial target cues yield higher success rates than text-only prompts, particularly in scenarios involving similar distractors and longer-horizon tracking where maintaining instance-level target identity is critical. In the simulation benchmark, USS also achieves state-of-the-art performance among non-MLLM-based methods and competitive results against recent MLLM-based approaches with faster inference speed. Our findings reveal that spatial-semantic prompting provides a more precise and flexible target indication interface for embodied visual tracking. Project site: https://arescheah.github.io/uss-project-page/.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Beyond One-Size-Fits-All: Diagnosis-Driven Online Reinforcement Learning with Offline Priors

- **arXiv**: <https://export.arxiv.org/abs/2606.25527v1>
- **ID**: `2606.25527v1`
- **分类**: cs.LG
- **作者**: Guozheng Ma, Lu Li, Zilin Wang, Pierre-Luc Bacon, Dacheng Tao
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Beyond One-Size-Fits-All Diagnosis-Driven Online Reinforcement Learning with Offline Priors.pdf](../pdfs/Beyond One-Size-Fits-All Diagnosis-Driven Online Reinforcement Learning with Offline Priors.pdf)

### 摘要（自动抓取）

Online reinforcement learning (RL) agents increasingly depend on knowledge acquired offline to achieve practical efficiency. Originally studied in offline-to-online RL, this paradigm now spans foundation model post-training and embodied intelligence, with prior types expanding from offline datasets and pre-trained policies to increasingly diverse knowledge sources such as multimodal foundation models and generative world models. Offline priors have become central to how deep RL is developed and deployed. However, this reliance introduces a challenge that the prevailing benchmark-driven paradigm cannot resolve: because prior validity varies across deployments and shifts during training, no single approach to managing it is universally optimal, and benchmark rankings offer limited guidance for real-world deployments. Rather than pursuing universal solutions, we argue that the field should shift to diagnosis-driven tension management, in which deployment-specific evidence guides how the learner relates to its priors throughout training, enabling both flexible and adaptive deployment. We support this position with a framework characterizing how priors reshape online optimization through three functional roles, controlled experiments demonstrating help-or-hurt reversals, cross-domain evidence from foundation model post-training to embodied intelligence, and engagement with five substantive counterarguments.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Causal-rCM: A Unified Teacher-Forcing and Self-Forcing Open Recipe for Autoregressive Diffusion Distillation in Streaming Video Generation and Interactive World Models

- **arXiv**: <https://export.arxiv.org/abs/2606.25473v1>
- **ID**: `2606.25473v1`
- **分类**: cs.CV, cs.LG
- **作者**: Kaiwen Zheng, Guande He, Min Zhao, Jintao Zhang, Huayu Chen, Jianfei Chen, Chen-Hsuan Lin, Ming-Yu Liu, Jun Zhu, Qianli Ma
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Causal-rCM A Unified Teacher-Forcing and Self-Forcing Open Recipe for Autoregressive Diffusion Distillation in Streaming Video.pdf](../pdfs/Causal-rCM A Unified Teacher-Forcing and Self-Forcing Open Recipe for Autoregressive Diffusion Distillation in Streaming Video.pdf)

### 摘要（自动抓取）

Autoregressive video diffusion with causal diffusion transformers has emerged as a major paradigm for real-time streaming video generation and action-conditioned interactive world models. In this work, we extend rCM, an advanced diffusion distillation framework, to autoregressive video diffusion. The core philosophy of rCM lies in the complementarity between forward and reverse divergences, represented by consistency models (CMs) and distribution matching distillation (DMD), respectively, in diffusion distillation. This philosophy naturally carries over to the autoregressive setting, where teacher-forcing (TF) provides an offline, forward-divergence causal training paradigm, while self-forcing (SF) corresponds to an on-policy, reverse-divergence refinement. Our contributions are: (1) through extensive experiments, we show that teacher-forcing CM is currently the best complement to self-forcing DMD as an initialization strategy (2) we present the first implementation of teacher-forcing-based continuous-time CMs (e.g., sCM/MeanFlow) for autoregressive video diffusion, enabled by our custom-mask FlashAttention-2 JVP kernel, achieving 10$\times$ faster convergence compared to discrete-time CMs (dCMs) (3) we introduce Causal-rCM, a leading, unified, and scalable algorithm-infrastructure open recipe for diffusion distillation and causal training (4) we achieve state-of-the-art streaming video generation performance in both frame-wise and chunk-wise settings, using only synthetic data for training. Notably, our distilled 2-step causal Wan2.1-1.3B model achieves a VBench-T2V score of 84.63 with only 1 or 2 sampling steps. We further apply Causal-rCM to Cosmos 3, an advanced omnimodal world foundation model for physical AI with action-conditioned generation capability, enabling an interactive world model.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Hypergraph Normal World Models for Logical Visual Anomaly Detection

- **arXiv**: <https://export.arxiv.org/abs/2606.25368v1>
- **ID**: `2606.25368v1`
- **分类**: cs.CV
- **作者**: Weizhi Nie, Zibo Xu, Weijie Wang, Yuting Su
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Hypergraph Normal World Models for Logical Visual Anomaly Detection.pdf](../pdfs/Hypergraph Normal World Models for Logical Visual Anomaly Detection.pdf)

### 摘要（自动抓取）

Visual anomaly detection is often deployed with only normal training images. Most one-class detectors map test patches or features to a normal reference distribution. This works well for local structural defects. Logical anomalies are different. Each visible part may look normal, while the whole image violates a normal count, co-occurrence, or spatial relation. This paper studies whether a model can learn such a category-specific normal world from nominal images alone. We propose the Hypergraph Normal World Model, a normal-only detector that distills frozen DINOv2 patch tokens into patch, relation, and hypergraph statistics. It builds spatial hyperedges over token groups. It then scores each test image with an information quotient that separates local, relational, hyperedge, and hyperedge-relation evidence. On the available MVTec LOCO breakfast-box validation data, the full hypergraph model improves logical anomaly AUROC from 0.8434 for DINOv2 patch-kNN to 0.9279. It also improves over the non-hypergraph variant, from 0.9013 to 0.9279. Few-shot experiments show that the model remains effective with very limited normal images. We also test whether the score reflects normal-world knowledge rather than a shallow mapping. t-SNE separates logical anomalies in the learned energy space. Relation counterfactuals increase the information quotient by 83.13 on average. Random hypergraphs reduce logical AUROC, and hyperedge attribution is much larger on logical anomalies. Qualitative examples show that high scores are driven by relation-bearing terms. These results suggest that logical visual anomaly detection should model normal relations, not only normal local patches.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## World Models in Pieces: Structural Certification for General Agents

- **arXiv**: <https://export.arxiv.org/abs/2606.24842v1>
- **ID**: `2606.24842v1`
- **分类**: cs.AI
- **作者**: Yikai Lu, Yifei Wu, Xinyu Lu, Tongxin Li
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

In the big-world regime, agents cannot be universally capable and their ability is inevitably specialized across a world model in pieces. Consequently, standard uniform guarantees fail to distinguish between the understanding of critical bottlenecks and irrelevant failures. We first formalize this limitation by proving that general agents are not universal, rendering standard worst-case analysis uninformative. To overcome this, we introduce structural certification, a transition-local framework that maps bounded goal-conditioned performance to entry-wise guarantees on the agent's internal world model. Our main contribution is constructive. We provide algorithms that filter specific transitions using deep compositional goals and prove that a general agent on these goals has a structural world model with a $\mathcal{O}(1/n) + \mathcal{O}(δ)$ error bound. Conversely, this bound is tight in the small-$δ$ regime, whose existence is explicitly guaranteed by our certification. These results enable the certifiable deployment of general agents by localizing the specific transitions where long-horizon planning is reliable.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## World Value Models for Robotic Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2606.24742v1>
- **ID**: `2606.24742v1`
- **分类**: cs.RO
- **作者**: Zhihao Wang, Jianxiong Li, Yu Cui, Yuan Gao, Xianyuan Zhan, Junzhi Yu, Xiao Ma
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [World Value Models for Robotic Manipulation.pdf](../pdfs/World Value Models for Robotic Manipulation.pdf)

### 摘要（自动抓取）

Generalist value models play a pivotal role in scaling robotic policy learning from large-scale, mixed-quality data. Mathematically, accurate value estimation demands deep temporal understanding, requiring models to both ground the current belief using historical context and plan over future outcomes. However, most existing robotic value models are built on Vision-Language Model (VLM) backbones that are pretrained primarily on static or temporally sparse visual observations, lacking the requisite temporal modeling capabilities for value estimation. Unlike VLMs, world models naturally excel at temporal modeling and future planning, making them ideal foundations for learning generalizable value functions. Driven by this insight, we marry world models with value estimation to construct a new generalist robotic value model, World Value Model (WVM), that offers accurate task progressions to assess data quality. On standard benchmarks, WVM delivers state-of-the-art (SOTA) Value-Order Correlation (VOC) results. Complementing standard evaluation suites that contains only expert data, we further introduce Suboptimal-Value-Bench, a multi-embodiment benchmark consisting of 800 suboptimal trajectories with high-fidelity, human-labeled frame annotations. Our evaluations show that WVM maintains its SOTA performance on Suboptimal-Value-Bench, establishing its robustness in handling both expert and suboptimal data. When deployed for policy learning, WVM improves manipulation performance across various policy extraction approaches in both simulated and real-world deployment, providing robust guidance for learning from mixed-quality data.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

