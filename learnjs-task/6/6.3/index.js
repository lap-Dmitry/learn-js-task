// Независимы ли счётчики?
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); //  0
alert( counter2() ); //  1


// Объект счётчика
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter1 = new Counter();

// Функция работать будет
alert( counter1.up() ); // 1
alert( counter1.up() ); // 2
alert( counter1.down() ); // 1


// Функция в if
let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // Будет выведена ошибка, т.к. функция расположенна внутри блока if


// Сумма с помощью замыканий
function sum(a) {
    return function (b) {
        return a + b;
    }
}

sum(1)(2);
sum(5)(-1);


// Фильтрация с помощью функции
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) );

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

alert( arr.filter(inArray([1, 2, 10])) );


// Сортировать по полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1
}

users.sort(byField('name'));
users.forEach(user => alert(user.name));
users.sort(byField('age'));
users.forEach(user => alert(user.name));


// Армия функций
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // функция shooter
            alert(j); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
/* Внутри фунции не было локальной переменной "i",
   и из-за этого показания были всегда одинаковыми */