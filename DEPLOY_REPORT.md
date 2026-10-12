# DEPLOY_REPORT.md — REA 复刻工场 v2 部署上线报告

日期：2026-10-12
执行：Muse（用户已授权在其名下公开仓库操作）

## 公网 URL（已 curl 验证 200）

**https://tingaidehua.github.io/tingai/**

- 2026-10-12 13:0x CST 验证：`curl` 返回 200，`<title>` 正确
- `robots.txt` / `sitemap.xml` 均 200 可访问

## 部署方式

- GitHub 仓库：https://github.com/tingaidehua/tingai（公开，新建，未动任何旧仓库）
- 分支：`main`，根目录即网站（index.html / app.js / styles.css / sitemap.xml / robots.txt / TARGETS.md）
- GitHub Pages：legacy 构建，main 分支 / 根目录，已启用，HTTPS 强制开启
- 本地目录 ~/workspace/rea-site/ 与仓库 main 分支已同步（git push 成功）

## 免费短域名

- 已提交 is-a.dev 注册 PR：https://github.com/is-a-dev/register/pull/56167
- 目标：`tingai.is-a.dev` → CNAME `tingaidehua.github.io`
- 状态：OPEN，等待人工审核（is-a.dev 为人工审核制，通常数小时到数天）
- PR 合并后 DNS 几分钟内生效；届时把站内 5 处 `tingai.is-a.dev` 占位（canonical/OG/sitemap）确认一遍即可
- 主 URL（github.io）不受影响，先用它访问和推广

## 本次升级内容（v1 → v2）

- 目录导航站形态：顶部搜索框（支持 `?q=`）、8 分类导航、状态三态筛选
- 48 个复刻目标卡片：23 已有开源复现（全部真仓库链接，逐个核实 200）/ 1 进行中（美图秀秀 Case 001）/ 24 待认领
- 纠正：ArtCraft 的 Acrobat 复刻是 `storytold/pdfcraft`（v1 误写 printcraft）
- SEO 全套：中文 meta、OG、JSON-LD（WebSite+ItemList 25 条）、sitemap.xml、robots.txt、语义化 HTML
- 法律安全：三红线显眼位置保留；只链开源功能性复现，零破解/盗版链接；页脚权利人下架通道 + "不构成法律意见"
- 社区投稿："提交新目标"按钮（GitHub issue 占位，写明仓库待创建）

## 待用户决策事项

1. GitHub org 名（站内三处占位待替换）
2. 是否启用真实 issue 认领（当前为占位说明）
3. is-a.dev PR 合并后，确认短域名解析（届时我可再验证一次）
4. SOP 全文 PDF 是否放出下载
5. 美图秀秀 Case 001 公开仓库链接（有了就链上）
6. X 宣传帖：用户说"上线后去 X 发帖宣传"——等他确认发帖时机和文案

## 备注

- 部署全程零新账号、零付费：只用了用户现有的 GitHub（gh CLI 已有 token）和免费的 is-a.dev
- `/root/.ssh` 在 VM 替换后已清空（SSH key 丢失），本次推送走 `gh auth setup-git` 的 HTTPS 通道；如需恢复 SSH 推送，需用户重新提供私钥
