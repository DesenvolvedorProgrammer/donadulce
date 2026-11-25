/* Hamburgueria Dona Dulce — interações */
(function () {
  'use strict';

  var CONFIG = {
    whatsapp: '553537217921',
    mensagem: 'Olá! Vim pelo site da Dona Dulce e gostaria de fazer um pedido.'
  };

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- WhatsApp oficial ---------- */
  $$('[data-wa]').forEach(function (a) {
    a.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(a.getAttribute('data-msg') || CONFIG.mensagem);
    a.target = '_blank'; a.rel = 'noopener';
  });

  /* ---------- Cabeçalho: fundo ao rolar + cor conforme a seção ---------- */
  var hd = $('.hd'), temas = $$('[data-theme]'), links = $$('.hd-nav a'), agendado = false;
  function aoRolar() {
    agendado = false;
    hd.classList.toggle('rolou', window.scrollY > 30);
    var meio = hd.offsetHeight / 2, tema = 'light';
    temas.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top <= meio && r.bottom > meio) tema = s.getAttribute('data-theme'); });
    hd.classList.toggle('escuro', tema === 'dark');
    var ref = window.innerHeight * 0.35, atual = null;
    links.forEach(function (a) { var s = $(a.getAttribute('href')); if (!s) return; var r = s.getBoundingClientRect(); if (r.top <= ref && r.bottom > ref) atual = a; });
    links.forEach(function (a) { a.classList.toggle('ativo', a === atual); });
  }
  window.addEventListener('scroll', function () { if (!agendado) { agendado = true; requestAnimationFrame(aoRolar); } }, { passive: true });
  window.addEventListener('resize', aoRolar);
  aoRolar();

  /* ---------- Menu mobile ---------- */
  var gaveta = $('#gaveta'), botao = $('.hd-menu');
  function setGaveta(abrir) {
    document.body.classList.toggle('gaveta-aberta', abrir);
    botao.setAttribute('aria-expanded', String(abrir));
    botao.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
    if (abrir) {
      gaveta.hidden = false; setTimeout(function () { gaveta.classList.add('aberta'); }, 10);
      document.documentElement.style.overflow = 'hidden';
    } else {
      gaveta.classList.remove('aberta'); document.documentElement.style.overflow = '';
      setTimeout(function () { if (!gaveta.classList.contains('aberta')) gaveta.hidden = true; }, 700);
    }
  }
  botao.addEventListener('click', function () { setGaveta(!document.body.classList.contains('gaveta-aberta')); });
  $$('a', gaveta).forEach(function (a) { a.addEventListener('click', function () { setGaveta(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1100 && document.body.classList.contains('gaveta-aberta')) setGaveta(false); });

  /* ---------- Revelações repetíveis ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      (en.target.__alvos || [en.target]).forEach(function (t) { t.classList.toggle('in', en.isIntersecting); });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach(function (el) { io.observe(el); });
  $$('.rv-clip').forEach(function (el) {
    var pai = el.parentElement;
    if (!pai.__alvos) { pai.__alvos = []; io.observe(pai); }
    pai.__alvos.push(el);
  });
  var hero = $('.hero');
  var ioHero = new IntersectionObserver(function (e) { hero.classList.toggle('in', e[0].isIntersecting); }, { threshold: 0.25 });
  setTimeout(function () { ioHero.observe(hero); }, 60);

  /* ---------- Cardápio ---------- */
  var dados = window.CARDAPIO || [];
  var tabs = $('.tabs'), lista = $('#menuList'), intro = $('#catIntro');
  var fmt = function (v) { return v.toFixed(2).replace('.', ','); };

  dados.forEach(function (cat, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.id = 'tab-' + cat.id;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'menuList');
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); b.tabIndex = i === 0 ? 0 : -1;
    b.innerHTML = esc(cat.curto) + '<small>' + cat.itens.length + '</small>';
    b.addEventListener('click', function () { mostrar(i, true); });
    tabs.appendChild(b);
  });
  tabs.addEventListener('keydown', function (e) {
    var t = $$('.tab', tabs), c = t.indexOf(document.activeElement);
    if (c < 0 || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    e.preventDefault(); var n = (c + (e.key === 'ArrowRight' ? 1 : -1) + t.length) % t.length;
    t[n].focus(); mostrar(n, true);
  });

  function mostrar(i, doUsuario) {
    var cat = dados[i]; if (!cat) return;
    $$('.tab', tabs).forEach(function (t, k) {
      t.setAttribute('aria-selected', k === i ? 'true' : 'false'); t.tabIndex = k === i ? 0 : -1;
      if (k === i && doUsuario && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
    lista.setAttribute('aria-labelledby', 'tab-' + cat.id);
    intro.textContent = cat.intro;
    lista.innerHTML = cat.itens.map(function (it) {
      var foto = it.foto
        ? '<div class="mi-foto"><img src="' + it.foto + '" alt="' + esc(it.n) + '" loading="lazy"></div>'
        : '<div class="mi-foto vazio"><img src="img/logo-dona-dulce-480.webp" alt="" aria-hidden="true" loading="lazy"></div>';
      var tag = it.tag ? '<span class="tg' + (/Oferta/.test(it.tag) ? ' amarela' : '') + '">' + esc(it.tag) + '</span>' : '';
      var preco = '<span class="pr"><small>R$</small>' + fmt(it.p) + (it.de ? '<span class="de">R$ ' + fmt(it.de) + '</span>' : '') + '</span>';
      return '<article class="mi">' + tag + foto + '<div class="mi-corpo"><div class="mi-topo"><h3>' + esc(it.n) + '</h3>' + preco + '</div><p>' + esc(it.d) + '</p></div></article>';
    }).join('');
    $$('.mi', lista).forEach(function (m, k) { setTimeout(function () { m.classList.add('show'); }, 40 + k * 40); });
  }
  mostrar(0, false);

  var ioMenu = new IntersectionObserver(function (e) {
    var itens = $$('.mi', lista);
    if (e[0].isIntersecting) itens.forEach(function (m, k) { setTimeout(function () { m.classList.add('show'); }, k * 40); });
    else itens.forEach(function (m) { m.classList.remove('show'); });
  }, { threshold: 0.04 });
  ioMenu.observe(lista);

  /* ---------- Horário ---------- */
  (function () {
    var H = { 0: [18, 23], 2: [18, 23], 3: [18, 23], 4: [18, 23], 5: [18, 23.5], 6: [18, 23.5] };
    var N = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    var hm = function (v) { return Math.floor(v) + 'h' + (v % 1 ? '30' : ''); };
    var agora = new Date(), d = agora.getDay(), h = agora.getHours() + agora.getMinutes() / 60;
    var tr = $('.horas tr[data-d="' + d + '"]'); if (tr) tr.classList.add('hoje');
    var st = $('#status'); if (!st) return;
    var hoje = H[d];
    if (hoje && h >= hoje[0] && h < hoje[1]) { st.textContent = 'Aberto agora · até ' + hm(hoje[1]); st.style.setProperty('--st', '#2f8a3e'); }
    else if (hoje && h < hoje[0]) { st.textContent = 'Fechado agora · abre hoje às 18h'; st.style.setProperty('--st', '#e0a10b'); }
    else { var p = (d + 1) % 7; while (!H[p]) p = (p + 1) % 7; st.textContent = 'Fechado agora · abre ' + (p === (d + 1) % 7 ? 'amanhã' : N[p]) + ' às 18h'; st.style.setProperty('--st', '#a61b22'); }
  })();

  /* ---------- Galeria ---------- */
  var lb = $('#lb'), lbImg = $('#lbImg'), ultimo = null;
  function fecharLb() { if (lb.hidden) return; lb.hidden = true; document.documentElement.style.overflow = ''; if (ultimo) ultimo.focus(); }
  $$('.gi').forEach(function (b) {
    b.setAttribute('aria-label', 'Ampliar foto: ' + $('img', b).alt);
    b.addEventListener('click', function () {
      ultimo = b; lbImg.src = b.getAttribute('data-src'); lbImg.alt = $('img', b).alt;
      lb.hidden = false; document.documentElement.style.overflow = 'hidden'; $('.lb-x', lb).focus();
    });
  });
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) fecharLb(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { fecharLb(); if (document.body.classList.contains('gaveta-aberta')) setGaveta(false); }
  });

  var ano = $('#ano'); if (ano) ano.textContent = new Date().getFullYear();
})();
