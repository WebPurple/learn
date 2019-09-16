---
title: Изображения
templateKey: 'article-page'
order: 12
---

# Изображения

```html
<img src="webpurple_logo.png" alt="WebPurple logo">
```

> <img src="/img/wp.png" alt="WebPurple logo" width="160" height="100">

## Синтаксис

Изображения помещаются на страницу при помощи тега `<img>`. Это пустой тег, он содержит только атрибуты и не имеет закрывающего тега.

В атрибуте `src` указывается путь к изображению:

```html
<img src="url">
```

## Атрибут `alt`

В нем указывается текст, который будет отображаться, если изображение не найдено или не может отобразиться по каким-либо еще причинам. Значение `alt` должно описывать изображение:

```html
<img src="broken_url" alt="WebPurple logo">
```

> <img src="" alt="WebPurple logo" width="160" height="100">

_Атрибут `alt` является обязательным. Без него HTML-документы не будут валидироваться правильно_

## Размеры изображения

Вы можете указать ширину и высоту изображения, указав атрибуты `width` и `height`:

```html
<img src="webpurple_logo.png" alt="WebPurple logo" width="160" height="100">
```

... или при помощи CSS ([атрибут `<style>`](html_styles))

```html
<img src="webpurple_logo.png" alt="WebPurple logo" style="width: 160px; height: 100px">
```

## Анимированные изображения

HTML поддерживает анимированные GIF'ки:

```html
<img src="thumbs_up.gif" alt="Great job">
```

> <img src="images/thumbs_up.gif" alt="Great job">

## Фоновое изображение

Чтобы сделать изображение фоновым, примените к элементу CSS-свойство `background-image`:

```html
<p style="background-image: url('clouds.png')">
    Текст на фоне изображения
</p>
```

> <p style="background-image: url('images/clouds.png')">
>     <span style='color:white'>Текст на фоне изображения</span>
> </p>

## Элемент `<picture>`

В HTML5 был представлен новый элемент `<picture>`, добавляющий большей гибкости при указании источников изображения.

`<picture>` содержит несколько `<source>` элементов. Таким образом, браузер может выбрать то изображение, которое лучше подходит текущему размеру окна или устройству.

Каждый `<source>` элемент имеет атрибуты, описывающие когда это изображение лучше подходит.

Браузер выберет первый элемент `<source>`, значение атрибута которого совпало, и проигнорирует остальные `<source>` элементы.

```html
<picture>
  <source media="(min-width: 720px)" srcset="big_bear.jpg">
  <source media="(max-width: 720px)" srcset="skinny_bear.jpg">
  <img src="both.jpg" alt="Bear" style="width:auto;">
</picture>
```

_Всегда указывайте элемент `<img>` последним дочерним элементом. Он будет использован браузерами, которые не поддерживают `<picture>`, или если ни один из `<source>` тегов не подошел_

[Попробовать в песочнице](https://codepen.io/anon/pen/dqRjYQ?editors=1000)
