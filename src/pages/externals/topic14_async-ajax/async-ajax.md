---
title: Async, AJAX
templateKey: 'article-page'
tags: Async, AJAX
---
#Async, AJAX 

**AJAX** (Asynchronous Javascript And Xml) - технология для взаимодействия с сервером без перезагрузки страниц.
**Асинхронный запрос** - это такой запрос, который выполняется в фоновом режиме и не мешает пользователю взаимодействовать со страницей.

Практически каждое полноценное JS-приложение написано с привлечением асинхронных методов разработки,
 позволяющих веб-страницам запрашивать небольшие фрагменты данных (например, HTML, XML, JSON или обычный текст) и отображать их только при необходимости. 
Здесь в дело вступают *функции обратного вызова* («коллбэки»), «обещания», или *Promise-объекты*, называемые обычно промисами. 
Тут можно столкнуться с генераторами и с конструкциями async/await.


[**Web API**](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) - это набор асинхронных функций, предоставляемый средой (браузером) для выполнения различных действий (таймеры, http-
запросы и тд.).
Модель Ajax (Asynchronous Javascript And Xml) предполагает использование веб-API в качестве прокси-сервера для более разумного запроса данных, 
а не просто для того, чтобы браузер перезагружал всю страницу. 
Прокси-сервер работает как посредник для трафика, пересылаемого между пользователем и целевым сервером. 
 Сначала клиент подключается к прокси-серверу и запрашивает какой-либо ресурс (например e-mail), расположенный на другом сервере.
 Затем прокси-сервер либо подключается к указанному серверу и получает ресурс у него, либо возвращает ресурс из собственного кэша (в случаях, если прокси имеет свой кэш). 
 В некоторых случаях запрос клиента или ответ сервера может быть изменён прокси-сервером в определённых целях.


**REST** (от англ. Representational State Transfer — «передача состояния представления») — архитектурный стиль взаимодействия компонентов распределённого приложения в сети. 
REST представляет собой согласованный набор ограничений, учитываемых при проектировании распределённой гипермедиа-системы. 

Веб-службы, основанные на архитектуре REST, называются веб-службами **RESTful**. Эти веб-службы используют HTTP-методы для реализации концепции архитектуры REST и подразумевает под собой простые правила:

- Каждый URL является ресурсом
- При обращении к ресурсу методом GET возвращается описание этого ресурса
- Метод POST добавляет новый ресурс
- Метод PUT изменяет ресурс
- Метод DELETE удаляет ресурс

**Fetch API** предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP, подобная функциональность ранее достигалась с помощью **XMLHttpRequest**.
Эти технологии позволяют веб-страницам напрямую обрабатывать **запросы HTTP** для определенных ресурсов, 
доступных на сервере, и форматировать результирующие данные по мере необходимости перед их отображением.

#####XMLHttpRequest
XMLHttpRequest - это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. 

Запрос, сделанный посредством XMLHttpRequest, может загружать данные синхронно или асинхронно. Это определяется третьим аргументом метода open()  
объекта XMLHttpRequest: если он равен true или не определён, запрос выполнится асинхронно, в противном случае — синхронно. 

Для отправки HTTP-запроса нужно создать XMLHttpRequest-объект, открыть URL и отправить запрос. После выполнения запроса можно получить и обработать тело и статус ответа.

Пример асинхронного запроса:
      
       // Создаём новый объект XMLHttpRequest
        const xhr = new XMLHttpRequest();
        // Конфигурируем его: GET-запрос на "/bar/foo.txt"
          xhr.open("GET", "/bar/foo.txt", true);
        // Создаём функцию обработчик события onload. Этот обработчик следить за параметром readyState
          xhr.onload = function (e) {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log(xhr.responseText);
              } else {
                console.error(xhr.statusText);
              }
            }
          };
          xhr.onerror = function (e) {
            console.error(xhr.statusText);
          };
          
          // Отсылаем запрос
          xhr.send(null); 
          
####Методы объекта XMLHttpRequest
***open()*** - варианты вызова:

    open( method, URL )
    open( method, URL, async )
    open( method, URL, async, userName )
    open( method, URL, async, userName, password )
    
- **method** - HTTP-метод. Как правило, используется GET либо POST, хотя доступны и более экзотические, вроде TRACE/DELETE/PUT и т. п.

- **URL** - адрес запроса. Можно использовать не только HTTP/HTTPS, но и другие протоколы, например FTP и FILE://. 

- **async** = true задает асинхронные запросы, эта тема была поднята выше.

- **userName**, **password** - данные для HTTP-авторизации.

***send()*** - отсылает запрос. Аргумент - тело запроса. Например, GET-запроса тела нет, поэтому используется send(null), а для POST-запросов тело содержит параметры запроса.

***abort()*** - вызов этого метода req.abort() обрывает текущий запрос.

***setRequestHeader(name, value)*** - устанавливает заголовок name запроса со значением value. Если заголовок с таким name уже есть - он заменяется. 
    
***getAllResponseHeaders()*** - возвращает строку со всеми HTTP-заголовками ответа сервера.

***getResponseHeader(headerName)*** - возвращает значение заголовка ответа сервера с именем headerName.

          
####Свойства объекта XMLHttpRequest

***onreadystatechange*** - ссылается на функцию-обработчик состояний запроса. 

***readyState*** - номер состояния запроса от 0 до 4. [Подробнее здесь](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest)

***responseText*** - текст ответа сервера. Полный текст есть только при readyState=4, ряд браузеров дают доступ к полученной части ответа сервера при readyState=3.

***responseXML*** - ответ сервера в виде XML, при readyState=4. Это свойство хранит объект типа XML document, с которым можно обращаться так же, как с обычным document. 

***status*** - для HTTP-запросов - статусный код ответа сервера: 200 - OK, 404 - Not Found, и [другие](https://developer.mozilla.org/ru/docs/Web/HTTP/Status). 

***statusText*** - текстовая расшифровка status, например "Not Found" или "OK".          
 
[Документация XMLHttpRequest](https://xhr.spec.whatwg.org/)          

------------------
##Promise 
Объект ***Promise*** (промис) используется для отложенных и асинхронных вычислений.
   
    new Promise(executor);
    new Promise(function(resolve, reject) { ... });
    
Интерфейс Promise (промис) представляет собой обертку для значения, неизвестного на момент создания промиса. 
Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: 
вместо конечного результата асинхронного метода возвращается обещание (промис) получить результат в некоторый момент в будущем.

Promise может находиться в трёх состояниях:

- ожидается (pending): начальное состояние, не исполнен и не отклонен.
- исполнено (fulfilled): операция завершена успешно.
- отклонено (rejected): операция завершена с ошибкой.

При создании промис находится в ожидании (pending), а затем может стать исполненным  (fulfilled), вернув полученный результат (значение), или отклоненным (rejected), вернув причину отказа. 
В любом из этих случаев вызывается обработчик, прикрепленный к промису методом then.
Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected) можно написать .catch(onRejected) – это то же самое.

    // onFulfilled сработает при успешном выполнении
    promise.then(onFulfilled)
    // onRejected сработает при ошибке
    promise.then(null, onRejected)

[Методы Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise#%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B) и 
[документация](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects).
------------------
##Fetch
***Fetch()*** позволяет делать запросы, схожие с XMLHttpRequest (XHR). 
Основное отличие заключается в том, что Fetch API использует Promises (Обещания), 
которые позволяют использовать более простое и чистое API, 
избегать катастрофического количества callback'ов и необходимости помнить API для XMLHttpRequest.


Метод fetch() принимает один обязательный аргумент —  путь к данным, которые вы хотите получить. 
Он возвращает promise, который разрешается в ([Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)) независимо от того, был ли запрос удачным. 
Также можно передать во втором аргументе необязательный объект с указанием опций ([Request](https://developer.mozilla.org/ru/docs/Web/API/Request).)
       
    function status(response) {  
      if (response.status >= 200 && response.status < 300) {  
        return Promise.resolve(response)  
      } else {  
        return Promise.reject(new Error(response.statusText))  
      }  
    }
    
    function json(response) {  
      return response.json()  
    }
    
    fetch('users.json')  
      .then(status)  
      .then(json)  
      .then(function(data) {  
        console.log('Request succeeded with JSON response', data);  
      }).catch(function(error) {  
        console.log('Request failed', error);  
      });
        
[Документация fetch](https://fetch.spec.whatwg.org/)    

__________________

##Дополнительные темы:
------------------
##Throttling и debouncing
Throttling и debouncing — это широко используемые техники для увеличения производительности кода, который выполняется повторно с некоторой периодичностью.

***Троттлинг*** - функции означает, что функция вызывается не более одного раза в указанный период времени (например, раз в 10 секунд). 
Другими словами ― троттлинг предотвращает запуск функции, если она уже запускалась недавно. 
Троттлинг также обеспечивает регулярность выполнение функции с заданной периодичностью.

***Debouncing*** - функции означает, что все вызовы будут игнорироваться до тех пор, пока они не прекратятся на определённый период времени. 
Только после этого функция будет вызвана. Например, если мы установим таймер на 2 секунды, 
а функция вызывается 10 раз с интервалом в одну секунду, то фактический вызов произойдёт только спустя 2 секунды после крайнего (десятого) обращения к функции.

------------------
##Async/await
Существует специальный синтаксис для работы с промисами, который называется ***«async/await»***.

Объявление **async** function определяет асинхронную функцию, которая возвращает объект [AsyncFunction](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).


    async function name([param[, param[, ... param]]]) {
       statements
    }
- name - имя функции
- param - имя аргумента, который будет передан в функцию
- statements - выражение, содержащее тело функции


После вызова функция async возвращает **Promise**. Когда результат был получен, Promise завершается, возвращая полученное значение.  Когда функция async выбрасывает исключение, Promise ответит отказом с выброшенным (throws) значением.

Функция async может содержать выражение ***await***, которое приостанавливает выполнение функции async и ожидает ответа от переданного Promise, затем возобновляя выполнение функции async и возвращая полученное значение.
Оператор await используется для ожидания окончания Promise и может быть использован только внутри async function.

    function resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    }
    
    async function f1() {
      var x = await resolveAfter2Seconds(10);
      console.log(x); // 10
    }
    f1();

Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.
Но есть отличие, на практике промис может завершиться с ошибкой не сразу, а через некоторое время. В этом случае будет задержка, а затем await выбросит исключение.

Такие ошибки можно ловить, используя try..catch, как с обычным throw:


    async function f() {
    
      try {
        let response = await fetch('http://no-such-url');
      } catch(err) {
        alert(err); // TypeError: failed to fetch
      }
    }
    
    f();

------------------
##Дополнительные материалы по теме:

####REST
https://ru.wikipedia.org/wiki/REST

####HTTP
https://developer.mozilla.org/ru/docs/Web/HTTP/Overview

####EventLoop
https://www.youtube.com/watch?v=8aGhZQkoFbQ
https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop


####V8
https://geekbrains.ru/posts/javascript_internals_part1
https://blog.education-ecosystem.com/v8/

####XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

####Fetch
https://github.github.io/fetch/
https://developer.mozilla.org/ru/docs/Web/API/Fetch_API
https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

####Async/await
https://learn.javascript.ru/async-await
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/await

####Throttling и debouncing
https://medium.com/nuances-of-programming/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-throttling-%D0%B8-debouncing-4f0a839769ef
https://nuancesprog.ru/p/3001/