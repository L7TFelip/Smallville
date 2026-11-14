/* Banner inteiro no cabeçalho: procura a imagem em assets/images e usa a primeira que existir.
   Para trocar de banner, coloque o arquivo na pasta e (se o nome for outro) acrescente-o na lista abaixo. */
(function () {
  var CANDIDATES = [
    "assets/images/banner2.webp", "assets/images/banner2.jpg", "assets/images/banner2.jpeg",
    "assets/images/banner2.png", "assets/images/banner2.gif",
    "assets/images/banner10.jpg", "assets/images/banner10.jpeg", "assets/images/banner10.png", "assets/images/banner10.webp"
  ];

  function init() {
    var header = document.querySelector(".header-banner");
    if (!header) return;
    (function tryNext(i) {
      if (i >= CANDIDATES.length) return;            /* nenhuma achada: fica o banner antigo de fundo */
      var probe = new Image();
      probe.onload = function () {
        var img = document.createElement("img");
        img.className = "banner-img";
        img.alt = "";
        img.setAttribute("aria-hidden", "true");
        img.decoding = "async";
        img.src = CANDIDATES[i];
        header.insertBefore(img, header.firstChild);
        header.classList.add("has-banner-img");
      };
      probe.onerror = function () { tryNext(i + 1); };
      probe.src = CANDIDATES[i];
    })(0);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();