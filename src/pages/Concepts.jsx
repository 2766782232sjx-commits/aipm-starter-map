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
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-zinc-800">幻觉的四种缓解方案（面试题「怎么解决幻觉」的满分框架）</p>
          <Table
            head={["方案", "一句话原理", "适合什么", "局限"]}
            rows={[
              ["RAG", "回答前先查资料，基于资料作答", "知识时效性强、企业私有知识", "检索不到照样编；效果上限被检索质量锁死"],
              ["Prompt 约束", "指令里要求「不知道就说不知道」「给出依据」", "零成本，所有场景的第一步", "靠模型自觉，压不住高置信度的瞎编"],
              ["SFT 微调", "用「诚实作答/该拒就拒」的样本训练，改变行为习惯", "行为模式要求稳定的场景", "成本高、周期长，可能损伤通用能力"],
              ["调低 Temperature", "降低采样随机性，让模型选更「保守」的词", "事实型、答案收敛的任务", "治标：只是错得更稳定，不是更对"],
            ]}
          />
          <p className="mt-3 text-[14px] text-zinc-600">
            实战是组合拳：RAG 供资料 + Prompt 立规矩 + 必要时 SFT 固行为，再配上引用溯源让用户能核查——「无法根除，只能缓解 + 兜底」这句话本身就是面试加分点。
          </p>
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

      {/* Prompt 注入 */}
      <Section kicker="03.5 · 安全" title="Prompt 注入：AI 时代的「SQL 注入」">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="Prompt 注入" en="Prompt Injection" tag="治理与安全岗必考">
            <p>
              攻击者把恶意指令混进模型能看到的内容里，诱导它忽略原本的设定、执行攻击者的意图。分两种：<span className="font-semibold text-zinc-800">直接注入</span>（用户在输入框里写「忽略你之前的所有指令……」）和
              <span className="font-semibold text-zinc-800">间接注入</span>（恶意指令藏在网页、邮件、文档里，Agent 抓取或 RAG 检索时「吃下」中毒内容）。
            </p>
            <p className="mt-2">
              为什么难防：<span className="font-semibold text-zinc-800">指令和数据走在同一条通道里</span>。对模型来说，老板的系统提示词和资料里的一句话都是文本，没有天然的权限高低之分——这是架构级难题，不是写几句防御话术能根治的。
            </p>
          </TermCard>
          <TermCard term="纵深防御" en="Defense in Depth" tag="没有银弹，只能分层">
            <p>
              工业界的共识是分层拦截，每层降低一部分风险：<span className="font-semibold text-zinc-800">输入侧</span>（注入检测、可疑内容过滤）；<span className="font-semibold text-zinc-800">指令侧</span>（系统提示词明确权限边界，要求模型引用外部内容时保持警惕）；<span className="font-semibold text-zinc-800">架构侧</span>（不可信内容打标降权、工具调用白名单、高风险动作必须人工确认）；<span className="font-semibold text-zinc-800">输出侧</span>（敏感信息泄露检测）。
            </p>
            <p className="mt-2">
              产品启示：做 AI 功能设计时，凡涉及「模型读取外部内容 + 调用工具执行动作」的组合，都要默认内容是敌对的来推演一遍——这正是治理策略类岗位的日常思维。
            </p>
          </TermCard>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              面试用法：被问「怎么做 AI 内容安全/治理」时，用「直接/间接注入分类 + 四层纵深防御 + 没有银弹」作答，比背定义高一个段位。它和拒答边界（方法篇）是一对：拒答管「模型不该说什么」，注入防御管「模型不该听什么」。
            </p>
          </Note>
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
            <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600">
              <p className="font-semibold text-zinc-700">一词两义，别搞混</p>
              <p className="mt-1">
                Harness 原义是马具——「套在模型外面的那层支架」。本页讲的是<strong>评测支架</strong>（跑考试）；近年还流行另一种用法 <strong>Agent Harness</strong>（工作支架）：包在模型外面的系统 Prompt、工具清单、循环与上下文管理——「同一个模型配不同 harness 表现天差地别」，Claude Code、Cursor 卖的一半是模型、一半是 harness。考试时它是考试支架，干活时它是工作支架，指的都是「模型之外那层东西」。
              </p>
            </div>
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

      {/* VLM / SFT */}
      <Section kicker="08 · 多模态与微调" title="VLM 与 SFT：给模型长眼睛、上补习班">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="VLM" en="Vision Language Model / 视觉语言模型" tag="多模态文档分析的发动机">
            <p>
              能同时「看」图和「读」文字的模型。结构上是给 LLM 加装了一个
              <span className="font-semibold text-zinc-800">视觉编码器</span>
              ：图片先被切成视觉 token，和文字 token 一起送进同一个 Transformer 理解。于是模型可以回答「这张截图里按钮在哪」「这张表的第三行销售额是多少」。代表选手：GPT-4o、Claude、Qwen-VL。
            </p>
            <p className="mt-2">
              对 PM 的意义：<span className="font-semibold text-zinc-800">多模态文档分析</span>这条产品线的地基——合同里扫描的公章、研报里的图表、发票照片、界面截图，过去要 OCR 转文字（表格结构全丢），现在 VLM 直接读图理解。面试聊「知识库里全是 PDF 扫描件怎么办」，答案就是这条路。
            </p>
          </TermCard>
          <TermCard term="SFT" en="Supervised Fine-Tuning / 监督微调" tag="用示例给模型补课">
            <p>
              拿一批「标准问 + 标准答」的示例数据继续训练模型，让它的行为向示例靠拢。与它配套的还有 RLHF（用人类偏好打分调对齐）。微调改的是模型的
              <span className="font-semibold text-zinc-800">行为习惯</span>：语气、格式、风格、对某类任务的套路。
            </p>
            <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600">
              <p className="font-semibold text-zinc-700">Prompt / RAG / SFT 怎么选（高频面试题）</p>
              <p className="mt-1">知识性的问题 → RAG（知识天天变，微调追不上）；行为格式的问题 → SFT（要 1000+ 条稳定风格时用）；先试 Prompt，Prompt 写不出的稳定行为再上微调。微调「记住」的内容会过时且难删除——这是它和 RAG 最本质的分工。</p>
            </div>
          </TermCard>
        </div>
      </Section>

      {/* API / Function Calling / Postman */}
      <Section kicker="09 · 接口" title="API、Function Calling 与结构化输出：模型怎么和外界对话">
        <div className="grid gap-4 md:grid-cols-2">
          <TermCard term="API 交互" en="应用程序接口" tag="PM 的最小技术通识">
            <p>
              调一次模型 = 发一次 HTTP 请求：带着 API Key（鉴权）把一段 JSON 发给服务商的 endpoint，JSON 里写明 model、messages（对话历史）、temperature 等参数，对方回一段 JSON，里面是生成的文本和 token 用量。模型 API 是
              <span className="font-semibold text-zinc-800">无状态</span>的——服务端不记你上次聊了什么，多轮对话靠客户端把完整历史每次都重新发一遍（所以长对话 token 越滚越贵）。
            </p>
            <p className="mt-2">
              PM 要懂的四个边界：按 token 计费（输入输出分开计价）、上下文窗口上限、每分钟调用次数限流（RPM）、流式输出（打字机效果）vs 一次性返回。这四条直接决定你的产品体验设计和成本模型。
            </p>
          </TermCard>
          <TermCard term="Function Calling 与结构化输出" en="函数调用" tag="从「聊天」到「执行」的桥梁">
            <p>
              关键认知：<span className="font-semibold text-zinc-800">模型自己不会执行任何函数</span>。它只是根据你的工具清单，输出一段结构化 JSON：「建议调用 get_weather，参数 city=北京」。真正的执行由程序完成，结果再回传给模型，模型用人话总结——循环可能多轮，这就是 Agent 工具的底层循环。
            </p>
            <p className="mt-2">
              结构化输出（Structured Output）是同一思路：用 JSON Schema 约束模型必须输出合法格式的 JSON。它让模型从「写文章的」变成「填表的」——打标签、抽字段、打分、路由判断，一切要进程序下游的输出都该走结构化，否则一个多余标点就能让解析崩溃。
            </p>
          </TermCard>
        </div>
        <div className="mt-4">
          <TermCard term="Postman 与 curl" en="接口联调的两把扳手" tag="PM 也得上手">
            <p>
              curl 是命令行里的一行请求，Postman 是图形化界面（能存请求收藏夹、切换环境变量、看历史）。它们是验证接口的工具——文档说接口能返回什么，亲手调一遍才算数。一次真实调用长这样：
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-3 font-mono text-[12px] leading-relaxed text-zinc-100">
              <p>curl https://api.openai.com/v1/chat/completions \</p>
              <p>&nbsp;&nbsp;-H "Authorization: Bearer sk-你的key" \</p>
              <p>&nbsp;&nbsp;-H "Content-Type: application/json" \</p>
              <p>&nbsp;&nbsp;-d '{'{'}"model":"gpt-4o","messages":[{'{'}"role":"user","content":"你好"{'}'}]'{'}'}'</p>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
              PM 的三个用法：验证 API 文档与真实行为是否一致；定位问题归属（curl 直连正常但产品里报错 → 锅在接入层不在模型）；面试实操题「给你个 API 搭个小工具」时这是第一道工序。
            </p>
          </TermCard>
        </div>
        <div className="mt-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold text-zinc-800">一图看懂 Function Calling 循环（模型只「建议」，程序才「执行」）</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px] font-medium">
              <span className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-zinc-700">用户提问「北京明天天气？」</span>
              <span className="text-zinc-300">→</span>
              <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-700">模型输出 JSON：调用 get_weather(city=北京)</span>
              <span className="text-zinc-300">→</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">程序真正调用天气 API</span>
              <span className="text-zinc-300">→</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">结果回传给模型</span>
              <span className="text-zinc-300">→</span>
              <span className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-zinc-700">模型用人话总结「明天晴，18~26℃」</span>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-zinc-500">
              如果模型拿到结果后判断还需要别的信息（比如再查穿衣指数），会再输出一次调用 JSON——这个循环可以转多轮，直到模型认为可以作答为止。Agent 的「工具调用循环」就是这张图的不断重复。
            </p>
          </div>
        </div>
      </Section>

      {/* LangGraph / Dify / Coze */}
      <Section kicker="10 · 平台" title="LangGraph、Dify、Coze：把想法拼起来的三条路">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          三者都能「把模型、工具、知识库拼成应用」，但抽象层级完全不同：一个给你代码框架，一个给你可视化工作流，一个给你插件生态。选型本质是
          <span className="font-semibold text-zinc-800">自由度 vs 上线速度</span>的交换。
        </p>
        <div className="mt-5">
          <Table
            head={["平台", "定位与用法", "优势", "短板与适用"]}
            rows={[
              ["LangGraph", "代码级 Agent 编排框架（LangChain 家族），把 Agent 画成状态机图：节点=动作，边=流转条件", "控制粒度最细，复杂分支、循环、人机协同都能精确表达", "要写代码、要运维；适合工程师主导、逻辑复杂的核心系统"],
              ["Dify", "开源低代码 LLM 应用平台：可视化拖拽工作流 + 知识库 + 一键发布 API，可私有化部署", "不写代码也能搭出能上线的产品，企业内网可自部署", "深度定制有天花板；适合 PM 快速验证、企业内部工具"],
              ["Coze（扣子）", "字节出品的零代码 Bot 平台：插件商店 + 工作流 + 一键发布到抖音/飞书等渠道", "生态插件现成、分发渠道现成，个人创作者几分钟出作品", "平台绑定深、数据在云上；适合 C 端小工具和快速原型"],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              选型口诀：验证想法用 Dify/Coze（小时级出活），逻辑复杂到拖拽摆不下再上 LangGraph，数据不能出内网选 Dify 自部署。三者不是互斥——很多团队是 Coze 试错、Dify 上线、LangGraph 承载核心链路。你的 RAG 评测实验室走的就是 Dify 路线。
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
            ["VLM 解决了知识库的什么痛点？", "扫描件/图表/截图不用 OCR 硬转文字，视觉编码器让模型直接读图理解"],
            ["知识型问题和行为型问题分别怎么解？", "知识用 RAG（可变、可溯源），行为用 SFT（稳定风格格式）；先 Prompt，不行再微调"],
            ["Function Calling 是模型在执行函数吗？", "不是——模型只输出「调什么、参数是什么」的 JSON，执行在程序侧，结果回传再总结"],
            ["为什么模型 API 长对话越来越贵？", "无状态：每轮要把完整对话历史重发一遍，token 按输入输出计费"],
            ["LangGraph / Dify / Coze 怎么选？", "验证想法用 Dify/Coze，复杂状态机用 LangGraph，数据不出内网用 Dify 自部署"],
            ["分布式对 AI 意味着什么？", "算力与并发远超单机，服务的高可用与成本都建立在分布式之上"],
            ["解决幻觉有哪四招？", "RAG 供资料、Prompt 立规矩、SFT 固行为、降温减随机——组合拳 + 溯源兜底，无法根除"],
            ["Prompt 注入为什么难防？", "指令和数据同一通道，模型分不清「命令」和「资料」；只能输入/指令/架构/输出四层纵深防御"],
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
