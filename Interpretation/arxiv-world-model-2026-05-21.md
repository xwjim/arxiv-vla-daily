---
date: 2026-05-21
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-21（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605201600 TO 202605211559] OR lastUpdatedDate:[202605201600 TO 202605211559]))
```

## Steins;Gate Drive: Semantic Safety Arbitration over Structured Futures for Latency-Decoupled LLM Planning

- **arXiv**: <https://export.arxiv.org/abs/2605.22456v1>
- **ID**: `2605.22456v1`
- **分类**: cs.RO, cs.AI
- **作者**: Anjie Qiu, Hans D. Schotten
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Cloud-hosted LLM driver agents provide useful semantic judgments, but their inference latency exceeds stepwise vehicle-control windows. Learned world models predict futures, but they usually keep future generation and action selection inside large coupled loops. We present SteinsGateDrive, a latency-decoupled planner-runtime architecture in which the worldline metaphor from the eponymous story names one plausible consequence of an intervention: the LLM selects counterfactual driving futures before the final control instant, and a runtime reuses the selected forecast only while safety contracts remain valid. The generator builds three world-line roles: alpha nominal ego-conditioned futures, beta interaction counterfactuals around nearby vehicles, and gamma hazard-stress futures such as braking, cut-ins, or blocked corridors. The selected branch becomes a typed StrategicForecast with horizon, validity/abort conditions, fallback, and authority. On a within-subject, matched-seed normal-highway protocol with 10 seeds and 20 steps, GPT-5.4 mini reduces effective lag from +3.07 s at 1-second horizon to -0.01 s at 4-second horizon while preserving the measured no-collision safety boundary. The architecture's safety contribution comes from the atom-predicate runtime check, not from the drift score, which functions as a refresh-frequency knob.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Pre-VLA: Preemptive Runtime Verification for Reliable Vision-Language-Action and World-Model Rollouts

- **arXiv**: <https://export.arxiv.org/abs/2605.22446v1>
- **ID**: `2605.22446v1`
- **分类**: cs.CV, cs.AI, cs.RO
- **作者**: Zhen Sun, Yongjian Guo, Haoran Sun, Luqiao Wang, Wei Lu, Jiachi Ji, Shengzhe Ji, Junwu Xiong, Zhijun Meng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

While large vision-language-action (VLA) models and generative world models (WM) have advanced long-horizon embodied intelligence, their practical deployment remains challenged by uncertainty in learning-based action generation. Low-quality actions may cause physical failures during execution or lead to misleading world-model rollouts with redundant rendering costs. To address this issue, we propose Pre-VLA, a unified runtime verification architecture that performs preemptive action validity assessment before physical execution or world-model imagination. Pre-VLA leverages an efficient multimodal backbone with modality-aware pooling and a lightweight dual-branch head to predict both safety confidence and critic-derived advantage scores for candidate action chunks. To handle severe class imbalance and unstable boundary decisions, we train Pre-VLA with a multi-task objective combining Focal classification, advantage regression, and soft-threshold calibration. During deployment, a dual-mode preemptive resampling scheduler filters low-quality actions and triggers adaptive resampling under a limited computation budget. Experiments on the LIBERO benchmark show that Pre-VLA improves the average closed-loop success rate across four suites from 30.79\% to 37.62\% over RynnVLA-002, reduces task execution steps, achieves 183.9 ms average forward verification time per action chunk, and mitigates error accumulation in world-model rollouts.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## From Snapshots to Trajectories: Learning Single-Cell Gene Expression Dynamics via Conditional Flow Matching

- **arXiv**: <https://export.arxiv.org/abs/2605.22340v1>
- **ID**: `2605.22340v1`
- **分类**: cs.LG
- **作者**: Siyu Pu, Qingqing Long, Xiaohan Huang, Haotian Chen, Jiajia Wang, Meng Xiao, Xiao Luo, Hengshu Zhu, Yuanchun Zhou, Xuezhi Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Single-cell RNA sequencing (scRNA-seq) provides high-dimensional profiles of cellular states, enabling data-driven modeling of cellular dynamics over time. In practice, time-resolved scRNA-seq is collected at only a few discrete time points as unpaired snapshot populations, leaving substantial temporal gaps. This motivates trajectory inference at unmeasured time points. Existing methods mainly follow two directions, optimal-transport (OT) alignment provides distribution-level matching between observed snapshots, while continuous-time generative models support forecasting via learned dynamics. However, two challenges remain: (i) unpaired snapshots render local transitions between adjacent time points ambiguous, leading to unstable supervision; and (ii) long-horizon prediction relies on repeated integration, where small modeling errors compound and cause distribution drift. To address these challenges, we propose single-cell Flow Matching (scFM), a latent generative framework based on coupling-conditioned flow matching. First, we compute entropically regularized OT couplings between adjacent snapshots and use them to construct soft, weighted flow-matching targets for learning time-dependent velocity fields. Second, we learn bidirectional velocity fields and leverage their consistency to refine couplings and improve temporal coherence under sparse supervision. Third, we introduce distribution-level alignment and latent dynamic regularization to anchor long rollouts and mitigate drift. Experiments on real-world time-series scRNA-seq datasets show that scFM consistently improves distributional prediction performance for both temporal interpolation and extrapolation. Moreover, scFM yields more accurate trajectory reconstruction and temporally coherent visualizations where intermediate time points are absent, indicating a more faithful recovery of underlying temporal gene expression dynamics.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Beyond Euclidean Proximity: Repairing Latent World Models with Horizon-Matched Trajectory Reachability Metrics

- **arXiv**: <https://export.arxiv.org/abs/2605.22164v1>
- **ID**: `2605.22164v1`
- **分类**: cs.LG, cs.RO
- **作者**: Liangyu Li, Shengzhi Wang, Qingwen Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Latent world models can contain the state needed for control, yet their terminal-cost interface can expose the planner to the wrong decision-relevant information. In common latent MPC, candidate sequences are ranked by Euclidean distance between predicted terminal and goal latent states; this assumes that raw latent distance weights reachability-relevant variables correctly. We propose trajectory reachability metrics (TRM), a post-hoc terminal-ranking method for fixed latent world models. TRM trains a small pairwise head from logged trajectory structure and uses it as a replacement or hybrid cost; the encoder, dynamics, sampler, optimizer, and evaluation manifests remain fixed. The key design choice is horizon-aware supervision: the metric is trained on broad, balanced temporal separations to match the long-horizon terminal candidate ranking problem. On a hard TwoRoom benchmark, raw latent planning with LeWorldModel (LeWM) reaches 7.0% success, while full-horizon TRM reaches 97.0%; shuffled temporal-label controls stay at 0.0%. The same recipe improves a PLDM baseline from 32.7% to 84.0% across three seeds, and a short-horizon TRM variant reaches only 35.0% with the 100,000 pair budget. In TwoRoom, we provide mechanistic evidence for why TRM works: XY position is linearly decodable (R^2=0.998), yet raw latent MSE misranks candidates; the XY-probe rowspace accounts for less than 1% of terminal-goal latent MSE but carries most candidate-quality signal; and SCSA audits show that TRM improves the ordering and selected endpoint seen by the planner. On PushT go50/go75, TRM-style task-state metrics improve SCSA ranking and selected final distance more cleanly than closed-loop success, motivating auxiliary hybrid costs in continuous manipulation. TRM is the planner-facing repair, and audits explain when terminal reachability metrics should replace or augment raw latent proximity.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Efficient Agentic Reasoning Through Self-Regulated Simulative Planning

- **arXiv**: <https://export.arxiv.org/abs/2605.22138v1>
- **ID**: `2605.22138v1`
- **分类**: cs.AI, cs.CL, cs.LG, cs.RO
- **作者**: Mingkai Deng, Jinyu Hou, Lara Sá Neves, Varad Pimpalkhute, Taylor W. Killian, Zhengzhong Liu, Eric P. Xing
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

How should an agent decide when and how to plan? A dominant approach builds agents as reactive policies with adaptive computation (e.g., chain-of-thought), trained end-to-end expecting planning to emerge implicitly. Without control over the presence, structure, or horizon of planning, these systems dramatically increase reasoning length, yielding inefficient token use without reliable accuracy gains. We argue efficient agentic reasoning benefits from decomposing decision-making into three systems: simulative reasoning (System II) grounding deliberation in future-state prediction via a world model; self-regulation (System III) deciding when and how deeply to plan via a learned configurator; and reactive execution (System I) handling fine-grained action. Simulative reasoning provides unified planning across diverse tasks without per-domain engineering, while self-regulation ensures the planner is invoked only when needed. To test this, we develop SR$^2$AM (Self-Regulated Simulative Reasoning Agentic LLM), realizing both as distinct stages within an LLM's chain-of-thought, with the LLM as world model. We explore two instantiations: recording decisions from a prompted multi-module system (v0.1) and reconstructing structured plans from traces of pretrained reasoning LLMs (v1.0), trained via supervised then reinforcement learning (RL). Across math, science, tabular analysis, and web information seeking, v0.1-8B and v1.0-30B achieve Pass@1 competitive with 120-355B and 685B-1T parameter systems respectively, while v1.0-30B uses 25.8-95.3% fewer reasoning tokens than comparable agentic LLMs. RL increases average planning horizon by 22.8% while planning frequency grows only 2.0%, showing it learns to plan further ahead rather than more often. More broadly, learned self-regulation instantiates a principle we expect to extend beyond planning to how agents govern their own learning and adaptation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## LVDrive: Latent Visual Representation Enhanced Vision-Language-Action Autonomous Driving Model

- **arXiv**: <https://export.arxiv.org/abs/2605.22089v1>
- **ID**: `2605.22089v1`
- **分类**: cs.CV, cs.AI
- **作者**: Xiaodong Mei, Diankun Zhang, Hongwei Xie, Guang Chen, Hangjun Ye, Dan Xu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Vision-Language-Action (VLA) models have emerged as a promising framework for end-to-end autonomous driving. However, existing VLAs typically rely on sparse action supervision, which underutilizes their powerful scene understanding and reasoning capabilities. Recent attempts to incorporate dense visual supervision via world modeling often overemphasize pixel-level image reconstruction, neglecting semantically meaningful scene representation learning. In this work, we propose LVDrive, a Latent Visual representation enhanced VLA framework for autonomous driving. LVDrive introduces a future scene prediction task into the VLA paradigm, where future representations are learned entirely in a high-level latent space under auxiliary supervision from a pretrained vision backbone. Departing from inefficient autoregressive generation, we jointly model future scene and motion prediction within a unified embedding space, processed in a single forward pass to conduct the future-aware reasoning. We further design a two-stage trajectory decoding strategy that explicitly leverages the learned latent future representations to refine trajectory generation. Extensive experiments on the challenging Bench2Drive benchmark demonstrate that LVDrive achieves significant improvements in closed-loop driving performance, outperforming both action supervised methods and image-reconstruction-based world model approaches.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## ChronoMedicalWorld: A Medical World Model for Learning Patient Trajectories from Longitudinal Care Data

- **arXiv**: <https://export.arxiv.org/abs/2605.21963v1>
- **ID**: `2605.21963v1`
- **分类**: cs.LG, cs.AI
- **作者**: Jiangyuan Wang, Xuyong Chen, Junwei He, Xu Xu, Shasha Xie, Fuman Han
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Long-horizon clinical simulation -- predicting how a patient's physiology evolves over years under specified interventions -- is central to chronic-disease care, yet existing electronic health record (EHR) models are predominantly discriminative, and general-purpose large language models drift under repeated interventions. We propose the \textbf{ChronoMedicalWorld Model (CMWM)}, an action-conditioned latent world-model framework for learning patient trajectories from longitudinal care data. CMWM couples a joint-embedding state encoder with a wide action encoder that admits both structured intervention indicators and free-text communication embeddings, and trains a recurrent latent transition module under a six-term objective: next-observation supervision, next-latent prediction, SIGReg latent regularisation, and three physiology-aware shape priors (slope, continuity, large-jump penalty). A closed-loop rollout-prefix protocol matches training to deployment, so the model is optimised against the same multi-step error it exhibits at inference. As a concrete case study, we instantiate CMWM for annual estimated glomerular filtration rate (eGFR) trajectory forecasting in chronic kidney disease (CKD). On a 2{,}232-patient nephrology cohort, the CKD instantiation achieves a dynamic-50\% history rollout test mean absolute error (MAE) of 7.384 and root-mean-square error (RMSE) of 10.256, against 7.964 and 11.069 for a tuned GPT-5.5 structured-prompting baseline ($-7.28\%$ MAE, $-7.35\%$ RMSE), with the gain dominated by the dialogue portion of patient--health-coach communication. The framework is not CKD-specific: its architecture, loss design, and training protocol apply to any chronic condition that can be cast as periodic clinical state interleaved with structured and conversational interventions.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Truncated Neural Likelihood Estimation for Simulation-Based Inference in State-Space Models

- **arXiv**: <https://export.arxiv.org/abs/2605.21805v1>
- **ID**: `2605.21805v1`
- **分类**: stat.CO, cs.LG, stat.ML
- **作者**: Kostas Tsampourakis, Víctor Elvira
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

State-space models (SSMs) are powerful probabilistic tools for modeling time-varying systems with latent dynamics. Inference in SSMs involves the estimation of latent states and parameters. In this work, we focus on parameter inference, which for SSMs is in general a very challenging problem due to the intractability of the likelihood. Recently, neural estimation methods, such as sequential neural likelihood (SNL), have shown promising results in Bayesian inference problems. In this paper, we show that SNL, when applied to the SSM setting, suffers important limitations, such as requiring a large amount of simulated samples to achieve a moderate performance, scaling poorly with sequence length, while not being amortized. We then introduce a novel inference algorithm called truncated-SNL (T-SNL), which addresses the limitations of SNL. Our algorithm is more accurate, more stable and robust during training, more scalable to longer temporal sequences, and can be amortized when new observations become available. Our experiments show that T-SNL is sample-efficient, robust, and flexible algorithm which outperforms other approaches.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## stable-worldmodel: A Platform for Reproducible World Modeling Research and Evaluation

- **arXiv**: <https://export.arxiv.org/abs/2605.21800v1>
- **ID**: `2605.21800v1`
- **分类**: cs.LG, cs.RO
- **作者**: Lucas Maes, Quentin Le Lidec, Luiz Facury, Nassim Massaudi, Ayush Chaurasia, Francesco Capuano, Richard Gao, Taj Gillin, Dan Haramati, Damien Scieur, Yann LeCun, Randall Balestriero
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

World models are central to building agents that can reason, plan, and generalize beyond their training data. However, research on world models is currently fragmented, with disparate codebases, data pipelines, and evaluation protocols hindering reproducibility and fair comparison. Current practice is further limited by three key bottlenecks: fragile one-off codebases, slow video data loading, and the lack of standardized generalization benchmarks. We present stable-worldmodel (swm), an open-source platform for standardized and reproducible world modeling research and evaluation. It delivers (1) a high-performance Lance-based data layer with native support and conversion tools for MP4, HDF5, and LeRobot datasets, (2) clean, well-tested implementations of modern world model baselines and planning solvers, and (3) a broad suite of environments and tasks extended with controllable visual, geometric, and physical factors of variation for systematic in-silico evaluation of dynamics understanding, control performance, representation quality, and out-of-distribution generalization. By unifying the full pipeline under a single, scalable framework, \texttt{swm} dramatically reduces research overhead and accelerates trustworthy progress toward reliable world models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Equilibrium Reasoners: Learning Attractors Enables Scalable Reasoning

- **arXiv**: <https://export.arxiv.org/abs/2605.21488v1>
- **ID**: `2605.21488v1`
- **分类**: cs.LG
- **作者**: Benhao Huang, Zhengyang Geng, Zico Kolter
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Scaling test-time compute by iteratively updating a latent state has emerged as a powerful paradigm for reasoning. Yet the internal mechanisms that enable these iterative models to generalize beyond memorized patterns remain unclear. We hypothesize that generalizable reasoning arises from learning task-conditioned attractors: latent dynamical systems whose stable fixed points correspond to valid solutions. We formalize this process through Equilibrium Reasoners (EqR), which enable test-time scaling without external verifiers or task-specific priors. EqR scales internal dynamics along two axes: depth, by running more iterations, and breadth, by aggregating stochastic trajectories from multiple initializations. Empirically, gains from test-time scaling are tightly coupled with stronger convergence toward solution-aligned attractors. This attractor perspective allows neural networks to adaptively allocate test-time compute based on task difficulty. While simple cases converge within 1 to 5 iteration steps, harder cases benefit from massive test-time scaling. By unrolling up to the equivalent of 40,000 layers, scalable latent reasoning boosts accuracy from 2.6% for feedforward models to over 99% on Sudoku-Extreme. These results suggest that learned attractor landscapes provide a useful mechanistic lens for understanding scalable reasoning in iterative latent models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Latent Dynamics for Full Body Avatar Animation

- **arXiv**: <https://export.arxiv.org/abs/2605.21478v1>
- **ID**: `2605.21478v1`
- **分类**: cs.CV, cs.GR
- **作者**: Shichong Peng, Chengxiang Yin, Fei Jiang, Zhongshi Jiang, Lingchen Yang, Qingyang Tan, Amin Jourabloo, Jason Saragih, Ke Li, Christian Häne
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Pose-driven full-body avatars built on neural rendering produce high-quality novel views of a captured subject. Yet loose clothing and other dynamic elements deform in ways pose alone cannot explain: the same pose can correspond to many different states, because their motion depends on history, inertia, and contact. Explicit simulation and layered-garment methods can model such dynamics, but they require either a dedicated garment template, which raw multi-view capture does not naturally provide, or a test-time physics simulator with non-trivial runtime cost. A parallel line of work learns data-driven clothing avatars that avoid explicit garment layers. These methods add an auxiliary latent for variation beyond pose; at inference, they fix it, regress it from pose, or retrieve it from training data, without explicitly modeling how the latent evolves with its own dynamics. Additionally, even in everyday motion with loose clothing, existing architectures often struggle to capture fine-grained detail, producing blurry renderings and temporal artifacts. We augment a pose-conditioned 3D Gaussian avatar with a transformer-based decoder and a dynamics residual latent that captures temporal appearance and geometry variation beyond the driving signals. At inference, a learned latent dynamics model evolves the residual latent from a short pose history and the previous latent state. The model decomposes each update into driving, restoring, and dissipative forces, producing temporally coherent, history-dependent rollouts with negligible added cost. Different initial conditions yield diverse yet plausible motion trajectories, and the force decomposition exposes controls such as stiffness. Across nine captured sequences of everyday motion with diverse loose garments, quantitative metrics and a perceptual user study show improved animation quality over recent data-driven baselines.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

