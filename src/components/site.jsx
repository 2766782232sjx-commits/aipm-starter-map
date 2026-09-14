import { Link, NavLink } from "react-router-dom";
import {
  Compass,
  BookOpenText,
  Wrench,
  TrendingUp,
  BriefcaseBusiness,
  Route,
  LibraryBig,
} from "lucide-react";

export const NAV = [
  { to: "/", label: "首页", icon: Compass },
  { to: "/concepts", label: "概念篇", icon: BookOpenText },
  { to: "/methods", label: "方法篇", icon: Wrench },
  { to: "/industry", label: "行业篇", icon: TrendingUp },
  { to: "/career", label: "求职篇", icon: BriefcaseBusiness },
  { to: "/roadmap", label: "学习路径", icon: Route },
  { to: "/resources", label: "资源导航", icon: LibraryBig },
];

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col px-4">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
                <Compass className="h-5 w-5" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                AIPM 入门地图
              </span>
              <span className="hidden rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500 sm:inline">
                零基础进阶 AI 产品经理
              </span>
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "bg-zinc-900 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
          <nav className="flex gap-1 overflow-x-auto pb-2 md:hidden">
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-lg px-2.5 py-1 text-[13px] transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
          <p className="font-medium text-zinc-700">AIPM 入门地图</p>
          <p className="mt-1 leading-relaxed">
            为零基础进阶 AI 产品经理的同学设计的知识站。内容整理自公开的招聘市场信号与主流技术资料，供学习参考，不构成任何求职或投资建议。
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, desc }) {
  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-zinc-600">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

export function Section({ kicker, title, children }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          {kicker}
        </p>
      )}
      <h2 className="mt-1.5 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function Card({ title, icon: Icon, children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-white p-5 shadow-sm ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2.5">
          {Icon && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon className="h-4 w-4" />
            </span>
          )}
          <h3 className="font-semibold leading-snug">{title}</h3>
        </div>
      )}
      <div className={`text-[14px] leading-relaxed text-zinc-600 ${title ? "mt-3" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export function TermCard({ term, en, tag, children }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-lg font-bold">{term}</span>
        {en && <span className="text-xs text-zinc-400">{en}</span>}
        {tag && (
          <span className="ml-auto rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600">
            {tag}
          </span>
        )}
      </div>
      <div className="mt-3 text-[14px] leading-relaxed text-zinc-600">
        {children}
      </div>
    </div>
  );
}

export function Steps({ items }) {
  return (
    <ol className="space-y-0">
      {items.map((item, i) => (
        <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
              {i + 1}
            </span>
            {i < items.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-zinc-200" />
            )}
          </div>
          <div className="pb-1">
            <p className="font-semibold leading-snug">{item.title}</p>
            <p className="mt-1 text-[14px] leading-relaxed text-zinc-600">
              {item.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Table({ head, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
      <table className="w-full min-w-[560px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50">
            {head.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold text-zinc-800">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-zinc-100 last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 leading-relaxed ${
                    j === 0 ? "font-medium text-zinc-800" : "text-zinc-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Note({ children }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[14px] leading-relaxed text-amber-900">
      <span className="mt-0.5 shrink-0 font-semibold">要点</span>
      <div>{children}</div>
    </div>
  );
}

export function Grid({ cols = 2, children }) {
  return (
    <div
      className={`grid gap-4 ${
        cols === 2
          ? "md:grid-cols-2"
          : cols === 3
          ? "md:grid-cols-3"
          : "md:grid-cols-4"
      }`}
    >
      {children}
    </div>
  );
}
