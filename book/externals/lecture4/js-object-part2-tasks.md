## Prototypes

### Задание 1
Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе переданного объекта (объект создать заранее через Object.create())

{% exercise %}
Написать функцию, которая создает пустой объект, но без прототипа

{% initial %}
function getPropFromProto(prop, object) {

}

{% solution %}

{% validation %}
const obj = Object.create({a: 1});
obj.b = 2;
assert(getPropFromProto('a', obj) === 1);
assert(getPropFromProto('b', obj) === undefined);

{% endexercise %}

### Задание 2
{% exercise %}
Написать функцию, которая создает пустой объект, но без прототипа

{% initial %}
function createObjWithoutProto() {

}

{% solution %}

{% validation %}
const obj = createObjWithoutProto();
assert(Object.getPrototypeOf(obj) == null);

{% endexercise %}

## Strings

### Задание 3
{% exercise %}
Написать функцию, которая удаляет первый и последний пробел с строке и возаврщает строку без начального и завершающего пробела.

{% initial %}
function removeBoundarySpaces(string) {

}

{% solution %}

{% validation %}
assert(removeBoundarySpaces(' abc ') === 'abc');

{% endexercise %}

### Задание 4
{% exercise %}
Написать функцию, которая принимает строку и возвращает эту же строку, на с заглавным первым символом

{% initial %}
function capitalize(string) {

}

{% solution %}

{% validation %}
assert(capitalize('abc') === 'Abc');
assert(capitalize('') === '');

{% endexercise %}

### Задание 5
{% exercise %}
Написать функцию, которая ищет одну строку в другой строке и возвращает true, если такая строка найдена.

{% initial %}
function substring(string, sub) {

}

{% solution %}

{% validation %}
assert(substring('I love cats', 'cats'));
assert(!substring('I love Cats', 'cats'));

{% endexercise %}

### Задание 6
{% exercise %}
Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом каждого слова

{% initial %}
function camelize(string) {

}

{% solution %}

{% validation %}
assert(camelize('I am cool') === 'I Am Cool');

{% endexercise %}

### Задание 7
{% exercise %}
Написать функцию, которая принимает два аргумента, строку и число. Если длина строки больше, чем переданное число, то строка урезается и в конец добавляется «…», так чтобы длина отрезанной строки вместе с «…» (три точки) равнялась переданному числу 

{% initial %}
function fit(string = '', length) {

}

{% solution %}

{% validation %}
assert(fit('abcdefg', 5) === 'ab…');

{% endexercise %}

### Задание 8
{% exercise %}
Написать функцию, которая принимает строку и возвращает данную строку, но в lowerCamelCase нотации

{% initial %}
function upperCamelize(string = '') {

}

{% solution %}

{% validation %}
assert(upperCamelize('User Object') === 'userObject');

{% endexercise %}

### Задание 9
{% exercise %}
Написать функцию, которая принимает строку в другую строку, после переданного номера слова f(‘I am cool’,’very’,1) -> ‘I am very cool’;

{% initial %}
function insert(target, substring, wordNum) {

}

{% solution %}

{% validation %}
assert(insert('I am cool','very',1) === 'I am very cool');

{% endexercise %}

### Задание 10
{% exercise %}
Написать функцию, которая принимает строку и возвращает перевернутую строку

{% initial %}
function reverse(string) {
}

{% solution %}

{% validation %}
assert(reverse('abc') === 'cba');

{% endexercise %}

### Задание 11
{% exercise %}
Написать функцию, которая посчитает сколько раз каждый символ встречается в строке
f(‘abbac’) // в консоле a:2, b:2, c:1

{% initial %}
function countSymbols(string) {
    return string.split('').reverse().join('');
}

{% solution %}

{% validation %}
assert(countSymbols('abc') === 'cba');

{% endexercise %}

## Numbers

### Задание 12
{% exercise %}
Написать функцию, которая складывает два числа и результат округляется до 3го знака после запятой. Возвращаемый результат должен быть числом

{% initial %}
function countSymbols(string) {
    return string.split('').reverse().join('');
}

{% solution %}

{% validation %}
f(3.455 + 4.55) -> 8.005
assert(countSymbols('abc') === 'cba');

{% endexercise %}

### Задание 13
{% exercise %}
Написать функцию, которая возвращает случайное число в диапазоне от 0 до 100

{% initial %}
function countSymbols(string) {
    return string.split('').reverse().join('');
}

{% solution %}

{% validation %}
f() -> 56; f()->33
assert(countSymbols('abc') === 'cba');

{% endexercise %}

### Задание 14
{% exercise %}
Написать функцию, которая возвращает целое случайное число в диапазоне от min до max включительно f(1,5) -> 4; f(1,5)-> 1

{% initial %}
function countSymbols(string) {
    return string.split('').reverse().join('');
}

{% solution %}

{% validation %}
f() -> 56; f()->33
assert(countSymbols('abc') === 'cba');

{% endexercise %}







