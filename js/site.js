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
      'works.h2': 'Роботи', 'works.lead': 'Натисніть на роботу, щоб подивитися її повністю.',
      'cat.all': 'Усі', 'cat.motion': 'Заставки й моушн', 'cat.infographics': 'Інфографіка й карти',
      'cat.video': 'Відео й реклама', 'cat.creatives': 'Рекламні креативи', 'cat.automation': 'Автоматизація AE', 'cat.experiments': 'AI-експерименти',
      'prices.h2': 'Послуги й ціни',
      'prices.lead': 'Ціни стартові. Точну суму й термін називаю після короткого брифу або перегляду вашого проєкту.',
      'steps.h3': 'Як проходить замовлення',
      'hourly.h3': 'Погодинна робота', 'terms.h3': 'Умови співпраці',
      'cur.note': 'Ціни в доларах — округлений орієнтир, приблизно 45 грн за $1. Точну валюту й суму фіксуємо під час погодження проєкту.',
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
      'works.h2': 'Work', 'works.lead': 'Click a piece to see it in full.',
      'cat.all': 'All', 'cat.motion': 'Openers & motion', 'cat.infographics': 'Infographics & maps',
      'cat.video': 'Video & ads', 'cat.creatives': 'Ad creatives', 'cat.automation': 'AE automation', 'cat.experiments': 'AI experiments',
      'prices.h2': 'Services & prices',
      'prices.lead': 'These are starting prices. I give an exact quote and deadline after a short brief or a look at your project.',
      'steps.h3': 'How an order goes',
      'hourly.h3': 'Hourly work', 'terms.h3': 'Terms',
      'cur.note': 'Prices in hryvnias are the base; dollar prices are a rounded guide at about 45 UAH per $1. The exact currency and amount are fixed when we agree on the project.',
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

  /* ——— ціни з прайсу 2026 ———
     рядок: [назва uk, назва en, грн, $, суфікс]
     грн/$ — число («від …») або рядок (показується як є); суфікс: 'm' = за хвилину, 'h' = за годину */
  var PRICES = [
    { uk: 'Анімація та motion graphics', en: 'Animation & motion graphics',
      nuk: 'Для реклами, соцмереж, YouTube, корпоративних та broadcast-проєктів.',
      nen: 'For ads, social media, YouTube, corporate and broadcast projects.',
      rows: [
        ['Проста анімація готового логотипу', 'Simple animation of a ready logo', 1500, 35],
        ['Індивідуальна 2D-анімація логотипу', 'Custom 2D logo animation', 3000, 70],
        ['Складна / premium-анімація логотипу', 'Complex / premium logo animation', 5500, 125],
        ['Intro / Outro', 'Intro / Outro', 2500, 55],
        ['Комплект Intro + Outro', 'Intro + Outro set', 4000, 90],
        ['Анімований титр / Lower Third', 'Animated title / lower third', 700, 15],
        ['Пакет із 5 титрів', 'Pack of 5 titles', 2500, 55],
        ['Анімована інфографіка', 'Animated infographic', 2500, 55],
        ['Анімація карти / маршруту', 'Map / route animation', 2500, 55],
        ['Motion Design ролик до 15 секунд', 'Motion design video up to 15 seconds', 3000, 70],
        ['Motion Design ролик до 30 секунд', 'Motion design video up to 30 seconds', 5000, 110],
        ['Motion Design ролик до 60 секунд', 'Motion design video up to 60 seconds', 8000, 180],
        ['Lottie-анімація', 'Lottie animation', 1500, 35],
        ['Проста 3D-анімація / інтеграція 3D', 'Simple 3D animation / 3D integration', 3000, 70],
        ['Адаптація готового шаблону After Effects', 'Adapting a ready After Effects template', 1500, 35],
        ['Створення власного шаблону After Effects', 'Building a custom After Effects template', 4000, 90]
      ],
      fuk: 'У вартість входить базова анімація, збірка сцени та експорт. Складний дизайн з нуля, 3D, платні assets і додаткові формати оцінюються окремо.',
      fen: 'The price covers basic animation, scene assembly and export. Complex design from scratch, 3D, paid assets and extra formats are quoted separately.' },
    { uk: 'Відеомонтаж', en: 'Video editing',
      nuk: 'Від швидкого контенту для соцмереж до рекламних роликів з активним motion design.',
      nen: 'From quick social content to ad videos with heavy motion design.',
      rows: [
        ['Reel / Shorts / TikTok до 60 секунд', 'Reel / Shorts / TikTok up to 60 seconds', 1200, 30],
        ['Reel з активним motion design', 'Reel with heavy motion design', 2500, 55],
        ['Рекламний ролик до 15 секунд', 'Ad video up to 15 seconds', 2000, 45],
        ['Рекламний ролик до 30 секунд', 'Ad video up to 30 seconds', 3500, 80],
        ['Рекламний ролик до 60 секунд', 'Ad video up to 60 seconds', 5500, 125],
        ['Відео 5–10 хвилин', 'Video 5–10 minutes', 2500, 55],
        ['Відео 10–20 хвилин', 'Video 10–20 minutes', 4500, 100],
        ['Монтаж інтерв’ю / подкасту', 'Interview / podcast edit', 2500, 55],
        ['Чистка та базова обробка аудіо', 'Audio cleanup and basic processing', 500, 12],
        ['Пошук музики, фото, відеоматеріалів', 'Sourcing music, photos, footage', 500, 12]
      ] },
    { uk: 'Рекламні креативи та дизайн', en: 'Ad creatives & design',
      nuk: 'Статичні банери, сторіс і візуали для реклами.',
      nen: 'Static banners, stories and ad visuals.',
      rows: [
        ['Статичний рекламний креатив', 'Static ad creative', 700, 15],
        ['3 варіанти креативу', '3 creative variants', 1800, 40],
        ['Адаптація під додатковий формат', 'Adapting to an extra format', '250–400 грн', '$6–10'],
        ['Інфографіка / data visual', 'Infographic / data visual', 1000, 25],
        ['AI + Photoshop композиція', 'AI + Photoshop composite', 1000, 25],
        ['AI-зображення для реклами з обробкою', 'AI image for ads with retouching', 800, 20]
      ] },
    { uk: 'Переклад, субтитри та AI-озвучка', en: 'Translation, subtitles & AI dubbing',
      nuk: 'Повний цикл локалізації відео: від тексту до готового синхронізованого ролика. Ціна за хвилину відео.',
      nen: 'Full video localization: from text to a finished, synced video. Price per minute of video.',
      rows: [
        ['AI-озвучка, 1 голос, готовий текст', 'AI voice-over, 1 voice, ready script', 270, 6, 'm'],
        ['AI-озвучка + синхронізація з відео', 'AI voice-over + sync to video', 360, 8, 'm'],
        ['Складна озвучка / декілька спікерів', 'Complex voice-over / several speakers', 450, 10, 'm'],
        ['Додатковий спікер', 'Additional speaker', '+450 грн', '+$10'],
        ['Транскрибація', 'Transcription', 90, 2, 'm'],
        ['Переклад / адаптація тексту', 'Translation / text adaptation', 135, 3, 'm'],
        ['Субтитри + таймінг', 'Subtitles + timing', 135, 3, 'm'],
        ['Повна локалізація відео', 'Full video localization', 540, 12, 'm'],
        ['Складна багатоголосна локалізація', 'Complex multi-voice localization', 675, 15, 'm'],
        ['Lip-sync', 'Lip-sync', 'окремий розрахунок', 'custom quote']
      ],
      fuk: 'Приклад: 29 хв × $10/хв = $290, плюс 7 додаткових спікерів × $10 = $70. Разом $360 без lip-sync. Платні AI-сервіси, великі обсяги voice credits, нетипова кількість перегенерацій і складний вихідний звук можуть рахуватися окремо.',
      fen: 'Example: 29 min × $10/min = $290, plus 7 extra speakers × $10 = $70. Total $360 without lip-sync. Paid AI services, large voice-credit volumes, unusual numbers of regenerations and difficult source audio may be billed separately.' },
    { uk: 'Автоматизація After Effects', en: 'After Effects automation',
      nuk: 'Expressions, скрипти та production pipeline: менше ручної роботи, швидший випуск, менше помилок.',
      nen: 'Expressions, scripts and production pipelines: less manual work, faster output, fewer mistakes.',
      rows: [
        ['Простий expression', 'Simple expression', 500, 12],
        ['Система expressions / контролерів', 'Expression / controller system', 1500, 35],
        ['Автоматизація існуючого AE-проєкту', 'Automating an existing AE project', 2000, 45],
        ['Простий JSX / ExtendScript', 'Simple JSX / ExtendScript', 1500, 35],
        ['Скрипт з інтерфейсом', 'Script with a UI', 3500, 80],
        ['Автоматизація через CSV / JSON', 'Automation from CSV / JSON', 4500, 100],
        ['Автозаміна фото, текстів, відео', 'Auto-replacing photos, text, video', 3000, 70],
        ['Автоматична генерація композицій', 'Automatic comp generation', 4000, 90],
        ['Автоматизація великого production pipeline', 'Automating a large production pipeline', 8000, 180],
        ['Оптимізація існуючого шаблону', 'Optimizing an existing template', 2000, 45],
        ['Пошук і виправлення помилок у скрипті', 'Script debugging and fixes', 1000, 25],
        ['Власний інструмент / панель для AE', 'Custom AE tool / panel', 8000, 180],
        ['Технічна консультація After Effects', 'After Effects technical consulting', 1000, 25, 'h']
      ],
      fuk: 'Автоматизація оцінюється не за кількістю рядків коду, а за логікою системи, кількістю нестандартних випадків і обсягом ручної роботи, яку вона замінює.',
      fen: 'Automation is priced not by lines of code but by the system’s logic, the number of edge cases and the amount of manual work it replaces.' }
  ];
  var HOURLY = [
    ['Моушн', 'Motion', 700, 16], ['Монтаж', 'Editing', 600, 14],
    ['Технічна робота в AE', 'Technical AE work', 800, 18], ['Автоматизація', 'Automation', 1000, 25]
  ];
  var TERMS = [
    ['1 500 грн / $35', '1,500 UAH / $35', 'Мінімальне замовлення', 'Minimum order'],
    ['2 раунди', '2 rounds', 'невеликих правок входять у ціну', 'of small revisions included'],
    ['+30%', '+30%', 'терміново, до 24 годин', 'rush, within 24 hours'],
    ['+50%', '+50%', 'робота день у день', 'same-day work'],
    ['+20%', '+20%', 'вихідний проєкт, якщо не входить у ТЗ', 'source project, if not in the brief'],
    ['Окремо', 'Extra', 'платні стоки, музика, шрифти, AI- і voice-кредити', 'paid stock, music, fonts, AI and voice credits'],
    ['Від 5 проєктів', '5+ projects', 'на місяць — індивідуальний тариф', 'a month get an individual rate'],
    ['Пакетом', 'As a package', 'великий обсяг оцінюю етапами', 'large volumes quoted in stages']
  ];
  var STEPS = [
    ['Бриф', 'Brief', 'Ви описуєте задачу й надсилаєте матеріали або приклади.', 'You describe the task and send materials or references.'],
    ['Оцінка', 'Quote', 'Називаю вартість і термін. Фіксуємо їх до початку роботи.', 'I name the price and deadline. We fix both before work starts.'],
    ['Чернетка', 'Draft', 'Показую першу версію, ви даєте правки.', 'I show a first version and you give feedback.'],
    ['Фінал', 'Delivery', 'Отримуєте готові файли в потрібних форматах.', 'You get final files in the formats you need.']
  ];
  var CATS = ['all', 'motion', 'infographics', 'video', 'creatives', 'automation', 'experiments'];

  var lang = 'uk', cat = 'all';
  var $ = function (s) { return document.querySelector(s); };
  function t(k) { return (T[lang] && T[lang][k]) || T.uk[k] || k; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function money(uah, usd, suf) {
    if (typeof uah === 'string') return lang === 'uk' ? uah : usd;
    var s = suf === 'm' ? (lang === 'uk' ? '/хв' : '/min') : suf === 'h' ? (lang === 'uk' ? '/год' : '/h') : '';
    var from = suf === 'h' ? '' : (lang === 'uk' ? 'від ' : 'from ');
    if (lang === 'uk') return from + String(uah).replace(/\B(?=(\d{3})+$)/g, ' ') + ' грн' + s;
    return from + '$' + usd + s;
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
      var isImg = w.type === 'image';
      var b = el('button', 'tile' + (w.square ? ' is-square' : w.vertical ? ' is-vertical' : '')); b.type = 'button';
      var m = el('span', 'tile-media');
      var img = el('img'); img.src = 'media/' + w.id + (isImg ? '/poster.webp' : '/poster.jpg'); img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
      m.appendChild(img);
      if (!isImg) m.appendChild(el('span', 'tile-dur', dur(w.dur)));
      b.appendChild(m);
      b.appendChild(el('span', 'tile-title', w.title[lang] || w.title.uk));
      b.appendChild(el('span', 'tile-ctx', w.ctx[lang] || w.ctx.uk));
      var pv = null;
      b.addEventListener('pointerenter', function (e) {
        if (isImg || e.pointerType !== 'mouse' || pv) return;
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
    if (w.type === 'image') {
      var im = el('img'); im.src = 'media/' + w.id + '/image.webp'; im.alt = w.title[lang] || w.title.uk;
      stage.appendChild(im);
    } else {
      var v = el('video'); v.controls = true; v.playsInline = true; v.autoplay = true;
      v.poster = 'media/' + w.id + '/poster.jpg'; v.src = 'media/' + w.id + '/full.mp4';
      stage.appendChild(v);
    }
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
      d.appendChild(ul);
      if (g.fuk) d.appendChild(el('p', 'pg-note', lang === 'uk' ? g.fuk : g.fen));
      box.appendChild(d);
    });
    var hb = $('#hourly'); hb.textContent = '';
    HOURLY.forEach(function (x) {
      var li = el('li'); li.appendChild(el('span', null, lang === 'uk' ? x[0] : x[1]));
      li.appendChild(el('b', null, lang === 'uk' ? String(x[2]).replace(/\B(?=(\d{3})+$)/g, ' ') + ' грн' : '$' + x[3]));
      li.appendChild(el('small', null, lang === 'uk' ? '$' + x[3] + ' / год' : String(x[2]).replace(/\B(?=(\d{3})+$)/g, ',') + ' UAH / h'));
      hb.appendChild(li);
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
