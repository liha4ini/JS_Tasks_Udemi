//  Найти самое короткое слово в строке

const findShort = string =>
    string
        .split(' ')
        .sort((a, b) => a.length - b.length[0]);