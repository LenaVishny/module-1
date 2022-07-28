'use strict';

const range = (n, m) => {
  const arrayYear = [];
  for (let i = n; i <= m; i++) {
    arrayYear.push(i);
    }
  const newArray = [];
  arrayYear.forEach(year => { 
  if (leapYear(year)) 
  newArray.push(year);
});
return newArray;
};

const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
  } 
}
console.log(range(1982,2022));