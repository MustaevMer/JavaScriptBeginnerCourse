// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов,
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
    { 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
    { 'user' : 'Bob', 'password' : 'AMyNAmeIsBob' }
 ];
 function getFieldValues(data, value){
     var array = [];
     for (var i = 0; i < data.length; i++){
         array[i]=data[i][value];
     }
     return array.sort();
 }
 console.log(getFieldValues(usersData, 'user'));


// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
function filter(numbers, isEven) {
    for (var i = 0; i < numbers.length; i++) {
        if (isEven(numbers[i]) === true) {
            console.log(numbers[i]);
    }
}
}
console.log(numbers.filter(isEven));



// 3) Даны 2 строки со словами (без знаков препинания),
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
function findSimilarWords(s1, s2) {
    var array = [];
    var first = s1.split(" ");
    var second = s2.split(" ");
    for(var i=0; i<first.length; i++) {
        if (second.includes(first[i]) && !array.includes(first[i])) {
            array.push(first[i]);
        }
    }
    return array;
}
console.log (findSimilarWords(firstLongString, secondLongString));


// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
function makeItClean(array){
    var newArray = [];
    for (var i = 0; i<array.length; i++){
        for (var j = 0; j<array[i].length; j++){
            if (!newArray.includes(array[i][j]) && !newArray.includes(+array[i][j])) {
                newArray.push(array[i][j])
            }
        }
    }
    return newArray;
}
console.log(makeItClean(totalMessArray));
