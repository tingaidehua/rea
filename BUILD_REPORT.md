# REA 复刻工场 · 构建报告（v2 目录导航站）

> 构建日期：2026-10-12 ｜ 纯静态站（HTML + CSS + JS，无框架、无构建步骤）
> v2 在 v1 单页基础上升级为**目录导航站**：48 目标 × 8 分类，搜索 + 分类 + 状态三维过滤。

## 文件清单

| 文件 | 说明 | 大小 |
|------|------|------|
| `index.html` | 页面骨架 + SEO 全套（title/meta/OG/JSON-LD/canonical）+ Hero / 理念 / 工具区 / 目录 / 投稿 / 共享机制 / 方法论 / FAQ / 页脚 / 弹窗 | ~26KB |
| `styles.css` | v1 暗色科技风 + v2 目录样式（吸顶搜索栏、分类导航、卡片 v2、quickstart 展开），响应式断点 900px / 640px | ~19.5KB |
| `app.js` | 48 目标数据（全部字段取自 TARGETS.md）、目录渲染（分组/扁平两种形态）、搜索/分类/状态过滤、认领弹窗、SOP 渲染、移动端导航 | ~27KB |
| `sitemap.xml` | 单页 sitemap（域名为计划中的 tingai.is-a.dev，待替换） | <1KB |
| `robots.txt` | Allow 全开 + Sitemap 指向 | <1KB |
| `TARGETS.md` | 48 目标调研底稿（数据源，不直接发布也无妨，随仓库走即可） | ~17KB |
| `BUILD_REPORT.md` | 本文件 | — |

总计约 73KB（页面三件套），零依赖，打开即用。

## v2 改了哪些文件

- **`index.html`（重写核心区）**
  - SEO 全套：中文 title / meta description / keywords、Open Graph、twitter card、canonical、JSON-LD（WebSite + ItemList，25 个已核实开源复现逐条列出 name+url）。
  - Hero 数字更新为 48 / 25 / S0–S7 / 0；CTA 改为"浏览 48 个复刻目标"与"提交新目标"。
  - **重要纠正**：ArtCraft 工具卡中文案 "PrintCraft（Acrobat）" → **"PdfCraft（Acrobat）"**（以 TARGETS.md 核实结论为准，printcraft 地址已重定向至 pdfcraft，不存在）。
  - Registry 改为目录形态：吸顶搜索栏（软件名/原厂商/分类本地过滤）+ 状态筛选（全部/已有开源复现/进行中/待认领）+ 8 分类导航 chips（含计数）+ 分组/扁平两种渲染。
  - 新增 `#submit` 社区投稿板块："提交新目标"按钮（GitHub issue 模板占位，明确写"待创建"）+ "找人合作"说明段落。
  - FAQ 新增一条："待认领"和"待核实"是什么意思？（待核实=社区推测但未核实，**不给链接**）。
  - 页脚新增：**权利人联系下架通道**（7 个工作日内响应、争议内容先行下架）+ "本站内容不构成法律意见"声明 + "不收录破解/盗版"承诺。
  - 移除 v1 独立的 `#quickstart` 板块（改为每张卡片一键展开）。
- **`app.js`（重写数据层与渲染）**
  - `TARGETS` 48 条完整数据：软件名 / 原厂商 / 分类 / 状态三态 / 难度 / 热度依据 / 备注；`repos` 只放 TARGETS.md 已核实的 25 个真链接，"待认领"/"待核实"一律空数组、**零编造链接**（已用脚本验证待认领卡片零外链）。
  - 状态配色按 v2 定义：已有开源复现=绿 / 进行中=黄 / 待认领=灰。
  - 每张卡片：一键《10分钟上手》`<details>` 展开（含 `case-00X` 仓库命名）、「认领 / 合作」按钮 → 按状态分三种弹窗（待认领：issue 占位+明确"仓库待创建"；进行中：仓库待公开；已有复现：直达上游仓库+issues）。
  - 搜索支持 `?q=` 参数预取（配合 JSON-LD 的 SearchAction）。
- **`styles.css`**：状态三态配色重映射；新增目录工具栏/分类导航/卡片 v2/难度标签配色/quickstart 展开样式；移动端分类导航横滑。
- **新增 `sitemap.xml` / `robots.txt`**：域名暂用计划中的 `tingai.is-a.dev`，最终域名确定后需全站替换（index.html 的 canonical/OG/JSON-LD、本文件、robots.txt 共 5 处）。

## 目标卡片总数

**48 张**（= TARGETS.md 48 个目标全量）：
- 影音剪辑 8 / 设计创意 10 / 办公效率 8 / 社交通讯 4 / 开发工具 3 / 系统工具 4 / 游戏娱乐 5 / 其他 6
- 状态：已有开源复现 23（绿）/ 进行中 1（美图秀秀 Case 001，黄）/ 待认领 24（灰）
- 开源复现直链：25 个已核实仓库链接（全部来自 TARGETS.md 第三节，逐个打开确认 200），"待核实"推测（darktable/MarkText/Jitsi/DBeaver/Flameshot/Luanti/Heroic/Immich/Bitwarden/Nextcloud）只在卡片备注文字提及，**未给任何链接**。

## SEO 文件清单

| 文件/位置 | 内容 |
|---|---|
| `index.html` head | 中文 title、meta description、meta keywords、canonical、OG 全套（type/site_name/title/description/url/locale）、twitter card |
| `index.html` head | JSON-LD `@graph`：WebSite（含 SearchAction `?q=`）+ ItemList（25 个已核实开源复现，position/name/url） |
| `sitemap.xml` | 根 URL，weekly，priority 1.0 |
| `robots.txt` | Allow: / + Sitemap 指向 |
| 语义化 | header/nav/main/section/article/footer，h1 唯一，分类 h3 + 卡片 article>h3 |

## 如何本地预览

```bash
cd ~/workspace/rea-site
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
# 试试搜索：http://localhost:8000/?q=adobe
```

## 如何部署到 GitHub Pages（三步）

```bash
# 1. 建公开仓库并推送（仓库名建议 rea-site 或自定义域名对应名）
cd ~/workspace/rea-site
git init && git add . && git commit -m "REA 复刻工场 v2 目录导航站"
gh repo create <org或用户名>/rea-site --public --source=. --push

# 2. 在仓库 Settings → Pages → Build and deployment → Source 选 "Deploy from a branch"
#    Branch 选 main / (root)，保存

# 3. 等 1–2 分钟，访问 https://<用户名>.github.io/rea-site/
#    （自定义域名确定后，在 Pages 设置 Custom domain 并全站替换 tingai.is-a.dev）
```

Cloudflare Pages 同理：把本目录拖进 Pages 项目或连 GitHub 仓库，构建命令留空、输出目录填 `/` 即可。

## 待用户决策（上线前）

- GitHub org 名（页脚/认领弹窗/投稿区三处"占位"待替换）
- 是否启用真实 issue 认领（`claimModal` 待认领分支的占位按钮）
- 最终域名（当前全站暂用 `tingai.is-a.dev`，共 5 处待替换）
- 总纲 SOP 全文 PDF 生成后替换下载按钮
- 美图秀秀 Case 001 的真实公开仓库链接（目前为"仓库待公开"）

## 诚实说明

- ArtCraft 完成度按"早期 alpha"表述，未夸大为"完美复刻"。
- REA / ArtCraft 的 stars 数据为任务给定的已核实数字（2026-10-12），未重新抓取；上线前如需最新数可再跑一轮核验。
- 目录中 25 个仓库链接全部来自 TARGETS.md 第三节"仓库核实记录"（本轮 browser.open 逐个确认 200）；"待核实"项未给链接。
- FAQ 法律部分已标注"不构成法律意见"，各 Case 上线前需正式法务 review（与总纲 SOP 一致）。
