from __future__ import annotations

import html
import json
import re
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parent
INPUT_JSON = ROOT / "VLA-预训练全量调研报告.json"
OUTPUT_MD = ROOT / "VLA-预训练领导汇报终版.md"
OUTPUT_HTML = ROOT / "VLA-预训练领导汇报终版.html"
OUTPUT_JSON = ROOT / "VLA-预训练领导汇报终版.json"


SECTIONS = [
    {
        "theme": "先讲清楚问题定义",
        "message": "这一组论文用来回答两个最关键的问题：为什么 VLA 不能简单等同于 VLM 的延伸，以及当前社区公认的强 recipe 到底长什么样。",
        "papers": [
            {
                "title": "VLM4VLA Revisiting Vision-Language-Models in Vision-Language-Action Models",
                "reason": "最适合回答“VLM 做大为什么不等于 VLA 变强”。",
                "talk": "可直接对领导讲：通用 VLM 能力不是控制能力的可靠代理，VLA 预训练必须面向动作接口和机器人数据重构。",
            },
            {
                "title": "VLANeXt Recipes for Building Strong VLA Models",
                "reason": "属于系统化训练 recipe，总结了当前较成熟的设计组合。",
                "talk": "可用作主线结论：现在更重要的不是盲目扩大模型，而是把基础组件、感知输入和动作建模 recipe 组合对。",
            },
        ],
    },
    {
        "theme": "再讲数据扩容路线",
        "message": "这一组论文共同说明，VLA 预训练的真正稀缺资源不是图片或文本，而是带动作约束的高质量 embodied data，因此扩充数据源是主战场。",
        "papers": [
            {
                "title": "CLAP Contrastive Latent Action Pretraining for Learning Vision-Language-Action Models from Human Videos",
                "reason": "代表“从 human videos 学 latent action”的路线。",
                "talk": "可讲成一句话：如果昂贵机器人演示不够，就要把人类视频转成可迁移的动作先验。",
            },
            {
                "title": "Developing Vision-Language-Action Model from Egocentric Videos",
                "reason": "直接证明 raw egocentric videos 能成为 VLA 预训练数据源。",
                "talk": "适合强调：第一视角人类视频正在成为替代遥操作数据的重要来源。",
            },
            {
                "title": "EgoScale Scaling Dexterous Manipulation with Diverse Egocentric Human Data",
                "reason": "代表“大规模 egocentric human data + 三阶段训练”的扩展型路线。",
                "talk": "这篇最适合讲规模：人类视频数据一旦上规模，能显著改变 dexterous manipulation 预训练效果。",
            },
            {
                "title": "MiVLA Towards Generalizable Vision-Language-Action Model with Human-Robot Mutual Imitation Pre-training",
                "reason": "把 human data 和 robot data 的关系从“替代”推进到“互相模仿”。",
                "talk": "可作为升级观点：未来不是只做人类数据迁移，而是做人机双向对齐的预训练。",
            },
        ],
    },
    {
        "theme": "接着讲动作接口",
        "message": "这部分最值得领导关注，因为很多论文已经在反复证明：VLA 的上限常常由 action interface 决定，而不是只由 backbone 决定。",
        "papers": [
            {
                "title": "ABot-M0 VLA Foundation Model for Robotic Manipulation with Action Manifold Learning",
                "reason": "代表 action manifold / action interface 路线。",
                "talk": "适合讲：动作表示不是工程细节，而是决定预训练上限的核心接口问题。",
            },
            {
                "title": "LAP Language-Action Pre-Training Enables Zero-shot Cross-Embodiment Transfer",
                "reason": "代表 language-action pretraining 和跨 embodiment transfer。",
                "talk": "可讲成一句话：预训练如果直接对齐 language 与 action，就更有机会跨机器人形态迁移。",
            },
            {
                "title": "Unified Embodied VLM Reasoning with Robotic Action via Autoregressive Discretized Pre-training",
                "reason": "代表 discretized action / autoregressive pretraining 的统一建模思路。",
                "talk": "适合强调：社区正在尝试把 embodied reasoning 和 action tokenization 合到同一套预训练框架里。",
            },
        ],
    },
    {
        "theme": "补一篇工业落地样板",
        "message": "领导通常会追问‘有没有能落地的开源样板’，这篇适合作为工业与开源结合的锚点。",
        "papers": [
            {
                "title": "Xiaomi-Robotics-0 An Open-Sourced Vision-Language-Action Model with Real-Time Execution",
                "reason": "兼具 open-source、real-time execution 和工程规模信息。",
                "talk": "可讲：行业已经开始把 VLA 从研究原型推进到可实时运行的系统级产品形态。",
            },
        ],
    },
    {
        "theme": "最后用评测和综述收口",
        "message": "最后两篇不是为了讲方法细节，而是为了收口：当前 VLA 预训练到底怎么比、比什么、缺什么。",
        "papers": [
            {
                "title": "Benchmarking the Generality of Vision-Language-Action Models",
                "reason": "代表“评测口径还不统一，但已经开始关注 generality”这一现实。",
                "talk": "适合讲：没有统一 benchmark，很多预训练结论很容易被 task selection 和 protocol 扭曲。",
            },
            {
                "title": "Vision-Language-Action Models for Robotics A Review Towards Real-World Applications",
                "reason": "用来补足全景视角，方便领导从单篇论文跳到全行业状态。",
                "talk": "可作为结束页：VLA 已经形成体系，但距离稳定落地仍卡在数据、动作接口和真实世界泛化。",
            },
        ],
    },
]


def clean_text(text: str, limit: int = 220) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    text = text.replace("；；", "；")
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def load_records() -> tuple[dict[str, dict], dict]:
    data = json.loads(INPUT_JSON.read_text(encoding="utf-8"))
    records = {record["title"]: record for record in data["records"]}
    return records, data["corpus"]


def build_selected(records: dict[str, dict]) -> list[dict]:
    selected: list[dict] = []
    for section in SECTIONS:
        for paper in section["papers"]:
            record = records.get(paper["title"])
            if record is None:
                raise KeyError(f"Missing paper in source report: {paper['title']}")
            selected.append(
                {
                    "theme": section["theme"],
                    "message": section["message"],
                    "title": paper["title"],
                    "reason": paper["reason"],
                    "talk": paper["talk"],
                    "record": record,
                }
            )
    return selected


def render_markdown(selected: list[dict], corpus: dict) -> str:
    generated = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    lines: list[str] = []
    lines.append("# VLA 预训练领导汇报终版")
    lines.append("")
    lines.append(f"- 生成时间：{generated}")
    lines.append(f"- 来源：从 `pdfs/` 下全量扫描的 {corpus['total_pdfs']} 篇 PDF 中，先形成 66 篇主报告，再压缩到本版 12 篇终版。")
    lines.append("- 适用场景：面向领导汇报，强调主线、趋势和判断，不追求把同类论文堆满。")
    lines.append("")
    lines.append("## 一、建议汇报结论")
    lines.append("")
    lines.append("- VLA 预训练的核心矛盾不是“VLM 再做大一点”，而是机器人数据稀缺与动作接口不稳定。")
    lines.append("- 数据路线正在从 teleoperation 扩展到 egocentric human videos、latent action、人机互模仿和自动构造数据。")
    lines.append("- 当前最值得跟踪的技术变量是 `action interface`，包括 latent action、action manifold、discretized action 等。")
    lines.append("- 训练范式正在从单次预训练走向 `pretrain -> embodiment-specific post-train -> online adapt`。")
    lines.append("- 评测口径仍未完全统一，因此 benchmark / review 类论文在汇报里很重要，它们决定我们如何解读“谁更强”。")
    lines.append("")
    lines.append("## 二、建议汇报顺序")
    lines.append("")
    lines.append("1. 先讲 `VLM4VLA` 和 `VLANeXt`，建立“为什么 VLA 预训练不是简单 VLM 延伸”的总框架。")
    lines.append("2. 再讲 `CLAP`、`Developing...Egocentric Videos`、`EgoScale`、`MiVLA`，说明数据扩容主线。")
    lines.append("3. 然后讲 `ABot-M0`、`LAP`、`Unified Embodied...Discretized Pre-training`，说明动作接口主线。")
    lines.append("4. 用 `Xiaomi-Robotics-0` 回答“产业界怎么做”。")
    lines.append("5. 最后用 `Benchmarking the Generality...` 和 `VLA Review` 收口，说明当前共识与缺口。")
    lines.append("")

    paper_index = 1
    for section in SECTIONS:
        lines.append(f"## {section['theme']}")
        lines.append("")
        lines.append(f"- 这一部分要讲的核心：{section['message']}")
        lines.append("")
        for paper in section["papers"]:
            item = next(entry for entry in selected if entry["title"] == paper["title"])
            record = item["record"]
            lines.append(f"### {paper_index}. {item['title']}")
            lines.append("")
            lines.append(f"- 入选理由：{item['reason']}")
            lines.append(f"- 汇报话术：{item['talk']}")
            lines.append(f"- 训练数据：{clean_text(record['training_data'])}")
            lines.append(f"- 数据处理：{clean_text(record['data_processing'])}")
            lines.append(f"- 训练阶段：{clean_text(record['training_stages'])}")
            lines.append(f"- 训练超参数：{clean_text(record['hyperparameters'])}")
            lines.append("")
            paper_index += 1

    lines.append("## 三、最终建议")
    lines.append("")
    lines.append("- 如果汇报时间只有 10 分钟，主讲 8 篇：`VLM4VLA`、`VLANeXt`、`CLAP`、`Developing...Egocentric Videos`、`EgoScale`、`ABot-M0`、`LAP`、`Xiaomi-Robotics-0`。")
    lines.append("- 如果汇报时间有 15 分钟，再补 4 篇：`MiVLA`、`Unified Embodied...Discretized Pre-training`、`Benchmarking the Generality...`、`VLA Review`。")
    lines.append("- 这 12 篇已经足够支撑“数据扩容、动作接口、训练 recipe、产业落地、评测口径”五条主线。")
    lines.append("")
    return "\n".join(lines).strip() + "\n"


def render_html(selected: list[dict], corpus: dict) -> str:
    generated = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    sections_html = []
    idx = 1
    for section in SECTIONS:
        cards = []
        for paper in section["papers"]:
            item = next(entry for entry in selected if entry["title"] == paper["title"])
            record = item["record"]
            cards.append(
                f"""
                <article class="paper-card">
                  <div class="paper-index">{idx:02d}</div>
                  <h3>{html.escape(item['title'])}</h3>
                  <div class="field"><span>入选理由</span><p>{html.escape(item['reason'])}</p></div>
                  <div class="field"><span>汇报话术</span><p>{html.escape(item['talk'])}</p></div>
                  <div class="field"><span>训练数据</span><p>{html.escape(clean_text(record['training_data'], 200))}</p></div>
                  <div class="field"><span>数据处理</span><p>{html.escape(clean_text(record['data_processing'], 200))}</p></div>
                  <div class="field"><span>训练阶段</span><p>{html.escape(clean_text(record['training_stages'], 200))}</p></div>
                  <div class="field"><span>训练超参数</span><p>{html.escape(clean_text(record['hyperparameters'], 200))}</p></div>
                </article>
                """
            )
            idx += 1
        sections_html.append(
            f"""
            <section class="section-block">
              <div class="section-head">
                <h2>{html.escape(section['theme'])}</h2>
                <p>{html.escape(section['message'])}</p>
              </div>
              <div class="card-grid">
                {''.join(cards)}
              </div>
            </section>
            """
        )

    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VLA 预训练领导汇报终版</title>
  <style>
    :root {{
      --bg: #f6efe3;
      --panel: #fff9f2;
      --ink: #1e2a2f;
      --muted: #5d6a68;
      --accent: #9b4d23;
      --accent-2: #315e5a;
      --line: #dccab6;
      --chip: #f0e0cc;
      --shadow: 0 10px 28px rgba(56, 38, 20, 0.08);
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Microsoft YaHei UI", "PingFang SC", "Noto Sans SC", sans-serif;
      background:
        radial-gradient(circle at top right, rgba(155,77,35,0.14), transparent 28%),
        linear-gradient(180deg, #fbf5ec 0%, var(--bg) 100%);
      color: var(--ink);
      line-height: 1.6;
    }}
    .wrap {{
      width: min(1440px, calc(100vw - 40px));
      margin: 0 auto;
      padding: 32px 0 72px;
    }}
    .hero {{
      background: linear-gradient(135deg, rgba(155,77,35,0.96), rgba(49,94,90,0.92));
      border-radius: 28px;
      color: #fff7ef;
      padding: 34px;
      box-shadow: var(--shadow);
    }}
    .hero h1 {{
      margin: 8px 0 10px;
      font-size: clamp(30px, 4vw, 50px);
      line-height: 1.12;
    }}
    .hero p {{
      max-width: 920px;
      margin: 0;
      color: rgba(255,247,239,0.9);
    }}
    .stats {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-top: 24px;
    }}
    .stat {{
      border-radius: 18px;
      padding: 16px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.16);
    }}
    .stat strong {{
      display: block;
      font-size: 30px;
      line-height: 1;
      margin-bottom: 6px;
    }}
    .summary-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-top: 20px;
    }}
    .panel {{
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 24px;
      box-shadow: var(--shadow);
      padding: 22px;
    }}
    .panel h2 {{
      margin: 0 0 12px;
      font-size: 24px;
    }}
    .panel ul {{
      margin: 0;
      padding-left: 20px;
    }}
    .section-block {{
      margin-top: 26px;
    }}
    .section-head h2 {{
      margin: 0 0 6px;
      font-size: 30px;
    }}
    .section-head p {{
      margin: 0 0 14px;
      color: var(--muted);
      max-width: 980px;
    }}
    .card-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 16px;
    }}
    .paper-card {{
      position: relative;
      background: rgba(255,249,242,0.94);
      border: 1px solid var(--line);
      border-radius: 24px;
      box-shadow: var(--shadow);
      padding: 20px;
    }}
    .paper-index {{
      display: inline-flex;
      min-width: 40px;
      justify-content: center;
      padding: 4px 10px;
      border-radius: 999px;
      background: var(--chip);
      color: var(--accent);
      font-weight: 800;
      font-size: 13px;
    }}
    .paper-card h3 {{
      margin: 12px 0 6px;
      font-size: 20px;
      line-height: 1.3;
    }}
    .field {{
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed var(--line);
    }}
    .field span {{
      display: block;
      margin-bottom: 4px;
      color: var(--accent);
      font-size: 12px;
      font-weight: 800;
    }}
    .field p {{
      margin: 0;
      color: var(--ink);
      font-size: 14px;
    }}
    @media (max-width: 980px) {{
      .summary-grid {{
        grid-template-columns: 1fr;
      }}
      .wrap {{
        width: min(100vw - 24px, 1440px);
      }}
      .hero {{
        padding: 24px;
      }}
    }}
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <div>生成时间：{html.escape(generated)}</div>
      <h1>VLA 预训练领导汇报终版</h1>
      <p>从全量扫描的 {corpus['total_pdfs']} 篇 PDF 出发，先形成 66 篇主报告，再压缩到本版 12 篇终版。设计目标不是“论文越多越好”，而是帮助领导快速看清 VLA 预训练的五条主线：问题定义、数据扩容、动作接口、产业落地、评测口径。</p>
      <div class="stats">
        <div class="stat"><strong>{corpus['total_pdfs']}</strong><span>全量扫描 PDF</span></div>
        <div class="stat"><strong>{corpus.get('report_records', 66)}</strong><span>上一版主报告</span></div>
        <div class="stat"><strong>{len(selected)}</strong><span>本版终版论文</span></div>
        <div class="stat"><strong>5</strong><span>汇报主线</span></div>
      </div>
    </section>

    <div class="summary-grid">
      <section class="panel">
        <h2>建议汇报结论</h2>
        <ul>
          <li>VLA 预训练的核心矛盾不是单纯扩大 VLM，而是解决机器人数据稀缺与动作接口不稳定。</li>
          <li>数据路线正在从 teleoperation 走向 egocentric human videos、latent action、人机互模仿和自动构造数据。</li>
          <li>action interface 是最值得盯紧的技术变量，latent action / action manifold / discretized action 是高频方向。</li>
          <li>训练范式正在从单次预训练走向 pretrain、post-train、online adapt 的持续演化系统。</li>
          <li>benchmark 和 review 不只是辅助材料，而是解释“谁更强”时的口径锚点。</li>
        </ul>
      </section>
      <section class="panel">
        <h2>建议汇报顺序</h2>
        <ul>
          <li>先用 `VLM4VLA` 和 `VLANeXt` 讲清总框架。</li>
          <li>再用 `CLAP`、`Developing...Egocentric Videos`、`EgoScale`、`MiVLA` 讲数据扩容。</li>
          <li>然后用 `ABot-M0`、`LAP`、`Unified Embodied...` 讲动作接口。</li>
          <li>再用 `Xiaomi-Robotics-0` 讲工业样板。</li>
          <li>最后用 `Benchmarking the Generality...` 和 `VLA Review` 收口。</li>
        </ul>
      </section>
    </div>

    {''.join(sections_html)}
  </div>
</body>
</html>
"""


def write_outputs(selected: list[dict], corpus: dict) -> None:
    markdown = render_markdown(selected, corpus)
    html_text = render_html(selected, corpus)
    payload = {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "selected_count": len(selected),
        "corpus": corpus,
        "sections": SECTIONS,
        "records": [
            {
                "theme": item["theme"],
                "title": item["title"],
                "reason": item["reason"],
                "talk": item["talk"],
                "record": item["record"],
            }
            for item in selected
        ],
    }
    OUTPUT_MD.write_text(markdown, encoding="utf-8")
    OUTPUT_HTML.write_text(html_text, encoding="utf-8")
    OUTPUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> int:
    records, corpus = load_records()
    selected = build_selected(records)
    write_outputs(selected, corpus)
    print(f"Wrote: {OUTPUT_MD.name}")
    print(f"Wrote: {OUTPUT_HTML.name}")
    print(f"Wrote: {OUTPUT_JSON.name}")
    print(f"Selected papers: {len(selected)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
