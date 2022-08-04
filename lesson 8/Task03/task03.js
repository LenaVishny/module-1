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
    while (randomArray.length < a) {
        let randomNumber = getRandomNumber(n, m);

        switch (c) {
            case 'even':
                if (randomNumber % 2 == 0){
                    randomArray.push(randomNumber)
                } else {
                    continue
                }
                break;

            case 'odd':
                if (randomNumber % 2 == 1){
                    randomArray.push(randomNumber)
                } else {
                    continue
                }
                break;   
                default:
                    randomArray.push(randomNumber);    
        }
    }
    return randomArray;
}
console.log(getRandomArray(10, 50, -50, 'even'));


