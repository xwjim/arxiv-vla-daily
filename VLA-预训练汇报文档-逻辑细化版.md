# VLA 预训练汇报文档：逻辑细化版

## 1. 这次汇报到底要回答什么

这次汇报不建议按“最近有哪些 VLA 论文”来展开，而建议围绕三个问题组织：

1. **为什么 VLA 预训练比普通 VLM 预训练更难？**
2. **VLA 预训练的对象，究竟是语义、动作，还是世界动态？**
3. **真正限制 VLA scaling 的瓶颈，究竟在模型规模，还是在动作/世界接口？**

这样组织的好处是：整场汇报会从“论文罗列”变成“问题驱动”，逻辑更强。

---

## 2. 建议的总主线

建议整场汇报沿着下面这条主线推进：

**VLA 不是把 VLM 接上 action head 这么简单，而是在不断寻找一种最适合控制的中间表征。**

进一步展开，就是一条很清晰的演进链：

**语义预训练 -> 动作预训练 -> 世界动态预训练 -> 后训练与在线适应**

其中真正贯穿始终的，不是“模型越来越大”，而是两个接口问题：

- **语义如何变成可执行动作**
- **动作如何和未来世界变化建立稳定关联**

---

## 3. 第一部分：先把问题性质讲清楚

### 3.1 核心论点

VLA 预训练的难点，本质上不是多模态融合本身，而是“理解”与“控制”之间存在天然错配。

### 3.2 可以直接讲的三类矛盾

#### （1）数据矛盾

- 互联网图文数据很多，但机器人动作数据很少
- 人类视频很多，但机器人闭环交互数据昂贵
- 机器人真正需要的是高价值、可执行、可泛化的轨迹数据

#### （2）目标矛盾

- VLM 关心的是“看懂”和“说对”
- VLA 关心的是“做对”

也就是说，**语义理解能力强，不等于控制性能强**。

#### （3）接口矛盾

- 语言是离散 token
- 动作是连续控制量
- 世界状态又具有动态、时序和物理约束

所以 VLA 的真正难点在于：**如何设计一个既服务语义理解、又服务动作控制的中间接口**。

### 3.3 这一部分的关键支撑材料

- `Interpretation/arxiv-vla-2026-01-06.md`
  - `VLM4VLA: Revisiting Vision-Language-Models in Vision-Language-Action Models`

### 3.4 这一部分的收束句

因此，VLA 的问题不是“能不能把 VLM 用到机器人上”，而是“VLM 学到的表征，能否转化为控制所需的表征”。

---

## 4. 第二部分：预训练对象在发生什么演进

这一部分建议作为全场的主体。

### 4.1 第一阶段：语义预训练

最早的思路非常直接：

> 既然 VLM 已经学到了通用视觉语言知识，那么把它迁移到机器人控制应该就够了。

这一路线的价值在于：

- 能快速复用成熟 VLM
- 工程起点低
- 让 VLA 具备较强的指令理解和视觉 grounding 能力

但它的局限也很明显：

- 学到的是“理解性表征”
- 不一定是“控制性表征”
- 更强的 VLM 不一定带来更强的 VLA

#### 对应证据

- `VLM4VLA`
  - 说明 VLM 通用能力不是机器人控制性能的可靠预测指标
  - 说明视觉模块而非语言模块，更可能是控制迁移的瓶颈

#### 小结

这一阶段告诉我们：**仅靠语义预训练，不足以解决控制问题。**

### 4.2 第二阶段：动作预训练

当研究者发现“看懂”无法直接变成“做对”之后，思路开始转向动作本身：

> 如果互联网图文没有足够的动作知识，那就直接学习动作表征。

这一步的关键变化是：

- 不再只建模当前画面
- 而是建模“状态如何变化”
- 试图学习可迁移的动作先验、latent action、policy prior

#### 对应证据

- `Interpretation/arxiv-vla-2026-01-08.md`
  - `CLAP: Contrastive Latent Action Pretraining for Learning Vision-Language-Action Models from Human Videos`

#### 这一阶段的意义

- 让模型从无标签人类视频中吸收动作变化知识
- 缓解对昂贵机器人动作标注的依赖
- 把预训练对象从视觉语义推进到动作先验

#### 这一阶段的新问题

- latent action 是否真的可控
- 人类动作如何迁移到机器人动作
- 动作离散化是否丢失关键控制信息

#### 小结

这一阶段意味着：**VLA 预训练开始从“看见什么”转向“发生了什么动作变化”。**

### 4.3 第三阶段：世界动态预训练

进一步的问题是：

> 机器人不只是要知道“该做什么动作”，还要知道“动作之后世界会发生什么变化”。

于是研究开始从动作表征继续推进到世界动态表征。

这一阶段的核心特征是：

- 不只学动作本身
- 而是学动作与未来状态演化之间的关系
- 世界模型的价值开始体现为控制导向的动态表征学习

#### 对应证据

- `Interpretation/arxiv-vla-2025-12-08.md`
  - `VideoVLA: Video Generators Can Be Generalizable Robot Manipulators`
- `Interpretation/arxiv-vla-2026-02-11.md`
  - `VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model`

#### 这两类工作分别说明了什么

- `VideoVLA`
  - 说明视频生成模型学到的动态先验，可能比纯理解模型更适合开放环境泛化
- `VLA-JEPA`
  - 说明世界模型不一定非要预测像素，而可以预测未来潜在状态
  - 说明世界模型的核心价值可能在训练时学到更干净、更控制友好的动态表征

#### 小结

这一阶段的本质，是把预训练对象进一步推进到：

**action -> future state -> dynamics**

也就是从动作表征进入“世界-动作耦合表征”。

### 4.4 这一部分的总收束

所以第二部分的核心结论可以直接讲成一句话：

**VLA 预训练的主线，不是单纯把 backbone 做大，而是预训练对象从语义表征，逐步迁移到动作表征，再迁移到世界动态表征。**

---

## 5. 第三部分：真正的瓶颈在 action/world interface

这一部分建议作为整场汇报最“尖锐”的部分，因为它决定你对领域的判断是否足够深入。

### 5.1 核心判断

当前真正限制 VLA scaling 的，越来越不像是 backbone 本身，而更像是：

- **action representation**
- **action tokenization**
- **action generation efficiency**
- **action 与 world dynamics 的接口设计**

### 5.2 三篇很适合连起来讲的论文

#### （1）The Compression Gap

对应材料：

- `Interpretation/arxiv-vla-2026-04-04.md`
  - `The Compression Gap: Why Discrete Tokenization Limits Vision-Language-Action Model Scaling`

它说明：

- 如果动作先被压进固定容量的离散 codebook
- 那么视觉编码器升级带来的信息收益，可能会在动作离散化环节被截断

也就是说：

**不是视觉 backbone 没变强，而是动作接口吃不下更多信息。**

#### （2）ActionCodec

对应材料：

- `Interpretation/arxiv-vla-2026-02-17.md`
  - `ActionCodec: What Makes for Good Action Tokenizers`

它进一步把问题推进了一步：

- 动作 tokenizer 的目标不该只看重建误差
- 更应该看它是否有利于下游 VLA 优化
- 编码稳定性、topology、token overlap 这些训练友好性指标，可能比重建精度更关键

这说明：

**动作编码器不是一个后处理模块，而是 VLA 学习过程的一部分。**

#### （3）Characterizing VLA Models

对应材料：

- `Interpretation/arxiv-vla-2026-03-01.md`
  - `Characterizing VLA Models: Identifying the Action Generation Bottleneck for Edge AI Architectures`

它从系统角度提醒我们：

- 动作生成不仅是表征问题
- 还是推理延迟、内存带宽、实时部署的问题

这说明 action bottleneck 同时存在于：

- 表征层
- 训练层
- 系统实现层

### 5.3 这一部分的结论句

所以真正的瓶颈不是“模型不够大”，而是：

**action interface 既决定了模型能学到什么，也决定了模型最终能跑到什么程度。**

---

## 6. 第四部分：预训练不是终点，而是闭环系统的起点

如果前三部分回答的是“预训练在学什么”，这一部分回答的就是：

> 为什么只讲预训练还不够？

### 6.1 从 pretrain 走向 post-train

越来越多工作说明，VLA 的真正能力形成，不是一次性预训练完成，而是：

**pretrain -> post-train -> online adapt**

### 6.2 世界模型开始扮演“后训练引擎”

#### 对应材料

- `Interpretation/arxiv-vla-2026-02-15.md`
  - `WoVR: World Models as Reliable Simulators for Post-Training VLA Policies with RL`
- `Interpretation/arxiv-vla-2026-03-11.md`
  - `World2Act: Latent Action Post-Training via Skill-Compositional World Models`
- `Interpretation/arxiv-vla-2026-03-09.md`
  - `AtomVLA: Scalable Post-Training for Robotic Manipulation via Predictive Latent World Models`

#### 这组论文合起来表达的逻辑

- 世界模型不一定只是在测试时“脑补未来”
- 更重要的价值可能是：
  - 作为 post-training 的监督信号来源
  - 作为 RL 后训练的模拟器
  - 作为长任务分解与中间目标构造器

#### 可直接总结成一句话

**世界模型的价值，越来越像“训练基础设施”，而不只是“推理模块”。**

### 6.3 持续学习与在线适应开始进入主舞台

#### 对应材料

- `Interpretation/arxiv-vla-2026-03-12.md`
  - `Simple Recipe Works: Vision-Language-Action Models are Natural Continual Learners with Reinforcement Learning`

这类工作说明：

- VLA 并不是只能离线学完再部署
- 大模型、LoRA、在策略 RL 的组合，可能让 VLA 天然具备持续学习能力

这意味着未来的强 VLA 更像：

- 可以更新
- 可以再训练
- 可以在线修正

而不是一个固定静态模型。

### 6.4 世界模型与仿真预训练的协同

#### 对应材料

- `Interpretation/arxiv-vla-2026-03-17.md`
  - `Simulation Distillation: Pretraining World Models in Simulation for Rapid Real-World Adaptation`

这类工作强调：

- 任务结构可以在仿真中学
- 真实世界适应只需要对变化的局部动力学做轻量修补

所以未来路线不是简单的 end-to-end real-world scaling，而更可能是：

**simulation pretraining + world model adaptation + real-world correction**

### 6.5 数据引擎的角色

即使当前主文档中这一块写得较简略，你的本地 PDF 中也已经有直接相关材料：

- `Seed2Scale: A Self-Evolving Data Engine for Embodied AI via Small to Large Model Synergy and Multimodal Evaluation`

这一类工作补足的是最后一块拼图：

- 机器人数据不能只靠人工示教
- 数据生产、筛选、评估、回流会成为系统能力的一部分

### 6.6 这一部分的收束句

未来真正有效的 VLA 体系，不是单点式预训练，而是：

**表征学习 + 世界模型 + 后训练 + 数据引擎 + 在线适应**

的闭环协同。

---

## 7. 可以直接用于汇报的四个核心判断

### 判断 1

**VLM 的语义能力不能直接等价为 VLA 的控制能力。**

对应证据：`VLM4VLA`

### 判断 2

**VLA 预训练的主线，是从语义预训练走向动作预训练，再走向世界动态预训练。**

对应证据：`CLAP`、`VideoVLA`、`VLA-JEPA`

### 判断 3

**当前最核心的扩展瓶颈，不只是模型规模，而是 action/world interface。**

对应证据：`The Compression Gap`、`ActionCodec`、`Characterizing VLA Models`

### 判断 4

**下一阶段的能力提升，主要来自系统级闭环，而不只是一次性预训练。**

对应证据：`WoVR`、`World2Act`、`AtomVLA`、`Simple Recipe Works`、`Simulation Distillation`、`Seed2Scale`

---

## 8. 如果你要做成 PPT，建议这样拆页

1. **问题定义：VLA 预训练到底难在哪里**
2. **为什么 VLM 强，不等于 VLA 强**
3. **第一阶段：语义预训练**
4. **第二阶段：动作预训练**
5. **第三阶段：世界动态预训练**
6. **真正瓶颈：action/world interface**
7. **从预训练走向后训练与在线适应**
8. **总结：VLA 的未来是系统级 scaling**

---

## 9. 一段更适合开场的版本

本次汇报我想讨论的不是“最近有哪些 VLA 论文”，而是一个更核心的问题：**VLA 预训练到底在预训练什么。** 我的基本判断是，VLA 预训练的发展主线并不是把 VLM 简单迁移到机器人上，而是在不断寻找一种最适合控制的中间表征。沿着这条线，现有工作大致经历了从语义预训练、到动作预训练、再到世界动态预训练的演进；而当前真正限制 VLA scaling 的，也越来越像是 action/world interface，而不只是模型规模本身。

---

## 10. 一段更适合结尾的版本

总结来说，我认为 VLA 预训练的真正问题，不是“模型够不够大”，而是“表征是否足够面向控制”。从这个角度看，VLA 领域正在经历一个明确的范式转移：预训练对象从语义扩展到动作，再扩展到世界动态；能力形成机制从一次性预训练，走向 world model、post-training、data engine 和 online adaptation 协同的闭环体系。未来更强的 VLA，不会只是一个更大的模型，而会是一个更完整的系统。
