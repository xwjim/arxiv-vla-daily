---
date: 2026-05-20
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-20（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605191600 TO 202605201559] OR lastUpdatedDate:[202605191600 TO 202605201559]))
```

## Distill to Think, Foresee to Act: Cognitive-Physical Reinforcement Learning for Autonomous Driving

- **arXiv**: <https://export.arxiv.org/abs/2605.21139v1>
- **ID**: `2605.21139v1`
- **分类**: cs.CV, cs.LG
- **作者**: Yang Wu, Qiang Meng, Zhaojiang Liu, Youquan Liu, Jian Yang, Jin Xie
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Distill to Think, Foresee to Act Cognitive-Physical Reinforcement Learning for Autonomous Driving.pdf](../pdfs/Distill to Think, Foresee to Act Cognitive-Physical Reinforcement Learning for Autonomous Driving.pdf)

### 摘要（自动抓取）

Current end-to-end autonomous driving models are fundamentally constrained by the behavioral cloning ceiling of imitation learning. While reinforcement learning offers a path to smarter autonomy, it demands two missing pieces of infrastructure: (1) a cognitive foundation that understands traffic semantics and driving intent, and (2) a foresighted physical environment that can anticipate the consequences of candidate actions. To this end, we propose CoPhy, a CognitivePhysical reinforcement learning framework for autonomous driving. To distill to think, we distill VLM knowledge into the BEV encoder and then discard the VLM entirely, retaining cognitive ability at zero inference cost while releasing the cognitive channel as a pluggable interface for optional human language commands. To foresee to act, we build an auto-regressive BEV world model that explicitly predicts future semantic maps conditioned on candidate actions, serving as an interpretable physical sandbox from which safety metrics are directly derived. Built upon this dual infrastructure, we optimize the driving policy via GRPO with a novel dual-reward mechanism: a physical reward derived from BEV rollouts enforces hard safety constraints, while a cognitive reward from a language-aligned scorer ensures intent compliance. Extensive experiments demonstrate that CoPhy not only achieves state-of-the-art results on NAVSIM v1 and v2 benchmarks, but also enables safer driving via cognitively informed scene compliance and flexible intent control through user-defined language instructions.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Anomaly-Informed Confidence Calibration for Vision-Based Safety Prediction

- **arXiv**: <https://export.arxiv.org/abs/2605.21109v1>
- **ID**: `2605.21109v1`
- **分类**: cs.RO
- **作者**: Zhenjiang Mao, Jiawen Wu, Gabriel Wagner, Zhongzheng Zhang, Ivan Ruchkin
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Anomaly-Informed Confidence Calibration for Vision-Based Safety Prediction.pdf](../pdfs/Anomaly-Informed Confidence Calibration for Vision-Based Safety Prediction.pdf)

### 摘要（自动抓取）

Reliable confidence estimates are important for safely deploying vision-based controllers in autonomous racing, where safety predictions must be derived from camera images, yet modern predictors become dangerously overconfident under test-time distribution shifts. We identify a critical perception-dynamics gap in existing anomaly signals: widely used scores, such as autoencoder reconstruction error, capture visual corruptions but miss dynamics anomalies (e.g., actuation bias, latency), where images remain plausible while the trajectory degrades. To address this, we propose an Anomaly-Informed Online Calibration approach that, without retraining any model component, fuses two complementary anomaly scores extracted from a world model: a perceptual score from reconstruction error and a dynamics score from epistemic uncertainty and control-stream statistics. Based on these fused scores, a lightweight temperature-scaling calibrator leverages test-time augmentation to selectively reduce overconfidence under shift while preserving nominal-condition performance. Experiments on a physical DonkeyCar under four real-world anomaly protocols unseen during training (darkness, blur, actuation bias, processing latency) reduce average expected calibration error from 0.184 to 0.116, a 37% improvement over the best baseline, without modifying the base safety predictor.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Q-ARVD: Quantizing Autoregressive Video Diffusion Models

- **arXiv**: <https://export.arxiv.org/abs/2605.21072v1>
- **ID**: `2605.21072v1`
- **分类**: cs.CV
- **作者**: Siao Tang, Xinyin Ma, Gongfan Fang, Xingyi Yang, Xinchao Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Q-ARVD Quantizing Autoregressive Video Diffusion Models.pdf](../pdfs/Q-ARVD Quantizing Autoregressive Video Diffusion Models.pdf)

### 摘要（自动抓取）

Autoregressive video diffusion models (ARVDs) have emerged as a promising architecture for streaming video generation, paving the way for real-time interactive video generation and world modeling. Despite their potential, the substantial inference cost of ARVDs remains a major obstacle to practical deployment, making model quantization a natural direction for improving efficiency. However, quantization for ARVDs remains largely unexplored. Our empirical analysis shows that directly applying existing quantization schemes developed for standard diffusion transformers to ARVDs leads to suboptimal performance, revealing quantization behaviors that differ from those observed in bidirectional diffusion models. In this paper, we identify two critical challenges in quantizing ARVDs: (C1) Highly unbalanced frame-wise quantization sensitivity. Error accumulation during autoregressive generation can induce severely skewed quantization sensitivity across frames, following an exponential-like decay pattern. (C2) Prominent and heterogeneous outlier patterns in weights. Weight distributions exhibit pronounced outlier channels, whose patterns vary substantially across layer types and block depths. To address these issues, we propose Q-ARVD, a novel framework for accurate ARVD quantization. (S1) To tackle the highly unbalanced frame-wise sensitivity, Q-ARVD incorporates a final-quality aware frame-weighting mechanism into the quantization objective. (S2) To prevent heterogeneous outliers from degrading performance, Q-ARVD introduces an outlier-aware adaptive dual-scale quantization, which automatically detects the presence and quantity of outlier channels for an arbitrary layer, and isolates them to protect normal channels. Extensive experiments demonstrate the superiority of Q-ARVD.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Demo-JEPA: Joint-Embedding Predictive Architecture for One-shot Cross-Embodiment Imitation

- **arXiv**: <https://export.arxiv.org/abs/2605.20811v1>
- **ID**: `2605.20811v1`
- **分类**: cs.RO
- **作者**: Jingyang He, Guangrun Li, Jieyu Zhang, Chengkai Hou, Zhengping Che, Shanghang Zhang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Demo-JEPA Joint-Embedding Predictive Architecture for One-shot Cross-Embodiment Imitation.pdf](../pdfs/Demo-JEPA Joint-Embedding Predictive Architecture for One-shot Cross-Embodiment Imitation.pdf)

### 摘要（自动抓取）

Robotic imitation learning is often treated as reproducing demonstrated actions, but actions are inherently embodiment-specific. When demonstrations come from humans or robots with different morphology, kinematics, or action spaces, this action-centric view requires shared action spaces, heuristic retargeting, or large-scale multi-embodiment co-training. We instead view demonstrations as implicit specifications of future goals: the target agent should infer what state the demonstrator is trying to realize, rather than how the demonstrator executes it. We propose Demo-JEPA, a cross-embodiment imitation framework that decouples demonstration intent from embodiment-specific execution. Built on a JEPA-based world model, Demo-JEPA translates source visual demonstrations into target-compatible future latent trajectories in a shared predictive representation space. The target agent then uses these latent trajectories as subgoals and realizes them through planning under its own learned forward dynamics. Because Demo-JEPA avoids action-level correspondence and requires only visual demonstrations plus the target agent's own interaction experience, it supports flexible imitation across heterogeneous embodiments. Experiments on RLBench and real-world manipulation tasks show that Demo-JEPA matches specialized in-domain planners and generalizes to unseen tasks and embodiment configurations where prior methods fail.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## GaussianDream: A Feed-Forward 3D Gaussian World Model for Robotic Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2605.20752v1>
- **ID**: `2605.20752v1`
- **分类**: cs.RO
- **作者**: Zijian Zhang, Yuqing Jiang, Qian Cheng, Si Liu, Ding Zhao, Ping Luo, Weitao Zhou, Haibao Yu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [GaussianDream A Feed-Forward 3D Gaussian World Model for Robotic Manipulation.pdf](../pdfs/GaussianDream A Feed-Forward 3D Gaussian World Model for Robotic Manipulation.pdf)

### 摘要（自动抓取）

Vision-language-action (VLA) policies have advanced language-conditioned robotic manipulation by transferring semantic priors from pretrained vision-language models to action generation. Yet, standard action-imitation training often provides limited explicit supervision for 3D geometry, dense visual structure, and short-horizon environment evolution, which are critical for physically precise manipulation. We introduce \textbf{GaussianDream}, a feed-forward 3D Gaussian world-model plug-in that turns robot trajectories into structured spatial-temporal supervision. The key idea is to couple current Gaussian reconstruction with horizon-conditioned future Gaussian prediction during training, forcing a compact spatio-temporal prefix to be decodable into renderable 3D Gaussian states. This enables dense RGB rendering, depth, and pseudo 3D scene-flow supervision without requiring test-time Gaussian decoding. At inference, GaussianDream discards all auxiliary decoding heads and retains only the learned prefix to condition action generation, avoiding rendering, video rollout, or additional planning during closed-loop control. Experiments on LIBERO, RoboCasa Human-50, and real-robot tasks demonstrate strong and highly competitive performance, achieving \textbf{98.4\%} average success on LIBERO, \textbf{52.6\%} on RoboCasa Human-50, and \textbf{50.0\%} in real-world evaluation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Time-Dependent PDE-Constrained Optimization via Weak-Form Latent Dynamics

- **arXiv**: <https://export.arxiv.org/abs/2605.20639v1>
- **ID**: `2605.20639v1`
- **分类**: math.OC, cs.LG, math.DS
- **作者**: April Tran, Terry Haut, David Bortz, Youngsoo Choi
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Time-Dependent PDE-Constrained Optimization via Weak-Form Latent Dynamics.pdf](../pdfs/Time-Dependent PDE-Constrained Optimization via Weak-Form Latent Dynamics.pdf)

### 摘要（自动抓取）

Optimization problems constrained by high-dimensional, time-dependent partial differential equations require repeated forward and sensitivity solves, making high-fidelity optimization computationally prohibitive in many-query design and control settings. We present a weak-form latent-space reduced-order modeling framework for accelerating gradient-based PDE-constrained optimization. The proposed approach builds on Weak-form Latent Space Dynamics Identification (WLaSDI), which compresses high-dimensional solution trajectories into a low-dimensional latent representation and identifies parametric latent dynamics using weak-form system identification. By avoiding explicit numerical differentiation of training trajectories, the weak-form improves robustness to noisy data and yields more reliable surrogate dynamics for optimization. We formulate the resulting reduced PDE-constrained optimization problem and derive both direct-sensitivity and adjoint-based gradient expressions for the learned latent dynamics, enabling scalable gradient evaluation with respect to design parameters. The framework is demonstrated on three time-dependent benchmark problems: thermal radiative transfer for optimal hohlraum design, the two-stream instability Vlasov-Poisson system, and the inviscid Burgers equation. Across these examples, WLaSDI produces accurate optimal designs, remains robust under noisy training data, and delivers substantial computational savings, including speedups of up to five orders of magnitude relative to full-order optimization. These results demonstrate that weak-form latent dynamics provide an efficient and noise-robust surrogate foundation for gradient-based optimization of complex time-dependent PDE systems.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

