import { FlaskConical, Timer, BellRing, FileBarChart, GitBranch } from "lucide-react";
import {
  Layout,
  PageHeader,
  Section,
  Card,
  Steps,
  Table,
  Note,
} from "@/components/site.jsx";

export default function Practice() {
  return (
    <Layout>
      <PageHeader
        eyebrow="实操室"
        title="从 0 到 1：搭一个会自己干活的自动化场景"
        desc="这一页不讲概念，直接带你走完一个完整 MVP：「知识库每日自动质检机器人」——每天定时跑评测题、自动评分、自动出日报、跌破阈值自动告警。它用到的每一个零件，概念篇和方法篇都讲过；搭完它，你就拥有了一个可以写进简历、可以在面试里完整讲 5 分钟的作品。"
      />

      {/* 场景定义 */}
      <Section kicker="01 · 场景" title="先想清楚：谁在什么时候需要什么">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="需求一句话" icon={FlaskConical}>
            <p>
              你维护了一个知识库问答应用（比如用 Dify 搭的）。知识库天天有人改文档、调切片、换模型——
              <span className="font-semibold text-zinc-800">今天它回答得还像昨天一样好吗？</span>
              没人知道，直到用户踩坑。你需要的不是一个更聪明的模型，而是一个每天自动替你「抽考」的质检员。
            </p>
          </Card>
          <Card title="为什么这个场景适合练手" icon={GitBranch}>
            <ul className="mt-1 space-y-2">
              <li>· <span className="font-semibold text-zinc-800">高频真实</span>：企业里对应的真实系统叫「评测准入/质量门禁」</li>
              <li>· <span className="font-semibold text-zinc-800">闭环完整</span>：触发 → 执行 → 判断 → 产出 → 告警，自动化要素齐全</li>
              <li>· <span className="font-semibold text-zinc-800">可量化</span>：准确率、拒答率都是数字，改进前后有对比</li>
              <li>· <span className="font-semibold text-zinc-800">成本为零</span>：复用你的 RAG 评测实验室，脚本加调度即可</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* 架构 */}
      <Section kicker="02 · 架构" title="五个零件串成一条流水线">
        <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium">
          {["定时触发器", "批量提问", "LLM 裁判评分", "汇总统计", "日报与告警"].map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-700">{s}</span>
              {i < 4 && <span className="text-zinc-300">→</span>}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <Table
            head={["环节", "干什么", "用什么实现"]}
            rows={[
              ["定时触发", "每天固定时间（如早 8 点）自动启动一轮质检", "系统 cron / GitHub Actions 定时任务；Dify 侧也可用工作流+外部调度"],
              ["批量提问", "把评测集 30 道题逐条发给知识库问答应用，收集回答", "ask_dify.py（Dify chat-messages API，app- 密钥）"],
              ["自动评分", "裁判模型对照评分要点逐题打分：事实题 0/1/2，边界题 0/1", "judge.py（任意 OpenAI 兼容接口，glm-4-flash 免费）"],
              ["汇总统计", "算总分、按题型拆分、和昨天的结果对比", "几行 Python 聚合 results.csv；不用数据库，CSV 就是存储"],
              ["日报与告警", "生成一句话日报推送给自己；准确率跌破阈值（如 85%）时发告警", "邮件 / 群机器人 webhook；告警逻辑 = 一个 if 判断"],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              注意这条链路的性质：步骤全部可枚举、顺序固定、要求稳定执行——这是典型的
              <span className="font-semibold text-zinc-800"> Workflow 场景而不是 Agent 场景</span>
              （方法篇第 7 节的判断树）。唯一用到模型自主判断的地方只有「裁判打分」这一个节点。
            </p>
          </Note>
        </div>
      </Section>

      {/* MVP 边界 */}
      <Section kicker="03 · 取舍" title="MVP 的边界：明确不做什么，比做什么更重要">
        <Table
          head={["维度", "MVP 做什么", "明确不做什么"]}
          rows={[
            ["题量", "30 道精选题（事实/综合/边界各 10 道）", "不上全量回归，不追求覆盖率"],
            ["存储", "CSV 文件按日期命名存档", "不建数据库、不做后台系统"],
            ["产出", "每日一句话日报 + 一张分型得分表", "不做 Web 看板、不做权限系统"],
            ["部署", "本机 cron 定时跑", "不上服务器、不做高可用"],
            ["告警", "跌破阈值发一条消息", "不做工单流转、不做自动回滚"],
          ]}
        />
        <div className="mt-4">
          <Note>
            <p>
              每一行「不做」都是一个产品决策：用最低成本验证「自动质检」这件事本身有没有价值。MVP 的思维不是「先做简单的」，而是
              <span className="font-semibold text-zinc-800">「只验证最核心的那个假设」</span>——这里的假设是：每日质检能提前发现知识库质量回退。
            </p>
          </Note>
        </div>
      </Section>

      {/* 搭建步骤 */}
      <Section kicker="04 · 动手" title="六步搭完（复用你已有的评测实验室）">
        <Steps
          items={[
            {
              title: "准备评测资产（已有）",
              desc: "rag-eval-lab 里的 questions.csv（30 题带评分要点）、ask_dify.py、judge.py 直接复用，这就是质检员的「考卷」和「红笔」。",
            },
            {
              title: "写主控脚本 daily_check.py",
              desc: "顺序调用：ask_dify --tag $(日期) → judge --tag $(日期) → 读 results 算总分 → 和昨天对比 → 生成日报文本。一个文件，50 行以内。",
            },
            {
              title: "加阈值告警",
              desc: "日报生成后加判断：总分 < 85% 或边界题出现幻觉回答 → 拼一条告警消息。告警文案写清「哪组指标跌了、跌了多少、怀疑方向」。",
            },
            {
              title: "接推送通道",
              desc: "邮件（SMTP 几行代码）或群机器人 webhook（飞书/企业微信/钉钉都有现成的 webhook 机器人，POST 一段 JSON 即可）。",
            },
            {
              title: "挂定时任务",
              desc: "macOS/Linux 用 crontab -e 加一行：0 8 * * * cd 路径 && python3 daily_check.py。先手动跑通三次，再交给定时器。",
            },
            {
              title: "跑一周，写复盘",
              desc: "连续跑 7 天，记录：有没有误告警？哪类题波动最大？这份「7 天质检记录 + 复盘结论」就是面试时最硬的作品集材料。",
            },
          ]}
        />
      </Section>

      {/* 产品化认知 */}
      <Section kicker="05 · 升华" title="从脚本到产品：这玩意在企业里叫什么">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="它对应的四个产品概念" icon={BellRing}>
            <ul className="mt-1 space-y-2">
              <li>· <span className="font-semibold text-zinc-800">质量门禁</span>：准确率跌破阈值 = 不允许这次知识库变更上线</li>
              <li>· <span className="font-semibold text-zinc-800">回归测试</span>：固定考卷反复考，防「改好 A 弄坏 B」</li>
              <li>· <span className="font-semibold text-zinc-800">可观测性</span>：日报和趋势让质量从「感觉」变成「曲线」</li>
              <li>· <span className="font-semibold text-zinc-800">评测准入</span>：字节等大厂治理策略团队的日常基建，你面试的岗位就在做这件事</li>
            </ul>
          </Card>
          <Card title="面试 60 秒讲法" icon={FileBarChart}>
            <p>
              「我给自建的知识库问答应用搭了一套每日自动质检：30 道带评分要点的评测题定时批量提问，LLM 裁判按事实/边界分型打分，生成日报并在准确率跌破阈值时告警。过程中我量化了切片大小对召回的影响，也踩过裁判位置偏置的坑并用交换盲测修掉。它本质是企业里评测准入门禁的最小实现——我知道完整版还要补全量回归、多人标注校准和变更拦截。」
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              最后一句话是点睛：主动说出 MVP 的边界和完整版的差距，证明你既动得了手、又看得见全貌——这正是「产品 Sense」和「纯调参」的区别。
            </p>
          </Note>
        </div>
      </Section>
    </Layout>
  );
}
