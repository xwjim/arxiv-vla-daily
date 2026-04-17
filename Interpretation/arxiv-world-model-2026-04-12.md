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
- **总结状态**: 已总结
- **标签**: 世界模型, 空间推理, LLM, 迷宫评测, 表征敏感性
- **PDF**: [Do LLMs Build Spatial World Models Evidence from Grid-World Maze Tasks.pdf](../pdfs/Do LLMs Build Spatial World Models Evidence from Grid-World Maze Tasks.pdf)

### 一、论文元数据

- **标题：** Do LLMs Build Spatial World Models? Evidence from Grid-World Maze Tasks
- **核心机构：** 圣母大学；哥伦比亚大学；MQube Cognition
- **一句话本质：** 这篇论文用迷宫任务表明，LLM 在空间推理上的成功更像是“表征和提示词条件下的局部技巧”，而不是形成了稳健的内部空间 world model。

### 二、破局点 (The Gap)

- **已有共识/做法：** 近年的 world model 讨论常把 LLM 的规划和推理能力视为其内部已形成抽象环境模型的证据。
- **核心痛点：** 这类判断往往缺乏对“是否真的形成空间表征”的受控验证，因为很多任务允许模型依赖表面模式匹配蒙对。
- **本文切入点：** 作者选用需要多步规划和拓扑抽象的 grid-world maze 任务，系统比较不同输入表征、提示方式与连续空间问答中的表现。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 迷宫表征（邻接表或视觉网格） + 提示策略 -> LLM 解题轨迹与空间问答结果。
- **关键模块 1：** **多模型受控评测**：测试 Gemini-2.5-Flash、GPT-5-mini、Claude-Haiku-4.5、DeepSeek-Chat 在 5x5 到 9x9 迷宫上的表现。
- **关键模块 2：** **表征敏感性对比**：直接比较 tokenized adjacency list 与 visual grid 两种输入形式，检验模型是否具备 format-invariant 的空间抽象。
- **关键模块 3：** **顺序空间 probing**：通过 proximity questions 和 compositional distance comparisons 检查模型是否能累积先前空间信息，而不是逐题独立作答。

### 四、核心认知与发现 (Key Insights)

- **空间能力高度依赖输入表征：** 同一个模型在 adjacency list 上可达 80-86% 准确率，但换成 visual grid 就掉到 16-34%，说明其推理并不表征不变。
- **“会解释”不等于“真理解”：** 尽管 reasoning trace 的语义覆盖率可达 96-99%，模型依然不能稳定完成空间计算，暴露出解释文本与内部空间状态并未真正对齐。
- **很多 world model 叙事可能过度乐观：** 结果更支持“提示词依赖的局部成功”，而不是 LLM 已经学会稳定构建空间世界模型。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- **任务域仍较窄：** 迷宫是很干净的空间推理试验台，但和真实机器人导航、三维场景理解之间仍有明显差距。
- **主要结论围绕当前提示和表征设置：** 论文证明了现有设置下的脆弱性，但不等于所有未来架构或外部记忆增强方案都无法建立空间模型。

**⚠️ 论证瑕疵：**

- 摘要强调多个模型存在显著差异，但没有在摘要层面解释不同模型失败模式是否一致，例如是搜索深度不足、坐标更新错误，还是多步记忆累积断裂。

**🚀 下一步高价值方向 (Next Steps)：**

- **把二维迷宫 probing 推进到更接近具身任务的环境：** 例如三维导航、物体遮挡和局部可观测场景。
- **把“内部状态累积”显式化：** 评估外部记忆、结构化状态缓存或神经地图接口是否能真正改善空间 world model 的形成。


---

## Zero-shot World Models Are Developmentally Efficient Learners

- **arXiv**: <https://export.arxiv.org/abs/2604.10333v1>
- **ID**: `2604.10333v1`
- **分类**: cs.AI, cs.CV
- **作者**: Khai Loong Aw, Klemen Kotar, Wanhee Lee, Seungwoo Kim, Khaled Jedoui, Rahul Venkatesh, Lilian Naing Chen, Michael C. Frank, Daniel L. K. Yamins
- **总结状态**: 已总结
- **标签**: 世界模型, 儿童认知, 数据效率, 因果推断, 物理理解
- **PDF**: [Zero-shot World Models Are Developmentally Efficient Learners.pdf](../pdfs/Zero-shot World Models Are Developmentally Efficient Learners.pdf)

### 一、论文元数据

- **标题：** Zero-shot World Models Are Developmentally Efficient Learners
- **核心机构：** 斯坦福大学
- **一句话本质：** 作者提出 Zero-shot Visual World Model，试图说明只要模型具备合适的时序分解和近似因果推断结构，就能像儿童一样用极少数据形成物理世界理解能力。

### 二、破局点 (The Gap)

- **已有共识/做法：** 当代 AI 往往依赖海量数据训练，而儿童却能在极有限的一手经验中迅速掌握深度、运动和物体交互等物理直觉。
- **核心痛点：** 现有模型很难同时做到数据高效、跨任务泛化和符合认知发展规律，因此难以解释儿童早期世界理解从何而来。
- **本文切入点：** 作者提出一个计算假说 ZWM，把儿童式高效学习归因于稀疏时序分解预测、近似因果推断以及多能力组合式推理。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 单个儿童第一视角经验 -> 稀疏时序世界模型学习 -> 多项物理理解 benchmark 能力。
- **关键模块 1：** **sparse temporally-factored predictor**：将外观与动力学解耦，避免模型把全部变化都挤进单一表征里。
- **关键模块 2：** **zero-shot estimation via approximate causal inference**：不依赖针对每个任务单独监督，而是通过近似因果推断从已有表征中直接推断结果。
- **关键模块 3：** **组合式能力构建**：把基础推断结果复用并组合，形成更复杂的物理理解和更接近儿童行为的发展轨迹。

### 四、核心认知与发现 (Key Insights)

- **正确结构可能比大数据更关键：** 摘要最强的信息是，world model 若具备合适归纳偏置，可以在 human-scale data 上快速获得广泛能力。
- **认知一致性被当作有效检验标准：** 模型不仅在 benchmark 上有效，还能复现儿童发展行为特征与 brain-like internal representations，这让论文不只是工程提分。
- **零样本推断是核心卖点：** 作者强调复杂能力并非靠每项任务单独训练学出来，而是通过已有因果结构的组合自然涌现。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- **“像儿童”仍主要体现在行为层面：** 摘要展示的是发展签名和内部表征相似性，但离真正解释儿童认知机制还有距离。
- **依赖单一数据来源假设：** 从单个儿童第一视角经验学习很有冲击力，但其数据采集条件、覆盖范围和偏差是否足够代表真实发展环境仍待核实。

**⚠️ 论证瑕疵：**

- 摘要同时强调 benchmark competence、developmental signatures 和 brain-like representations，但没有在摘要层面说明三者之间的因果关系是如何建立的，容易给人“多个好现象同时出现就等于机制正确”的印象。

**🚀 下一步高价值方向 (Next Steps)：**

- **扩展到更开放、更长期的发展数据：** 检验 ZWM 在更复杂环境和更长时程经验上是否仍保持数据效率。
- **把认知假说和工程系统闭环起来：** 将 ZWM 的结构性设计迁移到机器人或多模态 agent 中，验证它是否真的能减少现实系统的数据需求。


---

