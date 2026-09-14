import {
  Network,
  Database,
  Bot,
  Workflow,
  Puzzle,
  Plug,
  MemoryStick,
  Gauge,
  ServerCog,
  MessageSquareText,
  ArrowRight,
  Boxes,
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
} from "@/components/site.jsx";

export default function Concepts() {
  return (
    <Layout>
      <PageHeader
        eyebrow="概念篇"
        title="把 AI 黑话讲成人话"
        desc="一个概念能不能算「听懂了」标准只有一个：你能说清楚它解决什么问题、边界在哪。下面 10 个概念按「从模型到应用到系统」顺序排列，每个都配上一个你可以复述给别人听的比喻。"
      />

      {/* Transformer */}
      <Section kicker="01 · 底层" title="Transformer：一切大模型的发动机">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="Transformer" en="变换器" tag="底层架构">
            <p>
              一种神经网络架构，是 GPT、Claude、通义千问、豆包等所有大语言模型的共同底座。它的核心创新叫
              <span className="font-semibold text-zinc-800">注意力机制（Attention）</span>
              ：处理一句话时，模型会同时「环顾」整句子里所有词，判断哪些词和当前这个词关系最大，再综合这些信息来理解。
            </p>
            <p className="mt-2">
              比喻：读「苹果发布了新手机，它很贵」，你自动知道「它」手机不是水果——注意力机制就是让机器学会这种「指哪看哪」能力。
            </p>
          </TermCard>
          <TermCard term="LLM" en="Large Language Model / 大语言模型" tag="Transformer 训出来的成品">
            <p>
              用海量文本训练出来的超大 Transformer。训练过程本质上是在做一道超大规模的「填空题」：给前文，预测下一个词。规模化（更多数据、更大模型、更多算力）带来的能力跃迁，就是近年常说的
              <span className="font-semibold text-zinc-800"> Scaling Law</span>。
            </p>
            <p className="mt-2">
              对 PM 的意义：理解了「预测下一个词」你就理解了为什么模型会一本正经地胡说八道（它只是在续写最像的答案），也就理解了为什么需要 RAG 和评测来兜底。
            </p>
          </TermCard>
        </div>
        <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-zinc-800">
            图解：一句话是怎么被处理的，下一个词是怎么「选」出来的
          </p>
          <p className="mt-1 text-[13px] text-zinc-500">以补全「今天天气真 __」为例</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] leading-relaxed">
            <span className="shrink-0 text-zinc-500">输入：</span>
            {["今天", "天气", "真"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-[12px] text-zinc-700"
              >
                {t}
              </span>
            ))}
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
            <span className="text-zinc-600">
              逐词转成向量 → 注意力层里词与词互相「看」（重复几十层）→ 最后一个位置输出
            </span>
            <span className="font-semibold text-indigo-600">全词表的概率分布</span>
          </div>
          <div className="mt-4 space-y-1.5">
            {[
              ["好", 62, true],
              ["不错", 14, false],
              ["冷", 9, false],
              ["差", 7, false],
              ["热", 5, false],
              ["蓝", 3, false],
            ].map(([w, p, top]) => (
              <div key={w} className="flex items-center gap-2">
                <span className="w-10 text-right font-mono text-[12px] text-zinc-600">{w}</span>
                <div className="h-4 flex-1 overflow-hidden rounded bg-zinc-100">
                  <div
                    className={top ? "h-full rounded bg-indigo-500" : "h-full rounded bg-indigo-200"}
                    style={{ width: `${p}%` }}
                  />
                </div>
                <span className="w-10 font-mono text-[12px] text-zinc-500">{p}%</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-zinc-600">
            「选」有两种规则：<span className="font-semibold text-zinc-800">贪心</span>
            （永远拿概率最高的，稳定但呆板）与<span className="font-semibold text-zinc-800">采样</span>
            （按概率抽签——62% 的可能选「好」，也可能选到「冷」）。采样时的「温度参数」控制随机度：温度越高越敢选冷门词，回答越有创造力也越容易跑偏；温度调到最低就退化成贪心。选中一个词拼回句尾，再重复整个过程预测下一个，直到模型吐出「结束符」——你看到的每一段回答，都是一个词一个词接力生成的。
          </p>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              不需要会推导数学公式。你需要的是：当工程师说「这个幻觉是模型固有行为，不上 RAG 压不住」，你能听懂并接上话。
            </p>
            <p className="mt-2">
              术语约定：Transformer、LLM、RAG、Agent 这些业界通用名直接用英文，不做硬翻译。注意 LLM = Large Language Model（大语言模型），和法学硕士 LL.M.（Master of Laws）只是缩写撞车，毫无关系。也不要望文生义：产品语境里 goal / objective / target 都是「目标」（不是足球的球门），alignment 是「对齐」（让模型行为符合人类意图），eval 是「评测」（不是邪恶的 evil）。
            </p>
          </Note>
        </div>
      </Section>

      {/* RAG */}
      <Section kicker="02 · 知识" title="RAG：给 AI 配一个资料柜">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="RAG" en="Retrieval-Augmented Generation / 检索增强生成" tag="企业落地最主流">
            <p>
              让模型回答之前，先去你的资料库里检索相关内容，再基于检索结果作答——而不是凭训练记忆瞎猜。解决的核心问题是
              <span className="font-semibold text-zinc-800">幻觉（Hallucination）</span>
              和「不知道你公司的事」
            </p>
            <p className="mt-2">
              比喻：新来的客服主管脑子好使但不了解公司制度；给他一间随查随取的档案室，回答前先翻文件核对——这就是 RAG。
            </p>
          </TermCard>
          <TermCard term="Embedding 与向量检索" en="向量化" tag="RAG 的底层零件">
            <p>
              把文字变成一串数字（向量），语义相近的内容在「数字空间」距离也近。用户提问时，系统把问题也变成向量，去知识库里找「距离最近」段落。向量数据库（Milvus、Pinecone、Qdrant 等）就是专门存和查这些向量的仓库。
            </p>
          </TermCard>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-zinc-800">RAG 的完整结构（面试高频题，按顺序背下来）</p>
          <Steps
            items={[
              {
                title: "离线链路：文档准备",
                desc: "加载文档 → 清洗（去页眉页脚、去乱码）→ 切片（Chunking，把长文档切成适合检索的小段）。切片策略直接影响效果，是 PM 最该关心的「脏活」",
              },
              {
                title: "离线链路：向量化入库",
                desc: "每个切片用 Embedding 模型转成向量，连同原文一起存入向量数据库，建立索引。",
              },
              {
                title: "在线链路：检索",
                desc: "用户提问 → 问题向量化 → 在向量库里召回 Top-K 最相关的切片。进阶做法会混合关键词检索（BM25）、重排序（Rerank）来提准。",
              },
              {
                title: "在线链路：增强生成",
                desc: "把召回的切片塞进 Prompt（「参考资料如下」→ 模型基于资料作答，并标注出处（溯源）。企业场景还必须做权限管控：没权限的人问，一个字都不能多说。",
              },
            ]}
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold leading-snug">离线和在线，是先后关系还是并列关系？</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
              一句话：<span className="font-semibold text-zinc-800">先建房，后住人</span>。离线链路先跑（上线前、以及每次资料更新时），产物是向量库；之后用户的每一次提问都走在线链路。运行时两者并行——线上服务不停，后台可以随时重建索引——但逻辑上有严格先后：没有离线建好的库，在线检索就是空转。
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600">
              <span className="rounded bg-zinc-200 px-2 py-0.5 font-medium">离线（建库）</span>
              <ArrowRight className="h-3 w-3 text-zinc-400" />
              <span className="rounded bg-indigo-100 px-2 py-0.5 font-medium text-indigo-700">向量库</span>
              <ArrowRight className="h-3 w-3 text-zinc-400" />
              <span className="rounded bg-zinc-200 px-2 py-0.5 font-medium">在线（每次提问）</span>
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold leading-snug">和用户的对话记录，会存进 RAG 吗？</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
              不会自动进。对话记录归 <span className="font-semibold text-zinc-800">Memory（记忆）</span>管：短对话留在上下文窗口里（短期记忆），重要信息被抽取沉淀成用户档案（长期记忆，见下一节）。区别记住一句：
              <span className="font-semibold text-zinc-800">记忆是关于「你这个人」的，RAG 是关于「知识」的</span>。两者常用同一套向量库技术（所以有「记忆也是一次 RAG」的说法），但管理目标不同。
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">
              企业里若要把聊天日志入知识库，必须先治理：脱敏、去重、权限标注——正是方法篇「知识库是资产运营」的入口。
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              RAG 知识库的「管理」四件事：谁可以看什么（权限）、资料多久更新（时效）、版本可回滚（误删可恢复）、重复冲突怎么处理（去重与质量分级）。这四件事做不好，检索再准也白搭——这也是「从 RAG 走向 Wiki」的行业共识由来，展开见方法篇。
            </p>
          </Note>
        </div>
      </Section>

      {/* Agent / Workflow / Skill / MCP */}
      <Section kicker="03 · 行动" title="Agent、Workflow、Skill、MCP：让 AI 从「会说」到「会做」">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="Agent" en="智能体" tag="2026 最热方向">
            <p>
              会自己规划任务、调用工具、执行多步操作的 AI。区别于「你问一句它答一句」聊天模式：你说「查下明天天气，下雨就帮我订张高铁票」它能拆解任务、查天气、判断、下单。
            </p>
            <p className="mt-2">
              核心组件：任务规划（Planning）、工具调用（Tool Use / Function Calling）、记忆（Memory）、反思与纠错。
            </p>
          </TermCard>
          <TermCard term="Workflow" en="工作流" tag="确定性的编排">
            <p>
              把 AI 的调用步骤用流程图固定下来：第一步做什么、第二步调哪个模型、失败怎么兜底。与 Agent 的区别在于
              <span className="font-semibold text-zinc-800">谁做决策</span>
              ——Workflow 由人事先画好路径（可控、可预测），Agent 由模型自己临场决定（灵活、但难约束）。
            </p>
            <p className="mt-2">工程实践通常是两者结合：主干用 Workflow 保证可控，叶子节点放 Agent 处理开放性任务。</p>
          </TermCard>
          <TermCard term="Skill" en="技能包" tag="Agent 的技能库">
            <p>
              把某类任务的做法封装成可复用的能力包：一套指令、工具和资源的组合。当用户提出某类需求时，Agent 加载对应 Skill 执行。比喻：Agent 是会自己找活干的员工，Skill 是他手边一套套的作业手册——遇到对应问题就翻对应手册，而不是每次从零摸索。
            </p>
          </TermCard>
          <TermCard term="MCP" en="Model Context Protocol / 模型上下文协议" tag="工具接入的标准插头">
            <p>
              让 AI 接入外部系统的开放协议——数据库、ERP、搜索、内部 API 都可以封装成标准化的「插头」模型按统一方式调用。解决的是「每个工具单独开发一遍对接」碎片化问题，正在成为行业标准。
            </p>
          </TermCard>
        </div>
        <div className="mt-6">
          <Table
            head={["概念", "一句话定位", "解决什么问题"]}
            rows={[
              ["RAG", "知识层", "AI 不知道你公司的事 → 先查资料再回答"],
              ["MCP", "接口层", "AI 够不着你的系统 → 标准化接工具"],
              ["Skill", "方法层", "AI 不会做这类事 → 封装成技能包"],
              ["Agent", "决策层", "AI 不会自己安排工作 → 自主规划与执行"],
            ]}
          />
          <p className="mt-3 text-[14px] text-zinc-600">
            记住这张分层表：知识、接口、方法、决策，四层各管一段，拼起来才是企业里能用的 AI。
          </p>
        </div>
      </Section>

      {/* Memory */}
      <Section kicker="04 · 记忆" title="Memory：让 AI 记得住你">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="短期记忆" en="Working Memory" tag="会话内">
            <p>
              受「上下文窗口（Context Window）」限制——模型一次能「看见」的文本量有上限，聊得太久早期内容会被挤出窗口。工程上用摘要压缩、滑动窗口等策略缓解。
            </p>
          </TermCard>
          <TermCard term="长期记忆" en="Long-term Memory" tag="跨会话">
            <p>
              把对话中的重要信息抽取、沉淀成结构化记忆（用户偏好、事实、历史决策），下次会话时检索回来。实现方式多样：向量库检索（「记忆也是一次 RAG」）、结构化档案、专门的记忆管理服务。这是当前 Agent 产品竞争的重点——谁更「懂你」谁留存更高。
            </p>
          </TermCard>
        </div>
      </Section>

      {/* Benchmark / 评测 / 意图识别 */}
      <Section kicker="05 · 度量" title="Benchmark、评测与意图识别：好坏谁来裁判">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="Benchmark" en="基准测试" tag="模型界的考试卷">
            <p>
              一套标准化的题目和评分规则，用来给模型「打分排名」。怎么搭：确定考什么能力 → 收集题目（含标准答案或评分规则）→ 固定评测流程（同一 Prompt、同一解码参数）→ 出分数、可复现。
            </p>
            <p className="mt-2">
              三个常见坑：题目泄进训练数据（「刷题」）、指标与真实体验脱节、只看总分不看分项。著名的几张考卷见下表。
            </p>
          </TermCard>
          <TermCard term="意图识别与路由" en="Intent Recognition & Routing" tag="对话系统的总机">
            <p>
              <span className="font-semibold text-zinc-800">意图识别</span>：判断用户这句话到底想干什么——是查订单、投诉，还是闲聊。
              <span className="font-semibold text-zinc-800">路由（Routing）</span>是它的下游动作：识别出意图后，把请求分发到对应的处理链路——查订单走订单系统、投诉走工单流程、闲聊直接让大模型答。
            </p>
            <p className="mt-2">
              比喻：公司总机。先听懂你要找谁（识别），再转对应分机（路由）。识别错了转必错，所以它是对话产品的第一道工序；评测指标看准确率、召回率，以及「路由到兜底」的合理率。
            </p>
          </TermCard>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-zinc-800">三张著名考卷长什么样</p>
          <Table
            head={["考卷", "考什么", "题目形式与判分"]}
            rows={[
              ["MMLU", "综合知识储备", "57 个学科的单选题（数学、历史、法律、医学……），数答对多少"],
              ["HumanEval", "写代码", "164 道 Python 函数题，看生成的代码能否通过预设的单元测试"],
              ["SWE-bench", "真实工程任务", "从真实开源项目里抽 bug，模型要提交补丁并通过项目自带测试——最接近真实工程师的日常工作"],
            ]}
          />
          <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
            一张考卷只能考一种能力，模型在不同考卷上的分数可以差得很远——这就是「看分项不看总分」的原因。为什么评测和意图识别放在同一节？因为这一节的主题是「度量」：意图识别是一个需要被度量的能力（识别准不准要靠评测回答），评测是给所有 AI 能力当裁判的方法论——两者是同一枚硬币的两面。
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TermCard term="BLEU" en="自动指标的代表" tag="机器翻译时代的老尺子">
            <p>
              出身机器翻译的自动打分：数一数 AI 答案和标准答案里有多少连续词组（n-gram）重叠，重叠越多分越高。优点是便宜、快、可复现；致命伤是
              <span className="font-semibold text-zinc-800">「字面像」不等于「意思对」</span>——同义改写会判低分，胡说八道只要用词像就判高分。
            </p>
            <p className="mt-2">
              所以它适合翻译、摘要这类有参考答案的任务；对开放式生成不够用——这正是 LLM-as-a-Judge 出场的原因。
            </p>
          </TermCard>
          <TermCard term="裁判偏置" en="Judge Bias" tag="LLM 当裁判的系统性毛病">
            <p>
              用 LLM 打分时的三类已知偏差：<span className="font-semibold text-zinc-800">位置偏好</span>（两份答案摆一起，裁判偏心排在前面的那份）；
              <span className="font-semibold text-zinc-800">长度偏好</span>（潜意识觉得写得多=写得好）；
              <span className="font-semibold text-zinc-800">自我偏好</span>（偏爱与自己同家族模型写的答案）。
            </p>
            <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600">
              <p className="font-semibold text-zinc-700">位置偏好怎么验证：交换 A/B 顺序盲测</p>
              <p className="mt-1">同一对答案交换前后位置让裁判选 10 次：不偏心的裁判应各选约 5 次；若「排在前面的」赢 8 次以上，说明裁判有位置偏好，评测结果不可信，需打乱顺序重测。</p>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
              对策：盲测打乱顺序、按维度拆分打分、定期抽一部分人工复核校准。面试提一句「裁判本身也要被评测」，是加分细节。
            </p>
          </TermCard>
          <TermCard term="Harness" en="评测跑分器 / 评测脚手架" tag="让分数可比、可复现的框架">
            <p>
              把「加载考题 → 拼装 Prompt → 调用模型 → 计算指标 → 输出报告」整条流程代码化固定下来的评测框架。知名开源实现有
              <span className="font-semibold text-zinc-800"> lm-evaluation-harness</span>（社区事实标准）、HELM、OpenAI Evals 等。注意 Harness 本身不出题也不打分，它负责「按统一规则跑完全场」。
            </p>
            <p className="mt-2">
              为什么必须有它：没有统一 Harness，每个人自己做题、自己拼 Prompt、自己算分，模型 A 用温度 0 跑、模型 B 用温度 0.9 跑，分数差异毫无意义——
              <span className="font-semibold text-zinc-800">不可比、不可复现的评测等于没测</span>
              。Harness 保证同一张卷子、同一种考法、同一套阅卷标准。企业内部的「评测平台」本质上就是自建 Harness；看到任何跑分结论，先问一句「用的同一个 Harness 吗」。
            </p>
          </TermCard>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-zinc-800">评测方法全景（方法篇会展开「怎么做」）</p>
          <Table
            head={["方法", "优点", "缺点"]}
            rows={[
              ["人工评估", "人按标准打分或排序", "最可靠，但贵、慢、主观波动"],
              ["自动指标", "用规则/公式计算（准确率、BLEU 等）", "便宜快，但难以衡量「好不好」这类模糊质量"],
              ["LLM-as-a-Judge", "用强模型当裁判打分", "是规模化的最佳实践；但需防裁判偏置（见上）"],
              ["在线 A/B", "线上分流对比真实用户行为", "是最终真理，但周期长、需要流量"],
            ]}
          />
        </div>
      </Section>

      {/* 分布式 */}
      <Section kicker="06 · 系统" title="分布式：为什么 AI 服务不是一台电脑">
        <TermCard term="分布式系统" en="Distributed System" tag="工程常识">
          <p>
            把一个大任务拆给多台机器协同完成。为什么 AI 离不开它：训练和推理的计算量远超单机容量——训练要成千上万张 GPU 并行数月，推理服务要扛住高并发请求、还要保证某个节点挂了服务不中断（高可用）和随时扩容（弹性伸缩）。
          </p>
          <p className="mt-2">
            PM 需要懂的部分：并发、延迟（如 TP99）、可用性、成本这几个词的语义——它们是和研发讨论「上多少卡、用户体验和预算怎么平衡」共同语言。不需要懂的是一致性协议、调度算法这些实现细节。
          </p>
        </TermCard>
      </Section>

      {/* AI 能解决什么问题 */}
      <Section kicker="07 · 视角" title="AI 能解决什么问题，边界在哪">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
            <h3 className="font-semibold text-emerald-900">AI 现在擅长的事</h3>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-emerald-900/80">
              <li>· 非结构化信息的理解与生成：读文档、写文案、总结会议、翻译</li>
              <li>· 有明确范式的专业劳动：写代码、做表格、画原型（AI Coding 的基本面）</li>
              <li>· 模式识别类预测：风控、推荐、意图路由</li>
              <li>· 7×24 的一对一服务：客服、陪练、助教（成本结构被重塑的领域）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-5">
            <h3 className="font-semibold text-rose-900">AI 当前的边界</h3>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-rose-900/80">
              <li>· 幻觉无法根除：会以极高置信度输出错误内容，高风险决策必须有人或机制兜底</li>
              <li>· 知识截止：训练数据有截止日期，新知识依赖 RAG / 联网检索补</li>
              <li>· 长程可靠性：多步任务中错误会累积，成功率随步骤数指数衰减</li>
              <li>· 因果与物理世界：理解「为什么」操纵现实世界仍很弱</li>
              <li>· 评估难题：开放式产出「好坏」量化，导致迭代慢、责任难界定</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              定义问题的公式：
              <span className="font-semibold">
                高频 × 容错 × 有海量范式可学
              </span>
              的场景适合 AI 先落地；低频 × 零容错 × 需要担责的场景，AI 只能做辅助。面试聊「你会怎么选场景」，这套判断框架就是你的答案骨架。
            </p>
          </Note>
        </div>
      </Section>

      {/* 概念自测 */}
      <Section kicker="自测" title="3 分钟自测：你能复述吗">
        <Table
          head={["问题", "合格的回答方向"]}
          rows={[
            ["Transformer 解决了什么？", "让模型并行地理解词与词之间的关系（注意力），成为所有 LLM 的底座"],
            ["Transformer 怎么选出下一个词？", "输出全词表概率分布，贪心选最高或按温度采样；逐词接力直到结束符"],
            ["RAG 两段链路分别做什么？", "离线：切片、向量化入库；在线：检索、塞进 Prompt 增强、带溯源生成"],
            ["对话记录会进 RAG 知识库吗？", "不会自动进：短对话靠上下文窗口，长期靠 Memory 抽取沉淀——RAG 管知识，Memory 管用户"],
            ["Agent 和 Workflow 的本质区别？", "决策权在模型还是人：灵活 vs 可控，实践中常混搭"],
            ["MCP 的价值是什么？", "把工具接入门槛从 N×M 次开发降到 N+M 次（标准化插头）"],
            ["为什么评测要用 LLM 当裁判？", "开放式产出没有标准答案，人工评贵且慢，LLM 评分可规模化，但要防偏置"],
            ["分布式对 AI 意味着什么？", "算力与并发远超单机，服务的高可用与成本都建立在分布式之上"],
          ]}
        />
        <p className="mt-4 text-[14px] text-zinc-600">
          全部能复述 → 进入
          <a href="#/methods" className="font-semibold text-indigo-600 hover:underline">方法篇</a>
          学"怎么动手"；还有卡壳的 → 回到对应小节再读一遍。
        </p>
      </Section>
    </Layout>
  );
}
