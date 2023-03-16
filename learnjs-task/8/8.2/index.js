// Изменяем "prototype"
function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // true
Rabbit.prototype.eats = false; // false
delete rabbit.eats; // true
delete Rabbit.prototype.eats; // undefined

alert( rabbit.eats );


// Создайте новый объект с помощью уже существующего
function User(name) {
    this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

alert( user2.name );