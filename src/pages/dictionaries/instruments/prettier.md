---
title: Prettier
templateKey: 'article-page'
order: 5
---
# [Prettier](https://prettier.io/) 

<p align="center">
    <img
        width='500'
        title='Prettier logo'
        src="./images/prettier-banner-light.png"
    />
</p>

**Prettier** — это инструмент для форматирования кода с минимальным количеством возможностей для конфигурации. Он обеспечивает (навязывает) единообразный стиль, анализируя и перепечатывая код (не влияя на AST), базируясь на собственных правилах и с учетом максимальной длины строки.

Prettier поддерживает следующие языки: _JavaScript (<=ES2017), JSX, Flow, TypeScript, CSS, Less, SCSS, JSON, GraphQL, Markdown, YAML,_ в разработке (_Elm, Java, PHP, PostgreSQL, Python, Ruby, Swift_).

Он является node-модулем и просто интегрируется с основными IDE посредством плагинов или расширений (_VS Code, Atom_), а в некоторых встроен в редактор (_WebStorm_).

## [Prettier и линтеры](https://prettier.io/docs/en/comparison.html)

Как правило линтеры предоставляют 2 категории правил:

1.  Правила форматирования (прим. _max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style..._)

    Prettier устраняет необходимость в этой категории правил! Он полностью переписывает код с нуля — ошибки будут заменены автоматически.

2.  Правила качества кода (прим. _no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors..._)

    Prettier не поддерживает данные правила, в то время, как многие из них являются наиболее важными из тех, что предоставляются линтерами.

    Для обеспечения работы с такими правилами нужно [совместить его с ESLint](https://prettier.io/docs/en/eslint.html).

## [Цели Prettier](https://prettier.io/docs/en/why-prettier.html)

-   **Создание и обеспечение соблюдения принятого руководства по написанию кода**

    Больше никаких споров о форматировании какого-то куска кода, Prettier решает все споры за разработчиков.

-   **Помощь новичкам**

    Из-за небольшой вариативности конфигурации Prettier, новичкам, работавшим с Prettier ранее, проще ориентироваться в новой кодовой базе.

-   **Сохранить силы и время на написание кода**

    Больше не нужно тратить время на форматирование написанного кода - Prettier автоматически сделает (линк) это за вас.

-   **Простота использования и внедрения в проект**

-   **Упрощение работы с legacy-кодом**

## [Опции конфигурации](https://prettier.io/docs/en/options.html)

| Название                   | Значение по-умолчанию                    |
| -------------------------- | ---------------------------------------- |
| Print Width                | 80                                       |
| Tab Width                  | 2                                        |
| Tabs                       | false                                    |
| Semicolons                 | true                                     |
| Quotes                     | false                                    |
| Trailing Commas            | "none"                                   |
| Bracket Spacing            | true                                     |
| JSX Brackets               | false                                    |
| Arrow Function Parentheses | "avoid"                                  |
| Range                      | 0 (_range-start_) Infinity (_range-end_) |
| Parser                     | None                                     |
| FilePath                   | None                                     |
| Require pragma             | false                                    |
| Insert Pragma              | false                                    |
| Prose Wrap                 | "preserve"                               |

## [Способы использования](https://prettier.io/docs/en/install.html):

Для начала работы с Prettier необходимо установить его локально в проекте или локально.

```
npm i --save-dev prettier                #install
# npm i -g prettier                      #global
```

### 1. CLI (Интерфейс командной строки)

```
prettier --single-quote --use-tabs --trailing-comma es5 --write "<file_name>.js"
#./node_modules/.bin/eslint --single-quote --use-tabs --trailing-comma es5 --write "<file_name>.js"   #global
```

### 2. API

Пример использования Prettier непосредственно в JavaScript коде

```javascript
const prettier = require('prettier');

prettier.format('foo ( );', {semi: false, parser: 'babylon'});
// -> "foo()"
```

### 3. IDE (Интегрированная среда разработки)

Прим. VS Code установить [плагин Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 4. Pre-commit hook

В связке с библиотекой Husky

```
npm i --save-dev husky
```

И добавить следующие строчки в **package.json**

```json
{
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js,json,css,md}": ["prettier --write", "git add"]
    }
}
```

В примере Prettier проверит и отформатирует все файлы с расширениями _js,json,css,md_ на стадии создания коммита и добавит изменившиеся к этому коммиту.

## [Взаимодействие с ESLint](https://prettier.io/docs/en/eslint.html)

## [Playground](https://prettier.io/playground/)

## Доклады о Prettier

<p align="center">
    <a
        href="https://youtu.be/hkfBvpEfWdA"
        target="_blank"
    >
        <img
            src="https://img.youtube.com/vi/hkfBvpEfWdA/hqdefault.jpg"
            alt="James Long - A Prettier Printer, React Conf 2017"
        />
    </a>
    <a
        href="https://youtu.be/0Q4kUNx85_4"
        target="_blank"
    >
        <img
            src="https://img.youtube.com/vi/0Q4kUNx85_4/hqdefault.jpg"
            alt="Christopher Chedeau - Javascript code formatting, React London 2017"
        />
    </a>
</p>
