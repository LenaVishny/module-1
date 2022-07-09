'use strict';

const isPrime = () => {
    let y = 5
    let res = true;
    for (let i = 2; i < y ; i++) {
            if (y % i === 0) {
                res = false;
            }
    }
    console.log(res);
}
isPrime();