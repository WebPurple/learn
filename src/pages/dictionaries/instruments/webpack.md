---
title: Webpack
templateKey: 'article-page'
order: 4
---
# [Webpack](https://webpack.js.org/) 

<p align="center">
    <img
        width='300'
        title='Webpack logo'
        src="./images/webpack-logo.svg"
    />
</p>

**Webpack** — это _статический сборщик модулей_ для приложений на JavaScript. При обработке приложения Webpack строит внутренний _граф зависимостей_, включающий все модули, необходимые приложению, затем упаковывает (bundle) все эти модули в один или более файлов.

На данный момент Webpack является наиболее популярным сборщиком модулей. Он является _open source_ проектом и активно поддерживается сообществом.

Webpack невероятно гибокий и мощный инструмент. Его основная идея базируется на 4 основных понятиях:

-   [Entry](https://webpack.js.org/concepts/#entry) — точка входа в приложение
-   [Output](https://webpack.js.org/concepts/#output) — вывод
-   [Loaders](https://webpack.js.org/concepts/#loaders) — лоадеры (загрузчики)
-   [Plugins](https://webpack.js.org/concepts/#plugins) - плагины

Рассмотрим каждую из этих концепций отдельно.

## Точка входа (Entry)

Точка входа указывает какой модуль Webpack должен использовать для построения _внутреннего графа зависимостей_. После определения точки входа Webpack сможет понять, какие другие модули и библиотеки зависят от точки входа (прямо или косвенно).

По-умолчанию это значение `./src/index.js`, но так же можно указать другую (или несколько точек входа) путем настройки свойства **entry** в конфигурационном файле Webpack. Например

```javascript
module.exports = {
    entry: './path/to/my/entry/file.js',
};
```

## Вывод (Output)

Свойство **output** указывает, где Webpack должен размещать сборку созданных бандлов, и как он будет называть эти файлы (по-умолчанию для одного основного выходного файла это `./dist/main.js`, для любого другого снерированного файла — `./dist`).

```javascript
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },
};
```

В этом примере output.filename отвечает за имя файла, а output.path — за директорию где будет находиться сборка.

## Лоадеры (Loaders)

Вебпак по-умолчанию может обрабатывать только JavaScript-файлы. Лоадеры же позволяют Webpack работать с другими типами файлов преобразовывая их в модули, которые будут добавлены в граф зависимостей, и далее использованы в приложении.

Лоадеры имеют два основных свойства для конфигурации:

1.  Свойство **test** определяет, какой файл/файлы должны быть трансформированы.
2.  Свойство **use** определяет, какой лоадер должен использоваться для выполнения трансформации.

```javascript
const path = require('path');

module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [{test: /\.txt$/, use: 'raw-loader'}],
    },
};
```

В данном примере определяются правила (_rules_) для определенного модуля и используются свойства test и use. Компилятор Webpack поймет, когда он дойдет до файла «.txt» в require()/import, и перед добавлением в бандл трансформирует его с помощью raw-loader.

## Плагины (Plugins)

В то время как лоадеры выполняют только преобразования, основанные на типе файла, плагины могут быть использованны для выполнения более широкого круга задач, таких как оптимизация бандла, управление asset'ами, и пр.

Для того, чтобы использовать плагин, необходимо использовать `require()` и добавить его в массив `plugins`. Большинство плагинов можно кастомизировать через настройки. Так как один плагин может использоваться несколько раз для разных целей, необходимо создать несколько отдельных экземпляров, использовав оператор `new`.

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{test: /\.txt$/, use: 'raw-loader'}],
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
};
```

Многие плагины встроены в Webpack. Доступ к ним можно получить через модуль, импортированный из самого пакета webpack:

```javascript
const webpack = require('webpack');

// new webpack.HtmlWebpackPlugin
```

## [Режим (Mode)](https://webpack.js.org/concepts/mode/)

Установив параметр `mode` как для `development`, `production`, `none`, можно включить встроенные оптимизации webpack, соответствующие каждому перечисленному режиму (по-умолчанию используется `production`).

## [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

### Доклад о Webpack 4 на JSConf Iceland 2018

<p align="center">
    <a
        href="https://youtu.be/jUTE7lmrS70"
        target="_blank"
    >
        <img
            src="https://img.youtube.com/vi/jUTE7lmrS70/hqdefault.jpg"
            alt="Sean Thomas Larkin: Webpack 4"
        />
    </a>
</p>
