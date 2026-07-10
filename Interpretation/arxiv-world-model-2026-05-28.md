---
date: 2026-05-28
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-28（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605271600 TO 202605281559] OR lastUpdatedDate:[202605271600 TO 202605281559]))
```

## Chess-World-Model: A 10M-Game Benchmark for Exact State Tracking from Chess Move Sequences

- **arXiv**: <https://export.arxiv.org/abs/2605.30100v1>
- **ID**: `2605.30100v1`
- **分类**: cs.LG
- **作者**: Benjamin Walker, Terry Lyons
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models require state tracking, which is the ability to maintain a correct latent state across action sequences. Existing benchmarks are often synthetic or language-based, limiting their value as tests of structured state updates in realistic domains. We introduce Chess-World-Model, a large-scale state-tracking benchmark built from 10 million real chess games, where models predict the exact board state reached after a sequence of legal moves. Alongside a held-out real-game split, we include an out-of-distribution split from uniformly random legal play, which tests whether models learn the transition rules rather than shortcuts from common human positions. Prior theoretical and empirical work has shown that Transformers struggle to state-track, while input-dependent linear RNNs require expressive state-transition matrices to do so. We therefore benchmark a causal Transformer, block-diagonal SLiCE, Mamba-3, and Gated DeltaNet with negative eigenvalues under a matched interface and training protocol. The recurrent models strongly outperform the Transformer at 3 and 8 million parameters. Real-game performance saturates above 18 million parameters, but the random-uniform split remains discriminative up to 40 million, exposing failures otherwise hidden by scale. Additionally, ablations show that less expressive state-transition mechanisms reduce performance on the out-of-distribution split for all three recurrent models. Together, these results establish Chess-World-Model as a practical large-scale benchmark for state tracking that exposes failures model scale would otherwise conceal.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Toward AI Systems That Understand Self and Others: A Multi-Phase Inference Framework for Human Cognitive Diversity and World-Model Alignment

- **arXiv**: <https://export.arxiv.org/abs/2605.29930v1>
- **ID**: `2605.29930v1`
- **分类**: cs.AI, cs.CY, cs.HC
- **作者**: Toru Takahashi
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Mutual misunderstanding in contemporary society does not arise merely because people hold different opinions or values. Even under the same observations, different subjects may form different inferential targets, state representations, prediction errors, and update priorities. This paper proposes a multi-phase inference framework and defines its core internal mechanism as the Multi-Phase Inference Mechanism (MIM). MIM formalizes how heterogeneous world models arise through a phase-formation space, a foregrounding field, subject-specific profile states, and alignment maps between state representations. On this basis, the paper reframes world-model alignment as the problem of making heterogeneous representations mutually processable, rather than forcing agreement or convergence to a single value system. It further connects this formalism to philosophical disagreements, cognitive typology, social fragmentation, and AI alignment. The aim is to provide a constructive vocabulary for AI systems that can help humans understand self and others by making differences in meaning, value, and prediction error visible, comparable, and transformable.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## MiraBench: Evaluating Action-Conditioned Reliability in Robotic World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.29360v1>
- **ID**: `2605.29360v1`
- **分类**: cs.AI
- **作者**: Tianzhuo Yang, Zihan Shen, Zirui Mi, Zhaoyi Zhang, Jiayi Zhou, Jiaming Ji, Juntao Dai, Jiawei Chen, Boyuan Chen, Yaodong Yang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Action-conditioned world models are increasingly used as scalable simulators for robot learning, yet current evaluations provide limited evidence that their predictions are reliable under the actions they condition on. Existing benchmarks largely emphasize visual fidelity, leaving unclear whether predicted futures are physically plausible, faithful to commanded actions, and calibrated to failure when actions should not succeed. We introduce \textsc{MiraBench}, a hierarchical benchmark that defines \emph{action-conditioned reliability} as a core evaluation target for robotic world models. MiraBench decomposes this target into three progressively demanding levels: \emph{Physics Adherence}, which evaluates reference-free physical consistency; \emph{Action-Following Fidelity}, which measures whether predictions respect task-relevant action inputs; and \emph{Optimism Bias Detection}, which probes the tendency to predict successful outcomes under failure-inducing actions. To support this evaluation, we curate a human-annotated corpus with over 16,000 judgments across tasks, failure categories, and leading world models. We evaluate 12 representative model configurations spanning vector-conditioned robotic world models, text-conditioned generative world models, open-weight systems, closed-source systems, and multiple model scales. Across this broad model landscape, MiraBench reveals three central findings: visual fidelity is a poor proxy for action fidelity; increasing model scale does not reliably improve action following; and optimism bias is pervasive across current systems. By shifting evaluation from appearance to action-conditioned reliability, MiraBench provides a diagnostic foundation for assessing and improving robotic world models as faithful simulators.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## PassNet: Scaling Large Language Models for Graph Compiler Pass Generation

- **arXiv**: <https://export.arxiv.org/abs/2605.29357v1>
- **ID**: `2605.29357v1`
- **分类**: cs.AI, cs.LG, cs.PL
- **作者**: Yiqun Liu, Yingsheng Wu, Ruqi Yang, Enrong Zheng, Honglei Qiu, Sijun He, Tai Liang, Jingjing Wu, Yuhan Zhou, Yiwei Zhang, Dongyan Chen, Weihan Yi, Xinqi Li, Siqi Bao
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Modern tensor compilers such as TorchInductor deliver substantial speedups on mainstream models, yet face a systematic performance ceiling on long-tail workloads -- our profiling shows that 43% of real-world subgraphs experience end-to-end slowdowns under default compilation. While LLMs offer a path toward automated optimization, existing efforts focus on standalone kernel generation. We argue that pass generation -- where LLMs author structured graph transformations that integrate directly into compiler pipelines -- is the more appropriate abstraction. We propose PassNet, the first large-scale ecosystem for LLM-based compiler pass generation, comprising: (1) PassNet-Dataset, over 18K unique computational graphs from 100K real-world models; and (2) PassBench, 200 curated long-tail fusible tasks (comprising 2,060 subgraphs in total) evaluated under the Error-aware Speedup Score (ES_t) -- a metric unifying correctness, stability, and performance -- with layered integrity defenses against systematic LLM exploitation. Experiments reveal that PassBench is both highly discriminative and genuinely unsaturated: the best frontier model trails TorchInductor by 37% in aggregate, yet on individual subgraphs LLMs achieve up to 3x speedup over the same compiler -- indicating that the bottleneck is consistency, not capability. Fine-tuning a small model on merely ~4K PassNet trajectories yields a 2.67x improvement approaching frontier-model performance, demonstrating substantial headroom and validating PassNet as live training infrastructure for advancing LLM-driven compiler optimization. All data, benchmarks, and tooling are publicly available.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Theoretical Foundations and Effective Algorithms for Policy-Aware Simulator Learning

- **arXiv**: <https://export.arxiv.org/abs/2605.29032v1>
- **ID**: `2605.29032v1`
- **分类**: cs.LG, stat.ML
- **作者**: Christoph Dann, Yishay Mansour, Mehryar Mohri
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Model-based reinforcement learning (MBRL) agents typically learn world models by minimizing predictive loss. However, powerful RL optimizers inevitably exploit minor model inaccuracies, leading to simulator exploitation and a reality gap where policies succeed in simulation but fail in the real world. We propose that the objective for learning simulators should be strategic robustness rather than predictive accuracy, and formulate this as a zero-sum minimax game between a model player and an adversarial policy player. We provide a comprehensive theoretical analysis: (1) an online learning guarantee showing the game is learnable with sublinear regret bounds; (2) a tractable critic-based simplification bounding the global policy-value gap by the local critic's loss; and (3) an Error-MDP duality, proving that finding the worst-case policy is formally dual to a standard RL problem where the reward is the one-step critic error. This duality yields a provably convergent active data selection algorithm. Experiments on continuous control tasks demonstrate that our approach reduces prediction error in strategically important regions by $1.5$-$2.2\times$ and enables policies trained purely in simulation to match near-optimal real-world performance.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Gamma-World: Generative Multi-Agent World Modeling Beyond Two Players

- **arXiv**: <https://export.arxiv.org/abs/2605.28816v1>
- **ID**: `2605.28816v1`
- **分类**: cs.CV
- **作者**: Fangfu Liu, Kai He, Tianchang Shen, Tianshi Cao, Sanja Fidler, Yueqi Duan, Jun Gao, Igor Gilitschenski, Zian Wang, Xuanchi Ren
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models for interactive video generation have largely focused on single-agent settings, where future observations are generated from a single control signal. However, many generated environments require multi-agent interaction: multiple players, robots, or embodied agents act simultaneously within a shared space. Scaling world models to such settings requires a principled multi-agent design: agents should remain independently controllable, permutation-symmetric, and support efficient inference while maintaining consistency across time and perspectives. In this paper, we present our generative multi-agent world model for interactive simulation. It introduces Simplex Rotary Agent Encoding, a parameter-free extension of 3D RoPE that represents agents as vertices of a regular simplex in rotary angle space. This gives each agent a distinct phase while making all agents permutation-equivalent, enabling scalable agent identity without learned per-slot identities or a fixed agent ordering. To avoid dense all-to-all attention across agents, we further propose Sparse Hub Attention, where learnable hub tokens mediate token interaction across agents, reducing cross-agent attention cost from quadratic to linear in the number of agents. For real-time rollout, we distill a full-context diffusion teacher into a causal student that generates temporal blocks sequentially with KV caching, enabling action-responsive generation at 24 FPS. Experiments in multiplayer virtual environments show that our model improves video fidelity, action controllability, and inter-agent consistency over slot-based and dense-attention baselines, while generalizing from two to four players without additional training.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Affective Music Recommendation: A Rollout-Based World Model for Offline Preference Optimization

- **arXiv**: <https://export.arxiv.org/abs/2605.28810v1>
- **ID**: `2605.28810v1`
- **分类**: cs.LG, cs.IR, cs.SD
- **作者**: Audrey Chan, Aaron Labbé, Jacob Lavoie, Jordan Bannister, Arsène Fansi Tchango, Guillaume Lajoie, Laurent Charlin
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Functional music applications, from consumer focus and sleep aids to clinical interventions, share a distinctive recommendation problem: success is defined by the listener's affective state, but online experimentation on emotion is ethically constrained, particularly for clinical populations who cannot reliably skip a song or report distress. We describe AMRS, the Affective Music Recommendation System deployed on LUCID's health-and-wellness platforms, which serve clinical users (primarily older adults with neurocognitive conditions) and consumer-wellness users across energize, focus, calm, and sleep modes. AMRS is built around a rollout-based world model: a causal transformer trained on logged listening data to jointly predict engagement, binary rating, and self-reported valence and arousal. The world model serves both as an in-silico simulator for offline policy training and as a stress-testing tool before deployment. A recommender policy initialized by behaviour cloning is fine-tuned offline with Direct Preference Optimization (DPO) against a configurable multi-objective utility function. Under a strict cold-start protocol, the world model predicts both behavioural and affective signals with usable fidelity; DPO improves predicted valence and arousal over the cloned baseline while maintaining a similar diversity profile and avoiding the distributional collapse produced by greedy optimization. We position the work as an early deployed validation of a methodology for affective recommendation when online experimentation is ethically untenable.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

