// Напишите функцию `removeDuplicate(str)`, которая возвращает строку,
// очищенную от слов-дупликатов, т.е. 
// каждое слово должно повторяться не более одного раза.

function removeDuplicate(str) {
    return [...new Set(str.split(', '))]
};

// Примеры использования:
const str = "вишня, груша, слива, груша";

console.log(removeDuplicate(str)) //--> "вишня, груша, слива"
