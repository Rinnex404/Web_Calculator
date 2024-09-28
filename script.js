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

let firstnum, calculation, secnum, total, ifNumIsPressed, ifSubmitIsPressed, currentnum, displayvalue;

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

function showResult(){
    let result = operator(firstnum, calculation, secnum);
    //console.log(firstnum + "" + calculation + "" + secnum + "=" + result);
    ifNumIsPressed = false;
    ifSubmitIsPressed = true;
    numDis.value = result;
}

const btn = document.querySelectorAll(".calcbutton");   //button for (1-9)
const calc_buttons = document.querySelectorAll(".operator"); //button for (/*-+)
const submit_button = document.querySelector("#submit"); //button for (=)
let numDis = document.querySelector(".display"); //input display
const clear_button = document.querySelector(".clear"); //clear button
const undo_button = document.querySelector(".undo");

btn.forEach((btns) => {
    btns.addEventListener("click", ()=>{
        if(ifNumIsPressed === false){
            numDis.value = "";              //reset display number if second number is entered
        }

        currentnum = btns.value;
        ifNumIsPressed = true;
        display(currentnum);
});
});

function display(num){
    if(ifSubmitIsPressed === true){     //if user press a new batch number instead of new operator it will reset all value
        firstnum = null;                
        secnum = null;
        calculation = null;
        ifSubmitIsPressed = false;
    }

    numDis.value += num;
}


calc_buttons.forEach((calc_button) => {
    calc_button.addEventListener("click", ()=>{

        if(ifNumIsPressed === true && firstnum != null){    //check if first and second number is entered,
            secnum = Number(numDis.value);                  //and will direct show result if user press operator button instead of equal button
            showResult();
        }

        calculation = calc_button.value;
        ifNumIsPressed = false;
        ifSubmitIsPressed = false;
        firstnum = Number(numDis.value);

});
});


submit_button.addEventListener("click", ()=>{
    if(ifNumIsPressed === false){   //clear display value
        numDis.value = "";
    }

    secnum = Number(numDis.value);

    if(firstnum != null && calculation != null && secnum != null){  //if both number, operator and equal is pressed, show result
        showResult();
    }
});

clear_button.addEventListener("click", ()=>{        //reset all calculation
    numDis.value = "";
    firstnum = secnum = calculation = null;         
});

undo_button.addEventListener("click", ()=>{
    numDis.value = (numDis.value).slice(0,-1);
});

