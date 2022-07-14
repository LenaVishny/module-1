'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (num) => {
    return num.reduce((a, b) => (a + b)) / num.length;
}

console.log(Math.floor(getAverageValue(allСashbox)));