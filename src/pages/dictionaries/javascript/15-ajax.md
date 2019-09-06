---
title: AJAX
templateKey: 'article-page'
order: 15
---
# AJAX
Расшифровывается как **Asynchronous JavaScript + XML** - технология, которая позволяет JavaScript отправлять запросы серверу без перезагрузки страницы.
Основой AJAX является API `XMLHttpRequest` (XHR).

## Конфигурация
Для начало надо создать новый реквест с помощью конструктора
```javascript
const req = new XMLHttpRequest();
```

Для конфигурации используется метод `xhr.open(method, URL, async, user, password)`
* `method` - HTTP-метод (POST, GET, PUT, UPDATE, т.д.)
* `url` - адрес запроса
* `async` - если `true`, то запрос выполняется *асинхронно*, то есть выполнение программы не ждет окончания запроса
* `user`, `password` - логин и пароль для авторизации, если они нужны
```javascript
req.open("get", "http://example.com", true);
```

## Отправка
Для отправки используется метод `xhr.send(body)`. *body* может быть пустым, например у GET-запросов.
```javascript
req.send();
```

## Получение ответа
Чтобы обработать окончание реквеста, надо подписаться на событие `load`
```javascript
req.onload = () => {
  console.log(req.status);
  console.log(req.responseText);
};
```

* `status` - HTTP-код ответа сервера
* `responseText` - тело ответа сервера

Если ответ сервера - это JSON-документ, его можно пропарсить с помощью `JSON.parse(req.responseText)`.

## HTTP-заголовки
В `XMLHttpRequest` есть методы для работы с заголовками:

* `setRequestHeader(name, value)` - устанавливает заголовок с заданным именем и значением
```javascript
req.setRequestHeader('Content-Type', 'application/json');
```

С помощью `getResponseHeader(name)` и `getAllResponseHeaders()` можно получить заголовки ответа.

[https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest](Подробнее о XMLHttpRequest можно узнать тут)