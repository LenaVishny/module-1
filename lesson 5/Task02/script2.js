'use strict';

const str = "привет Мир";
function newStr() {
    const oneStr = str.toLowerCase();
    
    const twoStr = oneStr[0].toUpperCase() + oneStr.slice(1);
    console.log(twoStr);
};

newStr();
