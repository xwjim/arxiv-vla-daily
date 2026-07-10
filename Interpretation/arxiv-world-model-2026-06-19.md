---
date: 2026-06-19
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-06-19（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202606181600 TO 202606191559] OR lastUpdatedDate:[202606181600 TO 202606191559]))
```

## Current World Models Lack a Persistent State Core

- **arXiv**: <https://export.arxiv.org/abs/2606.20545v1>
- **ID**: `2606.20545v1`
- **分类**: cs.CV
- **作者**: Jinpeng Lu, Dexu Zhu, Haoyuan Shi, Linghan Cai, Guo Tang, Yinda Chen, Jie Cao, Duyu Tang, Yi Zhang, Yong Dai, Xiaozhu Ju
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Current World Models Lack a Persistent State Core.pdf](../pdfs/Current World Models Lack a Persistent State Core.pdf)

### 摘要（自动抓取）

World models are increasingly regarded as a decisive step toward artificial general intelligence, yet modeling the physical world demands more than rendering convincing frames on demand: it requires an internal world state that keeps evolving over time, decoupled from observation, so that objects endure and events run to their conclusions whether or not a camera is watching, much as the moon holds to its orbit when no one is looking. This requirement is a blind spot of existing benchmarks, which reward surface properties such as fidelity, motion, and camera controllability while never asking whether a generated world keeps evolving once it is unobserved. We introduce \textbf{WRBench}, the first systematic diagnostic benchmark that treats camera motion as an intervention on observability and resolves evaluation into a human-calibrated chain that asks whether the camera executes the requested interaction, whether the scene stays continuous and identifiable while in view, and whether a returning target remains consistent with the event that was set in motion. Across 9{,}600 videos from 23 models spanning four control paradigms, one finding proves stubborn: current systems maintain the observed world as a tracking shot, resuming a returning target in the state at which it was abandoned rather than advancing the event while it went unseen. Because this failure recurs across control paradigms, model families, and increments of scale, robust world-state evolution does not follow from cleaner imagery, tighter control, richer geometric priors, or sheer parameter count We therefore argue that the stability of the physical state kernel and the consistency of worldlines under viewpoint intervention should become first-class objectives of world-model design, so that a world model captures how the world will unfold rather than how the next frame appears.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

