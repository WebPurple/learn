tags: js, JavaScript, task, function, closure, scope

# Задание

Создать калькулятор, который может выполнять операции сложения, вычитания, деления и умножения.

Калькулятор должен сохранять текущее состояние - результат предыдущей операции. Начальное значение равно 0.

Калькулятор должен иметь метод для получения текущего состояния:

`console.log(Calculator.getResult()) // 0`

Все операции производятся над текущим состоянием:

```javascript
Calculator.add(4);
Calculator.substract(1);
console.log(Calculator.getResult()); // 3
```

Пользователь должен иметь возможность производить подобные действия:

```javascript
Calculator.add(4)(1);
console.log(Calculator.getResult()); // 5
```

Также у калькулятора должен быть метод для сброса текущего состояния:

`console.log(Calculator.reset()) // 0`

{% exercise %}
Создайте калькулятор.

{% initial %}
var Calculator = (function () {
  result = 0;
  
  return {};  
})()

{% solution %}
var Calculator = (function () {
  var result = 0;
  
  function add() {
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return add;
  }
  
  function subtract() {
    for (var i = 0; i < arguments.length; i++) {
      result -= arguments[i];
    }
    return subtract;
  }
  
  function divide() {
    for (var i = 0; i < arguments.length; i++) {
      result /= arguments[i];
    }
    return divide;
  }
  
  function multiply() {
    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    return multiply;
  }
  
  function getResult() {
    return result;
  }
  
  function reset() {
    result = 0;
  }
  
  return {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    getResult: getResult,
    reset: reset
  };
})();

{% validation %}
assert(Calculator.getResult() == 0);
Calculator.add(5);
assert(Calculator.getResult() == 5);
Calculator.add(5)(5);
assert(Calculator.getResult() == 15);
Calculator.subtract(5)(5);
assert(Calculator.getResult() == 5);
Calculator.multiply(2)(2);
assert(Calculator.getResult() == 20);
Calculator.divide(2)(2);
assert(Calculator.getResult() == 5);
Calculator.reset();
assert(Calculator.getResult() == 0);

{% endexercise %}
