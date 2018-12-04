# Нереляционные базы данных
## Слайды
{% slides %}
./slides.html
{% endslides %}

## Практика
### Дополнительные ссылки
* MongoDB 4.0.4 - https://www.mongodb.com/download-center/community
* Robo 3T 1.2.1 - https://robomongo.org/download (Download Robo 3T)
* Файлы `cars.json`, `suppliers.json`, `supplies.json` - <a href="./cars, suppliers, supplies.zip" target="_blank">cars, suppliers, supplies.zip</a>

### Основные задания
1. Установить `MongoDB` и `Robo 3T`
2. Запустить локальный сервер
3. Создать новую БД `Products`
4. Создать новую коллекцию `Cars`
5. Импортировать данные в коллекцию из файла `cars.json` (`.\mongoimport.exe --db Products --collection Cars --type json --file cars.json --jsonArray`)
6. Вывести все машины, которые были выпущены в `1990` году и позднее, отсортировать по году выпуска в порядке убывания
7. Вывести все машины марки `Audi` белого цвета (`White`)
8. Выбрать машины, которые дешевле `25000`, отсортировать по возрастанию и вывести первые `3`
9. Вывести машины черного цвета (`Black`) или машины марки `Mersedes`
10. Для всех машин, которые старше 30 лет (`1988`) добавить поле `discount` и установить `30` в качестве значения
11. Вывести все машины, кроме машин марки `BMW`
12. Вывести сумму цен, среднюю цену, минимальную цену и максимальную цену на автомобили марки `Volvo`
13. Выполнить импорт из файла `suppliers.json` (`.\mongoimport.exe --db Products --collection Suppliers --type json --file suppliers.json --jsonArray`)
14. Выполнить импорт из файла `supplies.json` (`.\mongoimport.exe --db Products --collection Supplies --type json --file supplies.json --jsonArray`)
15. Вывести все поставки (`Supplies`), для которых поставщик (`supplier`) имеет статус `Активен` (`Suppliers.isActive = true`)
16. Вывести имя компании (`companyName`), адрес (`address`), телефон (`phone`) поставщиков (`Suppliers`), дату поставки (`date`) из коллекции `Supplies`, которые поставляли автомобили марки `Mersedes`, отсортировать по дате поставки в порядке убывания (`Для преобразования строки в дату можно использовать $dateFromString`)
17. Удалить коллекцию `Cars`
18. Удалить БД `Products`

### Дополнительные задания
В процессе дополнения...
