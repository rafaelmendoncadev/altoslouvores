/* ==========================================================================
   Altos Louvores — Interações
   ========================================================================== */
(function () {
  "use strict";

  /* ----- Ano atual no rodapé ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Menu mobile ----- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeMobileMenu() {
    if (!menuToggle || !mobileNav) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      mobileNav.hidden = isOpen;
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    });

    // Fecha o menu ao clicar em um link
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  /* ----- Player de vídeo ----- */
  var video = document.getElementById("mainVideo");
  var playButtons = document.querySelectorAll('[data-action="play"]');

  if (video && playButtons.length) {
    playButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        video.scrollIntoView({ behavior: "smooth", block: "center" });
        try {
          var p = video.play();
          if (p && typeof p.then === "function") {
            p.catch(function () {
              /* Autoplay pode ser bloqueado; o usuário toca em play manualmente */
            });
          }
        } catch (e) { /* ignora */ }
      });
    });
  }

  /* ----- Compartilhar (Web Share API + fallback) ----- */
  var shareButtons = document.querySelectorAll('[data-action="share"]');
  shareButtons.forEach(function (btn) {
    btn.addEventListener("click", async function () {
      var shareData = {
        title: "Altos Louvores — Não Desista | Ludmila Ferber",
        text: "Assista 'Não Desista' com Ludmila Ferber no Altos Louvores.",
        url: window.location.href,
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          showToast("Link copiado para a área de transferência!");
        } else {
          showToast("Compartilhe: " + window.location.href);
        }
      } catch (e) {
        /* Usuário cancelou o compartilhamento — sem ação */
      }
    });
  });

  /* ----- Toast ----- */
  var toastEl = document.getElementById("toast");
  var toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    // forçar reflow para reiniciar a animação
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
      setTimeout(function () { toastEl.hidden = true; }, 300);
    }, 2600);
  }

  /* ----- Versículos do dia ----- */
  var verses = [
    "“Tudo posso naquele que me fortalece.” — Filipenses 4:13",
    "“O Senhor é a minha luz e a minha salvação; a quem temerei?” — Salmos 27:1",
    "“Confia no Senhor de todo o teu coração.” — Provérbios 3:5",
    "“Sê forte e corajoso; não temas, nem te espantes.” — Josué 1:9",
    "“Os que esperam no Senhor renovarão as suas forças.” — Isaías 40:31",
    "“O choro pode durar uma noite, mas a alegria vem pela manhã.” — Salmos 30:5",
    "“Buscai primeiro o Reino de Deus e a sua justiça.” — Mateus 6:33",
    "“Eu sou o caminho, a verdade e a vida.” — João 14:6",
  ];
  var verseEl = document.getElementById("dailyVerse");
  var verseBtn = document.querySelector('[data-action="new-verse"]');
  if (verseEl && verseBtn) {
    verseBtn.addEventListener("click", function () {
      var current = verseEl.textContent.trim();
      var next;
      do {
        next = verses[Math.floor(Math.random() * verses.length)];
      } while (next === current && verses.length > 1);
      verseEl.style.opacity = "0";
      setTimeout(function () {
        verseEl.textContent = next;
        verseEl.style.opacity = "1";
      }, 200);
    });
  }
})();
