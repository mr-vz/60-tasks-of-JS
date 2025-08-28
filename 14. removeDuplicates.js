// Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr.

function removeDuplicates(array) {
    
    return [...new Set(array)]
}

// Примеры использования:
let arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
  ];
  
 console.log(removeDuplicates(arr)) // --> ["php","css","script","html","java"]