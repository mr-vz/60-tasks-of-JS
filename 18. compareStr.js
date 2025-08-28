// Напишите функцию `comparison(str1, str2)`, которая сравнивает
// строки без учёта регистра символов.

function comparison(str1, str2) {
    return str1 === str2.toLowerCase() ? true : false
};

// Примеры использования:
console.log(comparison('string', 'StRiNg')) //-->  true
console.log(comparison('string', 'Redev')) //-->  false
