# VLA 预训练领导汇报终版

- 生成时间：2026-04-15 13:58:31
- 来源：从 `pdfs/` 下全量扫描的 1230 篇 PDF 中，先形成 66 篇主报告，再压缩到本版 12 篇终版。
- 适用场景：面向领导汇报，强调主线、趋势和判断，不追求把同类论文堆满。

## 一、建议汇报结论

- VLA 预训练的核心矛盾不是“VLM 再做大一点”，而是机器人数据稀缺与动作接口不稳定。
- 数据路线正在从 teleoperation 扩展到 egocentric human videos、latent action、人机互模仿和自动构造数据。
- 当前最值得跟踪的技术变量是 `action interface`，包括 latent action、action manifold、discretized action 等。
- 训练范式正在从单次预训练走向 `pretrain -> embodiment-specific post-train -> online adapt`。
- 评测口径仍未完全统一，因此 benchmark / review 类论文在汇报里很重要，它们决定我们如何解读“谁更强”。

## 二、建议汇报顺序

1. 先讲 `VLM4VLA` 和 `VLANeXt`，建立“为什么 VLA 预训练不是简单 VLM 延伸”的总框架。
2. 再讲 `CLAP`、`Developing...Egocentric Videos`、`EgoScale`、`MiVLA`，说明数据扩容主线。
3. 然后讲 `ABot-M0`、`LAP`、`Unified Embodied...Discretized Pre-training`，说明动作接口主线。
4. 用 `Xiaomi-Robotics-0` 回答“产业界怎么做”。
5. 最后用 `Benchmarking the Generality...` 和 `VLA Review` 收口，说明当前共识与缺口。

## 先讲清楚问题定义

- 这一部分要讲的核心：这一组论文用来回答两个最关键的问题：为什么 VLA 不能简单等同于 VLM 的延伸，以及当前社区公认的强 recipe 到底长什么样。

### 1. VLM4VLA Revisiting Vision-Language-Models in Vision-Language-Action Models

- 入选理由：最适合回答“VLM 做大为什么不等于 VLA 变强”。
- 汇报话术：可直接对领导讲：通用 VLM 能力不是控制能力的可靠代理，VLA 预训练必须面向动作接口和机器人数据重构。
- 训练数据：数据源：BridgeData V2 / BridgeData / Fractal / LIBERO / CALVIN / SIMPLER / OpenVLA / RT-2 / pi0；规模线索：1000 task / 5 tasks / 10 tasks / 1 Task / 2 Task / 3 Task
- 数据处理：In this section, we detail the method for con- structing a consistent VLA from various VLMs Action Chunk within the VLM4VLA framework, as illustrated Finetuned in Figure 2. Our objective is to build a VLA ar- Auxiliary…
- 训练阶段：(2025) and fine-tuned Qwen3VL-4B to predict these action tokens autoregressively (formatting it as a QA task). We then either freeze or unfreeze the vision encoder during VLM fine-tuning, and use the fine-tuned VLM as t…
- 训练超参数：learning rate of 2 × 10−5 for all models, and an action；learning rate of 5 × 10−5 , and an；learning rate, and batch；Learning Rate (LR) choice, we performed a sweep using values；Learning Rate 1e-5 2e-5 5e-5 1e-4；learning…

### 2. VLANeXt Recipes for Building Strong VLA Models

- 入选理由：属于系统化训练 recipe，总结了当前较成熟的设计组合。
- 汇报话术：可用作主线结论：现在更重要的不是盲目扩大模型，而是把基础组件、感知输入和动作建模 recipe 组合对。
- 训练数据：数据源：Open X-Embodiment / DROID / LIBERO / LIBERO-plus / ALOHA / OpenVLA / RT-2 / pi0 / BEHAVIOR；规模线索：10 tasks / 10,030 demonstrations / 50 episodes
- 数据处理：Figure 3. Design choices for the policy module. Figure 4. Design choices for the VLM-Policy connection. on LIBERO and LIBERO-plus (Liu et al., 2023; Fei et al., Action Chunking. Our baseline predicts actions one step 20…
- 训练阶段：plus benchmarks (which include unseen perturbations) for Table 2. LIBERO benchmark performance. The results are shown in success rate (%). S, O, G, L: Spatial, Object, Goal, and Long the corresponding suite. For fair co…
- 训练超参数：learning rate is；learning rate of 1 × 10−4；Learning Rate 1；batch size of 256；Batch Size 256；Optimizer AdamW

## 再讲数据扩容路线

- 这一部分要讲的核心：这一组论文共同说明，VLA 预训练的真正稀缺资源不是图片或文本，而是带动作约束的高质量 embodied data，因此扩充数据源是主战场。

### 3. CLAP Contrastive Latent Action Pretraining for Learning Vision-Language-Action Models from Human Videos

- 入选理由：代表“从 human videos 学 latent action”的路线。
- 汇报话术：可讲成一句话：如果昂贵机器人演示不够，就要把人类视频转成可迁移的动作先验。
- 训练数据：数据源：Open X-Embodiment / DROID / BridgeData V2 / BridgeData / BC-Z / LIBERO / Ego4D / OpenVLA / RT-2 / BEHAVIOR；规模线索：3,000 hours / 1,500 hours / 50 hours / 90 hours / 190 hours / 380 hours
- 数据处理：Algorithm 2 Vision-Dynamic VQ-VAE (VD-VAE) Training Algorithm 3 CLAP-NTP Training Require: Paired video frames Dvid , Labeled Robot Data Drob , Require: Robot Data Drob , Human Videos Dhum , Trained VD- Frozen Act-Codeb…
- 训练阶段：TABLE V: Ablation study on the LIBERO benchmark. We that large-scale human data is indispensable for semantic compare the impact of using only low-level features versus generalization beyond robotic data. multi-scale hi…
- 训练超参数：learning rate of 5 × 10−5 with a linear warmup over the；learning rate to a minimum of 5 × 10−6；learning rate of 5×10−5 and a 1,000-step warmup；Learning Rate 2 × 10−5；Learning Rate 1 × 10−3；Learning Rate 2 × 10−4

### 4. Developing Vision-Language-Action Model from Egocentric Videos

- 入选理由：直接证明 raw egocentric videos 能成为 VLA 预训练数据源。
- 汇报话术：适合强调：第一视角人类视频正在成为替代遥操作数据的重要来源。
- 训练数据：数据源：Open X-Embodiment / OXE / DROID / BridgeData V2 / BridgeData / BC-Z / Fractal / Ego4D / Ego-Exo4D / HD-EPIC / Nymeria / ALOHA / SIMPLER / OpenVLA / RoboTurk / BEHAVIOR / Something-Something / EgoMimic / EgoVLA；规模线索：…
- 数据处理：motion understanding, resulting in fewer scenarios involving those of the background, as shown in Fig. 3. This is because hand–object interactions. Unlike the other datasets, Ego4D detection errors typically occur on no…
- 训练阶段：object pose trajectory τ : A. Experimental Setup   Manipulation Task Details. For simulated environments, at = ∆xt , ∆yt , ∆zt , ∆rot6Dt . (2) we use SIMPLER [20] BridgeData V2 environment, which contains four pick-an…
- 训练超参数：learning rate of 5 × 10−5；batch size of 1,024；batch size of 128 for the real-；optimizer with bfloat16 precision under；AdamW [59] optimizer with bfloat16 precision under；weight decay regularization,”

### 5. EgoScale Scaling Dexterous Manipulation with Diverse Egocentric Human Data

- 入选理由：代表“大规模 egocentric human data + 三阶段训练”的扩展型路线。
- 汇报话术：这篇最适合讲规模：人类视频数据一旦上规模，能显著改变 dexterous manipulation 预训练效果。
- 训练数据：数据源：Open X-Embodiment / OXE / BridgeData V2 / BridgeData / RT-2 / BEHAVIOR / EgoMimic / EgoVLA；规模线索：20,854 hours / 20,854 Hours / 50 Hours / 4 Hours
- 数据处理：(Task V) (Syringe) Syringe Liquid Transfer. This is the most challenging task, requiring the robot to pick up a syringe, draw liquid from tube A, inject it into tube B, and discard the syringe into a trash can. The task…
- 训练阶段：3.2. Large-Scale Human Pretraining Is Key to Strong Dexterous Manipulation Policy Performance To evaluate the impact of large-scale human pretraining and aligned mid-training on policy learning efficiency, we compare fo…
- 训练超参数：learning rate 5 × 10−5 ,；learning rate 3 × 10−5 , freezing the vision-language backbone while only updating the vision；learning rate 3 × 10−5；batch size of 8,192 and learning rate 5 × 10−5 ,；batch size 2,048 and；batch s…

### 6. MiVLA Towards Generalizable Vision-Language-Action Model with Human-Robot Mutual Imitation Pre-training

- 入选理由：把 human data 和 robot data 的关系从“替代”推进到“互相模仿”。
- 汇报话术：可作为升级观点：未来不是只做人类数据迁移，而是做人机双向对齐的预训练。
- 训练数据：数据源：LIBERO / Ego4D / OpenVLA / RT-2 / pi0 / BEHAVIOR / ManiSkill / EgoVLA；规模线索：10,000 hours / 900 hours / 3,000 hours / 2500 demonstrations / 12 tasks
- 数据处理：to next actions {Ar , Ah }: action chunk with a size of H is encoded into a vector using MLPs; then, the diffusion transformer takes as input noised Pθ (Ar | Ort ), Pθ (Ah | Oht ) (1) actions while observation tokens (i…
- 训练阶段：but also the capabilities for long-horizon collaborative con- Settings RobotWin2.0 Piper ARX LocoMan trol. For each task, we collect 30 demonstrations for post- From scratch 37% 0% 25% 0% training. During testing, we us…
- 训练超参数：learning rate is set to 1e-4；learning rate；learning rate, weight decay) remain consistent with that in；batch size of 32 per GPU, resulting in a total effective；batch size of 128；batch size of 16, for an

## 接着讲动作接口

- 这一部分要讲的核心：这部分最值得领导关注，因为很多论文已经在反复证明：VLA 的上限常常由 action interface 决定，而不是只由 backbone 决定。

### 7. ABot-M0 VLA Foundation Model for Robotic Manipulation with Action Manifold Learning

- 入选理由：代表 action manifold / action interface 路线。
- 汇报话术：适合讲：动作表示不是工程细节，而是决定预训练上限的核心接口问题。
- 训练数据：数据源：Open X-Embodiment / OXE / BridgeData V2 / BridgeData / LIBERO / LIBERO-plus / ALOHA / OpenVLA / RT-2 / pi0 / BEHAVIOR；规模线索：9,500 hours / 71.6 Task / 1,000 trajectories / 30 trajectories / 2500 demonstrations / 25000…
- 数据处理：mixed-language instructions via machine translation to ensure instruction validity and linguistic consistency. To address frame-instruction misalignment, we resolve index mismatches by recomputing temporal alignment acr…
- 训练阶段：Stage 2: Space-Aware Supervised Fine-Tuning via Knowledge Injection. Although the pre-trained model generalizes well across many tasks, it still exhibits accumulated errors and unstable spatial alignment in high-precisi…
- 训练超参数：learning rate；learning rate of 1e-5, a total batch size of；batch size of；Horizon；Horizon Task；horizon task decompositions across multiple robot morphologies, they are prioritized to

### 8. LAP Language-Action Pre-Training Enables Zero-shot Cross-Embodiment Transfer

- 入选理由：代表 language-action pretraining 和跨 embodiment transfer。
- 汇报话术：可讲成一句话：预训练如果直接对齐 language 与 action，就更有机会跨机器人形态迁移。
- 训练数据：数据源：Open X-Embodiment / OXE / DROID / BridgeData V2 / BridgeData / BC-Z / Fractal / LIBERO / Ego4D / OpenVLA / RT-2 / RoboNet / BEHAVIOR / EgoVLA；规模线索：3,000 hours / 50 hours / 64 hours / 24 hours / 20 demonstrations
- 数据处理：B.6 Image Pre-processing and Augmentation All input images are first resized (with padding) to a fixed resolution before further processing. During training, we apply augmentation to images from all camera views. Images…
- 训练阶段：signals, standard VLA training can induce distributional mismatch and degrade pre-trained knowledge [23–25]. Motivated by this observation, we propose Language-Action Pre-training (LAP), a simple pre-training recipe for…
- 训练超参数：Learning rate 1 × 10−4；learning rate over {1 × 10−4 , 5 × 10−5 } and the batch size over {1024, 2048}；learning rate of 1 × 10−4 , action horizon of 16, and loss weight of λ = 0；learning rate and batch size；batch size of…

### 9. Unified Embodied VLM Reasoning with Robotic Action via Autoregressive Discretized Pre-training

- 入选理由：代表 discretized action / autoregressive pretraining 的统一建模思路。
- 汇报话术：适合强调：社区正在尝试把 embodied reasoning 和 action tokenization 合到同一套预训练框架里。
- 训练数据：数据源：OpenVLA / RT-2 / BEHAVIOR
- 数据处理：encoder in our context. Architecturally, t is injected into the MM-DiT blocks via AdaLN modulation, allowing of discrete action tokens, the VLM backbone learns to the model to adapt its predictions across the integratio…
- 训练阶段：bodied reasoning be measured independently of action aft bility, tokenizer architecture, and training strategy. We investigate four core research questions. First, can em- annotated and linguistically rewritten to ensur…
- 训练超参数：horizon, precise ma- generalization through π0 -style co-training or purely；horizon planning [38], [39], or；resolution required for；sequence lengths [23]；action chunks decoding head [56]；horizon

## 补一篇工业落地样板

- 这一部分要讲的核心：领导通常会追问‘有没有能落地的开源样板’，这篇适合作为工业与开源结合的锚点。

### 10. Xiaomi-Robotics-0 An Open-Sourced Vision-Language-Action Model with Real-Time Execution

- 入选理由：兼具 open-source、real-time execution 和工程规模信息。
- 汇报话术：可讲：行业已经开始把 VLA 从研究原型推进到可实时运行的系统级产品形态。
- 训练数据：数据源：Open X-Embodiment / OXE / DROID / BridgeData V2 / BridgeData / Fractal / LIBERO / CALVIN / SIMPLER / OpenVLA / RT-2 / BEHAVIOR；规模线索：400 hours / 5 tasks / 7 Tasks
- 数据处理：2.2.1 Pre-training We perform pre-training in two steps. In the first step, our goal is to endow the VLM with action-generation capability by training it to predict action chunks from observation images, language instru…
- 训练阶段：1 Introduction Vision-language-action (VLA) models have emerged as a new paradigm for effective robot policy learning [3, 24, 76]. Building upon pre-trained vision-language models (VLMs), VLA models provide a unified fr…
- 训练超参数：batch size of 32,768；batch size of 2,048 for 40k steps on Lego；optimizer and DeepSpeed ZeRO-2；AdamW [41] as the optimizer and DeepSpeed ZeRO-2；weight decay regularization；action chunks to ensure continuous and seamless…

## 最后用评测和综述收口

- 这一部分要讲的核心：最后两篇不是为了讲方法细节，而是为了收口：当前 VLA 预训练到底怎么比、比什么、缺什么。

### 11. Benchmarking the Generality of Vision-Language-Action Models

- 入选理由：代表“评测口径还不统一，但已经开始关注 generality”这一现实。
- 汇报话术：适合讲：没有统一 benchmark，很多预训练结论很容易被 task selection 和 protocol 扭曲。
- 训练数据：数据源：Open X-Embodiment / OXE / DROID / LIBERO / CALVIN / Ego4D / OpenVLA / pi0 / BEHAVIOR；规模线索：10,000 hours / 3,000 hours / 7 robot
- 数据处理：Fig. 6 and Fig.7 report baseline normalized AMSE (BNAMSE) and baseline normalized AMAE across Open-X morphologies. Surprisingly, GPT-5 achieves the lowest BNAMAE among the three models. However, it is worth noting that…
- 训练阶段：PIQA You are evaluating Question: "goal": "How Binary 0 EMR physical to make a simple ice pack choice (0 or commonsense. Given at home", "sol1": "Take a 1) two choices, select the clean sock and fill it with physically…
- 训练超参数：horizon compositional tasks are already represented in our Open-X subset；horizon task diversity；horizons；Horizon Robot Manipulation Tasks；Horizon Reasoning for Robotics”；Resolution UI

### 12. Vision-Language-Action Models for Robotics A Review Towards Real-World Applications

- 入选理由：用来补足全景视角，方便领导从单篇论文跳到全行业状态。
- 汇报话术：可作为结束页：VLA 已经形成体系，但距离稳定落地仍卡在数据、动作接口和真实世界泛化。
- 训练数据：数据源：Open X-Embodiment / OXE / DROID / BridgeData V2 / BridgeData / BC-Z / LIBERO / CALVIN / Ego4D / Ego-Exo4D / HD-EPIC / ALOHA / SIMPLER / RoboMimic / OpenVLA / RT-2 / RoboSet / RoboNet / RoboTurk / BEHAVIOR / ManiSkil…
- 数据处理：cally, it employs Prismatic VLM [45], based on LLaMa 2 resulting readout token is processed through an MLP trained (7B) [1], and encodes image inputs using DINOv2 [46] and to predict zt . Finally, only the MLP component…
- 训练阶段：Beyond the primary modalities discussed above, several integrated into VLA models such as ECoT [86] and CoT- VLA models have been proposed to incorporate additional VLA [187]. ECoT addresses a key limitation of typical…
- 训练超参数：batch size；adam, M；adam, D；resolution images, or addi-；horizon tasks；horizon,

## 三、最终建议

- 如果汇报时间只有 10 分钟，主讲 8 篇：`VLM4VLA`、`VLANeXt`、`CLAP`、`Developing...Egocentric Videos`、`EgoScale`、`ABot-M0`、`LAP`、`Xiaomi-Robotics-0`。
- 如果汇报时间有 15 分钟，再补 4 篇：`MiVLA`、`Unified Embodied...Discretized Pre-training`、`Benchmarking the Generality...`、`VLA Review`。
- 这 12 篇已经足够支撑“数据扩容、动作接口、训练 recipe、产业落地、评测口径”五条主线。
