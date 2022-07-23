'use strict';
//копирование с первой задачи
const randomNumbers = () => {
    return Math.floor(Math.random() * 101);
}
const newArray = Array(100).fill(0).map(randomNumbers);
console.log(newArray);

//рандомное число из диапозона m и n
const randomNumbersTwo = (m, n) => {
    return Math.floor(Math.random() * (n - m + 1) ) + m;
}
console.log(randomNumbersTwo(5, 20));
