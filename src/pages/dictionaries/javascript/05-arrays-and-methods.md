---
title: Массивы
templateKey: 'article-page'
order: 5
---
# Массивы, методы массива
Массив (*Array*) - особый вид объекта в JavaScript. Если в обычном объекте ключами могут служить любые строки, то в массиве ими являются порядковые целые числа (0, 1, 2, 3...). Благодаря этому, в массивах удобно хранить списки значений. Чтобы получить доступ к элементу массива, используется оператор []:
```javascript
var names = ['Vasya', 'Petya', 'Dima'];
console.log(names[1]); // Petya
console.log(names.length); // 3
```
У массива есть множество методов для облегчения работы с ним:
```javascript
var names = [];

names.push('Vasya'); // добавляет в конец массива новый элемент

names.pop(); // удаляет последний элемент и возвращает его

var firstTwoNames = names.slice(0, 2); // возвращает новый массив с элементами из заданного промежутка

function printName(name, nameIndex) {
    console.log(`Имя №${nameIndex} = ${name}`);
}
// проходит по массиву и вызывает функцию с каждым элементом в качестве аргумента
names.forEach(printName);

// проходит по массиву и вызывает функцию с каждым элементом в качестве аргумента
// и создает новый массив из возвращенных значений
function lowerCase(name) {
    return name.toLowerCase();
}
var lowerCaseNames = names.map(lowerCase);

// проходит по массиву и вызывает функцию с каждым элементом в качестве аргумента
// если функция возвращает true, текущий элемент попадает в новый массив
function onlyStartsWithP(name) {
    return name.startsWith('P');
}
var namesThatStartWithP = names.filter(onlyStartWithP);

// проходит по массиву и вызывает функцию с каждым элементом в качестве аргумента
// пока не будет найден элемент, с которым функция возвращает true
var firstNameThatStartsWithP = names.find(onlyStartWithP);
```
[Подробный список всех методов массива можно посмотреть здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances)

