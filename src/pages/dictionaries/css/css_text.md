---
title: Стили влияющие на текст
templateKey: 'article-page'
order: 4
---

# Стили влияющие на текст

## Свойства текста

|Свойство|Значение|Описание|Пример|
|---|---|---|---|
|text-color| название цвета<br> HEX значение<br> RGB значение | Цвет текста |color: red<br>color: #ff0000<br>color: rgb(255,0,0)|
| text-align | left<br> right<br> center<br> justify| Горизонтальное выравнивание | text-align: center |
|text-decoration | none <br>underline <br>overline <br>line-through <br>blink | Убрать все оформление <br>Подчеркивание <br>Линия над текстом <br>Перечеркивание <br>Мигание текста| text-decoration: none |
| text-transform | none <br>capitalize <br>uppercase <br>lowercase | Убрать все эффекты <br> Начинать С Прописных <br>ВСЕ ПРОПИСНЫЕ <br> все строчные| text-transform: capitalize |
|text-align| left  <br>right <br>center <br>justify | Выравнивание текста	| text-align: justify|
|text-indent |значение <br>%|Отступ первой строки | text-indent: 15px; <br>text-indent: 10%|
|letter-spacing| normal<br>значение |Интервал между символами в пределах элемента| |
|line-height|normal<br>множитель<br>значение <br>%|Интерлиньяж (межстрочный интервал) | line-height: normal <br>line-height: 1.5 <br>line-height: 12px <br>line-height: 120% |
|direction|ltr<br>rtl|Направление текста|direction: ltr|
|word-spacing|normal<br>значение|Интервал между словами|word-spacing: 10px;|
|text-shadow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|none<br>параметры тени &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |Добавляет тень к тексту, а также устанавливает её параметры: cмещение тени по горизонтали, cмещение по вертикали, радиус размытия и цвет|text-shadow: 1px 1px 2px black &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

## Свойства шрифта

|Свойство|Значение|Описание|Пример|
|---|---|---|---|
|font-family|имя шрифта|Задает список шрифтов|P {font-family: Arial, serif}|
|font-style|normal <br> italic <br> oblique |Нормальный шрифт <br>Курсив <br>Наклонный шрифт |P {font-style: italic}|
|font-variant|normal <br> small-caps |<br> Капитель (особые прописные буквы)|P {font-variant: small-caps}|
|font-weight|normal <br> lighter <br> bold <br> bolder <br> 100–900 |Нормальная <br>жирность <br>Светлое начертание <br>Полужирный <br>Жирный <br>100 — светлый шрифт, <br>900 — самый жирный |P {font-weight: bold}|
|font-size|normal <br> pt <br> px <br> % |нормальный размер <br>пункты <br>пикселы <br>проценты |font-size: normal <br>font-size: 12pt <br>font-size: 12px <br>font-size: 120%|