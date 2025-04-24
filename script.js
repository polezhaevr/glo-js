let title = "Проект по расчету стоимости работы",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 10000,
    rollback = 10,
    fullPrice = 100000,
    adaptive = true;

console.log(" Тип данных переменной 'title':", typeof title, '\n',
    "Тип данных переменной 'fullPrice':", typeof fullPrice, '\n',
    "Тип данных переменной 'adaptive':", typeof adaptive);

console.log("Стоимость верстки экранов", screenPrice, "рублей");
console.log("Стоимость разработки сайта", fullPrice, "рублей");
console.log(screens.toLocaleLowerCase().split(' '));

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100))