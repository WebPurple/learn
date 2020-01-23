---
title: CSS. Продвинутый уровень
templateKey: 'article-page'
order: 2
tags: css, advanced
---

<p align="center">
    <img
        width='100'
        title='CSS'
        src="../images/css3.svg"
    />
</p>

# CSS. Продвинутый уровень

## Function

В CSS существует множество функций:

-   `attr()`
-   `calc()`
-   `linear-gradient()`
-   `radial-gradient()`
-   `repeating-linear-gradient()`
-   `repeating-radial-gradient()`

[Подробнее](https://www.w3schools.com/cssref/css_functions.asp)

[example](http://jsbin.com/lubici/edit?html,css,output)

## Filter

Свойство `filter` позволяет использовать различные эффекты, например, размытие или прозрачность. Обычно фильтры используются для картинок, фона или границ.

```css
filter: url(resources.svg);
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Using 2 and more filters */
filter: contrast(175%) brightness(3%);

/* Global values */
filter: inherit;
filter: initial;
filter: unset;
```

[example](http://jsbin.com/jumalic/edit?html,css,output)

## Transform

Свойство `transform` производит 2D или 3D трансформации элемента. Свойство позволяет вращать, масштабировать, двигать, искажать элементы.

[Подробнее](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).

## Анимации

### Transition

Свойство `transition` позволяет контролировать скорость анимации при изменении каких-либо CSS-свойств.

[Подробнее](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

### Animation

В CSS3 появилась возможность использовать анимации элементов без JS или Flash.

[Подробнее](https://www.w3schools.com/css/css3_animations.asp).

[example](http://jsbin.com/yajikob/edit?html,css,output)

### SVG

SVG - формат изображений для векторной графики. Использовать SVG довольно просто, но важно знать следующее об этом формате:

-   SVG обладают маленьким размером файла, который хорошо сжимается

-   Масштабируется к любому размеру без потери четкости

-   Великолепно выглядит на экранах с высоким разрешением

-   Возможно использовать фильтры и взаимодействовать с SVG

[Подробнее](https://css-tricks.com/using-svg/).

SVG также отлично подходит для обрезки изображения, как было сказано [выше](#clip-path).
