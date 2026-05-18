---
date: 2026-05-13
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-13（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605121600 TO 202605131559] OR lastUpdatedDate:[202605121600 TO 202605131559]))
```

## JEDI: Joint Embedding Diffusion World Model for Online Model-Based Reinforcement Learning

- **arXiv**: <https://export.arxiv.org/abs/2605.13013v1>
- **ID**: `2605.13013v1`
- **分类**: cs.LG
- **作者**: Jing Yu Lim, Rushi Shah, Zarif Ikram, Samson Yu, Haozhe Ma, Tze-Yun Leong, Dianbo Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [JEDI Joint Embedding Diffusion World Model for Online Model-Based Reinforcement Learning.pdf](../pdfs/JEDI Joint Embedding Diffusion World Model for Online Model-Based Reinforcement Learning.pdf)

### 摘要（自动抓取）

Diffusion world models have recently become competitive for online model-based reinforcement learning, but current approaches expose a tension: pixel diffusion is effective but computationally expensive while the latest latent diffusion approach improves efficiency yet performs subpar. The latter also relies on separately trained latents rather than the end-to-end world-model objectives that have driven much of modern MBRL progress. In particular, JEPA-style predictive representation learning has emerged as an especially promising direction for world modeling and MBRL. Concurrently, diffusion-style objectives have gained traction across multiple domains, with iterative refinement as a promising approach for multimodal and stochastic targets. Taken together, these trends motivate Joint Embedding DIffusion (JEDI), the first online end-to-end latent diffusion world model. JEDI learns its latent space directly from the diffusion denoising loss with a JEPA framework, using denoising to learn and predict future latents rather than relying on reconstruction and pretrained models. We provide a theoretical motivation showing that conventional JEPA objectives induce a predictive information bottleneck, and that conditional diffusion denoising admits a closely related predictive-compression decomposition. Empirically, JEDI is competitive on Atari100k and outperforms the baseline with seperately trained latents where directly comparable. Relative to the pixel diffusion baseline, JEDI uses 43% less VRAM, over 3$\times$ faster world-model sampling, and 2.5$\times$ faster training. JEDI also exhibits a markedly different task-level performance profile from the pixel baseline, suggesting that end-to-end predictive latents change more than compute alone.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Embodied Multi-Agent Coordination by Aligning World Models Through Dialogue

- **arXiv**: <https://export.arxiv.org/abs/2605.12920v1>
- **ID**: `2605.12920v1`
- **分类**: cs.MA, cs.AI, cs.CL
- **作者**: Vardhan Dongre, Dilek Hakkani-Tür
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Embodied Multi-Agent Coordination by Aligning World Models Through Dialogue.pdf](../pdfs/Embodied Multi-Agent Coordination by Aligning World Models Through Dialogue.pdf)

### 摘要（自动抓取）

Effective collaboration between embodied agents requires more than acting in a shared environment; it demands communication grounded in each agent's evolving understanding of the world. When agents can only partially observe their surroundings, coordination without communication is provably hard, but communication can, in principle, bridge this gap by allowing agents to share observations and align their world models. In this work, we examine whether LLM-based embodied agents actually realize the ability to communicate. We extend PARTNR, a benchmark for collaborative household robotics, with a natural-language dialogue channel that enables two agents with partial observability to communicate during task execution. To evaluate whether dialogue leads to genuine world-model alignment rather than superficial coordination, we propose a framework for measuring world-model alignment defined over per-agent world graphs: observation convergence (do private world models align over time?), information novelty (do messages convey what the partner lacks?), and belief-sensitive messaging (do agents model what their partner knows?). Our experiments across three LLMs reveal that dialogue reduces action conflicts 40 to 83 percentage points but degrades task success relative to silent coordination. Using our metrics, we characterize the gap between superficial coordination and genuine world-model alignment, and identify where current models fall on this spectrum.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## PROMETHEUS: Automating Deep Causal Research Integrating Text, Data and Models

- **arXiv**: <https://export.arxiv.org/abs/2605.12835v1>
- **ID**: `2605.12835v1`
- **分类**: cs.AI
- **作者**: Sridhar Mahadevan
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [PROMETHEUS Automating Deep Causal Research Integrating Text, Data and Models.pdf](../pdfs/PROMETHEUS Automating Deep Causal Research Integrating Text, Data and Models.pdf)

### 摘要（自动抓取）

Large language models can extract local causal claims from text, but those claims become more useful when organized as persistent, navigable world models rather than as flat summaries. We introduce PROMETHEUS, a framework that turns retrieved literature, filings, reviews, reports, agent traces, source data, code, simulations, and scientific models into causal atlases: sheaf-like families of local causal predictive-state models over an explicit cover of a research substrate. Each local region contains causal episodes, structured claim tables, predictive tests, support statistics, and provenance; restriction maps compare overlapping regions; gluing diagnostics expose agreement, drift, contradiction, and underdetermination. The resulting Topos World Model is not a single universal graph. It is a research instrument for navigating what a corpus says, where it says it, how strongly it is supported, and where local claims fail to assemble into a coherent global view. Three literature-atlas case studies -- ocean-temperature impacts on marine populations, GLP-1 weight-loss evidence, and resveratrol/red-wine health-benefit claims -- illustrate deep causal research from text with explicit locality, evidence, persistent state, and gluing tension. Four grounded-counterfactual case studies -- a Nature Climate Change microplastics forcing paper, an Indus Valley hydrology paper with VIC-derived figure data and model code, the canonical Sachs protein-signaling study with single-cell perturbation data, and a Nature singing-mouse study with MAPseq projection matrices -- show a stronger mode: when a paper ships source data, simulation outputs, or code, PROMETHEUS can evaluate a counterfactual against that scientific substrate and then rebuild the sheaf world model around the

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Yield Curves Dynamics Using Variational Autoencoders Under No-arbitrage

- **arXiv**: <https://export.arxiv.org/abs/2605.12764v1>
- **ID**: `2605.12764v1`
- **分类**: q-fin.MF, cs.LG, stat.ML
- **作者**: Fusheng Luo, H'elyette Geman
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Yield Curves Dynamics Using Variational Autoencoders Under No-arbitrage.pdf](../pdfs/Yield Curves Dynamics Using Variational Autoencoders Under No-arbitrage.pdf)

### 摘要（自动抓取）

This paper introduces a physics-informed generative framework that resolves the fundamental conflict between the statistical flexibility of deep learning and the rigorous theoretical constraints of fixed-income modeling. We demonstrate that standard generative models and unconstrained statistical extrapolations suffer from "manifold collapse" and severe arbitrage violations when forecasting term structures across diverse macroeconomic regimes. To overcome this, we propose a two-stage architecture. First, a Student-t Conditional Variational Autoencoder with Dynamic Level Injection (CVAEsT+LS) extracts a robust, heavy-tailed term structure manifold, effectively decoupling macroeconomic shape dynamics from absolute base rates. Second, the latent dynamic evolution is governed by a continuous-time Neural Stochastic Differential Equation (SDE) strictly penalized by a No-Arbitrage Partial Differential Equation (PDE). Empirical results across multiple sovereign currencies (USD, GBP, JPY) confirm that our synergistic approach drastically reduces out-of-sample forecasting errors -- achieving an exceptional 6.58 bps Mean Tenor RMSE -- and successfully overcomes the massive parallel drift and zero-lower-bound violations exhibited by the classical HJM model in extreme environments. Furthermore, through phase space vector field analysis, we demonstrate the model's superior capability in unsupervised macroeconomic regime detection and high-quality continuous-time scenario generation. Ultimately, this research provides a highly scalable, mathematically sound evolutionary engine for term structure modeling.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## SenseNova-U1: Unifying Multimodal Understanding and Generation with NEO-unify Architecture

- **arXiv**: <https://export.arxiv.org/abs/2605.12500v1>
- **ID**: `2605.12500v1`
- **分类**: cs.CV
- **作者**: Haiwen Diao, Penghao Wu, Hanming Deng, Jiahao Wang, Shihao Bai, Silei Wu, Weichen Fan, Wenjie Ye, Wenwen Tong, Xiangyu Fan, Yan Li, Yubo Wang, Zhijie Cao, Zhiqian Lin, Zhitao Yang, Zhongang Cai, Yuwei Niu, Yue Zhu, Bo Liu, Chengguang Lv, Haojia Yu, Haozhe Xie, Hongli Wang, Jianan Fan, Jiaqi Li, Jiefan Lu, Jingcheng Ni, Junxiang Xu, Kaihuan Liang, Lianqiang Shi, Linjun Dai, Linyan Wang, Oscar Qian, Peng Gao, Pengfei Liu, Qingping Sun, Rui Shen, Ruisi Wang, Shengnan Ma, Shuang Yang, Siyi Xie, Siying Li, Tianbo Zhong, Xiangli Kong, Xuanke Shi, Yang Gao, Yongqiang Yao, Yves Wang, Zhengqi Bai, Zhengyu Lin, Zixin Yin, Wenxiu Sun, Ruihao Gong, Quan Wang, Lewei Lu, Lei Yang, Ziwei Liu, Dahua Lin
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Recent large vision-language models (VLMs) remain fundamentally constrained by a persistent dichotomy: understanding and generation are treated as distinct problems, leading to fragmented architectures, cascaded pipelines, and misaligned representation spaces. We argue that this divide is not merely an engineering artifact, but a structural limitation that hinders the emergence of native multimodal intelligence. Hence, we introduce SenseNova-U1, a native unified multimodal paradigm built upon NEO-unify, in which understanding and generation evolve as synergistic views of a single underlying process. We launch two native unified variants, SenseNova-U1-8B-MoT and SenseNova-U1-A3B-MoT, built on dense (8B) and mixture-of-experts (30B-A3B) understanding baselines, respectively. Designed from first principles, they rival top-tier understanding-only VLMs across text understanding, vision-language perception, knowledge reasoning, agentic decision-making, and spatial intelligence. Meanwhile, they deliver strong semantic consistency and visual fidelity, excelling in conventional or knowledge-intensive any-to-image (X2I) synthesis, complex text-rich infographic generation, and interleaved vision-language generation, with or without think patterns. Beyond performance, we show detailed model design, data preprocessing, pre-/post-training, and inference strategies to support community research. Last but not least, preliminary evidence demonstrates that our models extend beyond perception and generation, performing strongly in vision-language-action (VLA) and world model (WM) scenarios. This points toward a broader roadmap where models do not translate between modalities, but think and act across them in a native manner. Multimodal AI is no longer about connecting separate systems, but about building a unified one and trusting the necessary capabilities to emerge from within.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## 3D Gaussian Splatting for Efficient Retrospective Dynamic Scene Novel View Synthesis with a Standardized Benchmark

- **arXiv**: <https://export.arxiv.org/abs/2605.12437v1>
- **ID**: `2605.12437v1`
- **分类**: cs.CV
- **作者**: Yunxiao Zhang, Suryansh Kumar
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [3D Gaussian Splatting for Efficient Retrospective Dynamic Scene Novel View Synthesis with a Standardized Benchmark.pdf](../pdfs/3D Gaussian Splatting for Efficient Retrospective Dynamic Scene Novel View Synthesis with a Standardized Benchmark.pdf)

### 摘要（自动抓取）

Retrospective novel view synthesis (NVS) of dynamic scenes is fundamental to applications such as sports. Recent dynamic 3D Gaussian Splatting (3DGS) approaches introduce temporally coupled formulations to enforce motion coherence across time. In this paper, we argue that, in a synchronized multi-view (MV) setting typical of sports, the dynamic scene at each time step is already strongly geometrically constrained. We posit that the availability of calibrated, synchronized viewpoints provides sufficient spatial consistency, and therefore, explicit temporal coupling, or complex multi-body constraints seems unnecessary for retrospective NVS. To this end, we propose an approach tailored for synchronized MV dynamic scene. By initializing the SfM-derived point cloud at the start time and propagating optimized Gaussians over time, we show that efficient retrospective NVS can be achieved without imposing a temporal deformation constraint. Complementing our methodological contribution, we introduce a Dynamic MV dataset framework built on Blender for reproducible NeRF and 3DGS research. The framework generates high-quality, synchronized camera rigs and exports training-ready datasets in standard formats, eliminating inconsistencies in coordinate conventions and data pipelines. Using the framework, we construct a dynamic benchmark suite and evaluate representative NeRF and 3DGS approaches under controlled conditions. Together, we show that, under a synchronized MV setup, efficient retrospective dynamic scene NVS can be achieved using 3DGS. At the same time, the dataset-generation framework enables reproducible and principled benchmarking of dynamic NVS methods.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Reinforcing VLAs in Task-Agnostic World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.12334v1>
- **ID**: `2605.12334v1`
- **分类**: cs.AI
- **作者**: Yucen Wang, Rui Yu, Fengming Zhang, Junjie Lu, Xinyao Qin, Tianxiang Zhang, Kaixin Wang, Li Zhao
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Reinforcing VLAs in Task-Agnostic World Models.pdf](../pdfs/Reinforcing VLAs in Task-Agnostic World Models.pdf)

### 摘要（自动抓取）

Post-training Vision-Language-Action (VLA) models via reinforcement learning (RL) in learned world models has emerged as an effective strategy to adapt to new tasks without costly real-world interactions. However, while using imagined trajectories reduces the sample complexity of policy training, existing methods still heavily rely on task-specific data to fine-tune both the world and reward models, fundamentally limiting their scalability to unseen tasks. To overcome this, we argue that world and reward models should capture transferable physical priors that enable zero-shot inference. We propose RAW-Dream (Reinforcing VLAs in task-Agnostic World Dreams), a new paradigm that completely disentangles world model learning from downstream task dependencies. RAW-Dream utilizes a world model pre-trained on diverse task-free behaviors for predicting future rollouts, and an off-the-shelf Vision-Language Model (VLM) for reward generation. Because both components are task-agnostic, VLAs can be readily finetuned for any new task entirely within this zero-shot imagination. Furthermore, to mitigate world model hallucinations, we introduce a dual-noise verification mechanism to filter out unreliable rollouts. Extensive experiments across simulation and real-world settings demonstrate consistent performance gains, proving that generalized physical priors can effectively substitute for costly task-dependent data, offering a highly scalable roadmap for VLA adaptation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

