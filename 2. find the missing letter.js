// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает недостающую букву. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.
// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

function findMissingLetter(array) {
    if (array.length < 2) {
        return 'incorrect array! It must be >= 2'
    }
 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let indexOfLetter = alphabet.indexOf(array[0])
    for(let i = indexOfLetter; i < indexOfLetter + array.length; i++) {
        if(array[i - indexOfLetter] !== alphabet[i]) {
            return alphabet[i]
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['k','m','n','o','p']));
console.log(findMissingLetter(['s','t','v']));