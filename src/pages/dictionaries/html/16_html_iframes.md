---
title: Фреймы
templateKey: 'article-page'
order: 16
---

# Фреймы

`iframe` используется для того, чтобы отображать web-страницу внутри другой web-страницы.

<iframe src="../../" height="300" width="100%"></iframe>

## Синтаксис

Фрейм определяется при помощи тега `<iframe>`:

```html
<iframe src="URL"></iframe>
```

В атрибуте `src` указывается URL на встраиваемую web-страницу.

## Адресат ссылки

`iframe` может использоваться в качестве адресата ссылки.

В этом случае атрибут `target` у ссылки должен обращаться к атрибуту `name` у фрейма:

```html
<iframe src="./index.html" name="iframe_a"></iframe>

<p>
    <a href="https://webpurple.github.io/learn/" target="iframe_a">Webpurple Learn</a>
</p>
```

<iframe src="./" id="iframe_a" name="iframe_a" height="300" width="100%"></iframe>

<p>
    <a href="/" target="iframe_a">Главная Webpurple Learn</a>
</p>
