(function () {
  "use strict";
  var C = window.CONTENT;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = localStorage.getItem("lang") || "es";

  /* Versión del sitio: */
  var SITE_VER = "v0.4";


  var REG = [
    { ver: "v0.3", st: "shipped" },
    { ver: SITE_VER, st: "wip" }
  ];

  /* Comandos del nav 1–5. */
  var NAV = [
    { cmd: "whoami",    sec: "about" },
    { cmd: "changelog", sec: "work" },
    { cmd: "stack",     sec: "stack" },
    { cmd: "personal",  sec: "personal" },
    { cmd: "contact",   sec: "contact" }
  ];

  /* ---- helpers ---- */
  function t(v) { return v == null ? "" : (typeof v === "string" ? v : (v[lang] != null ? v[lang] : v.es)); }
  function get(path) { return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, C); }
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = get(el.getAttribute("data-i18n"));
      if (v != null) el.textContent = t(v);
    });
    var btn = document.getElementById("langToggle");
    btn.textContent = t(C.ui.langLabel);
    btn.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    btn.title = lang === "es" ? "English" : "Español";
    document.getElementById("kbdHint").innerHTML = (lang === "es"
      ? "Atajos: <kbd>1</kbd>–<kbd>5</kbd> navegar · <kbd>L</kbd> idioma"
      : "Shortcuts: <kbd>1</kbd>–<kbd>5</kbd> navigate · <kbd>L</kbd> language");
  }

  function statusText(s) {
    if (s === "shipped") return lang === "es" ? "publicado" : "shipped";
    return lang === "es" ? "en curso" : "in progress";
  }

  /* ---- render ---- */
  function renderNav() {
    document.getElementById("nav-list").innerHTML = NAV.map(function (n, i) {
      return '<li><a href="#' + n.sec + '" data-sec="' + n.sec + '">' +
        '<span class="k">' + (i + 1) + "</span>" + esc(n.cmd) + "</a></li>";
    }).join("");
  }

  function renderAbout() {
    document.getElementById("about-hl").innerHTML =
      C.about.highlights.map(function (h) { return "<li>" + esc(t(h)) + "</li>"; }).join("");
  }

  function renderReleases() {
    document.getElementById("releases").innerHTML = C.projects.items.map(function (p, i) {
      var m = REG[i] || { ver: "v0.1", st: "shipped" };
      var mediaClass = p.flagship ? "media-logo" : "media-shot";
      var flag = p.flagship ? '<span class="flag">' + esc(t(C.ui.flagship)) + "</span>" : "";
      return '<article class="release reveal">' +
        '<div class="release-meta">' +
          '<div class="release-ver">' + esc(m.ver) + "</div>" +
          '<span class="badge ' + m.st + '"><span class="dot" aria-hidden="true"></span>' + esc(statusText(m.st)) + "</span>" +
        "</div>" +
        '<div class="release-media ' + mediaClass + '">' +
          '<img src="' + p.img + '" alt="' + esc(t(p.alt)) + '" width="' + p.imgW + '" height="' + p.imgH +
          '" loading="lazy" decoding="async">' +
        "</div>" +
        '<div class="release-body">' +
          flag +
          "<h3>" + esc(t(p.name)) + "</h3>" +
          '<p class="release-tagline">' + esc(t(p.tagline)) + "</p>" +
          '<p class="release-desc">' + esc(t(p.desc)) + "</p>" +
          '<ul class="release-tags">' + p.tags.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
          '<a class="release-link" href="' + p.link + '" target="_blank" rel="noopener noreferrer">' + esc(t(p.linkLabel)) + "</a>" +
        "</div></article>";
    }).join("");
    document.getElementById("work-note").textContent = "// " + t(C.projects.note);
  }

  function renderStack() {
    document.getElementById("stack-block").innerHTML = C.stack.groups.map(function (g) {
      return '<div class="dep"><div class="dep-key">' + esc(t(g.label)) + '</div><div class="dep-val">' +
        g.items.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div></div>";
    }).join("");
  }

  /* Motivos dibujados para las notas sin fotografía */
  var MOTIF = {
    aperture: aperture(),
    controller:
      '<svg viewBox="0 0 120 160" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">' +
        '<circle cx="60" cy="80" r="44" opacity=".35"/>' +
        '<rect x="22" y="60" width="76" height="42" rx="17"/>' +
        '<path d="M42 73v14M35 80h14" stroke-linecap="round"/>' +
        '<circle cx="80" cy="74" r="4"/><circle cx="88" cy="84" r="4"/><circle cx="72" cy="84" r="4"/>' +
      "</svg>"
  };

  /* Diafragma: 8 hojas tangentes a un octógono central */
  function aperture() {
    var s = '<svg viewBox="0 0 120 160" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">' +
      '<circle cx="60" cy="80" r="44" opacity=".35"/><circle cx="60" cy="80" r="36"/>';
    var n = 8, R = 36, r = 14, d = "";
    for (var i = 0; i < n; i++) {
      var a1 = (i / n) * Math.PI * 2 - Math.PI / 2;
      var a2 = ((i + 1.6) / n) * Math.PI * 2 - Math.PI / 2;
      d += "M" + (60 + Math.cos(a1) * R).toFixed(1) + " " + (80 + Math.sin(a1) * R).toFixed(1) +
           "L" + (60 + Math.cos(a2) * r).toFixed(1) + " " + (80 + Math.sin(a2) * r).toFixed(1);
    }
    return s + '<path d="' + d + '" stroke-width="1.1" opacity=".85"/>' +
      '<circle cx="60" cy="80" r="' + r + '"/></svg>';
  }

  function renderPersonal() {
    document.getElementById("personal-list").innerHTML = C.personal.items.map(function (it) {
      var media = it.img
        ? '<div class="note-media"><img src="' + it.img + '" alt="' + esc(t(it.alt)) +
            '" width="' + it.imgW + '" height="' + it.imgH + '" loading="lazy" decoding="async"></div>'
        : '<div class="note-media motif" aria-hidden="true">' + (MOTIF[it.icon] || "") + "</div>";
      var link = it.link
        ? '<a class="note-link" href="' + it.link + '" target="_blank" rel="noopener noreferrer">' +
            esc(t(it.linkLabel)) + "</a>"
        : "";
      return '<article class="note reveal">' + media +
        '<div><p class="note-role">' + esc(t(it.role)) + "</p>" +
          "<h3>" + esc(t(it.name)) + "</h3>" +
          "<p>" + esc(t(it.desc)) + "</p>" +
          '<p class="note-quote">' + esc(it.quote) + "</p>" + link +
        "</div></article>";
    }).join("");
  }

  function renderContact() {
    var m = C.meta;
    var rows = [
      { label: "Email", value: m.email, href: "mailto:" + m.email },
      { label: lang === "es" ? "Teléfono" : "Phone", value: m.phone, href: "tel:" + m.phoneHref },
      { label: "GitHub", value: m.github, href: m.githubUrl },
      { label: "Instagram", value: m.instagram, href: m.instagramUrl },
    ];
    document.getElementById("contact-links").innerHTML = rows.map(function (r) {
      var inner = '<span class="ci-label">' + esc(r.label) + '</span><span class="ci-value">' + esc(r.value) + "</span>";
      return "<li>" + (r.href
        ? '<a href="' + r.href + '"' + (r.href.indexOf("http") === 0 ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + inner + "</a>"
        : '<span class="ci">' + inner + "</span>") + "</li>";
    }).join("");
  }

  function renderAll() {
    applyI18n();
    renderNav();
    renderAbout();
    renderReleases();
    renderStack();
    renderPersonal();
    renderContact();
    setupReveal();
    setupNavSpy();
  }

  /* ---- motivo diatomea ---- */
  function drawDiatom() {
    var svg = document.getElementById("diatom");
    if (!svg) return;
    var NS = "http://www.w3.org/2000/svg";
    var cx = 200, cy = 200;
    var rot = document.createElementNS(NS, "g");
    rot.style.transformOrigin = "200px 200px";

    function el(tag, attrs) {
      var n = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
      return n;
    }
    function circle(r, stroke, w, fill, op) {
      return el("circle", {
        cx: cx, cy: cy, r: r, fill: fill || "none",
        stroke: stroke || "none", "stroke-width": w || 0, opacity: op == null ? 1 : op
      });
    }

    // anillo exterior doble (como el isotipo)
    rot.appendChild(circle(192, "currentColor", 2.2));
    rot.appendChild(circle(180, "currentColor", 1, null, 0.6));

    // 10 pétalos radiales con hileras de areolas
    var petals = 10;
    for (var i = 0; i < petals; i++) {
      var g = el("g", { transform: "translate(" + cx + "," + cy + ") rotate(" + (i * 360 / petals) + ")" });
      g.appendChild(el("rect", {
        x: -15, y: -168, width: 30, height: 108, rx: 15,
        fill: "none", stroke: "currentColor", "stroke-width": 1.3
      }));
      for (var y = -158; y <= -72; y += 12) {
        [-6, 6].forEach(function (dx) {
          g.appendChild(el("circle", { cx: dx, cy: y, r: 1.9, fill: "currentColor", opacity: 0.55 }));
        });
      }
      rot.appendChild(g);
    }

    // núcleo con radios
    rot.appendChild(circle(46, "currentColor", 1.6));
    rot.appendChild(circle(40, "var(--silver)", 0.8));
    for (var j = 0; j < 12; j++) {
      var a = (j / 12) * Math.PI * 2;
      rot.appendChild(el("line", {
        x1: cx, y1: cy,
        x2: cx + Math.cos(a) * 40, y2: cy + Math.sin(a) * 40,
        stroke: "currentColor", "stroke-width": 0.9, opacity: 0.7
      }));
    }
    rot.appendChild(circle(6, null, 0, "currentColor"));

    svg.appendChild(rot);

    if (!reduce) {
      var ticking = false;
      var apply = function () {
        rot.style.transform = "rotate(" + (window.scrollY * 0.025) + "deg)";
        ticking = false;
      };
      window.addEventListener("scroll", function () {
        if (!ticking) { window.requestAnimationFrame(apply); ticking = true; }
      }, { passive: true });
    }
  }

  /* ---- reveal (enfoque) ---- */
  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          setTimeout(function () { el.classList.add("in"); }, (i % 4) * 60);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---- nav activa ---- */
  function setupNavSpy() {
    var links = {};
    document.querySelectorAll("#nav-list a[data-sec]").forEach(function (a) { links[a.getAttribute("data-sec")] = a; });
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(links).forEach(function (id) { links[id].classList.toggle("active", id === en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }

  /* ---- atajos de teclado ---- */
  function toggleLang() {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", lang);
    renderAll();
  }
  function setupKeys() {
    document.addEventListener("keydown", function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
      if (e.key >= "1" && e.key <= "5") {
        var n = NAV[parseInt(e.key, 10) - 1];
        var el = n && document.getElementById(n.sec);
        if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      } else if (e.key === "l" || e.key === "L") {
        toggleLang();
      }
    });
  }

  /* ---- init ---- */
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("logYear").textContent = new Date().getFullYear();
  document.getElementById("verBadge").textContent = SITE_VER;
  document.getElementById("logVer").textContent = SITE_VER;
  document.getElementById("langToggle").addEventListener("click", toggleLang);
  document.querySelectorAll(".hero-text, .about-body, .entry-head, .manifest").forEach(function (e) { e.classList.add("reveal"); });

  renderAll();
  drawDiatom();
  setupKeys();
})();
