# is-a.dev PR #56167 — 模板修复稿

2026-10-12 13:59 CST 检查结论：
- PR 状态：open，未合并（merged_at=null）
- 机器人已打标签：**reason: incomplete pr**（模板没填完），卡在这儿，不补就不会进入人工审核
- 域名文件 domains/tingai.json 本身没问题（owner/username+email 都有，CNAME → tingaidehua.github.io）
- 卡点仅在 PR 描述：需要把完整模板贴上去、勾选框打上、Website Preview / Website Purpose 填上

## 操作（30 秒）
打开 https://github.com/is-a-dev/register/pull/56167 → 右上角 "Edit"（改 PR 描述）
→ 全选删除现有描述 → 粘贴下面全文 → 保存。机器人标签会自动摘掉，之后进入人工审核队列（按官方说明：几小时到 3 天）。

## 完整 PR 描述（复制粘贴用）

```
# Requirements

- [x] I **agree** to the Terms of Service.
- [x] My file is following the domain structure.
- [x] My website is **reachable** and **completed**.
- [x] My website is **software development** related.
- [x] My website is **not for commercial use**.
- [x] I have provided sufficient contact information in the `owner` key.
- [x] I have provided a link to my website below.

# Website Preview

https://tingaidehua.github.io/tingai/

# Website Purpose

REA 复刻工场 (tingai = 听AI的话): a community directory/catalog site for clean-room open-source reimplementations of commercial software (video editors, design tools, office apps, social apps...). 48 targets in 8 categories, each marked as: has open-source reimplementation / in progress / open for claiming. Search + filters + SEO + community submission/collaboration entries. Non-commercial open-source community project hosted on GitHub Pages.
```

## 审核通过后的下一步（给用户备忘）
DNS 生效后，还要在 Pages 仓库里加一个 CNAME 文件（内容只有一行 `tingai.is-a.dev`，放在发布分支根目录），或在仓库 Settings → Pages → Custom domain 里填 tingai.is-a.dev 并勾选 Enforce HTTPS，否则 GitHub Pages 不认这个域名。
