tags: css, basics, fundamentals

# CSS

## Каскад

CSS являются **каскадными** таблицами стилей. Это важно, так как показывает, как именно стили применяются к элементам документа.

CSS-каскад называется так, потому что объявления стилей "каскадируются" на элементы из многих источников.

Каскад комбинирует важность, происхождение, специфичность и порядок источников для принимаемых стилей, чтобы точно и безконфликтно определить, какой именно стиль должен быть применен к конкретному элементу.

Также в CSS действует наследование, благодаря которому элемент может получить какие-либо стили от родительского элемента, если они не определены для него. При этом не все свойства могут наследоваться. Например, свойство `text-size` передается потомкам, а `padding` - нет.

## CSS box model

Все HTML-элементы могут рассматриваться как боксы (boxes).

Термин "box model" используется, когда речь заходит о дизайне и верстке.

CSS-box представляет из себя контейнер, который "оборачивает" HTML-элемент и состоит из марджинов, границ, паддингов и, собственно, контента.

<p align="center">
    <img
        width='400'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1872264/box-model_1_.gif"
    />
</p>

Box model позволяет добавлять границы элементам и задавать отступы между ними.

### Ширина и высота

Ширина и высота, как и говорилось [ранее](../lecture9/css-basics.md#размеры-элементов), определяют ширину и высоту зоны контента. Для вычисления полных размеров элемента к ним надо добавить паддинги, границы и марджины. Например:

```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

Ширина элемента = width + левый padding + правый padding + левая border + правая border + левый margin + правый margin = 350px

Высота элемента = height + верхний padding + нижний padding + верхняя border + нижняя border + верхний margin + нижний margin

### "Схлопывание" марджинов

При соприкасании вертикальных марджинов двух элементов будет применен только больший марджин, в то время как меньший внешний отступ будет проигнорирован.

[example](http://jsbin.com/qazabut/edit?html,css,output)

### Размеры

Есть возможность изменить расчет общих размеров элемента. Для этого используется свойства [`box-sizing`](https://www.w3schools.com/css/css3_box-sizing.asp).

[example](http://jsbin.com/rezugo/edit?html,css,output)

### Margin

Марджины определяют внешние отступы элементов

[example](http://jsbin.com/hagici/edit?html,css,output)

### Padding

Паддинги определяют внутренние отступы элементов, т.е. пространство от границ элементов до контента.

[example](http://jsbin.com/qusuxi/edit?html,css,output)

### Border

CSS позволяет стилизовать стиль, размер и цвет границ элемента.

Также стоит упомянуть о свойстве `border-radius`, с помощью которого можно изменять углы элемента, например, закруглять их.

## Outline

Outline - это линия вокруг элемента (за границами), выделяющая элемент.

[example](http://jsbin.com/ferani/edit?html,css,output)

## Специфичность селекторов

Браузер руководствуется специфичностью селекторов при выборе свойств CSS, которые наиболее релевантны для элемента и будут к нему применены.

Наибольший вес имеют инлайн-стили. Далее по значимости идут селекторы по ID, далее по классам, атрибутам и псевдо-классам. Наименьшим весом обладают селекторы тегов и всевдо-элементов.

<p align="center">
    <img
        width='500'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1871781/specificity-calculationbase_1_.png"
    />
</p>

### !important

При использовании `!important` в объявлении свойства оно перекрывает любое другое объявление.

Использование `!important` считается плохой практикой, его стоит избегать, т.к. оно затрудняет дебаггинг из-за нарушения естественного каскадирования ваших стилей.

### Важные замечания

- Универсальный селектор `*` обладает нулевым весом

- Псевдо-элементы имеют вес (0, 0, 0, 1) в отличие от псевдо-классов (0, 0, 1, 0)

- Псевдо-класс `:not()` не добавляет специфичности селектору

- Значение `!important` может перекрыться только другим `!important`, определенным в CSS позже. Можно считать, что его вес составляет 1, 0, 0, 0, 0

[Подробнее про вес селекторов](http://css.yoksel.ru/specifity/).

[Подробнее про вес селекторов](https://css-tricks.com/specifics-on-css-specificity/).

[Подробнее про вес селекторов](https://habr.com/post/137588/).

[Подробнее про вес селекторов](http://cssspecificity.com/).

[CSS: Селекторы, псевдоклассы. Специфичность и наследование](https://events.yandex.ru/lib/talks/560/).

[Селекторы и производительность. Часть 1](http://webhitech.ru/articles/selectors-performance-part-1/).

## Content

С помощью CSS можно задать контент элементу.

[example](http://jsbin.com/lokegi/edit?html,css,output)

## Верстка с помощью CSS

### Display

Свойство [`display`](http://htmlbook.ru/css/display) может принимать несколько значений, основные из них:

- `inline` (по умолчанию свойство применяется к тегам `<span>`, `<a>`, `<input>`)

- `block` (по умолчанию свойство применяется к тегам `<div>`, `<p>`, `<h1>`)

- `inline-block` (по умолчанию свойство применяется к тегам `<button>`, `<select>`)

Об этом уже упоминалось в [html-разделе](html-fundamentals.md#блочные-элементы).

### Float

Свойство определяет, к какой стороне документа будет выровнен элемент, в то время как остальные элемента будут обтекать его с другой стороны. Когда значение свойства равно `none`, элемент отображается на странице обычным образом.

<p align="center">
    <img
        width='400'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/659430/images/4274987/float.JPG"
    />
</p>

[Подробнее](http://htmlbook.ru/css/float).

Иногда требуется, чтобы другие элементы не обтекали наш элемент, а располагались под ним. Для этого используется свойство [`clear`](http://htmlbook.ru/css/clear).

Может возникнуть ситуация, при которой в контейнере расположены только "плавающие элементы". В этом случае контейнер "схлопнется" по высоте.

<p align="center">
    <img
        width='400'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/659430/images/4275012/clear_by_overflow.JPG"
    />
</p>

Для решения этого может помочь `overflow: hidden;`

<p align="center">
    <img
        width='400'
        title='CSS'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/659430/images/4275016/clear_by_overflow2.JPG"
    />
</p>

Пример верстки с float:

[example](http://jsbin.com/bepeza/9/edit?html,css,output)

### Flex

Верстка флексами более эффективна. Она позволяет выравнивать элементы и распределять пространство между ними в контейнере, даже когда их размер не известен и/или может изменяться (flex = гибкий).

Свойство `flex` определяет, как элемент может расширяться или сжиматься в своем флекс-контейнере. Это свойство объединяет свойства `flex-grow`, `flex-shrink` и`flex-basis`.

CSS-columns не работают с флекс-боксами, как и `float`, `clear` и `vertical-align`.

Для выравнивания по вертикали используются `align-content` (для родителя) и `align-items` (для потомков).

[См. подробнее](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Та же раскладка на флексах:

[example](http://jsbin.com/zududo/4/edit?html,css,output)

[Пример базовой раскладки](https://codepen.io/HugoGiraudel/pen/qIAwr).

### Position

[Свойство `position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) может использоваться для верстки, особенно для панелей навигации, подсказок для полей форм, всплывающих модальных окон и т.д..

Свойство принимает значения `static`, `absolute`, `relative`, `fixed`, `sticky` ([не полностью поддерживается](staticabsoluterelativefixedsticky)).

Этим свойством можно [выравнивать элементы](https://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/).

### CSS Grid

Также можно использовать [CSS Grid](https://habr.com/post/325760/), [поддержка](https://caniuse.com/#feat=css-grid) которого уже достаточна для многих случаев.

## @-rules

@-правило - это инструкция CSS. Каждая инструкция начинается с `@` и содержит одно из ключевых слов.

### @font-face

Данное правило позволяет загружать на веб-страницу специальные шрифты. Правило указывает браузеру скачать шрифт из указанного источника и затем отобразить его, как определено в CSS.

```css
@font-face {
  font-family: "My Web Font";
  src: url("https://fonts.gstatic.com/s/gloriahallelujah/v8/CA1k7SlXcY5kvI81M_R28cNDay8z-hHR7F16xrcXsJw.woff2");
}

body {
  font-family: "My Web Font", "Open Sans", cursive;
}
```

### @import

Это правило обычно указывается в начале файла и указывает на включение внешнего CSS-файла. При этом содержимое внешнего файла вставляется на строку, где указано правило.

[example](http://jsbin.com/rakevu/edit?html,css,output)

### @media

Это правило содержит условия для определения стилей для разных экранов. Условия могут содержать размеры экранов, что очень полезно для адаптивной верстки.

```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```

Медиатипы:

<table>
    <tbody>
    <tr>
        <th style="width: 25%;">Значение</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>all</td>
        <td>Устройства любого медиа-типа</td>
    </tr>
    <tr>
        <td>print</td>
        <td>Принтеры</td>
    </tr>
    <tr>
        <td>screen</td>
        <td>Экраны компьютеров, планшетов, смартфоном и т.д.</td>
    </tr>
    <tr>
        <td>speech</td>
        <td>Скринридеры</td>
    </tr>
    </tbody>
</table>

Медиа функции:

<table>
    <tbody>
    <tr>
        <th style="width: 277px;">Критерий</th>
        <th>Значение критерия</th>
    </tr>
    <tr>
        <td style="width: 277px;">max-height</td>
        <td>Максимальная высота показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">max-width</td>
        <td>Максимальная ширина показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">min-height</td>
        <td>Минимальная высота показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">min-width</td>
        <td>Минимальная ширина показываемой области, например, окна браузера</td>
    </tr>
    <tr>
        <td style="width: 277px;">orientation</td>
        <td>Ориентация (портретная или ландшафтная)</td>
    </tr>
    </tbody>
</table>

[Подробнее о медиа-запросах](http://htmlbook.ru/css/value/media).

[Адаптивный дизайн](https://webref.ru/layout/advanced-html-css/responsive-web-design).

[example](http://jsbin.com/vetoce/edit?html,css,output)

## Списки

CSS-правилами можно задавать стиль спискам.

[example](http://jsbin.com/capofe/edit?html,css,output)

## Таблица

Также есть возможность работы с таблицами.

[example](http://jsbin.com/firosa/edit?html,css,output)

## Z-index

При позиционировании элементов они могут перекрывать друг друга. Свойство `z-index` определяет, какой элемент должен быть расположен спереди, а какой - сзади.

В некоторых случаях можно использовать свойство прозрачности `opacity`, чтобы добиться тех же результатов.

[example](http://jsbin.com/xupelekafe/edit?html,css,output)

## Overflow

Свойство `overflow` отвечает за отображение контента, выходящего за пределы своего контейнера.

[example](http://jsbin.com/fekume/edit?html,css,output)

## Скрытие элемента

Для скрытия элемента можно использовать разные методы.

- `display: none;`

- `visibility: hidden;`

- и др.

[example](http://jsbin.com/saxupaf/edit?html,css,output)

Важно заметить, что в случае `display: none;` элемент выбивается из потока документа.
