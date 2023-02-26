// Использование "this" в литерале объекта
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Выведет ошибку


// Создайте калькулятор
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +promt("Введите число");
        this.b = +promt("Введите число");
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Цепь вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert( this.step );
        return this;
    }
};