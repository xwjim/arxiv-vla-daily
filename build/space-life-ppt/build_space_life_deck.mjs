import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..", "..");
const OUT_DIR = path.join(ROOT_DIR, "outputs", "space-life-ppt");
const SCRATCH_DIR = path.join(ROOT_DIR, "tmp", "slides", "space-life-ppt");
const PREVIEW_DIR = path.join(SCRATCH_DIR, "preview");
const FINAL_PPTX = path.join(OUT_DIR, "output.pptx");

const W = 1280;
const H = 720;

const BG = "#0A1630";
const BG_SOFT = "#13305A";
const SHELL = "#162A52F0";
const SHELL_LINE = "#FFFFFF24";
const PANEL = "#1A315AF2";
const PANEL_ALT = "#203A68F4";
const PANEL_SOFT = "#274777E6";
const PANEL_CAPTION = "#203559EA";
const WHITE = "#FFFFFF";
const TEXT = "#F4F8FF";
const MUTED = "#D0DCF0";
const FAINT = "#A8B9D4";
const GOLD = "#F7B44A";
const CYAN = "#75D8FF";
const RED = "#FF765E";
const MINT = "#8FE2BB";
const TRANSPARENT = "#00000000";

const TITLE_FACE = "STZhongsong";
const BODY_FACE = "Microsoft YaHei";
const NUM_FACE = "Bahnschrift";

const SOURCES = [
  "宇航员在太空中如何生活.pptx",
  "钱航-载人航天工程(公开).ppt",
  "探索航天奥秘 弘扬航天精神.pptx",
  "中国载人航天工程官网：神舟二十号载人飞船发射取得圆满成功（2025-04-24）",
  "中国载人航天工程官网：神舟二十号3名航天员顺利进驻中国空间站（2025-04-25）",
  "国家航天局：天问二号探测器发射任务取得圆满成功（2025-05-29）",
  "中国航天科技集团：海南商业航天发射场一号工位首次启用并成功发射长八火箭观察记（2025-03-14）",
  "中国航天科技集团：我国载人登月火箭成功完成整流罩分离试验（2024-11-22）",
  "蓝箭航天：朱雀三号可复用火箭十公里级垂直起降飞行试验任务圆满成功（2024-09-11）",
];

const STARS = [
  [92, 120, 3],
  [170, 630, 4],
  [312, 82, 2],
  [438, 592, 3],
  [585, 112, 2],
  [726, 614, 3],
  [887, 84, 2],
  [968, 548, 3],
  [1124, 176, 2],
  [1188, 510, 3],
];

function asset(name) {
  return path.join(ROOT_DIR, "space_report_assets", "selected", name);
}

const SLIDES = [
  {
    layout: "cover",
    kicker: "载人航天专题",
    pace: "大会汇报版",
    title: "宇航员在太空中如何生活",
    lede:
      "从一次载人发射出发，沿着“送上去、住下来、做任务、平安回来”四条主线，理解太空生活到底是怎样被设计出来的。",
    chips: ["载人飞船", "空间站", "微重力", "生命保障", "返回地球"],
    quote: "太空生活的本质，不是浪漫漂浮，而是把日常的“吃住行和健康”全部重做一遍。",
    note:
      "从火箭起飞到返回回收，载人航天把人体适应、生命保障、在轨任务和地面支持连接成一条完整链路。",
    hero: {
      path: asset("shenzhou20-official-2.jpg"),
      fit: "cover",
      caption: "把人稳定送入轨道、送进空间站并安全返回，才是中国载人航天日常运行中最硬的系统工程。",
    },
    poster: {
      path: asset("china-launch-poster.jpg"),
      fit: "contain",
      caption: "内容主线：任务起点 → 训练准备 → 在轨生活 → 返回恢复 → 历史与精神。",
    },
  },
  {
    layout: "agenda",
    kicker: "内容框架",
    pace: "六个问题",
    title: "40 分钟，分成 6 个问题来讲",
    subtitle:
      "载人航天不是“飞上去”那么简单，而是一整套极端环境中的系统工程。把任务拆开之后，可以看到它同时涉及历史积累、工程能力、人体适应和团队协同。",
    items: [
      ["01", "先把人安全送上去", "火箭、飞船、逃逸系统和地面支持，决定了任务能不能开始。", "任务起点"],
      ["02", "为什么要经过高强度选拔与训练", "上天前必须把风险尽可能消灭在地面，把动作练成条件反射。", "训练体系"],
      ["03", "在轨“衣食住行”如何重新设计", "吃饭、喝水、睡觉、如厕、锻炼，在微重力下都不再是地面版本。", "在轨生活"],
      ["04", "宇航员在太空里究竟忙什么", "科学实验、站务维护、出舱准备、天地协同，决定这趟飞行的价值。", "任务执行"],
      ["05", "回来为什么也很难", "再入大气层、开伞减速、着陆回收，以及重新适应地球重力。", "返回恢复"],
      ["06", "航天历史与精神谱系", "从火箭起源到空间站时代，再到航天精神的形成，看到这条道路如何延展。", "历史与精神"],
    ],
    highlight:
      "整场汇报的核心不是罗列知识点，而是用一条完整任务链解释：人类为什么能够安全进入太空、在太空工作，并把人平安带回地球。",
  },
  {
    layout: "process-image",
    kicker: "任务总览",
    pace: "四大环节",
    title: "先看全局：一次载人飞行至少要同时解决四件事",
    items: [
      ["01", "安全送入轨道", "长征二号F运载火箭与神舟飞船共同完成送人入轨。"],
      ["02", "让人在轨生存", "天和核心舱、问天实验舱、梦天实验舱共同构成长期驻留平台。"],
      ["03", "支持持续工作", "长征七号配合天舟货运飞船，让补给、推进剂和物资循环不断档。"],
      ["04", "把人平安带回", "神舟飞船返回舱承担再入、防热、减速与着陆回收。"],
    ],
    media: {
      path: asset("shenzhou-cutaway.jpg"),
      fit: "contain",
      caption:
        "飞船不是一个“太空胶囊”那么简单。推进舱、返回舱、轨道舱各自承担能源、控制、居住和返回职责，真正让“人”变成可以在轨工作的人。",
    },
    highlight:
      "如果顺着航天科技集团研制的关键型号链去看，这套任务会更清楚：长征二号F、神舟、空间站舱段、长征七号和天舟，缺一不可。",
  },
  {
    layout: "cards-image",
    kicker: "宇航员选拔",
    pace: "综合素质",
    title: "宇航员选拔看重的，不是单项最强，而是综合最稳",
    cards: [
      ["专业背景", "工程、飞行、医学、科研", "宇航员要理解设备、看懂流程、执行实验，专业基础决定理解上限。"],
      ["身体条件", "抗加速度、抗失重、抗封闭", "火箭发射、长期在轨、再入着陆，对心肺、前庭和平衡系统都有挑战。"],
      ["心理素质", "稳定、冷静、可长期协作", "密闭空间里最怕情绪失控，真正重要的是能不能在压力下持续稳定工作。"],
      ["团队协同", "服从流程，也能互相补位", "在轨任务没有“单打独斗”，每一次操作都需要与同伴和地面形成闭环。"],
    ],
    media: {
      path: asset("shenzhou20-official-2.jpg"),
      fit: "cover",
      caption:
        "选拔的终点不是“能不能飞”，而是“飞上去之后能不能稳定完成任务”。今天中国空间站进入常态化运营后，这种能力要求只会更系统、更严格。",
    },
  },
  {
    layout: "training",
    kicker: "训练体系",
    pace: "地面验证",
    title: "真正难的是训练：把尽可能多的问题留在地面解决",
    steps: [
      ["1", "舱外服与设备训练", "宇航员不仅要会穿、会用，还要把每一个动作练到“几乎不用思考”。"],
      ["2", "座椅与发射适应", "发射和返回都伴随强加速度，姿态、呼吸和操作要提前适应。"],
      ["3", "失重环境熟悉", "真正上站前，必须先理解身体和物体在失重中的反应方式。"],
      ["4", "应急预案演练", "火灾、失压、设备故障、医疗急救，都要先练成流程再上天。"],
    ],
    medias: [
      ["shenzhou-flight-profile-slide.png", "contain", "飞行前训练不只是体能准备，还包括航天服、座舱约束和系统理解。"],
      ["escape-tower-slide.png", "contain", "发射段的安全底线之一，是把逃逸、故障处置和程序响应提前练成闭环。"],
      ["china-space-suit-slide.png", "contain", "训练的终点不是单项动作，而是把整条飞行链上的关键阶段都练到可执行、可复核。"],
    ],
    highlight:
      "训练的目标不是“把动作做对一次”，而是把错误率压到最低，并让人在压力下仍然能保持流程意识。",
  },
  {
    layout: "list-duo-media",
    kicker: "空间站生活",
    pace: "生命保障",
    title: "到站后先解决的，不是浪漫感，而是“家”如何稳定运转",
    rows: [
      ["居住区", "睡袋、个人物品、私密空间都要重新定义，因为“墙”和“天花板”在失重中没有固定意义。"],
      ["工作区", "电脑、实验机柜、操作台和工具都必须可固定、可回收、可快速切换任务。"],
      ["运动区", "跑步机、自行车和抗阻装置不是福利，而是日常健康维护的核心设备。"],
      ["医疗与应急区", "药品、监测设备、应急预案必须随时可用，不能等到出问题再找。"],
    ],
    medias: [
      ["shenzhou20-station-entry.jpg", "cover", "神舟二十号乘组进驻空间站的舱内画面，更直观地展示了在轨工作与生活环境的组织方式。"],
      ["tianhe-official-3.jpg", "cover", "从天和核心舱到问天、梦天，长期驻留所需的工作区、生活区和生命保障能力是整体设计出来的。"],
    ],
    highlight:
      "空间站的“家居感”来自严密的生命保障与资源管理，而不是地面意义上的舒适装修。",
  },
  {
    layout: "image-cards",
    kicker: "饮食系统",
    pace: "补给与营养",
    title: "吃什么：太空餐并不神秘，但每一口都经过“环境重写”",
    media: {
      path: asset("space-food.jpg"),
      fit: "contain",
      caption:
        "太空餐首先要解决安全，再去追求丰富。不能掉渣、不能乱漂、便于复水加热、利于长期保存，都是设计前提。",
    },
    cards: [
      ["复水", "食物要便于加水恢复", "因为在轨储运和处理空间有限，复水食品比“现场烹饪”更可控。"],
      ["加热", "流程简单、步骤固定", "宇航员不是厨师，太空餐的设计重点是快速、安全、少失误。"],
      ["营养", "长期任务必须讲均衡", "高强度任务和失重环境下，能量、蛋白质、微量元素都不能随意波动。"],
      ["情绪", "食物也是心理支持的一部分", "任务周期越长，食物的口味、熟悉感和仪式感越重要。"],
    ],
    highlight: "在地面我们觉得“吃饭”是本能；在太空，吃饭是一套被工程化和流程化的动作系统。",
  },
  {
    layout: "list-image",
    kicker: "日常细节",
    pace: "洗漱睡眠",
    title: "洗漱、如厕、睡眠都要重新发明",
    rows: [
      ["洗漱", "用水量受限，动作要防止液滴漂浮，很多步骤要借助纸巾、湿巾和专门容器完成。"],
      ["如厕", "依赖气流导向和收集系统，而不是地面靠重力的自然下落逻辑。"],
      ["睡眠", "睡袋固定在舱壁，重点不是“躺平”，而是防止身体无控制漂移和碰撞。"],
      ["节律", "航天员需要依靠灯光、任务安排和天地协同保持稳定作息，不能让生物钟散掉。"],
    ],
    media: {
      path: asset("space-toilet.jpg"),
      fit: "contain",
      caption:
        "如厕系统最能说明太空生活的工程化特征。在地面依赖重力完成的动作，在轨道上要靠气流、结构和流程共同接管。",
    },
    highlight:
      "微重力环境会把最平凡的日常变成一个个“小工程问题”。也正因此，太空生活最能说明航天是系统工程。",
  },
  {
    layout: "quote-cards",
    kicker: "健康维护",
    pace: "在轨锻炼",
    title: "每天都要运动，因为失重会悄悄改造身体",
    quote: "在太空里，运动不是加分项，而是维持工作能力和返回能力的生命线。",
    quoteBody:
      "失重减少了肌肉和骨骼承受的机械刺激，因此必须通过制度化训练，把地面环境中天然存在的负荷补回来。",
    cards: [
      ["有氧", "维持心肺耐力", "发射、在轨工作和返回后的恢复，都要求航天员保持基础耐力。"],
      ["抗阻", "对抗肌肉与骨骼退化", "失重意味着“身体不用托着自己”，久而久之肌肉和骨量都会下降。"],
      ["柔韧", "让动作保持可控", "在狭小舱内工作，动作控制和关节状态都要保持在稳定区间。"],
      ["心理", "运动也是情绪管理", "长期封闭环境里，运动能帮助恢复节律，减轻疲劳和心理压力。"],
    ],
    highlight:
      "运动、营养、作息和医学监测共同构成在轨健康维护闭环，任何一环缺失都会放大失重带来的影响。",
  },
  {
    layout: "focus-panels",
    kicker: "人体适应",
    pace: "人体变化",
    title: "失重带来的，不是轻松，而是另一套生理学",
    cards: [
      ["辐射", "空间环境比地面更“硬”", "辐射监测、防护材料和任务窗口选择，都是长期在轨绕不开的问题。"],
      ["心理", "封闭环境会放大情绪", "航天员既要执行技术任务，也要管理自己的情绪和团队关系。"],
    ],
    rows: [
      ["体液与前庭", "体液重新分布会改变头部感受，前庭系统初期容易出现眩晕和不适。"],
      ["肌肉与骨骼", "长期失重会让肌肉和骨量下降，因此必须靠运动和营养补回来。"],
      ["节律与工作", "睡眠、作息和情绪管理会直接影响在轨工作质量与风险控制。"],
    ],
    highlight:
      "所以“宇航员在太空中如何生活”并不是一个轻松的科普题，而是关于人体、环境和工程如何互相适配的问题。",
  },
  {
    layout: "timeline-image",
    kicker: "日程安排",
    pace: "一天流程",
    title: "宇航员的一天，高度程式化，但每一分钟都很贵",
    items: [
      ["晨间", "状态检查", "先看身体、看任务计划、看设备状态，一天从检查开始。"],
      ["上午", "实验与操作", "执行当天的实验方案、站务维护和设备切换。"],
      ["中段", "天地沟通", "和地面团队对表、汇报问题、更新后续步骤。"],
      ["下午", "整理与复核", "把样品、工具和记录重新固定，避免下一轮任务受影响。"],
      ["固定", "锻炼", "再忙也要挪出专门时间运动，这属于必须完成的任务。"],
      ["夜间", "休息与节律维持", "睡眠并不是“放空”，而是为第二天继续高强度任务做准备。"],
    ],
    media: {
      path: asset("shenzhou20-station-entry.jpg"),
      fit: "contain",
      caption:
        "太空生活的关键字是“计划性”。空间站里的作息、实验、锻炼和天地协同，都要围绕任务节奏被精确安排。",
    },
  },
  {
    layout: "cards-image",
    kicker: "任务执行",
    pace: "科学与维护",
    title: "宇航员在太空里不是“待着”，而是在持续工作",
    cards: [
      ["实验研究", "把轨道变成实验室", "微重力条件下，一些流体、材料和生命现象与地面完全不同。"],
      ["设备维护", "空间站也要“物业管理”", "滤芯、电路、计算设备、机柜和接口都要定期检查和更换。"],
      ["物资转运", "每一件东西都要有去处", "货物上行、样品回收、垃圾处理，都在空间受限条件下进行。"],
      ["天地协同", "宇航员从不脱离地面团队", "地面控制、科研团队和工程团队始终在线，形成完整的任务闭环。"],
    ],
    media: {
      path: asset("cmse-live-3.jpg"),
      fit: "cover",
      caption:
        "航天员是空间站里的“综合岗位操作员”。从交会对接到设备操作，再到站务维护和天地协同，在轨任务本身就是连续的工作链。",
    },
  },
  {
    layout: "compare",
    kicker: "科研价值",
    pace: "为什么上天做",
    title: "为什么一些实验非得搬到太空里做",
    items: [
      ["流体与燃烧", "少了重力干扰，现象会“露出原形”", "地面很多现象总被对流和沉降掩盖，而在轨道上能看到更纯粹的物理过程。"],
      ["材料与结晶", "微结构更值得研究", "材料形成过程对重力很敏感，轨道环境能提供不同的生长与分层条件。"],
      ["生命与医学", "人体响应本身就是研究对象", "宇航员如何适应失重，也反过来帮助我们理解人体机制和地面医学问题。"],
    ],
    highlight:
      "如果把空间站只理解为“住人的地方”，就低估了它。它更像一个把极端环境转化为科研条件的轨道实验平台。",
    note:
      "空间站的价值不仅在于“有人驻留”，更在于它把极端环境转化为可持续、可重复、可积累的数据平台。",
  },
  {
    layout: "list-image",
    kicker: "舱外作业",
    pace: "风险控制",
    title: "最硬核的任务：出舱活动与应急处置",
    rows: [
      ["出舱活动", "维修、更换、安装或测试舱外设备，对动作精度和时间窗口要求极高。"],
      ["任务清单", "每一步几乎都要按预案执行，因为舱外没有“试试看”的空间。"],
      ["应急处置", "失压、火灾、设备故障或身体异常，都必须按地面演练过的步骤快速响应。"],
      ["天地协同", "宇航员在前端执行，真正支撑他的是后方完整的工程团队和地面判断链路。"],
    ],
    media: {
      path: asset("shenzhou-flight-profile-slide.png"),
      fit: "contain",
      caption:
        "舱外活动看起来像“走出舱门”，本质上却是把人装进一套独立生命保障系统里再去执行高风险任务。",
    },
    highlight:
      "越是高风险环节，越看不见“个人即兴发挥”，看见的更多是训练、制度、流程和团队支持。",
  },
  {
    layout: "steps-image",
    kicker: "返回流程",
    pace: "分离再入",
    title: "回来为什么也很难：真正的关键在系统协同",
    steps: [
      ["1", "撤离与准备", "整理样品和设备，进入返回状态，确认返回舱工作正常。"],
      ["2", "分离与再入", "服务舱分离后，返回舱按预定姿态切入大气层。"],
      ["3", "高热与黑障", "再入阶段既要承受极高热流，也要经历短时通信受限。"],
      ["4", "开伞与着陆", "速度要多级减下来，着陆后还要迅速展开回收和医学检查。"],
    ],
    media: {
      path: asset("shenzhou-return-flow.jpg"),
      fit: "contain",
      caption:
        "返回不是“掉下来”，而是一整套精密受控的减速与分离流程。只要有一步处理不好，前面所有任务成果都可能失去意义。",
    },
    highlight:
      "返回任务把轨道飞行转换成地面安全着陆，真正考验的是轨道控制、热防护、减速和回收的全过程协同。",
  },
  {
    layout: "dual-image-cards",
    kicker: "再入减速",
    pace: "高热防护",
    title: "真正的硬仗在再入：高温、姿态控制、减速一环都不能少",
    medias: [
      ["reentry-heating.jpg", "contain", "再入阶段最大的关键词是高热。"],
      ["parachute-descent.jpg", "contain", "开伞阶段最大的关键词是减速。"],
    ],
    cards: [
      ["防热", "返回舱要扛住高热冲刷", "大气再入时的热环境极端，防热结构和材料设计是保命底线。"],
      ["姿态", "不是随便“烧回来”", "返回姿态一旦偏差过大，热流分布和减速过程都会变得危险。"],
      ["降落伞", "减速要分级完成", "不是一把伞解决全部问题，而是一套次序严密的减速逻辑。"],
      ["回收", "落地后立刻进入回收链路", "地面搜救和医学保障必须迅速跟上，把“安全返回”真正闭环完成。"],
    ],
  },
  {
    layout: "list-duo-media",
    kicker: "返回恢复",
    pace: "重力再适应",
    title: "落地不等于结束：重新适应地球，也是任务的一部分",
    rows: [
      ["重力再适应", "在轨长期微重力后，重新面对地球重力，航天员可能会出现眩晕、乏力和不适。"],
      ["医学观察", "心血管、肌肉骨骼、前庭平衡和睡眠状态都要持续评估。"],
      ["任务收口", "除了照顾人本身，还要及时转运样品、回收数据、复盘操作记录。"],
      ["心理切换", "从高度紧张的任务状态回到地面生活，同样需要一个过渡过程。"],
    ],
    medias: [
      ["capsule-landing-1.jpg", "cover", "着陆后，返回舱并不是“终点”，而是回收工作的起点。"],
      ["capsule-landing-2.jpg", "cover", "回收、体检、恢复，是“安全返回”的完整闭环。"],
    ],
    highlight:
      "重新适应地球重力的过程，说明载人航天并不是一次简单往返，而是一场跨环境的人体适应实验。",
  },
  {
    layout: "cards-gallery",
    kicker: "航天历史",
    pace: "世界航天",
    title: "航天史的主线，是不断突破“更快、更远、更稳”的能力边界",
    cards: [
      ["起源", "从火药火箭到现代航天", "古代火箭解决了“喷气推进”的原始想象，现代液体火箭才真正打开了航天时代的大门。"],
      ["起点", "卫星上天改写了人类尺度", "第一颗人造卫星进入轨道，意味着人类开始具备稳定抵达太空的能力。"],
      ["跨越", "载人飞行把“机器飞”变成“人能去”", "从加加林进入太空，到登月成功，航天史开始同时面对人体适应与工程控制两条难线。"],
      ["延展", "空间站时代强调长期任务", "真正的成熟不是飞一次，而是能够长期运营、持续补给、稳定执行实验并安全返回。"],
    ],
    medias: [
      ["history-origin-slide.png", "contain", "火箭起源：从古代火药火箭到现代航天理论，推进方式不断演化。"],
      ["history-satellite-slide.png", "contain", "第一颗人造卫星：把“进入轨道”变成人类工程能力的一部分。"],
      ["history-gagarin-slide.png", "contain", "首次载人飞行：航天从无人探测迈向人体参与的新时代。"],
      ["history-moon-slide.png", "contain", "登月任务：展示了推进、导航、返回与组织能力的综合跃升。"],
    ],
    highlight:
      "航天历史真正改变的，不只是飞行高度，而是人类把短时抵达太空逐步发展成长期利用太空的能力。",
  },
  {
    layout: "timeline-media",
    kicker: "中国载人航天",
    pace: "稳定运营",
    title: "中国载人航天，正在把“能飞”升级为“长期稳定在轨运行”",
    items: [
      ["1970", "东方红一号", "长征一号把中国第一颗人造卫星送入轨道，航天工程迈出标志性一步。"],
      ["2003", "神舟五号", "长征二号F托举神舟五号入轨，独立载人航天能力形成。"],
      ["2008", "神舟七号", "神舟飞船支持首次空间出舱活动，把任务推进到“在轨作业”。"],
      ["2012", "神舟九号", "神舟与目标飞行器完成首次载人交会对接，组合体运行取得关键突破。"],
      ["2022", "空间站建成", "天和、问天、梦天形成基本构型，空间站平台真正落地。"],
      ["持续推进", "常态化运营", "神舟轮换、天舟补给、舱外活动和实验任务进入稳定阶段。"],
    ],
    medias: [
      ["china-spacecraft-timeline-slide.png", "contain", "从神舟飞船到空间站任务，中国载人航天能力是沿着一系列关键节点持续长出来的。"],
      ["china-rocket-family-slide.png", "contain", "长征二号F、长征七号、长征五号和长征八号系列，正在共同托起载人、补给、深空和商业发射能力。"],
    ],
    highlight:
      "如果点一下航天科技集团研制的型号链，可以看到这套能力不是抽象概念，而是由长征二号F、神舟、长征五号系列、长征七号、天舟以及空间站舱段共同支撑起来的。",
  },
  {
    layout: "timeline-media",
    kicker: "近期任务",
    pace: "2024-2025",
    title: "把视角拉近：近期中国航天的重点任务，正在同时推进载人、深空、登月与可重复使用方向",
    items: [
      ["2025.04.24", "神舟二十号", "长征二号F发射成功，航天员乘组顺利进入中国空间站，空间站常态化运营继续向前推进。"],
      ["2025.05.29", "天问二号", "中国行星探测工程继续向深空迈进，任务瞄准小行星采样返回与彗星伴飞探测。"],
      ["2025.03.14", "海南商发一号工位首秀", "商业航天发射场首个工位投入使用并完成长八火箭发射，发射基础设施能力正在补齐。"],
      ["2024.11.22", "长征十号系列试验", "面向载人登月任务，长征十号系列运载火箭完成整流罩分离试验，关键大系统验证持续推进。"],
      ["2024.09.11", "朱雀三号 10 公里级回收试验", "可重复使用方向已从概念验证走向实飞验证，垂直起降返回能力开始进入工程化阶段。"],
      ["看趋势", "几条能力线并行展开", "空间站运营、深空探测、面向登月、商业发射与可重复使用，不再是单线突破，而是在同步建设。"],
    ],
    medias: [
      ["tianwen2-official.jpg", "contain", "天问二号任务示意图：把小行星采样返回与彗星伴飞探测放进同一次深空任务设计中。"],
      ["zhuque3-vtvl-1.jpg", "cover", "朱雀三号 10 公里级垂直起降飞行试验，代表可重复使用能力已经进入实飞验证阶段。"],
    ],
    highlight:
      "如果只看单次发射，会觉得每个任务彼此独立；把时间轴拉近后会发现，中国航天正在同步建设“稳定在轨、走向深空、面向登月、提升发射效率和探索重复使用”这几条能力线。",
  },
  {
    layout: "image-cards",
    kicker: "航天精神",
    pace: "载人任务",
    title: "载人航天精神，强调的是在极端任务中把难事做成的能力",
    media: {
      path: asset("spirit-panel.png"),
      fit: "contain",
      caption:
        "载人航天精神通常概括为四个“特别能”。这不是抽象口号，而是高风险任务对团队能力、组织纪律和长期投入的真实要求。",
    },
    cards: [
      ["特别能吃苦", "长期准备，不靠一时兴奋", "载人航天没有“临场发挥式成功”，只有年复一年的积累和打磨。"],
      ["特别能战斗", "关键窗口不允许掉链子", "发射、对接、出舱、返回，每一个关键时刻都需要团队顶得上。"],
      ["特别能攻关", "真正的难题总在边界处出现", "极端环境中的工程，几乎注定会碰到新问题，攻关能力决定天花板。"],
      ["特别能奉献", "载人航天从来不是某一个人的胜利", "看见的是航天员，背后站着的是无数工程师、科研人员和保障团队。"],
    ],
    highlight:
      "宇航员在太空中的生活方式，最终反映的不是个人技巧，而是一个任务体系能否长期稳定地支撑人进入太空、利用太空、返回地球。",
  },
  {
    layout: "list-gallery",
    kicker: "精神谱系",
    pace: "传承延展",
    title: "中国航天的发展，也形成了随着任务升级不断延展的精神谱系",
    rows: [
      ["两弹一星精神", "热爱祖国、无私奉献、自力更生、艰苦奋斗，为中国航天打下早期精神底色。"],
      ["载人航天精神", "特别能吃苦、特别能战斗、特别能攻关、特别能奉献，把高风险任务的组织要求沉淀成系统方法。"],
      ["探月精神", "追逐梦想、勇于探索、协同攻坚、合作共赢，把中国航天从近地轨道推向更远空间。"],
      ["新时代北斗精神", "自主创新、开放融合、万众一心、追求卓越，体现航天能力向国家基础设施和社会应用延展。"],
    ],
    medias: [
      ["spirit-two-bombs-slide.png", "contain", "两弹一星精神：国家起步阶段的奠基力量。"],
      ["spirit-panel.png", "contain", "载人航天精神：高风险任务中的团队纪律与攻关能力。"],
      ["spirit-lunar-slide.png", "contain", "探月精神：面向深空目标的探索气质。"],
      ["spirit-beidou-slide.png", "contain", "新时代北斗精神：把航天能力转化为国家级基础设施。"],
    ],
    highlight:
      "精神谱系不是孤立背诵的口号，而是不同时代在面对不同任务时形成的共同价值取向和工作作风。",
    note:
      "从两弹一星到载人航天、探月工程和北斗系统，航天精神并不是单一口号，而是一条随着任务升级不断扩展的精神谱系。",
  },
  {
    layout: "closing",
    kicker: "总结",
    pace: "三点结论",
    title: "三点结论",
    items: [
      ["1", "宇航员不是“漂在天上的人”", "他们是极端环境里的系统操作员，必须靠训练、流程和装备一起工作。"],
      ["2", "太空生活的本质是重新设计日常", "吃饭、睡觉、如厕、锻炼、实验和返回，每一项都需要围绕微重力重做一遍。"],
      ["3", "每一次平安往返，背后都是国家能力", "从火箭到飞船，从空间站到回收体系，再到团队精神，这是一整套系统工程。"],
    ],
    footer:
      "从火箭起飞到返回回收，从航天历史到精神谱系，载人航天展示的是一种把高风险任务长期、稳定、成体系完成的能力。",
  },
];

async function ensureDirs() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(SCRATCH_DIR, { recursive: true });
  await fs.rm(PREVIEW_DIR, { recursive: true, force: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
}

async function readImageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function line(fill = TRANSPARENT, width = 0, style = "solid") {
  return { style, fill, width };
}

function addShape(slide, geometry, x, y, w, h, fill = TRANSPARENT, lineFill = TRANSPARENT, lineWidth = 0) {
  return slide.shapes.add({
    geometry,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: line(lineFill, lineWidth),
  });
}

function addText(
  slide,
  text,
  x,
  y,
  w,
  h,
  {
    fontSize = 16,
    color = TEXT,
    bold = false,
    face = BODY_FACE,
    align = "left",
    valign = "top",
    fill = TRANSPARENT,
    lineFill = TRANSPARENT,
    lineWidth = 0,
    autoFit = "shrinkText",
  } = {},
) {
  const box = addShape(slide, "rect", x, y, w, h, fill, lineFill, lineWidth);
  box.text = String(text ?? "");
  box.text.fontSize = fontSize;
  box.text.color = color;
  box.text.bold = bold;
  box.text.typeface = face;
  box.text.alignment = align;
  box.text.verticalAlignment = valign;
  box.text.insets = { left: 0, right: 0, top: 0, bottom: 0 };
  if (autoFit) {
    box.text.autoFit = autoFit;
  }
  return box;
}

function pillWidth(text, min = 120) {
  return Math.max(min, String(text).length * 18 + 34);
}

function addPill(slide, text, x, y, { fill = PANEL_SOFT, lineFill = SHELL_LINE, textColor = TEXT } = {}) {
  const w = pillWidth(text);
  addShape(slide, "roundRect", x, y, w, 34, fill, lineFill, 1);
  addText(slide, text, x + 18, y + 7, w - 36, 20, {
    fontSize: 13,
    color: textColor,
    bold: true,
    face: BODY_FACE,
    autoFit: null,
  });
  return w;
}

function addBackdrop(slide, index, total, kicker, pace) {
  slide.background.fill = BG;
  addShape(slide, "rect", 0, 0, W, H, BG, TRANSPARENT, 0);
  addShape(slide, "ellipse", -180, -120, 470, 360, "#75D8FF18", TRANSPARENT, 0);
  addShape(slide, "ellipse", 820, -110, 360, 260, "#F7B44A14", TRANSPARENT, 0);
  addShape(slide, "ellipse", 960, 420, 320, 260, "#FF765E12", TRANSPARENT, 0);
  addShape(slide, "ellipse", 300, 540, 260, 180, "#8FE2BB12", TRANSPARENT, 0);
  addShape(slide, "ellipse", 470, 0, 220, 120, "#6DBBFF10", TRANSPARENT, 0);
  for (const [x, y, s] of STARS) {
    addShape(slide, "ellipse", x, y, s, s, "#FFFFFF99", TRANSPARENT, 0);
  }
  addShape(slide, "roundRect", 42, 26, 1196, 668, SHELL, SHELL_LINE, 1.1);
  addShape(slide, "rect", 42, 26, 1196, 2, "#FFFFFF08", TRANSPARENT, 0);
  addText(slide, String(index).padStart(2, "0"), 1102, 42, 102, 80, {
    fontSize: 70,
    color: "#FFFFFF10",
    bold: true,
    face: NUM_FACE,
    align: "right",
    autoFit: null,
  });
  addPill(slide, kicker, 78, 58, { fill: "#2A2E3A80", lineFill: "#FFFFFF14", textColor: GOLD });
  const paceW = pillWidth(pace);
  addPill(slide, pace, 1180 - paceW, 58, { fill: "#0F274780", lineFill: "#75D8FF22", textColor: "#DFF6FF" });
  addText(slide, `${String(index).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, 1046, 668, 160, 20, {
    fontSize: 10,
    color: FAINT,
    face: BODY_FACE,
    align: "right",
    autoFit: null,
  });
}

function addTitleBlock(slide, title, subtitle = "", { x = 78, y = 118, w = 520, titleSize = 34 } = {}) {
  addText(slide, title, x, y, w, 100, {
    fontSize: titleSize,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
  });
  if (subtitle) {
    addText(slide, subtitle, x, y + 106, w, 54, {
      fontSize: 16,
      color: MUTED,
      face: BODY_FACE,
    });
  }
}

function addHighlight(slide, text, x, y, w, h = 52) {
  addShape(slide, "roundRect", x, y, w, h, "#F7B44A14", "#F7B44A24", 1);
  addText(slide, text, x + 18, y + 12, w - 36, h - 20, {
    fontSize: 14,
    color: "#F3F7FE",
    face: BODY_FACE,
  });
}

function addFigure(slide, media, x, y, w, h, { captionH = 52, containPad = 14 } = {}) {
  const imageH = h - captionH - 12;
  addShape(slide, "roundRect", x, y, w, imageH, "#081120", "#FFFFFF14", 1);
  const pad = media.fit === "contain" ? containPad : 10;
  const image = slide.images.add({
    blob: media.blob,
    fit: media.fit || "cover",
    alt: media.alt || media.caption || "slide image",
  });
  image.position = { left: x + pad, top: y + pad, width: w - pad * 2, height: imageH - pad * 2 };
  addShape(slide, "roundRect", x, y + imageH + 10, w, captionH, PANEL_CAPTION, "#FFFFFF10", 1);
  addText(slide, media.caption || "", x + 16, y + imageH + 22, w - 32, captionH - 18, {
    fontSize: 13,
    color: "#DDE8F7",
    face: BODY_FACE,
  });
}

function addCard(slide, item, x, y, w, h, { accent = GOLD, compact = false } = {}) {
  addShape(slide, "roundRect", x, y, w, h, PANEL_ALT, "#FFFFFF10", 1);
  addShape(slide, "rect", x, y, w, 5, accent, TRANSPARENT, 0);
  if (item[0]) {
    addText(slide, item[0], x + 18, y + 14, w - 36, 20, {
      fontSize: compact ? 11 : 12,
      color: CYAN,
      bold: true,
      face: BODY_FACE,
      autoFit: null,
    });
  }
  addText(slide, item[1], x + 18, y + (item[0] ? 40 : 18), w - 36, compact ? 52 : 60, {
    fontSize: compact ? 20 : 22,
    color: TEXT,
    bold: true,
    face: BODY_FACE,
  });
  addText(slide, item[2], x + 18, y + (compact ? 92 : 108), w - 36, h - (compact ? 108 : 124), {
    fontSize: 14,
    color: MUTED,
    face: BODY_FACE,
  });
}

function addCardGrid(slide, items, x, y, w, h, cols = 2, compact = false) {
  const rows = Math.ceil(items.length / cols);
  const gapX = 14;
  const gapY = 14;
  const cardW = (w - gapX * (cols - 1)) / cols;
  const cardH = (h - gapY * (rows - 1)) / rows;
  items.forEach((item, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    const accent = [GOLD, CYAN, RED, MINT][idx % 4];
    addCard(slide, item, x + col * (cardW + gapX), y + row * (cardH + gapY), cardW, cardH, { accent, compact });
  });
}

function addRowList(slide, rows, x, y, w, h, { numbered = false } = {}) {
  const gap = 12;
  const rowH = (h - gap * (rows.length - 1)) / rows.length;
  rows.forEach((row, idx) => {
    const top = y + idx * (rowH + gap);
    addShape(slide, "roundRect", x, top, w, rowH, PANEL, "#FFFFFF10", 1);
    if (numbered) {
      addShape(slide, "ellipse", x + 18, top + 18, 32, 32, "#75D8FF22", "#75D8FF44", 1);
      addText(slide, row[0], x + 18, top + 24, 32, 12, {
        fontSize: 13,
        color: WHITE,
        bold: true,
        face: BODY_FACE,
        align: "center",
        autoFit: null,
      });
      addText(slide, row[1], x + 68, top + 14, w - 88, 24, {
        fontSize: 16,
        color: TEXT,
        bold: true,
        face: BODY_FACE,
      });
      addText(slide, row[2], x + 68, top + 40, w - 88, rowH - 52, {
        fontSize: 14,
        color: MUTED,
        face: BODY_FACE,
      });
    } else {
      addText(slide, row[0], x + 20, top + 14, w - 40, 22, {
        fontSize: 16,
        color: GOLD,
        bold: true,
        face: BODY_FACE,
      });
      addText(slide, row[1], x + 20, top + 38, w - 40, rowH - 50, {
        fontSize: 14,
        color: MUTED,
        face: BODY_FACE,
      });
    }
  });
}

function addTimelineGrid(slide, items, x, y, w, h, { cols = 3, compact = false } = {}) {
  const rows = Math.ceil(items.length / cols);
  const gapX = 14;
  const gapY = 16;
  const cardW = (w - gapX * (cols - 1)) / cols;
  const cardH = (h - gapY * (rows - 1)) / rows;
  items.forEach((item, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    const left = x + col * (cardW + gapX);
    const top = y + row * (cardH + gapY);
    addShape(slide, "roundRect", left, top, cardW, cardH, PANEL_ALT, "#FFFFFF10", 1);
    addShape(slide, "roundRect", left + 16, top + 16, 72, 24, "#FF765E18", "#FF765E24", 1);
    addText(slide, item[0], left + 22, top + 21, 60, 12, {
      fontSize: 11,
      color: "#FFD8CF",
      bold: true,
      face: BODY_FACE,
      autoFit: null,
    });
    addText(slide, item[1], left + 16, top + 52, cardW - 32, compact ? 40 : 48, {
      fontSize: compact ? 16 : 20,
      color: TEXT,
      bold: true,
      face: BODY_FACE,
    });
    addText(slide, item[2], left + 16, top + (compact ? 90 : 104), cardW - 32, cardH - (compact ? 104 : 120), {
      fontSize: compact ? 13 : 14,
      color: MUTED,
      face: BODY_FACE,
    });
  });
}

function addCompareCards(slide, items, x, y, w, h) {
  const gap = 16;
  const cardW = (w - gap * 2) / 3;
  items.forEach((item, idx) => {
    const left = x + idx * (cardW + gap);
    addShape(slide, "roundRect", left, y, cardW, h, PANEL_ALT, "#FFFFFF10", 1);
    addText(slide, item[0], left + 18, y + 18, cardW - 36, 18, {
      fontSize: 12,
      color: CYAN,
      bold: true,
      face: BODY_FACE,
      autoFit: null,
    });
    addText(slide, item[1], left + 18, y + 46, cardW - 36, 66, {
      fontSize: 22,
      color: TEXT,
      bold: true,
      face: BODY_FACE,
    });
    addText(slide, item[2], left + 18, y + 120, cardW - 36, h - 138, {
      fontSize: 14,
      color: MUTED,
      face: BODY_FACE,
    });
  });
}

function addQuotePanel(slide, quote, body, x, y, w, h) {
  addShape(slide, "roundRect", x, y, w, h, PANEL, "#FFFFFF10", 1);
  addText(slide, "核心提醒", x + 20, y + 18, w - 40, 16, {
    fontSize: 12,
    color: CYAN,
    bold: true,
    face: BODY_FACE,
    autoFit: null,
  });
  addText(slide, quote, x + 20, y + 56, w - 40, 160, {
    fontSize: 30,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
  });
  addText(slide, body, x + 20, y + h - 92, w - 40, 72, {
    fontSize: 15,
    color: MUTED,
    face: BODY_FACE,
  });
}

function addInlineRows(slide, rows, x, y, w, h, { titleW = 130, titleSize = 16, bodySize = 13 } = {}) {
  const gap = 12;
  const rowH = (h - gap * (rows.length - 1)) / rows.length;
  rows.forEach((row, idx) => {
    const top = y + idx * (rowH + gap);
    addShape(slide, "roundRect", x, top, w, rowH, PANEL, "#FFFFFF10", 1);
    addText(slide, row[0], x + 18, top + 12, titleW, rowH - 24, {
      fontSize: titleSize,
      color: GOLD,
      bold: true,
      face: BODY_FACE,
    });
    addText(slide, row[1], x + titleW + 26, top + 12, w - titleW - 44, rowH - 24, {
      fontSize: bodySize,
      color: MUTED,
      face: BODY_FACE,
    });
  });
}

function addSpeakerNotes(slide, data) {
  const noteParts = [
    `${data.kicker || ""} | ${data.title || ""}`.trim(),
    data.highlight || data.note || data.lede || "",
    "",
    "[Sources]",
    ...SOURCES.map((item) => `- ${item}`),
  ].filter(Boolean);
  slide.speakerNotes.setText(noteParts.join("\n"));
}

async function loadMediaObject(spec) {
  return {
    ...spec,
    blob: await readImageBlob(spec.path),
  };
}

async function buildCover(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addShape(slide, "roundRect", 78, 96, 594, 520, "#0B152BFA", "#1A2E55", 1);
  addText(slide, data.title, 110, 148, 500, 150, {
    fontSize: 48,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
  });
  addText(slide, data.lede, 112, 314, 474, 92, {
    fontSize: 20,
    color: "#E8F1FF",
    face: BODY_FACE,
  });
  let chipX = 112;
  data.chips.forEach((chip) => {
    const w = pillWidth(chip, 84);
    addPill(slide, chip, chipX, 430, { fill: "#1A243B", lineFill: "#FFFFFF12", textColor: TEXT });
    chipX += w + 10;
  });
  addHighlight(slide, data.note, 112, 500, 474, 74);

  const hero = await loadMediaObject(data.hero);
  const poster = await loadMediaObject(data.poster);
  addFigure(slide, hero, 690, 96, 470, 250, { captionH: 42, containPad: 10 });
  addShape(slide, "roundRect", 690, 364, 222, 250, PANEL, "#FFFFFF10", 1);
  addText(slide, "核心提醒", 708, 382, 120, 16, {
    fontSize: 12,
    color: CYAN,
    bold: true,
    face: BODY_FACE,
    autoFit: null,
  });
  addText(slide, data.quote, 708, 424, 186, 170, {
    fontSize: 22,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
  });
  addFigure(slide, poster, 928, 364, 232, 250, { captionH: 42, containPad: 12 });
  addSpeakerNotes(slide, data);
}

function buildAgenda(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addText(slide, data.title, 78, 120, 940, 52, {
    fontSize: 36,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
  });
  addText(slide, data.subtitle, 78, 206, 1040, 34, {
    fontSize: 15,
    color: MUTED,
    face: BODY_FACE,
  });
  const startX = 78;
  const startY = 254;
  const gapX = 16;
  const gapY = 16;
  const cols = 3;
  const rows = 2;
  const cardW = (1124 - gapX * 2) / cols;
  const cardH = (276 - gapY) / rows;
  data.items.forEach((item, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    addShape(slide, "roundRect", x, y, cardW, cardH, PANEL_ALT, "#FFFFFF10", 1);
    addShape(slide, "ellipse", x + 20, y + 18, 42, 42, "#F7B44A", TRANSPARENT, 0);
    addText(slide, item[0], x + 20, y + 28, 42, 16, {
      fontSize: 16,
      color: BG,
      bold: true,
      face: NUM_FACE,
      align: "center",
      autoFit: null,
    });
    addText(slide, item[1], x + 76, y + 20, cardW - 96, 52, {
      fontSize: 22,
      color: TEXT,
      bold: true,
      face: BODY_FACE,
    });
    addText(slide, item[2], x + 20, y + 78, cardW - 40, 54, {
      fontSize: 14,
      color: MUTED,
      face: BODY_FACE,
    });
  });
  addHighlight(slide, data.highlight, 78, 568, 1124, 74);
  addSpeakerNotes(slide, data);
}

async function buildProcessImage(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 510, titleSize: 34 });
  addRowList(slide, data.items, 78, 250, 510, 310, { numbered: true });
  addHighlight(slide, data.highlight, 78, 580, 510, 62);
  addFigure(slide, await loadMediaObject(data.media), 640, 154, 520, 488, { captionH: 72, containPad: 16 });
  addSpeakerNotes(slide, data);
}

async function buildCardsImage(slide, data, index, total, reverse = false) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  const leftX = reverse ? 78 : 640;
  const rightX = reverse ? 640 : 78;
  addTitleBlock(slide, data.title, "", { x: leftX, y: 120, w: 520, titleSize: 34 });
  addCardGrid(slide, data.cards, leftX, 240, 520, 300, 2);
  if (data.highlight) {
    addHighlight(slide, data.highlight, leftX, 560, 520, 64);
  }
  addFigure(slide, await loadMediaObject(data.media), rightX, 154, 520, 470, {
    captionH: 64,
    containPad: 16,
  });
  addSpeakerNotes(slide, data);
}

async function buildTraining(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 480, titleSize: 34 });
  addRowList(slide, data.steps, 78, 236, 480, 308, { numbered: true });
  addHighlight(slide, data.highlight, 78, 568, 480, 64);
  const figures = await Promise.all(
    data.medias.map(async (item) => ({
      path: asset(item[0]),
      fit: item[1],
      caption: item[2],
      blob: await readImageBlob(asset(item[0])),
    })),
  );
  const gap = 14;
  const figW = 198;
  figures.forEach((figure, idx) => {
    addFigure(slide, figure, 596 + idx * (figW + gap), 174, figW, 442, {
      captionH: 74,
      containPad: 12,
    });
  });
  addSpeakerNotes(slide, data);
}

async function buildListDuoMedia(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 520, titleSize: 32 });
  addRowList(slide, data.rows, 78, 244, 520, 294);
  if (data.highlight) {
    addHighlight(slide, data.highlight, 78, 560, 520, 68);
  }
  const mediaObjects = await Promise.all(data.medias.map(async (item) => ({
    path: asset(item[0]),
    fit: item[1],
    caption: item[2],
    blob: await readImageBlob(asset(item[0])),
  })));
  addFigure(slide, mediaObjects[0], 640, 154, 520, 236, { captionH: 48, containPad: 12 });
  addFigure(slide, mediaObjects[1], 640, 406, 520, 222, { captionH: 52, containPad: 12 });
  addSpeakerNotes(slide, data);
}

async function buildListImage(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 500, titleSize: 34 });
  addRowList(slide, data.rows, 78, 244, 500, 294);
  if (data.highlight) {
    addHighlight(slide, data.highlight, 78, 560, 500, 68);
  }
  addFigure(slide, await loadMediaObject(data.media), 624, 154, 536, 474, { captionH: 68, containPad: 18 });
  addSpeakerNotes(slide, data);
}

function buildQuoteCards(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 720, titleSize: 34 });
  addQuotePanel(slide, data.quote, data.quoteBody, 78, 238, 382, 360);
  addCardGrid(slide, data.cards, 486, 238, 674, 360, 2);
  addHighlight(slide, data.highlight, 486, 618, 674, 52);
  addSpeakerNotes(slide, data);
}

function buildFocusPanels(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 780, titleSize: 34 });
  addCard(slide, data.cards[0], 78, 250, 500, 180, { accent: CYAN });
  addCard(slide, data.cards[1], 596, 250, 564, 180, { accent: RED });
  addInlineRows(slide, data.rows, 78, 450, 1082, 146, { titleW: 132, titleSize: 16, bodySize: 13 });
  addHighlight(slide, data.highlight, 78, 614, 1082, 56);
  addSpeakerNotes(slide, data);
}

async function buildTimelineImage(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 700, titleSize: 34 });
  addTimelineGrid(slide, data.items, 78, 240, 702, 344, { cols: 3, compact: true });
  addFigure(slide, await loadMediaObject(data.media), 822, 170, 338, 414, { captionH: 74, containPad: 14 });
  addSpeakerNotes(slide, data);
}

function buildCompare(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 820, titleSize: 36 });
  addCompareCards(slide, data.items, 78, 248, 1082, 244);
  addHighlight(slide, data.highlight, 78, 516, 1082, 62);
  addHighlight(slide, data.note, 78, 592, 1082, 54);
  addSpeakerNotes(slide, data);
}

async function buildStepsImage(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addFigure(slide, await loadMediaObject(data.media), 78, 164, 470, 464, { captionH: 72, containPad: 16 });
  addTitleBlock(slide, data.title, "", { x: 586, y: 120, w: 574, titleSize: 32 });
  addRowList(slide, data.steps, 586, 244, 574, 300, { numbered: true });
  addHighlight(slide, data.highlight, 586, 562, 574, 66);
  addSpeakerNotes(slide, data);
}

async function buildDualImageCards(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  const mediaObjects = await Promise.all(data.medias.map(async (item) => ({
    path: asset(item[0]),
    fit: item[1],
    caption: item[2],
    blob: await readImageBlob(asset(item[0])),
  })));
  addFigure(slide, mediaObjects[0], 78, 170, 256, 430, { captionH: 48, containPad: 16 });
  addFigure(slide, mediaObjects[1], 350, 170, 256, 430, { captionH: 48, containPad: 16 });
  addTitleBlock(slide, data.title, "", { x: 640, y: 120, w: 520, titleSize: 32 });
  addCardGrid(slide, data.cards, 640, 240, 520, 360, 2);
  addSpeakerNotes(slide, data);
}

async function buildCardsGallery(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 480, titleSize: 34 });
  addCardGrid(slide, data.cards, 78, 244, 480, 308, 2, true);
  addHighlight(slide, data.highlight, 78, 574, 480, 60);
  const medias = await Promise.all(data.medias.map(async (item) => ({
    path: asset(item[0]),
    fit: item[1],
    caption: item[2],
    blob: await readImageBlob(asset(item[0])),
  })));
  const startX = 612;
  const startY = 150;
  const figW = 258;
  const figH = 220;
  const gapX = 18;
  const gapY = 18;
  medias.forEach((media, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    addFigure(slide, media, startX + col * (figW + gapX), startY + row * (figH + gapY), figW, figH, {
      captionH: 54,
      containPad: 14,
    });
  });
  addSpeakerNotes(slide, data);
}

async function buildTimelineMedia(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 710, titleSize: 33 });
  addTimelineGrid(slide, data.items, 78, 238, 710, 324, { cols: 3, compact: true });
  const medias = await Promise.all(data.medias.map(async (item) => ({
    path: asset(item[0]),
    fit: item[1],
    caption: item[2],
    blob: await readImageBlob(asset(item[0])),
  })));
  addFigure(slide, medias[0], 820, 176, 340, 208, { captionH: 54, containPad: 16 });
  addFigure(slide, medias[1], 820, 398, 340, 208, { captionH: 54, containPad: 16 });
  addHighlight(slide, data.highlight, 78, 584, 710, 52);
  addSpeakerNotes(slide, data);
}

async function buildListGallery(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addTitleBlock(slide, data.title, "", { x: 78, y: 120, w: 500, titleSize: 32 });
  addInlineRows(slide, data.rows, 78, 240, 500, 284, { titleW: 132, titleSize: 16, bodySize: 12 });
  addHighlight(slide, data.highlight, 78, 540, 500, 54);
  addHighlight(slide, data.note, 78, 606, 1082, 42);
  const medias = await Promise.all(data.medias.map(async (item) => ({
    path: asset(item[0]),
    fit: item[1],
    caption: item[2],
    blob: await readImageBlob(asset(item[0])),
  })));
  const startX = 626;
  const startY = 160;
  const figW = 248;
  const figH = 208;
  const gapX = 16;
  const gapY = 16;
  medias.forEach((media, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    addFigure(slide, media, startX + col * (figW + gapX), startY + row * (figH + gapY), figW, figH, {
      captionH: 48,
      containPad: 14,
    });
  });
  addSpeakerNotes(slide, data);
}

function buildClosing(slide, data, index, total) {
  addBackdrop(slide, index, total, data.kicker, data.pace);
  addShape(slide, "roundRect", 94, 120, 1092, 500, "#0C1730FA", "#1A2E55", 1);
  addText(slide, data.title, 130, 154, 340, 64, {
    fontSize: 42,
    color: TEXT,
    bold: true,
    face: TITLE_FACE,
  });
  data.items.forEach((item, idx2) => {
    addCard(slide, item, 130 + idx2 * 338, 270, 308, 188, { accent: [GOLD, CYAN, RED][idx2] });
  });
  addHighlight(slide, data.footer, 130, 500, 916, 74);
  addText(slide, "从火箭起飞到返回回收，从航天历史到精神谱系，这场汇报真正想说明的是：载人航天是一种把高风险任务长期、稳定、成体系完成的能力。", 130, 592, 916, 34, {
    fontSize: 12,
    color: FAINT,
    face: BODY_FACE,
  });
  addSpeakerNotes(slide, data);
}

async function renderSlide(slide, data, index, total) {
  switch (data.layout) {
    case "cover":
      await buildCover(slide, data, index, total);
      break;
    case "agenda":
      buildAgenda(slide, data, index, total);
      break;
    case "process-image":
      await buildProcessImage(slide, data, index, total);
      break;
    case "cards-image":
      await buildCardsImage(slide, data, index, total);
      break;
    case "image-cards":
      await buildCardsImage(slide, data, index, total, true);
      break;
    case "training":
      await buildTraining(slide, data, index, total);
      break;
    case "list-duo-media":
      await buildListDuoMedia(slide, data, index, total);
      break;
    case "list-image":
      await buildListImage(slide, data, index, total);
      break;
    case "quote-cards":
      buildQuoteCards(slide, data, index, total);
      break;
    case "focus-panels":
      buildFocusPanels(slide, data, index, total);
      break;
    case "timeline-image":
      await buildTimelineImage(slide, data, index, total);
      break;
    case "compare":
      buildCompare(slide, data, index, total);
      break;
    case "steps-image":
      await buildStepsImage(slide, data, index, total);
      break;
    case "dual-image-cards":
      await buildDualImageCards(slide, data, index, total);
      break;
    case "cards-gallery":
      await buildCardsGallery(slide, data, index, total);
      break;
    case "timeline-media":
      await buildTimelineMedia(slide, data, index, total);
      break;
    case "list-gallery":
      await buildListGallery(slide, data, index, total);
      break;
    case "closing":
      buildClosing(slide, data, index, total);
      break;
    default:
      throw new Error(`Unsupported layout: ${data.layout}`);
  }
}

async function createDeck() {
  await ensureDirs();
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  for (let idx = 0; idx < SLIDES.length; idx += 1) {
    const slide = presentation.slides.add();
    await renderSlide(slide, SLIDES[idx], idx + 1, SLIDES.length);
  }
  return presentation;
}

async function saveBlobToFile(blob, filePath) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  await fs.writeFile(filePath, bytes);
}

async function exportDeck(presentation) {
  for (let idx = 0; idx < presentation.slides.items.length; idx += 1) {
    const slide = presentation.slides.items[idx];
    const preview = await presentation.export({ slide, format: "png", scale: 1 });
    const previewPath = path.join(PREVIEW_DIR, `slide-${String(idx + 1).padStart(2, "0")}.png`);
    await saveBlobToFile(preview, previewPath);
  }
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(FINAL_PPTX);
}

const presentation = await createDeck();
await exportDeck(presentation);
console.log(FINAL_PPTX);
