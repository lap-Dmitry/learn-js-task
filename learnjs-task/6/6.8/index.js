// Вывод каждую секунду
// setInterval
function printNumbers(from, to) {
    let start = from;
    let startTime = setInterval(function () {
        alert( start );
        if (start == to) {
            clearInterval(startTime);
        }
        start++;
    }, 1000);
}

// setTimeout
function printNumbers(from, to) {
    let start = from;
    setTimeout(function newStart() {
        alert( start );
        if (start < to) {
            setTimeout(newStart, 1000);
        }
        start++;
    }, 1000);
}

printNumbers(1, 5);


// Что покажет setTimeout?
let i = 0;

setTimeout(() => alert(i), 100); // ?

for (let j = 0; j < 100000000; j++) {
    i++;
}
/*  Функция будет выполнена после цикла.
    В alert будет выведено 100000000 */
