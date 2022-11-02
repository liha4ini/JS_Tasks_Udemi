// Создайте функцию getRandomInt, которая выводит в блок .out-1 случайное целое число от 117 до 132. Все переменные должны быть внутри функции. Запустите эту функцию.


function randomInt(){
    const min = 117;
    const max = 132;

    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}
