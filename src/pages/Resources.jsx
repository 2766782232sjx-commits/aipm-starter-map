import { ExternalLink, Github, Star } from "lucide-react";
import {
  Layout,
  PageHeader,
  Section,
  Table,
  Note,
  Card,
  Grid,
} from "@/components/site.jsx";

const CATEGORIES = [
  {
    title: "课程型：跟着学，适合零基础起步",
    note: "特征是有清晰的章节结构。选一门主线跟完，不要收藏吃灰。",
    repos: [
      {
        name: "microsoft/generative-ai-for-beginners",
        url: "https://github.com/microsoft/generative-ai-for-beginners",
        stars: "11.9w",
        desc: "微软官方生成式 AI 入门课程，21 课覆盖从原理到 RAG、Agent 的完整主线，有中文版。",
        why: "体系最完整的免费课程，适合当 12 周计划里第 1~2 周的主线教材。",
      },
      {
        name: "datawhalechina/llm-cookbook",
        url: "https://github.com/datawhalechina/llm-cookbook",
        stars: "2.5w",
        desc: "吴恩达大模型系列课程的中文版合集（Prompt、RAG、Agent、微调等），Datawhale 社区维护。",
        why: "每门子课只要几小时，中文友好，是快速补齐各主题认知的最佳素材库。",
      },
      {
        name: "itshen/learn-ai",
        url: "https://github.com/itshen/learn-ai",
        stars: "477",
        desc: "专为 AI 产品经理设计的培训课程，从大模型底层原理到 AI 工程化落地。",
        why: "少见的「PM 视角」体系课，内容组织和本站高度互补。",
      },
      {
        name: "liyupi/codefather",
        url: "https://github.com/liyupi/codefather",
        stars: "8.5w",
        desc: "编程学习路线大全，含 AI 应用开发、AI Agent 开发路线与 RAG、MCP、Prompt 实战教程。",
        why: "想走「懂产品的研发」路线时的路线图参考，AI 部分章节可直接当方法篇的扩展阅读。",
      },
    ],
  },
  {
    title: "原理与工程认知：听懂研发的黑话",
    note: "不求全部读完。按需查阅：面试前重点翻综述的目录和 llm-action 的架构章节。",
    repos: [
      {
        name: "RUCAIBox/LLMSurvey",
        url: "https://github.com/RUCAIBox/LLMSurvey",
        stars: "1.2w",
        desc: "人大出品的大模型综述论文官方页，把 LLM 的预训练、微调、对齐、应用体系化梳理。",
        why: "想要「体系化原理观」时的最佳免费材料，读目录就能建立知识框架。",
      },
      {
        name: "liguodongiot/llm-action",
        url: "https://github.com/liguodongiot/llm-action",
        stars: "2.5w",
        desc: "大模型工程化实战：训练、推理、部署、LLMOps 全链路。",
        why: "和研发讨论「为什么慢、为什么贵」时的背景知识来源。",
      },
      {
        name: "datawhalechina/self-llm",
        url: "https://github.com/datawhalechina/self-llm",
        stars: "3.2w",
        desc: "开源大模型食用指南：在 Linux 环境微调（全参/LoRA）和部署国内外开源模型的保姆级教程。",
        why: "想亲手摸一次模型微调时照着做，做完你对「模型迭代成本」的理解会质变。",
      },
      {
        name: "TingsongYu/PyTorch-Tutorial-2nd",
        url: "https://github.com/TingsongYu/PyTorch-Tutorial-2nd",
        stars: "4.6k",
        desc: "PyTorch 实用教程第二版，从零基础到 CV/NLP/LLM 项目应用与工程化部署。",
        why: "仅当你决定走技术侧路线时需要；PM 主线可跳过。",
      },
    ],
  },
  {
    title: "Prompt 与 PM 效率：日常就用起来",
    note: "Prompt 库的价值不在背，在于对比别人怎么拆解任务结构。",
    repos: [
      {
        name: "GitHubDaily/ChatGPT-Prompt-Engineering-for-Developers-in-Chinese",
        url: "https://github.com/GitHubDaily/ChatGPT-Prompt-Engineering-for-Developers-in-Chinese",
        stars: "2.1k",
        desc: "吴恩达《面向开发者的提示词工程》课程的中英双语字幕与笔记。",
        why: "Prompt 入门的经典第一课，配合方法篇第一节的技巧表使用。",
      },
      {
        name: "f/awesome-chatgpt-prompts",
        url: "https://github.com/f/awesome-chatgpt-prompts",
        stars: "经典合集",
        desc: "GitHub 上最经典的 Prompt 角色库，社区持续维护多年。",
        why: "看优秀 Prompt 的「角色 + 约束 + 输出」结构怎么写。",
      },
      {
        name: "jiaxuan-tao/awesome-ai-product-manager",
        url: "https://github.com/jiaxuan-tao/awesome-ai-product-manager",
        stars: "42",
        desc: "AI 产品经理的资源、工具、Prompt 与项目参考合集，新而精准。",
        why: "星标少但内容对口，适合当「PM 专属收藏夹」定期翻新。",
      },
      {
        name: "tanu-rana/Awesome-PM-Prompts",
        url: "https://github.com/tanu-rana/Awesome-PM-Prompts",
        stars: "小而美",
        desc: "面向 AI 产品经理的 Prompt 合集：写 PRD、竞品分析、需求评估等场景。",
        why: "把 AI 变成日常工作台的第一步：先让 AI 干掉你的重复劳动。",
      },
    ],
  },
  {
    title: "Agent 与动手搭建：做出作品集",
    note: "对应 12 周计划的第 6~10 周：从低代码平台入手，框架源码不必硬啃。",
    repos: [
      {
        name: "datawhalechina/hugging-multi-agent",
        url: "https://github.com/datawhalechina/hugging-multi-agent",
        stars: "1.4k",
        desc: "基于 MetaGPT 的多智能体概念入门与开发教程。",
        why: "理解「多个 Agent 如何像团队一样协作」的最快入口。",
      },
      {
        name: "ModelEngine-Group/app-platform",
        url: "https://github.com/ModelEngine-Group/app-platform",
        stars: "1.5k",
        desc: "面向软件工程师和产品经理的低代码大模型应用工程平台。",
        why: "官方定位就写明「为 PM 提供从概念到部署的全流程环境」，适合做工作流实践。",
      },
      {
        name: "peterfei/ai-agent-team",
        url: "https://github.com/peterfei/ai-agent-team",
        stars: "434",
        desc: "一键搭建 24/7 AI 开发团队：产品经理、前端、后端、测试、DevOps 角色分工协作。",
        why: "体验「AI 组织」的最佳玩具，也是面试聊多 Agent 协作的现成案例。",
      },
      {
        name: "karozi/Awesome-Vibecoding-and-Speccoding-Resources",
        url: "https://github.com/karozi/Awesome-Vibecoding-and-Speccoding-Resources",
        stars: "新repo",
        desc: "Vibe Coding 与规格驱动开发的清单、指南与工具合集，面向 PM 和 AI 构建者。",
        why: "AI Coding 工作流的最佳实践库，配合方法篇成本账一起看。",
      },
    ],
  },
  {
    title: "官方手册与工具框架：随查随用",
    note: "这类不是「读完」的资源，是「用到再查」的字典。",
    repos: [
      {
        name: "openai/openai-cookbook",
        url: "https://github.com/openai/openai-cookbook",
        stars: "官方权威",
        desc: "OpenAI 官方示例与指南手册：API 用法、Embedding、RAG、评测等官方最佳实践。",
        why: "工程细节的最终裁判。研发说的方案对不对，翻这里验证。",
      },
      {
        name: "Hoper-J/AI-Guide-and-Demos-zh_CN",
        url: "https://github.com/Hoper-J/AI-Guide-and-Demos-zh_CN",
        stars: "中文友好",
        desc: "中文 AI 学习指南与可运行演示合集。",
        why: "想跑通某个演示时先来这里找现成中文版。",
      },
      {
        name: "langgenius/dify",
        url: "https://github.com/langgenius/dify",
        stars: "头部框架",
        desc: "最流行的开源 LLM 应用开发平台：可视化编排工作流、RAG、Agent。",
        why: "12 周计划里搭 Agent 的首选工具之一，低代码上手。",
      },
      {
        name: "langchain-ai/langchain",
        url: "https://github.com/langchain-ai/langchain",
        stars: "头部框架",
        desc: "最知名的大模型应用开发框架，生态和教程最全。",
        why: "JD 里出现频率最高的框架名，至少要能说出它的定位和生态。",
      },
    ],
  },
];

export default function Resources() {
  return (
    <Layout>
      <PageHeader
        eyebrow="资源导航"
        title="GitHub 优质仓库精选"
        desc="GitHub 上 AI 学习资源极多，但 90% 是收藏夹吃灰。这份清单按「你处在哪个阶段」精选整理，每条都标注了它在你学习路径里的位置。星标数为 2026 年 9 月查询 GitHub API 的一手数据，仅供参考。"
      />

      <Section kicker="怎么用" title="选资源的三条原则">
        <Grid cols={3}>
          <Card title="一门主线，多个查阅">
            <p>
              课程型资源选一门当主线跟完，其余全部降级为「字典」。同时追三门课的下场通常是零门完成。
            </p>
          </Card>
          <Card title="PM 视角优先">
            <p>
              同主题下优先选面向 PM / 非工程师的资源；技术教程只在需要「亲手验证」时才读代码部分。
            </p>
          </Card>
          <Card title="产出倒逼输入">
            <p>
              每个资源读完必须产出点什么：一页笔记、一个跑通的 demo、一份对比数据。否则不是学过，只是刷过。
            </p>
          </Card>
        </Grid>
      </Section>

      {CATEGORIES.map((cat, i) => (
        <Section key={i} kicker={`分类 ${i + 1}`} title={cat.title}>
          <p className="-mt-3 mb-4 text-[14px] text-zinc-600">{cat.note}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {cat.repos.map((r) => (
              <div
                key={r.name}
                className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[14px] font-semibold text-indigo-600 hover:underline"
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    {r.name}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                  </a>
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                    <Star className="h-3 w-3" />
                    {r.stars}
                  </span>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-zinc-600">
                  {r.desc}
                </p>
                <p className="mt-auto pt-3 text-[13px] leading-relaxed text-zinc-800">
                  <span className="font-semibold">对你的价值：</span>
                  {r.why}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section kicker="对照" title="和 12 周计划怎么配合">
        <Table
          head={["学习阶段", "推荐配合的资源"]}
          rows={[
            ["第 1~2 周 · 建立坐标系", "本站概念篇/行业篇 + generative-ai-for-beginners 前几课 + LLMSurvey 目录"],
            ["第 3~5 周 · 核心技能上手", "llm-cookbook 的 Prompt/RAG 子课 + self-llm（想动手微调时）"],
            ["第 6~8 周 · Agent 与自动化", "hugging-multi-agent + Dify 官方文档 + ai-agent-team 案例拆解"],
            ["第 9~10 周 · AI Coding 深度实践", "Awesome-Vibecoding 资源 + openai-cookbook 查工程细节"],
            ["第 11~12 周 · 求职冲刺", "awesome-ai-product-manager / Awesome-PM-Prompts 补面试弹药"],
          ]}
        />
        <div className="mt-4">
          <Note>
            <p>
              资源会过时，方法不会：挑资源永远先看「更新频率、作者背景、社区活跃度」三件事，再看星标数。本清单在 2026 年 9 月核验过一轮，之后请自行用同样标准汰换。
            </p>
          </Note>
        </div>
      </Section>
    </Layout>
  );
}
