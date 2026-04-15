from __future__ import annotations

import concurrent.futures
import dataclasses
import html
import json
import re
import subprocess
import sys
import unicodedata
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path
from typing import Iterable


ROOT = Path(__file__).resolve().parent
PDF_DIR = ROOT / "pdfs"
OUTPUT_MD = ROOT / "VLA-预训练全量调研报告.md"
OUTPUT_HTML = ROOT / "VLA-预训练全量调研报告.html"
OUTPUT_JSON = ROOT / "VLA-预训练全量调研报告.json"
PDFTOTEXT = r"D:\software\Miktex\miktex\bin\x64\pdftotext.exe"

PREVIEW_PAGES = 3
MAX_WORKERS = 4


VLA_TITLE_KEYWORDS = [
    "vision-language-action",
    "vision language action",
    "vla",
    "openvla",
    "rt-2",
    "rt2",
    "pi0",
    "robotics transformer",
    "gr00t",
    "robot foundation model",
]

PRETRAIN_KEYWORDS = [
    "pre-train",
    "pretrain",
    "pre-training",
    "pre training",
    "foundation model",
    "foundation suite",
    "recipes",
    "latent action",
    "human videos",
    "egocentric",
    "teleoperation",
    "demonstration",
    "dataset",
    "multi-embodiment",
    "open x-embodiment",
    "oxe",
    "droid",
    "bridgedata",
    "fractal",
    "action manifold",
]

REVIEW_KEYWORDS = [
    "survey",
    "review",
    "anatomy",
    "benchmark",
    "benchmarking",
    "arena",
    "recipes",
    "past, present, and future",
]

LOW_VALUE_KEYWORDS = [
    "pruning",
    "inference",
    "unlearning",
    "forget",
    "safety",
    "backdoor",
    "attack",
    "token pruning",
    "compression",
    "real-time",
    "onboard",
]

DATASET_NAMES = [
    "Open X-Embodiment",
    "OXE",
    "DROID",
    "BridgeData V2",
    "BridgeData",
    "BC-Z",
    "Fractal",
    "LIBERO",
    "LIBERO-plus",
    "CALVIN",
    "Ego4D",
    "Ego-Exo4D",
    "HD-EPIC",
    "Nymeria",
    "ALOHA",
    "SIMPLER",
    "RoboMimic",
    "OpenVLA",
    "RT-2",
    "pi0",
    "RoboSet",
    "RoboNet",
    "RoboTurk",
    "DexMV",
    "BEHAVIOR",
    "ManiSkill",
    "RLBench",
    "Something-Something",
    "EgoMimic",
    "EgoVLA",
]

HYPERPARAM_PATTERNS = [
    r"learning rate[^.\n]{0,80}",
    r"batch size[^.\n]{0,80}",
    r"optimizer[^.\n]{0,80}",
    r"AdamW?[^.\n]{0,80}",
    r"weight decay[^.\n]{0,80}",
    r"warmup[^.\n]{0,80}",
    r"\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:epochs?|steps?)\b",
    r"\b(?:action chunk|chunk size|horizon|sequence length|context length|resolution)[^.\n]{0,80}",
    r"\b(?:A100|H100|V100|TPU|GPU)s?[^.\n]{0,80}",
    r"\bLoRA[^.\n]{0,80}",
]

HIGH_TITLE_KEYWORDS = [
    "pretrain",
    "pre-training",
    "pre training",
    "foundation model",
    "foundation suite",
    "technical report",
    "recipes",
    "egocentric",
    "human videos",
    "dataset",
    "action manifold",
    "latent action",
    "mutual imitation",
    "discretized pre-training",
    "pretrained representations",
    "open-sourced",
    "open sourced",
]

MEDIUM_TITLE_KEYWORDS = [
    "survey",
    "review",
    "anatomy",
    "benchmark",
    "benchmarking",
    "arena",
    "generality",
    "continual learning",
    "fine-tuning",
    "fine tuning",
    "post-training",
    "post training",
]

STRONG_PRETRAIN_PHRASES = [
    "vla pre-training",
    "pre-training dataset",
    "construct a new large-scale dataset",
    "construct a new dataset for vla pre-training",
    "pre-training on our dataset improves",
    "pre-trained with large-scale",
    "multi-embodiment datasets",
    "training from scratch",
    "train from scratch",
]


@dataclasses.dataclass
class PaperRecord:
    pdf_name: str
    pdf_path: str
    title: str
    preview_text: str = ""
    full_text: str = ""
    vla_candidate: bool = False
    relevance: str = "none"
    focus: str = "unrelated"
    tags: list[str] = dataclasses.field(default_factory=list)
    reason: str = ""
    executive_note: str = ""
    training_data: str = "未检出"
    data_processing: str = "未检出"
    training_stages: str = "未检出"
    hyperparameters: str = "未检出"
    evidence: list[str] = dataclasses.field(default_factory=list)


def normalize_text(text: str) -> str:
    text = unicodedata.normalize("NFKC", text)
    text = text.replace("\x0c", "\n")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text.strip()


def clean_title(name: str) -> str:
    stem = Path(name).stem
    stem = stem.replace("_", " ").strip()
    stem = re.sub(r"\s+", " ", stem)
    return stem


def trim_text(text: str, limit: int) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def text_has_any(text: str, keywords: Iterable[str]) -> bool:
    lower = text.lower()
    return any(keyword.lower() in lower for keyword in keywords)


def count_hits(text: str, keywords: Iterable[str]) -> int:
    lower = text.lower()
    return sum(1 for keyword in keywords if keyword.lower() in lower)


def run_pdftotext(pdf_path: Path, pages: int | None = None) -> str:
    args = [PDFTOTEXT, "-layout", "-enc", "UTF-8"]
    if pages is not None:
        args.extend(["-f", "1", "-l", str(pages)])
    args.extend([str(pdf_path), "-"])
    proc = subprocess.run(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if proc.returncode != 0 and not proc.stdout:
        raise RuntimeError(proc.stderr.decode("utf-8", errors="replace").strip() or "pdftotext failed")
    return normalize_text(proc.stdout.decode("utf-8", errors="replace"))


def build_reason(title_lower: str, preview_lower: str, relevance: str, focus: str) -> str:
    reasons = []
    if text_has_any(title_lower, ["pretrain", "pre-training", "pre training"]):
        reasons.append("标题直接出现 pre-training")
    if text_has_any(preview_lower, ["large-scale dataset", "pre-training dataset", "multi-embodiment dataset"]):
        reasons.append("摘要出现大规模数据集/预训练数据描述")
    if text_has_any(preview_lower, ["fine-tuned", "post-train", "post-training"]):
        reasons.append("正文提到后训练/微调阶段")
    if focus == "review":
        reasons.append("适合作为综述参考")
    if focus == "benchmark":
        reasons.append("适合作为基准/评测参考")
    if not reasons:
        reasons.append(f"按标题与摘要关键词归类为 {relevance}/{focus}")
    return "；".join(reasons)


def build_preview(record: PaperRecord) -> PaperRecord:
    title_lower = record.title.lower()
    vla_candidate = text_has_any(title_lower, VLA_TITLE_KEYWORDS)
    title_high = text_has_any(title_lower, HIGH_TITLE_KEYWORDS)
    title_medium = text_has_any(title_lower, MEDIUM_TITLE_KEYWORDS)
    robotics_context = text_has_any(
        title_lower,
        [
            "vla",
            "vision-language-action",
            "embodied",
            "embodiment",
            "robotic manipulation",
            "mobile manipulation",
            "dexterous",
            "humanoid",
            "cross-embodiment",
        ],
    )
    title_low = text_has_any(title_lower, LOW_VALUE_KEYWORDS)
    maybe_related = vla_candidate or (title_high and robotics_context) or (title_medium and vla_candidate)
    record.vla_candidate = vla_candidate
    if not maybe_related:
        return record

    try:
        record.preview_text = run_pdftotext(Path(record.pdf_path), pages=PREVIEW_PAGES)
    except Exception as exc:
        record.reason = f"预览抽取失败：{exc}"
        return record

    preview_lower = record.preview_text.lower()
    combined = f"{title_lower}\n{preview_lower}"
    strong_pretrain = text_has_any(preview_lower, STRONG_PRETRAIN_PHRASES)

    tags: list[str] = []
    if title_high or text_has_any(combined, ["pretrain", "pre-train", "pre-training", "pre training"]):
        tags.append("pretraining")
    if text_has_any(title_lower, ["dataset", "egocentric", "human videos"]) or text_has_any(combined, ["teleoperation", "open x-embodiment", "oxe", "droid", "bridgedata", "fractal"]):
        tags.append("data")
    if text_has_any(title_lower, ["latent action", "action manifold", "discretized pre-training"]):
        tags.append("action-repr")
    if text_has_any(title_lower, ["survey", "review", "anatomy"]):
        tags.append("review")
    if text_has_any(title_lower, ["autonomous driving", "driving"]):
        tags.append("driving")
    if text_has_any(title_lower, ["uav", "aerial", "drone"]):
        tags.append("aerial")
    if text_has_any(title_lower, ["post-train", "posttrain", "post-training", "continual learning", "fine-tuning", "fine tuning"]):
        tags.append("posttraining")

    focus = "model"
    relevance = "none"
    if text_has_any(title_lower, ["survey", "review", "anatomy"]):
        focus = "review"
    elif text_has_any(title_lower, ["benchmark", "benchmarking", "arena"]):
        focus = "benchmark"
    elif text_has_any(title_lower, ["dataset", "egocentric", "human videos"]):
        focus = "data"
    elif text_has_any(title_lower, ["latent action", "action manifold", "discretized pre-training"]):
        focus = "action-representation"
    elif text_has_any(title_lower, ["recipes", "foundation model", "foundation suite", "technical report", "open-sourced", "open sourced"]):
        focus = "foundation"
    elif text_has_any(title_lower, ["post-train", "posttraining", "post-training", "continual learning", "fine-tuning", "fine tuning", "unlearning"]):
        focus = "posttraining"

    if title_low and not title_high and not strong_pretrain and focus not in {"review", "benchmark"}:
        record.relevance = "none"
        record.focus = focus
        return record

    if title_high or strong_pretrain:
        relevance = "high"
    elif title_medium or focus in {"review", "benchmark", "posttraining"}:
        relevance = "medium"
    elif vla_candidate and text_has_any(preview_lower, ["pre-trained", "pretraining", "training data", "training pipeline"]):
        relevance = "medium"

    record.relevance = relevance
    record.focus = focus
    record.tags = sorted(set(tags))
    record.reason = build_reason(title_lower, preview_lower, relevance, focus)
    return record


def needs_full_text(record: PaperRecord) -> bool:
    return record.relevance in {"high", "medium"}


def split_paragraphs(text: str) -> list[str]:
    paragraphs = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    return [re.sub(r"\s+", " ", p) for p in paragraphs]


def top_matching_paragraphs(paragraphs: list[str], keywords: list[str], limit: int = 3) -> list[str]:
    scored: list[tuple[int, int, str]] = []
    for paragraph in paragraphs:
        lower = paragraph.lower()
        score = sum(lower.count(keyword.lower()) for keyword in keywords)
        if score:
            length_penalty = abs(len(paragraph) - 260)
            scored.append((score, -length_penalty, paragraph))
    scored.sort(reverse=True)
    results: list[str] = []
    for _, _, paragraph in scored:
        if paragraph not in results:
            results.append(paragraph)
        if len(results) >= limit:
            break
    return results


def summarize_datasets(text: str, paragraphs: list[str]) -> str:
    found = []
    lower = text.lower()
    for name in DATASET_NAMES:
        if name.lower() in lower:
            found.append(name)
    quantities = []
    for pattern in [
        r"\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:hours?|hrs?)\b",
        r"\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:episodes?|demonstrations?|trajectories?|tasks?)\b",
        r"\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:robots?|embodiments?)\b",
    ]:
        quantities.extend(re.findall(pattern, text, flags=re.IGNORECASE))
    parts = []
    if found:
        parts.append("数据源：" + " / ".join(dict.fromkeys(found)))
    if quantities:
        parts.append("规模线索：" + " / ".join(dict.fromkeys(quantities[:6])))
    if not parts:
        hits = top_matching_paragraphs(
            paragraphs,
            ["dataset", "data", "episodes", "hours", "teleoperation", "egocentric", "embodiment", "demonstration"],
            limit=1,
        )
        if hits:
            parts.append(trim_text(hits[0], 220))
    return "；".join(parts) if parts else "文中未清晰披露训练数据构成"


def summarize_processing(paragraphs: list[str]) -> str:
    hits = top_matching_paragraphs(
        paragraphs,
        [
            "filter",
            "curat",
            "token",
            "quantiz",
            "chunk",
            "normalize",
            "augment",
            "smooth",
            "extract",
            "trajectory",
            "bgts",
            "travel distance",
            "point cloud",
            "alignment",
            "segmentation",
        ],
        limit=2,
    )
    if not hits:
        return "文中未清晰披露数据处理流程"
    return "；".join(trim_text(hit, 240) for hit in hits)


def summarize_training_stages(paragraphs: list[str]) -> str:
    hits = top_matching_paragraphs(
        paragraphs,
        [
            "pre-train",
            "pretrain",
            "pre-training",
            "fine-tune",
            "fine tune",
            "post-train",
            "posttrain",
            "stage 1",
            "stage 2",
            "two-stage",
            "three-stage",
            "freeze",
            "initialize",
            "train from scratch",
        ],
        limit=2,
    )
    if not hits:
        return "文中未明确给出阶段划分"
    return "；".join(trim_text(hit, 240) for hit in hits)


def summarize_hyperparams(text: str, paragraphs: list[str]) -> str:
    hits = []
    for pattern in HYPERPARAM_PATTERNS:
        for match in re.findall(pattern, text, flags=re.IGNORECASE):
            cleaned = trim_text(re.sub(r"\s+", " ", match), 120)
            if cleaned and cleaned not in hits:
                hits.append(cleaned)
            if len(hits) >= 6:
                break
        if len(hits) >= 6:
            break
    if hits:
        return "；".join(hits[:6])
    paragraphs_hits = top_matching_paragraphs(
        paragraphs,
        ["learning rate", "batch size", "optimizer", "epoch", "step", "implementation details", "appendix"],
        limit=1,
    )
    if paragraphs_hits:
        return "仅检出实现细节段落：" + trim_text(paragraphs_hits[0], 240)
    return "正文/附录中未稳定检出 batch size、lr、optimizer 等超参数"


def build_executive_note(record: PaperRecord, paragraphs: list[str]) -> str:
    title_lower = record.title.lower()
    if "egocentric" in title_lower:
        return "用第一视角人类视频替代昂贵遥操作数据，是“数据源扩容”路线的代表。"
    if "latent action" in title_lower or "action manifold" in title_lower or "discretized" in title_lower:
        return "核心贡献在动作表示接口，适合放在“action interface / latent action”主线。"
    if "recipes" in title_lower or "foundation model" in title_lower or "technical report" in title_lower:
        return "更像系统化训练 recipe / technical report，可用于领导汇报里的主线归纳。"
    if record.focus == "review":
        return "综述类论文，适合补齐领域脉络，但不应与方法论文混为一谈。"
    if record.focus == "benchmark":
        return "偏评测与基准建设，可用于解释当前 VLA 预训练评价口径并不统一。"
    if record.focus == "posttraining":
        return "偏后训练而非纯预训练，适合作为补充而不是主线。"
    hits = top_matching_paragraphs(paragraphs, ["pre-train", "dataset", "foundation model", "generalization"], limit=1)
    if hits:
        return trim_text(hits[0], 140)
    return "与 VLA 预训练主线相关，但需要结合原文判断其更偏数据、模型还是后训练。"


def enrich_record(record: PaperRecord) -> None:
    text = record.full_text or record.preview_text
    paragraphs = split_paragraphs(text)
    record.training_data = summarize_datasets(text, paragraphs)
    record.data_processing = summarize_processing(paragraphs)
    record.training_stages = summarize_training_stages(paragraphs)
    record.hyperparameters = summarize_hyperparams(text, paragraphs)
    evidence_candidates = top_matching_paragraphs(
        paragraphs,
        [
            "pre-train",
            "dataset",
            "egocentric",
            "teleoperation",
            "learning rate",
            "batch size",
            "optimizer",
            "fine-tune",
            "post-train",
        ],
        limit=3,
    )
    record.evidence = [trim_text(item, 260) for item in evidence_candidates]
    record.executive_note = build_executive_note(record, paragraphs)


def load_full_text(record: PaperRecord) -> PaperRecord:
    if not needs_full_text(record):
        return record
    try:
        record.full_text = run_pdftotext(Path(record.pdf_path))
    except Exception as exc:
        record.reason = f"{record.reason}；全文抽取失败：{exc}".strip("；")
        return record
    enrich_record(record)
    return record


def collect_all_records() -> list[PaperRecord]:
    records = [
        PaperRecord(
            pdf_name=path.name,
            pdf_path=str(path),
            title=clean_title(path.name),
        )
        for path in sorted(PDF_DIR.rglob("*.pdf"))
    ]
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        records = list(executor.map(build_preview, records))
    candidate_records = [record for record in records if needs_full_text(record)]
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        updated = list(executor.map(load_full_text, candidate_records))
    updated_by_path = {record.pdf_path: record for record in updated}
    return [updated_by_path.get(record.pdf_path, record) for record in records]


def summarize_corpus(records: list[PaperRecord]) -> dict[str, object]:
    total = len(records)
    vla_candidates = sum(1 for record in records if record.vla_candidate)
    detailed = [record for record in records if record.relevance in {"high", "medium"}]
    high = [record for record in records if record.relevance == "high"]
    medium = [record for record in records if record.relevance == "medium"]
    focus_counter = Counter(record.focus for record in detailed)
    return {
        "total_pdfs": total,
        "vla_title_candidates": vla_candidates,
        "detailed_records": len(detailed),
        "high_relevance": len(high),
        "medium_relevance": len(medium),
        "focus_breakdown": dict(focus_counter),
    }


def report_records(records: list[PaperRecord]) -> list[PaperRecord]:
    selected = []
    for record in records:
        if record.relevance == "high":
            selected.append(record)
        elif record.relevance == "medium" and record.focus in {"review", "benchmark", "posttraining", "foundation", "data"}:
            selected.append(record)
    return selected


def group_records(records: list[PaperRecord]) -> dict[str, list[PaperRecord]]:
    groups: dict[str, list[PaperRecord]] = defaultdict(list)
    for record in records:
        if record.relevance == "high":
            groups["核心预训练/基础设施论文"].append(record)
        elif record.relevance == "medium" and record.focus in {"review", "benchmark"}:
            groups["综述与评测参考"].append(record)
        elif record.relevance == "medium":
            groups["相关但不完全以预训练为中心的论文"].append(record)
    for items in groups.values():
        items.sort(key=lambda item: (item.focus, item.title.lower()))
    return dict(groups)


def build_executive_summary(records: list[PaperRecord], corpus: dict[str, object]) -> list[str]:
    high = [record for record in records if record.relevance == "high"]
    all_text = "\n".join(record.full_text or record.preview_text for record in high)
    lower = all_text.lower()

    points = []
    if any(keyword in lower for keyword in ["egocentric", "human videos", "teleoperation"]):
        points.append("训练数据路线正在从昂贵的人类遥操作，扩展到 egocentric human videos、自动轨迹提取与 agentic data generation。")
    if any(keyword in lower for keyword in ["latent action", "action manifold", "discretized", "action chunk"]):
        points.append("动作表示是共同瓶颈，latent action / action manifold / action chunk / discretized action 是高频关键词。")
    if any(keyword in lower for keyword in ["post-train", "fine-tune", "post-training", "embodiment-specific"]):
        points.append("较稳定的训练范式是：通用数据预训练 -> embodiment-specific 微调/后训练 -> 必要时再做在线适配。")
    if any(keyword in lower for keyword in ["learning rate", "batch size", "optimizer"]):
        points.append("超参数披露并不统一，很多论文在摘要和正文都强调数据与阶段设计，但 batch size / lr / optimizer 往往只在实现细节或附录出现。")
    if any(keyword in lower for keyword in ["review", "benchmark", "arena", "generality"]):
        points.append("领域仍处在“训练 protocol 不统一”的阶段，综述/benchmark 论文的重要价值是统一比较口径。")
    if not points:
        points.append("高相关论文数量有限，说明真正聚焦 VLA 预训练而不是单点性能优化的工作仍然稀缺。")

    points.insert(
        0,
        f"本次扫描覆盖 `pdfs/` 下全部 {corpus['total_pdfs']} 篇 PDF；其中标题级 VLA 候选 {corpus['vla_title_candidates']} 篇，进入详细抽取 {corpus['detailed_records']} 篇，高相关 {corpus['high_relevance']} 篇；主报告最终纳入 {corpus.get('report_records', len(records))} 篇。",
    )
    return points[:5]


def cn_number(n: int) -> str:
    numerals = {1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六", 7: "七", 8: "八", 9: "九", 10: "十"}
    return numerals.get(n, str(n))


def render_markdown(records: list[PaperRecord], corpus: dict[str, object]) -> str:
    generated = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    groups = group_records(records)
    summary_points = build_executive_summary(records, corpus)

    lines: list[str] = []
    lines.append("# VLA 预训练全量调研报告")
    lines.append("")
    lines.append(f"- 生成时间：{generated}")
    lines.append(f"- 扫描范围：`pdfs/` 目录下全部 {corpus['total_pdfs']} 篇 PDF")
    lines.append(f"- 标题级 VLA 候选：{corpus['vla_title_candidates']} 篇")
    lines.append(f"- 进入详细抽取：{corpus['detailed_records']} 篇（高相关 {corpus['high_relevance']}，中相关 {corpus['medium_relevance']}）")
    lines.append(f"- 主报告纳入：{corpus.get('report_records', len(records))} 篇")
    lines.append("")
    lines.append("## 一、执行摘要")
    lines.append("")
    for point in summary_points:
        lines.append(f"- {point}")
    lines.append("")
    lines.append("## 二、筛选方法")
    lines.append("")
    lines.append("- 第 1 层：对全部 PDF 按文件名做全量扫描，识别 VLA / Vision-Language-Action / foundation model / dataset / pre-training / survey 等关键词。")
    lines.append("- 第 2 层：对候选论文抽取前 3 页，结合摘要和引言判断是否与“VLA 预训练阶段”直接相关。")
    lines.append("- 第 3 层：对高/中相关论文抽取全文，重点提炼训练数据、数据处理、训练阶段和训练超参数。")
    lines.append("- 说明：若论文未稳定披露 batch size / lr / optimizer 等超参数，报告将明确写为“未清晰披露”，避免臆测。")
    lines.append("")

    section_index = 3
    for group_name, items in groups.items():
        lines.append(f"## {cn_number(section_index)}、{group_name}")
        lines.append("")
        for idx, record in enumerate(items, start=1):
            lines.append(f"### {idx}. {record.title}")
            lines.append("")
            lines.append(f"- 论文定位：{record.executive_note}")
            lines.append(f"- 相关性判断：`{record.relevance}` / `{record.focus}`；{record.reason}")
            lines.append(f"- 标签：{' / '.join(record.tags) if record.tags else '无'}")
            lines.append(f"- 训练数据：{record.training_data}")
            lines.append(f"- 数据处理：{record.data_processing}")
            lines.append(f"- 训练阶段：{record.training_stages}")
            lines.append(f"- 训练超参数：{record.hyperparameters}")
            if record.evidence:
                lines.append("- 证据片段：")
                for ev in record.evidence:
                    lines.append(f"  - {ev}")
            lines.append(f"- 本地 PDF：`{record.pdf_name}`")
            lines.append("")
        section_index += 1

    lines.append(f"## {cn_number(section_index)}、总体观察")
    lines.append("")
    focus_breakdown = corpus.get("focus_breakdown", {})
    for focus, value in sorted(focus_breakdown.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{focus}`：{value} 篇")
    lines.append("")
    lines.append("- 建议领导汇报时按三条主线讲：")
    lines.append("- `数据扩容`：从 teleoperation 走向 egocentric videos、自动轨迹抽取、生成式数据。")
    lines.append("- `动作接口`：从直接回归动作，走向 latent action / action manifold / discretized action。")
    lines.append("- `训练范式`：从 VLM 初始化，走向预训练 + embodiment-specific 后训练 + 在线适配。")
    lines.append("")
    return "\n".join(lines).strip() + "\n"


def render_html(records: list[PaperRecord], corpus: dict[str, object]) -> str:
    generated = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    groups = group_records(records)
    summary_points = build_executive_summary(records, corpus)

    cards = []
    for group_name, items in groups.items():
        section_cards = []
        for record in items:
            evidence_html = ""
            if record.evidence:
                evidence_html = "<div class='evidence'><div class='field-label'>证据片段</div><ul>" + "".join(
                    f"<li>{html.escape(ev)}</li>" for ev in record.evidence
                ) + "</ul></div>"
            tags_html = "".join(f"<span class='tag'>{html.escape(tag)}</span>" for tag in record.tags)
            section_cards.append(
                f"""
                <article class="paper-card">
                  <div class="card-head">
                    <h3>{html.escape(record.title)}</h3>
                    <div class="tag-row">{tags_html}</div>
                  </div>
                  <div class="meta">相关性：<strong>{html.escape(record.relevance)}</strong> / {html.escape(record.focus)} ｜ {html.escape(record.reason)}</div>
                  <div class="field"><div class="field-label">论文定位</div><div>{html.escape(record.executive_note)}</div></div>
                  <div class="field"><div class="field-label">训练数据</div><div>{html.escape(record.training_data)}</div></div>
                  <div class="field"><div class="field-label">数据处理</div><div>{html.escape(record.data_processing)}</div></div>
                  <div class="field"><div class="field-label">训练阶段</div><div>{html.escape(record.training_stages)}</div></div>
                  <div class="field"><div class="field-label">训练超参数</div><div>{html.escape(record.hyperparameters)}</div></div>
                  {evidence_html}
                  <div class="pdf-name">{html.escape(record.pdf_name)}</div>
                </article>
                """
            )
        cards.append(
            f"""
            <section class="group">
              <h2>{html.escape(group_name)}</h2>
              <div class="paper-grid">
                {''.join(section_cards)}
              </div>
            </section>
            """
        )

    summary_items = "".join(f"<li>{html.escape(point)}</li>" for point in summary_points)
    focus_breakdown = "".join(
        f"<li><span>{html.escape(focus)}</span><strong>{value}</strong></li>"
        for focus, value in sorted(corpus.get("focus_breakdown", {}).items(), key=lambda item: (-item[1], item[0]))
    )

    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VLA 预训练全量调研报告</title>
  <style>
    :root {{
      --bg: #f5efe5;
      --paper: #fffaf2;
      --ink: #1f2a2e;
      --muted: #5f6b68;
      --accent: #8c4f2b;
      --line: #dccab7;
      --chip: #efe0cc;
      --shadow: 0 10px 30px rgba(67, 44, 22, 0.08);
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      background:
        radial-gradient(circle at top right, rgba(216,181,138,0.45), transparent 28%),
        linear-gradient(180deg, #f8f1e7 0%, var(--bg) 100%);
      color: var(--ink);
      font-family: "Microsoft YaHei UI", "PingFang SC", "Noto Sans SC", sans-serif;
      line-height: 1.6;
    }}
    .wrap {{
      width: min(1400px, calc(100vw - 40px));
      margin: 0 auto;
      padding: 36px 0 80px;
    }}
    .hero {{
      background: linear-gradient(135deg, rgba(140,79,43,0.94), rgba(53,85,79,0.92));
      color: #fff7ed;
      border-radius: 28px;
      padding: 36px;
      box-shadow: var(--shadow);
      overflow: hidden;
      position: relative;
    }}
    .hero::after {{
      content: "";
      position: absolute;
      right: -80px;
      top: -60px;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
    }}
    .hero h1 {{
      margin: 0 0 10px;
      font-size: clamp(28px, 4vw, 48px);
      line-height: 1.15;
      max-width: 840px;
    }}
    .hero p {{
      max-width: 900px;
      color: rgba(255,247,237,0.88);
      margin: 10px 0 0;
      font-size: 16px;
    }}
    .stats {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-top: 26px;
    }}
    .stat {{
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.16);
      border-radius: 20px;
      padding: 18px 20px;
    }}
    .stat strong {{
      display: block;
      font-size: 30px;
      line-height: 1.1;
      margin-bottom: 4px;
    }}
    .panel-grid {{
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 18px;
      margin-top: 20px;
    }}
    .panel {{
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 24px;
      box-shadow: var(--shadow);
      padding: 24px;
    }}
    .panel h2 {{
      margin: 0 0 12px;
      font-size: 24px;
    }}
    .panel ul {{
      margin: 0;
      padding-left: 20px;
    }}
    .panel li + li {{
      margin-top: 8px;
    }}
    .focus-list {{
      list-style: none;
      padding: 0;
      margin: 0;
    }}
    .focus-list li {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px dashed var(--line);
    }}
    .focus-list strong {{
      color: var(--accent);
      font-size: 22px;
    }}
    .group {{
      margin-top: 28px;
    }}
    .group h2 {{
      margin: 0 0 14px;
      font-size: 28px;
    }}
    .paper-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 16px;
    }}
    .paper-card {{
      background: rgba(255,250,242,0.94);
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 20px;
      box-shadow: var(--shadow);
    }}
    .card-head h3 {{
      margin: 0;
      font-size: 20px;
      line-height: 1.3;
    }}
    .tag-row {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }}
    .tag {{
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 999px;
      background: var(--chip);
      color: var(--accent);
      font-size: 12px;
      font-weight: 700;
    }}
    .meta {{
      margin-top: 12px;
      color: var(--muted);
      font-size: 13px;
    }}
    .field {{
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed var(--line);
    }}
    .field-label {{
      font-size: 12px;
      font-weight: 800;
      color: var(--accent);
      margin-bottom: 6px;
    }}
    .evidence ul {{
      margin: 0;
      padding-left: 18px;
    }}
    .pdf-name {{
      margin-top: 14px;
      font-size: 12px;
      color: var(--muted);
      word-break: break-all;
    }}
    @media (max-width: 980px) {{
      .panel-grid {{
        grid-template-columns: 1fr;
      }}
      .wrap {{
        width: min(100vw - 24px, 1400px);
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
      <h1>VLA 预训练全量调研报告</h1>
      <p>面向大会汇报的整理版。先对 <code>pdfs/</code> 下全部 PDF 做全量扫描，再对与 VLA 预训练直接相关的论文做详细抽取，重点关心训练数据、数据处理、训练阶段和训练超参数。</p>
      <div class="stats">
        <div class="stat"><strong>{corpus['total_pdfs']}</strong><span>总 PDF 数</span></div>
        <div class="stat"><strong>{corpus['vla_title_candidates']}</strong><span>标题级 VLA 候选</span></div>
        <div class="stat"><strong>{corpus['detailed_records']}</strong><span>详细抽取论文</span></div>
        <div class="stat"><strong>{corpus.get('report_records', len(records))}</strong><span>主报告纳入</span></div>
      </div>
    </section>

    <div class="panel-grid">
      <section class="panel">
        <h2>执行摘要</h2>
        <ul>{summary_items}</ul>
      </section>
      <section class="panel">
        <h2>详细抽取论文分布</h2>
        <ul class="focus-list">{focus_breakdown}</ul>
      </section>
    </div>

    {''.join(cards)}
  </div>
</body>
</html>
"""


def serialize_records(records: list[PaperRecord], corpus: dict[str, object]) -> dict[str, object]:
    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "corpus": corpus,
        "records": [dataclasses.asdict(record) for record in records],
    }


def main() -> int:
    if not PDF_DIR.exists():
        print(f"Missing pdf directory: {PDF_DIR}", file=sys.stderr)
        return 1
    records = collect_all_records()
    corpus = summarize_corpus(records)
    selected = report_records(records)
    corpus["report_records"] = len(selected)
    OUTPUT_MD.write_text(render_markdown(selected, corpus), encoding="utf-8")
    OUTPUT_HTML.write_text(render_html(selected, corpus), encoding="utf-8")
    OUTPUT_JSON.write_text(json.dumps(serialize_records(selected, corpus), ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote: {OUTPUT_MD}")
    print(f"Wrote: {OUTPUT_HTML}")
    print(f"Wrote: {OUTPUT_JSON}")
    print(json.dumps(corpus, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
