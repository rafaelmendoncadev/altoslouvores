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

  /* ----- Header: estado ao rolar + seção ativa no menu ----- */
  var header = document.querySelector(".site-header");
  var spySections = ["destaque", "videos", "sobre", "contato"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var spyLinks = document.querySelectorAll('.main-nav a[href^="#"], .mobile-nav a[href^="#"]');

  /* ----- Destaque do link ativo por página ----- */
  var isPregacoesPage = /pregacoes\.html/i.test(window.location.pathname);
  var pregacoesLinks = document.querySelectorAll('a[href$="pregacoes.html"], a[href*="pregacoes.html"]');

  function updateHeaderAndSpy() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 10);

    /* Destaque especial na página de pregações */
    if (isPregacoesPage) {
      pregacoesLinks.forEach(function (link) {
        link.classList.add("active");
      });
      return;
    }

    var pos = window.scrollY + (header ? header.offsetHeight : 72) + 90;
    var current = spySections[0];
    spySections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top + window.scrollY <= pos) current = sec;
    });
    spyLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current.id);
    });
  }
  window.addEventListener("scroll", updateHeaderAndSpy, { passive: true });
  updateHeaderAndSpy();

  /* ----- Player de vídeo e capas personalizadas ----- */
  function playVideoById(videoId) {
    var iframe = document.getElementById(videoId);
    if (!iframe) return;
    
    var cover = iframe.parentElement ? iframe.parentElement.querySelector(".video-cover") : null;
    if (cover) {
      cover.classList.add("is-hidden");
    }

    // Ativa o autoplay do embed — permitido por vir de um gesto do usuário
    if (iframe.src.indexOf("autoplay=") === -1) {
      iframe.src = iframe.src + (iframe.src.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
    }
  }

  var videoCovers = document.querySelectorAll(".video-cover");
  videoCovers.forEach(function (cover) {
    cover.addEventListener("click", function () {
      var targetId = cover.getAttribute("data-target");
      if (targetId) {
        playVideoById(targetId);
      }
    });
  });

  var playButtons = document.querySelectorAll('[data-action="play"]');
  var mainVideo = document.getElementById("mainVideo");
  if (playButtons.length && mainVideo) {
    playButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        mainVideo.scrollIntoView({ behavior: "smooth", block: "center" });
        playVideoById("mainVideo");
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
  var verseRefEl = document.getElementById("dailyVerseRef");
  var verseBtn = document.querySelector('[data-action="new-verse"]');

  function setVerse(text) {
    var parts = text.split(" — ");
    verseEl.textContent = parts[0] || text;
    if (verseRefEl) verseRefEl.textContent = parts[1] ? "— " + parts[1] : "";
  }

  if (verseEl && verseBtn) {
    setVerse(verses[0]);
    verseBtn.addEventListener("click", function () {
      var current = verseEl.textContent.trim();
      var next;
      do {
        next = verses[Math.floor(Math.random() * verses.length)];
      } while (next.split(" — ")[0].trim() === current && verses.length > 1);
      verseEl.style.opacity = "0";
      if (verseRefEl) verseRefEl.style.opacity = "0";
      setTimeout(function () {
        setVerse(next);
        verseEl.style.opacity = "1";
        if (verseRefEl) verseRefEl.style.opacity = "1";
      }, 200);
    });
  }
})();
