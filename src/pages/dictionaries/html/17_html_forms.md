---
title: Формы
templateKey: 'article-page'
order: 17
---

# Формы

## Элемент `<form>`

HTML-элемент `<form>` определяет форму для сбора информации, вводимой пользователем:

```html
<form>
    ...элементы формы...
</form>
```

Элементы формы - это различные типы полей для ввода информации, такие как текстовы поля, чекбоксы, радио-кнопки и т.д.

## Элемент `<input>`

Элемент `<input>` может быть отображен различными путями, в зависимости от атрибута `type`.

```html
<form>
     <input type="text" name="form_input">
</form>
```

Вот некоторые из них:

!INCLUDE "../static/inputs.html"

## Отправка формы

```html
<form action="https://yandex.ru/search/" target="_blank">
  Поиск в Яндекс:<br>
  <input type="search" name="text" placeholder="Введите поисковый запрос"><br>
  <button type="submit">Искать</button>
</form>
```

> <form action="https://yandex.ru/search/" target="_blank">
>  Поиск в Яндекс:<br>
>  <input style="width: 300px" type="search" name="text" placeholder="Введите поисковый запрос"><br>
>  <button type="submit">Искать</button>
> </form>

**Кнопка `<button type="submit">`** используется для отправки данных с формы обработчику формы.

Обработчиком формы обычно является страница сервера со скриптом для обработки введенных данных. Обработчик формы указывается в **атрибуте `action`**.

**Атрибут `target`** отвечает за то, откроется результат отправленной формы в новой вкладке, фрейме или текущем окне. Чтобы результат формы открылся в новой вкладке, используйте значение `_blank`.

Каждый элемент формы должен иметь **атрибут `name`** для отправки.

**Атрибут `method`** определяет, как будет отправлен запрос. <br/>
**Метод `get`** передает данные на сервер через адресную строку браузера. При формировании запроса к серверу все переменные и их значения формируют последовательность вида www.anysite.ru/form.php?var1=1&var2=2. Имена и значения переменных присоединяются к адресу сервера после знака ? и разделяются между собой знаком &. Все специальные символы и буквы, отличные от латинских, кодируются в формате %nn, пробел заменяется на +. Этот метод нужно использовать, если не передается больших объемов информации. Если вместе с формой предполагается отправка какого-либо файла, этот метод не подойдет. 
**Метод `post`** применяется для пересылки данных больших объемов, а также конфиденциальной информации и паролей. Данные, отправляемые с помощью этого метода, не видны в заголовке URL, так как они содержатся в теле сообщения.