'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const sum = allСashbox.reduce((a, b) => a + b, 0);
const result = Math.floor(sum / allСashbox.length);

console.log(result);