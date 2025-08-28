// Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки str.

function strip(str) {
    return str.trim().replace(/\s+/g, ' ')
};

// Примеры использования:
const str = "    Pasha is a good      boy     ";
console.log(strip(str)) //--> "Pasha is a good boy"
