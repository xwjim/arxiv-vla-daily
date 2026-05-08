---
date: 2026-05-06
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-06（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605051600 TO 202605061559] OR lastUpdatedDate:[202605051600 TO 202605061559]))
```

## The Predictive-Causal Gap: An Impossibility Theorem and Large-Scale Neural Evidence

- **arXiv**: <https://export.arxiv.org/abs/2605.05029v1>
- **ID**: `2605.05029v1`
- **分类**: cs.LG
- **作者**: Kejun Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [The Predictive-Causal Gap An Impossibility Theorem and Large-Scale Neural Evidence.pdf](../pdfs/The Predictive-Causal Gap An Impossibility Theorem and Large-Scale Neural Evidence.pdf)

### 摘要（自动抓取）

We report a systematic failure mode in predictive representation learning. Across 2695 neural network configurations trained to predict linear-Gaussian dynamics, the optimal encoder tracks the environment rather than the system it is meant to model. The mean causal fidelity -- the fraction of encoder sensitivity allocated to system degrees of freedom -- is 0.49, and only 2.5% of configurations exceed 0.70. The failure intensifies with dimension: at N=100, the optimal encoder becomes causally blind (fidelity ~10^{-8}) while achieving 92% lower prediction error than the causal representation. We prove this is not an optimization artifact but a structural property of the predictive objective: when environment modes are slower or less noisy than system modes, every minimizer of the population risk encodes the former. The set of dynamics exhibiting this predictive-causal gap is open and of positive measure in parameter space. In a nonlinear Duffing-GRU sweep, unconstrained predictors learn environment-dominant representations in 55% of tasks (95% CI 41--68%) versus 24% under operational grounding (p=2.3e-3); the median out-of-distribution MSE inflation under environment shift is 1.82x versus 1.00x. Operational grounding -- restricting the loss to system observables -- partially suppresses the gap, but causal fidelity is never recovered without an explicit system-environment boundary. The results identify the predictive-causal gap as a structural limit of learning, with implications for self-supervised representation learning, world models, and the scaling paradigm.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## A geometric relation of the error introduced by sampling a language model's output distribution to its internal state

- **arXiv**: <https://export.arxiv.org/abs/2605.04899v1>
- **ID**: `2605.04899v1`
- **分类**: cs.LG
- **作者**: Albert F. Modenbach
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [A geometric relation of the error introduced by sampling a language model's output distribution to its internal state.pdf](../pdfs/A geometric relation of the error introduced by sampling a language model's output distribution to its internal state.pdf)

### 摘要（自动抓取）

GPT-style language models are sensitive to single-token changes at generation points where the predicted probability distribution is spread across multiple tokens. Viewing this sensitivity as a geometric property, we derive an $\mathfrak{so}(n)$-valued 1-form that depends only on the geometry of the token embeddings. Despite this purely geometric origin, we show that its curvature is semantically meaningful: On chess reasoning tasks, the curvature couples to the world model of an off-the-shelf instruction-tuned model, with transformations clustering by board region and respecting piece importance. Our findings suggest that token space geometry directly reflects how models internally represent problems.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Bilinear Mamba-Koopman Neural MPC for Varying Dynamics

- **arXiv**: <https://export.arxiv.org/abs/2605.04793v1>
- **ID**: `2605.04793v1`
- **分类**: cs.LG, math.OC
- **作者**: Matan Pagi, Zohar Sorek
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Bilinear Mamba-Koopman Neural MPC for Varying Dynamics.pdf](../pdfs/Bilinear Mamba-Koopman Neural MPC for Varying Dynamics.pdf)

### 摘要（自动抓取）

Koopman-based neural MPC models generate time-varying dynamics from historical data, but preserve convexity by enforcing that the system operator is independent of the current control input. This conditional independence constraint limits adaptation to changing dynamics within a single MPC horizon, particularly under time-varying conditions and under stale-plan execution. We propose Bilinear Mamba-Koopman Neural MPC, a minimal extension that introduces control-dependent coupling in the latent dynamics, allowing the effective operator to adapt to the current input. The resulting model is a strict generalization of the standard linear, conditional-independence formulation, adds less than 1% parameters through a low-rank structure, and admits exact model Jacobians that enable efficient Sequential Convex Programming (SCP) with monotone-descent and KKT convergence results under standard trust-region assumptions. Across CartPole and RSCP benchmarks in time-invariant and time-varying regimes, the proposed model matches or improves forecasting accuracy on every cell when training noise is averaged out, with strict gains where control-state coupling is structurally present. Its main closed-loop gains appear in the RSCP TV task, where iterative SCP improves adaptation within the horizon and substantially stabilizes training; in CartPole TV, the gains are modest but consistent. In delayed re-planning experiments on the time-varying variants, the bilinear model degrades more gracefully under stale-plan execution, maintaining a consistent advantage on CartPole TV and a substantially larger robustness margin on RSCP TV. These results show that control-dependent latent dynamics provide a simple and effective mechanism for robust MPC under varying conditions.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Gyan: An Explainable Neuro-Symbolic Language Model

- **arXiv**: <https://export.arxiv.org/abs/2605.04759v1>
- **ID**: `2605.04759v1`
- **分类**: cs.CL, cs.AI, cs.ET, cs.LG
- **作者**: Venkat Srinivasan, Vishaal Jatav, Anushka Chandrababu, Geetika Sharma
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Gyan An Explainable Neuro-Symbolic Language Model.pdf](../pdfs/Gyan An Explainable Neuro-Symbolic Language Model.pdf)

### 摘要（自动抓取）

Transformer based pre-trained large language models have become ubiquitous. There is increasing evidence to suggest that even with large scale pre-training, these models do not capture complete compositional context and certainly not, the full human analogous context. Besides, by the very nature of the architecture, these models hallucinate, are difficult to maintain, are not easily interpretable and require enormous compute resources for training and inference. Here, we describe Gyan, an explainable language model based on a novel non-transformer architecture, without any of these limitations. Gyan achieves SOTA performance on 3 widely cited data sets and superior performance on two proprietary data sets. The novel architecture decouples the language model from knowledge acquisition and representation. The model draws on rhetorical structure theory, semantic role theory and knowledge-based computational linguistics. Gyan's meaning representation structure captures the complete compositional context and attempts to mimic humans by expanding the context to a 'world model'. AI model adoption critically depends on trust and transparency especially in mission critical use cases. Collectively, our results demonstrate that it is possible to create models which are trustable and reliable for mission critical tasks. We believe our work has tremendous potential for guiding the development of transparent and trusted architectures for language models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## ELVIS: Ensemble-Calibrated Latent Imagination for Long-Horizon Visual MPC

- **arXiv**: <https://export.arxiv.org/abs/2605.04709v1>
- **ID**: `2605.04709v1`
- **分类**: cs.LG, cs.RO, eess.SY
- **作者**: Yurui Du, Pinhao Song, Yutong Hu, Renaud Detry
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [ELVIS Ensemble-Calibrated Latent Imagination for Long-Horizon Visual MPC.pdf](../pdfs/ELVIS Ensemble-Calibrated Latent Imagination for Long-Horizon Visual MPC.pdf)

### 摘要（自动抓取）

A central challenge of visual control with model-based reinforcement learning (RL) is reliable long-horizon planning: long rollouts with learned latent dynamics exhibit branching futures and multi-modal action-value distributions. In addition, compounding model errors amplified by visual occlusions make deep imagination brittle. We present ELVIS, a latent model predictive controller (MPC) designed to make long-horizon planning practical. ELVIS plans in a Dreamer-style recurrent state space model (RSSM) and replaces standard unimodal model predictive path integral (MPPI) with a Gaussian-mixture MPPI that maintains multiple coherent hypotheses over long horizons, avoiding mode averaging under branching rollouts. In parallel, ELVIS stabilizes deep imagination with a shared uncertainty-aware lambda-return: an ensemble of latent critics defines an upper-confidence-bound (UCB) score that gates a time-varying lambda, adaptively trading off bootstrapping versus look-ahead to limit compounding error during planning. The same return is used both to train an actor-critic prior from imagined rollouts and to score candidate trajectories inside GMM-MPPI, aligning RL objectives with the planner's long-horizon optimization. On fourteen DeepMind Control Suite visual tasks, ELVIS establishes state-of-the-art performance compared with TD-MPC2 and DreamerV3. Finally, ELVIS transfers zero-shot to a real-world sand-spraying task with severe occlusions, improving surface-quality metrics and demonstrating robustness beyond simulation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Dream-MPC: Gradient-Based Model Predictive Control with Latent Imagination

- **arXiv**: <https://export.arxiv.org/abs/2605.04568v1>
- **ID**: `2605.04568v1`
- **分类**: cs.LG, cs.AI, cs.RO
- **作者**: Jonathan Spieler, Sven Behnke
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Dream-MPC Gradient-Based Model Predictive Control with Latent Imagination.pdf](../pdfs/Dream-MPC Gradient-Based Model Predictive Control with Latent Imagination.pdf)

### 摘要（自动抓取）

State-of-the-art model-based Reinforcement Learning (RL) approaches either use gradient-free, population-based methods for planning, learned policy networks, or a combination of policy networks and planning. Hybrid approaches that combine Model Predictive Control (MPC) with a learned model and a policy prior to leverage the advantages of both paradigms have shown promising results. However, these approaches typically rely on gradient-free optimization methods, which can be computationally expensive for high-dimensional control tasks. While gradient-based methods are a promising alternative, recent works have empirically shown that gradient-based methods often perform worse than their gradient-free counterparts. We propose Dream-MPC, a novel approach that generates few candidate trajectories from a rolled-out policy and optimizes each trajectory by gradient ascent using a learned world model, uncertainty regularization and amortization of optimization iterations over time by reusing previously optimized actions. Our results on 24 continuous control tasks show that Dream-MPC can significantly improve the performance of the underlying policy and can outperform gradient-free MPC and state-of-the-art baselines. We will open source our code and more at https://dream-mpc.github.io.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Counterfactual identifiability beyond global monotonicity: non-monotone triangular structural causal models

- **arXiv**: <https://export.arxiv.org/abs/2605.04413v1>
- **ID**: `2605.04413v1`
- **分类**: cs.LG, stat.ME
- **作者**: Pengcheng Tan, Jiang Chen, Dehui Du
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Counterfactual identifiability beyond global monotonicity non-monotone triangular structural causal models.pdf](../pdfs/Counterfactual identifiability beyond global monotonicity non-monotone triangular structural causal models.pdf)

### 摘要（自动抓取）

Structural causal models provide a unified semantics for interventions and counterfactuals, but most identifiability results rely on restrictive assumptions like global monotonicity, which are often violated in embodied interaction, where the same exogenous perturbation can induce opposite responses under different contact contexts. We ask what structure still suffices once global monotonicity is dropped. We introduce non-monotone triangular structural causal models (NM-TM-SCM), which retain triangular recursion but replace global monotonicity with mechanism-wise invertibility and context-independent inverse transport. We prove that these conditions are equivalent to exogenous isomorphism and imply complete counterfactual identifiability, and we give a counterexample showing that local invertibility alone is insufficient. We instantiate the theory in CausalInverter, with triangular invertible layers, orientation gates, and transport-stability regularization. On synthetic non-monotonic mechanisms, the structural bias yields systematic counterfactual gains as non-monotonicity increases. On MuJoCo Door, our model achieves perfect event-level counterfactual recovery, lowers continuous angle error relative to a Transformer baseline, and delivers substantially more stable recovery than Transformer and conditional-flow predictors. On MuJoCo Push, where non-monotonicity is weaker, the same low-data predictors remain competitive or better, consistent with a bias-variance boundary. These results identify a broader identifiable regime between globally monotone triangular models and unconstrained black-box world models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## iWorld-Bench: A Benchmark for Interactive World Models with a Unified Action Generation Framework

- **arXiv**: <https://export.arxiv.org/abs/2605.03941v2>
- **ID**: `2605.03941v2`
- **分类**: cs.CV, cs.AI
- **作者**: Jianjie Fang, Yingshan Lei, Qin Wan, Ziyou Wang, Yuchao Huang, Yongyan Xu, Baining Zhao, Weichen Zhang, Chen Gao, Xinlei Chen, Yong Li
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [iWorld-Bench A Benchmark for Interactive World Models with a Unified Action Generation Framework.pdf](../pdfs/iWorld-Bench A Benchmark for Interactive World Models with a Unified Action Generation Framework.pdf)

### 摘要（自动抓取）

Achieving Artificial General Intelligence (AGI) requires agents that learn and interact adaptively, with interactive world models providing scalable environments for perception, reasoning, and action. Yet current research still lacks large-scale datasets and unified benchmarks to evaluate their physical interaction capabilities. To address this, we propose iWorld-Bench, a comprehensive benchmark for training and testing world models on interaction-related abilities such as distance perception and memory. We construct a diverse dataset with 330k video clips and select 2.1k high-quality samples covering varied perspectives, weather, and scenes. As existing world models differ in interaction modalities, we introduce an Action Generation Framework to unify evaluation and design six task types, generating 4.9k test samples. These tasks jointly assess model performance across visual generation, trajectory following, and memory. Evaluating 14 representative world models, we identify key limitations and provide insights for future research. The iWorld-Bench model leaderboard is publicly available at iWorld-Bench.com.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

