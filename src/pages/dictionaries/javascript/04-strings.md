---
title: Строки
templateKey: 'article-page'
order: 4
---
# Строки
Строка (*String*) - один из примитивных типов в JavaScript. Строки можно задавать с помощью двойных или одинарных кавычек:
```javascript
var foo = 'this is a string';
foo = "this is also a string";
```
Также, начиная с ES6, обратными кавычками *`* можно задавать шаблонные строки, которые интерполируют значения переменных, заданных в них:
```javascript
var name = 'Vasya';
console.log(`Hello ${name}!`); // Hello Vasya!
```