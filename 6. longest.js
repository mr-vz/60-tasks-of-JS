// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.

function longest(str1, str2) {
    let newStr = str1+str2
    const uniqueLetters = [...new Set(newStr.split('').sort())].join('');
    return uniqueLetters
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")) //--> "abcdefklmopqxy"