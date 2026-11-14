/* Kryptonita Vermelha / Verde: efeito no site todo, sem alert().
   Usado pelo index.html e pelo gifs.html. O modo acompanha o visitante ao trocar de página. */
(function () {
  const MODES = {
    red:   { cls: "red-kryptonite-mode",   btn: "btnRedK",   txt: "redKText",   on: "Desativar Kryptonita Vermelha!", off: "Ativar Kryptonita Vermelha!" },
    green: { cls: "green-kryptonite-mode", btn: "btnGreenK", txt: "greenKText", on: "Desativar Kryptonita Verde!",    off: "Ativar Kryptonita Verde!" }
  };
  const KEY = "smallville_kmode";
  const reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function init() {
    /* Camadas de efeito (vinheta + faixa de luz) que cobrem o site todo, uma por cor */
    const fx = document.createElement("div");
    fx.className = "krypton-fx";
    fx.setAttribute("aria-hidden", "true");
    fx.innerHTML = ["red", "green"].map(c =>
      '<div class="kfx-layer ' + c + '"><div class="kfx-vig"></div><div class="kfx-scan"></div></div>').join("");
    document.body.appendChild(fx);

    function active() {
      return Object.keys(MODES).find(m => document.body.classList.contains(MODES[m].cls)) || "";
    }

    function paint() {
      const now = active();
      Object.keys(MODES).forEach(m => {
        const b = document.getElementById(MODES[m].btn), t = document.getElementById(MODES[m].txt);
        if (t) t.textContent = now === m ? MODES[m].on : MODES[m].off;
        if (b) b.classList.toggle("is-on", now === m);
      });
    }

    /* Explosão em canvas: clarão, duas ondas de choque e faíscas, a 60 fps */
    function burst(mode, btn) {
      if (reduced) return;
      const r = btn ? btn.getBoundingClientRect() : { left: innerWidth / 2, top: 40, width: 0, height: 0 };
      const ox = r.left + r.width / 2, oy = r.top + r.height / 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = innerWidth, H = innerHeight;
      const cv = document.createElement("canvas");
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:45;pointer-events:none";
      document.body.appendChild(cv);
      const ctx = cv.getContext("2d");
      ctx.scale(dpr, dpr);

      const red = mode === "red";
      const main = red ? "255, 50, 62" : "70, 255, 140";
      const light = red ? "255, 190, 190" : "200, 255, 225";
      const maxR = Math.hypot(Math.max(ox, W - ox), Math.max(oy, H - oy));
      const sparks = Array.from({ length: 70 }, () => {
        const a = Math.random() * Math.PI * 2, v = 250 + Math.random() * 750;
        return { x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: .6 + Math.random() * .8, s: 1.2 + Math.random() * 2.2 };
      });
      const wrap = document.querySelector(".page-wrapper");
      const DUR = 1500, easeOut = t => 1 - Math.pow(1 - t, 3);
      const t0 = performance.now();
      let last = t0;

      (function frame(now) {
        const el = now - t0, t = Math.min(el / DUR, 1), dt = Math.min((now - last) / 1000, .05);
        last = now;
        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = "lighter";

        /* clarão */
        const fa = Math.pow(1 - Math.min(el / 900, 1), 2) * .55;
        if (fa > 0.002) {
          const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, maxR * .9);
          g.addColorStop(0, "rgba(" + light + "," + fa + ")");
          g.addColorStop(.35, "rgba(" + main + "," + fa * .45 + ")");
          g.addColorStop(1, "rgba(" + main + ",0)");
          ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        }

        /* ondas de choque */
        [0, .12].forEach((delay, i) => {
          const k = (el / DUR - delay) / (1 - delay);
          if (k <= 0 || k >= 1) return;
          const rad = easeOut(k) * maxR, a = Math.pow(1 - k, 1.6);
          ctx.beginPath(); ctx.arc(ox, oy, rad, 0, Math.PI * 2);
          ctx.lineWidth = 26 * (1 - k) + 4; ctx.strokeStyle = "rgba(" + main + "," + a * .16 + ")"; ctx.stroke();
          ctx.lineWidth = 7 * (1 - k) + 1.5; ctx.strokeStyle = "rgba(" + (i ? main : light) + "," + a * .9 + ")"; ctx.stroke();
        });

        /* faíscas */
        sparks.forEach(p => {
          p.life -= dt; if (p.life <= 0) return;
          const f = Math.pow(.2, dt);
          p.vx *= f; p.vy *= f; p.x += p.vx * dt; p.y += p.vy * dt;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + (p.s > 2.4 ? light : main) + "," + Math.min(p.life * 1.4, 1) + ")"; ctx.fill();
        });

        /* tremor (vermelha) ou pulso (verde) suaves, amortecidos */
        if (wrap) {
          const s = Math.min(el / 800, 1), d = Math.pow(1 - s, 2);
          if (s < 1) {
            wrap.style.transform = red
              ? "translate3d(" + (Math.sin(el * .09) * 7 * d).toFixed(2) + "px," + (Math.cos(el * .07) * 5 * d).toFixed(2) + "px,0)"
              : "scale(" + (1 + .012 * Math.sin(Math.PI * s) * (1 - s * .4)).toFixed(4) + ")";
          } else wrap.style.transform = "";
        }

        if (el < DUR) requestAnimationFrame(frame);
        else { cv.remove(); if (wrap) wrap.style.transform = ""; }
      })(t0);
    }

    function set(mode, btn, animate) {
      Object.keys(MODES).forEach(m => document.body.classList.toggle(MODES[m].cls, m === mode));
      try { sessionStorage.setItem(KEY, mode || ""); } catch (e) {}
      paint();
      if (mode && animate) burst(mode, btn);
    }

    Object.keys(MODES).forEach(m => {
      const b = document.getElementById(MODES[m].btn);
      if (!b) return;
      b.addEventListener("click", () => set(active() === m ? "" : m, b, true));
    });

    /* Mantém o modo escolhido ao navegar entre o portal e a galeria (sem repetir a explosão) */
    let saved = "";
    try { saved = sessionStorage.getItem(KEY) || ""; } catch (e) {}
    if (MODES[saved]) set(saved, null, false); else paint();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();