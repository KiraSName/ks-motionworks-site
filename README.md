# Ks Motionworks — сайт-портфоліо

Статичний сайт без збірки: відкрийте `index.html` або завантажте папку на будь-який хостинг.

## Структура
- `index.html` — сторінка (тексти українською в розмітці)
- `js/site.js` — переклади UA/EN, ціни (`PRICES`), умови, кроки
- `data/works.js` — список робіт
- `media/<id>/` — `full.mp4` (720p), `preview.mp4` (6 с, без звуку), `poster.jpg`
- `media/hero-reel.mp4` — ролик у шапці
- `w/` — сторінки-посилання на роботи (генеруються `tools/make_share_pages.py`, руками не правити)

## Як додати роботу
1. Створити `media/<id>/` з трьома файлами (full.mp4 до 25 МБ, preview.mp4, poster.jpg): `tools/encode_work.sh <оригінал> <id> <0|1 вертикаль> <старт превʼю> <час постера>` — робить усі три, на full.mp4 ставить водяний знак.
2. Додати рядок у `data/works.js` (id, cat, title uk/en, ctx uk/en, dur у секундах, vertical).
3. Запустити `python3 tools/make_share_pages.py` — оновить сторінки `w/<id>.html` (посилання «Поділитися» з прев'ю) і `sitemap.xml`.
4. Залити зміни в GitHub — Cloudflare оновить сайт сам.

## Захист відео
- Усі full.mp4 мають водяний знак KS · ksmotionworks.com (правий нижній кут; винятки: info-demography — правий верхній, info-happiness-europe — нижче, sport-cluster-billiards — по центру внизу).
- У плеєрі немає кнопки «Завантажити» і меню правої кнопки миші. Повністю заборонити збереження відео в браузері неможливо — знак лишається на скачаному файлі.

## Посилання на роботи
- Кнопка «Поділитися» в плеєрі копіює `https://ksmotionworks.com/w/<id>` (на телефоні — системне меню «Поділитися»).
- `w/<id>.html` містить назву й постер для прев'ю в месенджерах і перекидає на `/#w=<id>`, де робота відкривається сама.
- Робота в кількох форматах: поле `formats` у `data/works.js` дає перемикач у плеєрі.

## Публікація (GitHub + Cloudflare Pages)
1. GitHub → New repository `ks-motionworks-site` → завантажити вміст цієї папки.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → обрати репозиторій.
   Build command: порожньо. Output directory: `/`.
3. Custom domains → додати свій домен.
