// Обязателен ли "else"?
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    
    return confirm('Родители разрешили?');
}  // Оба варианта будут работать, т.к. else не обязательный


// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?'); // оператор '?'
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?'); // оператор '||'
}


// Функция min(a, b)
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b
    }
}


// Функция pow(x,n)
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("Введите число");
let n = prompt("Введите степень");

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}