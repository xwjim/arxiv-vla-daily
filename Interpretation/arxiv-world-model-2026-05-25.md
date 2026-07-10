---
date: 2026-05-25
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-25（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605241600 TO 202605251559] OR lastUpdatedDate:[202605241600 TO 202605251559]))
```

## WBench: A Comprehensive Multi-turn Benchmark for Interactive Video World Model Evaluation

- **arXiv**: <https://export.arxiv.org/abs/2605.25874v1>
- **ID**: `2605.25874v1`
- **分类**: cs.CV
- **作者**: Kaining Ying, Hengrui Hu, Siyu Ren, Jiamu Li, Fengjiao Chen, Ziwen Wang, Xuezhi Cao, Xunliang Cai, Henghui Ding
- **总结状态**: 已总结
- **标签**: WBench、world-model、基准测试、评测、视频生成
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Interactive world models are advancing rapidly, yet existing benchmarks cover only part of the required competencies, leaving no unified standard for systematic evaluation. To fill this gap, we introduce WBench, a comprehensive multi-turn benchmark for interactive world model evaluation along five dimensions, namely video quality, setting adherence, interaction adherence, consistency, and physics compliance. WBench contains 289 test cases and 1,058 interaction turns, where each case specifies a world setting and a multi-turn interaction sequence, covering diverse scenes, styles, subjects, and both first- and third-person perspectives, together with four interaction types, including navigation, subject action, event editing, and perspective switching. For navigation, WBench unifies text, 6-DoF pose, and discrete-action control, enabling evaluation of models with different native input interfaces. Evaluation uses 22 automatic sub-metrics that combine specialist vision models with large multimodal models, and all metrics are validated against human judgments. Across 20 state-of-the-art models, we find that no single model performs strongly across all dimensions. We provide detailed diagnostic insights into the characteristic strengths, weaknesses, and open challenges of each model. Code and data are available at https://github.com/meituan-longcat/WBench.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Interactive world models are advancing rapidly, yet existing benchmarks cover only part of the required competencies, leaving no unified standard for systematic evaluation。

结构化要点：
- 研究问题：围绕该主题提出统一评测/诊断需求。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要提及代码/数据开源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Back to Parsimonious Latents: Learning Task-Centric World Models from Visual Foundations

- **arXiv**: <https://export.arxiv.org/abs/2605.25620v1>
- **ID**: `2605.25620v1`
- **分类**: cs.AI
- **作者**: Minghao Fu, Fan Feng, Nicklas Hansen, Biwei Huang
- **总结状态**: 已总结
- **标签**: world-model、论文速读
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models enable agents to predict future dynamics conditioned on actions, making the choice of latent representation central to planning and control. Such representations are often either learned directly from pixels with limited semantic structure or inherited from frozen visual foundation models with excessive task-irrelevant detail, yielding state spaces that are poorly matched to downstream planning and control. This is especially challenging in reward-free offline settings, where the model must learn from fixed trajectories without reward supervision or online interaction. To address this, we propose TC-WM, a framework for turning foundation-model embeddings into compact, task-sufficient world representations. The key design is to treat the pretrained embedding space as a semantic scaffold rather than as the final state space: TC-WM linearly projects high-dimensional visual embeddings into a compact latent as the dynamic space, aligns a subspace with the agent's physical state via contrastive learning, and reconstructs embeddings to preserve useful visual structure. This combines the generality of foundation features with the controllability of task-centric dynamics. Theoretically, we show that TC-WM suffices to identify the underlying task-centric latent factors up to a simple transformation. Empirically, TC-WM enables test-time planning across diverse environments (e.g., Robomimic and D4RL), achieving better world-modeling quality and more precise control than state-of-the-art approaches.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：World models enable agents to predict future dynamics conditioned on actions, making the choice of latent representation central to planning and control。

结构化要点：
- 研究问题：围绕该主题提出建模/方法问题设定。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要未明确说明开源资源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Learning Latent Dynamical Causal Processes for Single-Cell Perturbation Prediction

- **arXiv**: <https://export.arxiv.org/abs/2605.25581v1>
- **ID**: `2605.25581v1`
- **分类**: cs.LG
- **作者**: Wenkang Jiang, Yuhang Liu, Erdun Gao, Ehsan Abbasnejad, Lina Yao, Javen Qinfeng Shi
- **总结状态**: 已总结
- **标签**: 因果、论文速读
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Single-cell perturbation prediction aims to infer how cells respond to unseen interventions and to achieve out-of-distribution (OOD) generalization, providing a computational route to understanding how perturbations reshape cellular programs over time. Existing machine learning methods have made important progress, but typically capture only one side of the response. Latent causal approaches seek mechanisms that support generalization and interpretation, yet often treat perturbation effects as static outcomes. Temporal models describe how gene expression changes across time, but usually do not explicitly recover the latent causal generative mechanisms driving these changes. In practice, perturbation effects are both latent and dynamical: interventions act through unobserved cellular programs, whose states evolve over time and give rise to observed expression profiles. Motivated by this view, we propose a latent dynamical causal generative model for single-cell perturbation data that jointly captures latent cellular programs, perturbation-conditioned mechanisms, and temporal evolution. We further provide an identifiability analysis showing that, under suitable conditions, the latent causal variables are recoverable up to standard equivalence classes. Guided by this analysis, we develop CITE-VAE, a learning framework for recovering latent cellular programs and their perturbation-driven dynamics from single-cell sequencing data. Experiments on Causal-3DIdent validate the theoretical results and the effectiveness of the proposed method in controlled settings. Additional experiments on real-world CRISPR-based single-cell perturbation data show improved generalization to unseen perturbations compared with state-of-the-art baselines, highlighting the practical robustness of our approach.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Single-cell perturbation prediction aims to infer how cells respond to unseen interventions and to achieve out-of-distribution (OOD) generalization, providing a computational route to understanding how perturbations r...。

结构化要点：
- 研究问题：围绕该主题提出建模/方法问题设定。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要未明确说明开源资源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Toward Native Multimodal Modeling: A Roadmap

- **arXiv**: <https://export.arxiv.org/abs/2605.25343v1>
- **ID**: `2605.25343v1`
- **分类**: cs.CV
- **作者**: Siyu An, Junru Lu, Junnan Dong, Qiufeng Wang, Yinghui Li, Weizhi Fei, Zichao Yu, Zheng Yuan, Biao Liu, Haopeng Wang, Renzhao Liang, Yixuan Yang, Yunhang Shen, Bo Ke, Keyu Chen, Linhao Luo, Difan Zou, Xiao Huang, Di Yin, Ruizhi Qiao, Xing Sun
- **总结状态**: 已总结
- **标签**: world-model、基准测试、评测、视频生成
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Multimodal modeling represents a vital step from modality-agnostic reasoning toward world modeling. While early approaches predominantly rely on late-fusion that assembles encoders and frozen language backbones with output heads, recent efforts have shifted the paradigm toward native multimodal modeling (NMM) with the intrinsic integration of modalities for superior multimodal performance. Despite its potential, the design space of native architectures remains insufficiently defined. In this paper, we present the community with a formalized roadmap for this transition. Specifically, we formally define the architectural nativity, distinguishing mid-fusion and early-fusion from non-native paradigms. We further organize the existing native models through the lens of input-output duality into three categories: (i) Multi-to-Text for cross-modal comprehension with text-only output; (ii) Multi-to-Target for scenario-oriented generation, e.g., image, audio and video generation, and (iii) Multi-to-Multi for unified modeling with symmetric input-output. We deliver a comprehensive and industrial-grade investigation into the transition toward the definitive NMM framework, where understanding and generation seamlessly coexist within a unified transformer paradigm. We systematically unpack the end-to-end pipeline from industrial perspectives from architectural coordination, massive data curation, to full-stack training recipes, inference & deployment, and the comprehensive evaluation for truly native modeling.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Multimodal modeling represents a vital step from modality-agnostic reasoning toward world modeling。

结构化要点：
- 研究问题：围绕该主题提出统一评测/诊断需求。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要未给出明确量化对比结论或细节有限。
- 开源/资源：摘要提及代码/数据开源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Teaching Video Generators to Remember: Eliciting Dynamic Memory for Out-of-Sight State Evolution

- **arXiv**: <https://export.arxiv.org/abs/2605.25333v1>
- **ID**: `2605.25333v1`
- **分类**: cs.CV
- **作者**: Tianshuo Xu, Yichen Xie, Depu Meng, Chensheng Peng, Quentin Herau, Bo Jiang, Yihan Hu, Wei Zhan
- **总结状态**: 已总结
- **标签**: world-model、基准测试、扩散模型、评测、视频生成、记忆机制
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Video world models should maintain evolving states when evidence is unobserved, yet current generators often freeze hidden states upon interruption. This is not simply a capacity problem: pretrained video diffusion transformers already possess KV-cache mechanisms capable of non-local retrieval, but they are rarely trained to use them as dynamic memory. We introduce ReMind, a framework eliciting dynamic memory behavior via memory-oriented data, event-aware training, and cache adaptation. Organized around a taxonomy of 100+ dynamic events, we build a camera-annotated training mixture combining VLM-filtered real videos, generated hard dynamics, synthetic camera loops, and memory-interruption augmentations. Each clip is converted into a frame graph with protected anchors, degraded intervals, and explicit temporal gaps. A node-structured curriculum, including node-drop, noisy memory, frontier continuation, and reference-cache training, forces the model to retrieve relevant past states across interruptions rather than relying solely on local continuity. PM-RoPE, an elegant camera-phase RoPE extension, unlocks spatiotemporal retrieval at a single-attention cost while preserving pretrained pathways. ReMind achieves the best overall scores on STEVO-Bench and recovery tasks. Furthermore, general image-to-video evaluations confirm this curriculum avoids catastrophic forgetting. We will open-source our code, data, and models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Video world models should maintain evolving states when evidence is unobserved, yet current generators often freeze hidden states upon interruption。

结构化要点：
- 研究问题：围绕该主题提出统一评测/诊断需求。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要提及代码/数据开源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## UWM-JEPA: Predictive World Models That Imagine in Belief Space

- **arXiv**: <https://export.arxiv.org/abs/2605.25313v1>
- **ID**: `2605.25313v1`
- **分类**: cs.LG, cs.AI, cs.RO, stat.ML
- **作者**: Santosh Kumar Radha, Oktay Goktas
- **总结状态**: 已总结
- **标签**: UWM-JEPA、world-model、论文速读
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models for partially observed environments must imagine multiple compatible hidden futures and steer between them under counterfactual actions. Joint Embedding Predictive Architectures (JEPAs) do this in latent space, but a vector-valued latent has no internal structure for carrying the belief over hidden continuations through blind rollout. We introduce the Unitary World Model JEPA (UWM-JEPA), a JEPA world model with a density-matrix latent on a joint system-environment space and a learned unitary predictor. The construction preserves the joint-state spectrum exactly during rollout, so the predictor itself cannot dissipate the represented uncertainty. On a hidden-velocity indicator task requiring five-step forward simulation under a given action sequence with the target observation masked, UWM-JEPA reaches 0.77 accuracy and degrades monotonically as actions are perturbed; a parameter-matched LSTM-JEPA trained under the same counterfactual-target objective and action head collapses to majority-class accuracy (0.53) under every action condition. Under blind rollout, UWM-JEPA loses fewer than ten points of probe R^2 at short horizons while vector-latent baselines lose forty-one and sixty-eight; both nevertheless tie on a held-out context probe, locating the separation in the predictor rather than the encoder. Action sensitivity itself requires training against counterfactual rather than teacher-forced targets, a finding that applies beyond the unitary parameterisation. For JEPA world models to imagine under partial observability, latent geometry and predictor dynamics matter, not frozen context-encoding capacity alone.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：World models for partially observed environments must imagine multiple compatible hidden futures and steer between them under counterfactual actions。

结构化要点：
- 研究问题：围绕该主题提出建模/方法问题设定。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要未给出明确量化对比结论或细节有限。
- 开源/资源：摘要提及代码/数据开源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Latent Q-Barrier Shielding for Safe In-Context Reinforcement Learning

- **arXiv**: <https://export.arxiv.org/abs/2605.25267v1>
- **ID**: `2605.25267v1`
- **分类**: cs.LG, cs.AI
- **作者**: Minjae Kwon, Amir Moeini, Shangtong Zhang, Lu Feng
- **总结状态**: 已总结
- **标签**: 基准测试、强化学习、安全、评测
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Safe in-context reinforcement learning (ICRL) adapts online from interaction history without test-time parameter updates while controlling episode cost under a safety budget. Under out-of-distribution (OOD) deployment shifts, pretraining-only safe ICRL can give poor reward-safety tradeoffs because the remaining budget affects behavior only through frozen policy conditioning, not an explicit action-level check against predicted future cost. We propose a latent Q-Barrier shield that learns a context representation, latent dynamics, and an ensemble cost critic before deployment. Without parameter updates, the shield infers context from history and filters or softly reweights candidate actions using the remaining budget and predicted future cost. We prove a conditional, error-decomposed barrier-margin result: a Q-Barrier-satisfying action leaves the next latent-budget state with an approximately budget-safe continuation under the learned critic, up to Bellman and latent-prediction errors. Across five safe ICRL benchmarks, the shield improves deployment-time reward-safety tradeoffs over a strong safe-ICRL baseline: after a short context window, it achieves higher return in four of five benchmarks while matching or lowering average episode cost in all five.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Safe in-context reinforcement learning (ICRL) adapts online from interaction history without test-time parameter updates while controlling episode cost under a safety budget。

结构化要点：
- 研究问题：围绕该主题提出统一评测/诊断需求。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要未明确说明开源资源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Boosting Inference with Guided Reasoning: Stochastic Exploration for Recursive Models

- **arXiv**: <https://export.arxiv.org/abs/2605.25230v1>
- **ID**: `2605.25230v1`
- **分类**: cs.AI
- **作者**: Andrew Corbett, Archit Sood, Anna Tzatzopoulou, Sai-Aakash Ramesh, Tim Dodwell
- **总结状态**: 已总结
- **标签**: 论文速读
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Recent work on recursive architectures has shown that tiny neural networks can be surprisingly powerful on structured reasoning tasks. The trick is to model reasoning trajectories with a latent dynamical system. We argue that the inference-time behaviour of these architectures is best understood as approximate inference over latent reasoning trajectories, with deterministic recursion as the one-particle, zero-noise limit. We make this view operational through guided stochastic exploration: stochastic perturbations of the reasoning dynamics propose neighbouring trajectories, and the model's existing early-stopping head reweights them online. The framework yields three label-free diagnostics: local stability, guide alignment, and cloud-token entropy. These predict, from inference traces alone, whether the procedure will help and which of its outputs to trust. On Sudoku-Extreme it lifts exact-solve accuracy from $85.9\%$ to $98.0\%$ without retraining; on Maze-Hard the diagnostics flag a misaligned guide, as validation performance later confirms. The same machinery thus characterises both when recursive reasoning has room to improve at the trajectory level and when the model's internal guide can recover it.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Recent work on recursive architectures has shown that tiny neural networks can be surprisingly powerful on structured reasoning tasks。

结构化要点：
- 研究问题：围绕该主题提出建模/方法问题设定。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要未明确说明开源资源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Grow-Prune-Freeze Networks: Adaptive & Continual Learning Technique for Olfactory Navigation

- **arXiv**: <https://export.arxiv.org/abs/2605.25170v1>
- **ID**: `2605.25170v1`
- **分类**: cs.LG, cs.AI, cs.ET, cs.RO
- **作者**: Kordel K. France, Ovidiu Daescu
- **总结状态**: 已总结
- **标签**: world-model、数据集、强化学习、持续学习
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Training data for olfaction is scattered through disparate, non-standardized datasets that limit the ability to build representative world models. Olfactory navigation is a highly dynamic and non-stationary task that benefits from real-time continual learning. We introduce an adaptive framework called Grow-Prune-Freeze (GPF) networks that enable an agent to continually learn through growing, pruning, and freezing early layers of its policy in response to world complexity. Grounding GPFs in non-linear random matrix theory, we show that the work of Pennington & Worth (2017) can be extended from single hidden layers to n-layer continual-learning models, and that eigenvalue composition of network weights is preserved as successive layers are added. We show that GPFs based on Expected SARSA achieve a 94% success rate on turbulent plume navigation - a partially observable, non-stationary task representative of the "big world" challenges that motivate adaptive learning in robotics - and provide supporting methodology for applying GPFs in other world models. Further experiments amount evidence that GPFs may generalize well to other machine learning tasks such as reinforcement learning in Atari, image classification, and autoregressive language models. We open source all code and data to encourage improvements on and more research in olfactory robotics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：

一句话：Training data for olfaction is scattered through disparate, non-standardized datasets that limit the ability to build representative world models。

结构化要点：
- 研究问题：围绕该主题提出数据集/基准需求，并尝试提供评测方案。
- 方法：提出新的方法/框架/数据集，并描述其组成与训练/评测流程（以摘要为准）。
- 结果：摘要报告了实验或对比结论（未在此扩展摘要未提及细节）。
- 开源/资源：摘要提及代码/数据开源。
- 局限：如摘要未覆盖实验设置/消融/失败案例，需结合正文确认。

- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

