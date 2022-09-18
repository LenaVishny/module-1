'use strict';

const getRandomArray2 = a => {
  const getRandomNumber2 = () => {
    const randomNumber2 = Math.floor((Math.random() * 10) + 1);
    return randomNumber2;
  };
  const randomArray2 = [];
  for (let i = 0; i < a; i++) {
    randomArray2.push(getRandomNumber2());
  }
  return randomArray2;
};

console.log(getRandomArray2(10));

const getRandomArray = a => {
  const getRandomNumber = () => {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    return randomNumber;
  };
  const randomArray = [];
  // вот эту часть ниже надо переделать? я не понимаю как?
  if (a <= 0) {
    return 0;
  } else {
    return a + randomArray.push(getRandomNumber());
  }
  return randomArray;
};
console.log(getRandomArray(10));
