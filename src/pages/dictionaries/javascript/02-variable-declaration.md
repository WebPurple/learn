---
title: Переменные
templateKey: 'article-page'
order: 2
---
# Объявление переменных, правила выбора имени переменных
## var
Чтобы объявить переменную, используется ключевое слово *var*:
```javascript
var foo;
```
Можно объявить несколько переменных в одном выражении:
```javascript
var foo, bar, baz;
```
Объявленной перменной можно сразу же присвоить значение:
```javascript
var foo = 23, bar = 'some string';
```
## let и const
В стандарте ES6 было введено еще два ключевых слова *let* и *const*.
```javascript
const bar = 23;
bar = 532; // Uncaught TypeError: Assignment to constant variable.
```
Переменным, объявленным с помощью *const*, невозможно присвоить новое значение.
Разница между *let* и *var* в том, что переменные, объявленные с помощью *var*, существуют в пределах функции:
```javascript
function main() {
    {
        var foo;
        foo = 32;
    }
    console.log(foo); //32
}
```
В то время как переменные, объявленные с помощью *let*, существуют только внутри *блока*, в котором они были объявлены:
```javascript
function main() {
    {
        let foo;
        foo = 32;
    }
    console.log(foo); //Uncaught ReferenceError: foo is not defined
}
```
(для подробностей тут должна быть ссылка на области видимости)
## Допустимые имена переменных
Имя переменной может содержать буквы, цифры и знаки $ и \_, и не может начинаться с цифры. Также нельзя использовать некоторые зарезервированные ключевые слова ([Их можно посмотреть тут](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Ключевые_слова))
## Ссылки
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Ключевые_слова
