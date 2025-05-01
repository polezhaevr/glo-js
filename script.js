'use strict'

let nameTitle,
    screens,
    screenPrice,
    adaptive,
    rollback = 10,
    allServicePrices,
    fullPrice,
    servicePercentPrice,
    serviceOne,
    serviceTwo;

const getTitle = function(str) {
    let newTitle = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return newTitle
}

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    nameTitle = prompt("Как называется ваш проект?", "calc")
    screens = prompt("Какие типы экранов нужно разработать?", "mobile")
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", 1000)
    }
    while (!isNumber(screenPrice))
    adaptive = prompt("Нужен ли адаптив на сайте?", "да")
    console.log("Название проекта:", getTitle(nameTitle));

    adaptive = (adaptive.toLowerCase() === 'да' || adaptive.toLowerCase() === 'нужен') ? true : false;
}

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        let price;
        do {
            price = prompt("Сколько это будет стоить?", 100);
        } while (!isNumber(price));
        sum += +price;

        if (i === 0) {
            serviceOne = prompt("Какой дополнительный тип услуги нужен?", "css");
        } else if (i === 1) {
            serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "html");
        }
    }

    return sum
}

const getFullPrice = function() {
    return Number(screenPrice) + Number(allServicePrices);
}

const showTypeOf = function(variable) {
    console.log("Тип переменной", variable, ':', typeof variable);
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(getTitle(nameTitle));
showTypeOf(getFullPrice());
showTypeOf(adaptive);

console.log("Типы экранов для разработки:", screens);
const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else if (price == 0) {
        return "Что-то пошло не так"
    } else {
        return "Что-то пошло не так"
    }
}

console.log(getRollbackMessage(fullPrice));
console.log("Стоимость за вычетом процента отката посреднику:", servicePercentPrice);