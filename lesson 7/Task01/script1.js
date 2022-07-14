'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов',];
const failledStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = ([...allStudents], [...failledStudents]) => {
    let newArr = [];

    let myArr = allStudents.concat(failledStudents); // соединение 2-х массивов
    // создание нового через фильтр
    newArr = myArr.filter(function(student){ 
        return failledStudents.indexOf(student) < 0 || allStudents.indexOf(student) < 0; // индекс < 0 поиск ведётся по всему массиву, сравнивает все элементы
    });
    console.log(newArr);
}

filter(allStudents, failledStudents);