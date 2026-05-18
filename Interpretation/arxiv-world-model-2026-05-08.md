---
date: 2026-05-08
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-08（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605071600 TO 202605081559] OR lastUpdatedDate:[202605071600 TO 202605081559]))
```

## 3D MRI Image Pretraining via Controllable 2D Slice Navigation Task

- **arXiv**: <https://export.arxiv.org/abs/2605.06487v1>
- **ID**: `2605.06487v1`
- **分类**: cs.CV, cs.AI
- **作者**: Yu Wang, Qingchao Chen
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [3D MRI Image Pretraining via Controllable 2D Slice Navigation Task.pdf](../pdfs/3D MRI Image Pretraining via Controllable 2D Slice Navigation Task.pdf)

### 摘要（自动抓取）

Self-supervised pretraining has become the mainstream approach for learning MRI representations from unlabeled scans. However, most existing objectives still treat each scan primarily as static aggregations of slices, patches or volumes. We ask whether there exists an intrinsic form of self-supervision signal that is different from reconstructing the masked patches, through transforming the 3D volumes into controllable 2D rendered sequences: by rendering slices at continuous positions, orientations, and scales, a 3D volume can be converted into dense video-action sequences whose controls are the action trajectories. We study this formulation with an action-conditioned pretraining objective, where a tokenizer encodes slice observations and a latent dynamics model predicts the evolution of latent features. Across representative anatomical and spatial downstream tasks, the proposed pretraining is evaluated against standard static-volume baselines, tokenizer-only pretraining, and dynamics variants without aligned actions. These results suggest that controllable MRI slice navigation provides a useful complementary pretraining interface for learning anatomical and spatial representations from large unlabeled MRI collections.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

