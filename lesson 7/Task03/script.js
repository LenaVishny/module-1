'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const pre = 'Mr ';
const addPrefix = (pre + names.join('; ' + pre));
console.log(addPrefix);

names.forEach((i) => {
    console.log(`${'Wr'} ${i}`);
});

