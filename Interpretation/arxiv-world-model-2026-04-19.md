---
date: 2026-04-19
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-04-19（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604181600 TO 202604191559])
```

_本日检索窗口内 arXiv API 未返回与查询匹配的论文。_
## Dual-Anchoring: Addressing State Drift in Vision-Language Navigation

- **arXiv**: <https://export.arxiv.org/abs/2604.17473v1>
- **ID**: `2604.17473v1`
- **分类**: cs.CV, cs.AI
- **作者**: Kangyi Wu, Pengna Li, Kailin Lyu, Lin Zhao, Qingrong He, Jinjun Wang, Jianyi Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Dual-Anchoring Addressing State Drift in Vision-Language Navigation.pdf](../pdfs/Dual-Anchoring Addressing State Drift in Vision-Language Navigation.pdf)

### 摘要（自动抓取）

Vision-Language Navigation(VLN) requires an agent to navigate through 3D environments by following natural language instructions. While recent Video Large Language Models(Video-LLMs) have largely advanced VLN, they remain highly susceptible to State Drift in long scenarios. In these cases, the agent's internal state drifts away from the true task execution state, leading to aimless wandering and failure to execute essential maneuvers in the instruction. We attribute this failure to two distinct cognitive deficits: Progress Drift, where the agent fails to distinguish completed sub-goals from remaining ones, and Memory Drift, where the agent's history representations degrade, making it lose track of visited landmarks. In this paper, we propose a Dual-Anchoring Framework that explicitly anchors the instruction progress and history representations. First, to address progress drift, we introduce Instruction Progress Anchoring, which supervises the agent to generate structured text tokens that delineate completed versus remaining sub-goals. Second, to mitigate memory drift, we propose Memory Landmark Anchoring, which utilizes a Landmark-Centric World Model to retrospectively predict object-centric embeddings extracted by the Segment Anything Model, compelling the agent to explicitly verify past observations and preserve distinct representations of visited landmarks. Facilitating this framework, we curate two extensive datasets: 3.6 million samples with explicit progress descriptions, and 937k grounded landmark data for retrospective verification. Extensive experiments in both simulation and real-world environments demonstrate the superiority of our method, achieving a 15.2% improvement in Success Rate and a remarkable 24.7% gain on long-horizon trajectories. To facilitate further research, we will release our code, data generation pipelines, and the collected datasets.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## TensorHub: Rethinking AI Model Hub with Tensor-Centric Compression

- **arXiv**: <https://export.arxiv.org/abs/2604.17104v1>
- **ID**: `2604.17104v1`
- **分类**: cs.DC, cs.AI, cs.LG
- **作者**: Tingfeng Lan, Zirui Wang, Yunjia Zheng, Zhaoyuan Su, Juncheng Yang, Yue Cheng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [TensorHub Rethinking AI Model Hub with Tensor-Centric Compression.pdf](../pdfs/TensorHub Rethinking AI Model Hub with Tensor-Centric Compression.pdf)

### 摘要（自动抓取）

Modern AI models are growing rapidly in size and redundancy, leading to significant storage and distribution challenges in model hubs. We present TensorHub, a tensor-centric system for reducing storage overhead through fine-grained deduplication and compression. TensorHub leverages tensor-level fingerprinting and clustering to identify redundancy across models without requiring annotations. Our design enables efficient storage reduction while preserving model usability and performance. Experiments on real-world model repositories demonstrate substantial storage savings with minimal overhead.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

