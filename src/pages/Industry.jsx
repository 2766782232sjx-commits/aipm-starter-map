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
        desc="聊行业是 AIPM 面试的必考题。你不需要知道所有细节，但要有自己的坐标系：模型公司格局怎么看、AI 产品经历了几波形态、各家实践到了什么水平、前沿正在啃哪些硬骨头。"
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
              值得持续追踪的三个趋势：推理模型已成旗舰标配（「慢思考」从卖点变成默认能力）、Computer Use（模型直接操作真实软件完成长流程任务）、以及 Agent 后训练（行业开始寻找 Agent 时代的 Scaling Law——详见本页「前沿难题」一节）。
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

      {/* 企业实践 */}
      <Section kicker="04 · 实践" title="各家企业的真实实践与水平坐标">
        <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-600">
          面试聊「你了解哪些公司」时，报菜名是下策，说出<span className="font-semibold text-zinc-800">每家在干什么、处于什么水平</span>才是上策。判断一家企业 AI 水平看三件事：旗舰模型在真实任务基准（不是聊天榜单）上的位置、有没有自己定义的行业标准、Agent 是否进入了真实生产流程。
        </p>
        <div className="mt-5">
          <Table
            head={["企业", "当前在做什么（实践）", "水平坐标"]}
            rows={[
              ["OpenAI", "GPT-6 Astra（2026.9）：105 万 token 上下文、Computer Use 长流程操作；真实电脑环境多步任务基准 Agents' Last Exam 得分 59.3% 暂居第一；Codex 编程 Agent 配「跨上下文工作笔记」机制", "前沿旗舰：长程 Agent 方向的行业领跑"],
              ["Anthropic", "Claude Opus 5 + Claude Code 编程 Agent；主导的 MCP 协议成为工具接入行业标准；Agents' Last Exam 55.5%", "编程与 Agent 工程化口碑最强，标准制定者"],
              ["Google", "Gemini 系列，多模态能力与搜索/办公生态深度整合", "第一梯队，生态整合最深"],
              ["DeepSeek", "开源推理模型性价比路线的旗手，训练成本控制成行业标杆", "开源阵营头号选手"],
              ["阿里", "通义千问 Qwen 开源生态；HSCodeComp 研究（ACL 2026 最佳资源论文）首次量化 Agent 的「专家级能力鸿沟」", "开源生态 + 产业研究双强"],
              ["字节跳动", "豆包 C 端助手 + Coze 扣子平台 + 电商场景 AI 治理体系", "应用生态与分发最强，场景纵深"],
              ["蚂蚁集团", "百灵大模型，Agent 后训练产业化实践（2026 外滩大会分享）", "金融等高门槛场景的纵深代表"],
            ]}
          />
        </div>
        <div className="mt-4">
          <Note>
            <p>
              一个观察：第一梯队的竞争焦点已经从「聊天体验」整体转向「真实任务完成率」。看这个转移，比盯跑分榜单更能判断行业水位。
            </p>
          </Note>
        </div>
      </Section>

      {/* 前沿难题 */}
      <Section kicker="05 · 前沿" title="前沿正在攻克的难题（面试高级感来源）">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="长程 Agent 的可靠性" icon={Rocket}>
            <p>
              任务步数越多，成功率指数衰减——最强的旗舰模型在 Agents' Last Exam（真实电脑环境里跨软件完成多步任务）也只做到约
              <span className="font-semibold text-zinc-800"> 59%</span>
              ，离「放心托管」还很远。攻克方向：上下文机制改造（工作笔记取代一次性摘要压缩）、执行中自我检查与回滚。
            </p>
          </Card>
          <Card title="Agent 后训练与自我进化" icon={Rocket}>
            <p>
              2026 外滩大会的核心议题：Agent Post-Training，寻找 Agent 时代的 Scaling Law——让 Agent 在真实环境中完成任务、积累经验、自我进化。瓶颈不在模型而在<span className="font-semibold text-zinc-800">环境构建、结果验证、防奖励作弊（reward hacking）</span>：环境之于 Agent，如同数据之于模型。
            </p>
          </Card>
          <Card title="专家级能力鸿沟" icon={Rocket}>
            <p>
              阿里 HSCodeComp 基准：让最强的 Deep Search Agent 做海关编码归类（十年专家 95% 正确率），最好的系统只有
              <span className="font-semibold text-zinc-800"> 49.4%</span>
              ——面对人类专家编写的层级规则，先进 Agent 集体失灵。垂直专家场景是通用 Agent 的下一座大山，也是垂直 PM 的机会。
            </p>
          </Card>
          <Card title="Computer Use 与界面理解" icon={Rocket}>
            <p>
              让模型直接操作真实软件：界面理解基准 ScreenSpot-Pro 一年内从 76.9% 跳到 92.7%，但跨软件长流程仍脆。另一条路线的思路反过来——不是教 AI 学人类界面，而是<span className="font-semibold text-zinc-800">让软件原生适配 Agent</span>（把专业软件包装成命令行接口，如 CLI-Anything 的探索）。
            </p>
          </Card>
          <Card title="长期记忆与个性化" icon={Rocket}>
            <p>
              「谁更懂你谁留存更高」——跨会话长期记忆是 Agent 产品的竞争焦点，但记忆的写入策略（什么值得记）、更新与遗忘（过期信息怎么清）、隐私边界（用户能不能查看和删除记忆）都还没有行业共识。
            </p>
          </Card>
          <Card title="推理成本与效率" icon={Rocket}>
            <p>
              长程 Agent 单次任务消耗巨量上下文与 KV cache 存储；「循环深度」等新推理架构在探索中。成本结构决定哪些场景商业化跑得通——这也是为什么「单位经济模型」成了 AI PM 的必修课（方法篇成本一节）。
            </p>
          </Card>
        </div>
        <div className="mt-4">
          <Note>
            <p>
              面试被问「你怎么看 Agent 落地前景」时，用两个数字校准乐观：真实电脑多步任务最强模型约 59%，专家级垂直任务约 49%（人类专家 95%）。既看得到方向，又说得出差距——这比空谈「未来已来」高级得多。
            </p>
          </Note>
        </div>
      </Section>

      {/* 怎么追 */}
      <Section kicker="06 · 习惯" title="保持行业敏感的日常习惯">
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
