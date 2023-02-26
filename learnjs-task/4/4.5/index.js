// Две функции - один объект
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );


// Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
	this.read = function() {
		this.a = +promt("Введите число");
		this.b = +promt("Введите число");		
	}

	this.sum = function() {
		return this.a + this.b;
	}

	this.mul = function() {
		return this.a * this.b;	
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// Создайте new Accumulator
function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value += +prompt("Добавьте число");
	};
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert( accumulator.value );