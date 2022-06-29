'use strict';
//Вторая задача
const rain =Math.round(Math.random());

if(rain === 1){
    console.log("Пошёл дождь. Возьмите зонт!")
} else (
    console.log("Дождя нет!")
);

//Третья задача:
const pointsMaths = + prompt('Введите кол-во баллов по математике:');
const pointsRussian = + prompt('Введите кол-во баллов по русскому языку:');
const pointsInformatics = + prompt('Введите кол-во баллов по информатике:');
const sumPoints = pointsMaths + pointsRussian + pointsInformatics;

if(sumPoints >= 265){
    console.log("Поздравляю, вы поступили на бюджет!")
} else {
    console.log("Вы не поступили на бюджет")
};

//Четвёртая задача:
const amountMoney = + prompt('Сколько денег Вы хотите получить?');

if (amountMoney % 100 === 0 && amountMoney > 0){
    console.log("Возьмите свои деньги!")
} else if (amountMoney === 0){
    console.log("Вы ввели 0 рублей")
} else {
    console.log("Введите сумму кратную 100")
};