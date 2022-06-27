'use strict';

    let productName = prompt('Наименование товара');

    let productAmount = prompt('Количество товара'); 
    
    let productCategory = prompt('Категория товара');

    let productPrice = prompt('Цена товара');

    if(productAmount  === "" || productPrice === ""){
        console.log("Вы ввели некорректные данные")
    };
    

    //console.log(typeof productAmount);
    //console.log(typeof productPrice);

    //console.log(`На складе ${productAmount} шт. товара "${productName}" на сумму ${productAmount * productPrice} рублей`);


    