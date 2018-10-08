# WebPurple Learn Book
[![WebSite](https://img.shields.io/badge/website-learn-542982.svg)](https://webpurple.github.io/learn/)
[![Build Status](https://travis-ci.org/WebPurple/learn.svg?branch=master)](https://travis-ci.org/WebPurple/learn)
[![GitBook](https://img.shields.io/badge/powered%20by-GitBook-blue.svg)](https://github.com/GitbookIO/gitbook)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/WebPurple/learn/blob/master/LICENSE)

## Локальная работа
```sh
git clone https://github.com/WebPurple/learn.git
cd learn
npm install
npm start
```
### Troubleshooting
* [Решение проблемы запуска Gitbook на Windows](https://github.com/GitbookIO/gitbook/issues/1309#issuecomment-353998108);
* [Решение проблемы установки зависимостей на Windows](https://github.com/npm/npm/issues/12138).    

Также можно в файле `book.json` заменить значение ключа `plugins` на `[]`.

## Структура
Непосредственно файлы со справочным материалом должны размещаться в директории `book`.    
Они могут быть распределены по вложенным директориями на любом уровне.    
В файле `book/SUMMARY.md` задаётся структура разделов и подразделов.    
```markdown
* [Имя раздела](Файл с описанием раздела)
    * [Имя подраздела](Файл с описанием подраздела)
        * [Имя подраздела 2-го уровня](Файл с описанием подраздела 2-го уровня)
    * [Имя подраздела](Файл с описанием подраздела)
    * [Имя подраздела](Файл с описанием подраздела)
```
Пример описания раздела и подраздела:
```markdown
* [Тема 1](topic1/README.md)
    * [Что такое JS](topic1/what-is-js.md)
    * [История JS](topic1/js-history.md)
```

## Создание записей
### Markdown
Для форматирования текста используется стандартный Markdown, более подробную информацию можно найти в "[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)".    

### HTML
В Markdown можно встраивать html, в том числе и с JavaScript-кодом.
```markdown
# Header 1
[link](url)
<span onclick="alert()">Test</span>
**bold**
```

### Картинки
При встраивании в страницу изображения можно "положить" файл изображения в `book/images` или в любую другую директорию (но в этом случае необходимо учесть относительность пути), после чего в md-файле вставить картинку.
```markdown
![Alt text](images/path/to/img.png)
```

### Якоря
Каждый заголовок на странице является якорем. В md-файле описываем заголовок.
```markdown
# Topic 1
```
После чего можем переходить непосредственно к нему: `http://url-to-page/#topic-1`.

### "Include" файлов
В случае необходимости переиспользования контента одного файла в другом файле можно использовать следующий синтаксис.
```markdown
!INCLUDE "path/to/file.md"
```

### Тэги
Для указания тэгов страницы необходимо в самом верху файла описать эти тэги.
```markdown
tags: tag1, tag2, tag3
```
Для увеличения производительности генерация страницы тэгов происходит **только при первом** запуске GitBook, для обновления этой страницы в режиме "разработки" необходимо перезапустить `npm start`.

### Exercises
Для описания практических заданий используется плагин "[Exercises](https://github.com/GitbookIO/plugin-exercises)".
```markdown
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
function exposedFunction {
    return 3;
}
{% endexercise %}
```

### Slides
Для встраивания презентаций в страницу можно использовать следующий синтаксис.
```markdown
{% slides %}
./slides-poc.html // путь к html-файлу презентации
{% endslides %}

{% slides %}
https://slides.com/ifedyukin/deck // путь к презентации на slides.com
{% endslides %}
```
