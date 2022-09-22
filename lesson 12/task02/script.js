'use strict';

const getRandomArray = a => {
  const getRandomNumber = () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    return randomNumber;
  };
  const randomArray = [];

  for (let i = 0; i < a; i++) {
    randomArray.push(getRandomNumber());
  }
  const result = randomArray.reduce((sum, num) => sum + num, 0);
  if (result < 50) {
    randomArray.push(getRandomNumber());
  }
  return randomArray;
};
console.log(getRandomArray(10));
