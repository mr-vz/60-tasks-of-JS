//Напишите функцию, которая принимает массив и переносит все 0 в конец, 
// не изменяя порядок остальных элементов массива.

function moveZeros(array) {
    let zeroArray = array.filter(el => el === 0)
    let newArray = array.filter(el => el !== 0)
    return newArray.concat(zeroArray)
    //return [...newArray, ...zeroArray]
} 

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
