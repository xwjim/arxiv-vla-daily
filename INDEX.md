# arxiv-files 检索索引

本文件是给大模型和研究助手使用的入口索引，用来快速判断各目录保存了什么、应该先检索哪里、以及如何把论文原文、结构化摘要和日报笔记串起来。

## 总览

这个资料库主要收集具身智能、机器人、VLA、UAV、自动驾驶、World Model 等方向的 arXiv 论文材料。内容分为三层：

1. `frontier-index.json`：全库结构化索引，适合机器检索和批量筛选。
2. `Interpretation/`：按日期和主题整理的 Markdown 解读日报，适合快速理解研究脉络。
3. `frontier-pages/papers/` 与 `pdfs/`：单篇论文页面和论文 PDF，适合追溯原文证据。

优先检索顺序建议：

1. 先查 `frontier-index.json` 获取标题、arXiv ID、主题轨道、标签、摘要、解读字段和本地路径。
2. 再查 `Interpretation/` 了解某一天或某一主题下的论文组合与人工/自动解读。
3. 若需要逐篇细读，打开 `frontier-pages/papers/*.html`。
4. 若需要引用原文、方法细节、实验表格，最后打开 `pdfs/*.pdf`。

## 根目录文件

### `frontier-index.json`

全库机器索引，当前包含约 1603 篇论文记录。每条记录通常包含：

- `entry_id`：arXiv 编号，例如 `2604.24681v1`。
- `title`：论文标题。
- `arxiv_url`：arXiv 链接。
- `date` / `dates`：归档或命中日期。
- `track_keys` / `track_names`：主题轨道，例如 `vla`、`uav`、`world-model`。
- `categories`：arXiv 分类，例如 `cs.RO`。
- `authors`：作者列表。
- `abstract_text`：摘要。
- `essence`、`gap_points`、`insight_points`、`next_steps`：结构化解读字段。
- `tags` / `label_tags`：主题标签和关键词。
- `pdf_name` / `pdf_path` / `has_local_pdf`：本地 PDF 线索。
- `note_refs`：对应的 Markdown 解读日报路径。
- `summary_markdown`：可直接展示的单篇结构化解读。

适合任务：

- 按关键词、作者、arXiv ID、日期、主题轨道筛选论文。
- 构建 RAG、向量库、研究看板或自动摘要管线。
- 找到某篇论文对应的日报、HTML 页面和 PDF。

### `Arxiv-Frontier-研究看板.html`

研究看板的静态 HTML 汇总页，通常由 `frontier-index.json` 生成。适合人工浏览、展示和快速筛选，不适合作为首选机器解析源。

### `build_vla_pretraining_report.py`

VLA 预训练方向的报告生成脚本。会扫描 `pdfs/` 中与 VLA、预训练、foundation model、human video、egocentric、action interface、dataset、multi-embodiment 等关键词相关的 PDF，并生成调研报告。

适合任务：

- 复用或修改 VLA 预训练报告的筛选规则。
- 查看当前资料库中 VLA 预训练相关论文的批处理逻辑。

### `build_vla_leader_report.py`

面向领导汇报或高层综述的 VLA 预训练报告生成脚本。它基于已整理的报告 JSON/Markdown/HTML，按主题组织重点论文和汇报话术。

适合任务：

- 生成面向汇报的 VLA 研究路线总结。
- 抽取“问题定义、数据扩容、动作接口、训练 recipe、评估”等高层结构。

### `wall_oss_2509_11766_training_details.html`

单篇论文或模型训练细节 HTML 页面。文件名指向 `WALL-OSS` / `2509.11766` 相关内容，适合检索该论文的训练设置、数据、模型和实现细节。

### `README.md`

原始说明文件。当前文件内容存在编码显示异常，但主题上是在说明 `Interpretation/` 目录：这是按日期整理的 arXiv 论文解读笔记库。

## 目录索引

### `Interpretation/`

按主题和日期组织的 Markdown 论文解读日报，共约 219 个文件。命名格式通常是：

- `arxiv-vla-YYYY-MM-DD.md`
- `arxiv-uav-YYYY-MM-DD.md`
- `arxiv-world-model-YYYY-MM-DD.md`

当前主题分布：

- `vla`：约 185 篇日报文件，覆盖 Vision-Language-Action、机器人操作、具身智能、动作建模、跨 embodiment 迁移等。
- `uav`：约 17 篇日报文件，覆盖无人机、低空经济、航迹规划、遥感、视觉导航、无人机安全等。
- `world-model`：约 17 篇日报文件，覆盖世界模型、视频生成、4D 世界建模、模型式强化学习、自动驾驶世界模型等。

单个 Markdown 文件通常包含：

- 日期、来源、检索窗口、arXiv query。
- 当日命中的论文列表。
- 论文标题、arXiv 链接、分类、作者、本地 PDF 链接。
- 结构化解读：元数据、The Gap、How it works、Key Insights、Critical Analysis、Next Steps。

适合任务：

- 快速回顾某一天某个方向的新增论文。
- 按研究主题做趋势梳理。
- 为综述、选题、复现、组会和汇报准备材料。
- 查找某篇论文为什么被收录、它和同日其他论文的关系。

检索建议：

- 查 VLA：搜索 `Interpretation/arxiv-vla-*.md`。
- 查 UAV：搜索 `Interpretation/arxiv-uav-*.md`。
- 查世界模型：搜索 `Interpretation/arxiv-world-model-*.md`。
- 查日期窗口：直接按文件名日期定位，例如 `2026-04-22`。
- 查某篇论文：先用标题或 arXiv ID 搜 `frontier-index.json`，再根据 `note_refs` 打开对应 Markdown。

### `frontier-pages/papers/`

单篇论文的 HTML 详情页目录，共约 1603 个 HTML 文件。文件名格式通常是：

`arxiv-id-version-title-slug.html`

示例：

- `2509.02722v2-planning-with-reasoning-using-vision-language-world-model.html`
- `2509.05578v1-occvla-vision-language-action-model-with-implicit-3d-occupancy-s.html`
- `2509.07996v3-3d-and-4d-world-modeling-a-survey.html`

这些页面通常来自结构化索引，适合逐篇查看：

- 标题、作者、arXiv 链接、日期、分类。
- 摘要与结构化中文解读。
- 标签、主题轨道、日报引用、本地 PDF 线索。

适合任务：

- 用户给出论文标题或 arXiv ID 时，快速打开单篇详情。
- 在不解析大 JSON 的情况下查看某篇论文摘要与解读。
- 作为 Obsidian 或浏览器里的可读卡片。

检索建议：

- 用 arXiv ID 匹配最稳，例如 `2509.07996`。
- 用英文标题关键词匹配也很有效，例如 `world-model`、`vision-language-action`、`uav`。
- 若 HTML 文件与 PDF 都存在，HTML 负责快速理解，PDF 负责查证细节。

### `pdfs/`

论文 PDF 原文目录，共约 1350 个 PDF。文件名通常是论文标题，保留了大量英文关键词。

代表性主题关键词：

- VLA / robotics：`Vision-Language-Action`、`OpenVLA`、`RT-2`、`robot foundation model`、`manipulation`、`action tokenizer`。
- UAV / aerial robotics：`UAV`、`drone`、`aerial`、`flight`、`trajectory`、`low-altitude`、`remote sensing`。
- World Model：`world model`、`4D world modeling`、`video generation`、`model-based RL`、`simulation`。
- Autonomous driving：`autonomous driving`、`planning`、`trajectory`、`occupancy`、`LiDAR`。
- Dataset / benchmark / survey：`dataset`、`benchmark`、`survey`、`review`。

适合任务：

- 查论文原始方法、实验设置、数据集、指标和表格。
- 做高可信引用或复现准备。
- 用 PDF 文本抽取工具构建更细粒度的检索库。

检索建议：

- 如果只知道标题，优先搜索 `pdfs/` 文件名。
- 如果只知道 arXiv ID，优先查 `frontier-index.json` 或 `frontier-pages/papers/`，再根据记录找 PDF。
- 对需要严谨引用的回答，必须回到 PDF 原文确认。

## 主题检索词表

### VLA / 具身智能 / 机器人操作

关键词：

- `VLA`
- `vision-language-action`
- `robot manipulation`
- `embodied AI`
- `robot foundation model`
- `action tokenization`
- `action chunk`
- `latent action`
- `cross-embodiment`
- `human videos`
- `egocentric`
- `teleoperation`
- `Open X-Embodiment`
- `DROID`
- `BridgeData`
- `sim-to-real`

优先目录：

1. `frontier-index.json`
2. `Interpretation/arxiv-vla-*.md`
3. `frontier-pages/papers/*vla*.html`
4. `pdfs/*Vision-Language-Action*.pdf`

### UAV / 无人机 / 低空智能

关键词：

- `UAV`
- `drone`
- `aerial`
- `flight`
- `swarm`
- `low-altitude`
- `remote sensing`
- `visual-inertial odometry`
- `trajectory`
- `navigation`
- `anti-UAV`
- `multispectral`
- `hyperspectral`

优先目录：

1. `frontier-index.json`
2. `Interpretation/arxiv-uav-*.md`
3. `frontier-pages/papers/*uav*.html`
4. `pdfs/*UAV*.pdf` 或 `pdfs/*Drone*.pdf`

### World Model / 视频生成 / 模型式智能体

关键词：

- `world model`
- `4D world modeling`
- `video generation`
- `model-based RL`
- `predictive model`
- `occupancy world model`
- `simulation`
- `MCTS`
- `causal world model`
- `physical consistency`

优先目录：

1. `frontier-index.json`
2. `Interpretation/arxiv-world-model-*.md`
3. `frontier-pages/papers/*world-model*.html`
4. `pdfs/*World Model*.pdf`

### 自动驾驶 / 具身导航

关键词：

- `autonomous driving`
- `planning`
- `trajectory`
- `occupancy`
- `LiDAR`
- `visual navigation`
- `scene memory`
- `3D reconstruction`
- `4D scenes`

优先目录：

1. `frontier-index.json`
2. `Interpretation/`
3. `frontier-pages/papers/`
4. `pdfs/`

## 给大模型的检索流程

### 当用户问“某个方向有哪些论文”

1. 在 `frontier-index.json` 中按 `track_keys`、`tags`、`title`、`abstract_text` 搜索。
2. 按日期、主题和相关度选出候选论文。
3. 打开 `note_refs` 指向的 `Interpretation/*.md`，获取论文在日报中的上下文。
4. 如需逐篇解释，再打开对应 `frontier-pages/papers/*.html`。
5. 如需引用实验结论或方法细节，再打开 `pdfs/*.pdf`。

### 当用户给出论文标题或 arXiv ID

1. 先在 `frontier-index.json` 精确查 `entry_id` 或 `title`。
2. 若找到，读取 `summary_markdown`、`note_refs`、`pdf_path`。
3. 若 JSON 中没有 PDF，搜索 `pdfs/` 文件名。
4. 若需要可读页面，搜索 `frontier-pages/papers/` 中的 ID 或标题 slug。

### 当用户问“按时间线总结”

1. 先按主题选择 `Interpretation/arxiv-主题-YYYY-MM-DD.md`。
2. 按文件名日期排序。
3. 提取每天的高频关键词、关键论文、方法路线和 next steps。
4. 必要时回到 `frontier-index.json` 补齐 tags、authors、categories。

### 当用户问“做综述或汇报”

1. 用 `frontier-index.json` 初筛论文集合。
2. 用 `Interpretation/` 抽取结构化观点和中文解读。
3. 用 `pdfs/` 核对方法、实验和数据集。
4. 可参考 `build_vla_pretraining_report.py` 和 `build_vla_leader_report.py` 的主题组织方式。

## 注意事项

- `frontier-index.json` 和部分 Markdown/HTML 中可能存在中文编码显示异常；英文标题、摘要、arXiv ID、路径、标签通常仍可用于检索。
- `pdfs/` 文件名以标题为主，不一定包含 arXiv ID；需要用 JSON 或 HTML 页面做桥接。
- `Interpretation/` 中有些日报文件很短，可能表示当天无命中或仅保留检索记录。
- `.git/` 是版本控制目录，不属于研究内容，普通检索时应忽略。

