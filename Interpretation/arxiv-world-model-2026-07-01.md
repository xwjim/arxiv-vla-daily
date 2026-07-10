---
date: 2026-07-01
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-07-01（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202606301600 TO 202607011559] OR lastUpdatedDate:[202606301600 TO 202607011559]))
```

## DVG-WM: Disentangled Video Generation Enables Efficient Embodied World Model for Robotic Manipulation

- **arXiv**: <https://export.arxiv.org/abs/2606.32028v1>
- **ID**: `2606.32028v1`
- **分类**: cs.RO
- **作者**: Ziyu Shan, Zhenyu Wu, Xiaofeng Wang, Zheng Zhu, Ziwei Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [DVG-WM Disentangled Video Generation Enables Efficient Embodied World Model for Robotic Manipulation.pdf](../pdfs/DVG-WM Disentangled Video Generation Enables Efficient Embodied World Model for Robotic Manipulation.pdf)

### 摘要（自动抓取）

Video-based embodied world models provide an appealing substrate for robotic manipulation by predicting future states, yet current approaches remain limited by a fundamental entanglement: accurately modeling dynamics typically requires low-level temporal reasoning, while producing high-resolution frames demands expansive visual synthesis according to high-level semantics. This entanglement results in slow inference speed for iterative planning or too coarse predictions to retain contact-rich details. To solve this dilemma, we present Disentangled Video Generation World Model (DVG-WM), an efficient framework that explicitly decomposes world modeling into dynamics learning and visual synthesis. Conditioned on an initial observation and a language instruction, our model first generates a plausible sequence of intermediate visual states to preview the physical interaction and refines them to obtain high-fidelity videos. Furthermore, an efficient cascading mechanism is proposed, where DVG-WM uses flow matching to directly map the dynamics to video latents, and introduces a latent degradation mechanism to regenerate contact-rich details. Experiments on LIBERO and real-world platforms demonstrate improved video quality with up to 3.97 times acceleration, validating that disentangled video generation can be an efficient embodied world model for robotic manipulation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## AdaJEPA: An Adaptive Latent World Model

- **arXiv**: <https://export.arxiv.org/abs/2606.32026v1>
- **ID**: `2606.32026v1`
- **分类**: cs.LG, cs.AI
- **作者**: Ying Wang, Oumayma Bounou, Yann LeCun, Mengye Ren
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [AdaJEPA An Adaptive Latent World Model.pdf](../pdfs/AdaJEPA An Adaptive Latent World Model.pdf)

### 摘要（自动抓取）

Latent world models enable planning from high-dimensional observations by predicting future states in a compact latent space. However, these models are typically kept frozen at test time: when their predictions become inaccurate, planning can fail, especially under test-time distribution shift. To address this, we propose AdaJEPA, an adaptive latent world model that performs test-time adaptation within the closed loop of model predictive control (MPC). After training, AdaJEPA plans and executes the first action chunk, uses the observed next-state transition as a self-supervised adaptation signal, and replans with the updated model. This closed-loop update continuously recalibrates the world model without additional expert demonstrations. Across a range of goal-reaching tasks, AdaJEPA substantially improves planning success with as few as one gradient step per MPC replanning step.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

