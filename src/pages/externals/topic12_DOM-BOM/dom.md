---
title: Документ и объекты страницы (DOM)
templateKey: 'article-page'
order: 1
tags: DOM, BOM, document object model, HTML, tree, JavaScript, JS, node
---

# Документ и объекты страницы (DOM)

## BOM
**BOM (browser object model**) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

Оно предоставляет функционал (объекты и функции), который может использовать, например, JavaScript.
BOM включает в себя:
* `screen`
* `navigator`
* `location`
* `history`
* `frames`
* `XMLHttpRequest`

Рассмотрим некоторые объекты.

Объект `navigator` даёт информацию о самом браузере и операционной системе. Среди множества его свойств самыми известными являются: navigator.userAgent – информация о текущем браузере, и navigator.platform – информация о платформе (может помочь в понимании того, в какой ОС открыт браузер – Windows/Linux/Mac и так далее).

Объект `location` позволяет получить текущий URL и перенаправить браузер по новому адресу.

![BOM](./images/BOM-model.png "BOM")

## window
Объект **window** выступает в двух ролях

1. Как глобальный объект для JS-кода

`window` содержит все глобальные переменные, а также встроенные объекты, например, `Array`.
[Подробнее](https://learn.javascript.ru/global-object).

```javascript
function sayHi() {
  alert("Hello");
}

// глобальные функции доступны как методы глобального объекта:
window.sayHi();
```

2. Как окно браузера. 

`window` располагает методами для управления им. Например, вызов `window.open` возвращает ссылку на новое окно, 
которая может быть использована для манипуляции свойствами окна, изменения URL, доступа к его переменным и т.п.,
`window.scrollBy(x,y)` используется для прокрутки окна на заданное количество пикселей.

Пример:

```javascript
alert(window.innerHeight); // внутренняя высота окна браузера
```

## document
`document` – важный объект, с помощью которого мы можем что-то создавать или менять на странице.
Интерфейс `document` служит точкой входа для получения содержимого веб-страницы 
(всего DOM - дерева, включая такие элементы как `<body>` и `<table>`), а также обеспечивает функциональность, 
которая является глобальной для документа, например, для получения URL-адреса страницы или создания 
новых элементов в документе).

**НЕЛЬЗЯ** получить доступ к элементу, которого не существует (вообще или во время выполнения скрипта). Он будет равен `null`.

Примеры использования `document`:
* `document.documentElement` – вернет  `<html>`
* `document.body` – вернет  `<body>`
* `document.head` – вернет  `<head>`

## DOM
**DOM** (**Document Object Model**) -  объектная модель документа, которая представляет все содержимое страницы в виде 
объектов, которые можно менять. Для доступа к DOM используется объект `document`.

![DOM](./images/domtree_1_.jpg "DOM")

Иерархия DOM:

![DOM](./images/html-tree_1_.png "DOM")

HTML-страница представлена в виде дерева, где каждый тег является узлом, а вложенные в него теги - его потомками. 
С помощью DOM возможно изменять его структуру и редактировать свойства каждого узла в JS-коде.

DOM поддерживает объектно-ориентированнное представление веб-страницы, делая возможным её изменение при помощи, 
например, JavaScript.

У каждого объекта есть свойства, методы и события.

Свойства – то, что характеризует, объект (узел).

Методы – то, что объект способен делать сам без внешнего воздействия.

События – влияние на объект извне.

События оказывают какое-либо влияние на объект, который может отреагировать не него, вызвав собственный метод и изменить свойство, либо вызвать метод, либо изменить свойство.

Начнем работу с DOM с данным простым документом.

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>О лосях</title>
</head>
<body>
  Правда о лосях.
</body>
</html>
```

![DOM-example](./images/DOM-example.png "DOM-example")

Все, что есть в HTML, является частью DOM. 

В DOM есть следующие типы узлов:
1. **Узлы-элементы (element node)** - соответствуют HTML-тегам.
1. **Текстовые узлы (text node)** - соответствуют тексту внутри тегов. Не может содержать потомков.
1. **Комментарий** - Комментарии в коде.
1. **document** - входная точка в DOM. По сути - узел.

Всего есть 12 типов узлов. [Подробнее](https://dom.spec.whatwg.org/#node).

Узнать тип узла можно с помощью elem.nodeType (например, COMMENT\_NODE, ELEMENT\_NODE)

DOM с имеет иерархическую структуру (дерево тегов). В браузере DOM представлен на вкладке Elements в devtools.

## Поиск по DOM
Чтобы получить доступ не только к непосредственным потомкам или предками элемента, существуют функции для поиска элементов на странице.

### Поиск по ID
Функция `node.getElementById(id)` возвращает потомка с соответствующим id. Также доступ к любому элементу с id можно получить через глобальную переменную с соответствующим именем.
```html
<div>
  <div id="title">Title</div>
</div>
```

```javascript
const titleElement = document.getElementById('title');
titleElement.innerHTML = 'New Title';

console.log(window.title.innerHTML); // New Title
```

### Поиск по тегу
Функция `node.getElementsByTagName(tag)` возвращает потомка с соответствующим тегом.

### Поиск по классу
Функция `node.getElementsByClassName(class)` возвращает список всех потомков с заданным классом.
```html
<div>
  <div className="fancy">
    Title
    <div className="fancy">SubTitle</div>
  </div>
</div>
```

```javascript
const fancyElements = document.getElementsByClassName('fancy');
for (const e of fancyElements) {
  e.style.backgroundColor = '#BBB';
}
```
Также существует функция `node.getElementByClassName(class)` (без буквы s!), которая возвращает не коллекцию, а только ее первый элемент.

### Поиск по CSS-селектору
Все современные браузеры также поддерживают функцию `node.querySelectorAll(css)`, которая возвращает 
коллекцию по любому css-селектору, и соответствующую одиночную функцию `node.querySelector(css)`.
```html
<div>
  <div className="fancy">
    <span>part 1</span>
    <span>part 2</span>
  </div>
</div>
```

```javascript
const secondPart = document.querySelector('div.fancy > span:last-child');
console.log(secondPart.innerHTML); // part 2
```

## Навигация по DOM
Для обращения к элементам, вложенных в DOM – узел, существует два типа навигационных ссылок:

Для всех узлов: 
`parentNode`, `childNode`, `firstChild`, `lastChild`, `previousSibling`, `nextSibling`.

Только для узлов- элементов:
* `parentElement`, `children`, `firstElementChild`, `lastElementChild`,
* `previousElementSibling`, `nextElementSibling`.

Дочерние узлы (`childNodes`) – элементы, которые лежат непосредственно внутри того элемента, 
к которому обращаются (неглубокая вложенность).

Например, чтобы получить доступ к HTML-странице в браузере, достаточно использовать 
глобальную переменную `window.document.documentElement`. Этот узел соотвествует тегу `<html>` на странице.
Далее, чтобы получить доступ к непосредственным потомкам узла, используется свойство `childNodes`.
```javascript
const children = document.documentElement.childNodes;
for (child of children) {
  console.log(child);
}
```

Потомки (`children`) – все элементы, которые лежат внутри тега, 
включая вложенные в другие теги. Например, `body`, `div`, `ul`, `li`, `b` для `html`.

Обратиться к родительскому свойству можно через `parentElement` или `parentNode`. Они оба возвращают родителя.

`parentElement` вернет узел-элемент, `parentNode` - любого родителя

Пример:

`document.documentElement.parentNode === document`

`document.documentElement.parentElement === null`

`document` – не узел, а объект.

Для всех остальных узлов результат одинаковый.

Свойства `firstChild` и `lastChild` обеспечивают быстрый доступ к первому и последнему дочернему элементу 
из списка `childNodes`.

Проверить, существуют ли вообще дочерние узлы можно с помощью функции `elem.hasChildNodes()`.

`childNodes` – псевдомассив, который можно перебрать `for .. of`.

**ВАЖНО**: `for .. in` не подходит.

Методы массивов для childNodes **не работают**. Для псевдомассивов, в т.ч. для `childNodes` методы массивов доступны
через встроенный объект `Array`.

Изменить DOM, оперируя элементами `childNodes` **НЕЛЬЗЯ**.

Siblings (соседи) – узлы, у которых один и тот же родитель.

Правый(следующий) узел – `nextSibling`.

Левый(предыдущий) узел – `previousSibling`.

Родитель - `parentNode`.

Например, `head` и `body` - соседи.

## Редактирование дерева

### innerHTML
Свойство `node.innerHTML` дает доступ ко всем потомкам данного узла в текстовом виде
```html
<div className="fancy">
  <span>part 1</span>
</div>
```

```javascript
const fancy = document.querySelector('div.fancy');
console.log(fancy.innerHTML); // <span>part 1</span>
```

При изменении `innerHTML` происходит удаление и создание заново всего содержимого узла, так что стоит изменять его с осторожностью для избежания проблем с производительностью.

`innerHTML` есть только у текстовых узлов. Чтобы получить доступ к тексту внутри текстового узла, используется `node.data`

### Создание элементов
Для создания элемента используется функция `document.createElement(tag)`
```javascript
const message = document.createElement('h1');
message.innerHTML = 'Hello sailor';
```

Чтобы создать текстовый узел, используется функция `document.createTextNode(text)`.

Обратите внимание, что созданный элемент не появится на странице, пока он не будет вставлен в дерево как потомок одного из узлов. Для этого используется функция `node.appendChild(element)`
```javascript
document.body.appendChild(message);
```

### Удаление элементов
Для удаления элемента используется функция `parent.removeChild(element)`
```javascript
document.body.removeChild(message);
```

Также можно использовать `parent.replaceChild(newElem, elem)`, чтобы удалить элемент и поставить на его место новый.
