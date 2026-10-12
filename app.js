/* REA 复刻工场 v2 · 目录导航站（纯原生 JS，无框架）
   数据来源：TARGETS.md（2026-10-12 调研，26 个仓库链接逐个打开核实 200）
   红线：repos 里只放已核实的真链接；"待认领"/"待核实"一律不给链接，绝不编造。 */

/* ---------- 8 大分类 ---------- */
const CATS = [
  { key: "av",     name: "影音剪辑", icon: "🎬", desc: "剪辑、调色、编曲、直播——时间线与编解码是硬骨头。" },
  { key: "design", name: "设计创意", icon: "🎨", desc: "从像素到矢量到排版，ArtCraft 在此证明了 AI clean-room 路线的可行性。" },
  { key: "office", name: "办公效率", icon: "📊", desc: "文档、笔记、会议、绘图——格式兼容是无底洞，协同是深水区。" },
  { key: "social", name: "社交通讯", icon: "💬", desc: "协议封闭、网络效应强，建议拆子目标，从小处开刀。" },
  { key: "dev",    name: "开发工具", icon: "🛠️", desc: "数据库、IDE、API 调试——开发者为自己造工具，付费意愿最强的人群。" },
  { key: "sys",    name: "系统工具", icon: "⚙️", desc: "远程桌面、截图、搜索、输入法——小而美的单点突破，新手友好。" },
  { key: "game",   name: "游戏娱乐", icon: "🎮", desc: "clean-room 教科书案例最多的分类：OpenTTD / OpenRA / OpenMW 都是长跑范本。" },
  { key: "other",  name: "其他",     icon: "📦", desc: "云存储、密码管理、短视频——内容生态不可复刻，但客户端可以。" },
];
const CAT_NAME = Object.fromEntries(CATS.map((c) => [c.key, c.name]));

/* 状态：shipped=已有开源复现(绿) / active=进行中(黄) / wanted=待认领(灰) */
const STATUS_LABEL = { shipped: "已有开源复现", active: "进行中", wanted: "待认领" };
const DIFF_CLASS = { "低": "diff-low", "中": "diff-mid", "高": "diff-high", "极高": "diff-extreme" };

/* ---------- 48 个复刻目标 ----------
   repos: 已核实仓库 [{url}]，label 由 URL 自动派生；空数组 = 待认领（不给链接）
   note: 补充说明（待核实推测 / 范围限定），不含任何链接 */
const TARGETS = [
  /* ---- 影音剪辑 ---- */
  { name: "剪映 / CapCut", vendor: "字节跳动", cat: "av", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/OpenCut-app/OpenCut" }],
    heat: "OpenCut 一年获 93.7k stars，B站/YouTube 大量\"剪映平替\"测评视频。" },
  { name: "Adobe Premiere Pro", vendor: "Adobe", cat: "av", status: "shipped", diff: "极高",
    repos: [{ url: "https://github.com/storytold/filmcraft" }],
    heat: "ArtCraft filmcraft 发布 12 天获 10.4k stars，TechSpot/Ars Technica 全网报道。" },
  { name: "Adobe After Effects", vendor: "Adobe", cat: "av", status: "shipped", diff: "极高",
    repos: [{ url: "https://github.com/storytold/effectcraft" }],
    heat: "ArtCraft effectcraft 发布 12 天获 5.3k stars。" },
  { name: "DaVinci Resolve", vendor: "Blackmagic", cat: "av", status: "wanted", diff: "极高",
    repos: [],
    heat: "专业调色是\"PR 替代\"讨论中的长期痛点，开源侧尚无对等调色方案。" },
  { name: "FL Studio", vendor: "Image-Line", cat: "av", status: "wanted", diff: "高",
    repos: [],
    heat: "编曲圈长期求免费/开源 DAW，开源侧成熟度不足。" },
  { name: "网易云音乐 / QQ 音乐", vendor: "网易 / 腾讯", cat: "av", status: "wanted", diff: "中",
    repos: [],
    heat: "会员与版权限制争议不断；客户端功能语义可复刻，版权曲库不可复刻。" },
  { name: "Spotify", vendor: "Spotify", cat: "av", status: "wanted", diff: "中",
    repos: [],
    heat: "r/selfhosted 常年求去广告/反追踪方案；功能语义可复刻，内容生态不可复刻。" },
  { name: "XSplit / Streamlabs", vendor: "Splitmedia / Logitech", cat: "av", status: "shipped", diff: "低",
    repos: [{ url: "https://github.com/obsproject/obs-studio" }],
    heat: "obs-studio 77.3k stars，直播录屏事实标准。",
    note: "复刻目标为商业直播软件的付费功能语义。" },

  /* ---- 设计创意 ---- */
  { name: "Adobe Photoshop", vendor: "Adobe", cat: "design", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/storytold/photocraft" }, { url: "https://github.com/GNOME/gimp" }],
    heat: "ArtCraft photocraft 发布 12 天获 48.7k stars；GIMP 为长期存在的开源实现。" },
  { name: "Adobe Illustrator", vendor: "Adobe", cat: "design", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/storytold/vectorcraft" }],
    heat: "ArtCraft vectorcraft 发布 12 天获 7.2k stars。" },
  { name: "Adobe Lightroom", vendor: "Adobe", cat: "design", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/storytold/lightcraft" }],
    heat: "ArtCraft lightcraft 发布 12 天获 10.4k stars。",
    note: "社区推测 darktable 为对应复现，待核实（未给链接）。" },
  { name: "Adobe InDesign", vendor: "Adobe", cat: "design", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/storytold/designcraft" }],
    heat: "ArtCraft designcraft 发布 12 天获 3.1k stars；文字排版引擎是核心。" },
  { name: "Adobe Acrobat", vendor: "Adobe", cat: "design", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/storytold/pdfcraft" }],
    heat: "ArtCraft pdfcraft 发布 12 天获 9.9k stars；PDF 标准公开，实现以工程量为主。" },
  { name: "Figma", vendor: "Figma", cat: "design", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/penpot/penpot" }],
    heat: "Adobe 收购案后 Penpot 单日注册暴涨 5600%；60.9k stars，MPL-2.0。" },
  { name: "AutoCAD", vendor: "Autodesk", cat: "design", status: "shipped", diff: "极高",
    repos: [{ url: "https://github.com/FreeCAD/FreeCAD" }],
    heat: "正版授权昂贵，工程圈常年求平替；FreeCAD 34.2k stars。" },
  { name: "3ds Max / Maya", vendor: "Autodesk", cat: "design", status: "shipped", diff: "极高",
    repos: [{ url: "https://github.com/blender/blender" }],
    heat: "Blender 基金会模式已证明开源 3D 可持续。" },
  { name: "Krita", vendor: "KDE", cat: "design", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/KDE/krita" }],
    heat: "数字绘画圈事实标准之一，10.5k stars；笔刷引擎是核心。",
    note: "对标 Photoshop / Procreate 的绘画侧。" },
  { name: "美图秀秀", vendor: "美图公司", cat: "design", status: "active", diff: "中",
    repos: [],
    heat: "本站 Case 001，发起方自研中；小红书/抖音美颜修图需求巨大。",
    note: "仓库待公开，欢迎关注与参与测试。" },

  /* ---- 办公效率 ---- */
  { name: "Microsoft Office", vendor: "微软", cat: "office", status: "shipped", diff: "极高",
    repos: [{ url: "https://github.com/LibreOffice/core" }],
    heat: "V2EX 求替代帖 70+ 回复；格式兼容（OOXML）是无底洞。" },
  { name: "WPS Office", vendor: "金山", cat: "office", status: "wanted", diff: "高",
    repos: [],
    heat: "广告/弹窗争议长期存在；办公套件层可被 LibreOffice 覆盖，WPS 特有体验待复刻。" },
  { name: "Notion", vendor: "Notion", cat: "office", status: "shipped", diff: "高",
    repos: [{ url: "https://github.com/AppFlowy-IO/AppFlowy" }],
    heat: "AppFlowy 77.2k stars，自称\"The Open Source Alternative To Notion\"。" },
  { name: "印象笔记 / Evernote", vendor: "印象笔记 / Evernote", cat: "office", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/laurent22/joplin" }],
    heat: "Joplin 56.7k stars，支持 Evernote 笔记导入；V2EX 弃坑帖集中讨论迁移。" },
  { name: "XMind", vendor: "XMind", cat: "office", status: "wanted", diff: "低",
    repos: [],
    heat: "V2EX 求平替帖 2568 次点击；思维导图功能语义清晰，新手友好。" },
  { name: "Typora", vendor: "Typora", cat: "office", status: "wanted", diff: "低",
    repos: [],
    heat: "Typora 收费后 V2EX 出现多个求平替帖；新手友好。",
    note: "社区推测 MarkText 为对应复现，待核实（未给链接）。" },
  { name: "腾讯会议 / Zoom", vendor: "腾讯 / Zoom", cat: "office", status: "wanted", diff: "高",
    repos: [],
    heat: "远程会议刚需；开源侧知名度远低于商业产品。",
    note: "社区推测 Jitsi 为对应复现，待核实（未给链接）。" },
  { name: "Visio / ProcessOn", vendor: "微软 / ProcessOn", cat: "office", status: "shipped", diff: "低",
    repos: [{ url: "https://github.com/jgraph/drawio" }],
    heat: "draw.io 8.7k stars，Apache-2.0；图形绘制语义清晰，已被证明可行。" },

  /* ---- 社交通讯 ---- */
  { name: "微信", vendor: "腾讯", cat: "social", status: "wanted", diff: "极高",
    repos: [],
    heat: "V2EX 替代帖 69 条回复；Linux 客户端难用是月经帖。",
    note: "难度极高，建议拆子目标：Linux 客户端体验 → 协议 → 生态；支付/小程序/社交关系链不在复刻范围。" },
  { name: "Discord", vendor: "Discord", cat: "social", status: "wanted", diff: "高",
    repos: [],
    heat: "r/selfhosted 高频求开源 Discord 平替话题。" },
  { name: "WhatsApp", vendor: "Meta", cat: "social", status: "wanted", diff: "高",
    repos: [],
    heat: "V2EX 微信替代帖中有用户抱怨 WhatsApp AI 审核乱封号。" },
  { name: "Telegram", vendor: "Telegram", cat: "social", status: "wanted", diff: "中",
    repos: [],
    heat: "中文社区对其 Bot 生态复刻兴趣长期存在。",
    note: "客户端本身已开源，服务端/生态可复刻。" },

  /* ---- 开发工具 ---- */
  { name: "Navicat", vendor: "PremiumSoft", cat: "dev", status: "wanted", diff: "中",
    repos: [],
    heat: "多篇中文数据库工具选型文章把 DBeaver 社区版列为\"免费跨库性价比之王\"。",
    note: "社区推测 DBeaver 为对应复现，待核实（未给链接）。" },
  { name: "JetBrains 全家桶", vendor: "JetBrains", cat: "dev", status: "wanted", diff: "高",
    repos: [],
    heat: "订阅制与 AI 功能涨价后，开发者社区\"逃离 JetBrains\"讨论增多。" },
  { name: "Postman", vendor: "Postman", cat: "dev", status: "wanted", diff: "中",
    repos: [],
    heat: "Postman 收费策略收紧后，API 调试工具替代讨论升温。" },

  /* ---- 系统工具 ---- */
  { name: "TeamViewer / 向日葵", vendor: "TeamViewer / 贝锐", cat: "sys", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/rustdesk/rustdesk" }],
    heat: "RustDesk 125.5k stars，自称\"alternative to TeamViewer\"；TeamViewer 商用判定误杀是十年老梗。" },
  { name: "Snipaste", vendor: "Snipaste", cat: "sys", status: "wanted", diff: "低",
    repos: [],
    heat: "截图贴图是中文用户高频刚需；Snipaste 免费但闭源，新手友好。",
    note: "社区推测 Flameshot 为对应复现，待核实（未给链接）。" },
  { name: "Everything / Listary", vendor: "voidtools / Listary", cat: "sys", status: "wanted", diff: "低",
    repos: [],
    heat: "极速文件搜索是程序员刚需；NTFS USN 日志索引语义清晰，新手友好。" },
  { name: "搜狗输入法", vendor: "搜狗", cat: "sys", status: "wanted", diff: "高",
    repos: [],
    heat: "输入法隐私争议后，开源输入法方案关注度上升。" },

  /* ---- 游戏娱乐 ---- */
  { name: "Minecraft", vendor: "Mojang / 微软", cat: "game", status: "wanted", diff: "中",
    repos: [],
    heat: "收购后社区分裂；开源体素引擎长期有人维护。",
    note: "社区推测 Luanti（MineTest）为对应复现，待核实（未给链接）。" },
  { name: "Steam", vendor: "Valve", cat: "game", status: "wanted", diff: "高",
    repos: [],
    heat: "30% 抽成常年被开发者吐槽；开源游戏启动器受关注。",
    note: "社区推测 Heroic 为对应复现，待核实（未给链接）。" },
  { name: "Transport Tycoon Deluxe", vendor: "Chris Sawyer", cat: "game", status: "shipped", diff: "低",
    repos: [{ url: "https://github.com/OpenTTD/OpenTTD" }],
    heat: "OpenTTD 是 clean-room 复刻教科书案例，已上架 Steam / GOG / Microsoft Store。" },
  { name: "命令与征服系列", vendor: "EA / Westwood", cat: "game", status: "shipped", diff: "低",
    repos: [{ url: "https://github.com/OpenRA/OpenRA" }],
    heat: "OpenRA 17.5k stars，西木头 RTS 引擎开源重写标杆。" },
  { name: "上古卷轴3：晨风", vendor: "Bethesda", cat: "game", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/OpenMW/openmw" }],
    heat: "引擎重写 + 画质提升，clean-room 长跑范本（2008 年启动至今）。",
    note: "需自备原版游戏数据文件；引擎为 clean-room 重写，资产自备。" },

  /* ---- 其他 ---- */
  { name: "YouTube（桌面/安卓客户端）", vendor: "Google", cat: "other", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/FreeTubeApp/FreeTube" }, { url: "https://github.com/TeamNewPipe/NewPipe" }],
    heat: "广告与追踪争议下，FreeTube 22k / NewPipe 40k stars。",
    note: "桌面端 FreeTube / 安卓端 NewPipe；推荐算法与内容生态不可复刻。" },
  { name: "Plex / Emby", vendor: "Plex / Emby", cat: "other", status: "shipped", diff: "中",
    repos: [{ url: "https://github.com/jellyfin/jellyfin" }],
    heat: "Jellyfin 58k stars，r/selfhosted 装机必备；Plex 收费功能增多后迁移潮。" },
  { name: "Google Photos", vendor: "Google", cat: "other", status: "wanted", diff: "中",
    repos: [],
    heat: "Google Photos 终止无限免费存储后，自托管照片方案需求上升。",
    note: "社区推测 Immich 为对应复现，待核实（未给链接）。" },
  { name: "1Password / LastPass", vendor: "1Password / LastPass", cat: "other", status: "wanted", diff: "中",
    repos: [],
    heat: "LastPass 泄密事件后密码管理器迁移潮。",
    note: "社区推测 Bitwarden 为对应复现，待核实（未给链接）。" },
  { name: "百度网盘 / Google Drive / Dropbox", vendor: "百度 / Google / Dropbox", cat: "other", status: "wanted", diff: "中",
    repos: [],
    heat: "百度网盘限速是中文互联网十年老梗；自托管网盘是标准答案。",
    note: "社区推测 Nextcloud 为对应复现，待核实（未给链接）。" },
  { name: "抖音 / TikTok", vendor: "字节跳动", cat: "other", status: "wanted", diff: "极高",
    repos: [],
    heat: "短视频推荐算法是全球开发者最想\"看懂\"的黑盒之一。",
    note: "推荐算法 + 内容生态不可复刻；建议先做\"功能语义地图\"再分模块认领。" },
];

/* ---------- SOP 八阶段摘要 ---------- */
const SOP = [
  { id: "S0", name: "立项 intake", desc: "把「复刻 XX」变成可执行的 Case：建仓库骨架、AGENTS.md、parity.md（功能全标 missing）。" },
  { id: "S1", name: "情报收集", desc: "不碰专有代码，搞清功能清单与架构。只记录可观察行为（输入→输出→边界）。" },
  { id: "S2", name: "架构设计", desc: "技术路线一次定死，模块契约冻结；变更走 ADR + 人审批。" },
  { id: "S3", name: "PoC 验证门", desc: "高风险技术点先证伪。通过标准必须是数字（帧率/延迟/体积），不是感觉。" },
  { id: "S4", name: "任务拆解", desc: "parity 清单拆成 agent 可独立执行的任务卡；PRD 五段式，深水区算法人给伪代码。" },
  { id: "S5", name: "并行开发", desc: "按任务卡批量实现，只通过注册表集成；评审 agent 每个模块 Done 前必过。" },
  { id: "S6", name: "验收循环", desc: "截图对比 → issue → 修 → 回归。parity 状态只允许前进，不许用一个数字吹牛。" },
  { id: "S7", name: "发布与复盘", desc: "算法/UI/知识资产沉淀进公共注册表；提 SOP 修订 PR。不沉淀的复刻只是高级外包。" },
];

/* ---------- 目录状态 ---------- */
const state = { q: "", cat: "all", status: "all" };

function repoLabel(url) {
  return url.replace("https://github.com/", "");
}
function caseNo(idx) {
  return "case-" + String(idx + 1).padStart(3, "0");
}
function statusBadge(t) {
  return `<span class="status ${t.status}"><span class="dot"></span>${STATUS_LABEL[t.status]}</span>`;
}
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- 卡片 ---------- */
function cardHTML(t) {
  const idx = TARGETS.indexOf(t);
  const reposBlock = t.repos.length
    ? `<div class="reg-repos"><span class="repos-label">开源复现</span><span class="repo-links">${t.repos
        .map((r) => `<a class="repo-link" href="${r.url}" target="_blank" rel="noopener">${esc(repoLabel(r.url))} ↗</a>`)
        .join("")}</span></div>`
    : `<div class="reg-repos"><span class="repos-label">开源复现</span><span class="wanted-text">待认领</span></div>`;
  return `
  <article class="card target-card">
    <div class="reg-top">
      <h3>${esc(t.name)}</h3>
      ${statusBadge(t)}
    </div>
    <div class="reg-vendor">${esc(t.vendor)}</div>
    <div class="card-tags">
      <span class="tag cat-tag">${CAT_NAME[t.cat]}</span>
      <span class="tag ${DIFF_CLASS[t.diff] || ""}">难度 · ${esc(t.diff)}</span>
    </div>
    <p class="reg-heat">${esc(t.heat)}</p>
    ${reposBlock}
    ${t.note ? `<div class="reg-note">⚠ ${esc(t.note)}</div>` : ""}
    <details class="quickstart">
      <summary><span>⚡ 10 分钟上手</span><span class="qs-toggle">展开 +</span></summary>
      <ol>
        <li>在 GitHub org 下新建公开仓库 <code>${caseNo(idx)}-&lt;英文名&gt;</code>（目录骨架见 SOP）</li>
        <li>写 <code>parity.md</code> 初版：把「${esc(t.name)}」全部一级功能列成清单，初始全标 <code>missing</code></li>
        <li><code>AGENTS.md</code> 第一条写上 clean-room 三红线</li>
        <li>S1 情报收集：真机完整走查，只记录可观察行为（输入→输出→边界）</li>
        <li>拆任务卡 → 冻结技术路线 → 按 SOP S0–S7 开工</li>
      </ol>
    </details>
    <div class="reg-actions">
      <button class="btn btn-small" data-act="claim" data-idx="${idx}">认领 / 合作</button>
    </div>
  </article>`;
}

/* ---------- 过滤与渲染 ---------- */
function filtered() {
  const q = state.q.trim().toLowerCase();
  return TARGETS.filter((t) => {
    if (state.cat !== "all" && t.cat !== state.cat) return false;
    if (state.status !== "all" && t.status !== state.status) return false;
    if (q && !(t.name + " " + t.vendor + " " + CAT_NAME[t.cat]).toLowerCase().includes(q)) return false;
    return true;
  });
}

function renderCatNav() {
  const nav = document.getElementById("catNav");
  const countFor = (key) => TARGETS.filter((t) => t.cat === key).length;
  nav.innerHTML =
    `<button class="cat-chip${state.cat === "all" ? " active" : ""}" data-cat="all"><span class="cat-chip-icon">🗂</span>全部<span class="cat-chip-count">${TARGETS.length}</span></button>` +
    CATS.map(
      (c) => `<button class="cat-chip${state.cat === c.key ? " active" : ""}" data-cat="${c.key}"><span class="cat-chip-icon">${c.icon}</span>${c.name}<span class="cat-chip-count">${countFor(c.key)}</span></button>`
    ).join("");
}

function render() {
  const items = filtered();
  const box = document.getElementById("dirContent");
  const grouped = state.cat === "all" && state.status === "all" && !state.q.trim();
  document.getElementById("dirCount").innerHTML =
    `共 <strong>${TARGETS.length}</strong> 个目标 · 当前显示 <strong>${items.length}</strong> 个` +
    (state.q.trim() ? ` · 搜索「${esc(state.q.trim())}」` : "");
  if (!items.length) {
    box.innerHTML = `<div class="no-result"><div class="no-result-icon">🔍</div><p>没有匹配的目标。换个关键词试试，或<a href="#submit">提交一个新目标</a>。</p></div>`;
    return;
  }
  if (grouped) {
    box.innerHTML = CATS.map((c) => {
      const list = items.filter((t) => t.cat === c.key);
      if (!list.length) return "";
      return `<div class="cat-section" id="cat-${c.key}">
        <div class="cat-head">
          <h3><span class="cat-icon">${c.icon}</span>${c.name}<span class="cat-count">${list.length}</span></h3>
          <p>${c.desc}</p>
        </div>
        <div class="cards-3">${list.map(cardHTML).join("")}</div>
      </div>`;
    }).join("");
  } else {
    box.innerHTML = `<div class="cards-3">${items.map(cardHTML).join("")}</div>`;
  }
}

function setState(patch, opts = {}) {
  Object.assign(state, patch);
  renderCatNav();
  render();
  if (opts.scrollToDir) {
    document.getElementById("dirToolbar").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const url = new URL(location.href);
  if (state.q.trim()) url.searchParams.set("q", state.q.trim());
  else url.searchParams.delete("q");
  history.replaceState(null, "", url);
}

/* ---------- 渲染 SOP ---------- */
function renderSop() {
  document.getElementById("sopGrid").innerHTML = SOP.map(
    (s) => `
    <div class="sop-card reveal">
      <div class="sop-id">${s.id}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    </div>`
  ).join("");
}

/* ---------- 弹窗：认领 / 合作 ---------- */
const overlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");

function openModal(html) {
  modalContent.innerHTML = html;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function claimModal(t) {
  const idx = TARGETS.indexOf(t);
  let body = "";
  if (t.status === "shipped") {
    const links = t.repos
      .map((r) => `<a class="btn btn-small" href="${r.url}" target="_blank" rel="noopener">${esc(repoLabel(r.url))} ↗</a>`)
      .join("");
    const issues = t.repos.length
      ? `<a class="btn btn-ghost btn-small" href="${t.repos[0].url}/issues" target="_blank" rel="noopener">去上游提 issue / PR ↗</a>`
      : "";
    body = `
      <h3>合作：${esc(t.name)}</h3>
      <div class="modal-vendor">${esc(t.vendor)} · ${STATUS_LABEL[t.status]}</div>
      <p style="color:var(--muted);font-size:14.5px;margin:14px 0">
        该目标已有经核实的开源功能性复现。最有效的参与方式是<strong style="color:var(--text)">直接去上游仓库</strong>：
        提 issue、修 bug、补 parity 测试、写文档——都是很好的第一贡献。
      </p>
      <div class="modal-actions">${links}${issues}</div>`;
  } else if (t.status === "active") {
    body = `
      <h3>合作：${esc(t.name)}</h3>
      <div class="modal-vendor">${esc(t.vendor)} · ${STATUS_LABEL[t.status]}</div>
      <p style="color:var(--muted);font-size:14.5px;margin:14px 0">
        本站 Case 001，发起方自研中，<strong style="color:var(--text)">仓库待公开</strong>。
        想合作：仓库公开后可直接提 PR 参与；等不及的话，先认领其他"待认领"目标练手。
      </p>
      <div class="modal-actions">
        <span class="btn btn-ghost btn-small" style="cursor:not-allowed;opacity:.55">仓库待公开</span>
        <button class="btn btn-small" onclick="closeModal()">知道了</button>
      </div>`;
  } else {
    body = `
      <h3>认领：${esc(t.name)}</h3>
      <div class="modal-vendor">${esc(t.vendor)} · ${STATUS_LABEL[t.status]}</div>
      <p style="color:var(--muted);font-size:14.5px;margin:14px 0">
        认领通道是 GitHub issue（占位：org 建好后启用）。认领即承诺：按 clean-room 三红线开工，
        parity.md 定期更新，进度对所有人可见。
      </p>
      <p class="dim" style="margin-bottom:6px">仓库待创建 —— 认领后在 GitHub org 下新建 <code>${caseNo(idx)}-&lt;英文名&gt;</code></p>
      <div class="modal-actions">
        <span class="btn btn-primary btn-small" style="cursor:not-allowed;opacity:.55" title="占位：GitHub org 待创建">去认领（issue 占位 · 仓库待创建）</span>
        <button class="btn btn-ghost btn-small" onclick="closeModal()">再想想</button>
      </div>`;
  }
  openModal(body);
}

/* ---------- 事件 ---------- */
document.getElementById("dirContent").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const t = TARGETS[+btn.dataset.idx];
  if (btn.dataset.act === "claim") claimModal(t);
});

document.getElementById("statusFilter").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll("#statusFilter .filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  setState({ status: btn.dataset.status });
});

document.getElementById("catNav").addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-chip");
  if (!btn) return;
  const cat = btn.dataset.cat;
  setState({ cat: state.cat === cat ? "all" : cat }, { scrollToDir: true });
});

const searchInput = document.getElementById("searchInput");
let searchTimer = null;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => setState({ q: searchInput.value }), 120);
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    setState({ q: "" });
  }
});

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* details 展开时把 "+"/"−" 切换 */
document.getElementById("dirContent").addEventListener("toggle", (e) => {
  if (e.target.tagName !== "DETAILS") return;
  const t = e.target.querySelector(".qs-toggle");
  if (t) t.textContent = e.target.open ? "收起 −" : "展开 +";
}, true);

/* 移动端导航 */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.addEventListener("click", (e) => { if (e.target.tagName === "A") mainNav.classList.remove("open"); });

/* 滚动显现 */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }),
  { threshold: 0.12 }
);
function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
}

/* ---------- 启动 ---------- */
(function init() {
  const q = new URLSearchParams(location.search).get("q");
  if (q) {
    state.q = q;
    searchInput.value = q;
  }
  renderCatNav();
  render();
  renderSop();
  observeReveals();
})();
