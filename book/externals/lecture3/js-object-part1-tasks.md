## Задание №1

{% exercise %}
Создать пустой объект. Добавить несколько свойств со значениями разных типов.
Удалить одно из созданных свойств.

{% initial %}

{% solution %}

{% endexercise %}

## Задание №2

{% exercise %}
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения свойств. Данная функция не должна возвращать значение.

{% initial %}
function logAllKeyValuePairs(object) {

}

{% solution %}
function logAllKeyValuePairs(object) {
    Object.keys(object).forEach(key => {
        console.log(`${key} -> ${object[key]}`);
    })
}

{% validation %}
const obj = {a: 1};

const value = logAllKeyValuePairs(obj)
assert(value === undefined);

const lastCall = console.log();
assert(lastCall === 2);

{% context %}
const callCounter = (fn, counter = 1) => (...args) => (fn(...args), counter++);
console.log = callCounter(console.log);

{% endexercise %}

## Задание №3

{% exercise %}
Написать функцию, которая принимает строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

{% initial %}
function hasProperty(prop, object) {

}

{% solution %}
function hasProperty(prop, object) {
    return object.hasOwnProperty(prop);
}

{% validation %}
const obj = {a: 1};

assert(hasProperty('a', obj));
assert(!hasProperty('b', obj));

{% endexercise %}

## Задание №4

{% exercise %}
Написать функцию, которая принимает строку и объект, проверяет есть ли у переданного объекта свойство с данным именем, если такое свойство отсутствует, до добавляет его и устанавливает значение ‘new’. Функция должна возвращать исходный или модифицированный объект.

{% initial %}
function setNonExistedProperty(prop, object) {

}

{% solution %}
function setNonExistedProperty(prop, object) {
    if (!object.hasOwnProperty(prop)) {
        object[prop] = 'new';
    }
    return object;
}

{% validation %}
const obj = {a: 1};

setNonExistedProperty('a', obj);
assert(1 === obj.a);

setNonExistedProperty('b', obj);
assert('new' === obj.b);

{% endexercise %}

## Задание №5

{% exercise %}
Написать функцию, которая принимает объект и создает его копию (новую ссылку) и возвращает скопированный объект

{% initial %}
function clone(object) {

}

{% solution %}
function clone(object) {
    return Object.assign({}, object);
}

{% validation %}
const obj = {a: 1};
assert(obj === clone(obj));

{% endexercise %}

## Задание №6 💪

{% exercise %}
Написать функцию, которая делает глубокую копию (deep clone) объекта. Глубокая копия, значит, что если одно из свойств содержит объект оно также должно быть скопировано, чтобы создалась новая ссылка на соответствующий объект. Глубина вложенности может быть бесконечной, поэтому надо использовать рекурсию.

{% initial %}
function cloneDeep(object) {

}

{% solution %}
function cloneDeep(object) {
    let output = Array.isArray(object) ? [] : {};
    for (let prop in object) {
        const v = object[prop];
        output[prop] = (v === Object(v) && typeof a !== 'function') ? cloneDeep(v) : v;
    }
    return output;
}

{% validation %}
const obj = {a:1,b:{c:0},e:{f:[{g:1}]}};
const objCopy = cloneDeep(obj);

assert(obj !== objCopy);
assert(obj.b !== objCopy.b)
assert(obj.e !== objCopy.e)
assert(obj.e.f !== objCopy.e.f)

{% endexercise %}
