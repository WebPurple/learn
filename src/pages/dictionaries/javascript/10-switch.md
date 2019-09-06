---
title: switch
templateKey: 'article-page'
order: 10
---
# switch
Чтобы проверить несколько возможных значений одного выражения, удобно использовать оператор *switch*:
```javascript
var err = getErrorCode();
switch (err) {
    case 0:
        console.log('Lexer error');
        break;
    case 1:
        console.log('Parser error');
        break;
    case 2:
        console.log('Typechecker error');
        break;
    case 3:
        console.log('Runtime error');
        break;
    default:
        console.log('Unknown error');
}
```
В каждом *case*, кроме последнего, нужен оператор *break*, иначе после выполнения всех утверждений в нем, исполнение перейдет к следующему блоку *case* без проверки условия.