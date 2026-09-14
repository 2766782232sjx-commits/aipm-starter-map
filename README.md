<div align="center">

# 🗺️ AIPM 入门地图

### 零基础进阶 AI 产品经理的第一站

**概念扫盲 · 方法实操 · 行业坐标 · 求职冲刺 · 12 周学习路径**

*不需要先学会训练模型，先建立一套完整的认知地图。*

[![在线访问](https://img.shields.io/badge/在线访问-GitHub%20Pages-brightgreen)](https://2766782232sjx-commits.github.io/aipm-starter-map/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](LICENSE)
![内容时效](https://img.shields.io/badge/内容时效-2026--09-orange)
![Pages Build](https://github.com/2766782232sjx-commits/aipm-starter-map/actions/workflows/deploy.yml/badge.svg)

</div>

---

## 🎯 这个仓库能帮你做什么

> 让一个没有 AI 背景的同学，沿着站内路线从「听懂黑话」走到「带着作品集去面试」，建立 AI 产品经理的完整认知框架。

- 🌱 **零基础入门？** 从 [概念篇](https://2766782232sjx-commits.github.io/aipm-starter-map/#/concepts) 开始——每个概念配一个可以复述给别人听的比喻
- 🚀 **准备秋招 / 面试？** 直接进 [求职篇](https://2766782232sjx-commits.github.io/aipm-starter-map/#/career)——JD 解读、作品集打法、高频面试题答题骨架
- 🛠️ **想动手做项目？** 看 [实操室](https://2766782232sjx-commits.github.io/aipm-starter-map/#/practice)——从零做一个知识库每日自动质检机器人 MVP，直接成为作品集素材
- 📅 **想要完整计划？** 跟 [12 周学习路径](https://2766782232sjx-commits.github.io/aipm-starter-map/#/roadmap)——每周有主题、有产出、有自测标准

![站点首页](assets/screenshot-home.png)

## 📖 内容导航

| 板块 | 内容 | 适合谁 |
|------|------|--------|
| 🧠 [概念篇](https://2766782232sjx-commits.github.io/aipm-starter-map/#/concepts) | Transformer / RAG / Agent / MCP / 评测 / Prompt 注入防御，全部讲成人话 | 补齐技术认知 |
| 🔬 [方法篇](https://2766782232sjx-commits.github.io/aipm-starter-map/#/methods) | Prompt 工程、知识库搭建与评测、召回率、拒答边界、引用溯源 | 上手实际工作 |
| 🌐 [行业篇](https://2766782232sjx-commits.github.io/aipm-starter-map/#/industry) | 模型公司格局、七家企业实践水平、前沿攻坚难题 | 建立行业坐标 |
| 💼 [求职篇](https://2766782232sjx-commits.github.io/aipm-starter-map/#/career) | JD 解读、作品集策略、「你怎么评价各家 AI」等歧义题拆解 | 求职冲刺 |
| 📅 [学习路径](https://2766782232sjx-commits.github.io/aipm-starter-map/#/roadmap) | 12 周四阶段计划，含每周任务、交付物与自测标准 | 所有新人的第一站 |
| 🧪 [实操室](https://2766782232sjx-commits.github.io/aipm-starter-map/#/practice) | 完整的自动化场景 MVP：知识库每日质检机器人 | 积累项目经历 |
| 📚 [资源导航](https://2766782232sjx-commits.github.io/aipm-starter-map/#/resources) | 精选书、课、社区与工具 | 持续学习 |

![概念篇内页](assets/screenshot-concepts.png)

## ✨ 内容特色

- **说人话**：每个概念配比喻和图解——RAG 是「给 AI 配资料柜」、Prompt 注入是「AI 时代的 SQL 注入」
- **PM 视角**：不堆公式，只讲「能做什么、边界在哪、成本如何、产品上怎么用」，以及「学到哪里算够」的深度刹车线
- **面试导向**：概念页附 3 分钟自测表，方法页附排查框架，求职页附歧义题 90 秒答题骨架
- **可动手**：实操室给出从语料、评测脚本到报告的完整 MVP 流程，配套开源的 [RAG 评测实验仓库](https://github.com/2766782232sjx-commits/rag-eval-lab)（私有模板，可 fork 思路）
- **持续更新**：行业篇数据与前沿动态核实至 2026 年 9 月

## 🗺️ 建议使用路径

```
学习路径页（10 分钟，了解全貌）
   ↓
概念篇（1~2 周，建立技术认知，配自测表检验）
   ↓
方法篇 + 实操室（2~4 周，边学边做 MVP）
   ↓
行业篇（持续，培养行业 sense）
   ↓
求职篇（面试前 2~4 周集中冲刺）
```

## 🛠️ 本地开发

技术栈：React 18 + Vite 5 + Tailwind CSS 3，纯前端静态站点，无后端依赖。

```bash
npm install
npm run dev          # 开发预览，默认 http://localhost:5173
npm run build        # 构建产物输出到 dist/
npm run build:single # 构建单文件离线版到 dist-single/（双击即可打开）
```

仓库已内置 GitHub Actions 工作流，push 到 `main` 后自动部署到 GitHub Pages。

## 🤝 参与贡献

- 🐛 发现内容错误或过时的行业信息 → 提 Issue
- ✍️ 有好的概念比喻、面试题拆解 → 欢迎 PR
- ⭐ 如果这个仓库帮到了你，点个 Star，让更多转行路上的同学看到它

## 📄 版权说明

本站内容采用 [CC BY-NC-SA 4.0](LICENSE) 协议：允许署名转载与二次创作，禁止商用。代码部分可自由参考。
