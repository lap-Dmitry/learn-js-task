// Деструктурирующее присваивание
let user = {
    nameUs: "John",
    years: 30
};

let { nameUs, years: age, isAdmin = false } = user;

alert( nameUs );
alert( age );
alert( isAdmin );


// Максимальная зарплата
function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}