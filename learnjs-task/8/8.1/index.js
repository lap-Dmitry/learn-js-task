// Работа с прототипами
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // true

delete rabbit.jumps;

alert( rabbit.jumps ); // null

delete animal.jumps;

alert( rabbit.jumps ); // undefined


// Алгоритм поиска
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};
/* Полученное значение вернется одинаково, вне зависимости откуда оно вызывается.
   Движки запоминаю, где нашли объект и повторно ищут его там же.  */


// Куда будет произведена запись?
let animal1 = {
    eat() {
        this.full = true;
    }
};

let rabbit1 = {
    __proto__: animal1
};

rabbit1.eat(); // При данном вызовове свойство "full" получит rabbit.


// Почему наедаются оба хомяка?
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");

alert( speedy.stomach );

alert( lazy.stomach );