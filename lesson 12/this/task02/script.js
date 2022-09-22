'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

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

  set setDiscount(promocode) {
    this._discount = promocode;
  },


  get getpPromocode() {
    let promocode;
    if (promocode === 'METHED') {
      return `${this._discount * 15 / 100}`;
    } else if (promocode === 'NEWYEAR') {
      return `${this._discount * 21 / 100}`;
    }
    return this.totalPrice;
  },

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    return this.items.reduce((sum, {productPrice, productAmount}) =>
      sum += (productPrice * productAmount) - this._discount, 0);
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

cart.add('boots', 5000, 1, 'METHED');
cart.add('skirt', 3000, 2);
cart.add('sweater', 4000, 3);

cart.print();
