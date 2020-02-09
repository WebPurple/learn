---
title: 'Контекст в JavaScript'
templateKey: 'article-page'
order: 1
tags: js, JavaScript, context
---

# Контекст в JavaScript

## Методы объекта

Свойства объекта могут быть примитивными значениями, другими объектами и функциями. В последнем случае они называются методами объекта.

```javascript
var user = {
  name: "John",

  hello: function() {
    console.log(this.name);
  },

  changeName: function(newName) {
    this.name = newName;
  }
};

user.hello(); // "John"
user.changeName("Alex");
user.hello(); // "Alex"
```

В примере методы используют ключевое слово `this`. При выполнении, например, метода `changeName`, в `this` хранится ссылка на текущий объект `user`.

[Подробнее о методах объектов и `this`](https://learn.javascript.ru/object-methods).

## Создание объектов через "new"

Для создания множества однотипных объектов используют **функции-конструкторы**, запускаемые при помощи специального оператора `new`.

```javascript
function Car(name) {
  this.name = name;
  this.isBroken = false;

  var serialKey = Math.random();

  this.getSerialKey = function() {
    return serialKey;
  };
}

var audi = new Car("Audi");
var bmw = new Car("BMW");
bmw.isBroken = true;
```

Функция, запущенная через new, делает следующее:

1. Создаётся новый пустой объект.
1. Ключевое слово this получает ссылку на этот объект.
1. Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства.
1. Возвращается this.

В примере будут созданы два объекта:

```javascript
audi = {
  getSerialKey: function() {
    return serialKey;
  },
  isBroken: false,
  name: "Audi"
};
```

и

```javascript
bmw = {
  getSerialKey: function() {
    return serialKey;
  },
  isBroken: true,
  name: "BMW"
};
```

[Подробнее об операторе `new`](https://learn.javascript.ru/constructor-new).

## Значение `this`

Ключевое слово `this` во время вызова функции хранит ссылку на объект, для которого эта функция была вызвана в качестве метода. Так можно получить доступ к другим свойствам этого объекта:

```javascript
const man = { // man – это объект
  name: 'John Snow', // свойство name объекта man

  say: function(thoughts) { // say – это метод объекта man
    console.log(this.name + ': "' + thoughts + '"');
  }
};

man.say('Winter is coming!'); // => 'John Snow: "Winter is coming!"'
```

В случае, когда функция вызывается сама по себе, а **не** как метод объекта, тогда есть два варианта поведения:
- Ключевое слово `this` будет ссылаться на глобальный объект `window`
- Если используется строгий режим (`'use strict'`) – `this` будет иметь значение `undefined`

```javascript
function carelessFunction() {
  console.log(this);
}

function strictFunction() {
  'use strict';
  console.log(this);
}

carelessFunction(); // => Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
strictFunction(); // => undefined
```

Когда мы создаём объект через функцию коструктор с использованием ключевого слова `new`, `this` будет указывать на новый пустой объект, который в последствии будет модифицирован этой функцией:

```javascript
function Square(side) {
  this.side = side;
}

// Следующие две строчки делают одно и то же
const square1 = new Square(2);
const square2 = Square.call({}, 2); // на этот пустой объект, переданный первым параметром в функцию call, будет ссылаться this

console.log(square1.side === square2.side); // => true
```

Как можно было заметить в предыдущем примере, мы можем явно задавать контекст `this` при помощи функций `apply` и `call`. Обе эти функции заставляют целевую функцию вызываться с привязанным котекстом и параметрами. Они отличаются лишь способом передачи аргументов:

```javascript
const context = { title: 'Explicit context object' }

const firstArgument = 'first argument';
const secondArgument = 2;
const thirdArgument = true;

const argumentsArray = [firstArgument, secondArgument, thirdArgument];

func.apply(context, argumentsArray); // this = context (явная передача)
func.call(context, firstArgument, secondArgument, thirdArgument);
```

Также стоит упомянуть встроенный метод `bind`, позволяющий привязать контекст. Этот метод не вызывает функцию сразу. Вместо этого он возвращает новую функцию-обёртку с уже привязвнным контекстом:

```javascript
const man = {
  name: 'John Snow',
};

function saySomething(thoughts) {
  if (this && this.name) {
    console.log(this.name + ': "' + thoughts + '"');
  } else {
    console.log(thoughts);
  }
}

const makeJohnSaySomething = saySomething.bind(man);
makeJohnSaySomething('Winter is coming!'); // => 'John Snow: "Winter is coming!"'

const makeJohnSayHello = saySomething.bind(man, 'Hello!');
makeJohnSayHello(); // => 'John Snow: "Hello!"'
```

> **Важно!** Стрелочные функции ___не содержат___ собственный контекст `this`, а используют значение `this` окружающего контекста.

В следующем примере используется эта особенность, чтобы создать простой счётчик, который каждую секунду выводит число увеличенное на 1:

```javascript
function Counter() {
  this.value = 0;

  this.start = function() {
    const incrementAndLog = () => {
      this.value++;
      console.log(this.value);
    };
    setInterval(incrementAndLog, 1000);
  }
}

const counter = new Counter();
counter.start();
// => 1
// => 2
// => 3
// => 4
// ...
```

### Полезные ссылки:
- [Подробнее о контексте](https://learn.javascript.ru/objects-more).
- [Подробнее про ключевое слово `this`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this).
