import { build } from "esbuild";
import { mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const root = path.dirname(fileURLToPath(import.meta.url));
const project = path.resolve(root, "..");
const outDir = path.resolve(project, "..", "rag-eval-lab", "corpus");
mkdirSync(outDir, { recursive: true });

// 1. bundle the render entry
await build({
  entryPoints: [path.join(root, "render-md.jsx")],
  bundle: true,
  format: "esm",
  outfile: path.join(root, "render-md.bundle.mjs"),
  alias: { "@": path.join(project, "src") },
  jsx: "automatic",
  loader: { ".jsx": "jsx", ".js": "jsx" },
  external: ["react", "react-dom", "react-router-dom", "turndown", "turndown-plugin-gfm"],
});

const { PAGES } = await import("./render-md.bundle.mjs");

// 2. render each page to HTML -> markdown
const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });
turndown.use(gfm);

for (const [name, Page] of Object.entries(PAGES)) {
  let html = renderToStaticMarkup(
    React.createElement(MemoryRouter, null, React.createElement(Page))
  );
  // strip layout chrome: header, footer, svg icons
  html = html.replace(/<header[\s\S]*?<\/header>/g, "");
  html = html.replace(/<footer[\s\S]*?<\/footer>/g, "");
  html = html.replace(/<svg[\s\S]*?<\/svg>/g, "");
  // TermCard 元信息结构化：term -> h3，英文 -> 括注，标签 -> [标签]
  html = html.replace(/<span class="text-lg font-bold">([\s\S]*?)<\/span>/g, "<h3>$1</h3>");
  html = html.replace(/<span class="text-xs text-zinc-400">([\s\S]*?)<\/span>/g, "<em>($1)</em>");
  html = html.replace(/<span class="ml-auto rounded-full[^"]*">([\s\S]*?)<\/span>/g, "<strong>[$1]</strong>");
  let md = turndown.turndown(html);
  // tidy: collapse >2 blank lines
  md = md.replace(/\n{3,}/g, "\n\n").trim();
  writeFileSync(path.join(outDir, `${name}.md`), md + "\n");
  console.log(`OK ${name}.md (${md.length} chars)`);
}
