'use strict';

const getRandomArray = a => {
  const getRandomNumber = () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    return randomNumber;
  };
  const randomArray = [];
  // вот эту часть ниже надо переделать? я не понимаю как?
  for (let i = 0; i < a; i++) {
    randomArray.push(getRandomNumber());
  }
  const result = (randomArray) => randomArray.reduce((sum, num) => sum + num, 0);
  if (result < 50) {
    randomArray.push(getRandomNumber());
  } else {
    return randomArray;
  }
};
console.log(getRandomArray(10));
