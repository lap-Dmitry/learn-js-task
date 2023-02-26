// Сделать первый символ заглавным
function ucFirst(str) {
    if (!str) {
        return str
    }

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("петя" ));


// Проверка на спам
function checkSpam(str) {
    let lowStr = str.toLowerCase();

    return lowStr.includes("viagra") || lowStr.includes("xxx");
}

alert( checkSpam("buy ViAgRa now") );
alert( checkSpam("free xxxxx") );
alert( checkSpam("innocent rabbit") );


// Усечение строки
function truncate(str, maxLenght) {
    return (str.length > maxLenght) ?
        str.slice(0, maxLenght - 1) + "..." : str;
}


// Выделить число
function extractCurrencyValue(str) {
    return +str.slice(1);
}