// Дан массив слов, необходимо определить, 
// составлены ли все слова из одних и тех же символов.

function isTheSameSymbInArr(array) {
    const newArr = array.map(el => el.toLowerCase().split('').sort().join(''))
    let flag = true
    for(let i = 0; i < newArr.length-1; i++) {
        if(newArr[i] !== newArr[i+1]) {
            flag = false
        }
    }
    return flag
}

console.log(isTheSameSymbInArr(["кот", "ток", "кто"])) //--> true
console.log(isTheSameSymbInArr(["мото", "томо", "отом", "омто"])) //--> true
console.log(isTheSameSymbInArr(["кот", "тк", "кТо"])) //--> false