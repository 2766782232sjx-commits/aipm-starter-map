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
            </div>
          </div>
        </Section>
      ))}

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
