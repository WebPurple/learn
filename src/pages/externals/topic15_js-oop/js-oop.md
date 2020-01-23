---
title: ООП в JavaScript
templateKey: 'article-page'
order: 1
tags: js, JavaScript, oop
---

# ООП в JavaScript

## Понятие ООП

На протяжении долгого времени в программировании применялся процедурный подход. При этом программа состоит из функций, вызывающих друг друга.

Гораздо позже появилось **объектно-ориентированное программирование** (ООП), которое позволяет группировать функции и данные в единой сущности – «объекте».

При объектно-ориентированной разработке используются следующие понятия:

- Инкапсуляция
- Наследование
- Полиморфизм
- Абстракция

[См. подробнее](https://habr.com/post/87205/).

## ООП в JS

ООП в JS значительно отличается от ООП в таких объектно-ориентированных языках программирования, как Java или C#.

- В JS нет классов.
- Все является объектом, включая фукнции, строки и числа.
- Для создания объектов используются объектные литералы или функции-конструкторы.
- Используется прототипное наследование.

## ООП в функциональном стиле

Как было сказано в [лекции №5](https://webpurple.github.io/learn/topic2/js-function.html), функции могут использоваться в качестве фукнций-конструкторов однотипных объектов. Например, следующая фукнция предназначена для создания объектов с разными именами, но одинаковым методом `sound`:

```javascript
function Cat(name) {
  this.name = name;
  this.sound = function() {
    console.log("meow");
  };
}

var garfield = new Cat("garfield");
garfield.sound(); // "meow"
```

При этом метод `sound` дублируется для каждого созданного объекта, что увеличивает расход памяти.

[Подробнее об ООП в функциональном стиле](https://learn.javascript.ru/oop)

## ООП в прототипном стиле

При использовании ООП в прототипном стиле методы объектов сохраняются один раз в прототипе. Также возможно переопределить методы объекта.

```javascript
function Cat(name) {
  this.name = name;
  this.sound = function() {
    console.log("meow");
  };
}

Cat.prototype.greet = function() {
  console.log("Hi, my name is " + this.name);
};

var garfield = new Cat("garfield");
garfield.sound(); // "meow"
garfield.greet(); // "Hi, my name is garfield"

var tom = new Cat("tom");
tom.sound(); // "meow"
tom.greet(); // "Hi, my name is tom"
```

[Подробнее об ООП в прототипном стиле](https://learn.javascript.ru/prototypes)

## Инкапсуляция

Суть инкапсуляции в скрытии внутренней реализации объекта.

```javascript
function User(name) {
  this.name = name;

  var logged = name == "admin";

  this.isLogged = function() {
    return logged;
  };
}

User.prototype.greet = function() {
  console.log("Hello I am " + this.name);
};

var mike = new User("mike");
mike.greet(); // "Hello I am mike"
console.log(mike.isLogged()); // false

var admin = new User("admin");
admin.greet(); // "Hello I am admin"
console.log(admin.isLogged()); // true
```

В примере свойство `logged` защищено от прямого доступа снаружи.

## Наследование

Поскольку в JS нет классов, наследование основано на прототипах.

```javascript
function Animal() {}

Animal.prototype.whoAmI = function() {
  console.log("Hi, my name is " + this.name);
};

Animal.prototype.makeSound = function() {
  console.log(this.sound);
};

function Cat(name) {
  this.name = name;
  this.sound = "meow";
}

Cat.prototype = new Animal();

Cat.prototype.scratch = function() {
  console.log(this.name + " is scratching");
};

var garfield = new Cat("garfield");
garfield.makeSound();
("meow");
garfield.whoAmI();
("Hi, my name is garfield");
garfield.scratch();
("garfield is scratching");

var tom = new Cat("tom");
tom.makeSound();
("meow");
tom.whoAmI();
("Hi, my name is tom");
tom.scratch();
("tom is scratching");
```

В примере объекты `garfield` и `tom` принадлежат классу `Cat`, родителем которого является класс `Animal`, поэтому объекты имеют доступ к методам обоих классов.

## Полиморфизм

Полиморфизм в JS можно проиллюстрировать следующим примером:

```javascript
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.whoAmI = function() {
  console.log("Hi, my name is " + this.name);
};

Animal.prototype.makeSound = function() {
  console.log(this.name + " pronounces " + this.sound);
};

function Cat(name) {
  Animal.call(this, name, "meow");
}

Cat.prototype = Animal.prototype;

Cat.prototype.scratch = function() {
  console.log(this.name + " is scratching");
};

var garfield = new Cat("Garfield");
garfield.whoAmI();
garfield.makeSound();
garfield.scratch();

var tom = new Cat("Tom");
tom.whoAmI();
tom.makeSound();
tom.scratch();

function Bird(name, flySpeed) {
  Animal.call(this, name, "chirik");
  this.flySpeed = flySpeed;
}

Bird.prototype = Animal.prototype;

Bird.prototype.fly = function() {
  console.log(this.name + " fly with " + this.flySpeed + " speed");
};

var bird = new Bird("Some bird", 120);
bird.whoAmI();
bird.makeSound();
bird.fly();

function Draggon(name) {
  Bird.call(this, name, 400);
}

Draggon.prototype = Bird.prototype;

Draggon.prototype.fire = function() {
  console.log(this.name + " is going to make a fire party");
};

var bird = new Bird("Smaug", 1220);
bird.whoAmI();
bird.fly();
bird.makeSound();
bird.fire();
```

## Дополнительные материалы

[Понимание ООП в JavaScript](https://habr.com/post/144646/).

[Javascript Constructors and Prototypes](http://tobyho.com/2010/11/22/javascript-constructors-and/).

[All JavaScript](https://raw.githubusercontent.com/coodict/javascript-in-one-pic/master/js%20in%20one%20pic.png).
