let num1 = 56;
let num2 = 78;

function sum(num1, num2) {
    let result = num1 + num2;
    return "Wynik dodawania wynosi " + result;
}

function substract(num1, num2) {
    let result = num1 - num2;
    if (result < 0) {
        return "Wynik jest nieprawidłowy";
    } else if (result > 0) {
        return "Wynik odejmowania wynosi " + result;
    }   
}   

function substract(num2, num1) {
    let result = num2 - num1;
    if (result < 0) {
        return "Wynik jest nieprawidłowy";
    } else if (result > 0) {
        return "Wynik odejmowania wynosi " + result;
    }
    
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return "Wynik mnożenia wynosi " + result;
}

console.log(sum(num1, num2));

console.log(substract(num1, num2));

console.log(substract(num2, num1));

console.log(multiply(num1, num2));
