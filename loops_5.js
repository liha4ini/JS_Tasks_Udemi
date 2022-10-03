// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]


function fifthTask() {
    const arrayOfNumbers = [];
    
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}