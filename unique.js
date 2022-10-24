// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

// **Input**: String

// **Output**: Boolean

// Solution 1
function isUnique(str) {
     for (let i = 0; i < str.length; i++) {
         if (str.lastIndexOf(str[i]) !== i) {
           return false
         }
     }
     return true
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false