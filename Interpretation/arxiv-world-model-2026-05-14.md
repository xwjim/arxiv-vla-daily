---
date: 2026-05-14
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-14（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605131600 TO 202605141559] OR lastUpdatedDate:[202605131600 TO 202605141559]))
```

## Slot-MPC: Goal-Conditioned Model Predictive Control with Object-Centric Representations

- **arXiv**: <https://export.arxiv.org/abs/2605.14937v1>
- **ID**: `2605.14937v1`
- **分类**: cs.LG, cs.AI, cs.RO
- **作者**: Jonathan Spieler, Angel Villar-Corrales, Sven Behnke
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Slot-MPC Goal-Conditioned Model Predictive Control with Object-Centric Representations.pdf](../pdfs/Slot-MPC Goal-Conditioned Model Predictive Control with Object-Centric Representations.pdf)

### 摘要（自动抓取）

Predictive world models enable agents to model scene dynamics and reason about the consequences of their actions. Inspired by human perception, object-centric world models capture scene dynamics using object-level representations, which can be used for downstream applications such as action planning. However, most object-centric world models and reinforcement learning (RL) approaches learn reactive policies that are fixed at inference time, limiting generalization to novel situations. We propose Slot-MPC, an object-centric world modeling framework that enables planning through Model Predictive Control (MPC). Slot-MPC leverages vision encoders to learn slot-based representations, which encode individual objects in the scene, and uses these structured representations to learn an action-conditioned object-centric dynamics model. At inference time, the learned dynamics model enables action planning via MPC, allowing agents to adapt to previously unseen situations. Since the learned world model is differentiable, we can use gradient-based MPC to directly optimize actions, which is computationally more efficient than relying on gradient-free, sampling-based MPC methods. Experiments on simulated robotic manipulation tasks show that Slot-MPC improves both task performance and planning efficiency compared to non-object-centric world model baselines. In the considered offline setting with limited state-action coverage, we find that gradient-based MPC performs better than gradient-free, sampling-based MPC. Our results demonstrate that explicitly structured, object-centric representations provide a strong inductive bias for controllable and generalizable decision-making. Code and additional results are available at https://slot-mpc.github.io.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## IFPV: An Integrated Multi-Agent Framework for Generative Operational Planning and High-Fidelity Plan Verification

- **arXiv**: <https://export.arxiv.org/abs/2605.14851v1>
- **ID**: `2605.14851v1`
- **分类**: cs.MA, cs.AI
- **作者**: Zhigao Huang, Zhengqing Hu, Dong Chen, Shaohan Zhang, Zhao Jin, Bo Zhang, Han Wu, Mingliang Xu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [IFPV An Integrated Multi-Agent Framework for Generative Operational Planning and High-Fidelity Plan Verification.pdf](../pdfs/IFPV An Integrated Multi-Agent Framework for Generative Operational Planning and High-Fidelity Plan Verification.pdf)

### 摘要（自动抓取）

Operational plan generation and verification are critical for modern complex and rapidly changing battlefield environments, yet traditional generation and verification methods still respectively face the challenges of generation infeasibility and verification insufficiency. To alleviate these limitations, we propose an Integrated Multi-Agent Framework for Generative Operational Planning and High-Fidelity Plan Verification (IFPV). IFPV consists of two tightly coupled modules: Multi-Perspective Hierarchical Agents (MPHA) for generative operational planning and an Adversarial Cognitive Simulation Engine (ACSE) for high-fidelity adversarial plan verification. MPHA decomposes commander intent into executable multi-platform tactical action sequences through the collaboration of Pathfinder, Analyst, and Planner agents. ACSE introduces an opponent equipped with a customized world model, which predicts the future evolution of mission-critical platforms and conducts dynamic counteractions against candidate plans. Simulation experiments in the Asymmetric Combat Tactic Simulator (ACTS) show that IFPV improves mission success by 19.4% and reduces operational cost by 41.7% compared with a single-step large language model (LLM) planning baseline. Compared with a traditional rule-based validator, ACSE increases the average suppression rate by 31.8%, indicating that the proposed verification environment is stricter and more discriminative in revealing the latent vulnerabilities of candidate plans. The code for IFPV can be found at https://github.com/zhigao3ks/IFPV.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Agentifying Patient Dynamics within LLMs through Interacting with Clinical World Model

- **arXiv**: <https://export.arxiv.org/abs/2605.14723v1>
- **ID**: `2605.14723v1`
- **分类**: cs.AI, cs.CL, cs.LG
- **作者**: Minghao Wu, Yuting Yan, Zhenyang Cai, Ke Ji, Chuangsen Fang, Ziying Sheng, Xidong Wang, Rongsheng Wang, Hejia Zhang, Shuang Li, Benyou Wang, Hongyuan Zha
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Agentifying Patient Dynamics within LLMs through Interacting with Clinical World Model.pdf](../pdfs/Agentifying Patient Dynamics within LLMs through Interacting with Clinical World Model.pdf)

### 摘要（自动抓取）

Sepsis management in the ICU requires sequential treatment decisions under rapidly evolving patient physiology. Although large language models (LLMs) encode broad clinical knowledge and can reason over guidelines, they are not inherently grounded in action-conditioned patient dynamics. We introduce SepsisAgent, a world model-augmented LLM agent for sepsis treatment recommendation. SepsisAgent uses a learned Clinical World Model to simulate patient responses under candidate fluid--vasopressor interventions, and follows a propose--simulate--refine workflow before committing to a prescription. We first show that world-model access alone yields inconsistent LLM decision performance, motivating agent-specific training. We then train SepsisAgent through a three-stage curriculum: patient-dynamics supervised fine-tuning, propose--simulate--refine behavior cloning, and world-model-based agentic reinforcement learning. On MIMIC-IV sepsis trajectories, SepsisAgent outperforms all traditional RL and LLM-based baselines in off-policy value while achieving the best safety profile under guideline adherence and unsafe-action metrics. Further analysis shows that repeated interaction with the Clinical World Model enables the agent to learn regularities in patient evolution, which remain useful even when simulator access is removed.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## EponaV2: Driving World Model with Comprehensive Future Reasoning

- **arXiv**: <https://export.arxiv.org/abs/2605.14696v1>
- **ID**: `2605.14696v1`
- **分类**: cs.CV
- **作者**: Jiawei Xu, Zhizhou Zhong, Zhijian Shu, Mingkai Jia, Mingxiao Li, Jia-Wang Bian, Qian Zhang, Kaicheng Zhang, Jin Xie, Jian Yang, Wei Yin
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [EponaV2 Driving World Model with Comprehensive Future Reasoning.pdf](../pdfs/EponaV2 Driving World Model with Comprehensive Future Reasoning.pdf)

### 摘要（自动抓取）

Data scaling plays a pivotal role in the pursuit of general intelligence. However, the prevailing perception-planning paradigm in autonomous driving relies heavily on expensive manual annotations to supervise trajectory planning, which severely limits its scalability. Conversely, although existing perception-free driving world models achieve impressive driving performance, their real-world reasoning ability for planning is solely built on next frame image forecasting. Due to the lack of enough supervision, these models often struggle with comprehensive scene understanding, resulting in unsatisfactory trajectory planning. In this paper, we propose EponaV2, a novel paradigm of driving world models, which achieves high-quality planning with comprehensive future reasoning. Inspired by how human drivers anticipate 3D geometry and semantics, we train our model to forecast more comprehensive future representations, which can be additionally decoded to future geometry and semantic maps. Extracting the 3D and semantic modalities enables our model to deeply understand the surrounding environment, and the future prediction task significantly enhances the real-world reasoning capabilities of EponaV2, ultimately leading to improved trajectory planning. Moreover, inspired by the training recipe of Large Language Models (LLMs), we introduce a flow matching group relative policy optimization mechanism to further improve planning accuracy. The state-of-the-art (SOTA) performances of EponaV2 among perception-free models on three NAVSIM benchmarks (+1.3PDMS, +5.5EPDMS) demonstrate the effectiveness of our methods.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## When Robots Do the Chores: A Benchmark and Agent for Long-Horizon Household Task Execution

- **arXiv**: <https://export.arxiv.org/abs/2605.14504v1>
- **ID**: `2605.14504v1`
- **分类**: cs.AI
- **作者**: Zilin Zhu, Longteng Guo, Yanghong Mei, Bowen Pang, Zongxun Zhang, Xingjian He, Ruyi Ji, Jing Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [When Robots Do the Chores A Benchmark and Agent for Long-Horizon Household Task Execution.pdf](../pdfs/When Robots Do the Chores A Benchmark and Agent for Long-Horizon Household Task Execution.pdf)

### 摘要（自动抓取）

Long-horizon household tasks demand robust high-level planning and sustained reasoning capabilities, which are largely overlooked by existing embodied AI benchmarks that emphasize short-horizon navigation or manipulation and rely on fixed task categories. We introduce LongAct, a benchmark designed to evaluate planning-level autonomy in long-horizon household tasks specified through free-form instructions. By abstracting away embodiment-specific low-level control, LongAct isolates high-level cognitive capabilities such as instruction understanding, dependency management, memory maintenance, and adaptive planning. We further propose HoloMind, a VLM-driven agent with a DAG-based long-horizon hierarchical planner, a Multimodal Spatial Memory for persistent world modeling, an Episodic Memory for experience reuse, and a global Critic for reflective supervision. Experiments with GPT-5 and Qwen3-VL models show that HoloMind substantially improves long-horizon performance while reducing reliance on model scale. Even top models achieve only 59% goal completion and 16% full-task success, underscoring the difficulty of LongAct and the need for stronger long-horizon planning in embodied agents.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Coding Agent Is Good As World Simulator

- **arXiv**: <https://export.arxiv.org/abs/2605.14398v1>
- **ID**: `2605.14398v1`
- **分类**: cs.AI
- **作者**: Hongyu Wang, Jingquan Wang, Bocheng Zou, Radu Serban, Dan Negrut
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Coding Agent Is Good As World Simulator.pdf](../pdfs/Coding Agent Is Good As World Simulator.pdf)

### 摘要（自动抓取）

World models have emerged as a powerful paradigm for building interactive simulation environments, with recent video-based approaches demonstrating impressive progress in generating visually plausible dynamics. However, because these models typically infer dynamics from video and represent them in latent states, they do not explicitly enforce physical constraints. As a result, the generated video rollouts are not physically plausible, exhibiting unstable contacts, distorted shapes, or inconsistent motion. In this paper, we present an agentic framework constructing physics-based world models through executable simulation code. The framework coordinates planning, code generation, visual review, and physics analysis agents. The planning agent converts the natural language prompt into a structured scene plan, the code agent implements it as executable simulation code, and the visual review agent provide visual feedback while the physics analysis agent checks physical consistency. The code is iteratively revised based on the feedback until the simulation matches the prompt reqirements and physical constraints. Experimental results show that our framework outperforms advanced video-based models in physical accuracy, instruction fidelity and visual quality, which could be applied to various scenarios including driving simulation and embodied robot tasks.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Delta Forcing: Trust Region Steering for Interactive Autoregressive Video Generation

- **arXiv**: <https://export.arxiv.org/abs/2605.14382v1>
- **ID**: `2605.14382v1`
- **分类**: cs.CV, cs.GR, cs.MM
- **作者**: Yuheng Wu, Xiangbo Gao, Tianhao Chen, Xinghao Chen, Qing Yin, Zhengzhong Tu, Dongman Lee
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Delta Forcing Trust Region Steering for Interactive Autoregressive Video Generation.pdf](../pdfs/Delta Forcing Trust Region Steering for Interactive Autoregressive Video Generation.pdf)

### 摘要（自动抓取）

Interactive real-time autoregressive video generation is essential for applications such as content creation and world modeling, where visual content must adapt to dynamically evolving event conditions. A fundamental challenge lies in balancing reactivity and stability: models must respond promptly to new events while maintaining temporal coherence over long horizons. Existing approaches distill bidirectional models into autoregressive generators and further adapt them via streaming long tuning, yet often exhibit persistent drift after condition changes. We identify the cause as conditional bias, where the teacher may provide condition-aligned but trajectory-agnostic guidance, biasing generation toward locally valid yet globally inconsistent modes. Inspired by Trust Region Policy Optimization, we propose Delta Forcing, a simple yet effective framework that constrains unreliable teacher supervision within an adaptive trust region. Specifically, Delta Forcing estimates transition consistency from the latent delta between teacher and generator trajectories, and uses it to balance teacher supervision with a monotonic continuity objective. This suppress unreliable teacher-induced shifts while preserving responsiveness to new events. Extensive experiments demonstrate that Delta Forcing significantly improves consistency while maintaining event reactivity.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Enhanced and Efficient Reasoning in Large Learning Models

- **arXiv**: <https://export.arxiv.org/abs/2605.14036v1>
- **ID**: `2605.14036v1`
- **分类**: cs.AI, cs.CC, cs.CL, cs.LG
- **作者**: Leslie G. Valiant
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Enhanced and Efficient Reasoning in Large Learning Models.pdf](../pdfs/Enhanced and Efficient Reasoning in Large Learning Models.pdf)

### 摘要（自动抓取）

In current Large Language Models we can trust the production of smoothly flowing prose on the basis of the principles of machine learning. However, there is no comparably principled basis to justify trust in the content of the text produced. It appears to be conventional wisdom that addressing this issue by adding more principled reasoning is not computationally affordable. Here we propose a principled method of reasoning that is efficient enough to be practical for large language models. Further, the method allows the retention of much of the currently used software and hardware base. Our method for improving the functioning of large language models consists of a first stage of preprocessing that recodes the data to a Unary Relational Integracode that is more explicit about the relationships among the objects described in the text, followed as a second stage by a standard but possibly streamlined machine learning process that then also learns to predict these relationships. The method may be viewed as realizing a world model and applying beyond natural language, to vision and actions, for example, where the multiple properties of an object referred to in an input are brought together explicitly, rather than remaining distributed in the various references to it in the input. We articulate its advantages in terms of Robust Logic, a system for performing principled chaining on learned, and hence uncertain, information. We show that this recoding has the surprising and fortuitous property that, while succinct, it makes the task of learning a core subset of relational rules that hold in the world described in the training data polynomial time learnable in a defined sense, the polynomial depending on the complexity of the rule. This gives support for sound reasoning within each single call of the learned classifier as well as between multiple calls.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Toward AI-Driven Digital Twins for Metropolitan Floods: A Conditional Latent Dynamics Network Surrogate of the Shallow Water Equations

- **arXiv**: <https://export.arxiv.org/abs/2605.13761v1>
- **ID**: `2605.13761v1`
- **分类**: cs.LG, cs.CE
- **作者**: Phillip Si, Yuan Qiu, Omar Sallam, Jeremy Feinstein, Ziang He, Eugene Yan, Peng Chen
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

AI-driven flood digital twins demand fast hydrodynamic surrogates for ensemble forecasting and observation assimilation. Yet even GPU-accelerated two-dimensional shallow water equation (SWE) solvers still require $\sim 55$ minutes per $96$-hour run on a $\sim 4.2$-million-active-cell metropolitan basin (the Des~Plaines River basin at $30\,\mathrm{m}$ resolution), making such workloads prohibitive at native resolution. We present the Conditional Latent Dynamics Network (CLDNet): a low-dimensional latent neural ODE driven by rainfall, paired with a coordinate-based decoder conditioned on static terrain (elevation, slope, Manning roughness) that reconstructs depth and discharge at arbitrary query points. Pointwise decoding decouples memory from grid size and handles irregular watersheds natively, enabling metropolitan-scale training on a single compute node and direct queries at exact gauge coordinates without raster snapping. We evaluate CLDNet on a synthetic $250{,}000$-cell Texas benchmark and on a new Des~Plaines case study of $114$ real-rainfall Stage~IV storms whose reference simulator we validate against United States Geological Survey (USGS) gauges at the April~2013 flood-of-record (Nash--Sutcliffe efficiency $0.57$--$0.94$ on mean-recentered water-surface elevation). CLDNet roughly halves the relative root-mean-squared error of an unconditional baseline, outperforms regular-grid VAE--ConvLSTM and FNO baselines on the Texas benchmark (both presuppose a Cartesian grid and do not apply to the irregular Des~Plaines watershed), reaches a critical success index of $\approx 86\%$ at the $0.5\,\mathrm{m}$ inundation threshold, and produces a full $96$-hour basin-wide forecast in $\sim 29$ seconds -- a $\sim 115\times$ speedup.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Learning POMDP World Models from Observations with Language-Model Priors

- **arXiv**: <https://export.arxiv.org/abs/2605.13740v1>
- **ID**: `2605.13740v1`
- **分类**: cs.LG
- **作者**: Valentin Six, Frederik Panse, Mathis Fajeau, Lancelot Da Costa, Mridul Sharma, Alfonso Amayuelas, Tim Z. Xiao, David Hyland, Philipp Hennig, Bernhard Schölkopf
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Learning POMDP World Models from Observations with Language-Model Priors.pdf](../pdfs/Learning POMDP World Models from Observations with Language-Model Priors.pdf)

### 摘要（自动抓取）

Whether navigating a building, operating a robot, or playing a game, an agent that acts effectively in an environment must first learn an internal model of how that environment works. Partially-observable Markov decision processes (POMDPs) provide a flexible modeling class for such internal world models, but learning them from observation-action trajectories alone is challenging and typically requires extensive environment interaction. We ask whether language-model priors can reduce costly interaction by leveraging prior knowledge, and introduce \emph{Pinductor} (POMDP-inductor): an LLM proposes candidate POMDP models from a few observation-action trajectories and iteratively refines them to optimize a belief-based likelihood score. Despite using strictly less information, \emph{Pinductor} matches the performance and sample efficiency of LLM-based POMDP learning methods that assume privileged access to the hidden state, while significantly surpassing the sample efficiency of tabular POMDP baselines. Further results show that performance scales with LLM capability and degrades gracefully as semantic information about the environment is withheld. Together, these results position language-model priors as a practical tool for sample-efficient world-model learning under partial observability, and a step toward generalist agents in real-world environments. Code is available at https://github.com/atomresearch/pinductor.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

