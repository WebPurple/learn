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

Значение this устанавливается в зависимости от того, как вызвана функция.

При вызове функции как метода:

```javascript
obj.func(...) // this = obj
obj["func"](...)
```

При обычном вызове:

```javascript
func(...) // this = window (ES3) /undefined (ES5)
```

В new:

```javascript
new func(); // this = {} (новый объект)
```

Явное указание:

```javascript
func.apply(context, args) // this = context (явная передача)
func.call(context, arg1, arg2, ...)
```

Также стоит упомянуть встроенные метод `bind`, позволяющий привязать контекст.

[Подробнее о контексте](https://learn.javascript.ru/objects-more).
