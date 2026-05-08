---
date: 2026-05-01
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-01（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604301600 TO 202605011559])
```

_本日检索窗口内 arXiv API 未返回与查询匹配的论文。_
## Physically Native World Models: A Hamiltonian Perspective on Generative World Modeling

- **arXiv**: <https://export.arxiv.org/abs/2605.00412v1>
- **ID**: `2605.00412v1`
- **分类**: cs.AI, cs.RO
- **作者**: Sen Cui, Jingheng Ma
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Physically Native World Models A Hamiltonian Perspective on Generative World Modeling.pdf](../pdfs/Physically Native World Models A Hamiltonian Perspective on Generative World Modeling.pdf)

### 摘要（自动抓取）

World models have recently re-emerged as a central paradigm for embodied intelligence, robotics, autonomous driving, and model-based reinforcement learning. However, current world model research is often dominated by three partially separated routes: 2D video-generative models that emphasize visual future synthesis, 3D scene-centric models that emphasize spatial reconstruction, and JEPA-like latent models that emphasize abstract predictive representations. While each route has made important progress, they still struggle to provide physically reliable, action-controllable, and long-horizon stable predictions for embodied decision making. In this paper, we argue that the bottleneck of world models is no longer only whether they can generate realistic futures, but whether those futures are physically meaningful and useful for action. We propose \emph{Hamiltonian World Models} as a physically grounded perspective on world modeling. The key idea is to encode observations into a structured latent phase space, evolve the latent state through Hamiltonian-inspired dynamics with control, dissipation, and residual terms, decode the predicted trajectory into future observations, and use the resulting rollouts for planning. We discuss how Hamiltonian structure may improve interpretability, data efficiency, and long-horizon stability, while also noting practical challenges in real-world robotic scenes involving friction, contact, non-conservative forces, and deformable objects.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## HERMES++: Toward a Unified Driving World Model for 3D Scene Understanding and Generation

- **arXiv**: <https://export.arxiv.org/abs/2604.28196v1>
- **ID**: `2604.28196v1`
- **分类**: cs.CV
- **作者**: Xin Zhou, Dingkang Liang, Xiwu Chen, Feiyang Tan, Dingyuan Zhang, Hengshuang Zhao, Xiang Bai
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Driving world models serve as a pivotal technology for autonomous driving by simulating environmental dynamics. However, existing approaches predominantly focus on future scene generation, often overlooking comprehensive 3D scene understanding. Conversely, while Large Language Models (LLMs) demonstrate impressive reasoning capabilities, they lack the capacity to predict future geometric evolution, creating a significant disparity between semantic interpretation and physical simulation. To bridge this gap, we propose HERMES++, a unified driving world model that integrates 3D scene understanding and future geometry prediction within a single framework. Our approach addresses the distinct requirements of these tasks through synergistic designs. First, a BEV representation consolidates multi-view spatial information into a structure compatible with LLMs. Second, we introduce LLM-enhanced world queries to facilitate knowledge transfer from the understanding branch. Third, a Current-to-Future Link is designed to bridge the temporal gap, conditioning geometric evolution on semantic context. Finally, to enforce structural integrity, we employ a Joint Geometric Optimization strategy that integrates explicit geometric constraints with implicit latent regularization to align internal representations with geometry-aware priors. Extensive evaluations on multiple benchmarks validate the effectiveness of our method. HERMES++ achieves strong performance, outperforming specialist approaches in both future point cloud prediction and 3D scene understanding tasks. The model and code will be publicly released at https://github.com/H-EmbodVis/HERMESV2.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## LaST-R1: Reinforcing Action via Adaptive Physical Latent Reasoning for VLA Models

- **arXiv**: <https://export.arxiv.org/abs/2604.28192v1>
- **ID**: `2604.28192v1`
- **分类**: cs.RO, cs.CV
- **作者**: Hao Chen, Jiaming Liu, Zhonghao Yan, Nuowei Han, Renrui Zhang, Chenyang Gu, Jialin Gao, Ziyu Guo, Siyuan Qian, Yinxi Wang, Peng Jia, Chi-Wing Fu, Shanghang Zhang, Pheng-Ann Heng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [LaST-R1 Reinforcing Action via Adaptive Physical Latent Reasoning for VLA Models.pdf](../pdfs/LaST-R1 Reinforcing Action via Adaptive Physical Latent Reasoning for VLA Models.pdf)

### 摘要（自动抓取）

Vision-Language-Action (VLA) models have increasingly incorporated reasoning mechanisms for complex robotic manipulation. However, existing approaches share a critical limitation: whether employing explicit linguistic reasoning that suffers from latency and discretization, or utilizing more expressive continuous latent reasoning, they are predominantly confined to static imitation learning that limits adaptability and generalization. While online reinforcement learning (RL) has been introduced to VLAs to enable trial-and-error exploration, current methods exclusively optimize the vanilla action space, bypassing the underlying physical reasoning process. In this paper, we present \textbf{LaST-R1}, a unified VLA framework that integrates latent Chain-of-Thought (CoT) reasoning over physical dynamics prior to action execution, along with a tailored RL post-training paradigm. Specifically, we propose \textbf{Latent-to-Action Policy Optimization (LAPO)}, a novel RL algorithm that jointly optimizes the latent reasoning process and the action generation. By bridging reasoning and control, LAPO improves the representation of physical world modeling and enhances robustness in interactive environments. Furthermore, an \textbf{adaptive latent CoT mechanism} is introduced to allow the policy to dynamically adjust its reasoning horizon based on environment complexity. Extensive experiments show that LaST-R1 achieves a near-perfect 99.8\% average success rate on the LIBERO benchmark with only one-shot supervised warm-up, significantly improving convergence speed and performance over prior state-of-the-art methods. In real-world deployments, LAPO post-training yields up to a 44\% improvement over the initial warm-up policy across four complex tasks, including both single-arm and dual-arm settings. Finally, LaST-R1 demonstrates strong generalization across simulated and real-world environments.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Visual Generation in the New Era: An Evolution from Atomic Mapping to Agentic World Modeling

- **arXiv**: <https://export.arxiv.org/abs/2604.28185v1>
- **ID**: `2604.28185v1`
- **分类**: cs.CV
- **作者**: Keming Wu, Zuhao Yang, Kaichen Zhang, Shizun Wang, Haowei Zhu, Sicong Leng, Zhongyu Yang, Qijie Wang, Sudong Wang, Ziting Wang, Zili Wang, Hui Zhang, Haonan Wang, Hang Zhou, Yifan Pu, Xingxuan Li, Fangneng Zhan, Bo Li, Lidong Bing, Yuxin Song, Ziwei Liu, Wenhu Chen, Jingdong Wang, Xinchao Wang, Xiaojuan Qi, Shijian Lu, Bin Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Visual Generation in the New Era An Evolution from Atomic Mapping to Agentic World Modeling.pdf](../pdfs/Visual Generation in the New Era An Evolution from Atomic Mapping to Agentic World Modeling.pdf)

### 摘要（自动抓取）

Recent visual generation models have made major progress in photorealism, typography, instruction following, and interactive editing, yet they still struggle with spatial reasoning, persistent state, long-horizon consistency, and causal understanding. We argue that the field should move beyond appearance synthesis toward intelligent visual generation: plausible visuals grounded in structure, dynamics, domain knowledge, and causal relations. To frame this shift, we introduce a five-level taxonomy: Atomic Generation, Conditional Generation, In-Context Generation, Agentic Generation, and World-Modeling Generation, progressing from passive renderers to interactive, agentic, world-aware generators. We analyze key technical drivers, including flow matching, unified understanding-and-generation models, improved visual representations, post-training, reward modeling, data curation, synthetic data distillation, and sampling acceleration. We further show that current evaluations often overestimate progress by emphasizing perceptual quality while missing structural, temporal, and causal failures. By combining benchmark review, in-the-wild stress tests, and expert-constrained case studies, this roadmap offers a capability-centered lens for understanding, evaluating, and advancing the next generation of intelligent visual generation systems.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## RopeDreamer: A Kinematic Recurrent State Space Model for Dynamics of Flexible Deformable Linear Objects

- **arXiv**: <https://export.arxiv.org/abs/2604.28161v1>
- **ID**: `2604.28161v1`
- **分类**: cs.RO
- **作者**: Tim Missal, Lucas Domingues, Berk Guler, Simon Manschitz, Jan Peters, Paula Dornhofer Paro Costa
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [RopeDreamer A Kinematic Recurrent State Space Model for Dynamics of Flexible Deformable Linear Objects.pdf](../pdfs/RopeDreamer A Kinematic Recurrent State Space Model for Dynamics of Flexible Deformable Linear Objects.pdf)

### 摘要（自动抓取）

The robotic manipulation of Deformable Linear Objects (DLOs) is a fundamental challenge due to the high-dimensional, non-linear dynamics of flexible structures and the complexity of maintaining topological integrity during contact-rich tasks. While recent data-driven methods have utilized Recurrent and Graph Neural Networks for dynamics modeling, they often struggle with self-intersections and non-physical deformations, such as tangling and link stretching. In this paper, we propose a latent dynamics framework that combines a Recurrent State Space Model with a Quaternionic Kinematic Chain representation to enable robust, long-term forecasting of DLO states. By encoding the DLO as a sequence of relative rotations (quaternions) rather than independent Cartesian positions, we inherently constrain the model to a physically valid manifold that preserves link-length constancy. Furthermore, we introduce a dual-decoder architecture that decouples state reconstruction from future-state prediction, forcing the latent space to capture the underlying physics of deformation. We evaluate our approach on a large-scale simulated dataset of complex pick-and-place trajectories involving self-intersections. Our results demonstrate that the proposed model achieves a 40.52% reduction in open-loop prediction error over 50-step horizons compared to the state-of-the-art baseline, while reducing inference time by 31.17%. Our model further maintains superior topological consistency in scenarios with multiple crossings, proving its efficacy as a compositional primitive for long-horizon manipulation planning.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Beyond Gaussian Bottlenecks: Topologically Aligned Encoding of Vision-Transformer Feature Spaces

- **arXiv**: <https://export.arxiv.org/abs/2604.28122v1>
- **ID**: `2604.28122v1`
- **分类**: cs.CV, cs.LG
- **作者**: Andrew Bond, Ilkin Umut Melanlioglu, Erkut Erdem, Aykut Erdem
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Beyond Gaussian Bottlenecks Topologically Aligned Encoding of Vision-Transformer Feature Spaces.pdf](../pdfs/Beyond Gaussian Bottlenecks Topologically Aligned Encoding of Vision-Transformer Feature Spaces.pdf)

### 摘要（自动抓取）

Modern visual world modeling systems increasingly rely on high-capacity architectures and large-scale data to produce plausible motion, yet they often fail to preserve underlying 3D geometry or physically consistent camera dynamics. A key limitation lies not only in model capacity, but in the latent representations used to encode geometric structure. We propose S$^2$VAE, a geometry-first latent learning framework that focuses on compressing and representing the latent 3D state of a scene, including camera motion, depth, and point-level structure, rather than modeling appearance alone. Building on representations from a Visual Geometry Grounded Transformer (VGGT), we introduce a novel type of variational autoencoder using a product of Power Spherical latent distributions, explicitly enforcing hyperspherical structure in the bottleneck to preserve directional and geometric semantics under strong compression. Across depth estimation, camera pose recovery, and point cloud reconstruction, we show that geometry-aligned hyperspherical latents consistently outperform conventional Gaussian bottlenecks, particularly in high-compression regimes. Our results highlight latent geometry as a first-class design choice for physically grounded visual and world models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

