(function () {
  'use strict';
  /* Language switch for the legal pages: both languages are in the markup, CSS hides the inactive one. */
  var root = document.documentElement;
  function setLang(l) {
    var lang = l === 'en' ? 'en' : 'uk';
    root.lang = lang;
    document.title = root.getAttribute('data-title-' + lang) || document.title;
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    try { localStorage.setItem('ksm-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });
  var saved = null; try { saved = localStorage.getItem('ksm-lang'); } catch (e) {}
  var q = /[?&]lang=(uk|en)/.exec(location.search);
  var auto = /^(uk|ru)/i.test(navigator.language || '') ? 'uk' : 'en';
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  setLang((q && q[1]) || saved || auto);
})();
