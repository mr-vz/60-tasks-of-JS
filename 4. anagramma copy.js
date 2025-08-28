// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы. 

// Например: 'abba' & 'baab' == true

// Напишите функцию, которая находит все анаграммы слова из списка. 
// В качестве параметра даны слово и массив слов. 
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.

function anagrams(word, array) {
    const sortedWord = word.split('').sort().join()
    return array.filter((w) => sortedWord === w.split('').sort().join())
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // --> ['aabb', 'bbaa']


    // let wordArr = word.split('') //массив букв слова
    // let lenWordArr = wordArr.length //длина этого массива
    // let objAmount = {}
    // let count = 0
    // for(let i = 0; i < lenWordArr; i++) {
    //     count = 0
    //     for(let j = 0; j < lenWordArr; j++) {
    //         if(wordArr[i] === wordArr[j]) {
    //             count++
    //         }
    //     }
    //     objAmount[wordArr[i]] = count
    // }
    // return objAmount //объект с количеством букв в слове