// Создайте метод объекта `String endsWith()`, который сравнивает 
// подстроку str1 с окончанием исходной строки str и определяет, 
// заканчивается ли строка символами подстроки.

String.prototype.endsWith = function(substring) {
    return this.slice(this.length - substring.length, this.length) === substring ? true : false
};

// Примеры использования:
const str = "Каждый охотник желает знать"; 
const str1 = "скрипт";
const str2 = "знать";

console.log(str.endsWith(str1)) //-->  false
console.log(str.endsWith(str2)) //-->  true
