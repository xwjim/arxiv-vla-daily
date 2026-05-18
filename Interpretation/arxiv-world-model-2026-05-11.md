---
date: 2026-05-11
source: arxiv-api
day_boundary: beijing
track: world-model
track_name: "World Model"
---

# arXiv World Model 日报

研究轨道：**World Model**

检索窗口：2026-05-11（beijing 日历日对应的 `submittedDate` 区间）。

```
((all:"world model" OR all:"world models" OR all:"video world model" OR all:"predictive world model" OR all:"latent dynamics" OR ti:"world model" OR abs:"world model") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CV OR cat:cs.RO)) AND ((submittedDate:[202605101600 TO 202605111559] OR lastUpdatedDate:[202605101600 TO 202605111559]))
```

## DeepSight: Long-Horizon World Modeling via Latent States Prediction for End-to-End Autonomous Driving

- **arXiv**: <https://export.arxiv.org/abs/2605.10564v1>
- **ID**: `2605.10564v1`
- **分类**: cs.CV, cs.RO
- **作者**: Lingjun Zhang, Changjie Wu, Linzhe Shi, Jiangyang Li, Jiaxin Liu, Lei Yang, Hang Zhang, Mu Xu, Hong Wang
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [DeepSight Long-Horizon World Modeling via Latent States Prediction for End-to-End Autonomous Driving.pdf](../pdfs/DeepSight Long-Horizon World Modeling via Latent States Prediction for End-to-End Autonomous Driving.pdf)

### 摘要（自动抓取）

End-to-end autonomous driving systems are increasingly integrating Vision-Language Model (VLM) architectures, incorporating text reasoning or visual reasoning to enhance the robustness and accuracy of driving decisions. However, the reasoning mechanisms employed in most methods are direct adaptations from general domains, lacking in-depth exploration tailored to autonomous driving scenarios, particularly within visual reasoning modules. In this paper, we propose a driving world model that performs parallel prediction of latent semantic features for consecutive future frames in the bird's-eye-view (BEV) space, thereby enabling long-horizon modeling of future world states. We also introduce an efficient and adaptive text reasoning mechanism that utilizes additional social knowledge and reasoning capabilities to further improve driving performance in challenging long-tail scenarios. We present a novel, efficient, and effective approach that achieves state-of-the-art (SOTA) results on the closed-loop Bench2drive benchmark. Codes are available at: https://github.com/hotdogcheesewhite/DeepSight.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## CoWorld-VLA: Thinking in a Multi-Expert World Model for Autonomous Driving

- **arXiv**: <https://export.arxiv.org/abs/2605.10426v1>
- **ID**: `2605.10426v1`
- **分类**: cs.CV, cs.AI
- **作者**: Minqing Huang, Yujiao Xiang, Zihan Liang, Jiajie Huang, Jingqi Wang, Zhi Xu, Feiyang Tan, Hangning Zhou, Mu Yang, Gong Che
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Vision-Language-Action (VLA) models have emerged as a promising paradigm for end-to-end autonomous driving. However, existing reasoning mechanisms still struggle to provide planning-oriented intermediate representations: textual Chain-of-Thought (CoT) fails to preserve continuous spatiotemporal structure, while latent world reasoning remains difficult to use as a direct condition for action generation. In this paper, we propose CoWorld-VLA, a multi-expert world reasoning framework for autonomous driving, where world representations serve as explicit conditions to guide action planning. CoWorld-VLA extracts complementary world information through multi-source supervision and encodes it into expert tokens within the VLA, thereby providing planner-accessible conditioning signals. Specifically, we construct four types of tokens: semantic interaction, geometric structure, dynamic evolution, and ego trajectory tokens, which respectively model interaction intent, spatial structure, future temporal dynamics, and behavioral goals. During action generation, CoWorld-VLA employs a diffusion-based hierarchical multi-expert fusion planner, which is coupled with scene context throughout the joint denoising process to generate continuous ego trajectories. Experiments show that CoWorld-VLA achieves competitive results in both future scene generation and planning on the NAVSIM v1 benchmark, demonstrating strong performance in collision avoidance and trajectory accuracy. Ablation studies further validate the complementarity of expert tokens and their effectiveness as planning conditions for action generation. Code will be available at https://github.com/potatochip1211/CoWorld-VLA.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Position: Life-Logging Video Streams Make the Privacy-Utility Trade-off Inevitable

- **arXiv**: <https://export.arxiv.org/abs/2605.10404v1>
- **ID**: `2605.10404v1`
- **分类**: cs.CV
- **作者**: Tianyuan Zou, Liang Yue, Yang Liu, Ya-Qin Zhang, Sijie Cheng
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Position Life-Logging Video Streams Make the Privacy-Utility Trade-off Inevitable.pdf](../pdfs/Position Life-Logging Video Streams Make the Privacy-Utility Trade-off Inevitable.pdf)

### 摘要（自动抓取）

With the growing prevalence of always-on hardware such as smart glasses, body cameras, and home security systems, life-logging visual sensing is becoming inevitable, forming the backbone of persistent, always-on AI systems. Meanwhile, recent advances in proactive agents and world models signal a fundamental shift from episodic, prompt-driven tools to next-generation AI systems that continuously perceive and react to the physical world. Although life-logging video streams can substantially improve utility of these promising systems, they also introduce significant privacy risks by revealing sensitive information, such as behavioral patterns, emotional states, and social interactions, beyond what isolated images expose. If unresolved, these risks may undermine public trust and hinder the sustainable development of always-on AI technologies. Existing privacy protections are either attack-specific or incur substantial utility loss, and fail to consider the entire data exploitation pipeline. We therefore posit that the privacy-utility trade-off in life-logging video streams is a foundational challenge for next-generation AI systems that demands further investigation. We call for novel pipeline-aware privacy-preserving designs that jointly optimize utility and privacy for long-horizon life-logging visual data. In parallel, formal privacy leakage metrics and standardized benchmarks remain important open directions for future research.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## How Mobile World Model Guides GUI Agents?

- **arXiv**: <https://export.arxiv.org/abs/2605.10347v1>
- **ID**: `2605.10347v1`
- **分类**: cs.AI, cs.CL
- **作者**: Weikai Xu, Kun Huang, Yunren Feng, Jiaxing Li, Yuhan Chen, Yuxuan Liu, Zhizheng Jiang, Heng Qu, Pengzhi Gao, Wei Liu, Jian Luan, Xiaolin Hu, Bo An
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [How Mobile World Model Guides GUI Agents.pdf](../pdfs/How Mobile World Model Guides GUI Agents.pdf)

### 摘要（自动抓取）

Recent advances in vision-language models have enabled mobile GUI agents to perceive visual interfaces and execute user instructions, but reliable prediction of action consequences remains critical for long-horizon and high-risk interactions. Existing mobile world models provide either text-based or image-based future states, yet it remains unclear which representation is useful, whether generated rollouts can replace real environments, and how test-time guidance helps agents of different strengths. To answer the above questions, we filter and annotate mobile world-model data, then train world models across four modalities: delta text, full text, diffusion-based images, and renderable code. These models achieve SoTA performance on both MobileWorldBench and Code2WorldBench. Furthermore, by evaluating their downstream utility on AITZ, AndroidControl, and AndroidWorld, we obtain three findings. First, renderable code reconstruction achieves high in-distribution fidelity and provides effective multimodal supervision for data construction, while text-based feedback is more robust for online out-of-distribution (OOD) execution. Second, world-model-generated trajectories can provide transferable interaction experience in the training process and improve agents' end-to-end task performance, although these data do not preserve the original distribution. Last, for overconfident mobile agents with low action entropy, posterior self-reflection provides limited gains, suggesting that world models are more effective as prior perception or training supervision than as universal post-hoc verifiers.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Data-Asymmetric Latent Imagination and Reranking for 3D Robotic Imitation Learning

- **arXiv**: <https://export.arxiv.org/abs/2605.10166v1>
- **ID**: `2605.10166v1`
- **分类**: cs.RO
- **作者**: Lianghao Luo, Xizhou Bu, Ruyan Liu, Qingqiu Huang, Chufeng Tang, Xiaoshuai Hao, Hongbo Wang, Wei Li
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Data-Asymmetric Latent Imagination and Reranking for 3D Robotic Imitation Learning.pdf](../pdfs/Data-Asymmetric Latent Imagination and Reranking for 3D Robotic Imitation Learning.pdf)

### 摘要（自动抓取）

Robotic imitation learning typically assumes access to optimal demonstrations, yet real-world data collection often yields suboptimal, exploratory, or even failed trajectories. Discarding such data wastes valuable information about environment dynamics and failure modes, which can instead be leveraged to improve decision-making. While 3D policies reduce reliance on high-quality demonstrations through strong spatial generalization, they still require large-scale data to achieve high task success. To address this, we propose DALI-R, a Data-Asymmetric Latent Imagination and Reranking framework for 3D robotic imitation learning from mixed-quality trajectories. It learns a Latent World Model over 3D point clouds for imagined rollouts and a Task Completion Scorer that reranks candidate action chunks, improving decision-making without additional high-quality demonstrations. We instantiate DALI-R with both diffusion and efficient flow-matching policies and evaluate it on Adroit and MetaWorld benchmarks. Across the two evaluated 3D base policies, DALI-R achieves an average $6.8$\% improvement in success rate while incurring less than $0.7\times$ additional inference overhead.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Network-Efficient World Model Token Streaming

- **arXiv**: <https://export.arxiv.org/abs/2605.09886v1>
- **ID**: `2605.09886v1`
- **分类**: cs.RO
- **作者**: Shatadal Mishra, Ahmadreza Moradipari, Nejib Ammar
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Generative driving world models rely on compact latent state representations that must be efficiently transmitted and synchronized across distributed compute and connected vehicles. We study network-efficient streaming of a discrete world model state, where a stride-16 VQ-U-Net tokenizer (codebook size 8,192) maps each 288x512 frame to an 18x32 grid of token IDs (576 tokens/frame), equivalent to 936 bytes/frame under fixed-length coding. We consider a keyframe--delta protocol under strict per-message payload budgets and packet loss, and propose a fully online, label-free algorithm that prioritizes delta updates via cosine distance in codebook embedding space and triggers keyframes adaptively using a Hamming-drift threshold. The adaptive algorithm consistently improves the rate distortion frontier over periodic keyframes at matched bitrates: at 0.024 Mb/s (200-byte budget) dynamic-only embedding distortion drops from 0.0712 to 0.0661 (7.2\%), and at 0.036 Mb/s (400-byte budget) from 0.0427 to 0.0407 (4.8\%). Under 10\% delta packet loss at 200 bytes, dynamic-only distortion is 0.0757 versus 0.0789 for a matched periodic baseline. To connect state fidelity to world model usefulness, we train a lightweight next-token predictor and evaluate perplexity conditioned on streamed receiver states: at 0.024 Mb/s, dynamic-position perplexity improves from 206.0 to 193.1 (6.3\%), and at 0.036 Mb/s from 158.9 to 155.6 (2.1\%). These results support discrete token-state streaming as a practical systems layer for bandwidth-aware synchronization and improved downstream token-dynamics utility under vehicular networking constraints.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Multi-Tier Labeling and Physics-Informed Learning for Orbital Anomaly Detection at Scale

- **arXiv**: <https://export.arxiv.org/abs/2605.09790v1>
- **ID**: `2605.09790v1`
- **分类**: cs.DC, cs.AI, cs.LG
- **作者**: Yong Fu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Multi-Tier Labeling and Physics-Informed Learning for Orbital Anomaly Detection at Scale.pdf](../pdfs/Multi-Tier Labeling and Physics-Informed Learning for Orbital Anomaly Detection at Scale.pdf)

### 摘要（自动抓取）

Detecting orbital anomalies, such as maneuvers, atmospheric decay, and attitude upsets, across the rapidly growing population of low-Earth-orbit (LEO) satellites is a prerequisite for collision avoidance, decay forecasting, and conjunction screening. The bottleneck is not modeling capacity but labels: there is no public ground-truth corpus of orbital anomalies, manual review does not scale to approximately 10^4 active satellites, and pure rule-based detectors trade recall for precision so aggressively that they are blind to most behavioral anomalies. We present a multi-tier labeling cascade that composes three weak supervision sources of increasing fidelity: a fast physics rule set (rule_v1), an Interacting Multiple Model Unscented Kalman Filter (IMM-UKF) bank, and a supplemental-element calibration step (supGP), to produce labels at a scale unavailable from any single source. Applied to 232M Two-Line Element (TLE) records spanning 60 years, the cascade yields 8.6M labeled sequences of length 50 (430M timesteps) over 11 features that include explicit time encoding and full mean-element state. On overlapping satellites, IMM-UKF surfaces 42.6x more anomalies than rule_v1 alone. We train a 6.5M-parameter Transformer in two stages, achieving a maneuver recall of 55.4% and decay recall of 62.8% on a held-out test set. An ablation on the time-delta feature alone yields a 107% relative improvement in decay recall. We frame the resulting model as a high-recall triage classifier whose role is to surface candidate events for downstream filtering, not to issue final attributions, and discuss the path toward a Neural-ODE-based orbital world model.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## DriveFuture: Future-Aware Latent World Models for Autonomous Driving

- **arXiv**: <https://export.arxiv.org/abs/2605.09701v1>
- **ID**: `2605.09701v1`
- **分类**: cs.CV
- **作者**: Yufeng Hong, Xiaotian Zhou, Yingyan Li, Xiangpo Zhou, Lin Liu, Yadan Luo, Shaoqing Xu, Lei Yang, Ziying Song
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Existing latent world models for autonomous driving have opened a promising path toward future-aware driving intelligence. However, they typically treat future latent states as prediction targets or auxiliary signals, rather than directly conditioning trajectory planning. This can entangle current and future features in latent space. In this work, we propose DriveFuture, a future-aware latent world modeling framework for autonomous driving that explicitly learns planning-oriented foresight by conditioning the current latent state modeling process on future world states. Specifically, during training, the model first predicts future latent world states from the current latent state and ego action, and then refines the prediction against the ground-truth future latent state via cross-attention. The resulting future-aware latent serves as an explicit condition for a diffusion-based trajectory planner. During inference, DriveFuture conditions on the predicted future latent state instead of the ground-truth future state. DriveFuture achieves SOTA performance on the public NAVSIM benchmarks, reaching \textbf{55.5} EPDMS on NAVSIM-v2 {\textcolor{blue}{\textit{navhard}}}, \textbf{89.9} EPDMS on NAVSIM-v2 {\textcolor{blue}{\textit{navtest}}}, and \textbf{90.7} PDMS on NAVSIM-v1 {\textcolor{blue}{\textit{navtest}}}, respectively. These results suggest that the key to latent world modeling lies not merely in simulating future states, but more importantly in conditioning current decision-making on future states. Notably, as of April 2026, DriveFuture ranks \textbf{1st} on the \href{https://huggingface.co/spaces/AGC2025/e2e-driving-navhard}{NAVSIM-v2 {\textcolor{blue}{\textit{navhard}}}} leaderboard and achieves SOTA performance on \href{https://huggingface.co/spaces/AGC2024-P/e2e-driving-navtest}{NAVSIM-v1 {\textcolor{blue}{\textit{navtest}}}}.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Do multimodal models imagine electric sheep?

- **arXiv**: <https://export.arxiv.org/abs/2605.09693v1>
- **ID**: `2605.09693v1`
- **分类**: cs.CV, cs.AI, cs.LG
- **作者**: Santhosh Kumar Ramakrishnan, Carl Vondrick, Raja Giryes, Philipp Krähenbühl, Vladlen Koltun
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: 暂无本地 PDF，仅保留 arXiv 链接

### 摘要（自动抓取）

Yes. We find that large multimodal models develop mental imagery when solving spatial puzzles, and they do imagine sheep when solving sheep puzzles. We fine-tune a Qwen3.5 VLM to solve twelve diverse visual reasoning tasks -- including tangram, jigsaw, sokoban, 3D mental rotation, and rush hour -- that require understanding geometry, spatial relationships, and the consequences of actions. By supervising the model to predict the open-loop sequence of actions to solve a puzzle from an initial state, we show that the model's activations after each action encode meaningful visual information about the intermediate state. This finding suggests that an imperfect visual world model begins to form as a byproduct of learning to select correct actions, in the absence of any explicit visual supervision. Building on this observation, we propose two ways to sharpen and use the mental images formed by the model. We find that integrating as few as sixteen visual tokens per step into the chain of thought improves the average solve rate from 83% to 89%, with particularly strong gains on reasoning-heavy tasks such as jigsaw and 3D mental rotation.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Absurd World: A Simple Yet Powerful Method to Absurdify the Real-world for Probing LLM Reasoning Capabilities

- **arXiv**: <https://export.arxiv.org/abs/2605.09678v1>
- **ID**: `2605.09678v1`
- **分类**: cs.AI
- **作者**: Ryan Albright, Golam Md Muktadir, Zarif Ikram, S M Jubaer, Mehrab Hossain, Dianbo Liu
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Absurd World A Simple Yet Powerful Method to Absurdify the Real-world for Probing LLM Reasoning Capabilities.pdf](../pdfs/Absurd World A Simple Yet Powerful Method to Absurdify the Real-world for Probing LLM Reasoning Capabilities.pdf)

### 摘要（自动抓取）

While extremely powerful and versatile at various tasks, the thinking capabilities of large language models (LLMs) are often put under scrutiny as they sometimes fail to solve problems that humans can systematically solve. However, recent literature focuses on breaking LLM reasoning with increasingly complex problems, and whether an LLM is robust in simple logical reasoning remains underexplored. This paper proposes Absurd World, a benchmarking framework, to test LLMs against altered realism, where scenarios are logically coherent, and humans can easily solve the tasks. Absurd World breaks a real-world model into symbols, actions, sequences, and events, which are automatically altered to create absurd worlds where the logic to solve the tasks remains the same. It evaluates a large collection of models with simple and advanced prompting techniques, and proves that it is an effective tool to determine LLMs' ability to think logically, ignoring the patterns learned from the real world. One can use this framework to extensively test an LLM against a real-world problem to verify whether the LLM's reasoning capability is robust against variations of the task.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

## Workspace Optimization: How to Train Your Agent

- **arXiv**: <https://export.arxiv.org/abs/2605.09650v1>
- **ID**: `2605.09650v1`
- **分类**: cs.AI, cs.LG
- **作者**: Elad Sarafian, Gal Kaplun, Ron Banner, Daniel Soudry, Boris Ginsburg
- **总结状态**: 待补写
- **标签**: 待补充
- **PDF**: [Workspace Optimization How to Train Your Agent.pdf](../pdfs/Workspace Optimization How to Train Your Agent.pdf)

### 摘要（自动抓取）

Modern agents built on frontier language models often cannot adapt their weights. What, then, remains trainable? We argue it is the agent's \emph{workspace}, the structured external substrate it reads, writes, and tests; we call its evolution workspace optimization. Workspace optimization targets hard multi-turn environments where a frontier model has strong priors but cannot solve the task in a single shot, so the agent must learn through interaction. We propose a principled way to evolve the workspace, mirroring the structure of weight-space training: artifacts in place of parameters, evidence in place of data, counterexamples in place of losses, and textual feedback in place of gradients. We instantiate the idea in DreamTeam, a multi-agent harness for ARC-AGI-3 whose roles build an executable world model, plan, hypothesize, probe, strategize, and route failures. On the current 25-game ARC-AGI-3 public set under the official scoring protocol and averaged over two independent runs, DreamTeam improves the SOTA protocol-matched agent's score from 36% to 38.4%, while using 31% fewer environment actions per game.

### 解读状态

- 当前模式：半自动无 API。
- 深度中文解读：待补写。
- 后续操作：在 Cursor 中让我基于这篇论文继续补写结构化总结。


---

