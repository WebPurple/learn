---
title: Область видимости
templateKey: 'article-page'
order: 14
---
# Область видимости
От того, в каком месте кода была объявлена переменная, зависит то, где к ней можно будет обратиться. Переменные, объявленные вне каких-либо функций, называются *глобальными*, потому что они доступны в любом месте кода.
```javascript
var globalVar = 'something';

function foo() {
  console.log(globalVar); //something
}
```

Переменные, объявленные внутри функции, видны только внутри ее тела, они называются *локальными*.
```javascript
function foo() {
  var localVar = 'something';
}
console.log(localVar); //Uncaught ReferenceError: localVar is not defined
```

Переменные, объявленные во внешней функции, будут доступни внутри всех функций, объявленных внутри ее:
```javascript
function outer() {
  var outerVar = 'outer';
  function inner() {
    console.log(outerVar); //outer
  }
}
```

В ES6 были добавлены ключевые слова для объявления переменных *let* и *const*, которые действуют по похожему принципу, но их область видимости ограничена не *функцией*, а *блоком*.
```javascript
if (true) {
  let localVar = 'local';
}
console.log(localVar); //Uncaught ReferenceError: localVar is not defined
```
Если бы в примере выше вместо *let* был использован *var*, localVar был бы объявлен в глобальной области видимости.