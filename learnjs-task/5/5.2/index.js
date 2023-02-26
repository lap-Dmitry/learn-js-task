// Сумма пользовательских чисел
let a = +promt("Введите число");
let b = +promt("Введите число");

alert( "Сумма чисел равна: " + a + b );


// Почему 6.35.toFixed(1) == 6.3?
/* Это происходит из-за потери точности, тем самым происходит округление к меньшему значению */
alert( (6.35 * 10).toFixed(20) ); // Перед округлением, число приближаем к целому, чтобы не происходило потери точности.


// Ввод числового значения
function readNumber() {
    let number;

    do {
        number = prompt("Введите число");
    } while (!isFinite(number));

    if (number === null || number === "") {

        return null;

    }

    return +number;
}

alert(`Число: ${readNumber()}`);


// Бесконечный цикл по ошибке
let i = 0;
while (i != 10) {
    i += 0.2;
} // Цикл будет бесконечным, потому что i не будет равной 10.


// Случайное число от min до max
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );


// Случайное целое число от min до max
function random(min, max) {
    let randomNumberInt = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(randomNumberInt);
}

alert( random(1, 9) );