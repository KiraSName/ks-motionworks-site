#!/usr/bin/env python3
"""Генерує сторінки w/<id>.html для кожної роботи з data/works.js.

Навіщо: посилання ksmotionworks.com/w/<id> показує в Telegram, Viber, Facebook
назву роботи та її постер, а людину одразу перекидає на сайт із відкритою роботою.
Запускати після кожної зміни data/works.js:  python3 tools/make_share_pages.py
"""
import html, json, os, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://ksmotionworks.com'

src = open(os.path.join(ROOT, 'data', 'works.js'), encoding='utf-8').read()
src = src[src.index('['):src.rindex(']') + 1]
works = json.loads(src)

out = os.path.join(ROOT, 'w')
shutil.rmtree(out, ignore_errors=True)
os.makedirs(out)

TPL = """<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} — Ks Motionworks</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Ks Motionworks">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{img}">
<meta property="og:locale" content="uk_UA">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{img}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script>location.replace('/' + location.search + '#w={id}');</script>
<style>body{{margin:0;min-height:100vh;display:grid;place-items:center;background:#0B1640;color:#EEF1FB;font:16px system-ui,sans-serif}}a{{color:#FFD23F}}</style>
</head>
<body>
<p><a href="/#w={id}">{title} — Ks Motionworks</a></p>
</body>
</html>
"""

urls = []
for w in works:
    wid = w['id']
    if not re.fullmatch(r'[\w-]+', wid):
        raise SystemExit('bad id: ' + wid)
    poster = 'poster.webp' if w.get('type') == 'image' else 'poster.jpg'
    t = w['title']['uk']
    d = w['ctx']['uk'] + ' · Портфоліо Ks Motionworks: моушн-дизайн і автоматизація After Effects'
    url = SITE + '/w/' + wid
    page = TPL.format(title=html.escape(t), desc=html.escape(d), url=url,
                      img=SITE + '/media/' + wid + '/' + poster, id=wid)
    open(os.path.join(out, wid + '.html'), 'w', encoding='utf-8').write(page)
    urls.append(url)

# sitemap: головні сторінки + сторінки робіт
sm = os.path.join(ROOT, 'sitemap.xml')
s = open(sm, encoding='utf-8').read()
s = re.sub(r'\s*<url><loc>' + re.escape(SITE) + r'/w/[^<]+</loc></url>', '', s)
s = s.replace('</urlset>', ''.join('\n  <url><loc>%s</loc></url>' % u for u in urls) + '\n</urlset>')
open(sm, 'w', encoding='utf-8').write(s)
print(len(urls), 'share pages')
