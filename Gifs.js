/* Galeria de GIFs: usada pelo index.html (seção GIFs) e pelo gifs.html.
   Para adicionar GIFs: coloque o arquivo na pasta Gif/ e cadastre abaixo.
   a) Arquivo seu:  { file: "clark-01.gif", name: "Clark sorrindo", char: "Clark" }
   b) Link direto:  { url: "https://media.giphy.com/media/CODIGO/giphy.gif", name: "Clark sorrindo", char: "Clark" } */
const GIFS = [
  { file: "1.gif", name: "Clark 1", char: "Clark" },
  { file: "2.gif", name: "Clark 2", char: "Clark" },
  { file: "3.gif", name: "Clark 3", char: "Clark" },
  { file: "4.gif", name: "Clark 4", char: "Clark" },
  { file: "5.gif", name: "Clark 5", char: "Clark" },
  { file: "6.gif", name: "Clark 6", char: "Clark" },
  { file: "7.gif", name: "Clark 7", char: "Clark" },
  { file: "8.gif", name: "Clark 8", char: "Clark" },
  { file: "9.gif", name: "Clark 9", char: "Clark" },
  { file: "10.gif", name: "Clark 10", char: "Clark" },
  { file: "11.gif", name: "Clark 11", char: "Clark" },
  { file: "12.gif", name: "Clark 12", char: "Clark" },
  { file: "13.gif", name: "Clark 13", char: "Clark" },
  { file: "14.gif", name: "Clark 14", char: "Clark" },
  { file: "15.gif", name: "Clark 15", char: "Clark" },
  { file: "16.gif", name: "Clark 16", char: "Clark" },
  { file: "17.gif", name: "Clark 17", char: "Clark" }
];

(function () {
  const filters = document.getElementById("gifFilters");
  const grid = document.getElementById("gifGrid");
  if (!grid) return;

  /* Aviso (toast) e janela de ampliação: usa os da página ou cria se não existirem */
  let toast = document.getElementById("gifToast");
  if (!toast) { toast = document.createElement("div"); toast.id = "gifToast"; toast.className = "gif-toast"; toast.setAttribute("role", "status"); toast.setAttribute("aria-live", "polite"); document.body.appendChild(toast); }
  let lb = document.getElementById("gifLightbox");
  if (!lb) { lb = document.createElement("div"); lb.id = "gifLightbox"; lb.className = "gif-lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-label", "GIF ampliado"); lb.innerHTML = '<img alt="GIF ampliado">'; document.body.appendChild(lb); }
  const lbImg = lb.querySelector("img");

  let current = "Todos", timer;
  const esc = t => { const d = document.createElement("div"); d.textContent = t; return d.innerHTML.replace(/"/g, "&quot;"); };

  function say(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  const srcOf = g => g.url || "Gif/" + g.file;
  function nameOf(g) {
    if (g.file) return g.file;
    const parts = g.url.split("?")[0].split("/");
    const last = parts.pop(), prev = parts.pop();
    return /^giphy/i.test(last) ? prev + ".gif" : last;
  }
  const nameFor = g => g.file ? g.char.toLowerCase() + "-" + g.file : nameOf(g);

  function renderFilters() {
    if (!filters) return;
    const names = ["Todos", ...new Set(GIFS.map(g => g.char))];
    filters.hidden = names.length <= 2;
    filters.innerHTML = names.map(n =>
      `<button class="season-btn ${n === current ? "active" : ""}" data-c="${esc(n)}">${esc(n)}</button>`).join("");
  }

  function renderGrid() {
    const list = GIFS.map((g, i) => ({ g, i })).filter(x => current === "Todos" || x.g.char === current);
    grid.innerHTML = list.map(({ g, i }) => `
      <div class="gif-card">
        <div class="gif-frame"><img src="${esc(srcOf(g))}" alt="GIF ${esc(g.char)}" loading="lazy" referrerpolicy="no-referrer"></div>
        <button class="retro-submit-btn" data-i="${i}">💾 Salvar</button>
      </div>`).join("");
  }

  function download(href, file) {
    const a = document.createElement("a");
    a.href = href; a.download = file;
    document.body.append(a); a.click(); a.remove();
  }

  async function save(g, btn) {
    const url = srcOf(g), file = nameFor(g);
    const mark = () => {
      if (!btn) return;
      const old = btn.dataset.txt || btn.textContent;
      btn.dataset.txt = old;
      btn.textContent = "✔ Baixado!"; btn.classList.add("done");
      setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 2200);
    };
    /* Arquivo do próprio site: baixa direto */
    if (!/^https?:\/\//i.test(url) || url.startsWith(location.origin)) {
      download(url, file); mark(); say("GIF baixado! Veja em Downloads.");
      return;
    }
    /* Link de outro site (Giphy etc.): baixa via blob */
    try {
      const blob = await (await fetch(url)).blob();
      const obj = URL.createObjectURL(blob);
      download(obj, file);
      setTimeout(() => URL.revokeObjectURL(obj), 4000);
      mark(); say("GIF baixado! Veja em Downloads.");
    } catch (e) {
      window.open(url, "_blank", "noopener");
      say("Segure o dedo no GIF e escolha Salvar imagem.");
    }
  }

  if (filters) filters.addEventListener("click", e => {
    const b = e.target.closest(".season-btn");
    if (!b) return;
    current = b.dataset.c;
    renderFilters(); renderGrid();
  });
  grid.addEventListener("click", e => {
    const b = e.target.closest(".retro-submit-btn");
    if (b) { save(GIFS[Number(b.dataset.i)], b); return; }
    const img = e.target.closest(".gif-frame img");
    if (img) { lbImg.src = img.src; lb.classList.add("open"); }
  });
  lb.addEventListener("click", () => { lb.classList.remove("open"); lbImg.removeAttribute("src"); });
  addEventListener("keydown", e => { if (e.key === "Escape") lb.click(); });
  grid.addEventListener("error", e => {
    if (e.target.tagName === "IMG") {
      const fr = e.target.closest(".gif-frame");
      e.target.remove();
      if (fr) fr.classList.add("missing");
    }
  }, true);

  renderFilters();
  renderGrid();

  /* Lois: arquivos Gif/L1.gif, Gif/L2.gif... descobre sozinho quantos existem (até 60) */
  (function loadLois() {
    const MAX = 60;
    const tests = Array.from({ length: MAX }, (_, k) => new Promise(ok => {
      const f = "L" + (k + 1) + ".gif", im = new Image();
      im.onload = () => ok({ file: f, name: "Lois " + (k + 1), char: "Lois" });
      im.onerror = () => ok(null);
      im.src = "Gif/" + f;
    }));
    Promise.all(tests).then(list => {
      const found = list.filter(Boolean);
      if (!found.length) return;
      GIFS.push(...found);
      renderFilters(); renderGrid();
    });
  })();
})();