'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов',];
const failledStudents = ['Сидоров', 'Смирнов', 'Попов'];

const successfully  = allStudents.filter(student => !failledStudents.includes(student));

console.log(successfully);