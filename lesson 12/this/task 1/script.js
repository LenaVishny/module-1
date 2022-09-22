'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(width) {
    this._width = width;
  },

  set height(height) {
    this._height = height;
  },

  get calcPerim() {
    return `${(this._width + this._height) * 2} см`;
  },

  get calcArea() {
    return `${this._width * this._height} см`;
  },
};
rectangle._height = 10;
rectangle._width = 20;

console.log(rectangle.calcPerim);
console.log(rectangle.calcArea);
