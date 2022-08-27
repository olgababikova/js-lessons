function getAddition(a, b) {
    return a + b;
}
function getSubtraction(a, b) {
    return a - b;
}
function getMultiplication(a, b) {
    return a * b;
}
function getDivision(a, b) {
    return a / b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return getAddition(a = arg1, b = arg2);
            break;
        case '-':
            return getSubtraction(a = arg1, b = arg2);
            break;
        case '*':
            return getMultiplication(a = arg1, b = arg2);
            break;
        case '/':
            return getDivision(a = arg1, b = arg2);
            break;
        default:
            alert('Недопустимая операция')
    }
}