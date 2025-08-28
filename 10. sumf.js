// Напишите функцию, которая возвращает сумму таким образом:

// Например:
// f(1)(2)(3) --> 6

function sum(arg, res = 0) {
    if (arg === undefined) {
        return res;
    }

    res += arg;
    return function(arg) {
        return sum(arg, res);
    }
}

// Примеры использования:
console.log(sum(1)(2)(3)());     // 6
console.log(sum(1)(2)(-1)());    // 2
console.log(sum(5)(10)(15)());   // 30