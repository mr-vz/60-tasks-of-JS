// Ваша задача написать функцию, которая принимает 
// в качестве параметра целое число и возводит в квадрат каждую цифру числа. 
// Результат также необходимо вернуть в виде целого числа.

function squareDigits(num) {

    return Number(num.toString().split('').map(Number).map(el => el*el).join(''))
}

console.log(squareDigits(9119)) //--> 811181