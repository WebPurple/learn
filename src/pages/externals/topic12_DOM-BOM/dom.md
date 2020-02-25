---
title: Документ и объекты страницы (DOM)
templateKey: 'article-page'
order: 1
tags: DOM, document object model, HTML, tree, JavaScript, JS, node
---

# Документ и объекты страницы (DOM)

## Представление HTML-страницы
**DOM** (**Document Object Model**) - встроенное в JavaScript API для работы с HTML-документами.
HTML-страница представлена в виде дерева, где каждый тег является узлом, а вложенные в него теги - его потомками. С помощью DOM возможно изменять его структуру и редактировать свойства каждого узла в JS-коде.

В DOM есть два типа узлов:
1. **Узлы-элементы (element node)** - соответствуют HTML-тегам.
2. **Текстовые узлы (text node)** - соответствуют тексту внутри тегов. Не может содержать потомков.

## Доступ к узлам
Чтобы получить доступ к HTML-странице в браузере, достаточно использовать глобальную переменную `window.document.documentElement`. Этот узел соотвествует тегу `<html>` на странице.
Далее, чтобы получить доступ к непосредственным потомкам узла, используется свойство `childNodes`.
```javascript
const children = document.documentElement.childNodes;
for (child of children) {
  console.log(child);
}
```
Обратите внимание, что DOM-коллекции вроде childNodes *НЕ являются массивами*, поэтому у них нет обычных методов массивов forEach, map, reduce и т.д. Чтобы работать с ними как с массивами, можно использовать метод `Array.from(iterable)`.

Чтобы получить доступ к соседним узлам (которые являются потомками того же родителя), можно использовать `previousSibling` и `nextSibling` соответственно. Родитель доступен через `parentNode`.

## Поиск по DOM
Чтобы получить доступ не только к непосредственным потомкам или предками элемента, существуют функции для поиска элементов на странице.

## Поиск по ID
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

## Поиск по классу
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

## Поиск по CSS-селектору
Все современные браузеры также поддерживают функцию `node.querySelectorAll(css)`, которая возвращает коллекцию по любому css-селектору, и соответствующую одиночную функцию `node.querySelector(css)`.
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

## innerHTML
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

## Редактирование дерева

## Создание элементов
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

## Удаление элементов
Для удаления элемента используется функция `parent.removeChild(element)`
```javascript
document.body.removeChild(message);
```

Также можно использовать `parent.replaceChild(newElem, elem)`, чтобы удалить элемент и поставить на его место новый.
