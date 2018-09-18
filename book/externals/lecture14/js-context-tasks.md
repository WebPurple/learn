tags: js, JavaScript, task, context

# Задания

## Калькулятор

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

## Игра виселица

Виселица — простая игра, в которой загадывается слово, а игрок пытается его угадать, называя по одной букве за раз. Если игрок назвал назвал неправильную букву, то ему начисляется одна ошибка. Если буква была названа правильно, то эта буква показывается в слове. Игра продолжается до тех пор, пока игрок не угадает слово или не совершит 6 ошибок.

Создайте функцию конструктор `Hangman`, которая принимает один аргумент - слово, которое необходимо отгадать. Регистр букв не учитывается.  

```javascript
var hangman = new Hangman('webpurple');
```

Реализуйте метод `guess`, который принимает букву, которую игрок пытается угадать. Если игрок угадал, то необходимо вывести строку с угаданными буквами, неизвестные буквы должны быть заменены символами `_`. Если игрок не угадал, то необходимо вывести количество оставшихся ошибок и введённые им неправильные буквы через разделить `|`.

```javascript
hangman.guess('w'); // "w________"
hangman.guess('e'); // "we______e"
hangman.guess('a'); // "wrong letter, errors left 5 | a"
hangman.guess('p'); // "we_p__p_e"
hangman.guess('k'); // "wrong letter, errors left 4 | a,k"
```

Реализуйте метод `getStatus`, который выводит строку с угаданными буквами, количество оставшихся ошибок и неправильно введённые символы:

```javascript
hangman.getStatus(); // "we_p___p_e | errors left 4 | a,k"
```

Пользователь должен иметь возможность производить подобные действия:

```javascript
hangman.guess('b') // "webp___p_e"
  .guess('l') // "webp__ple"
  .getStatus() // "webp__ple | errors left 4 | a,k"
  .guess('u') // "webpu_ple | errors left 4 | a,k"
  .guess('r'); // "webpurple | You won!"
```

Реализуйте метод `startAgain`, который принимает в качество аргумента новое слово и сбрасывает все значения свойств к исходным.

```javascript
hangman.startAgain('webpurple')
  .guess(w) // "w________"
  .getStatus(); // "w_______ | errors left 6"
```

{% exercise %}
Создайте функцию конструктор Hangman.

{% initial %}
var hangman = new Hangman('webpurple');

function Hangman(word) {
  this.word = word;
  this.errorsLeft = 6;
  this.guessedString = '';
  this.wrongSymbols = [];
  this.isGameOver = false;

  this.guess = function () {

  }

  this.startAgain = function (word) {

  }

  this.getStatus = function () {

  }


}

{% solution %}

{% validation %}

assert(hangman.guess('w').guessedString == 'w________');
assert(hangman.guess('p').guessedString == 'w__p__p__');
assert(hangman.guess('a').errorsLeft == 5);
assert(hangman.wrongSymbols.toString() == ['a'].toString());

hangman.startAgain('github');
assert(hangman.word == 'github');
assert(hangman.errorsLeft == 6);
assert(hangman.wrongSymbols.length == 0);
assert(hangman.guess('g').guessedString == 'g_____');

{% endexercise %}