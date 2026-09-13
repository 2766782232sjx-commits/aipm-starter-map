import {
  PenLine,
  ClipboardCheck,
  Database,
  GitBranch,
  Boxes,
  Coins,
} from "lucide-react";
import {
  Layout,
  PageHeader,
  Section,
  TermCard,
  Table,
  Note,
  Grid,
  Steps,
  Card,
} from "@/components/site.jsx";

export default function Methods() {
  return (
    <Layout>
      <PageHeader
        eyebrow="方法篇"
        title="动手方法论"
        desc="概念是地图，方法是腿。这一篇讲四件 AIPM 的看家本领：把 Prompt 写明白、把评测建起来、把知识库搭起来、算清 AI 的成本账——每件事都给到可以直接照做的步骤。"
      />

      {/* Prompt Engineering */}
      <Section kicker="01 · 指挥" title="Prompt Engineering：把 AI 当聪明的新员工带">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="它是什么" icon={PenLine}>
            <p>
              通过设计输入指令，稳定地让模型产出符合预期的结果。它不是「念咒语」而是
              <span className="font-semibold text-zinc-800">
                给一个聪明但不了解你处境的新员工写工作说明
              </span>
              ——角色、任务、约束、示例、输出格式，一样都不能少。
            </p>
          </Card>
          <Card title="AIPM 为什么必须亲手练" icon={PenLine}>
            <p>
              你将来要为整个产品定义系统 Prompt：客服机器人的语气与红线、写作助手的风格边界、Agent 的判断规则。写不好 Prompt 的 PM，没法和算法讨论"这是模型问题还是指令问题"——这是面试里最常见的现场测试。
            </p>
          </Card>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-zinc-800">核心技巧（按使用频率排序）</p>
          <Table
            head={["技巧", "怎么做", "适用场景"]}
            rows={[
              ["角色设定", "开头给模型身份：你是资深客服主管，负责处理退款咨询", "几乎所有场景的起点"],
              ["明确任务与约束", "任务动词 + 边界条件 + 禁止事项，写得像给外包的验收标准", "指令被「自由发挥」时"],
              ["少样本示例（Few-shot）", "给 2~3 个输入→输出的标准示例，比讲道理管用", "对格式/风格要求严格时"],
              ["结构化输出", "要求输出 JSON/表格/固定字段，方便程序解析", "需要下游系统消费时"],
              ["思维链（CoT）", "加一句「先逐步分析再给结论」", "推理、数学、多步判断"],
              ["拆解任务", "复杂任务拆成多轮/多步 Prompt 链（或交给 Workflow 编排）", "长流程任务质量不稳时"],
            ]}
          />
        </div>

        <div className="mt-4">
          <Note>
            <p>
              迭代心法：Prompt 是试验品不是作品。固定测试集 → 改一版 → 跑一遍 → 记录结果。没有测试集的 Prompt 优化都是在凭感觉，这句话本身就是面试加分项。
            </p>
          </Note>
        </div>
      </Section>

      {/* 评测 */}
      <Section kicker="02 · 裁判" title="评测：用数据定义「好坏」">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          AI 产品的独特难题：产出是开放式的，没有唯一正确答案。没有评测体系，你就无法回答"这版模型/Prompt 到底比上一版好吗"——所有迭代都会退化成玄学。评测是 AIPM 与普通 PM 拉开差距的第一个硬技能。
        </p>
        <div className="mt-5">
          <Steps
            items={[
              {
                title: "第一步：定义评估维度",
                desc: "先把「好」拆成可打分的维度。如客服机器人：准确性、完整性、语气合规、简洁度。维度来自业务目标，不是技术文档。",
              },
              {
                title: "第二步：构建测试集",
                desc: "收集 50~200 条真实或仿真的问题 + 期望要点（不一定是唯一答案，可以是「必须包含/必须不出现」的检查点）。覆盖长尾：异常输入、诱导性提问、超纲问题。",
              },
              {
                title: "第三步：选择评估方法",
                desc: "规则可判的用自动指标；开放式质量用 LLM-as-a-Judge（写好评分 Prompt，让强模型按维度打分）；关键版本上人工抽检校准，防止裁判偏置。",
              },
              {
                title: "第四步：建立基线与看板",
                desc: "记录每次改动的分数变化（Prompt 版本、模型版本、检索参数）。上线后接线上指标：采纳率、纠错率、人工接管率——离线分数和线上表现要对得上。",
              },
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              LLM 当裁判的三个坑：位置偏好（倾向选第一个答案）、长度偏好（觉得长的好）、自我偏好（偏爱同家族模型）。对策：盲测打乱顺序、按维度拆分打分、定期人工复核校准。
            </p>
          </Note>
        </div>
      </Section>

      {/* 知识库 */}
      <Section kicker="03 · 资产" title="知识库搭建：从 RAG 到 Wiki 的演进">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="朴素 RAG 的天花板" icon={Database}>
            <p>
              纯检索问答用久了会暴露问题：切片把表格/流程切碎导致检索不准；重复文档互相打架；知识更新没有版本管理；答案质量依赖文档写作质量，而原始文档往往不是为 AI 写的。
            </p>
          </Card>
          <Card title="为什么说「从 RAG 走向 Wiki」" icon={GitBranch}>
            <p>
              行业的新共识：与其让 AI 现场检索原始文档，不如先把知识
              <span className="font-semibold text-zinc-800">
                结构化、去重、沉淀成高质量的知识底座
              </span>
              ——类似维基百科式的条目化知识（或知识图谱），再在其上做检索与生成。知识库从「存储」升级成「资产运营」：有人维护、有版本、有质量分级。Anthropic 等公司也在把内部知识沉淀为模型可稳定调用的结构化资产，思路同源。
            </p>
          </Card>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-zinc-800">动手搭一个企业级知识问答（可作为作品集项目）</p>
          <Steps
            items={[
              {
                title: "选场景与语料",
                desc: "选一个你熟悉领域的公开文档集（如某开源项目文档、政策文件），100~500 篇。有条件选带表格和层级结构的，难点才有含金量。",
              },
              {
                title: "处理与切片",
                desc: "写清洗脚本去噪；按语义边界切片（标题层级优先，而非固定字数），表格整体保留并加描述。",
              },
              {
                title: "向量化与检索调优",
                desc: "选 Embedding 模型 → 入库 → 先做朴素向量检索测基线；再对比混合检索（BM25+向量）、Rerank 后的召回效果——用召回率/命中率量化提升。",
              },
              {
                title: "生成与溯源",
                desc: "Prompt 里强制「仅基于以下资料回答，并标注出处编号」；无相关资料时明确说不知道（抗幻觉设计）。",
              },
              {
                title: "评测与迭代",
                desc: "建 50 条问答测试集，用 LLM-as-a-Judge 按准确性/溯源正确性打分，记录每轮改动前后对比。这份对比报告就是面试时最硬的证据。",
              },
            ]}
          />
        </div>
      </Section>

      {/* 成本 */}
      <Section kicker="04 · 账本" title="AI Coding 与 AI 应用的真实成本">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="AI 应用的成本结构" icon={Coins}>
            <ul className="mt-1 space-y-2">
              <li>· <span className="font-semibold text-zinc-800">Token 成本</span>：按输入/输出 token 计费，长 Prompt、长上下文、多轮对话都会放大费用；缓存与批处理可降本</li>
              <li>· <span className="font-semibold text-zinc-800">检索与存储</span>：Embedding 计算、向量库、 rerank 调用</li>
              <li>· <span className="font-semibold text-zinc-800">评测与运营</span>：持续评测、人工复核、bad case 运营——经常被低估的大头</li>
              <li>· <span className="font-semibold text-zinc-800">模型迭代成本</span>：换模型/改 Prompt 后回归测试的人力</li>
            </ul>
          </Card>
          <Card title="AI Coding 的账怎么算" icon={Coins}>
            <p>
              AI Coding 工具（订阅制为主）的成本要对比的是工程师时间：一次代码生成的 token 成本以分计，而节省的排查/编写时间以小时计——
              <span className="font-semibold text-zinc-800">收益侧远大于成本侧，瓶颈在质量与信任</span>
              ：生成代码的审查成本、错误引入的返工、安全合规风险，才是真正要管理的变量。这也是 AI Coding 产品 PM 的核心命题：如何让「敢直接采纳」。
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              面试常见追问：你的 AI 功能怎么定价/怎么控成本？答题框架：单位经济模型（单次调用成本 × 用量）→ 分层服务（简单请求路由到小模型）→ 缓存复用 → 用评测证明降配不降体验。
            </p>
          </Note>
        </div>
      </Section>

      {/* 工具全景 */}
      <Section kicker="05 · 工具箱" title="主流工具生态速览">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          不必样样精通，但要能说出每类工具的代表选手和你用过哪几个。面试聊工具时，重点讲你用它做了什么、遇到什么坑，而不是背名单。
        </p>
        <div className="mt-5">
          <Table
            head={["类别", "代表工具", "一句话认知"]}
            rows={[
              ["模型 API", "OpenAI、Anthropic、Google、阿里通义、DeepSeek、Kimi、豆包", "最常用的发动机；国内出海选型时成本与合规是关键变量"],
              ["Agent / 编排框架", "LangChain、LlamaIndex、AutoGen、Dify、Coze", "把模型、工具、记忆拼成应用的脚手架；低代码平台适合快速验证"],
              ["向量数据库", "Milvus、Pinecone、Qdrant、PGVector", "RAG 的仓库；选型看规模、运维成本与混合检索支持"],
              ["AI Coding", "Cursor、Claude Code、GitHub Copilot、Windsurf", "PM 也该亲自用：理解 AI 协作的交互范式，本身就是产品研究"],
              ["评测工具", "Ragas、DeepEval、OpenAI Evals", "把评测流水线自动化；自建脚本也完全可行"],
              ["文档与知识", "飞书/语雀知识库 + 自建 RAG", "先治理内容，再上检索——顺序反了效果必然差"],
            ]}
          />
        </div>
      </Section>
    </Layout>
  );
}
