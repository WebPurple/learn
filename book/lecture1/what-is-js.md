tags: tag1, tag2, tag3

# Что такое JS
Рассказ про JS

{% exercise %}
Присвойте переменной `x` значение 10.

{% initial %}
var x =

{% solution %}
var x = 10;

{% validation %}
assert(x == 10);

{% context %}
// Описание контекста задания
// Описанные здесь переменные и функции будут доступны пользователю
var exposedVar = 3;
function exposedFunction() {
    return 3;
}
{% endexercise %}
