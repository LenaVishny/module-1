'use strict';

const getRandomNumber = (n, m) => {
    const randomNumber = Math.floor((Math.random() * (m - n + 1)) + n);
    return randomNumber;
};


const getRandomArray = (a) => {
    const randomArray = [];
    for (let i = 0; i < a; i++) {
        randomArray.push(getRandomNumber(50, -50));
    }
    return randomArray;
};

console.log(getRandomArray(100));










