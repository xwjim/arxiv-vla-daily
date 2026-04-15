---
date: 2026-04-12
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-04-12（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604111600 TO 202604121559])
```

## Do LLMs Build Spatial World Models? Evidence from Grid-World Maze Tasks

- **arXiv**: <https://export.arxiv.org/abs/2604.10690v1>
- **ID**: `2604.10690v1`
- **分类**: cs.AI
- **作者**: Weijiang Li, Yilin Zhu, Rajarshi Das, Parijat Dube
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Do LLMs Build Spatial World Models Evidence from Grid-World Maze Tasks.pdf](../pdfs/Do LLMs Build Spatial World Models Evidence from Grid-World Maze Tasks.pdf)

### 摘要（自动抓取）

Foundation models have shown remarkable performance across diverse tasks, yet their ability to construct internal spatial world models for reasoning and planning remains unclear. We systematically evaluate the spatial understanding of large language models through maze tasks, a controlled testing context requiring multi-step planning and spatial abstraction. Across comprehensive experiments with Gemini-2.5-Flash, GPT-5-mini, Claude-Haiku-4.5, and DeepSeek-Chat, we uncover significant discrepancies in spatial reasoning that challenge assumptions about LLM planning capabilities. Using chain-of-thought prompting, Gemini achieves 80-86% accuracy on smaller mazes (5x5 to 7x7 grids) with tokenized adjacency representations, but performance collapses to 16-34% with visual grid formats, which is a 2-5x difference, suggesting representation-dependent rather than format-invariant spatial reasoning. We further probe spatial understanding through sequential proximity questions and compositional distance comparisons. Despite achieving 96-99% semantic coverage in reasoning traces, models fail to leverage this understanding for consistent spatial computations, indicating that they treat each question independently rather than building cumulative spatial knowledge. Our findings based on the maze-solving tasks suggest that LLMs do not develop robust spatial world models, but rather exhibit representation-specific and prompting-dependent reasoning that succeeds only under narrow conditions. These results have critical implications for deploying foundation models in applications requiring spatial abstraction.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Zero-shot World Models Are Developmentally Efficient Learners

- **arXiv**: <https://export.arxiv.org/abs/2604.10333v1>
- **ID**: `2604.10333v1`
- **分类**: cs.AI, cs.CV
- **作者**: Khai Loong Aw, Klemen Kotar, Wanhee Lee, Seungwoo Kim, Khaled Jedoui, Rahul Venkatesh, Lilian Naing Chen, Michael C. Frank, Daniel L. K. Yamins
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Zero-shot World Models Are Developmentally Efficient Learners.pdf](../pdfs/Zero-shot World Models Are Developmentally Efficient Learners.pdf)

### 摘要（自动抓取）

Young children demonstrate early abilities to understand their physical world, estimating depth, motion, object coherence, interactions, and many other aspects of physical scene understanding. Children are both data-efficient and flexible cognitive systems, creating competence despite extremely limited training data, while generalizing to myriad untrained tasks -- a major challenge even for today's best AI systems. Here we introduce a novel computational hypothesis for these abilities, the Zero-shot Visual World Model (ZWM). ZWM is based on three principles: a sparse temporally-factored predictor that decouples appearance from dynamics; zero-shot estimation through approximate causal inference; and composition of inferences to build more complex abilities. We show that ZWM can be learned from the first-person experience of a single child, rapidly generating competence across multiple physical understanding benchmarks. It also broadly recapitulates behavioral signatures of child development and builds brain-like internal representations. Our work presents a blueprint for efficient and flexible learning from human-scale data, advancing both a computational account for children's early physical understanding and a path toward data-efficient AI systems.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

