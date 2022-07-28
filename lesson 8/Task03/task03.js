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
getRandomArray(100)
console.log(getRandomArray(100))

const arrayNumbers = getRandomArray(100);

const even = arrayNumbers.filter(function (i) {
    return i % 2 === 0;
    });
console.log(even);

const odd = arrayNumbers.filter(function (i) {
    return i % 2 !== 0;
    }); 
console.log(odd);