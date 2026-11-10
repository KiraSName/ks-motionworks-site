# Ks Motionworks — сайт-портфоліо

Статичний сайт без збірки: відкрийте `index.html` або завантажте папку на будь-який хостинг.

## Структура
- `index.html` — сторінка (тексти українською в розмітці)
- `js/site.js` — переклади UA/EN, ціни (`PRICES`), умови, кроки
- `data/works.js` — список робіт
- `media/<id>/` — `full.mp4` (720p), `preview.mp4` (6 с, без звуку), `poster.jpg`
- `media/hero-reel.mp4` — ролик у шапці

## Як додати роботу
1. Створити `media/<id>/` з трьома файлами (full.mp4 до 25 МБ, preview.mp4, poster.jpg).
2. Додати рядок у `data/works.js` (id, cat, title uk/en, ctx uk/en, dur у секундах, vertical).
3. Залити зміни в GitHub — Cloudflare Pages оновить сайт сам.

## Публікація (GitHub + Cloudflare Pages)
1. GitHub → New repository `ks-motionworks-site` → завантажити вміст цієї папки.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → обрати репозиторій.
   Build command: порожньо. Output directory: `/`.
3. Custom domains → додати свій домен.
