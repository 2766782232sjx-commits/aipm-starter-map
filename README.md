# AIPM 入门地图

为想从零基础进阶 AI 产品经理的同学设计的知识站。

内容包含：概念篇（RAG / Agent / 评测等核心概念）、方法篇（Prompt 工程与知识库搭建）、行业篇（模型公司与产品格局）、求职篇（JD 解读与作品集）、12 周学习路径、GitHub 资源导航。

## 技术栈

React 18 + Vite 5 + Tailwind CSS 3 + react-router-dom（HashRouter）。纯前端静态站点，无后端依赖。

## 本地开发

```bash
npm install
npm run dev      # 开发预览，默认 http://localhost:5173
npm run build    # 构建产物输出到 dist/
npm run preview  # 本地预览构建产物
```

## 部署到 GitHub Pages

仓库已内置 GitHub Actions 工作流（`.github/workflows/deploy.yml`）。只需在 GitHub 仓库设置中开启：

**Settings → Pages → Source 选择「GitHub Actions」**

之后每次 push 到 `main` 分支会自动构建并发布。

> 站点使用 HashRouter（`#/concepts` 形式路由），无需为子路径做额外配置。

## 目录结构

```
src/
├── main.jsx            # 入口
├── App.jsx             # 路由（HashRouter）
├── nav-items.jsx       # 路由注册表
├── index.css           # Tailwind 与主题变量
├── components/site.jsx # 通用布局与排版组件
└── pages/              # 七个页面：Index/Concepts/Methods/Industry/Career/Roadmap/Resources
```
