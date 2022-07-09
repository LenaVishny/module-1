'use strict';

const exponentiation = () => {
    for (let i = 1; i < 11; i++) {
        console.log ('---------');
        for (let y = 1; y < 11; y++) {
            const res = Math.pow(i, y);
            console.log (`${i} ** ${y} = ${res}`);
        }
    }
}
exponentiation();