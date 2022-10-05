// напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);