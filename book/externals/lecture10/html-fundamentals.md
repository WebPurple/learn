tags: html, css, basics, fundamentals

# Основы HTML. Часть 2

<p align="center">
    <img
        width='140'
        title='HTML'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
    />
</p>

## Поток документа

Под "потоком документа" (flow) понимают порядок отображения элементов на странице.

Элементы, расположенные выше по коду, отображаются перед элементами, расположенными ниже. Такая логика делает результат вывода элементов страницы предсказуемым и управляемым.

<p align="center">
    <img
        width='750'
        title='Flow'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1797036/potok.png"
    />
</p>

## Блочные элементы

- Блочные (block) элементы расположены один под другим

- Такие элементы имеют ширину, высоту, отступы

- Блоки занимают всю ширину родительского элемента. Например, если задать им фон, то фон будет виден по всей ширине родительского элемента

- Так как блочный элемент занимает всю ширину, его внутренние элементы могут быть выровнены горизонтально, т.е. к левому, правому краю, посередине и по всей ширине

- Блочный элемент может быть внутри другого блочного элемента

- Свойства строчных элементов не предназначены для блочных элементов, например, вертикальное выравнивание (`vertical-align`)

<p align="center">
    <img
        width='500'
        title='Block elements'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1832415/div_1_.png"
    />
</p>

К блочным элементам относятся:

- `<div>` - раздел документа
- `<h1>` - `<h6>` - заголовки
- `<li>` - элемент списка
- `<p>` - параграф
- `<ul>` - маркированный список
- `<ol>` - нумерованный список
- `<dl>` - список определений
- `<table>` - таблица
- `<tr>` - строка таблицы

## Строчные элементы

- В строчные (inline) элементы допускается вставлять текст и другие строчные элементы

- В строчные элементы запрещено вставлять блочные

- Высота строчных элементов не контролируется свойством `height`

- Ширина пропорционально ширине контента

- Строчные элементы расположены друг за другом в строке, могут переноситься на следующую строку при необходимости

- Строчным элементам можно задать вертикальное выравнивание

<p align="center">
    <img
        width='500'
        title='Inline elements'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1832429/block-inline1_1_.png"
    />
</p>

К строчным элементам относятся:

- `<a>` - ссылки
- `<b>`, `<i>`, `<sup>` - работа со шрифтами
- `<br>` - переход на новую строку
- `<span>` - универсальный строчный элемент
- `<th>` - ячейка заголовка в таблице
- `<td>` - ячейка в таблице

## Строчно-блочные элементы

- В строчно-блочных (inline-block) элементах возможно размещать текст или блочные элементы

- Высота элемента рассчитывается автоматически браузером на основе контента

- Ширина равна ширине контента с учетом отступов и границ

- Inline-block элементы расположены в одной строке и переносятся на следующую при необходимости

- Могут быть выровнены по вертикали

- Допускается установка ширины и высоты

<p align="center">
    <img
        width='500'
        title='Inline-block elements'
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/130700/images/1832440/httpatomoreillycomsourceoreillyimages531486_1_.png"
    />
</p>

## Спецсимволы (named character references)

HTML интерпретирует символы `<`, `>`, `&`, `"` и др. как специальные. При необходимости их использования они заменяются на, соответственно, `&lt;`, `&gt;`, `&amp;`, `&quot;`.

## Таблицы

В HTML для создания таблицы используется тег `<table>`. Строки таблицы создаются с помощью тега `<tr>`, ячейки - `<td>`.

Например:

```html
  <table border="1">
  <tr>
    <td>Table cell 1</td>
    <td>Table cell 2</td>
  </tr>
  </table>
```

<table border="1">
  <tr>
    <td>Table cell 1</td>
    <td>Table cell 2</td>
  </tr>
</table>

### Заголовки

Многие таблицы имеют заголовки. В HTML для этого используется тег `<th>`.

```html
  <table border="1">
    <tr>
      <th>Table header</th><th>Table header</th>
    </tr>
    <tr>
      <td>Table cell 1</td><td>Table cell 2</td>
    </tr>
  </table>
```

  <table border="1">
    <tr>
      <th>Table header</th><th>Table header</th>
    </tr>
    <tr>
      <td>Table cell 1</td><td>Table cell 2</td>
    </tr>
  </table>

### Colspan, rowspan

Для того, чтобы ячейка таблицы объединяла несколько столбцов, используется атрибут `colspan`.

Атрибут `rowspan` аналогичен `colspan`, но служит для объединения строк.

```html
<table border="1">
    <tr>
      <th colspan="2">Table header</th>
    </tr>
    <tr>
      <td>Table cell 1</td><td>Table cell 2</td>
    </tr>
  </table>
```

<table border="1">
    <tr>
      <th colspan="2">Table header</th>
    </tr>
    <tr>
      <td>Table cell 1</td><td>Table cell 2</td>
    </tr>
 </table>

### Части таблицы

Таблицы могут быть разделены на три части: хедер (head), основную (body), футер (foot). Их предназначение аналогично соответствующим частям веб-страницы. Для их создания используются теги `<thead>`, `<tbody>`, `<tfoot>`.

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

## Табличная верстка

Верстка веб-страницы очень важна для лучшего отображения вашего сайта. Красивая и удобная верстка занимает достаточно много времени.

В настоящее время все современные сайты используют CSS и JavaScript-фреймворки для создания динамической и адаптивной верстки, но все еще можно хорошо сверстать страницу используя таблицы или дивы (`<div>`).

Разберемся, как верстать страницу, используя только HTML и атрибуты.

### 3 колонки

```html
<table width="100%" border="0">
  <tr>
    <td style="background-color:#aaa" width="20%">
      <b>Main Menu</b><br />
      HTML<br>
      PHP<br>
      PERL...
    </td>
    <td style="background-color: #b5dcb3" height="200" width="60%">
        Technical and Managerial Tutorials
    </td>
    <td style="background-color:#aaa" width="20%">
      <b>Right Menu</b><br>
      HTML<br>
      PHP<br>
      PERL...
    </td>
   </tr>
<table>
```

<table width="100%" border="0">
  <tr>
    <td style="background-color:#aaa" width="20%">
      <b>Main Menu</b><br />
      HTML<br>
      PHP<br>
      PERL...
    </td>
    <td style="background-color: #b5dcb3" height="200" width="60%">
        Technical and Managerial Tutorials
    </td>
    <td style="background-color:#aaa" width="20%">
      <b>Right Menu</b><br>
      HTML<br>
      PHP<br>
      PERL...
    </td>
   </tr>
</table>

### 3 строки, 2 колонки

```html
<table width="100%" border="0">
  <tr>
    <td colspan="2" style="background-color: #b5dcb3">
      <h1>This is Web Page Main title</h1>
    </td>
  </tr>
  <tr>
    <td style="background-color: #aaa" width="50">
      <b>Main Menu</b><br />
      HTML<br />
      PHP<br />
      PERL...
    </td>
    <td style="background-color: #eee" width="100" height="200">
        Technical and Managerial Tutorials
    </td>
  </tr>
  <tr>
    <td colspan="2" style="background-color: #b5dcb3">
      Copyright © 2007 Tutorialspoint.com
    </td>
  </tr>
</table>
```

<table width="100%" border="0">
  <tr>
    <td colspan="2" style="background-color: #b5dcb3">
      <h1>This is Web Page Main title</h1>
    </td>
  </tr>
  <tr>
    <td style="background-color: #aaa" width="50">
      <b>Main Menu</b><br />
      HTML<br />
      PHP<br />
      PERL...
    </td>
    <td style="background-color: #eee" width="100" height="200">
        Technical and Managerial Tutorials
    </td>
  </tr>
  <tr>
    <td colspan="2" style="background-color: #b5dcb3">
      Copyright © 2007 Tutorialspoint.com
    </td>
  </tr>
</table>

### Недостатки табличной верстки

- Таблицы увеличивают размер файла разметки

- Таблицы обычно мешают инкрементной отрисовке страницы, т.е. пройдет много времени, прежде чем пользователь что-либо увидит

- Таблицы мешают копированию текста в некоторых браузерах

- Табличная верстка занимает больше времени, чем верстка с помощью CSS

- Семантически некорректно использовать таблицы для описания внешнего вида, а не контента

- Таблицы усложняют пользование скринридерами

- Табличная верстка делает дизайн менее гибким и изменяемым

## iframe

Данные элементы используются для отображения веб-страницы внутри веб-страницы.

Синтаксис:

```html
<iframe src="URL" width="200" height="200"></iframe>
```

Атрибут `src` определяет URL (адрес) внутренней веб-страницы. Также можно задать ширину и высоту окна со страницей атрибутами `width` и `height`.

Можно также установить iframe как цель для ссылки:

```html
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>
<p><a href="http://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```

В данном случае документ по ссылке будет загружен в iframe.

Следующий пример попробуйте воспроизвести в собственном .html файле.

```html
<ul>
  <li><a href="https://www.google.ru" target="myframe">Google</a></li>
  <li><a href="http://www.yandex.ru/" target="myframe">Yandex</a></li>
  <li><a href="https://duckduckgo.com/" target="myframe">DuckDuckGo</a></li>
</ul>

<iframe src="http://example.com/" name="myframe"></iframe>
```
