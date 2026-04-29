---
date: 2026-04-23
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-04-23（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND (submittedDate:[202604221600 TO 202604231559])
```

## Hi-WM: Human-in-the-World-Model for Scalable Robot Post-Training

- **arXiv**: <https://export.arxiv.org/abs/2604.21741v1>
- **ID**: `2604.21741v1`
- **分类**: cs.RO
- **作者**: Yaxuan Li, Zhongyi Zhou, Yefei Chen, Yanjiang Guo, Jiaming Liu, Shanghang Zhang, Jianyu Chen, Yichen Zhu
- **总结状态**: 已总结
- **标签**: 世界模型, 动态预测, 仿真评测
- **PDF**: [Hi-WM Human-in-the-World-Model for Scalable Robot Post-Training.pdf](../pdfs/Hi-WM Human-in-the-World-Model for Scalable Robot Post-Training.pdf)

### 一、论文元数据

- **标题：** Hi-WM: Human-in-the-World-Model for Scalable Robot Post-Training
- **核心机构：** Current Robotics, Tsinghua University; Peking University
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **Hi-WM**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 动态预测, 仿真评测

### 二、破局点 (The Gap)

- **已有共识/做法：** Post-training is essential for turning pretrained generalist robot policies into reliable task-specific controllers, but existing human-in-the-loop pipelines remain tied to physical execution: each correction requires robot time, scene setup, resets, and operator supervision in the real world.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **Hi-WM** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
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

## WorldMark: A Unified Benchmark Suite for Interactive Video World Models

- **arXiv**: <https://export.arxiv.org/abs/2604.21686v1>
- **ID**: `2604.21686v1`
- **分类**: cs.CV
- **作者**: Xiaojie Xu, Zhengyuan Lin, Kang He, Yukang Feng, Xiaofeng Mao, Yuanyang Yin, Kaipeng Zhang, Yongtao Ge
- **总结状态**: 已总结
- **标签**: 世界模型, 视频生成, 评测基准
- **PDF**: [WorldMark A Unified Benchmark Suite for Interactive Video World Models.pdf](../pdfs/WorldMark A Unified Benchmark Suite for Interactive Video World Models.pdf)

### 一、论文元数据

- **标题：** WorldMark: A Unified Benchmark Suite for Interactive Video World Models
- **核心机构：** The University; Tokyo Shanghai Innovation Institute
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **WorldMark**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 视频生成, 评测基准

### 二、破局点 (The Gap)

- **已有共识/做法：** Interactive video generation models such as Genie, YUME, HY-World, and Matrix-Game are advancing rapidly, yet every model is evaluated on its own benchmark with private scenes and trajectories, making fair cross-model comparison impossible.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **WorldMark** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
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

## Open-H-Embodiment: A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics

- **arXiv**: <https://export.arxiv.org/abs/2604.21017v1>
- **ID**: `2604.21017v1`
- **分类**: cs.RO, cs.AI
- **作者**: Open-H-Embodiment Consortium, :, Nigel Nelson, Juo-Tung Chen, Jesse Haworth, Xinhao Chen, Lukas Zbinden, Dianye Huang, Alaa Eldin Abdelaal, Alberto Arezzo, Ayberk Acar, Farshid Alambeigi, Carlo Alberto Ammirati, Yunke Ao, Pablo David Aranda Rodriguez, Soofiyan Atar, Mattia Ballo, Noah Barnes, Federica Barontini, Filip Binkiewicz, Peter Black, Sebastian Bodenstedt, Leonardo Borgioli, Nikola Budjak, Benjamin Calmé, Fabio Carrillo, Nicola Cavalcanti, Changwei Chen, Haoxin Chen, Sihang Chen, Qihan Chen, Zhongyu Chen, Ziyang Chen, Shing Shin Cheng, Meiqing Cheng, Min Cheng, Zih-Yun Sarah Chiu, Xiangyu Chu, Camilo Correa-Gallego, Giulio Dagnino, Anton Deguet, Jacob Delgado, Jonathan C. DeLong, Kaizhong Deng, Alexander Dimitrakakis, Qingpeng Ding, Hao Ding, Giovanni Distefano, Daniel Donoho, Anqing Duan, Marco Esposito, Shane Farritor, Jad Fayad, Zahi Fayad, Mario Ferradosa, Filippo Filicori, Chelsea Finn, Philipp Fürnstahl, Jiawei Ge, Stamatia Giannarou, Xavier Giralt Ludevid, Frederic Giraud, Aditya Amit Godbole, Ken Goldberg, Antony Goldenberg, Diego Granero Marana, Xiaoqing Guo, Tamás Haidegger, Evan Hailey, Pascal Hansen, Ziyi Hao, Kush Hari, Kengo Hayashi, Jonathon Hawkins, Shelby Haworth, Ortrun Hellig, S. Duke Herrell, Zhouyang Hong, Andrew Howe, Junlei Hu, Ria Jain, Mohammad Rafiee Javazm, Howard Ji, Rui Ji, Jianmin Ji, Zhongliang Jiang, Dominic Jones, Jeffrey Jopling, Britton Jordan, Ran Ju, Michael Kam, Luoyao Kang, Fausto Kang, Siddhartha Kapuria, Peter Kazanzides, Sonika Kiehler, Ethan Kilmer, Ji Woong, Kim, Przemysław Korzeniowski, Chandra Kuchi, Nithesh Kumar, Alan Kuntz, Federico Lavagno, Yu Chung Lee, Hao-Chih Lee, Hang Li, Zhen Li, Xiao Liang, Xinxin Lin, Jinsong Lin, Chang Liu, Fei Liu, Pei Liu, Yun-hui Liu, Wanli Liuchen, Eszter Lukács, Sareena Mann, Miles Mannas, Brett Marinelli, Sabina Martyniak, Francesco Marzola, Lorenzo Mazza, Xueyan Mei, Maria Clara Morais, Luigi Muratore, Chetan Reddy Narayanaswamy, Michał Naskręt, David Navarro-Alarcon, Cyrus Neary, Chi Kit Ng, Christopher Nguan, David Noonan, Ki Hwan Oh, Tom Christian Olesch, Allison M. Okamura, Justin Opfermann, Matteo Pescio, Doan Xuan Viet Pham, Tito Porras, Hongliang Ren, Ariel Rodriguez Jimenez, Ferdinando Rodriguez y Baena, Septimiu E. Salcudean, Asmitha Sathya, Preethi Satish, Lalithkumar Seenivasan, Jiaqi Shao, Yiqing Shen, Yu Sheng, Lucy XiaoYang Shi, Zoe Soulé, Stefanie Speidel, Mingwu Su, Jianhao Su, Idris Sunmola, Kristóf Takács, Yunxi Tang, Patrick Thornycroft, Yu Tian, Jordan Thompson, Mehmet K. Turkcan, Mathias Unberath, Pietro Valdastri, Carlos Vives, Quan Vuong, Martin Wagner, Farong Wang, Wei Wang, Lidian Wang, Chung-Pang Wang, Guankun Wang, Junyi Wang, Erqi Wang, Ziyi Wang, Tanner Watts, Wolfgang Wein, Yimeng Wu, Zijian Wu, Hongjun Wu, Luohong Wu, Jie Ying Wu, Junlin Wu, Victoria Wu, Kaixuan Wu, Mateusz Wójcikowski, Yunye Xiao, Nan Xiao, Wenxuan Xie, Hao Yang, Tianqi Yang, Yinuo Yang, Menglong Ye, Ryan S. Yeung, Nural Yilmaz, Chim Ho Yin, Michael Yip, Rayan Younis, Chenhao Yu, Sayem Nazmuz Zaman, Milos Zefran, Han Zhang, Yuelin Zhang, Yidong Zhang, Yanyong Zhang, Xuyang Zhang, Yameng Zhang, Joyce Zhang, Ning Zhong, Peng Zhou, Haoying Zhou, Xiuli Zuo, Nassir Navab, Mahdi Azizian, Sean D. Huver, Axel Krieger
- **总结状态**: 已总结
- **标签**: 世界模型, 视频生成, 评测基准, 医疗机器人, 基础模型, 数据集
- **PDF**: [Open-H-Embodiment A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics.pdf](../pdfs/Open-H-Embodiment A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics.pdf)

### 一、论文元数据

- **标题：** Open-H-Embodiment: A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics
- **核心机构：** NVIDIA, Johns Hopkins University; Technical University; Munich,Stanford University; University of Turin,Vanderbilt University; University of Texas at Austin,Balgrist University; Hospital,ETH Zurich, ETH AI Center
- **一句话本质：** 这篇论文围绕环境动力学建模提出 **Open-H-Embodiment**，核心是把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 视频生成, 评测基准, 医疗机器人, 基础模型, 数据集

### 二、破局点 (The Gap)

- **已有共识/做法：** Autonomous medical robots hold promise to improve patient outcomes, reduce provider workload, democratize access to care, and enable superhuman precision.
- **核心痛点：** 只追求视觉逼真或单步预测，难以支撑真实决策、评测和跨场景泛化。
- **本文切入点：** 把动作条件、物理约束、占据空间或评测协议纳入模型，使生成结果更接近可用于控制的世界表示。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **Open-H-Embodiment** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
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

## Relative Entropy Estimation in Function Space: Theory and Applications to Trajectory Inference

- **arXiv**: <https://export.arxiv.org/abs/2604.20775v1>
- **ID**: `2604.20775v1`
- **分类**: cs.LG
- **作者**: Chao Wang, Luca Nepote, Giulio Franzese, Pietro Michiardi
- **总结状态**: 已总结
- **标签**: 世界模型, 评测基准, 潜在动力学, 动力学建模, 数据集
- **PDF**: [Relative Entropy Estimation in Function Space Theory and Applications to Trajectory Inference.pdf](../pdfs/Relative Entropy Estimation in Function Space Theory and Applications to Trajectory Inference.pdf)

### 一、论文元数据

- **标题：** Relative Entropy Estimation in Function Space: Theory and Applications to Trajectory Inference
- **核心机构：** 未提取
- **一句话本质：** 这篇论文围绕评测与基准提出 **Relative Entropy Estimation in Function Space**，核心是构建更贴近交互过程的 benchmark 与诊断指标。用于提升 世界模型 场景下的可靠性、效率或可评测性。
- **标签：** 世界模型, 评测基准, 潜在动力学, 动力学建模, 数据集

### 二、破局点 (The Gap)

- **已有共识/做法：** Trajectory Inference (TI) seeks to recover latent dynamical processes from snapshot data, where only independent samples from time-indexed marginals are observed.
- **核心痛点：** 现有指标往往只看最终成功率，无法揭示安全性、物理合理性和过程失败原因。
- **本文切入点：** 构建更贴近交互过程的 benchmark 与诊断指标。

### 三、核心机制 (How it works)

- **输入 -> 输出：** 面向任务观测、语言/动作条件或系统状态，输出更可执行的策略、预测、评估结果或控制决策。
- **关键模块 1：** 围绕 **Relative Entropy Estimation in Function Space** 的主框架，把感知、表征、规划或控制过程显式组织起来，减少纯反应式策略的脆弱性。
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

