---
date: 2026-04-24
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-04-24（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604231600 TO 202604241559])
```

## Beyond Patient Invariance: Learning Cardiac Dynamics via Action-Conditioned JEPAs

- **arXiv**: <https://export.arxiv.org/abs/2604.22618v1>
- **ID**: `2604.22618v1`
- **分类**: cs.LG
- **作者**: Jose Geraldo Fernandes, Luiz Facury, Pedro Robles Dutenhefner, Wagner Meira
- **总结状态**: 已总结
- **标签**: 世界模型, 潜在动力学, 动力学建模, 数据集
- **PDF**: [Beyond Patient Invariance Learning Cardiac Dynamics via Action-Conditioned JEPAs.pdf](../pdfs/Beyond Patient Invariance Learning Cardiac Dynamics via Action-Conditioned JEPAs.pdf)

### 一、论文元数据

- **标题：** Beyond Patient Invariance: Learning Cardiac Dynamics via Action-Conditioned JEPAs
- **核心机构：** 未提取
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **Beyond Patient Invariance**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 潜在动力学, 动力学建模, 数据集

### 二、破局点 (The Gap)

- **已有共识/做法：** Self-supervised learning in healthcare has largely relied on invariance-based objectives, which maximize similarity between different views of the same patient.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **Beyond Patient Invariance** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
- **关键模块 2：** 通过实验基准、仿真/真实平台或消融分析验证关键设计对成功率、鲁棒性、效率或安全性的贡献。

### 四、核心认知与发现 (Key Insights)

- **从离线能力走向闭环可靠性：** 论文关注的不只是模型是否能生成答案，而是结果能否在连续决策、真实扰动或部署约束下稳定工作。
- **显式结构仍然重要：** 记忆、物理约束、动作条件、评测协议或控制模型等结构化设计，是提升具身系统可信度的关键抓手。
- **对后续研究的价值：** 可作为构建更安全、更可评测、更可迁移的 世界模型 系统的参考模块或基准。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- 摘要层面通常还不足以判断跨平台、跨任务和极端长尾场景下的稳定性，真实部署价值需要进一步看实验设置与失败案例。
- 若方法依赖特定仿真器、数据集、控制器或标注协议，迁移到开放环境时可能面临分布偏移。

**⚠️ 论证瑕疵：**

- 当前信息主要来自摘要，机构、完整实验细节和负结果仍需结合 PDF 正文进一步核验。

**🚀 下一步高价值方向 (Next Steps)：**

- 重点补读实验设计、消融实验和失败案例，判断该方法是否适合沉淀为你的 VLA / World Model / UAV 技术路线组件。
- 若与现有项目相关，可进一步抽取数据格式、评测指标和可复现实验配置。
---

## OccDirector: Language-Guided Behavior and Interaction Generation in 4D Occupancy Space

- **arXiv**: <https://export.arxiv.org/abs/2604.22240v1>
- **ID**: `2604.22240v1`
- **分类**: cs.CV
- **作者**: Zhuding Liang, Tianyi Yan, Dubing Chen, Jiasen Zheng, Huan Zheng, Cheng-zhong Xu, Yida Wang, Kun Zhan, Jianbing Shen
- **总结状态**: 已总结
- **标签**: 世界模型, 长程任务, 占据建模, 评测基准, 动力学建模, 数据集
- **PDF**: [OccDirector Language-Guided Behavior and Interaction Generation in 4D Occupancy Space.pdf](../pdfs/OccDirector Language-Guided Behavior and Interaction Generation in 4D Occupancy Space.pdf)

### 一、论文元数据

- **标题：** OccDirector: Language-Guided Behavior and Interaction Generation in 4D Occupancy Space
- **核心机构：** SKL-IOTSC, CIS, University
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **OccDirector**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 长程任务, 占据建模, 评测基准, 动力学建模, 数据集

### 二、破局点 (The Gap)

- **已有共识/做法：** Generative world models increasingly rely on 4D occupancy for realistic autonomous driving simulation.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **OccDirector** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
- **关键模块 2：** 通过实验基准、仿真/真实平台或消融分析验证关键设计对成功率、鲁棒性、效率或安全性的贡献。

### 四、核心认知与发现 (Key Insights)

- **从离线能力走向闭环可靠性：** 论文关注的不只是模型是否能生成答案，而是结果能否在连续决策、真实扰动或部署约束下稳定工作。
- **显式结构仍然重要：** 记忆、物理约束、动作条件、评测协议或控制模型等结构化设计，是提升具身系统可信度的关键抓手。
- **对后续研究的价值：** 可作为构建更安全、更可评测、更可迁移的 世界模型 系统的参考模块或基准。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- 摘要层面通常还不足以判断跨平台、跨任务和极端长尾场景下的稳定性，真实部署价值需要进一步看实验设置与失败案例。
- 若方法依赖特定仿真器、数据集、控制器或标注协议，迁移到开放环境时可能面临分布偏移。

**⚠️ 论证瑕疵：**

- 当前信息主要来自摘要，机构、完整实验细节和负结果仍需结合 PDF 正文进一步核验。

**🚀 下一步高价值方向 (Next Steps)：**

- 重点补读实验设计、消融实验和失败案例，判断该方法是否适合沉淀为你的 VLA / World Model / UAV 技术路线组件。
- 若与现有项目相关，可进一步抽取数据格式、评测指标和可复现实验配置。
---

## A Co-Evolutionary Theory of Human-AI Coexistence: Mutualism, Governance, and Dynamics in Complex Societies

- **arXiv**: <https://export.arxiv.org/abs/2604.22227v1>
- **ID**: `2604.22227v1`
- **分类**: cs.CY, cs.AI, cs.HC, cs.NE
- **作者**: Somyajit Chakraborty
- **总结状态**: 已总结
- **标签**: 世界模型, 安全评测, 动力学建模, 基础模型
- **PDF**: [A Co-Evolutionary Theory of Human-AI Coexistence Mutualism, Governance, and Dynamics in Complex Societies.pdf](../pdfs/A Co-Evolutionary Theory of Human-AI Coexistence Mutualism, Governance, and Dynamics in Complex Societies.pdf)

### 一、论文元数据

- **标题：** A Co-Evolutionary Theory of Human-AI Coexistence: Mutualism, Governance, and Dynamics in Complex Societies
- **核心机构：** School of Chemistry and Chemical Engineering; Shanghai Jiao Tong University
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **A Co-Evolutionary Theory of Human-AI Coexistence**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 安全评测, 动力学建模, 基础模型

### 二、破局点 (The Gap)

- **已有共识/做法：** Classical robot ethics is often framed around obedience, most famously through Asimov's laws.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **A Co-Evolutionary Theory of Human-AI Coexistence** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
- **关键模块 2：** 通过实验基准、仿真/真实平台或消融分析验证关键设计对成功率、鲁棒性、效率或安全性的贡献。

### 四、核心认知与发现 (Key Insights)

- **从离线能力走向闭环可靠性：** 论文关注的不只是模型是否能生成答案，而是结果能否在连续决策、真实扰动或部署约束下稳定工作。
- **显式结构仍然重要：** 记忆、物理约束、动作条件、评测协议或控制模型等结构化设计，是提升具身系统可信度的关键抓手。
- **对后续研究的价值：** 可作为构建更安全、更可评测、更可迁移的 世界模型 系统的参考模块或基准。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- 摘要层面通常还不足以判断跨平台、跨任务和极端长尾场景下的稳定性，真实部署价值需要进一步看实验设置与失败案例。
- 若方法依赖特定仿真器、数据集、控制器或标注协议，迁移到开放环境时可能面临分布偏移。

**⚠️ 论证瑕疵：**

- 当前信息主要来自摘要，机构、完整实验细节和负结果仍需结合 PDF 正文进一步核验。

**🚀 下一步高价值方向 (Next Steps)：**

- 重点补读实验设计、消融实验和失败案例，判断该方法是否适合沉淀为你的 VLA / World Model / UAV 技术路线组件。
- 若与现有项目相关，可进一步抽取数据格式、评测指标和可复现实验配置。
---

## dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model

- **arXiv**: <https://export.arxiv.org/abs/2604.22152v1>
- **ID**: `2604.22152v1`
- **分类**: cs.RO
- **作者**: Yaxuan Li, Zhongyi Zhou, Yefei Chen, Yaokai Xue, Yichen Zhu
- **总结状态**: 已总结
- **标签**: 世界模型, 长程记忆, 扩散模型
- **PDF**: [dWorldEval Scalable Robotic Policy Evaluation via Discrete Diffusion World Model.pdf](../pdfs/dWorldEval Scalable Robotic Policy Evaluation via Discrete Diffusion World Model.pdf)

### 一、论文元数据

- **标题：** dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model
- **核心机构：** 未提取
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **dWorldEval**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 长程记忆, 扩散模型

### 二、破局点 (The Gap)

- **已有共识/做法：** Evaluating robotics policies across thousands of environments and thousands of tasks is infeasible with existing approaches.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **dWorldEval** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
- **关键模块 2：** 通过实验基准、仿真/真实平台或消融分析验证关键设计对成功率、鲁棒性、效率或安全性的贡献。

### 四、核心认知与发现 (Key Insights)

- **从离线能力走向闭环可靠性：** 论文关注的不只是模型是否能生成答案，而是结果能否在连续决策、真实扰动或部署约束下稳定工作。
- **显式结构仍然重要：** 记忆、物理约束、动作条件、评测协议或控制模型等结构化设计，是提升具身系统可信度的关键抓手。
- **对后续研究的价值：** 可作为构建更安全、更可评测、更可迁移的 世界模型 系统的参考模块或基准。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- 摘要层面通常还不足以判断跨平台、跨任务和极端长尾场景下的稳定性，真实部署价值需要进一步看实验设置与失败案例。
- 若方法依赖特定仿真器、数据集、控制器或标注协议，迁移到开放环境时可能面临分布偏移。

**⚠️ 论证瑕疵：**

- 当前信息主要来自摘要，机构、完整实验细节和负结果仍需结合 PDF 正文进一步核验。

**🚀 下一步高价值方向 (Next Steps)：**

- 重点补读实验设计、消融实验和失败案例，判断该方法是否适合沉淀为你的 VLA / World Model / UAV 技术路线组件。
- 若与现有项目相关，可进一步抽取数据格式、评测指标和可复现实验配置。
---

## Seeing Fast and Slow: Learning the Flow of Time in Videos

- **arXiv**: <https://export.arxiv.org/abs/2604.21931v1>
- **ID**: `2604.21931v1`
- **分类**: cs.CV, cs.AI, cs.GR
- **作者**: Yen-Siang Wu, Rundong Luo, Jingsen Zhu, Tao Tu, Ali Farhadi, Matthew Wallingford, Yu-Chiang Frank Wang, Steve Marschner, Wei-Chiu Ma
- **总结状态**: 已总结
- **标签**: 世界模型, 视频生成, 数据集
- **PDF**: [Seeing Fast and Slow Learning the Flow of Time in Videos.pdf](../pdfs/Seeing Fast and Slow Learning the Flow of Time in Videos.pdf)

### 一、论文元数据

- **标题：** Seeing Fast and Slow: Learning the Flow of Time in Videos
- **核心机构：** Cornell University; National Taiwan University
- **一句话本质：** 这篇论文围绕世界模型 方法改进提出 **Seeing Fast and Slow**，核心是围绕表征、规划、控制或训练流程提出更可部署的改进。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 视频生成, 数据集

### 二、破局点 (The Gap)

- **已有共识/做法：** How can we tell whether a video has been sped up or slowed down?
- **核心痛点：** 现有方法在泛化、效率、鲁棒性或闭环部署上仍有明显短板。
- **本文切入点：** 围绕表征、规划、控制或训练流程提出更可部署的改进。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **Seeing Fast and Slow** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
- **关键模块 2：** 通过实验基准、仿真/真实平台或消融分析验证关键设计对成功率、鲁棒性、效率或安全性的贡献。

### 四、核心认知与发现 (Key Insights)

- **从离线能力走向闭环可靠性：** 论文关注的不只是模型是否能生成答案，而是结果能否在连续决策、真实扰动或部署约束下稳定工作。
- **显式结构仍然重要：** 记忆、物理约束、动作条件、评测协议或控制模型等结构化设计，是提升具身系统可信度的关键抓手。
- **对后续研究的价值：** 可作为构建更安全、更可评测、更可迁移的 世界模型 系统的参考模块或基准。

### 五、致命弱点与演进方向 (Critical Analysis)

**🛑 核心局限 (Limitations)：**

- 摘要层面通常还不足以判断跨平台、跨任务和极端长尾场景下的稳定性，真实部署价值需要进一步看实验设置与失败案例。
- 若方法依赖特定仿真器、数据集、控制器或标注协议，迁移到开放环境时可能面临分布偏移。

**⚠️ 论证瑕疵：**

- 当前信息主要来自摘要，机构、完整实验细节和负结果仍需结合 PDF 正文进一步核验。

**🚀 下一步高价值方向 (Next Steps)：**

- 重点补读实验设计、消融实验和失败案例，判断该方法是否适合沉淀为你的 VLA / World Model / UAV 技术路线组件。
- 若与现有项目相关，可进一步抽取数据格式、评测指标和可复现实验配置。
---

