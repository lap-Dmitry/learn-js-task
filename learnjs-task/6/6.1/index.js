// Вычислить сумму чисел до данного
// С использованием цикла.
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

alert ( sumTo(100) );

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n) {
    return (n == 1) ? n : n + sumTo(n - 1);
}

alert( sumTo(100000) );

// С использованием формулы арифметической прогрессии.
function sumTo(n) {
    return n * (n + 1) / 2;
}

alert( sumTo(100) );

/* Решение по формуле работает быстрее всех т.к. используют три операции для любого n,
 а всех медленее работает рекурсия, т.к. используют n операций сложения.
 P.S.S Если есть оптимизация "Хвостового вызова", и рекурсивный вызов является самым последним в функции
 то выведет результат, а если нет оптимизации,
 то выведет ошибку из-за максимального размера стека */


// Вычислить факториал
function factorial(n) {
    if (n != 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}

alert( factorial(5) );


// Числа Фибоначчи
function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

alert( fib(3) );
alert( fib(7) );
alert( fib(77) );


// Вывод односвязного списка
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Цикл
function printList(list) {
    let newList = list;

    while (newList) {
        alert( newList.value );
        newList = newList.next;
    }
}
// Рекурсия
function printList(list) {
    alert( list.value );

    if (list.next) {
        printList( list.next );
    }
}

printList( list );


// Вывод односвязного списка в обратном порядке
// Цикл
function reversePrintList(list) {
    let arr = [];
    let newList = list;

    while (newList) {
        arr.push(newList.value);
        newList = newList.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}

// Рекурсия    
function reversePrintList(list) {
    if (list.next) {
        printList( list.next );
    }


    alert( list.value );
}

reversePrintList( list );