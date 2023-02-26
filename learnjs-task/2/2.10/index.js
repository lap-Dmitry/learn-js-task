// if (строка с нулём)
if ("0") {
    alert('Привет'); //Данный alert выведется
}

// Название JavaScript
let nameOfficialJavaScript = prompt("Какое официальное название JavaScript?");

if (nameOfficialJavaScript === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? “ECMAScript”!");
}

// Покажите знак числа
let num = prompt("Введите любое число");

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1)
} else {
    alert(0);
}

// Перепишите 'if' в '?'
let result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';