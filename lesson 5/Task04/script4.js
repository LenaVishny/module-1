'use strict';

const calculate = (cartTotal = 0, numberProducts = 0, promoCode) => {
    let sum = cartTotal;
    if(numberProducts > 10){
        sum -= sum * 0.03;
    }

    if(sum > 30000){
        let sumOne = sum - 30000;
        sumOne -= sumOne * 0.15;
        sum = 30000 + sumOne;
    }

    if(promoCode.toUpperCase() === "METHED"){
        sum -= sum * 0.1;
    }
    
    if (promoCode.toUpperCase() === "G3H2Z1" && sum > 2000){
        sum -= 500;
    } 

    return sum;
}
console.log(calculate(40000, 9, "G3H2Z1"));