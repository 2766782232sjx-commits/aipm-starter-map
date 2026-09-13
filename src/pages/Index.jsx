import { Link } from "react-router-dom";
import {
  BookOpenText,
  Wrench,
  TrendingUp,
  BriefcaseBusiness,
  Route,
  ArrowRight,
  BrainCircuit,
  Layers,
  Target,
  Scale,
} from "lucide-react";
import { Layout, Card, Grid, Table } from "@/components/site.jsx";

const MODULES = [
  {
    to: "/concepts",
    icon: BookOpenText,
    title: "概念篇",
    desc: "Transformer、RAG、Agent、Workflow、Skill、MCP、Memory、Benchmark、分布式、意图识别——把黑话一个个讲成人话。",
    tag: "10 个核心概念",
  },
  {
    to: "/methods",
    icon: Wrench,
    title: "方法篇",
    desc: "Prompt Engineering、评测体系、知识库搭建、RAG 到知识库的演进、AI 的能力边界与问题定义。",
    tag: "动手方法论",
  },
  {
    to: "/industry",
    icon: TrendingUp,
    title: "行业篇",
    desc: "主流模型公司格局、AI 产品三波浪潮、工具生态全景、AI Coding 的真实成本账。",
    tag: "产业坐标系",
  },
  {
    to: "/career",
    icon: BriefcaseBusiness,
    title: "求职篇",
    desc: "两类 AIPM 岗位画像、JD 高频要求拆解、懂研发的产品与懂产品的研发、秋招作品集打法。",
    tag: "面向秋招",
  },
  {
    to: "/roadmap",
    icon: Route,
    title: "学习路径",
    desc: "为零基础定制的 12 周学习计划，每周一个主题和可交付产出，学完直接变成作品集素材。",
    tag: "12 周计划",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <div className="border-b border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            人文社科背景的 AI 入门第一站
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            成为 AI 产品经理，
            <br />
            从听懂每一句"黑话"开始。
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            你不需要先学会训练模型。你需要的是一套完整的认知地图：AI 到底能解决什么问题、边界在哪里、怎么定义、怎么评测、怎么落地成产品——以及市场上真正在招的 AI 产品经理长什么样。这座知识站把这些逐一拆开。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/concepts"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              从概念篇开始 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900"
            >
              直接看 12 周学习路径
            </Link>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: BrainCircuit, label: "懂模型", desc: "知道能力与边界" },
              { icon: Target, label: "懂场景", desc: "把技术翻译成价值" },
              { icon: Scale, label: "懂评测", desc: "用数据定义好坏" },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3"
              >
                <Icon className="h-5 w-5 shrink-0 text-indigo-400" />
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 什么样的人稀缺 */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          市场信号
        </p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight">
          为什么现在是入场的窗口期
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card title="招聘市场在为稀缺性定价" icon={Layers}>
            <p>
              从近期的招聘信息看，AI 产品经理的薪资带宽明显宽于传统产品岗，头部团队的资深岗甚至对标资深专家职级。背后的逻辑很直接：大多数传统产品经理不懂模型原理，大多数算法工程师不懂用户场景和商业化，
              <span className="font-semibold text-zinc-800">
                能把两端接起来的人本来就是稀有物种
              </span>
              。企业不是在为"会用 ChatGPT"付钱，而是在为"技术边界 × 场景洞察 × 商业判断"的复合能力付钱。
            </p>
          </Card>
          <Card title="非技术背景不是劣势，是差异化" icon={BrainCircuit}>
            <p>
              人文社科训练出来的东西恰恰是 AI 产品最缺的：对人的真实处境的敏感、对内容质量的品味、把模糊需求讲清楚的表达能力，以及对伦理与风险的直觉。技术概念是可以补课的（这座站就是干这个的），而这些软能力很难速成。
              <span className="font-semibold text-zinc-800">
                你的策略不是变成半个工程师，而是成为"最懂技术的人文选手"
              </span>
              。
            </p>
          </Card>
        </div>
        <div className="mt-6">
          <Table
            head={["市场信号", "对你的含义"]}
            rows={[
              [
                "JD 高频词：RAG / Agent / Prompt / 评测 / 知识库",
                "这些就是学习清单，本站概念篇逐一覆盖",
              ],
              [
                "薪资带宽极宽（初级到资深专家）",
                "能力分层明显，入行后成长曲线陡峭",
              ],
              [
                "岗位挂在以 AI 为核心竞争力的原生团队",
                "不是传统业务的『信息化改造』，而是新工种",
              ],
              [
                "大多通过猎头、内推、社群定向挖人",
                "作品集与人脉的权重高于海投",
              ],
            ]}
          />
        </div>
      </section>

      {/* 两类 AIPM */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            先想清楚
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight">
            AI 产品经理的两种打开方式
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-zinc-600">
            市场上的 AIPM 岗位大体分两类，工作内容、能力要求和发展路径差别很大。选哪条路，决定了你接下来三个月该把力气花在哪里。
          </p>
          <div className="mt-6">
            <Table
              head={["维度", "基础模型 PM", "场景落地 Agent PM"]}
              rows={[
                [
                  "核心工作",
                  "定义模型能力与产品形态：训练目标、benchmark、模型行为与安全、API 与开发者生态",
                  "在具体业务里落地 AI：RAG 知识库、Agent 工作流、场景选型、效果与成本平衡",
                ],
                [
                  "日常打交道最多",
                  "研究员、对齐团队、开发者生态",
                  "业务方、研发、数据团队",
                ],
                [
                  "关键能力",
                  "技术深度上限高，需要理解 scaling、数据、评测的底层逻辑",
                  "工程与业务翻译能力，懂 RAG / Agent 全链路与评测",
                ],
                [
                  "典型产品",
                  "GPT / Claude / 通义千问 / 豆包 / Kimi 的模型产品与 API",
                  "企业知识助手、智能客服、AI 编码工具、行业 Agent",
                ],
                [
                  "适合你吗",
                  "门槛高、通常偏好技术背景或极强学习能力，长期天花板极高",
                  "增量岗位最多、最欢迎跨专业背景，是大多数人入行的现实路径",
                ],
              ]}
            />
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-zinc-600">
            这座站的内容主线按
            <span className="font-semibold text-zinc-800">
              "场景落地 Agent PM + 基础模型常识"
            </span>
            设计：既让你能接住落地岗的全部 JD 要求，也让你在面试里聊模型趋势时不说外行话。
          </p>
        </div>
      </section>

      {/* 模块导航 */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          站点地图
        </p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight">五个板块</h2>
        <div className="mt-6">
          <Grid cols={3}>
            {MODULES.map(({ to, icon: Icon, title, desc, tag }) => (
              <Link
                key={to}
                to={to}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-4 flex items-center gap-1.5 font-semibold">
                  {title}
                  <ArrowRight className="h-4 w-4 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500" />
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600">
                  {desc}
                </p>
              </Link>
            ))}
            <div className="flex flex-col justify-between rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
              <div>
                <h3 className="font-semibold">怎么用这座站</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600">
                  按顺序读一遍建立框架，再跟着学习路径动手做项目。概念不求一次记住，但求再听到时能立刻定位它解决什么问题。
                </p>
              </div>
              <Link
                to="/roadmap"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                查看学习路径 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Grid>
        </div>
      </section>
    </Layout>
  );
}
