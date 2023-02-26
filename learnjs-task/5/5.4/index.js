// Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert( fruits.length ); // Выведет 4


// Операции с массивами
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");


// Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // Вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив: a, b, function(){}.


// Сумма введённых чисел
function sumInput() {

    let sumTotal = [];

    while (true) {

        let numbers = prompt("Введите число");

        if (numbers === "" || numbers === null || !isFinite(numbers)) break;

        sumTotal.push(+numbers);
    }

    let sum = 0;

    for (let number of sumTotal) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );


// Подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([2, -1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );