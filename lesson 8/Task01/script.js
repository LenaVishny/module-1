'use strict';

const arrayRandomNumbers = () => {
    return Math.floor(Math.random() * 101);
}
const newArray = Array(100).fill(0).map(arrayRandomNumbers);
console.log(newArray);



