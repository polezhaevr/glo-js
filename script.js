'use strict'

let title = prompt("Как называется ваш проект?"),
    screens = prompt("Какие типы экранов нужно разработать?"),
    screenPrice = +prompt("Сколько будет стоить данная работа?"),
    adaptive = prompt("Нужен ли адаптив на сайте?"),
    serviceOne = prompt("Какой дополнительный тип услуги нужен?"),
    servicePriceOne = +prompt("Сколько это будет стоить?"),
    serviceTwo = prompt("Какой дополнительный тип услуги нужен?"),
    servicePriceTwo = +prompt("Сколько это будет стоить?"),
    rollback = 10;

const getAllServicePrices = function() {
    let allServicePrices = screenPrice + servicePriceOne + servicePriceTwo;
    return allServicePrices
}

const getFullPrice = function() {
    let fullPrice = screenPrice + getAllServicePrices();
    return fullPrice
}

const getTitle = function(str) {
    let newTitle = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return newTitle
}

console.log("Название проекта:", getTitle(title));

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getServicePercentPrices = function() {
    let servicePercentPrice = getFullPrice() - (getFullPrice() * (rollback / 100));
    return servicePercentPrice
}

adaptive === "Да" || adaptive === "Нужен" || adaptive === "да" || adaptive === "нет" ?
    adaptive = true : adaptive = false;

showTypeOf(getTitle(title));
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

console.log(getRollbackMessage(getFullPrice()));

console.log("Стоимость за вычетом процента отката посреднику", getServicePercentPrices());