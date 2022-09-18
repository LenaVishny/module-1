'use strict';

/* const rectangle = {
    width,
    height,

    get calcPerim() {
        return (this.width + this.height) * 2;
    },

    get calcArea() {
        return this.length * this.width;
    },
};*/


// не понимаю как это сделать через гетер?
const createRect = (width, height) => ({
  width,
  height,
  calcArea() {
    return this.width * this.height;
  },
  calcPerim() {
    return (this.width + this.height) * 2;
  },
});
const rect = createRect(10, 15);
console.log(rect.calcArea());
console.log(rect.calcPerim());


