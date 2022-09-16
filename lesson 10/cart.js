'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
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

  calculateItemPrice() {
    return this.items.reduce((sum, {productPrice, productAmount}) =>
      sum += productPrice * productAmount, 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice());
  },
};

cart.add('boots', 5000, 1);
cart.add('skirt', 3000, 2);
cart.add('sweater', 4000, 3);

cart.print();
