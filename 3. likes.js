// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. 
// Люди могут "лайкать" сообщения в блогах,изображения или другие предметы. 
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию likes :: [String] -> String, которая 
// должна принимать входной массив, содержащий имена людей,которым нравится элемент. 
// Он должен возвращать отображаемый текст, как показано в примерах:

// Например:
// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

function likes(array) {
    let len = array.length
    switch (len) {
        case 0:
            return 'no one likes this'
            break;
        case 1:
            return array[0]+' likes this'
            break;
        case 2:
            return array[0] + ' and ' + array[1] +' likes this'
            break;
        case 3:
            return array[0] + ', ' + array[1] + ' and ' + array[2] +' likes this'
            break;
        default:
            return `${array[0]}, ${array[1]} and ${len-2} others likes this`
            break;
    }
}

console.log(likes([])) //--> 'no one likes this'
console.log(likes(['Peter'])) // --> 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])) // --> 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])) // --> 'Max, John and Mark like this')
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) // --> 'Alex, Jacob and 2 others like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Tim']))