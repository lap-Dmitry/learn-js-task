// Привет, object
let user = {};
user.name = "John";
user.surName = "Smith";
user.name = "Pete";

delete user.name;


// Проверка на пустоту
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}


// Объекты-константы?
const user = {
    name: "John"
};

// этот код работать будет, т.к. мы меняем свойства name, а не user
user.name = "Pete";


// Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);


// Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}