'use strict'

const appData = {
    nameTitle: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {

    },
    getTitle: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    isNumber: function(num) {
        if (num === null) return null;
        const trimmed = num.trim();
        if (!trimmed) return NaN;
        const number = Number(trimmed);
        return isNaN(number) ? NaN : number;
    },
    asking: function() {
        do {
            appData.nameTitle = prompt("Как называется ваш проект?", "calc");
        } while (appData.nameTitle === null || !isNaN(appData.nameTitle))

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какие типы экранов нужно разработать?", "mobile");
                if (name !== null) {
                    name = name.trim();
                }
            } while (name === null || name === "" || !isNaN(name)); //

            let price = 0;
            do {
                let input = prompt("Сколько это будет стоить?", 100);
                price = appData.isNumber(input);
            } while (price === null || isNaN(price))

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "css");
                if (name !== null) {
                    name = name.trim();
                }
            } while (name === null || name === "" || !isNaN(name)); //
            let number;
            do {
                let input = prompt("Сколько это будет стоить?", 100);
                number = appData.isNumber(input);
            } while (number === null || isNaN(number))

            let newName = name;
            if (appData.services.hasOwnProperty(newName)) {
                newName = `${name}-${i}`;
                i++;
            }

            appData.services[newName] = +number;
        }

        appData.adaptive = prompt("Нужен ли адаптив на сайте?", "да");
        console.log("Название проекта:", appData.getTitle(appData.nameTitle));

        appData.adaptive = (appData.adaptive.toLowerCase() === 'да' || appData.adaptive.toLowerCase() === 'нужен');
    },
    addPrices: function() {
        const result = appData.screens.reduce(function(sum, item) {
            return sum + item.price
        }, 0)

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }

    },
    getFullPrice: function() {
        appData.fullPrice = Number(appData.screenPrice) + Number(appData.allServicePrices);
        return appData.fullPrice;
    },

    showTypeOf: function(variable) {
        const type = variable === null ? "null" : typeof variable;
        console.log(`Тип переменной ${variable}: ${type}`);
    },

    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.loger();
    },

    loger: function() {
        appData.showTypeOf(appData.getTitle(appData.nameTitle));
        appData.showTypeOf(appData.getFullPrice());
        appData.showTypeOf(appData.adaptive);
        console.log("Типы экранов для разработки:", appData.screens);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log("Стоимость за вычетом процента отката посреднику:", appData.servicePercentPrice);
        console.log(appData.services)
        console.log(appData.screens)
    }

}

appData.start();