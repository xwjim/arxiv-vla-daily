---
date: 2026-05-05
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-05（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605041600 TO 202605051559] OR lastUpdatedDate:[202605041600 TO 202605051559]))
```

## RoboAlign-R1: Distilled Multimodal Reward Alignment for Robot Video World Models

- **arXiv**: <https://export.arxiv.org/abs/2605.03821v1>
- **ID**: `2605.03821v1`
- **分类**: cs.RO, cs.AI
- **作者**: Hao Wu, Yuqi Li, Yuan Gao, Fan Xu, Fan Zhang, Kun Wang, Penghao Zhao, Qiufeng Wang, Yizhou Zhao, Weiyan Wang, Yingli Tian, Xian Wu, Xiaomeng Huang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [RoboAlign-R1 Distilled Multimodal Reward Alignment for Robot Video World Models.pdf](../pdfs/RoboAlign-R1 Distilled Multimodal Reward Alignment for Robot Video World Models.pdf)

### 摘要（自动抓取）

Existing robot video world models are typically trained with low-level objectives such as reconstruction and perceptual similarity, which are poorly aligned with the capabilities that matter most for robot decision making, including instruction following, manipulation success, and physical plausibility. They also suffer from error accumulation in long-horizon autoregressive prediction. We present RoboAlign-R1, a framework that combines reward-aligned post-training with stabilized long-horizon inference for robot video world models. We construct RobotWorldBench, a benchmark of 10,000 annotated video-instruction pairs collected from four robot data sources, and train a multimodal teacher judge, RoboAlign-Judge, to provide fine-grained six-dimensional evaluation of generated videos. We then distill the teacher into a lightweight student reward model for efficient reinforcement-learning-based post-training. To reduce long-horizon rollout drift, we further introduce Sliding Window Re-encoding (SWR), a training-free inference strategy that periodically refreshes the generation context. Under our in-domain evaluation protocol, RoboAlign-R1 improves the aggregate six-dimension score by 10.1% over the strongest baseline, including gains of 7.5% on Manipulation Accuracy and 4.6% on Instruction Following; these ranking improvements are further supported by an external VLM-based cross-check and a blinded human study. Meanwhile, SWR improves long-horizon prediction quality with only about 1% additional latency, yielding a 2.8% gain in SSIM and a 9.8% reduction in LPIPS. Together, these results show that reward-aligned post-training and stabilized long-horizon decoding improve task consistency, physical realism, and long-horizon prediction quality in robot video world models.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## What You Think is What You See: Driving Exploration in VLM Agents via Visual-Linguistic Curiosity

- **arXiv**: <https://export.arxiv.org/abs/2605.03782v1>
- **ID**: `2605.03782v1`
- **分类**: cs.AI
- **作者**: Haoxi Li, Qinglin Hou, Jianfei Ma, Jinxiang Lai, Tao Han, Sikai Bai, Jingcai Guo, Jie Zhang, Song Guo
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [What You Think is What You See Driving Exploration in VLM Agents via Visual-Linguistic Curiosity.pdf](../pdfs/What You Think is What You See Driving Exploration in VLM Agents via Visual-Linguistic Curiosity.pdf)

### 摘要（自动抓取）

To navigate partially observable visual environments, recent VLM agents increasingly internalize world modeling capabilities into their policies via explicit CoT reasoning, enabling them to mentally simulate futures before acting. However, relying solely on passive reasoning over visited states is insufficient for sparse-reward tasks, as it lacks the epistemic drive to actively uncover the ``known unknown'' required for robust generalization. We ask: Can VLM agents actively find signals that challenge and refine their internal world model through curiosity-driven exploration? In this work, we propose GLANCE, a unified framework that bridges reasoning and exploration by grounding the agent's linguistic world model into the stable visual representations of an evolving target network. Crucially, GLANCE leverages the discrepancy between linguistic prediction and visual reality as an intrinsic curiosity signal within reinforcement learning, steering the agent to actively explore areas where its internal model is uncertain. Extensive experiments across a series of agentic tasks show the effectiveness of GLANCE, and demonstrate that aligning ``what the agent thinks'' with ``what the agent sees'' is key to solving complex or sparse agentic tasks.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Learning to Theorize the World from Observation

- **arXiv**: <https://export.arxiv.org/abs/2605.03413v1>
- **ID**: `2605.03413v1`
- **分类**: cs.LG, cs.AI
- **作者**: Doojin Baek, Gyubin Lee, Junyeob Baek, Hosung Lee, Sungjin Ahn
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Learning to Theorize the World from Observation.pdf](../pdfs/Learning to Theorize the World from Observation.pdf)

### 摘要（自动抓取）

What does it mean to understand the world? Contemporary world models often operationalize understanding as accurate future prediction in latent or observation space. Developmental cognitive science, however, suggests a different view: human understanding emerges through the construction of internal theories of how the world works, even before mature language is acquired. Inspired by this theory-building view of cognition, we introduce Learning-to-Theorize, a learning paradigm for inferring explicit explanatory theories of the world from raw, non-textual observations. We instantiate this paradigm with the Neural Theorizer (NEO), a probabilistic neural model that induces latent programs as a learned Language of Thought and executes them through a shared transition model. In NEO, a theory is represented as an executable, compositional program whose learned primitives can be systematically recombined to explain novel phenomena. Experiments show that this formulation enables explanation-driven generalization, allowing observations to be understood in terms of the programs that generate them.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

