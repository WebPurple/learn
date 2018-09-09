tags: js, JavaScript, task, context

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
Calculator.add(4)
  .reset()
  .add(1)
  .getResult(); // 1
console.log(Calculator.getResult()); // 5
```

Также у калькулятора должен быть метод для сброса текущего состояния:

`console.log(Calculator.reset()) // 0`

Добавьте метод, эмулирующий запрос к серверу и устанавливающий состояние калькулятора, равное **500**, при получении ответа. Установка состояния должна осуществляться колбеком.

```javascript
function getState(callback) {
  // Setting timeout to emulate a request to a server
  setTimeout(function() {
    // Set calculator state here
    callback();
  }, 1000);
}
Calculator.getState(Calculator.setInitialState);
```

{% exercise %}
Создайте калькулятор.

{% initial %}
var Calculator = (function () {
  result = 0;

  return {};
})()

{% solution %}

{% validation %}
assert(Calculator.getResult() == 0);
assert(Calculator.add(5).getResult() == 5);
assert(Calculator.add(5).subtract(5).getResult() == 5);
assert(Calculator.multiply(2).getResult() == 10);
assert(Calculator.divide(2).multiply(2).divide(2).getResult() == 5);
Calculator.reset();
Calculator.getInitialState(Calculator.setInitialState);
assert(Calculator.getResult() == 0);


{% endexercise %}
