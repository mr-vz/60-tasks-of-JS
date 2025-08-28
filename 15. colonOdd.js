// Напишите функцию colonOdd(num), которая принимает число num в 
// качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
// Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7

function colonOdd(num) {
    let newArr = []
    const arrOfNum = num.toString().split('').map(Number)
    for(let i = 0; i < arrOfNum.length; i++) {
        newArr.push(arrOfNum[i])
        if((arrOfNum[i] % 2 !== 0) && (arrOfNum[i + 1]) && (arrOfNum[i + 1] % 2 !== 0)) {
            newArr.push(':')
        }
    }
    return newArr.join('') 
}

// Примеры использования:
console.log(colonOdd(55639217)) // --> 5:563:921:7