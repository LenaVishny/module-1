'use strict';

const income = + prompt("Какой у Вас доход?");

if (income < 15000){
    console.log(income * 13 / 100)
} else if (income >= 15000 && income <= 50000) { 
    console.log(income * 15 / 100)
} else {
    console.log(income * 30 / 100)
};