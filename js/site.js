(function () {
  'use strict';

  /* ——— тексти двома мовами ——— */
  var T = {
    uk: {
      'doc.title': 'Ks Motionworks — моушн-дизайн, відео та автоматизація After Effects',
      'nav.works': 'Роботи', 'nav.prices': 'Послуги й ціни', 'nav.about': 'Про мене', 'nav.contact': 'Контакти',
      'hero.h1': 'Графіка для ефіру, реклами та соцмереж. І скрипти, які збирають її за вас.',
      'hero.lead': 'Роблю заставки, інфографіку, анімацію логотипів і рекламні ролики. Автоматизую After Effects, щоб титри, таблиці й мапи оновлювалися з даних, а не вручну.',
      'cta.telegram': 'Написати в Telegram', 'cta.works': 'Дивитися роботи',
      'lt.name': 'Кирило Селіверстов', 'lt.role': 'Моушн-дизайнер, автоматизація After Effects',
      'reel.pause': 'Пауза', 'reel.play': 'Відтворити',
      'works.h2': 'Роботи', 'works.lead': 'Натисніть на роботу, щоб подивитися її повністю зі звуком.',
      'cat.all': 'Усі', 'cat.motion': 'Заставки й моушн', 'cat.infographics': 'Інфографіка й карти',
      'cat.video': 'Відео й реклама', 'cat.automation': 'Автоматизація AE', 'cat.experiments': 'AI-експерименти',
      'prices.h2': 'Послуги й ціни',
      'prices.lead': 'Ціни стартові. Точну суму й термін називаю після короткого брифу або перегляду вашого проєкту.',
      'steps.h3': 'Як проходить замовлення',
      'about.h2': 'Про мене',
      'about.p1': 'Мене звати Кирило Селіверстов, я моушн-дизайнер із Вінниці. Ks Motionworks — це назва, під якою я веду портфоліо й беру замовлення.',
      'about.p2': 'З 2023 року роблю ефірну графіку для телеканалу «ВІТА»: заставки програм, перебивки, інфографіку до новин, анімовані карти. На фрилансі працюю з бізнесом і клієнтами з Fiverr: корпоративні ролики, реклама, шаблони MOGRT, локалізація відео.',
      'about.p3': 'Окремий напрям — автоматизація After Effects. Пишу expressions і скрипти, які беруть дані з таблиці й самі збирають титри, спортивні результати, прогноз погоди чи мапу з адресами. Те, що в ефірі повторюється щодня, не має робитися руками.',
      'about.p4': 'У роботі використовую MCP-підключення: AI-асистент напряму керує After Effects і Premiere Pro. Це помітно пришвидшує виробництво, а ви отримуєте повністю керований проєкт After Effects: з контролерами, зрозумілою структурою шарів і можливістю швидко змінити текст, кольори чи дані.',
      'facts.tools': 'Інструменти', 'facts.langs': 'Мови роботи', 'facts.langs.v': 'Українська, англійська письмово',
      'facts.where': 'Де працюю', 'facts.where.v': 'Вінниця, віддалено з будь-яким містом і країною',
      'contact.h2': 'Розкажіть, що потрібно зробити',
      'contact.lead': 'Напишіть кілька речень про задачу, хронометраж і термін. Відповім з оцінкою вартості.',
      'links.tg': 'Telegram-канал із роботами', 'links.yt': 'Showreel на YouTube',
      'foot.note': 'Усі роботи на сайті виконані Кирилом Селіверстовим.',
      'player.close': 'Закрити', 'sec': 'с', 'min': 'хв'
    },
    en: {
      'doc.title': 'Ks Motionworks — motion design, video and After Effects automation',
      'nav.works': 'Work', 'nav.prices': 'Services & prices', 'nav.about': 'About', 'nav.contact': 'Contact',
      'hero.h1': 'Graphics for broadcast, ads and social. And scripts that build them for you.',
      'hero.lead': 'I make openers, infographics, logo animations and ad videos. I automate After Effects so titles, tables and maps update from data instead of by hand.',
      'cta.telegram': 'Message me on Telegram', 'cta.works': 'See the work',
      'lt.name': 'Kyrylo Seliverstov', 'lt.role': 'Motion designer, After Effects automation',
      'reel.pause': 'Pause', 'reel.play': 'Play',
      'works.h2': 'Work', 'works.lead': 'Click a piece to watch it in full with sound.',
      'cat.all': 'All', 'cat.motion': 'Openers & motion', 'cat.infographics': 'Infographics & maps',
      'cat.video': 'Video & ads', 'cat.automation': 'AE automation', 'cat.experiments': 'AI experiments',
      'prices.h2': 'Services & prices',
      'prices.lead': 'These are starting prices. I give an exact quote and deadline after a short brief or a look at your project.',
      'steps.h3': 'How an order goes',
      'about.h2': 'About me',
      'about.p1': 'I’m Kyrylo Seliverstov, a motion designer based in Vinnytsia, Ukraine. Ks Motionworks is the name I run my portfolio and take orders under.',
      'about.p2': 'Since 2023 I’ve been making broadcast graphics for the Vita TV channel: show openers, bumpers, news infographics and animated maps. As a freelancer I work with businesses and Fiverr clients on corporate videos, ads, MOGRT templates and video localization.',
      'about.p3': 'A separate line of work is After Effects automation. I write expressions and scripts that take data from a spreadsheet and build titles, sports results, a weather forecast or an address map on their own. What repeats on air every day shouldn’t be done by hand.',
      'about.p4': 'I work with MCP connections, where an AI assistant drives After Effects and Premiere Pro directly. It speeds up production noticeably, and you receive a fully controllable After Effects project: with controllers, a clear layer structure and quick changes to text, colours or data.',
      'facts.tools': 'Tools', 'facts.langs': 'Working languages', 'facts.langs.v': 'Ukrainian, written English',
      'facts.where': 'Where I work', 'facts.where.v': 'Vinnytsia, Ukraine. Remote with any city or country',
      'contact.h2': 'Tell me what you need made',
      'contact.lead': 'Send a few sentences about the task, the running time and the deadline. I’ll reply with a quote.',
      'links.tg': 'Telegram channel with work', 'links.yt': 'Showreel on YouTube',
      'foot.note': 'All work on this site was made by Kyrylo Seliverstov.',
      'player.close': 'Close', 'sec': 's', 'min': 'min'
    }
  };

  /* ——— ціни «від» (з прайсу 2026): [назва uk, назва en, грн, $, суфікс] ——— */
  var PRICES = [
    { uk: 'Анімація та motion graphics', en: 'Animation & motion graphics',
      nuk: 'Для реклами, соцмереж, YouTube та ефіру.', nen: 'For ads, social media, YouTube and broadcast.',
      rows: [
        ['Анімація готового логотипу', 'Logo animation', 1500, 35],
        ['Intro / Outro', 'Intro / Outro', 2500, 55],
        ['Анімована інфографіка', 'Animated infographic', 2500, 55],
        ['Анімація карти або маршруту', 'Map or route animation', 2500, 55],
        ['Motion-ролик до 30 секунд', 'Motion video up to 30 seconds', 5000, 110],
        ['Власний шаблон After Effects', 'Custom After Effects template', 4000, 90]
      ] },
    { uk: 'Монтаж і реклама', en: 'Editing & ads',
      nuk: 'Від коротких відео для соцмереж до рекламних роликів.', nen: 'From short social videos to ad spots.',
      rows: [
        ['Reel / Shorts / TikTok до 60 секунд', 'Reel / Shorts / TikTok up to 60 seconds', 1200, 30],
        ['Reel з активним motion design', 'Reel with heavy motion design', 2500, 55],
        ['Рекламний ролик до 30 секунд', 'Ad video up to 30 seconds', 3500, 80],
        ['Монтаж інтерв’ю або подкасту', 'Interview or podcast edit', 2500, 55],
        ['Статичний рекламний креатив', 'Static ad creative', 700, 15]
      ] },
    { uk: 'Переклад, субтитри, AI-озвучка', en: 'Translation, subtitles, AI dubbing',
      nuk: 'Ціна за хвилину відео.', nen: 'Price per minute of video.',
      rows: [
        ['Транскрибація', 'Transcription', 90, 2, 'm'],
        ['Субтитри з таймінгом', 'Timed subtitles', 135, 3, 'm'],
        ['AI-озвучка, один голос', 'AI voice-over, one voice', 270, 6, 'm'],
        ['AI-озвучка із синхронізацією', 'AI voice-over synced to video', 360, 8, 'm'],
        ['Повна локалізація відео', 'Full video localization', 540, 12, 'm']
      ] },
    { uk: 'Автоматизація After Effects', en: 'After Effects automation',
      nuk: 'Менше ручної роботи, швидший випуск, менше помилок.', nen: 'Less manual work, faster output, fewer mistakes.',
      rows: [
        ['Простий expression', 'Simple expression', 500, 12],
        ['Система контролерів на expressions', 'Expression controller system', 1500, 35],
        ['Скрипт з інтерфейсом', 'Script with a UI', 3500, 80],
        ['Автоматизація через CSV / JSON', 'Automation from CSV / JSON', 4500, 100],
        ['Пошук і виправлення помилок у скрипті', 'Script debugging and fixes', 1000, 25],
        ['Консультація, за годину', 'Consulting, per hour', 1000, 25, 'h']
      ] }
  ];
  var TERMS = [
    ['1 500 грн', '$35', 'Мінімальне замовлення', 'Minimum order'],
    ['2 раунди', '2 rounds', 'невеликих правок у ціні', 'of small revisions included'],
    ['+30%', '+30%', 'за термінове замовлення до 24 годин', 'for rush orders within 24 hours'],
    ['Окремо', 'Extra', 'платні стоки, музика, шрифти, AI-кредити', 'paid stock, music, fonts, AI credits']
  ];
  var STEPS = [
    ['Бриф', 'Brief', 'Ви описуєте задачу й надсилаєте матеріали або приклади.', 'You describe the task and send materials or references.'],
    ['Оцінка', 'Quote', 'Називаю вартість і термін. Фіксуємо їх до початку роботи.', 'I name the price and deadline. We fix both before work starts.'],
    ['Чернетка', 'Draft', 'Показую першу версію, ви даєте правки.', 'I show a first version and you give feedback.'],
    ['Фінал', 'Delivery', 'Отримуєте готові файли в потрібних форматах.', 'You get final files in the formats you need.']
  ];
  var CATS = ['all', 'motion', 'infographics', 'video', 'automation', 'experiments'];

  var lang = 'uk', cat = 'all';
  var $ = function (s) { return document.querySelector(s); };
  function t(k) { return (T[lang] && T[lang][k]) || T.uk[k] || k; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function money(uah, usd, suf) {
    var s = suf === 'm' ? (lang === 'uk' ? '/хв' : '/min') : suf === 'h' ? (lang === 'uk' ? '/год' : '/h') : '';
    if (lang === 'uk') return (suf === 'h' ? '' : 'від ') + String(uah).replace(/\B(?=(\d{3})+$)/g, ' ') + ' грн' + s;
    return (suf === 'h' ? '' : 'from ') + '$' + usd + s;
  }
  function dur(sec) {
    if (sec < 60) return sec + ' ' + t('sec');
    return Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2);
  }

  /* ——— роботи ——— */
  function renderFilters() {
    var box = $('#filters'); box.textContent = '';
    CATS.forEach(function (c) {
      var n = c === 'all' ? WORKS.length : WORKS.filter(function (w) { return w.cat === c; }).length;
      if (!n) return;
      var b = el('button', null, t('cat.' + c)); b.type = 'button';
      b.setAttribute('aria-pressed', String(c === cat));
      b.appendChild(el('span', 'count', n));
      b.addEventListener('click', function () { cat = c; renderFilters(); renderGrid(); });
      box.appendChild(b);
    });
  }
  function renderGrid() {
    var grid = $('#grid'); grid.textContent = '';
    WORKS.filter(function (w) { return cat === 'all' || w.cat === cat; }).forEach(function (w) {
      var b = el('button', 'tile' + (w.vertical ? ' is-vertical' : '')); b.type = 'button';
      var m = el('span', 'tile-media');
      var img = el('img'); img.src = 'media/' + w.id + '/poster.jpg'; img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
      m.appendChild(img); m.appendChild(el('span', 'tile-dur', dur(w.dur)));
      b.appendChild(m);
      b.appendChild(el('span', 'tile-title', w.title[lang] || w.title.uk));
      b.appendChild(el('span', 'tile-ctx', w.ctx[lang] || w.ctx.uk));
      var pv = null;
      b.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'mouse' || pv) return;
        pv = el('video'); pv.muted = true; pv.loop = true; pv.playsInline = true; pv.src = 'media/' + w.id + '/preview.mp4';
        m.insertBefore(pv, m.lastChild); var p = pv.play(); if (p && p.catch) p.catch(function () {});
      });
      b.addEventListener('pointerleave', function () { if (pv) { pv.remove(); pv = null; } });
      b.addEventListener('click', function () { openPlayer(w); });
      grid.appendChild(b);
    });
  }

  /* ——— плеєр ——— */
  var player = $('#player'), stage = $('#playerStage');
  function openPlayer(w) {
    stage.textContent = '';
    var v = el('video'); v.controls = true; v.playsInline = true; v.autoplay = true;
    v.poster = 'media/' + w.id + '/poster.jpg'; v.src = 'media/' + w.id + '/full.mp4';
    stage.appendChild(v);
    $('#playerTitle').textContent = w.title[lang] || w.title.uk;
    $('#playerCtx').textContent = w.ctx[lang] || w.ctx.uk;
    if (player.showModal) player.showModal(); else player.setAttribute('open', '');
  }
  player.addEventListener('close', function () { stage.textContent = ''; });
  player.addEventListener('click', function (e) { if (e.target === player) player.close(); });

  /* ——— ціни, умови, кроки ——— */
  function renderPrices() {
    var box = $('#priceGroups'); box.textContent = '';
    PRICES.forEach(function (g) {
      var d = el('div', 'pg'); d.appendChild(el('h3', null, g[lang]));
      d.appendChild(el('p', null, lang === 'uk' ? g.nuk : g.nen));
      var ul = el('ul');
      g.rows.forEach(function (r) {
        var li = el('li'); li.appendChild(el('span', null, lang === 'uk' ? r[0] : r[1]));
        li.appendChild(el('b', null, money(r[2], r[3], r[4]))); ul.appendChild(li);
      });
      d.appendChild(ul); box.appendChild(d);
    });
    var tb = $('#terms'); tb.textContent = '';
    TERMS.forEach(function (x) { var li = el('li'); li.appendChild(el('b', null, lang === 'uk' ? x[0] : x[1])); li.appendChild(el('span', null, lang === 'uk' ? x[2] : x[3])); tb.appendChild(li); });
    var sb = $('#steps'); sb.textContent = '';
    STEPS.forEach(function (x) { var li = el('li'); li.appendChild(el('b', null, lang === 'uk' ? x[0] : x[1])); li.appendChild(el('span', null, lang === 'uk' ? x[2] : x[3])); sb.appendChild(li); });
  }

  /* ——— мова ——— */
  function setLang(l) {
    lang = T[l] ? l : 'uk';
    document.documentElement.lang = lang;
    document.title = t('doc.title');
    document.querySelectorAll('[data-i18n]').forEach(function (e) { e.textContent = t(e.getAttribute('data-i18n')); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    syncReelLabel(); renderFilters(); renderGrid(); renderPrices();
    try { localStorage.setItem('ksm-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });

  /* ——— ролик у шапці ——— */
  var reel = $('#reel'), toggle = $('#reelToggle');
  function syncReelLabel() { toggle.textContent = t(reel.paused ? 'reel.play' : 'reel.pause'); }
  toggle.addEventListener('click', function () { if (reel.paused) { var p = reel.play(); if (p && p.catch) p.catch(function () {}); } else reel.pause(); });
  reel.addEventListener('play', syncReelLabel); reel.addEventListener('pause', syncReelLabel);
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!calm) { var p = reel.play(); if (p && p.catch) p.catch(function () {}); }

  /* ——— старт ——— */
  var saved = null; try { saved = localStorage.getItem('ksm-lang'); } catch (e) {}
  var q = /[?&]lang=(uk|en)/.exec(location.search);
  var auto = /^(uk|ru)/i.test(navigator.language || '') ? 'uk' : 'en';
  $('#year').textContent = new Date().getFullYear();
  setLang((q && q[1]) || saved || auto);
})();
