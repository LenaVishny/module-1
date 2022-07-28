'use strict';

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
};

console.log(getRandomNumber());

const getRandomArray = (a) => {
    const randomArray = [];
    for (let i = 0; i < a; i++) {
        randomArray.push(getRandomNumber());
    }
    return randomArray;
};

console.log(getRandomArray(100));



