'use strict';
const productName = 'fridge';
const productAmount = 25;
const productCategory = 'hardware';
const productPrice = 50000;

//console.log(productName);

const totalAmount = productAmount * productPrice;
console.log(totalAmount);

{
    const productNameTwo = 'microwave';
    const productAmountTwo = 10;
    const productCategoryTwo = 'hardware';
    const productPriceTwo = 7000;

    console.log(productNameTwo);
    console.log(`общая сумма товара: ${productAmountTwo * productPriceTwo}`);
}