'use strict'

const appData = {
    nameTitle: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    serviceOne: "",
    serviceTwo: "",
    getTitle: function(str) {
        let newTitle = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return newTitle
    },
    isNumber: function(num) {
        if (num === null) return null;
        const trimmed = num.trim();
        if (!trimmed) return NaN;
        const number = Number(trimmed);
        return isNaN(number) ? NaN : number;
    },
    asking: function() {
        appData.nameTitle = prompt("Как называется ваш проект?", "calc");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "mobile");
        do {
            const input = prompt("Сколько будет стоить данная работа?", 1000);
            appData.screenPrice = appData.isNumber(input);
        } while (appData.screenPrice === null || isNaN(appData.screenPrice))

        appData.adaptive = prompt("Нужен ли адаптив на сайте?", "да");
        console.log("Название проекта:", appData.getTitle(appData.nameTitle));

        appData.adaptive = (appData.adaptive.toLowerCase() === 'да' || appData.adaptive.toLowerCase() === 'нужен');
    },
    getAllServicePrices: function() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let number;
            do {
                const input = prompt("Сколько это будет стоить?", 100);
                number = appData.isNumber(input);
            } while (number === null || isNaN(number))

            sum += number;

            if (i === 0) {
                appData.serviceOne = prompt("Какой дополнительный тип услуги нужен?", "css");
            } else if (i === 1) {
                appData.serviceTwo = prompt("Какой дополнительный тип услуги нужен?", "html");
            }
        }
        return sum;
    },
    getFullPrice: function() {
        return Number(appData.screenPrice) + Number(appData.allServicePrices);
    },

    showTypeOf: function(variable) {
        console.log("Тип переменной", variable, ':', typeof variable);
    },

    getServicePercentPrices: function() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage: function(price) {
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
    },
    start: function() {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.loger();
    },

    loger: function() {
        appData.showTypeOf(appData.getTitle(appData.nameTitle));
        appData.showTypeOf(appData.getFullPrice());
        appData.showTypeOf(appData.adaptive);
        console.log("Типы экранов для разработки:", appData.screens);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log("Стоимость за вычетом процента отката посреднику:", appData.servicePercentPrice);

        for (let key in appData) {
            console.log(key, ":", this[key])
        }
    }

}

appData.start();