'use strict';

const play = n => {
  const m = Math.floor(Math.random() * 100) + 1;
  if (n < 1 || n > 100) {
    alert('Введи число от 1 до 100!');
  } else {
    if (n > m) {
      alert('МЕНЬШЕ!');
    } else if (n < m) {
      alert('БОЛЬШЕ!');
    } else {
      alert('ПРАВИЛЬНО!');
    }
  }
};
console.log(play(50));
