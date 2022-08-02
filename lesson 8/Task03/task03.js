'use strict';
const getRandomNumber = (a, b) => {
    let min;
    let max;
    if (a < b){
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }
    const randomNumber = Math.round(min + Math.random() * (max - min));
    return randomNumber;
};



const getRandomArray = (a, n, m, c) => { 
    let randomArray = [];
    for (let i = 0; i < a; i++) {
        randomArray.push(getRandomNumber(n, m));
        }
    //let d = 'even';
    switch (c) {
        case 'even':
            randomArray.filter(function (i) {
                return i % 2 == 0;
            });
            break;
        case 'odd':
            randomArray.filter(function (i) {
                return i % 2 !== 0;
            });
            break;      
    }
    return randomArray;
}


console.log(getRandomArray(100, 50, -50, 'even'));


