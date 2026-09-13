import {
  Building2,
  Rocket,
  Boxes,
  Map,
} from "lucide-react";
import {
  Layout,
  PageHeader,
  Section,
  Table,
  Note,
  Grid,
  Card,
} from "@/components/site.jsx";

export default function Industry() {
  return (
    <Layout>
      <PageHeader
        eyebrow="行业篇"
        title="产业坐标系"
        desc="聊行业是 AIPM 面试的必考题。你不需要知道所有细节，但要有自己的坐标系：模型公司格局怎么看、AI 产品经历了几波形态、工具生态怎么分层。信息截至 2025 年中，请在面试前自行更新到最新动态。"
      />

      {/* 模型公司 */}
      <Section kicker="01 · 格局" title="主流模型公司的发展格局">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          理解模型公司格局的关键不是背名单，而是看懂
          <span className="font-semibold text-zinc-800">三条路线的分化</span>
          ：闭源冲能力上限、开源换生态位、场景绑定找现金流。同一个模型能力，走不同路线的公司的商业化方式完全不同——这直接决定你去做模型 PM 时的产品形态。
        </p>
        <div className="mt-5">
          <Table
            head={["阵营", "代表公司 / 模型", "战略要点"]}
            rows={[
              [
                "闭源旗舰路线",
                "OpenAI（GPT 系列）、Anthropic（Claude 系列）、Google（Gemini）",
                "以最前沿能力 + 企业服务变现；Claude 以安全对齐与 Agent/编程场景的口碑建立差异化",
              ],
              [
                "开源开放路线",
                "Meta（Llama 系列）、DeepSeek、阿里（通义千问 / Qwen 系开源版）",
                "用开源生态换标准与流量；DeepSeek 以极低的训练成本推理能力震惊行业，带动开源模型性价比革命",
              ],
              [
                "场景绑定路线",
                "字节（豆包）、月之暗面（Kimi）、智谱（GLM）、百度（文心）、讯飞（星火）",
                "C 端助手 / 长文本 / 办公学习等具体场景切入，靠产品体验与分发建立用户心智",
              ],
              [
                "垂直与多模态",
                "xAI（Grok）、商汤、旷视，及各行业垂类模型",
                "向图像、视频、语音、代码等专精能力或行业纵深发展",
              ],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              值得持续追踪的三个趋势：推理能力（o1 式「慢思考」模型把回答变成推理过程）、多模态统一（文本/图像/视频一个模型）、以及 Agent 化（模型从「回答问题」转向「完成任务」——对应本站概念篇的 Agent 章节）。
            </p>
          </Note>
        </div>
      </Section>

      {/* 产品三波 */}
      <Section kicker="02 · 形态" title="AI 产品的三波形态">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="第一波：模型即产品" icon={Rocket}>
            <p>
              直接把模型能力包装成产品：对话助手（ChatGPT、豆包、Kimi）、文生图。特征是通用、轻场景，胜负手在模型能力与分发。
            </p>
          </Card>
          <Card title="第二波：套壳与场景化" icon={Boxes}>
            <p>
              在模型之上做工作流和场景：写作助手、会议纪要、AI 客服、AI 简历。特征是嵌入既有软件，胜负手在对场景的理解和数据的沉淀。所谓「套壳」的贬义正在消失——价值在最后一公里。
            </p>
          </Card>
          <Card title="第三波：Agent 原生" icon={Building2}>
            <p>
              以「完成任务」为目标重构产品：AI Coding 工具、数字员工、自动化办公 Agent。用户不再逐句对话，而是给目标、看结果。这是 2026 年招聘增量最大的方向，也是新 PM 机会最多的地方。
            </p>
          </Card>
        </div>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-zinc-600">
          判断一个 AI 产品的段位，看它离哪一波更近：是「把模型能力暴露给用户」，还是「把模型能力藏进任务完成里」。后者才是护城河的开始。
        </p>
      </Section>

      {/* 工具生态 */}
      <Section kicker="03 · 生态" title="工具与产品发展现状速览">
        <div className="mt-2">
          <Table
            head={["层次", "现状", "对 AIPM 的启示"]}
            rows={[
              [
                "模型层",
                "能力快速迭代，价格持续下探，头部集中与开源百花并存",
                "应用层要设计成「模型可替换」，别把命运绑死在单一模型",
              ],
              [
                "框架层",
                "LangChain 等编排框架普及，Dify / Coze 等低代码平台让非工程师也能搭 Agent",
                "原型验证成本极低——想法的价值在提升，执行门槛在下降",
              ],
              [
                "应用层",
                "Coding / 客服 / 营销 / 招聘等场景率先跑通商业闭环；通用助手流量巨大但变现仍在探索",
                "选场景看「高频 × 容错 × 有范式」，参考概念篇的边界框架",
              ],
              [
                "基础设施",
                "向量库、评测、可观测性工具逐渐标准化；MCP 等协议统一工具接入",
                "基础设施成熟度决定了你做产品时「哪些轮子不用自己造」",
              ],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              一个锻炼行业感的方法：每周精读一款 AI 产品的更新日志（「产品更新日志」），连续一个月，你对「行业往哪走」的体感会超过大多数候选人。
            </p>
          </Note>
        </div>
      </Section>

      {/* 怎么追 */}
      <Section kicker="04 · 习惯" title="保持行业敏感的日常习惯">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="信息源" icon={Map}>
            <ul className="mt-1 space-y-2">
              <li>· 模型公司官方博客与更新日志（OpenAI / Anthropic / DeepSeek 等）</li>
              <li>· 行业研究账号与 newsletter（选 3 个高质量的信源即可，避免信息过载）</li>
              <li>· 产品社区与真实用户反馈（应用商店评论、社区讨论帖）</li>
              <li>· 招聘市场信号：JD 的变化比新闻稿更真实地反映行业需求</li>
            </ul>
          </Card>
          <Card title="动手习惯" icon={Map}>
            <ul className="mt-1 space-y-2">
              <li>· 每月深度使用一款新 AI 产品，写一页拆解：目标用户、核心流程、AI 边界设计</li>
              <li>· 维护一份自己的「模型能力亲测表」：不同模型在你常用任务上的表现对比</li>
              <li>· 用 AI Coding 工具做一个小项目并复盘：哪里好用、哪里翻车、为什么</li>
            </ul>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}
