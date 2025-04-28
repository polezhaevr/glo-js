'use strict'

let title = prompt("Как называется ваш проект?"),
    screens = prompt("Какие типы экранов нужно разработать?"),
    screenPrice = +prompt("Сколько будет стоить данная работа?"),
    adaptive = prompt("Нужен ли адаптив на сайте?"),
    serviceOne = prompt("Какой дополнительный тип услуги нужен?"),
    servicePriceOne = +prompt("Сколько это будет стоить?"),
    serviceTwo = prompt("Какой дополнительный тип услуги нужен?"),
    servicePriceTwo = +prompt("Сколько это будет стоить?"),
    fullPrice = screenPrice + servicePriceOne + servicePriceTwo,
    rollback = 10,
    servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));



console.log(" Тип данных переменной 'title':", typeof title, '\n',
    "Тип данных переменной 'fullPrice':", typeof fullPrice, '\n',
    "Тип данных переменной 'adaptive':", typeof adaptive);

console.log("Стоимость верстки экранов", screenPrice, "рублей");
console.log("Стоимость разработки сайта", fullPrice, "рублей");
console.log(screens.toLocaleLowerCase().split(' '));

adaptive === "Да" || adaptive === "Нужен" || adaptive === "да" || adaptive === "нет" ?
    adaptive = true : adaptive = false;

console.log(Boolean(adaptive));
console.log("Процент отката посреднику за работу:", Math.ceil(fullPrice * (rollback / 100)), "рублей");
console.log("Итоговая стоимость:", Math.ceil(servicePercentPrice), "рублей");

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000 && fullPrice == 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0 && fullPrice == 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice == 0) {
    console.log("Что-то пошло не так");
} else {
    console.log("Что-то пошло не так");
}