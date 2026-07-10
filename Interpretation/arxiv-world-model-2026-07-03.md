---
date: 2026-07-03
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-07-03（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202607021600 TO 202607031559] OR lastUpdatedDate:[202607021600 TO 202607031559]))
```

## WorldDirector: Building Controllable World Simulators with Persistent Dynamic Memory

- **arXiv**: <https://export.arxiv.org/abs/2607.02517v1>
- **ID**: `2607.02517v1`
- **分类**: cs.CV
- **作者**: Hanlin Wang, Hao Ouyang, Qiuyu Wang, Wen Wang, Qingyan Bai, Ka Leong Cheng, Yue Yu, Yixuan Li, Yihao Meng, Zichen Liu, Yanhong Zeng, Yujun Shen, Qifeng Chen
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

We present WorldDirector, a highly controllable video world model framework designed for persistent dynamic object memory and unrestricted viewpoint exploration. Unlike existing world models that entangle physical dynamics with pixel rendering and rely on continuous visual observation to sustain motion, our framework explicitly decouples semantic motion orchestration from visual generation. By leveraging an LLM to coordinate 3D trajectories with camera movements and subsequently employing these orchestrated trajectories as control signals for video generation, our approach ensures strict physical logic and appearance stability, successfully preserving the exact visual identities of dynamic entities even when they re-enter the scene after prolonged periods out of view. Experimental results demonstrate that our method supports the synthesis of complex and extended events with unprecedented controllability and persistent dynamic object memory. Project Page: https://worlddirector.github.io/

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## WorldSample: Closed-loop Real-robot RL with World Modelling

- **arXiv**: <https://export.arxiv.org/abs/2607.02431v1>
- **ID**: `2607.02431v1`
- **分类**: cs.RO, cs.AI
- **作者**: Yuquan Xue, Le Xu, Zeyi Liu, Zhenyu Wu, Zhengyi Gu, Xinyang Song, Bofang Jia, Ziwei Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Reinforcement learning (RL) can overcome the demonstration-coverage limitation of imitation learning (IL) by allowing robots to improve through trial-and-error interaction beyond the states observed in demonstrations. However, deploying RL on real robots remains constrained by high interaction costs, since each physical rollout is costly and reflects only one realized action-outcome path. To address this challenge, we propose WorldSample, a physically grounded data augmentation framework for real-robot RL that closes a real-synthetic loop between physical rollouts, world-model generation, and policy improvement. Grounded on real rollouts, WorldSample generates high-fidelity synthetic transitions through a post-trained world model, which greatly lowers the visual hallucination. Specifically, rather than simply using these transitions as real-world experience, WorldSample introduces Policy-Paced Learning (PPL) to regulate the training process through sample selection and scheduling, balancing useful augmentation against value overestimation and mitigating the hallucination-induced noise. Experiments on robot manipulation tasks involving contact-rich and precise tasks show that WorldSample improves policy success rate by 28% while reducing training steps by 59% compared with baselines. Furthermore, WorldSample improves world model visual fidelity by 19.4dB in PSNR and 0.47 in SSIM over demonstration-only post-training, validating the effectiveness of the real-synthetic loop for both policy and world model performance.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## ACID: Action Consistency via Inverse Dynamics for Planning with World Models

- **arXiv**: <https://export.arxiv.org/abs/2607.02403v1>
- **ID**: `2607.02403v1`
- **分类**: cs.RO, cs.AI, cs.CV
- **作者**: Gawon Seo, Dongwon Kim, Suha Kwak
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Decision-time planning with action-conditioned world models has become a popular paradigm for embodied control. However, the standard planning cost judges a candidate solely by how close its predicted terminal state lies to the goal, leaving the realizability of the intermediate transitions unchecked -- a predicted trajectory can look convincing while the environment rollout drifts away from it. In this paper, we propose ACID, a decision-time planning framework that introduces cycle action consistency: the action inferred backward from a predicted transition by an inverse dynamics model should recover the one that was conditioned on. We fold this per-step residual into the planning cost via a scale-invariant adaptive weight. Across four action-conditioned world models and six tasks spanning rigid and deformable manipulation, articulated control, and visual navigation, ACID consistently improves planning and matches the baseline's accuracy with substantially less planning compute.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## DecompRL: Solving Harder Problems by Learning Modular Code Generation

- **arXiv**: <https://export.arxiv.org/abs/2607.02390v1>
- **ID**: `2607.02390v1`
- **分类**: cs.LG
- **作者**: Juliette Decugis, Fabian Gloeckle, Francis Bach, Taco Cohen, Gabriel Synnaeve
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [DecompRL Solving Harder Problems by Learning Modular Code Generation.pdf](../pdfs/DecompRL Solving Harder Problems by Learning Modular Code Generation.pdf)

### 摘要（自动抓取）

How can Large Language Models (LLMs) solve problems they currently cannot? Repeated sampling scales test-time compute but GPU cost grows linearly with attempts, while reinforcement learning (RL) with verifiable rewards improves single-attempt accuracy at the expense of sample diversity. Both strategies ultimately fail when the base policy has near-zero probability of producing a correct solution: no amount of sampling or gradient signal can overcome a search space that is simply too large. We take a different approach: rather than sampling harder, we make the task easier by decomposing problems into smaller, independently solvable sub-functions whose implementations can be recombined. Since off-the-shelf models are not trained for this modular generation, we introduce DecompRL, an RL algorithm that explicitly learns to decompose and implement hierarchical code structures. Recombining $k$ implementations of $n$ modules yields up to $k^{n}$ candidate solutions, shifting the bottleneck from GPU inference to cheap CPU evaluation and cutting GPU token cost by $\sim$50$\times$. On LiveCodeBench and CodeContests (Qwen~2.5~7B, Code World Model~32B), DecompRL outperforms standard and diversity-optimized RL baselines beyond $10^5$ tokens per problem, solving problems that standard generation cannot reach.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Hardware-Enforced Semantic Coordination for Safety-Critical Real-Time Autonomous Systems

- **arXiv**: <https://export.arxiv.org/abs/2607.02376v1>
- **ID**: `2607.02376v1`
- **分类**: cs.AI, cs.MA
- **作者**: Uwe M. Borghoff, Paolo Bottoni, Remo Pareschi
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Hardware-Enforced Semantic Coordination for Safety-Critical Real-Time Autonomous Systems.pdf](../pdfs/Hardware-Enforced Semantic Coordination for Safety-Critical Real-Time Autonomous Systems.pdf)

### 摘要（自动抓取）

Recent advances in agentic AI are producing increasingly complex autonomous systems that integrate large language models, world models, optimization engines, specialized neural architectures, autonomous platforms, and human operators. While much current research focuses on improving reasoning capabilities, safety-critical real-time deployment also requires bounded and verifiable coordination among heterogeneous components operating concurrently under uncertainty. Software-mediated coordination presents fundamental limitations in domains where bounded latency, deterministic coordination, and enforceable safety guarantees are essential. Hence, we propose a hardware-enforced semantic coordination architecture in which selected coordination semantics are implemented directly at the hardware level via field-programmable gate arrays (FPGAs). The approach builds on the Topic-Based Communication Space Petri Net (TB-CSPN) framework, which separates semantic reasoning from interaction management. In this approach, selected TB-CSPN coordination mechanisms are mapped onto FPGA primitives, creating a hardware-native semantic coordination layer. Focus is not on acceleration, but on enforcing temporal synchronization, semantic gating, authorization constraints, and bounded coordination behavior directly in hardware. Semantic reasoning remains adaptive and software-driven, while embedded coordination semantics become deterministic.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

