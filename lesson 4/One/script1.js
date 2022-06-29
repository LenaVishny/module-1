'use strict';

    let productName = prompt('Наименование товара');

    let productAmount =  prompt('Количество товара'); 
    
    let productCategory = prompt('Категория товара');

    let productPrice =  prompt('Цена товара');

    if(productAmount  != +productAmount || productPrice != +productPrice){
        console.log("Вы ввели некорректные данные")
    };
    