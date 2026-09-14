import {
  PenLine,
  ClipboardCheck,
  Database,
  GitBranch,
  Boxes,
  Coins,
  Wrench,
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
        desc="概念是地图，方法是腿。这一篇讲 AIPM 的看家本领：把 Prompt 写明白、把评测建起来、把知识库搭起来、算清成本账，以及决定线上效果的工程细节——召回、拒答、溯源、切片、触发与工具描述。每件事都给到可以直接照做的步骤。"
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
              ["Agent / 编排框架", "LangChain、LangGraph、LlamaIndex、Dify、Coze", "把模型、工具、记忆拼成应用的脚手架；三者选型对比见概念篇第 10 节"],
              ["向量数据库", "Milvus、Pinecone、Qdrant、PGVector", "RAG 的仓库；选型看规模、运维成本与混合检索支持"],
              ["AI Coding", "Cursor、Claude Code、GitHub Copilot、Windsurf", "PM 也该亲自用：理解 AI 协作的交互范式，本身就是产品研究"],
              ["评测工具", "Ragas、DeepEval、OpenAI Evals", "把评测流水线自动化；自建脚本也完全可行"],
              ["文档与知识", "飞书/语雀知识库 + 自建 RAG", "先治理内容，再上检索——顺序反了效果必然差"],
            ]}
          />
        </div>
      </Section>

      {/* 效果质量 */}
      <Section kicker="06 · 质量" title="效果三连：召回率、拒答边界与引用溯源">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="召回率：漏斗的第一关" icon={Database}>
            <p>
              召回率 = 该被找到的资料里，有多少真的被检索出来了。它是整条 RAG 链路的
              <span className="font-semibold text-zinc-800">上限开关</span>
              ：召回漏了，后面 rerank 再准、模型再聪明也救不回来——资料根本没到模型手里。记住这句话：
              <span className="font-semibold text-zinc-800">召回定上限，生成定下限</span>
              。
            </p>
            <p className="mt-2">
              怎么测：构造测试集，每题标注「该被召回的目标切片」，跑 recall@k（目标切片是否进了 top-k）。怎么提：切片质量（最常被低估）、混合检索（向量+关键词 BM25）、query 改写与多路召回。注意 rerank 只提升排序精度，救不了根本没召回的漏网之鱼。
            </p>
          </Card>
          <Card title="拒答边界：三条线，一条都不能含糊" icon={ClipboardCheck}>
            <ul className="mt-1 space-y-2">
              <li>· <span className="font-semibold text-zinc-800">领域线</span>：问题不在知识库范围内 → 明说「我不知道」，绝不硬编</li>
              <li>· <span className="font-semibold text-zinc-800">置信线</span>：检索相关度分数低于阈值 → 拒答或转人工，而非拿弱相关资料硬答</li>
              <li>· <span className="font-semibold text-zinc-800">风险线</span>：医疗/法律/资金等高危问题 → 固定话术 + 转人工通道</li>
            </ul>
            <p className="mt-2">
              认知校准：拒答不是失败——<span className="font-semibold text-zinc-800">一次幻觉的代价远大于十次拒答</span>。但拒答也要设计：给原因、给出处、给下一步（转人工/换问法），并监控两个指标的此消彼长：拒答率与误拒率（把该答的也拒了）。
            </p>
          </Card>
          <Card title="引用溯源：信任是展示出来的" icon={GitBranch}>
            <p>
              做法分三层：入库时每个切片带上元数据（文档名、章节、更新时间）；生成时 Prompt 强制「每个论点标注来源编号 [1][2]」；前端把编号做成可点击的引用标记，跳转到原文对应位置。
            </p>
            <p className="mt-2">
              三个价值：用户敢信（能核对）、出错能追责（定位到具体文档版本）、运营能修（哪篇文档在误导一目了然）。一个坑：模型可能标错出处编号，要定期抽检「引用-原文」一致性，这也是评测集里该有的一类题。
            </p>
          </Card>
          <Card title="多模态文档：表格、图片、扫描件怎么办" icon={Boxes}>
            <p>
              表格：<span className="font-semibold text-zinc-800">整体保留不拆开</span>，转成 Markdown 或 HTML 表格保住行列结构，切片时加一段文字说明「这是关于什么的表」。图片与扫描件两条路：OCR 转纯文本（便宜，但图表信息全丢）；或 VLM 直接读图理解（贵，但能回答「图 3 的趋势是什么」）。
            </p>
            <p className="mt-2">
              折中方案也常用：给每张图生成一段 caption（图说）入库，检索命中 caption 后再把原图喂给 VLM 作答。判断值不值得上 VLM：看你库里图表密度——研报、PPT、专利图纸类值得，纯文字制度文档不值得。
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold text-zinc-800">RAG 效果漏斗：每一层都在「漏」，召回率量的是第一道</p>
            <div className="mt-4 space-y-2">
              {[
                ["知识库全部切片（如 5000 段）", "100%", "bg-zinc-100 text-zinc-700"],
                ["初步召回 top-50（向量+关键词）", "62%", "bg-indigo-50 text-indigo-700"],
                ["Rerank 重排 top-5", "34%", "bg-indigo-100 text-indigo-800"],
                ["塞进 Prompt 的参考资料", "18%", "bg-indigo-200 text-indigo-900"],
                ["最终答案（只能基于这几段）", "8%", "bg-indigo-500 text-white"],
              ].map(([label, w, cls]) => (
                <div key={label} className={`rounded-lg px-3 py-2 text-[12px] font-medium ${cls}`} style={{ width: w }}>
                  {label}
                </div>
              ))}
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-zinc-500">
              目标切片如果第一关就没进 top-50，后面几层再好也接触不到它——这就是「召回定上限」的图示。recall@k 量的正是第一道闸口的漏网率；Rerank 只能让「已捞上来的」排得更准，捞不上来的它无能为力。
            </p>
          </div>
        </div>
      </Section>

      {/* 工程细节 */}
      <Section kicker="07 · 工程" title="切片、触发与工具描述：决定效果的脏活">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="知识清洗与切片：怎么做、怎么判断好不好" icon={Database}>
            <p>
              清洗动作清单：去页眉页脚、去目录水印、OCR 纠错、全库去重、还原标题层级与列表结构。切片三种策略：
              <span className="font-semibold text-zinc-800">固定长度+重叠</span>（简单但会拦腰斩断语义）、
              <span className="font-semibold text-zinc-800">按标题递归切</span>（主流做法，顺着文档结构走）、
              <span className="font-semibold text-zinc-800">语义切片</span>（按 Embedding 相似度找边界，效果好但贵）。切片太大稀释检索精度，太小断章取义。
            </p>
            <p className="mt-2">
              怎么判断好不好——别拍脑袋，两招量化：肉眼抽看 20 个切片的「断义率」（有多少片段离开上下文读不懂）；更重要的是建召回测试集，用 recall@k 数字说话，改一次切片策略就重测一次。这正是你 RAG 评测实验室 B 组实验（512→1024）在量化的事。
            </p>
          </Card>
          <Card title="Workflow 还是 Agent：决策边界的判断树" icon={GitBranch}>
            <p>
              判断顺序：步骤能否事先枚举？容错要求高不高？
              <span className="font-semibold text-zinc-800">路径固定+零容错 → Workflow</span>（报销审批、固定流程的客服工单）；
              <span className="font-semibold text-zinc-800">路径开放+可试错 → Agent</span>（「帮我调研这个竞对」）。拿不准就混合：主干 Workflow 保证可控兜底，叶子节点放 Agent 处理开放子任务。
            </p>
            <p className="mt-2">
              评估口径也不同：Workflow 看完成率与每步耗时（确定性系统）；Agent 看任务成功率曲线、平均步数、人工接管率（概率性系统）。面试被问「这个场景用 Agent 还是 Workflow」，先把这两个问题抛回去，就是专业答案。
            </p>
          </Card>
          <Card title="Skill / 工作流的触发条件：description 就是触发器" icon={PenLine}>
            <p>
              触发本质是路由问题：用户这句话该不该进这个 Skill？三种实现：规则关键词（快但脆）、意图分类模型（准但要训）、LLM 判别（灵活但要防误判）。无论哪种，
              <span className="font-semibold text-zinc-800">Skill 的 description 文本本身就是路由器的判断依据</span>
              ——写得好不好直接决定触发准不准。
            </p>
            <p className="mt-2">
              监控两个指标：误触发率（不该来的进来了，浪费调用还抢答）与漏触发率（该来的没来，用户掉进兜底）。上线前用「边界问法测试集」验证：专门构造那些处在两个 Skill 交界处的问法。
            </p>
          </Card>
          <Card title="工具描述怎么写，模型才不会错调" icon={Wrench}>
            <p>
              模型选工具时只看你的 name 和 description——这是它唯一的「招聘启事」。写法四要素：
              <span className="font-semibold text-zinc-800">何时用 + 何时不用 + 参数约束 + 返回什么</span>
              。name 用动词开头（query_weather 而非 weather）。
            </p>
            <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600">
              <p className="font-semibold text-zinc-700">反例 vs 正例</p>
              <p className="mt-1">✗ 「查询天气」——模型可能在用户说「今天真冷」时也触发</p>
              <p className="mt-1">✓ 「查询未来 7 天天气预报。仅在用户明确要求查天气时调用；不回答历史天气；city 为必填城市名；返回逐日温度与降水」</p>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
              进阶三条：功能重叠的工具在描述里写明互斥边界；参数给 1~2 个调用示例（few-shot）；上线前跑一遍「错调测试集」——故意说容易误解的话，看模型会不会乱调。Skill 已是企业落地刚需，这份描述就是你的接口契约。
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold text-zinc-800">Workflow 还是 Agent：两个问题的判断树</p>
            <div className="mt-4 grid gap-2 text-[12px] font-medium md:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 p-3">
                <p className="text-zinc-800">问题 1：任务步骤能事先枚举吗？</p>
                <div className="mt-2 space-y-1.5 text-zinc-600">
                  <p>能（流程固定）→ 进入问题 2</p>
                  <p>不能（路径开放）→ <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-indigo-700">用 Agent</span>，如「帮我调研这个竞对」</p>
                </div>
              </div>
              <div className="rounded-lg border border-zinc-200 p-3">
                <p className="text-zinc-800">问题 2：容错要求高吗？</p>
                <div className="mt-2 space-y-1.5 text-zinc-600">
                  <p>零容错（钱、合规）→ <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700">用 Workflow</span>，如报销审批</p>
                  <p>可试错 → <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-indigo-700">用 Agent</span>，失败可重试</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-zinc-500">
              拿不准的混合场景 → 主干 Workflow（保证可控与兜底）+ 叶子节点 Agent（处理开放子任务）。这是企业落地最常见的形态。
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
