// Декоратор-шпион
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}


// Задерживающий декоратор
function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

let f1000 = delay(f, 1000);

f1000("test");


// Декоратор debounce
function debounce(f, ms) {
    let isCoolDown = false;

    return function () {
        if (isCoolDown) {
            return;
        }

        f.apply(this.arguments);
        isCoolDown = true;

        setTimeout(() => isCoolDown = false, ms);
    };
}


// Тормозящий (throttling) декоратор
function throttle(func, ms) {
    let isThrottle = false, savedArgs, savedThis;

    function wrapper() {
        if (isThrottle) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this.arguments);
        isThrottle = true;

        setTimeout(function () {
            isThrottle = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}