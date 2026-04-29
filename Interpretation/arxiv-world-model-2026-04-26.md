---
date: 2026-04-26
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-04-26（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604251600 TO 202604261559])
```

_本日检索窗口内 arXiv API 未返回与查询匹配的论文。_
## Emotion-Conditioned Short-Horizon Human Pose Forecasting with a Lightweight Predictive World Model

- **arXiv**: <https://export.arxiv.org/abs/2604.23532v1>
- **ID**: `2604.23532v1`
- **分类**: cs.CV, cs.AI
- **作者**: Jingni Huang, Peter Bloodsworth
- **总结状态**: 已总结
- **标签**: World Model, 姿态预测, 情绪条件, 多模态融合, LSTM
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Short-term human pose prediction plays a crucial role in interactive systems, assistive robots, and emotion-aware human-computer interaction[1-3]. While current trajectory prediction models primarily rely on geometric motion cues, they often overlook the underlying emotional signals influencing human motion dynamics[4-5]. This paper investigates whether facial expression-derived emotion embeddings can provide auxiliary conditional signals for short-term pose prediction. To further evaluate multimodal conditionation in a recursive prediction setting, we propose a lightweight autoregressive predictive world model that performs 15-step rolling pose prediction. This framework combines pose keypoints with emotion embeddings through a learnable gating mechanism and performs autoregressive unfolding prediction using a recurrent sequence model based on a two-layer LSTM architecture. Experiments were conducted on two small-scale pose-emotion video datasets: controlled motion sequences with minimal facial expression changes and, natural emotion-driven motion sequences with considerable facial expression changes. The results show that simple multimodal fusion does not consistently improve prediction accuracy, while normalized gating fusion significantly enhances the performance of emotion-driven motion sequences. Furthermore, counterfactual perturbation experiments demonstrate that the predicted trajectory exhibits measurable sensitivity to changes in multimodal input, suggesting that facial expression embeddings act as auxiliary conditional signals rather than redundant features. In summary, these results indicate that incorporating facial expression-derived emotion embeddings into emotion-conditional short-term pose prediction based on a lightweight predictive world model architecture is a feasible approach.

### 一、论文元数据
- **标题：** Emotion-Conditioned Short-Horizon Human Pose Forecasting with a Lightweight Predictive World Model
- **核心机构：** 未提取
- **一句话本质：** 论文验证面部表情情绪 embedding 能否作为轻量预测式 world model 的条件信号，提升短时人体姿态预测。
- **标签：** World Model, 姿态预测, 情绪条件, 多模态融合, LSTM

### 二、破局点 (The Gap)
- **已有共识/做法：** 人体短时轨迹预测通常依赖几何运动线索，如关键点历史和速度模式。
- **核心痛点：** 情绪会影响人体运动动力学，但很多预测模型忽略面部表情等非几何条件信号。
- **本文切入点：** 在递归预测设置中，把 pose keypoints 与 emotion embeddings 通过可学习 gate 融合，构建轻量自回归预测 world model。

### 三、核心机制 (How it works)
- **输入 -> 输出：** 输入为人体姿态关键点和表情派生的情绪 embedding；输出为 15 步滚动预测的人体姿态序列。
- **关键模块 1：** 两层 LSTM 递归展开，形成短时 predictive world model。
- **关键模块 2：** 使用 gating fusion 融合几何姿态和情绪条件，并通过反事实扰动检验预测对多模态输入变化的敏感性。

### 四、核心认知与发现 (Key Insights)
- 简单多模态拼接并不稳定提升预测效果，归一化 gating fusion 在情绪驱动明显的数据上更有效。
- 情绪 embedding 不是冗余特征，反事实扰动显示它会对预测轨迹产生可测影响。
- 该工作提示 world model 可以纳入心理/意图类条件信号，而不只建模外部几何状态。

### 五、致命弱点与演进方向 (Critical Analysis)
**🛑 核心局限 (Limitations)：**
- 实验基于小规模 pose-emotion 视频数据，泛化到复杂人群、多视角和真实机器人交互仍需验证。

**⚠️ 论证瑕疵：**
- 情绪 embedding 的来源、稳定性和标注偏差会影响结论，摘要中尚未看到对这些误差的充分拆解。

**🚀 下一步高价值方向 (Next Steps)：**
- 将情绪条件扩展到人机协作预测、意图识别和安全距离规划，并评估其在真实交互系统中的闭环收益。


---

