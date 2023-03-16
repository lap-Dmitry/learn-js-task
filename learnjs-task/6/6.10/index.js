// Связанная функция как метод
function f() {
    alert(this);
}

let user = {
    g: f.bind(null)
};

user.g(); // Функция выведет null


// Повторный bind
function f() {
    alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); // Данный код выведет "Вася"


// Свойство функции после bind
function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert(bound.test); // Код выведет "undefined", т.к. у bind другой объект и у него нет свойства test


// Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user2 = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user2.loginOk.bind(user), user2.loginFail.bind(user));


// Использование частично применённой функции для логина
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user3 = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(() => user3.login(true), () => user3.login(false));