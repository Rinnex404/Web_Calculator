function getAdd(num1, num2){
    let result = num1 + num2;
    return result;
}

function getSubtract(num1, num2){
    let result = num1 - num2;
    return result;
}

function getMultiply(num1, num2){
    let result = num1 * num2;
    return result;
}

function getDivide(num1, num2){
    let result = num1 / num2;
    return result;
}

let firstnum, calculation, secnum, total;

function operator(fnum, calc, snum){
    switch(calc){
        case "+":
            total = getAdd(fnum, snum);
        break;

        case "-":
            total = getSubtract(fnum, snum);
        break;

        case "*":
            total = getMultiply(fnum, snum);
        break;

        case "/":
            total = getDivide(fnum, snum);
        break;
    }
    return total;
}