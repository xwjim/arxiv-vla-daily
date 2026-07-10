---
date: 2026-05-27
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-27（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605261600 TO 202605271559] OR lastUpdatedDate:[202605261600 TO 202605271559]))
```

## LEIA: Learned Environment for Interactive Architected Materials

- **arXiv**: <https://export.arxiv.org/abs/2605.28368v1>
- **ID**: `2605.28368v1`
- **分类**: cs.LG, cond-mat.mtrl-sci, physics.app-ph
- **作者**: Haiqian Yang, Yuan Cao, Markus J. Buehler
- **总结状态**: 已总结
- **标签**: 世界模型, 物理建模, 材料设计, 交互式仿真, 非线性动力学, 工程应用
- **PDF**: [LEIA Learned Environment for Interactive Architected Materials.pdf](../pdfs/LEIA Learned Environment for Interactive Architected Materials.pdf)

### 摘要（自动抓取）

World models have enabled interactive exploration of game environments and robotic manipulation, but physical engineering remains beyond their reach: real materials exhibit nonlinear constitutive laws, carry history-dependent internal state, undergo inertial dynamics, and may possess hierarchical structures spanning multiple length scales. We present LEIA (Learned Environment for Interactive Architected materials), a world model that lets engineers apply boundary conditions step by step and observe the resulting deformation and stress fields in real time. LEIA handles large three-dimensional unstructured meshes and generates autoregressive responses to user-specified loading. We introduce MicroPlate, a benchmark of architected plates spanning two regimes of microstructure modeling: architected lattices that resolve microstructure explicitly through three-dimensional geometry, and a homogeneous plate where microstructural change is modeled implicitly through internal degrees of freedom. MicroPlate is used to assess LEIA alongside four baseline methods across both regimes. Finally, we demonstrate that LEIA enables efficient candidate generation and ranking for fast surrogate-guided search for de novo designs of architected materials, with stress-accurate candidate ranking validated by finite element ground truth.

### 一、论文元数据
- **标题：** LEIA: Learned Environment for Interactive Architected Materials
- **核心机构：** Unreasonable Labs
- **一句话本质：** 将“世界模型”思路引入材料与结构工程：学习可交互的材料环境，使工程师能在非线性、具记忆与惯性动力学条件下进行交互式探索与设计。
- **标签：** 世界模型, 物理建模, 材料设计, 交互式仿真, 非线性动力学, 工程应用

### 二、破局点 (The Gap)
- **已有共识/做法：** 世界模型在游戏与机器人环境中推动了交互式探索，但材料工程场景更复杂（历史依赖、非线性本构、多尺度结构）。
- **核心痛点：** 传统仿真成本高且难以交互式迭代；材料行为的复杂性使得可用的交互式“环境模型”稀缺。
- **本文切入点：** 提出可学习的交互式材料环境（LEIA），把复杂材料动力学压缩成可用的交互式预测/模拟接口。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 边界条件/加载历史 + 结构描述 -> 预测材料响应（形变、应力/状态演化等）。
- **关键模块 1：** **学习型环境建模**：显式处理非线性与历史依赖内部状态。
- **关键模块 2：** **惯性动力学建模**：在交互式预测中保留时间演化与动力学效应。
- **关键模块 3：** **多尺度/结构先验**：面向“architected materials”的层级结构建模。

### 四、核心认知与发现 (Key Insights)
- 把工程材料问题视为“可交互环境”，可复用机器人/游戏世界模型方法论，但必须处理更强物理约束与内部状态。
- 若能做到可交互与足够保真，将显著加速材料设计与参数探索。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 泛化受数据覆盖与材料类别限制；分布外载荷/结构可能迅速失真。
- 物理一致性与可解释性挑战大，若缺少约束可能产生不可用的工程预测。

**⚠️ 论证瑕疵：**
- 需要更充分对比：与高保真仿真在不同工况下的误差分布与失效边界。

**🚀 下一步高价值方向 (Next Steps)：**
- 引入物理约束（能量守恒、材料稳定性条件）或 PINN/结构化状态空间，提升可信度。
- 建立主动采样与不确定性驱动的数据收集，覆盖工程关键失效区域。


---

## Hybrid Neural World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.28317v1>
- **ID**: `2605.28317v1`
- **分类**: cs.LG, cs.AI, math.NA, physics.comp-ph
- **作者**: Pranav Lakshmanan, Paras Chopra
- **总结状态**: 已总结
- **标签**: 世界模型, 神经网络, 混合建模, 动力学, 结构化先验, 泛化
- **PDF**: [Hybrid Neural World Models.pdf](../pdfs/Hybrid Neural World Models.pdf)

### 摘要（自动抓取）

Neural surrogates promise large speedups over classical solvers for physical dynamics but fail silently at sharp dynamical events such as shocks, fronts, and contact. We present hybrid neural world models for physical dynamics: a recipe for training and deploying multi-horizon surrogates in physical state space, where a single network with continuous horizon conditioning is trained with direct supervision against textbook reference solvers to predict any future state at horizon T in one forward pass. Although no part of the training data, loss function, or architecture supervises discontinuity location, the trained surrogate encodes it implicitly, recoverable from its forward passes alone as a per-trajectory error map that concentrates on shocks, fronts, and contacts, and stays small elsewhere. The map is competitive with or better than standard label-free baselines including deep ensembles, learned error heads, gradient-magnitude indicators, and locally-adaptive conformal prediction, while using only a single trained network and requiring no calibration set or governing-equation knowledge. The recipe supports two operating points. Mode 1 runs the surrogate alone for maximum throughput, with same-hardware CPU speedups of 26x to 72x against textbook solvers on the PDE environments. Mode 2 uses the error map to gate a reference-solver fallback, deferring uncertain trajectories and roughly halving the surrogate's residual error at the default operating point. The recipe applies without modification across reaction-diffusion, compressible Euler, and rigid-body collision dynamics.

### 一、论文元数据
- **标题：** Hybrid Neural World Models
- **核心机构：** 未提取
- **一句话本质：** 将结构化/物理先验与神经网络学习融合，构建“混合式”世界模型，以在数据效率、可解释性与泛化之间取得更好平衡。
- **标签：** 世界模型, 神经网络, 混合建模, 动力学, 结构化先验, 泛化

### 二、破局点 (The Gap)
- **已有共识/做法：** 纯神经世界模型拟合强但可能不稳定；纯物理/结构模型稳但表达受限。
- **核心痛点：** 复杂环境下既要高表征能力又要稳定可泛化，单一路线很难两全。
- **本文切入点：** 采用 hybrid 设计：让结构模块负责可泛化部分，让神经模块补足残差/未建模因素。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 状态/观测 + 动作 -> 下一状态/观测预测（含不确定性）。
- **关键模块 1：** **结构化动力学/约束组件**：提供稳定性与可解释性。
- **关键模块 2：** **神经残差/表示学习组件**：拟合复杂非线性与高维观测。
- **关键模块 3：** **联合训练/推理**：在同一目标下训练两者，避免割裂。

### 四、核心认知与发现 (Key Insights)
- 世界模型落地常被稳定性与泛化瓶颈卡住，hybrid 化是更现实的工程路线。
- “先验 + 学习”的分工设计能显著提高数据效率并降低灾难性漂移风险。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 结构组件的选择决定上限；若先验错误会系统性限制模型。
- 模块耦合与训练稳定性更复杂，调参成本可能上升。

**⚠️ 论证瑕疵：**
- 需要更清楚展示：在不同数据规模/噪声水平下 hybrid 的优势边界与失败模式。

**🚀 下一步高价值方向 (Next Steps)：**
- 引入自动结构搜索/模块选择，让 hybrid 设计更自动化。
- 将不确定性建模与规划/控制闭环结合，形成安全可用的 model-based pipeline。


---

## Do LLMs Build World Models From Text? A Multilingual Diagnostic of Spatial Reasoning

- **arXiv**: <https://export.arxiv.org/abs/2605.28277v1>
- **ID**: `2605.28277v1`
- **分类**: cs.AI
- **作者**: Zhikai Pan, Chih-Ting Liao, Chunrui Liu, Xi Xiao, Yitong Qiao, Chunlei Meng, Zhangquan Chen, Xin Cao
- **总结状态**: 已总结
- **标签**: LLM, 世界模型, 空间推理, 多语言, 基准, 认知诊断
- **PDF**: [Do LLMs Build World Models From Text A Multilingual Diagnostic of Spatial Reasoning.pdf](../pdfs/Do LLMs Build World Models From Text A Multilingual Diagnostic of Spatial Reasoning.pdf)

### 摘要（自动抓取）

Whether large language models (LLMs) construct internal spatial world models from pure-text descriptions remains contested, and whether such capabilities transfer across languages has not been systematically studied. We introduce MentalMap, a multilingual diagnostic benchmark with a six-level capability hierarchy (L0-L5) spanning atomic spatial facts to generative world-graph construction, together with four diagnostic axes probing frame of reference, reading-direction bias, reasoning-effort allocation, and hallucination. MentalMap is built from 100 ProcTHOR household scenes, covers eight typologically diverse languages plus a structured-text control, and contains 39 task families across 1,950 evaluation cells. Evaluating thirteen LLMs across scales and model families, we identify a universal L3 reasoning cliff: no model retains even half of its L0 performance on viewpoint reasoning once baseline atomic accuracy exceeds 40%. The cliff persists across languages, scales, and prompting strategies, while structured-output failures and reasoning patterns vary substantially across models. Human evaluation under the identical pure-text protocol reproduces the same failure pattern, suggesting that the bottleneck arises from text-only working memory constraints rather than being specific to current LLM architectures. Our findings reframe pure-text spatial reasoning as a multi-axis world-modeling problem and motivate multimodal and scratchpad-augmented reasoning as future directions.

### 一、论文元数据
- **标题：** Do LLMs Build World Models From Text? A Multilingual Diagnostic of Spatial Reasoning
- **核心机构：** Zhejiang University; Fudan University; Tsinghua University
- **一句话本质：** 构建多语言空间推理诊断基准 MentalMap，发现 LLM 在从文本构建/维护空间世界模型时存在稳定的能力断崖（尤其在视角推理层级）。
- **标签：** LLM, 世界模型, 空间推理, 多语言, 基准, 认知诊断

### 二、破局点 (The Gap)
- **已有共识/做法：** 讨论 LLM 是否能从文本构建空间世界模型，但缺少系统、多语言、分层诊断。
- **核心痛点：** 仅看总体准确率无法定位瓶颈；语言差异、输出格式失败与幻觉使比较更难。
- **本文切入点：** 以六级能力层级(L0-L5)+多诊断轴构建 MentalMap，跨 8 种语言与多模型系统评测。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 纯文本场景描述/查询 -> 模型输出空间判断/构图 -> 分层指标与诊断轴分析。
- **关键模块 1：** **ProcTHOR 场景生成**：基于 100 个家庭场景构建任务族与评测单元。
- **关键模块 2：** **能力层级与诊断轴**：从原子事实到世界图构建，评估参考系、阅读方向偏置、推理分配、幻觉等。
- **关键模块 3：** **人类对照实验**：同协议下复现实验断崖，指向工作记忆限制而非特定架构。

### 四、核心认知与发现 (Key Insights)
- 出现跨语言、跨规模稳定的 L3 断崖：视角/关系推理远难于原子事实。
- 纯文本空间推理的瓶颈更像“多轴世界建模问题”，而非单一 QA 能力。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 诊断基准仍是合成场景与任务设定；对真实复杂文本/多轮对话的外推需谨慎。
- 结论可能受提示词、输出格式约束影响，需要更细的鲁棒性分析。

**⚠️ 论证瑕疵：**
- 需要更强因果证据来区分“工作记忆”与“表征缺失/训练数据不足”的贡献比例。

**🚀 下一步高价值方向 (Next Steps)：**
- 引入多模态或显式草稿/外部记忆（scratchpad, map memory）来缓解空间维护负担。
- 将诊断任务转为可训练信号，推动模型学习可组合的空间操作原语。


---

## Proprio: Latent Self-Scoring and Inference-Time Refinement for Physically Plausible Video Generation

- **arXiv**: <https://export.arxiv.org/abs/2605.28230v1>
- **ID**: `2605.28230v1`
- **分类**: cs.CV
- **作者**: Mariam Hassan, Kaouther Messaoud, Wuyang Li, Alexandre Alahi
- **总结状态**: 已总结
- **标签**: 视频生成, 物理一致性, 自评分, 推理时优化, 潜变量, 世界模型
- **PDF**: [Proprio Latent Self-Scoring and Inference-Time Refinement for Physically Plausible Video Generation.pdf](../pdfs/Proprio Latent Self-Scoring and Inference-Time Refinement for Physically Plausible Video Generation.pdf)

### 摘要（自动抓取）

Modern video generative models produce visually impressive results, yet frequently violate basic physical principles. We propose Proprio, a training-free framework that enables a frozen video generator to assess and improve the physical plausibility of its own outputs. Inspired by proprioception, the biological sense of one's own movement, Proprio treats the model's flow residual under controlled latent perturbations as a self-scoring signal. Samples that are better explained by the generator's learned dynamics induce smaller and more stable residuals. We aggregate this signal across timesteps and perturbations, focus it on motion-relevant regions with a dynamic spatiotemporal mask, and use it for best-of-N search, gradient-based self-refinement, or both. Across text-to-video and image-to-video benchmarks, Proprio consistently improves physical plausibility, outperforming VLM-based scoring, and external world-model baselines in several settings. With TurboWan2.2, Proprio improves Physics-IQ from 32.2 to 37.5 (+16.5%) and VideoPhy2-hard physical commonsense from 45.6 to 55.0 (+20.6%). Human evaluation further shows that raters prefer Proprio-selected or refined videos for physical plausibility in roughly two-thirds of comparisons. These results suggest that frozen video generators contain actionable internal signals for evaluating and improving the physical plausibility of their own outputs.

### 一、论文元数据
- **标题：** Proprio: Latent Self-Scoring and Inference-Time Refinement for Physically Plausible Video Generation
- **核心机构：** Lausanne (Swiss Federal Institute
- **一句话本质：** 让视频生成模型在潜空间对生成结果做自评分，并在推理时用自评分信号进行 refinement，提高生成视频的物理合理性与一致性。
- **标签：** 视频生成, 物理一致性, 自评分, 推理时优化, 潜变量, 世界模型

### 二、破局点 (The Gap)
- **已有共识/做法：** 大型视频生成模型能产出高质量画面，但物理不一致（穿模、动量错误、接触不合理）常见。
- **核心痛点：** 训练阶段缺少可微的物理一致性监督；推理时采样噪声会放大不合理轨迹。
- **本文切入点：** 在潜变量层面学习“自评分器”，并在推理阶段用评分信号迭代修正采样/生成。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 条件输入 -> 生成潜变量/视频 -> 自评分 -> 推理时 refinement -> 更物理可信的视频。
- **关键模块 1：** **Latent self-scoring**：在 latent 上评估物理可行性/一致性，提供可用信号。
- **关键模块 2：** **Inference-time refinement**：在不重新训练主模型的情况下，通过迭代修正提升结果。
- **关键模块 3：** **面向物理可信的指标**：用可量化指标展示在物理合理性方面的提升。

### 四、核心认知与发现 (Key Insights)
- 推理时优化是提升物理一致性的有效杠杆，尤其当训练监督不足时。
- 将“评估器/判别器”内化为自评分模块，能减少对外部规则的依赖。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 推理时 refinement 增加计算成本；在长视频/高分辨率下代价显著。
- 自评分器可能学到数据偏差而非真实物理规律，需校准与失效检测。

**⚠️ 论证瑕疵：**
- 需要更多跨域验证（不同场景/物体/动力学）以确认泛化，而非只在特定数据集有效。

**🚀 下一步高价值方向 (Next Steps)：**
- 将评分信号与显式物理约束（接触、可达、动力学）结合，形成更可解释的 refinement。
- 用分层 refinement（粗到细）降低推理成本，适配机器人闭环需要的低延迟。


---

## Chreode: A Cell World Model for One-Step Temporal Dynamics and Perturbation Prediction

- **arXiv**: <https://export.arxiv.org/abs/2605.28111v1>
- **ID**: `2605.28111v1`
- **分类**: cs.LG
- **作者**: Mufan Qiu, Genhui Zheng, Yinuo Xu, Ruichen Zhang, Ying Ding, Qi Long, Tianlong Chen
- **总结状态**: 已总结
- **标签**: 细胞世界模型, 单步预测, 干预预测, 生物动力学, 表征学习, 反事实
- **PDF**: [Chreode A Cell World Model for One-Step Temporal Dynamics and Perturbation Prediction.pdf](../pdfs/Chreode A Cell World Model for One-Step Temporal Dynamics and Perturbation Prediction.pdf)

### 摘要（自动抓取）

Predicting how a cell will change its transcriptional state under a developmental signal or a genetic perturbation is the computational core of in-silico biology and the AI Virtual Cell program. Existing approaches either fit static control-to-treated maps that discard time, or solve multi-step ODE / Schrödinger-bridge problems on each dataset independently. We introduce Chreode, a one-step cell world model that predicts action-conditioned cell-state transitions through a structured residual transition operator. It shifts distributional evolution from inference time to training time, enabling single-pass generation while preserving a Waddington-inspired decomposition into downhill landscape flow, rotational in-tangent dynamics, and stochastic spread. The model is pretrained with a shared scVI encoder and a DiT-based dynamics backbone on a 2.4M-cell mouse embryonic atlas spanning 7 datasets. As a fine-tuning initialization, Chreode improves per-target Sinkhorn distance on Weinreb hematopoiesis and Veres islet differentiation over matched scratch models, PI-SDE, and PRESCIENT. As a transferable gene-state embedding for GEARS, the pretrained dynamics representation reduces shared-vocabulary DE20 mean squared error on Norman Perturb-seq from 0.2121 to 0.1858, a 12.4% relative improvement, without changing the GEARS training procedure. We interpret this transfer to perturbation prediction as evidence that pretrained developmental-trajectory dynamics encode differentiation primitives transferable to CRISPR-induced state shifts, since both involve cell-state transitions in a shared latent geometry. The pretrained backbone additionally produces zero-shot clonal fate scores on Weinreb that are competitive with strong dynamic-OT baselines.

### 一、论文元数据
- **标题：** Chreode: A Cell World Model for One-Step Temporal Dynamics and Perturbation Prediction
- **核心机构：** University of North Carolina; The University; University of
- **一句话本质：** 在细胞系统中学习可预测时间演化与扰动响应的“世界模型”，支持单步动力学预测与对干预的反事实推断。
- **标签：** 细胞世界模型, 单步预测, 干预预测, 生物动力学, 表征学习, 反事实

### 二、破局点 (The Gap)
- **已有共识/做法：** 单细胞/组学数据可用于表征学习，但将其用于可操作的动力学预测与扰动推断仍困难。
- **核心痛点：** 时间序列稀疏、噪声大，且干预数据昂贵，导致模型难以学到可靠的动力学与因果效应。
- **本文切入点：** 构建面向细胞动力学的世界模型框架，兼顾时间演化与扰动（perturbation）预测。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 当前细胞状态表征 + 扰动条件 -> 下一时刻状态/表征预测。
- **关键模块 1：** **状态表征学习**：将高维细胞状态压缩为可预测的潜表示。
- **关键模块 2：** **单步动力学建模**：以一步预测为基础积累长期演化能力（可与 rollout 结合）。
- **关键模块 3：** **扰动条件化预测**：在同一模型内学习对干预条件的响应。

### 四、核心认知与发现 (Key Insights)
- 将细胞系统视为可交互的动态环境，有助于把“预测/控制/干预”纳入统一建模框架。
- 单步动力学 + 扰动预测可以作为药物筛选/机制探索的基础组件。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 预测可信度依赖数据密度与干预覆盖；对未见干预/细胞类型的外推风险高。
- 生物系统的可观测性限制可能导致多解与不可辨识问题。

**⚠️ 论证瑕疵：**
- 需要严格的不确定性与因果检验，避免把相关性当因果效应。

**🚀 下一步高价值方向 (Next Steps)：**
- 结合因果结构假设或实验设计（active learning）提高干预预测的可靠性。
- 将世界模型与控制/规划结合，用于建议最有信息量的干预实验。


---

## Turning Video Models into Generalist Robot Policies

- **arXiv**: <https://export.arxiv.org/abs/2605.27817v1>
- **ID**: `2605.27817v1`
- **分类**: cs.RO, cs.AI, cs.CV, cs.LG
- **作者**: Sizhe Lester Li, Evan Kim, Xingjian Bai, Tong Zhao, Tao Pang, Max Simchowitz, Vincent Sitzmann
- **总结状态**: 已总结
- **标签**: 视频世界模型, 机器人策略, 逆动力学, 零样本, 跨形态, VERA
- **PDF**: [Turning Video Models into Generalist Robot Policies.pdf](../pdfs/Turning Video Models into Generalist Robot Policies.pdf)

### 摘要（自动抓取）

Video generative models have emerged as a promising robotics backbone, capable of generating videos that depict the completion of complex tasks across embodiments and environments. Recent work proposes robot foundation models that jointly predict future observations and actions by finetuning video models with action-labeled data. In this paper, we test the limits of an alternative approach: leave the video planner as-is while training an embodiment-specific inverse dynamics model (IDM). This decoupling offers several natural benefits: the video planner remains embodiment-agnostic, different video models can be interchanged easily without re-training the IDM, and the IDM can be independently trained with readily available self-play data. We present a closed-loop, video-to-action policy that combines an action-free video world model with a carefully-designed IDM based on the robot embodiment Jacobian. We demonstrate that our IDM design is both data-efficient and scalable to high-dimensional action spaces. Our policy, which we coin the Video-to-Embodied Robot Action Model (VERA), achieves strong performance across simulated and real-world benchmarks, including zero-shot Panda arm manipulation and 16-DoF Allegro-hand dexterous cube re-orientation. The same video planner can be used across multiple embodiments by pairing it with different embodiment-specific IDMs. Our results show that decoupled video planning plus faithful video-to-action translation is a viable alternative route towards zero-shot, cross-embodiment, and generalizable robot control. More results are available on our project website: https://vera.csail.mit.edu.

### 一、论文元数据
- **标题：** Turning Video Models into Generalist Robot Policies
- **核心机构：** 未提取
- **一句话本质：** 不再把视频模型微调成“同时预测视频+动作”，而是保持动作无关的视频规划器不变，仅训练具身相关的逆动力学模型，把视频计划翻译成机器人动作（VERA）。
- **标签：** 视频世界模型, 机器人策略, 逆动力学, 零样本, 跨形态, VERA

### 二、破局点 (The Gap)
- **已有共识/做法：** 近期机器人基础模型常用 action-conditioned 视频生成并配动作数据微调。
- **核心痛点：** 动作标注数据贵且限制跨形态；把视频模型与动作头强耦合会降低可替换性与可扩展性。
- **本文切入点：** “解耦”：视频规划器保持 embodiment-agnostic；只训练 embodiment-specific IDM，甚至可用自博弈数据训练。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 视频世界模型生成的未来视频/计划 -> 逆动力学模型输出动作序列。
- **关键模块 1：** **Action-free video world model**：作为闭环规划器生成完成任务的视频 rollout。
- **关键模块 2：** **Jacobian-based IDM 设计**：利用具身 Jacobian 结构把视频变化映射到高维动作，提升数据效率与可扩展性。
- **关键模块 3：** **VERA 闭环策略**：视频规划 + IDM 翻译，支持零样本与跨形态复用（不同机器人配不同 IDM）。

### 四、核心认知与发现 (Key Insights)
- 解耦带来三点系统收益：视频模型可替换、跨形态复用更自然、IDM 可独立扩展到高维动作空间。
- “视频计划→动作翻译”是让通用视频模型落地到机器人控制的可行路线，而非唯一依赖动作条件化微调。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- IDM 需要可靠的几何/状态对应；当视频预测出现漂移或遮挡严重时，翻译误差会被放大。
- 视频模型生成的 rollout 是否满足物理与接触一致性，仍是系统瓶颈。

**⚠️ 论证瑕疵：**
- 需要更系统比较：同等数据/算力下，解耦路线与 action-conditioned 微调路线的优势边界在哪里。

**🚀 下一步高价值方向 (Next Steps)：**
- 引入不确定性与约束（可达性/接触/安全）来筛选或修正视频 rollout。
- 研究跨传感/跨视角的视频表征，使 IDM 翻译对视角变化更鲁棒。


---

## What-If World: A Causal Benchmark for General World Models in Embodied Scenarios

- **arXiv**: <https://export.arxiv.org/abs/2605.27589v1>
- **ID**: `2605.27589v1`
- **分类**: cs.CV
- **作者**: Kunlin Cai, Rui Song, Jinghuai Zhang, Kaiyuan Zhang, Pranav Bodapati, Alicia Yu, Fnu Suya, Mohammad Rostami, Jiaqi Ma, Yuan Tian
- **总结状态**: 已总结
- **标签**: 世界模型基准, 因果推理, 具身评测, 反事实, 任务生成, 可解释
- **PDF**: [What-If World A Causal Benchmark for General World Models in Embodied Scenarios.pdf](../pdfs/What-If World A Causal Benchmark for General World Models in Embodied Scenarios.pdf)

### 摘要（自动抓取）

Video generation models are increasingly used as world simulators for tasks like driving and robotic manipulation. What matters in these settings is not whether a single video looks right, but whether the model's output changes when its input changes. We test this by giving a model two prompts describing the same scene with one physical detail varied, and checking whether the two videos diverge the way physics predicts. The wording difference between the prompts is small by design, since only one variable is changed, but the correct physical difference is not. A model that misses this can still produce two videos that each look plausible individually, and existing benchmarks score videos one at a time and cannot detect this failure. We introduce What-If World, 319 such prompt pairs built on real frames from nuScenes and DROID, organized by a taxonomy of six physical variables shared across driving and manipulation. Each pair is scored with APEO, a four-part rubric checking whether each video follows its prompt (Adherence), is physically consistent (Physics), preserves the shared scene (Environment), and ends in the correct difference (Outcome). Across nine state-of-the-art models, no system exceeds 52% on the paired score, and open-source models cluster near 28%. Every model tested fails on a large fraction of causal interventions, indicating substantial room before these models can reliably support action-conditioned simulation or model-based planning. Where models do score well, performance appears to track the visual prominence of the intervention rather than the tractability of its underlying physics. Some visually subtle interventions score as low as 14.2%, while visually pronounced ones reach 40.4%.

### 一、论文元数据
- **标题：** What-If World: A Causal Benchmark for General World Models in Embodied Scenarios
- **核心机构：** 未提取
- **一句话本质：** 面向具身场景提出因果导向的世界模型基准，用“what-if/反事实”查询检验模型是否真正掌握可干预的环境因果结构，而不只是拟合相关性。
- **标签：** 世界模型基准, 因果推理, 具身评测, 反事实, 任务生成, 可解释

### 二、破局点 (The Gap)
- **已有共识/做法：** 世界模型通常以预测误差或视觉质量评估，容易被相关性拟合“骗过”。
- **核心痛点：** 具身决策需要可干预的因果理解（动作如何改变世界），但缺少专门评测工具。
- **本文切入点：** 用因果 benchmark 将评测从“预测像不像”提升到“反事实回答是否一致”。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 场景/轨迹 + 干预设定 -> 模型回答反事实结果/世界变化 -> 因果一致性指标。
- **关键模块 1：** **具身反事实任务设计**：构造可操作的 what-if 查询与可验证答案。
- **关键模块 2：** **因果一致性评测**：衡量模型对干预的响应是否符合环境机制。
- **关键模块 3：** **通用性定位**：强调“general world models”而非特定任务过拟合。

### 四、核心认知与发现 (Key Insights)
- 真正能用于规划与控制的世界模型，应在反事实/干预问题上表现稳定。
- 因果评测能更早暴露世界模型在分布偏移与组合泛化上的脆弱点。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 基准的干预空间与场景复杂度决定上限；过简可能低估难度，过难又不易诊断。
- 需要警惕模型在基准上学习“答题策略”而非真正因果理解。

**⚠️ 论证瑕疵：**
- 需要报告更多与下游控制收益的相关性，证明因果得分确实预测可用性。

**🚀 下一步高价值方向 (Next Steps)：**
- 扩展到接触丰富、部分可观测与多智能体场景的因果评测。
- 将因果约束引入训练目标，推动世界模型学习可干预机制而非纯相关。


---

## Riding the Shifting Potential: When Reactive Control Suffices for Multi-Goal Behavior

- **arXiv**: <https://export.arxiv.org/abs/2605.27314v1>
- **ID**: `2605.27314v1`
- **分类**: cs.RO, eess.SY
- **作者**: Vito Mengers, Oliver Brock
- **总结状态**: 已总结
- **标签**: 多目标控制, 空间世界模型, 零空间投影, 反应式控制, 推送操控, 无示教
- **PDF**: [Riding the Shifting Potential When Reactive Control Suffices for Multi-Goal Behavior.pdf](../pdfs/Riding the Shifting Potential When Reactive Control Suffices for Multi-Goal Behavior.pdf)

### 摘要（自动抓取）

Reactive control is often considered insufficient for multi-objective tasks because conflicting objectives give rise to local minima. We argue this limitation is not inherent but arises from static encodings that fail to reflect how objectives currently interact. We exploit the interaction structure encoded in a graph-based world model by extending it with nullspace projections: conflicts are resolved where they arise by projecting lower-priority gradients into the nullspace of higher-priority ones, with priorities determined continuously from the current state. We demonstrate this in two domains where conflicts between objectives are central: navigation around non-convex obstacles, where static potential fields fundamentally fail, and planar pushing of non-convex objects, where our method achieves $100\%$ success across one-hundred configurations versus $0\%$ for the steepest-descent baseline and ${\sim}55\%$ for diffusion policy, without demonstrations or retraining. The same formulation transfers directly to a real robot with additional perceptual and kinematic constraints, accommodating them through the same mechanism.

### 一、论文元数据
- **标题：** Riding the Shifting Potential: When Reactive Control Suffices for Multi-Goal Behavior
- **核心机构：** Robotics and Biology Laboratory; Robotics Institute; Institute Germany (RIG).
- **一句话本质：** 通过在图结构世界模型上做连续优先级的零空间投影，把多目标梯度冲突在“发生处”解除，使反应式控制在非凸障碍与推送任务中也能稳定成功。
- **标签：** 多目标控制, 空间世界模型, 零空间投影, 反应式控制, 推送操控, 无示教

### 二、破局点 (The Gap)
- **已有共识/做法：** 多目标任务常认为需要规划或学习策略；纯反应式势场在冲突目标下易陷局部最小。
- **核心痛点：** 冲突来自“静态编码”无法反映目标交互随状态变化的结构。
- **本文切入点：** 利用图世界模型的交互结构，并引入零空间投影，把低优先级梯度投到高优先级梯度的零空间中，动态消解冲突。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 当前状态 -> 多目标梯度场 -> 连续优先级排序 -> 投影合成控制指令。
- **关键模块 1：** **Graph-based world model**：显式编码目标/约束之间的交互结构。
- **关键模块 2：** **Nullspace projection**：在冲突点将低优先级梯度投影到高优先级零空间，避免相互抵消或陷阱。
- **关键模块 3：** **连续优先级**：优先级由状态决定，随任务阶段变化而平滑切换。

### 四、核心认知与发现 (Key Insights)
- 反应式控制的失败并非必然；关键在于是否显式处理目标冲突与优先级。
- 在不需要示教与再训练的情况下也能在非凸场景实现高成功率，显示了结构化控制的价值。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 需要可微的目标与梯度构造；当感知噪声大或目标不易表述为势函数时会受限。
- 优先级设计与图结构建模可能仍含人工先验，通用性边界需验证。

**⚠️ 论证瑕疵：**
- 与学习型策略（扩散策略等）的对比需在更多设置下公平控制感知与输入信息量。

**🚀 下一步高价值方向 (Next Steps)：**
- 将该投影机制与学习到的世界模型/目标函数结合，实现端到端学习优先级与势场。
- 扩展到更高维与接触丰富操控，检验在真实机器人时延与不确定性下的鲁棒性。


---

## GE-Sim 2.0: A Roadmap Towards Comprehensive Closed-loop Video World Simulators for Robotic Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2605.27491v1>
- **ID**: `2605.27491v1`
- **分类**: cs.RO
- **作者**: Boxiang Qiu, Liliang Chen, Yue Liao, Nan Wang, Lintao Wang, Jiayi Luo, Wenzhi Zhao, Shengcong Chen, Di Chen, Ye Li, Chen Gao, Shuicheng Yan, Si Liu, Maoqing Yao, Guanghui Ren
- **总结状态**: 已总结
- **标签**: 视频世界模拟器, 机器人操控, 闭环评测, 奖励建模, WorldArena, 加速推理
- **PDF**: [GE-Sim 2.0 A Roadmap Towards Comprehensive Closed-loop Video World Simulators for Robotic Manipulation.pdf](../pdfs/GE-Sim 2.0 A Roadmap Towards Comprehensive Closed-loop Video World Simulators for Robotic Manipulation.pdf)

### 摘要（自动抓取）

We introduce GE-Sim 2.0 (Genie Envisioner World Simulator 2.0), a closed-loop video world simulator for robotic manipulation. Building on the action-conditioned video generation framework of Genie Envisioner, GE-Sim 2.0 is re-trained on thousands of hours of real-world robot data spanning teleoperation, contact-rich interaction, and on-robot policy deployment, substantially improving action-following fidelity and trajectory coverage. On top of this foundation, three new modules close the loop from video simulation to policy learning: a state expert that decodes proprioceptive state from video latents to support next-chunk prediction by downstream VLA policies; a world judge that scores generated rollouts against task instructions, yielding machine-verifiable success signals and rewards in place of manual inspection; and an acceleration framework that delivers a 25-frame rollout in 2.3 seconds on a single H100, with up to 4* frame skipping at inference for long-horizon evaluation. GE-Sim 2.0 tops the public WorldArena leaderboard at only 2B parameters, outperforming both dedicated robotic world models and closed-source general video generators, and policies trained against its rollouts and rewards translate into measurable real-world gains, establishing GE-Sim 2.0 as a practical platform for scalable evaluation and closed-loop learning of manipulation policies.

### 一、论文元数据
- **标题：** GE-Sim 2.0: A Roadmap Towards Comprehensive Closed-loop Video World Simulators for Robotic Manipulation
- **核心机构：** LV-National University; Singapore Lab
- **一句话本质：** 在大规模真实机器人数据上重训动作条件视频生成器，并补齐“从视频 rollout 到可用奖励/状态”的闭环模块，使其成为可用于评测与学习的闭环视频世界模拟器。
- **标签：** 视频世界模拟器, 机器人操控, 闭环评测, 奖励建模, WorldArena, 加速推理

### 二、破局点 (The Gap)
- **已有共识/做法：** 视频生成模型能生成看似合理的操控视频，但难以形成可用于策略学习的闭环信号（状态、奖励、成功判定）。
- **核心痛点：** action-following fidelity 与轨迹覆盖不足；缺少可验证的成功信号导致“看视频打分”不可扩展。
- **本文切入点：** 重训视频世界模型提升动作跟随与覆盖，并加入 state expert、world judge 与推理加速，形成闭环评测与训练平台。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 指令 + 动作条件 -> 生成视频 rollout -> 解码状态/打分成功 -> 产出奖励与训练信号。
- **关键模块 1：** **大规模真实机器人数据重训**：覆盖遥操作、接触丰富交互、在机部署数据，提高动作跟随。
- **关键模块 2：** **State expert**：从视频 latent 解码本体状态/下一段预测所需状态，服务下游 VLA/策略训练。
- **关键模块 3：** **World judge**：对生成 rollout 与指令的一致性打分，提供可验证成功信号/奖励。
- **关键模块 4：** **推理加速**：单卡 H100 上快速 rollout，并支持 frame skipping 以评测长时序。

### 四、核心认知与发现 (Key Insights)
- “闭环可用性”不只是视频质量：需要状态解码、成功判定与吞吐量三件套。
- 用世界模拟器产生的 rollout/reward 训练的策略能带来可测的真实提升，说明该闭环信号有一定可迁移价值。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- world judge 的评分可能引入偏置与奖励黑客；生成视频的物理一致性仍是上限。
- 高吞吐依赖昂贵硬件；不同硬件/场景下的可复现性与成本需要评估。

**⚠️ 论证瑕疵：**
- 需要更强的失败模式分析：哪些任务/接触条件下 rollout 仍不可信，策略收益来自哪些信号。

**🚀 下一步高价值方向 (Next Steps)：**
- 引入不确定性估计与安全过滤，避免策略在低可信 rollout 上学习。
- 将模拟器与真实交互做主动闭环（数据收集→再训→评测），形成持续改进管线。


---

