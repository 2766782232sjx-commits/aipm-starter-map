import {
  BriefcaseBusiness,
  Code2,
  UserRound,
  FileCheck2,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import {
  Layout,
  PageHeader,
  Section,
  Table,
  Note,
  Grid,
  Card,
  Steps,
} from "@/components/site.jsx";

export default function Career() {
  return (
    <Layout>
      <PageHeader
        eyebrow="求职篇"
        title="面向秋招的求职指南"
        desc="从 JD 反推能力清单，从能力清单反推作品集。这一篇回答三个问题：市场到底要什么、你拿什么去对、以及「懂研发的产品 / 懂产品的研发」这条复合路线怎么走。"
      />

      {/* JD 拆解 */}
      <Section kicker="01 · 信号" title="从 JD 反推：市场真正在要什么">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          拆近期 AI 产品经理的招聘信息，会发现要求高度收敛。把高频关键词翻译成能力语言，就是你的学习清单：
        </p>
        <div className="mt-5">
          <Table
            head={["JD 高频表述", "翻译成能力", "怎么证明"]}
            rows={[
              ["熟悉大模型技术原理与边界", "能听懂研发黑话，判断方案可行性", "概念篇全部复述过关 + 面试现场接住追问"],
              ["有 RAG / Agent 落地经验", "亲手搭过、踩过坑、量化过改进", "作品集里的知识库 / Agent 项目 + 评测报告"],
              ["熟练 Prompt 工程", "能设计稳定可迭代的系统 Prompt", "带版本管理和测试集的 Prompt 迭代记录"],
              ["建立评测体系与数据驱动", "会用指标定义好坏、驱动迭代", "项目里的 LLM-as-a-Judge 流水线 + 前后对比数据"],
              ["跨团队推动落地", "把模糊需求翻译成双方都懂的语言", "项目复盘里写清你如何协调算法与业务"],
              ["对 AI 有热情与判断", "有行业观点，不是只会用工具", "产品拆解文档 + 行业趋势的独立判断"],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              薪资带宽极宽（初级到资深专家职级）说明能力分层明显；岗位多经内推与定向挖人，说明
              <span className="font-semibold">作品集与人脉的权重大于海投</span>。策略结论：把做项目的精力放在「可展示、可追问、有数据」三个标准上。
            </p>
          </Note>
        </div>
      </Section>

      {/* 复合路线 */}
      <Section kicker="02 · 路线" title="懂研发的产品 vs 懂产品的研发">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="懂研发的产品（推荐路线）" icon={UserRound}>
            <p>
              你的身份是 PM，技术理解服务于产品判断。达标线：能独立读懂技术方案的核心逻辑、能评估工作量的合理性、能预判技术选择对用户体验的影响。
            </p>
            <p className="mt-2">
              修炼方式：概念篇打底 → 用 AI Coding 工具亲手做出 2~3 个能跑的项目（不求生产级）→ 每个项目写技术复盘。关键是「亲手」，不是看视频。
            </p>
          </Card>
          <Card title="懂产品的研发" icon={Code2}>
            <p>
              反向路线：以技术为立身之本，补产品判断。适合有一定代码基础的同学。达标线：能独立交付完整功能，同时主动思考需求合理性、数据指标与用户价值。
            </p>
            <p className="mt-2">
              这条路线在「AI 应用工程师 / Agent 工程师」岗位上的需求和薪资同样旺盛（校招常给到高于传统后端的报价），可作为 Plan B 或转型跳板。
            </p>
          </Card>
        </div>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-zinc-600">
          两条路线殊途同归：市场上最稀缺的永远是「翻译者」——能把用户价值翻译成技术需求、也能把技术约束翻译成产品决策的人。选路线时看你的比较优势：表达与洞察强走前者，逻辑与实现强走后者。
        </p>
      </Section>

      {/* 作品集 */}
      <Section kicker="03 · 弹药" title="「完美的 AI 产出」：能去秋招乱杀的作品集长什么样">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          一个残酷的事实：会调用模型 API 的 demo 没有稀缺性。能让面试官记住的项目，必须展示
          <span className="font-semibold text-zinc-800">「评测思维」和「迭代证据」</span>
          ——这恰恰是大多数候选人缺失的。
        </p>
        <div className="mt-5">
          <Steps
            items={[
              {
                title: "选一个你真懂的场景",
                desc: "人文社科背景是你的优势区：法律咨询助手、论文文献问答、政策解读机器人、外语学习陪练、内容审核辅助……选你有领域知识、能判断答案好坏的场景。",
              },
              {
                title: "做出可用的 MVP",
                desc: "RAG 知识问答或 Workflow 自动化皆可（用 Dify / Coze 低代码搭建完全可接受，重点是场景理解不是造轮子）。",
              },
              {
                title: "建立评测并跑出对比数据",
                desc: "50 条测试集 → LLM-as-a-Judge 打分 → 至少展示两组对比：如朴素 RAG vs 加 Rerank、模型 A vs 模型 B、Prompt v1 vs v2。数字不用惊人，方法必须严谨。",
              },
              {
                title: "写一份产品复盘",
                desc: "按 PM 语言组织：目标用户与场景、核心指标、关键决策与取舍（为什么这么做）、bad case 分析、下一步 roadmap。这份文档的分量远超 demo 本身。",
              },
              {
                title: "包装成 3 分钟可讲的故事",
                desc: "面试叙事线：我发现 X 场景有 Y 问题 → 我判断 AI 能解决其中 Z 部分 → 我做了这些取舍 → 数据证明有改进 → 局限与下一步。边界感（哪些没解决）是加分项不是减分项。",
              },
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              面试防雷清单：不要说「我精通大模型」；被问到不会的概念时坦诚说「这块我了解到 X 程度，更深的还没摸过」；所有项目数字都能追溯到你怎么算出来的。诚实 + 有边界的表达，在 AI 岗位面试里是稀缺品质。
            </p>
          </Note>
        </div>
      </Section>

      {/* 面试题 */}
      <Section kicker="04 · 实战" title="高频面试题自测">
        <div className="mt-2">
          <Table
            head={["问题", "考察点", "答题骨架"]}
            rows={[
              ["怎么判断一个场景该不该上 AI？", "边界意识", "高频/容错/范式三因子 + 两个正反例"],
              ["RAG 效果差，你怎么排查？", "工程手感", "先看检索（召回对不对）再看生成（Prompt 与模型），逐段定位"],
              ["怎么做模型/方案选型？", "权衡能力", "能力上限、成本、延迟、合规四个维度打分对比"],
              ["你的项目里最难的决定是什么？", "真实经历", "讲取舍（如体验 vs 成本），要有数据支撑"],
              ["怎么看 Agent 的落地瓶颈？", "行业判断", "可靠性随步骤衰减 + 评估难 + 责任界定，结合案例"],
              ["为什么人文背景适合做 AIPM？", "自我认知", "对人的敏感 + 表达翻译能力，用具体事例支撑"],
            ]}
          />
        </div>
      </Section>
    </Layout>
  );
}
