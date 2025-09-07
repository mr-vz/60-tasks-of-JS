// Напишите функцию `uniqueLetters(str)`, которая возвращает строку,
// оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

function uniqueLetters(str) {
    return [...new Set(str.split(''))]
};

// Примеры использования:

console.log(uniqueLetters('anaconda')) //--> 'ancod'
console.log(uniqueLetters('redev')) //--> 'redv'
