'use strict';

const addPrefix = ([...arr], prefix) => {
    let arrTwo = [];
    for (let elem of arr){
        arrTwo.push(`${prefix} ${elem}`);
    }
    return arrTwo;
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, "Mr"));
