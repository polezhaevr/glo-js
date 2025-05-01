'use strict'

let nameTitle = prompt("Как называется ваш проект?", "calc"),
    screens = prompt("Какие типы экранов нужно разработать?", "mobile"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", 15650),
    adaptive = prompt("Нужен ли адаптив на сайте?", "да"),
    serviceOne = prompt("Какой дополнительный тип услуги нужен?", "css"),
    servicePriceOne = +prompt("Сколько это будет стоить?", 650),
    serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "html"),
    servicePriceTwo = +prompt("Сколько это будет стоить?", 700),
    rollback = 10,
    allServicePrices,
    fullPrice,
    servicePercentPrice;

const getAllServicePrices = function() {
    return screenPrice + servicePriceOne + servicePriceTwo
}

const getFullPrice = function() {
    return screenPrice + allServicePrices
}

const getTitle = function(str) {
    let newTitle = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return newTitle
}

console.log("Название проекта:", getTitle(nameTitle));

const showTypeOf = function(variable) {
    console.log("Тип переменной", variable, ':', typeof variable);
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100))
}

adaptive === "Да" || adaptive === "Нужен" || adaptive === "да" || adaptive === "нет" ?
    adaptive = true : adaptive = false;


allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(getTitle(nameTitle));
showTypeOf(getFullPrice());
showTypeOf(adaptive);

console.log("Типы экранов для разработки:", screens);
const getRollbackMessage = function(price) {
    if (price > 30000) {
        return "Даем скидку в 10%"
    } else if (price > 15000 && price < 30000 && price == 30000) {
        return "Даем скидку в 5%"
    } else if (price < 15000 && price > 0 && price == 15000) {
        return "Скидка не предусмотрена"
    } else if (price == 0) {
        return "Что-то пошло не так"
    } else {
        return "Что-то пошло не так"
    }
}

console.log(getRollbackMessage(fullPrice));
console.log("Стоимость за вычетом процента отката посреднику:", servicePercentPrice);