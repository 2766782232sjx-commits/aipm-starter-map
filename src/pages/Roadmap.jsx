import { Route as RouteIcon, Flag, BookOpenText } from "lucide-react";
import {
  Layout,
  PageHeader,
  Section,
  Card,
  Grid,
  Table,
  Note,
} from "@/components/site.jsx";

const PHASES = [
  {
    phase: "第 1~2 周",
    title: "建立坐标系",
    goal: "听懂所有黑话，形成行业地图",
    tasks: [
      "通读本站概念篇 + 行业篇，每个概念能向室友复述",
      "注册并深度使用 2~3 个 AI 产品（一个通用助手 + 一个垂直工具），各写一页产品拆解",
      "收集 10 份 AI 产品经理 JD，自己做关键词词频统计——用数据确认市场要什么",
    ],
    deliver: "一份「AI 产品拆解笔记」+「JD 关键词统计表」",
    check: "能向非技术朋友讲清楚：大模型为什么会一本正经地胡说（幻觉），以及 RAG 是怎么缓解它的",
  },
  {
    phase: "第 3~5 周",
    title: "核心技能上手",
    goal: "Prompt、评测、RAG 三大件全部亲手跑通",
    tasks: [
      "选定一个熟悉领域的语料（百篇级），跟着方法篇搭 RAG 问答：切片 → 向量化 → 检索 → 生成",
      "建立 50 条测试集，用 LLM-as-a-Judge 打分，跑出第一版基线",
      "做两组对比实验（混合检索、Rerank 或 Prompt 改版），记录前后数据",
    ],
    deliver: "知识问答 MVP + 评测报告（含对比数据）",
    check: "拿到一个「答得不好」的 case，能说清问题出在检索还是生成，并给出下一步动作",
  },
  {
    phase: "第 6~8 周",
    title: "Agent 与自动化",
    goal: "理解任务编排，做出会「做事」的东西",
    tasks: [
      "用 Dify / Coze 等低代码平台搭一个多步 Agent（如资料收集 → 分析 → 产出报告的自动化流程）",
      "加入工具调用（搜索、数据库或自建 API），体验 Workflow 与 Agent 的边界",
      "给 Agent 设计失败兜底策略，并记录典型 bad case",
    ],
    deliver: "一个可演示的 Agent 工作流 + bad case 复盘",
    check: "面对一个新需求，能立刻判断「这个该用 Workflow 还是 Agent」并说出理由",
  },
  {
    phase: "第 9~10 周",
    title: "AI Coding 深度实践",
    goal: "成为真正「懂研发的产品」",
    tasks: [
      "用 Cursor / Claude Code 等工具从零做一个完整小产品（网页应用即可，比如你自己的学习追踪工具）",
      "记录人机协作的真实体感：AI 强在哪、翻车在哪、你怎么引导它",
      "复盘这个过程中你对「AI Coding 产品设计」的新洞察——这就是最鲜活的产品思考素材",
    ],
    deliver: "一个能跑的小产品 + 协作过程复盘",
    check: "能讲清一次 AI 翻车的完整过程：现象 → 定位 → 你的引导 → 结果，并提炼出产品启示",
  },
  {
    phase: "第 11~12 周",
    title: "求职冲刺",
    goal: "把积累变成 offer",
    tasks: [
      "把 12 周的所有产出整理成作品集：一个主项目深挖 + 两个辅项目",
      "主项目写完整产品复盘文档（用户/指标/取舍/roadmap，参照求职篇模板）",
      "过一遍求职篇的高频面试题，每题写下自己的答题骨架并口头演练",
      "找 2~3 位从业者（学长学姐、社区）做模拟面试或简历 review",
    ],
    deliver: "作品集 + 面试题库 + 模拟面试反馈",
    check: "任意抽一道高频题，能在 90 秒内讲出「结论先行 + 框架 + 自己的项目佐证」",
  },
];

export default function Roadmap() {
  return (
    <Layout>
      <PageHeader
        eyebrow="学习路径"
        title="12 周入门计划"
        desc="为零基础设计的学习主线：每周有主题、有产出。所有交付物直接成为作品集素材——学习即备弹。默认每周投入 10~15 小时，在职/在学可拉长到 16 周，但别压缩每一阶段的动手环节。"
      />

      <Section kicker="总览" title="五个阶段">
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-[14px]">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="px-4 py-3 font-semibold">阶段</th>
                <th className="px-4 py-3 font-semibold">主题</th>
                <th className="px-4 py-3 font-semibold">目标</th>
                <th className="px-4 py-3 font-semibold">关键产出</th>
              </tr>
            </thead>
            <tbody>
              {PHASES.map((p, i) => (
                <tr key={i} className="border-b border-zinc-100 last:border-0 align-top">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-800">
                    {p.phase}
                  </td>
                  <td className="px-4 py-3 font-medium text-zinc-800">{p.title}</td>
                  <td className="px-4 py-3 text-zinc-600">{p.goal}</td>
                  <td className="px-4 py-3 text-zinc-600">{p.deliver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {PHASES.map((p, i) => (
        <Section key={i} kicker={p.phase} title={p.title}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-800">本周任务</p>
              <ul className="mt-3 space-y-2.5 text-[14px] leading-relaxed text-zinc-600">
                {p.tasks.map((t, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                  阶段目标
                </p>
                <p className="mt-2 text-[14px] font-medium leading-relaxed text-zinc-800">
                  {p.goal}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-white/80 p-3">
                <p className="text-xs font-semibold text-zinc-500">交付物</p>
                <p className="mt-1 text-[13px] font-medium leading-snug text-zinc-800">
                  {p.deliver}
                </p>
              </div>
              <div className="mt-3 rounded-lg bg-white/80 p-3">
                <p className="text-xs font-semibold text-zinc-500">自测标准</p>
                <p className="mt-1 text-[13px] font-medium leading-snug text-zinc-800">
                  {p.check}
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section kicker="方法" title="学到哪里算够：灰盒型 PM 的深度边界">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          入门期最大的时间黑洞不是「学不会」，而是
          <span className="font-semibold text-zinc-800">学过头</span>
          ：一个概念刚明白，又扎进源码和公式里出不来。更好的定位是
          <span className="font-semibold text-zinc-800">「灰盒型 PM」</span>
          ——不把 AI 当完全不可理解的黑盒，也不把写代码、推公式当成目标。
          判断要不要继续深入的唯一条标准：<span className="font-semibold text-zinc-800">这个技术细节会改变我的产品判断吗？</span>不会，就停。
        </p>
        <div className="mt-5">
          <Table
            head={["判断一个概念是否学会的六问", "示例：Function Calling"]}
            rows={[
              ["它是什么？", "模型输出「该调哪个工具、参数是什么」的结构化建议，由程序去真正执行"],
              ["解决什么问题？", "让模型从「只会说」变成「能查、能算、能操作系统」"],
              ["它在系统的哪个环节？", "模型输出与外部工具之间的协议层"],
              ["它和相邻概念什么关系？", "是结构化输出的特例；是 Agent 能「做事」的基础机制"],
              ["它不能解决什么？", "不保证工具本身是对的，也不保证模型选对了工具"],
              ["什么情况下不该用它？", "答案模型已知、无需实时数据或外部动作的纯生成任务"],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              六问都能用自己的话答上来，这个概念在 PM 层面就「毕业」了，继续深入交给工作需要。学习顺序上也有讲究：先建立整体地图，再吃透一次模型调用，然后 Prompt → 工具调用 → RAG → Agent → 评测，Memory、多 Agent、MoE 这类进阶主题按需后补——不要今天学提示词、明天研究模型架构，主线永远只有一条。
            </p>
          </Note>
        </div>
      </Section>

      <Section kicker="练习" title="两个高杠杆的日常练习">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="逆向 PRD" icon={BookOpenText}>
            <p>
              挑一个你常用的 AI 产品功能（比如 Kimi 的长文档问答、豆包的语音通话），不看任何资料，倒推它的 PRD：目标用户是谁、核心场景是什么、背后大概用了什么技术方案（RAG？Function Calling？）、效果怎么评。写完再去找公开资料对答案。这是把「用过的产品」转化为「产品手感」最快的方式。
            </p>
          </Card>
          <Card title="AI 产品观察清单" icon={Flag}>
            <p>
              每上手一个新 AI 产品，按固定三步记录：猜它的技术方案 → 猜它的商业模式 → 记一个你觉得设计得好或不好的细节。连续记一个月，你在面试里聊「最近关注的 AI 产品」时，会有别人没有的细节密度。
            </p>
          </Card>
        </div>
      </Section>

      <Section kicker="原则" title="贯穿 12 周的三条军规">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="一切以产出为准" icon={Flag}>
            <p>
              读了≠会了。每周末自问：这周我多了一个什么「能给别人看」的东西？连续两周答不上来，说明学习方式偏了——大概率是输入太多、动手太少。
            </p>
          </Card>
          <Card title="先跑通再优化" icon={RouteIcon}>
            <p>
              RAG 先用最朴素的方案跑通全链路，再谈混合检索和 Rerank；Agent 先用低代码平台搭出来，再研究框架原理。从零追求完美是入门期最大的时间黑洞。
            </p>
          </Card>
          <Card title="记录比记忆重要" icon={BookOpenText}>
            <p>
              维护一份公开的学习笔记（每周一篇）。它既是你的第二作品集，也是求职期的「热证据」：持续、公开的思考记录，比简历上一行「熟悉 RAG」可信一百倍。
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              12 周结束后，你手里应该有：一个带评测数据的 RAG 项目、一个 Agent 工作流、一个 AI Coding 做出的小产品、若干产品拆解笔记，以及一份能应对高频面试题的答题骨架。这就是「拿去秋招乱杀」的完整弹药库——剩下的事，是投递和迭代。
            </p>
          </Note>
        </div>
      </Section>
    </Layout>
  );
}
