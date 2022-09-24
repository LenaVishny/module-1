'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this._discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this._discount = 21;
    }
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
      sum += (productPrice * productAmount) - this._discount / 100, 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('boots', 5000, 1);
cart.add('skirt', 3000, 2);
cart.add('sweater', 4000, 3);
cart.setDiscount = 'METHED';

cart.print();
