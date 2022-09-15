'use strict';

const cart = {
    items: [],
    count: 0,

    get totalPrice(){
        return this.calculateItemPrice();
    },

    add(productName, productPrice, productAmount = 1) {
        this.items.push({
            productName,
            productPrice,
            productAmount,
        });
        this.increaseCount(productAmount);
        
    },

    increaseCount(number) {
        this.count += number;
    },
    //не понимаю как изменить тут? чтобы сумму он возвращал, а не записывал в свойство totalPrice?
    calculateItemPrice() {
        this.totalPrice = this.items.reduce((sum, {productPrice, productAmount}) => {
            return sum += productPrice * productAmount;
        }, 0)
    },

    clear(){
        this.items = [];
        this.count = 0;
        this.totalPrice = 0;
    },
    print(){
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice());
    },
};

cart.add('boots', 5000, 1);
cart.add('skirt', 3000, 2);
cart.add('sweater', 4000, 3);
//cart.totalPrice = 10;
cart.print();