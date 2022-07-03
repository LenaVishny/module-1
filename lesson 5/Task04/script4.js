'use strict';

const calculate = (cartTotal = 0, numberProducts = 0, promoCode = 0) => {
    let sum = cartTotal;
    if(numberProducts > 10){
         sum = sum - (sum * 0.03);
    };
    if(sum > 30000){
        let sumOne = sum - 30000;
        sumOne = sumOne -  sumOne * 0.15;
        sum = sum - sumOne;
    };
    if(promoCode = "METHED"){
        sum = sum - (sum * 0.1);
    } else if (promoCode = "G3H2Z1" && sum > 2000){
        sum = sum - 500;
    }; 

    return sum;
}
console.log(calculate(40000, 9, "G3H2Z1"));