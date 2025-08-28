// Напишите функцию с двумя параметрами, которая создаёт массив элементов, 
// представляющих собой сумму соответствующих элементов заданных массивов.

function func(array1,array2) {
    let newArr = []
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] && array2[i]) {
            newArr.push(array1[i] + array2[i]);
        } else {
            newArr.push(array1[i]);
            
        }
    }
    return newArr
}

// Примеры использования:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6];

console.log(func(array1,array2)) // [5,7,9,4,5]