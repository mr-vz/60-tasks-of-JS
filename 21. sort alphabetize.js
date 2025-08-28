// Напишите функцию `alphabetize(str)`, которая возвращает строку,
// отсортировав её символы в алфавитном порядке.

function alphabetize(str) {
    return str.split('').sort().join('')
};

// Примеры использования:

console.log(alphabetize("redev")) //--> "deerv"
