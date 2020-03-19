---
title: HTML. Начальный уровень
templateKey: 'article-page'
order: 1
tags: html, basics, fundamentals
---

![HTML](../images/HTML5_logo_small.png "HTML")

# HTML. Начальный уровень

**HTML** является аббревиатурой для Hyper Text Markup Language. Язык разметки HTML служит для описания веб-страниц. Он представляет собой набор тегов для разметки, которые описывают контент документа.

HTML-документы, также называемые веб-страницами, содержат HTML-теги и обычный текст.

HTML - язык разметки, что означает, что он предназначен для описания структуры веб-страницы, чтобы браузер знал, как ее отобразить. При посещении веб-страницы браузер отрисовывает код HTML.

Любой HTML-документ представляет собой множество элементов с открывающим и закрывающим **тегом**, т.е. специальным маркером, который определяет свойства отображения и расположения его внутреннего содержимого.

## Структура страницы

`html` - корневой элемент, начинающий и заканчивающий веб-страницу.

`head` - инструкции для браузера. Они не видны пользователю, кроме `<title>`. [Подробнее](http://htmlbook.ru/html/head).

`body` - содержит весь видимый контент. [Подробнее](http://htmlbook.ru/html/body).

Пример HTML-документа:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title goes here</title>
  </head>
  <body>
    Content goes here!
  </body>
</html>
```

`DOCTYPE` определяет тип документа и версию HTML, чтобы браузер корректно его обработал.

В процессе развития HTML было несколько версий языка, в настоящее время используется HTML5.

[См. подробнее](http://htmlbook.ru/html/%21doctype).

## Кодировка

Важно упомянуть о кодировке символов веб-страницы. Для этого используется тег `meta`:

```html
<meta http-equiv="Content-Type" content="text/html; charset=encoding name">
```

Для операционных систем семейства Windows и кириллицы обычно используется utf-8 или windows-1251:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Encoding</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  <body>
    <p>
      Cyrillic
    </p>
  </body>
</html>
```

## Meta-теги

Мета-теги — часть программного HTML-кода, заключенная между тегом `<head>...</head>` (заголовок страницы). Эти атрибуты не являются обязательными: они не видны пользователю, но сообщают определенную информацию поисковой системе (описание, заголовок, ключевые слова и т.д.).

`description` - краткий «анонс» страницы в результатах поиска. Несколько коротких предложений, в которых используются ключевые слова (не все — наиболее значимые) конкретной страницы. Рекомендуемая длина meta тега — 160-200 символов.

`keywords` - сообщает поисковому роботу ключевые слова, под которые «заточен» контент. Поисковый робот сверяет фразы в содержимом страницы с указанными в данном теге, а полученные результаты учитывает в дальнейшем при определении позиций ресурса. Сейчас поисковики не придают данному атрибуту такой вес, как раньше. Но грамотное использование его не будет лишним.

```html
<!DOCTYPE html>
<html>
 <head>
  <title>Meta</title>
  <meta name="description" content="WebPurple - front-end community">
  <meta name="keywords" content="Web, Front-end, courses, community">
 </head> 
 <body> 
  <p>...</p>
 </body>
</html>
```

## HTML-теги

HTML-теги представляют собой ключевые слова, заключенные в угловые скобки, например, `<html>`.

Часто теги являются парными, т.е. существует открывающий (`<b>`) и закрывающий (`</b>`) теги.

Теги не являются регистрозависимыми, т.е. `<b>` воспринимается браузером так же, как и `<B>`. Однако рекомендуется использовать нижний регистр.

Каждый HTML-тег влияет на свое содержимое каким-либо образом. Например, тег `<i>` предназначен для отображения текста курсивом, тег `<h1>` определяет заголовок первого уровня, а тег `<img>` предназначен для отображения на веб-странице изображения.

Все теги и их предназначение можно посмотреть [тут](http://htmlbook.ru/html).

### Атрибуты

Атрибуты используются для расширения возможностей тегов, для добавления гибкости и для управления содержимым контейнера.

Иными словами, тег говорит браузеру, **что** нужно сделать, а атрибут - **как**. Например, атрибут `align="center"` означает, что содержимое нужно выровнять по центру.

![Attr](../images/attr_1_.png "Attr")

### Комментарии

Для вставки комментариев используются теги `<!--` и `-->`.

Комментарии не отображаются браузером. Они могут помочь в разработке и отладке HTML.

### Теги по цели

Теги можно разделить по цели их применения.

#### Секционные элементы

Заголовки позволяют разделить текст на секции.

```html
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
```
[Пример](http://jsbin.com/fezoca/edit?html,output)

Большинство секционных элементов было добавлено в стандарте языка HTML5. Вот некоторые из них:

`<article>`	- раздел контента, образующий независимую часть документа или сайта	

`<section>`	- логическая область (раздел) страницы, обычно с заголовком	

`<nav>` - раздел документа, содержащий навигационные ссылки по сайту

`<aside>` - контент страницы, имеющий косвенное отношение к основному контенту

`<header>` - секция для вводной информации сайта или группы навигационных ссылок

`<footer>` - секция для нижнего колонтитула документа или раздела

#### Группировка содержимого

##### Division

Тег `<div>` (division) обозначает блочный элемент и предназначен для выделения части контента для его [стилизации](css-basics).
```html
<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, ligula vitae rhoncus elementum, justo orci lacinia diam, vitae egestas mi dolor nec dui. Vivamus scelerisque dui quis mattis finibus. Curabitur erat velit, bibendum eu odio non, malesuada efficitur dolor. Morbi in vestibulum justo.
</div>
```
```css
div {
  width: 300px;
  background-color: lightgreen;
}
```
<div style='width: 300px;background-color: lightgreen'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, ligula vitae rhoncus elementum, justo orci lacinia diam, vitae egestas mi dolor nec dui. Vivamus scelerisque dui quis mattis finibus. Curabitur erat velit, bibendum eu odio non, malesuada efficitur dolor. Morbi in vestibulum justo.
</div>

##### Параграф

Тег `<p>` определяет параграф текста. По умолчанию параграфы разделены небольшими отступами, называемыми margin.

[Пример](http://jsbin.com/yuqemon/edit?html,output)

[См. подробнее о блочных элементах](../topic10/html-fundamentals#Блочные-элементы).

##### Маркированный список

Тег `<ul>` создает маркированный список. Каждый элемент списка должен быть заключен в парный тег `<li>`.

##### Нумерованный список

Тег `<ol>` создает нумерованный список. Каждый элемент списка должен быть заключен в парный тег `<li>`.

##### Вложенные списки

Списки могут быть вложенными.
```html
<ol>
  <li>Hamburger</li>
  <li>Pizza
    <ul>
      <li>Tomato</li>
      <li>Cheese</li>
      <li>Sausage</li>
    </ul
  </li>
  <li>Chips</li>
  <li>Pie</li>
</ol>
```
<ol>
  <li>Hamburger</li>
  <li>Pizza
    <ul>
      <li>Tomato</li>
      <li>Cheese</li>
      <li>Sausage</li>
    </ul
  </li>
  <li>Chips</li>
  <li>Pie</li>
</ol>

##### Cписок определений

Тег `<dl>` создает список определений. Он включает тег `<dt>`, т.е. сам термин, и тег `<dd>`, т.е. определение термина.
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  
  <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>
```
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>

##### Горизонтальная линия

Тег `<hr>` (horizontal rule) добавляет горизонтальную линию. Не имеет закрывающего тега.
```html
<p>One</p>
<hr>
<p>Two</p>
<hr>
```
<p>One</p>
<hr>
<p>Two</p>
<hr>

#### Встроенное содержимое

##### Изображения

Для вставки изображений используется тег `<img>`. Источник изображения определяется атрибутом `src`, текст, показываемый при отсутствии изображения, определяется атрибутом `alt`.

[Пример](http://jsbin.com/xivuli/edit?html,output)

##### Встроенные элементы

Тег `<iframe>` (HTML Inline Frame Element) определяет встроенную в веб-страницу область, которая может отображать содержимое отдельно взятого документа (например, *.pdf), медиа-контента или другого веб-сайта в заданном пространстве. Содержимое внутри области существует независимо от окружающей страницы.

##### Аудио и видео

Тег `<audio>` добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице. Путь к файлу задается через атрибут `src` или вложенный тег `<source>`. Внутри контейнера `<audio>` можно написать текст, который будет выводиться в браузерах, не работающих с этим тегом.

Тег `<video>` добавляет, воспроизводит и управляет настройками видеоролика на веб-странице. Путь к файлу задается через атрибут `src` или вложенный тег `<source>`. 

#### Формы

Формы предназначены для ввода пользовательской информации и ее сохранения. Подробнее в [лекции № 11](../topic11).

#### Форматирование текста

##### Ссылки

Для создания ссылок в документе служит тег `<a>`. Атрибут `href` определяет адрес документа, на который следует перейти, `name` устанавливает имя якоря внутри документа.
```html
<a href="https://www.webpurple.net/">Our WebPurple Community</a>
```
<a href="https://www.webpurple.net/">Our WebPurple Community</a>

Однако, большинство форматирующих тегов больше не используются. Для этой цели обычно используется CSS.

[Пример 1](http://jsbin.com/wubitu/edit?html,output)

[Пример 2](http://jsbin.com/wowaza/edit?html,output)

#### Табличные данные

В HTML для создания таблицы используется тег `<table>`. Строки таблицы создаются с помощью тега `<tr>`, ячейки - `<td>`. Многие таблицы имеют заголовки, для этого используется тег `<th>`.

Для того, чтобы ячейка таблицы объединяла несколько столбцов, используется атрибут `colspan`. Атрибут `rowspan` аналогичен `colspan`, но служит для объединения строк.

Таблицы могут быть разделены на три части: хедер (head), основную (body), футер (foot). Их предназначение аналогично соответствующим частям веб-страницы. Для их создания используются теги `<thead>`, `<tbody>`, `<tfoot>`.

Например:

```html
<table border="1">

  <thead>
    <tr>
      <th colspan="2">Caption 1</th>
      <th>Caption 2</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Row 1.1</td>
      <td>Row 1.2</td>
      <td>Row 1.3</td>
    </tr>
    <tr>
      <td>Row 2.1</td>
      <td colspan="2">Row 2.2</td>
    </tr>
    <tr>
      <td rowspan="2">Row 3.1</td>
      <td>Row 3.2</td>
      <td>Row 3.3</td>
    </tr>
    <tr>
      <td>Row 3.4</td>
      <td>Row 3.5</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Footer</td>
    </tr>
  </tfoot>

</table>
```

<table border="1">
  <thead>
    <tr>
      <th colspan="2">Caption 1</th>
      <th>Caption 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1.1</td>
      <td>Row 1.2</td>
      <td>Row 1.3</td>
    </tr>
    <tr>
      <td>Row 2.1</td>
      <td colspan="2">Row 2.2</td>
    </tr>
    <tr>
      <td rowspan="2">Row 3.1</td>
      <td>Row 3.2</td>
      <td>Row 3.3</td>
    </tr>
    <tr>
      <td>Row 3.4</td>
      <td>Row 3.5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Footer</td>
    </tr>
  </tfoot>
</table>

## HTML5

Это пятая версия стндарта HTML. Хотя стандарт был завершён только в 2014 году (предыдущая, четвёртая, версия была опубликована аж в 1999 году), уже с 2013 года браузерами оперативно осуществлялась поддержка, а разработчиками — использование рабочего прототипа. Цель разработки HTML5 — улучшение уровня поддержки мультимедиа-технологий с одновременным сохранением обратной совместимости, удобочитаемости кода для человека и простоты анализа для парсеров.

Для разработчиков HTML5 помогает писать понятный семантический код, позволяет управлять многими процессами на странице своими стандартными методами, без использования javascript или сторонних плагинов и сервисов. Это означает, что решаются некоторые проблемы кроссбраузерности, поскольку браузеры одинаково реализуют новые возможности.

#### Цели HTML5
Кратко цели HTML5 можно назвать так:

- Ликвидация плагинов, таких как Flash, для общих функций, которые необходимы каждому. Построить собственную поддержку для таких вещей, как аудио, видео и т.д.;
- Снижение потребности в JavaScript и дополнительном коде, благодаря использованию новых html5 элементов;
- Обеспечение согласованности между браузерами и устройствами;
- Сделать все это настолько прозрачным, насколько это возможно.

[См. подробнее о HTML5](https://webformyself.com/chto-takoe-html5/)

## Валидация

Валидация используется для проверки документа на соответствие веб-стандартам и отсутствие ошибок. Эти стандарты называются спецификацией, которая разработана [W3C](https://www.w3.org/).

Программа-валидатор работает следующим образом: определяет тип документа (!DOCTYPE), проверяет корректность HTML-кода. В то же время проверяется правильное использование имен тегов.

Валидатор проверяет следующее:

1. Синтаксис
1. Вложенность тегов
1. DTD (Document Type Definition — определение типа документа)
1. Посторонние элементы

Если хотя бы один из тестов не пройден, HTML считается невалидным.

Главным преимуществом валидирования является проверка кроссбраузерности, т.е. корректного отображения документа во всех браузерах.

К недостаткам можно отнести лишнюю строгость иотсутствие поддержки специфичных требований.

Тем не менее, валидировать HTML-документы очень рекомендуется, т.к. это помогает обнаружить существующие уязвимости и писать корректный код.

Для валидации можно использовать [валидатор w3c](http://validator.w3.org/).

## Полезные ссылки

[Самоучитель HTML](http://htmlbook.ru/samhtml)

[Какие бывают META теги и зачем они нужны](https://habrahabr.ru/post/72141/)

[Метатеги](http://htmlbook.ru/content/metategi)