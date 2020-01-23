---
title: События
templateKey: 'article-page'
order: 1
tags: events, DOM, onclick, addEventListener, JavaScript
---

# События
Когда в браузере что-то происходит (заканчивается загрузка страницы, пользователь кликает мышкой, нажимает кнопку на клавиатуре), он оповещает об этом JavaScript-приложение.
Полный список событий очень длинный, но мы приведем наиболее часто используемые:

* click – происходит, когда кликнули на элемент левой кнопкой мыши
* contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
* mouseover – возникает, когда на элемент наводится мышь
* mousedown и mouseup – когда кнопку мыши нажали или отжали
* mousemove – при движении мыши
* submit – пользователь отправил форму <form>
* focus – пользователь фокусируется на элементе, например нажимает на <input>
* blur – пользователь снимает фокус с элемента
* keydown – пользователь нажимает клавишу
* keyup – пользователь отпускает клавишу

## Обработчики событий

## Использование DOM-свойств
В JavaScript можно назначать функции, которые будут вызваны при определенном событии. Названия свойств для обработчиков событий называются **on<название события>** - **onclick, onblur, onkeyup, onkeydown**.
```html
<div id="clickMe">Click!</div>
```

```javascript
const button = document.getElementById('clickMe');
button.onclick = (event) => console.log('button clicked');
```

Главный недостаток этого способа - так как свойство с соответствующим названием бывает только одно, на одно и то же событие можно повесить не больше одного обработчика.

## addEventListener
С помощью функции `node.addEventListener(event, callback)` возможно добавить сколько угодно обработчиков на одно событие.
```javascript
const button = document.getElementById('clickMe');
const clickHandler = (event) => console.log('button clicked');
button.addEventListener('click', clickHandler);
```

В остальном этот код аналогичен предыдущему.
Также события можно удалять с помощью функции `node.removeEventListener(event, callback)`
```javascript
button.removeEventListener('click', clickHandler);
```

*Важно!* Чтобы удаление функции сработало, вторым аргументом надо передавать именно ту же функцию, что была добавлена через `addEventListener`! Другая функция с таким же кодом не сработает.

## Объект события
В обработчик события передается объект события, в котором есть некоторые полезные свойства.

* `event.type`
тип события, например, `click`

* `event.currentTarget`
DOM-элемент, на котором сработало событие

* `event.clientX` / `event.clientY`
координаты мыши в окне бразуера

## Порядок срабатывания обработчиков
```html
<section id="section">
  <div>
    <button id="button">Click!</button>
  </div>
</section>
```

```javascript
button.addEventListener('click', () => console.log('button click'));
section.addEventListener('click', () => console.log('section click'));
```

При клике на <button> сначала сработает обработчик на `button`, затем на `section`. Этот механизм называется *всплытие* - сначала событие срабатывает на самом вложенном элементе, затем на его родителе, и так до тех пор, пока не дойдет до самого верхнего уровня.

Чтобы остановить всплытие, можно использовать функцию `event.stopPropagation()`, тогда это событие не будет вызвано на родителях этого элемента.