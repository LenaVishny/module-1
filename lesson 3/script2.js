

    let productName = prompt('Наименование товара');

    let productAmount = prompt('Количество товара');
    productAmount = Number(productAmount);

    let productCategory = prompt('Категория товара');

    let productPrice = prompt('Цена товара');
    productPrice = Number(productPrice);

    console.log(typeof productAmount);
    console.log(typeof productPrice);

    console.log(`На складе ${productAmount} шт. товара "${productName}" на сумму ${productAmount * productPrice} рублей`);


    