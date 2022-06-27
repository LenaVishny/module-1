'use strict';

//Первая задача:
const income = + prompt("Какой у Вас доход?");

if (income < 15000){
    console.log(income * 13 / 100)
} else if (income >= 15000 && income <= 50000) { 
    console.log(income * 15 / 100)
} else {
    console.log(income * 30 / 100)
};
//Вторая задача:
const incomeTwo = + prompt("Ваш доход?");

if (incomeTwo < 15000){
    console.log(incomeTwo * 13 / 100)
} else if (incomeTwo >= 15000 && incomeTwo <= 50000) { 
    console.log((incomeTwo - 15000) * 20 / 100)
} else {
    console.log((incomeTwo - 50000) * 30 / 100)
};

