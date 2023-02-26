//Что выведет alert (ИЛИ)?
alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2

// Что выведет alert (И)?
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, undefine

// Что выведет этот код?
alert(null || 2 && 3 || 4); // 3

// Проверка значения из диапазона
if (age >= 14 && age >= 90);

// Проверка значения вне диапазона
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// Вопрос об "if"
if (-1 || 0) alert('first'); // alert выполнится
if (-1 && 0) alert('second'); // alert не выполнится
if (null || -1 && 1) alert('third'); // alert выполнится

// Проверка логина
let whoAreYou = prompt("Кто там?");

if (whoAreYou === "Админ") {
    let yourPassword = prompt("Пароль?");
    if (yourPassword === "Я Главный") {
        alert("Здравствуйте");
    } else if (yourPassword === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (whoAreYou === null) {
    alert("Отменено");
} else {
    alert("Я Вас не знаю");
}