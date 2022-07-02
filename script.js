function add(n, m) {
    return n + m;
}

function subtract(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function divide(n, m) {
    return n / m;
}

function operate(operator, n, m) {
    switch(operator) {
        case "add":
            return add(n, m);
        case "subtract":
            return subtract(n, m);
        case "multiply":
            return multiply(n, m);
        case "divide":
            return divide(n, m);
        default:
            break;
    }
}