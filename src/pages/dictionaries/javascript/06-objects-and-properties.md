---
title: Объекты
templateKey: 'article-page'
order: 6
---
# Объекты, перебор свойств
Объект (*Object*) - сложный тип данных в JavaScript, который может объединять данные других типов.
```javascript
var foo = {
    bar: 'some object property',
    baz: 432,
    fiz: true,
};
```
В JavaScript можно добавлять новые свойства в объекты, даже если изначально их не было.
Чтобы обратиться к свойству объекта, используется оператор *.* или *[]*. Если обратиться к несуществующему свойству, результатом будет *undefined*.
```javascript
var foo = {};
foo.baz = 432;

console.log(foo.baz); // 432
console.log(foo['baz']); // 432
console.log(foo.nonExistingProperty); // undefined
```
Чтобы получить массив из всех ключей объекта, можно использовать метод *Object.keys()*:
```javascript
var foo = {
    bar: 'some object property',
    baz: 432,
    fiz: true,
};

var keys = Object.keys(foo);
for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
    var key = keys[keyIndex];
    var value = foo[key];
    console.log(`foo[${key}] = ${value};`);
}
```
