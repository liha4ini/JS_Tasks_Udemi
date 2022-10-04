// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


function returnNeighboringNumbers(num) {
    const arr = [];
    arr[0] = num - 1;
    arr[1] = num;
    arr[2] = num + 1;
    
    return arr;
}