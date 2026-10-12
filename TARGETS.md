# REA 复刻工场 · 复刻目标调研（TARGETS.md）

> ## v3（2026-10-12 改版说明）
> - 目标数：50 个，全部 blockbuster 级（几千几万人想参与的那种）
> - 分类（按软件类型）：影音直播(8) / 设计创意(9) / 办公效率(8) / 社交通讯与协议(7) / 手机 App(6) / 桌面软件(6) / 开发工具(6)
> - 热门区：heat 1-12 按热度排序 → 微信 / 抖音 / 剪映 / YouTube / Photoshop / Chrome / VS Code / Figma / Notion / 小红书 / 哔哩哔哩 / Telegram
> - 状态：done=已有开源复现(19) / active=进行中(1，美图秀秀 Case 001) / open=待认领(30)
> - 图标：simple-icons CDN（17 个 slug 已 curl 验 200），CDN 没有的（剪映/飞书/美图秀秀等）用品牌色字母 tile 兜底
> - 数据层：`targets.js` 独立文件，加目标只改它；以下调研正文为 v2 原始记录，分类口径以 v3 为准
>
> ---
> 调研日期：2026-10-12（v2）
> 方法：公开可核实来源（GitHub 仓库页逐个打开确认、V2EX 帖子、科技媒体、r/selfhosted/HN 讨论、搜索引擎）。
> 红线：只收录 clean-room / 公开重写的开源实现，绝不收录破解、盗版、去广告修改版；**所有仓库链接均为本轮用 browser.open 逐个打开确认 200 且内容对得上**，没核实到的只写"待核实"，不编任何链接。

## 核心理念（本站三红线）

1. 只复刻**功能语义**，绝不用原软件源码；
2. 不照搬商标与视觉资产（图标/贴纸/字体/滤镜预设须原创或合法授权）；
3. 逆向工具只用于**理解功能语义**，不用于提取私有实现。

---

## 一、复刻目标总览（48 个）

### 影音剪辑

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| 剪映 / CapCut | 字节跳动 | 影音剪辑 | 2026 年 GitHub 涌现多个 "CapCut replacement" 项目；OpenCut 一年获 93.7k stars；B站/YouTube 大量"剪映平替"测评视频 | [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut)（93.7k stars，MIT，自称 "The open-source CapCut alternative"） | 高——多轨道时间线+编解码+AI 字幕/抠像，移动端性能优化是硬骨头 |
| Adobe Premiere Pro | Adobe | 影音剪辑 | ArtCraft filmcraft 发布 12 天获 10.4k stars，TechSpot/Ars Technica 全网报道 | [storytold/filmcraft](https://github.com/storytold/filmcraft)（clean-room 重写 Premiere Pro，Rust） | 极高——专业编解码管线、调色引擎、插件生态 |
| Adobe After Effects | Adobe | 影音剪辑 | ArtCraft effectcraft 发布 12 天获 5.3k stars | [storytold/effectcraft](https://github.com/storytold/effectcraft)（clean-room 重写 After Effects，Rust） | 极高——表达式引擎、粒子仿真、插件生态 |
| DaVinci Resolve | Blackmagic | 影音剪辑 | 专业调色是"PR 替代"讨论中的长期痛点，开源侧尚无对等调色方案 | 待认领 | 极高——电影级调色引擎 + GPU 管线 |
| FL Studio | Image-Line | 影音剪辑 | 编曲圈长期求免费/开源 DAW，开源侧成熟度不足 | 待认领 | 高——实时音频引擎、VST 生态 |
| 网易云音乐 / QQ 音乐 | 网易/腾讯 | 影音剪辑 | 会员与版权限制争议不断；GitHub 常年有第三方客户端项目 | 待认领 | 中——客户端功能语义可复刻，版权曲库不可复刻 |
| Spotify | Spotify | 影音剪辑 | r/selfhosted 等社区常年求去广告/反追踪方案 | 待认领 | 中——功能语义可复刻，内容生态不可复刻 |
| XSplit / Streamlabs（商业直播软件） | Splitmedia/Logitech | 影音剪辑 | 商业直播软件付费功能 vs 免费方案，创作者已用脚投票；obs-studio 77.3k stars | [obsproject/obs-studio](https://github.com/obsproject/obs-studio)（GPL-2.0，直播录屏事实标准） | 低——已有成熟开源实现对标 |

### 设计创意

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| Adobe Photoshop | Adobe | 设计创意 | ArtCraft photocraft 发布 12 天获 48.7k stars；TechSpot/OMG! Ubuntu/HN 全网热议 | [storytold/photocraft](https://github.com/storytold/photocraft)（clean-room，Rust）/ [GNOME/gimp](https://github.com/GNOME/gimp)（官方镜像） | 高——图层/笔刷/色彩管理体系庞大（ArtCraft 证明 AI 时代可加速） |
| Adobe Illustrator | Adobe | 设计创意 | ArtCraft vectorcraft 发布 12 天获 7.2k stars | [storytold/vectorcraft](https://github.com/storytold/vectorcraft)（clean-room，Rust） | 高——贝塞尔引擎、文字排版 |
| Adobe Lightroom | Adobe | 设计创意 | ArtCraft lightcraft 发布 12 天获 10.4k stars | [storytold/lightcraft](https://github.com/storytold/lightcraft)（clean-room，Rust）；darktable 待核实 | 高——RAW 解码管线、非破坏性编辑 |
| Adobe InDesign | Adobe | 设计创意 | ArtCraft designcraft 发布 12 天获 3.1k stars | [storytold/designcraft](https://github.com/storytold/designcraft)（clean-room，Rust） | 高——文字排版引擎（Knuth-Plass 等算法） |
| Adobe Acrobat | Adobe | 设计创意 | ArtCraft pdfcraft 发布 12 天获 9.9k stars | [storytold/pdfcraft](https://github.com/storytold/pdfcraft)（clean-room，Rust。注：任务初版写 printcraft，实测该地址已重定向至 pdfcraft，以 pdfcraft 为准） | 中——PDF 标准公开，实现以工程量为主 |
| Figma | Figma | 设计创意 | Adobe 200 亿美元收购案后 Penpot 单日注册暴涨 5600%；2026-07 西班牙政府再投 €1.92M | [penpot/penpot](https://github.com/penpot/penpot)（60.9k stars，MPL-2.0） | 高——实时协同 + WASM 渲染 |
| AutoCAD | Autodesk | 设计创意 | 正版授权昂贵，工程圈常年求平替；FreeCAD 34.2k stars | [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)（LGPL-2.1，参数化 3D 建模） | 极高——几何内核（OpenCASCADE 级别）、DWG 兼容 |
| 3ds Max / Maya | Autodesk | 设计创意 | Blender 基金会模式已证明开源 3D 可持续 | [blender/blender](https://github.com/blender/blender)（官方镜像，GPL-3.0） | 极高——建模/绑定/渲染全管线 |
| Krita（对标 Photoshop/Procreate 绘画侧） | KDE | 设计创意 | 数字绘画圈事实标准之一；10.5k stars | [KDE/krita](https://github.com/KDE/krita)（官方镜像，GPL-3.0） | 中——聚焦绘画，笔刷引擎是核心 |
| 美图秀秀 | 美图公司 | 设计创意 | 本站 Case 001（发起方立项）；小红书/抖音美颜修图需求巨大 | 待认领（本站 Case 001，发起方自研中） | 中——滤镜/美颜算法 + 移动端性能 |

### 办公效率

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| Microsoft Office | 微软 | 办公效率 | V2EX 2025-06《公司无正版 Office 又不想用 WPS 求替代》帖 70+ 回复 | [LibreOffice/core](https://github.com/LibreOffice/core)（TDF 官方镜像） | 极高——格式兼容是无底洞（OOXML 标准数千页） |
| WPS Office | 金山 | 办公效率 | 上述 V2EX 帖中"国外版 WPS 也弹广告"成高赞回复；广告/弹窗争议长期存在 | 待认领（办公套件层可被 LibreOffice 覆盖，WPS 特有体验待复刻） | 高——同 Office，另加中文排版特性 |
| Notion | Notion | 办公效率 | 2026 年多家生产力工具测评把 AppFlowy 列为最佳开源 Notion 平替；AppFlowy 77.2k stars | [AppFlowy-IO/AppFlowy](https://github.com/AppFlowy-IO/AppFlowy)（AGPL-3.0，自称 "The Open Source Alternative To Notion"） | 高——实时协同 + Block 编辑器 + 数据库 |
| 印象笔记 / Evernote | 印象笔记/Evernote | 办公效率 | V2EX t/1142404 印象笔记 9 年老用户弃坑帖，集中讨论迁移 Obsidian/Notion/思源 | [laurent22/joplin](https://github.com/laurent22/joplin)（56.7k stars，支持 Evernote 笔记导入） | 中——笔记同步 + OCR/搜索 |
| XMind | XMind | 办公效率 | V2EX t/1164352《xmind 最好的平替软件是？》2568 次点击 | 待认领 | 低——思维导图功能语义清晰 |
| Typora | Typora | 办公效率 | Typora 收费后 V2EX 出现多个求平替帖 | 待认领（MarkText 待核实） | 低——Markdown 所见即所得渲染 |
| 腾讯会议 / Zoom | 腾讯/Zoom | 办公效率 | 远程会议刚需；开源侧知名度远低于商业产品 | 待认领（Jitsi 待核实） | 高——实时音视频 SFU/MCU + 弱网对抗 |
| Visio / ProcessOn | 微软/ProcessOn | 办公效率 | V2EX 求推荐帖下 ProcessOn/腾讯文档被反复推荐 | [jgraph/drawio](https://github.com/jgraph/drawio)（Apache-2.0，8.7k stars） | 低——图形绘制语义清晰，draw.io 已证明 |

### 社交通讯

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| 微信 | 腾讯 | 社交通讯 | V2EX t/1241886《国内微信有没有替代品？》69 条回复（2026-09）；Linux 客户端难用是 V2EX 月经帖 | 待认领 | 极高——协议封闭、支付/小程序生态、社交关系链不可复刻 |
| Discord | Discord | 社交通讯 | r/selfhosted 高频求开源 Discord 平替话题 | 待认领 | 高——实时语音 + 社区功能 |
| WhatsApp | Meta | 社交通讯 | V2EX 微信替代帖中有用户抱怨 WhatsApp AI 审核乱封号 | 待认领 | 高——端到端加密协议 + 全球网络效应 |
| Telegram | Telegram | 社交通讯 | 客户端本身开源；中文社区对其 Bot 生态复刻兴趣长期存在 | 待认领 | 中——客户端已开源，服务端/生态可复刻 |

### 开发工具

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| Navicat | PremiumSoft | 开发工具 | 2026 年多篇中文数据库工具选型文章把 DBeaver 社区版列为"免费跨库性价比之王"，直接对标 Navicat 付费版 | 待核实（DBeaver 疑似） | 中——数据库协议多但公开，UI 工作量大 |
| JetBrains 全家桶 | JetBrains | 开发工具 | 订阅制与 AI 功能涨价后，开发者社区"逃离 JetBrains"讨论增多 | 待认领 | 高——语言智能（索引/重构）是深水区 |
| Postman | Postman | 开发工具 | Postman 收费策略收紧后，API 调试工具替代讨论升温 | 待认领 | 中——API 调试语义清晰 |

### 系统工具

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| TeamViewer / 向日葵 | TeamViewer/贝锐 | 系统工具 | TeamViewer 商用判定误杀个人用户是十年老梗；2026 年多家媒体评 RustDesk 为最佳开源远程桌面 | [rustdesk/rustdesk](https://github.com/rustdesk/rustdesk)（125.5k stars，AGPL-3.0，自称 "alternative to TeamViewer"） | 中——NAT 穿透 + 远程桌面协议，RustDesk 已证明 |
| Snipaste | Snipaste | 系统工具 | 截图贴图是中文用户高频刚需；Snipaste 免费但闭源，社区希望有开源实现 | 待认领（Flameshot 待核实） | 低——截图贴图语义简单 |
| Everything / Listary | voidtools/Listary | 系统工具 | Everything 免费但闭源；极速文件搜索是程序员刚需 | 待认领 | 低——NTFS USN 日志索引语义清晰 |
| 搜狗输入法 | 搜狗 | 系统工具 | 输入法隐私争议后，开源输入法方案关注度上升 | 待认领 | 高——词库/语言模型 + 输入法框架 |

### 游戏娱乐

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| Minecraft | Mojang/微软 | 游戏娱乐 | 收购后社区分裂；开源体素引擎长期有人维护 | 待核实（Luanti/MineTest 疑似） | 中——体素引擎语义清晰 |
| Steam | Valve | 游戏娱乐 | 30% 抽成常年被开发者吐槽；开源游戏启动器受关注 | 待认领（Heroic 待核实） | 高——商店/社区/反作弊生态 |
| Transport Tycoon Deluxe | Chris Sawyer | 游戏娱乐 | OpenTTD 是 clean-room 复刻教科书案例，已上架 Steam/GOG/Microsoft Store | [OpenTTD/OpenTTD](https://github.com/OpenTTD/OpenTTD)（GPL-2.0，"based upon Transport Tycoon Deluxe"） | 低——OpenTTD 已证明可行 |
| 命令与征服系列 | EA/Westwood | 游戏娱乐 | 西木头 RTS 引擎开源重写标杆 | [OpenRA/OpenRA](https://github.com/OpenRA/OpenRA)（17.5k stars，GPL-3.0，C# 重写引擎） | 低——OpenRA 已证明可行 |
| 上古卷轴3：晨风 | Bethesda | 游戏娱乐 | 引擎重写 + 画质提升，clean-room 长跑范本（2008 年启动至今） | [OpenMW/openmw](https://github.com/OpenMW/openmw)（GPL-3.0，需自备原版游戏数据文件——符合 clean-room：引擎重写，资产自备） | 中——需原版数据文件，引擎为 clean-room 重写 |

### 其他

| 软件名 | 原厂商 | 分类 | 热度依据 | 开源复现 | 难度评估 |
|---|---|---|---|---|---|
| YouTube（桌面/安卓客户端） | Google | 其他 | 广告与追踪争议下，FreeTube 22k stars、NewPipe 40k stars | [FreeTubeApp/FreeTube](https://github.com/FreeTubeApp/FreeTube)（桌面，AGPL-3.0）/ [TeamNewPipe/NewPipe](https://github.com/TeamNewPipe/NewPipe)（安卓，GPL-3.0） | 中——客户端可复刻，推荐算法与内容生态不可复刻 |
| Plex / Emby | Plex/Emby | 其他 | Plex 收费功能增多后，Jellyfin 成 r/selfhosted 装机必备；58k stars | [jellyfin/jellyfin](https://github.com/jellyfin/jellyfin)（GPL-2.0，自称 "alternative to the proprietary Emby and Plex"） | 中——Jellyfin 已证明可行 |
| Google Photos | Google | 其他 | Google Photos 终止无限免费存储后，自托管照片方案需求上升 | 待核实（Immich 疑似） | 中——照片管理同步语义清晰 |
| 1Password / LastPass | 1Password/LastPass | 其他 | LastPass 泄密事件后密码管理器迁移潮 | 待核实（Bitwarden 疑似） | 中——端到端加密同步 |
| 百度网盘 / Google Drive / Dropbox | 百度/Google/Dropbox | 其他 | 百度网盘限速是中文互联网十年老梗；自托管网盘是标准答案 | 待核实（Nextcloud 疑似） | 中——存储同步语义清晰 |
| 抖音 / TikTok | 字节跳动 | 其他 | 短视频推荐算法是全球开发者最想"看懂"的黑盒之一 | 待认领 | 极高——推荐算法 + 内容生态 + 实时音视频 |

---

## 二、配套工具（非复刻目标，但为复刻服务）

| 工具 | 说明 | 仓库 |
|---|---|---|
| REA（Reverse Engineer Anything） | 给 coding agent 的 MCP 逆向工具包：Ghidra/Hopper/IDA 后端、APK 走 JADX；只用于理解功能语义，不提取私有实现。114.4k stars，MIT | [morluto/rea](https://github.com/morluto/rea) |

---

## 三、仓库核实记录（2026-10-12）

本轮用 browser.open 逐个打开确认 200 且 README 内容对得上，共核实 **26** 个：

**ArtCraft 全家桶（7 个，storytold 组织，全部 clean-room + Rust + MIT/Apache-2.0）：**
- storytold/photocraft（Photoshop，48,730 stars）✓
- storytold/vectorcraft（Illustrator，7,230 stars）✓
- storytold/filmcraft（Premiere Pro，10,355 stars）✓
- storytold/lightcraft（Lightroom，10,353 stars）✓
- storytold/pdfcraft（Acrobat，9,876 stars）✓ —— ⚠️ 纠正：任务初版写的是 `printcraft`，实测 `github.com/storytold/printcraft` 已重定向到 `pdfcraft`，README 与各仓库互相引用的 7 个应用图标也只列出 pdfcraft，**以 pdfcraft 为准**，printcraft 不存在
- storytold/effectcraft（After Effects，5,265 stars）✓
- storytold/designcraft（InDesign，3,075 stars）✓

**逆向工具（1 个）：** morluto/rea（114,401 stars，MIT）✓

**经典案例（18 个）：**
- LibreOffice/core（TDF 官方镜像，GPL-3.0）✓
- GNOME/gimp（官方只读镜像，主仓在 GNOME GitLab，GPL）✓
- KDE/krita（官方镜像，主仓在 invent.kde.org，GPL-3.0）✓
- blender/blender（官方镜像，GPL-3.0）✓
- FreeTubeApp/FreeTube（AGPL-3.0）✓
- TeamNewPipe/NewPipe（GPL-3.0）✓
- penpot/penpot（Figma，60,930 stars，MPL-2.0）✓
- AppFlowy-IO/AppFlowy（Notion，77,237 stars，AGPL-3.0）✓
- OpenCut-app/OpenCut（CapCut，93,667 stars，MIT）✓
- rustdesk/rustdesk（TeamViewer，125,549 stars，AGPL-3.0）✓
- jellyfin/jellyfin（Plex/Emby，58,011 stars，GPL-2.0）✓
- FreeCAD/FreeCAD（AutoCAD，34,180 stars，LGPL-2.1）✓
- OpenTTD/OpenTTD（Transport Tycoon，8,358 stars，GPL-2.0）✓
- OpenRA/OpenRA（命令与征服，17,540 stars，GPL-3.0）✓
- OpenMW/openmw（上古卷轴3，6,617 stars，GPL-3.0，主仓在 GitLab，GitHub 为官方镜像）✓
- obsproject/obs-studio（77,337 stars，GPL-2.0）✓
- laurent22/joplin（Evernote，56,693 stars）✓
- jgraph/drawio（Visio，8,698 stars，Apache-2.0）✓

**核实失败 / 未收录：**
- `storytold/printcraft` —— 不存在（已重定向至 pdfcraft），未收录，见上纠正。
- 其余疑似存在但本轮未逐个打开核实的，一律写"待核实"，未给链接：darktable（Lightroom）、Immich（Google Photos）、Bitwarden（1Password）、Nextcloud（网盘）、DBeaver（Navicat）、MarkText（Typora）、Luanti（Minecraft）、Flameshot（Snipaste）、Jitsi（腾讯会议/Zoom）、Heroic（Steam）。

---

## 四、认领优先级建议（给社区）

1. **低难度 + 高热度（新手友好）**：XMind、Typora、Snipaste、Everything、Visio（已有 draw.io 可参考）
2. **中难度 + 高热度（主力战场）**：剪映/CapCut（已有 OpenCut 93k stars，可参与贡献）、Notion（AppFlowy）、微信（极难但呼声最高，建议拆子目标：Linux 客户端体验 → 协议 → 生态）
3. **已有标杆、可直接参与**：ArtCraft 全家桶（7 个仓库均处 early alpha，缺人缺 parity 测试）、Penpot、Jellyfin、RustDesk
4. **极高难度、长期主义**：微信、抖音、Office、飞书/钉钉、Windows/macOS——建议先做"功能语义地图"（用 REA 拆解功能清单），再分模块认领
