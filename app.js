/* REA 复刻工场 v3 · 渲染逻辑（纯原生 JS）
   数据：targets.js（TARGETS / CATS / STATUS_LABEL / SI / ISSUE）
   加新目标只改 targets.js，本文件不动。 */

function tileHTML(icon, label) {
  const ch = (icon.t || label || "?").slice(0, 1);
  const inner = icon.si
    ? `<span class="letter letter-bg" aria-hidden="true">${ch}</span><img src="${SI}${icon.si}.svg" alt="" loading="lazy" onload="this.previousElementSibling.remove()" onerror="this.remove()">`
    : `<span class="letter">${icon.t}</span>`;
  return `<div class="tile" style="--tc:${icon.c}">${inner}</div>`;
}

function cardHTML(t, rank) {
  const st = STATUS_LABEL[t.status];
  const linkBtn = t.link
    ? `<a class="btn-mini" href="${t.link}" target="_blank" rel="noopener">看复现仓库</a>`
    : (t.status === "active"
        ? `<span class="btn-mini solo">发起人项目 · 进行中</span>`
        : `<a class="btn-mini ghost" href="${ISSUE}" target="_blank" rel="noopener">认领开坑</a>`);
  const note = t.linkNote ? `<div class="link-note">${t.linkNote}</div>` : "";
  return `<article class="tcard" data-search="${(t.name + " " + t.vendor + " " + t.blurb).toLowerCase()}">
    ${rank ? `<span class="rank">TOP ${rank}</span>` : ""}
    <div class="tcard-top">${tileHTML(t.icon, t.name)}
      <div class="tinfo"><h4>${t.name}</h4><p class="vendor">${t.vendor}</p></div>
    </div>
    <span class="status s-${t.status}">${st}</span>
    <p class="blurb">${t.blurb}</p>
    ${note}
    <div class="tactions">${linkBtn}</div>
  </article>`;
}

/* ① Hero 图标墙：热门 12 个 */
(function iconWall(){
  const hot = TARGETS.filter(t => t.heat).sort((a,b) => a.heat - b.heat);
  document.getElementById("iconWall").innerHTML = hot.map(t =>
    `<div class="wall-item">${tileHTML(t.icon, t.name)}<span>${t.name.split(" / ")[0].split("（")[0]}</span></div>`
  ).join("");
})();

/* ② 热门目标区 */
(function hotGrid(){
  const hot = TARGETS.filter(t => t.heat).sort((a,b) => a.heat - b.heat);
  document.getElementById("hotGrid").innerHTML = hot.map((t,i) => cardHTML(t, i+1)).join("");
})();

/* ③ 分类目录 */
(function catSections(){
  const wrap = document.getElementById("catSections");
  wrap.innerHTML = CATS.map(c => {
    const items = TARGETS.filter(t => t.cat === c.id);
    return `<div class="cat-block" data-cat="${c.id}">
      <div class="cat-head">
        <span class="cat-dot" style="--cc:${c.color}"></span>
        <h3>${c.name}</h3><p>${c.desc}</p>
        <span class="count">${items.length} 个目标</span>
      </div>
      <div class="cards">${items.map(t => cardHTML(t)).join("")}</div>
    </div>`;
  }).join("");
})();

/* ④ 搜索过滤（热门区 + 全部分类） */
(function search(){
  const input = document.getElementById("search");
  const hint = document.getElementById("searchHint");
  const hotSec = document.getElementById("hot");
  function apply(){
    const q = input.value.trim().toLowerCase();
    let n = 0;
    document.querySelectorAll(".tcard").forEach(card => {
      const hit = !q || card.dataset.search.includes(q);
      card.classList.toggle("hide", !hit);
      if (hit) n++;
    });
    document.querySelectorAll(".cat-block").forEach(block => {
      const visible = block.querySelectorAll(".tcard:not(.hide)").length;
      block.classList.toggle("hide", visible === 0);
    });
    hotSec.classList.toggle("hide", !!q); /* 搜索时只看分类结果 */
    hint.textContent = q ? `找到 ${n} 个相关目标` : "";
    if (q && n === 0) hint.textContent = "没找到相关目标，换个关键词或点右上角「提交目标」";
  }
  input.addEventListener("input", apply);
  /* 支持 ?q= 直链搜索（SEO/分享用） */
  const pq = new URLSearchParams(location.search).get("q");
  if (pq) { input.value = pq; apply(); }
})();
