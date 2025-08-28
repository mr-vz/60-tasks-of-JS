// Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.

function copyArr(arr) {
    return arr.map(el => el)
}

// Примеры использования:
const vegetables = ['Капуста', 'Репа', 'Редиска']
console.log(copyArr(vegetables))
console.log(copyArr(vegetables) === vegetables)
