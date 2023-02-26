// Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
    return str.split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );


// Фильтрация по диапазону
function filterRange(arr, a, b) {

    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );
alert( arr );


// Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr1, a, b) {

    for (let i = 0; i < arr1.length; i++) {
        let val = arr1[i];


        if (val < a || val > b) {
            arr1.splice(i, 1);
            i--;
        }
    }

}

let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4);

alert( arr1 );


// Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr2 );


// Скопировать и отсортировать массив
function copySorted(arr3) {
    return arr3.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

alert( sorted );
alert( arr3 );


// Создать расширяемый калькулятор
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}


// Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

alert( names );


// Трансформировать в объекты
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );


// Отсортировать пользователей по возрасту
function sortByAge(arr4) {
    arr4.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr4 = [vasya2, petya2, masha2];

sortByAge(arr4);


alert( arr4[0].name );
alert( arr4[1].name );
alert( arr4[2].name );


// Перемешайте массив
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Получить средний возраст
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr5 = [vasya3, petya3, masha3];

alert( getAverageAge(arr) );


// Оставить уникальные элементы массива
function unique(arr5) {
    let result = [];

    for (let str of arr5) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );


// Создайте объект с ключами из массива
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}