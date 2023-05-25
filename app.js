let inputField = document.getElementById("inputContent");
let allButton = document.querySelectorAll("button");
// let equalBtn = document.getElementById("equalBtn");
let para = document.getElementById("numAdd");
// equalBtn.addEventListener("click",equalFunction);

// allButton.forEach(element => {
//     element.addEventListener("click",buttonClicked)
// });

// function buttonClicked(e){
//     if(e.target.innerText!== "="){

//         inputField.value += e.target.innerText;
//     }

//     console.log(inputField.value);
//     console.log(e.target.innerText);
// }

let num1 = "";
let num2 = "";
let previousOperator = "";
let operator = "";

function numberBtn(num) {
    console.log(num);
    // let value = inputField.value;
    // if(inputField.value.includes('.'))
    inputField.value += String(num);
    // console.log(num);
    previousOperator = operator;
    console.log("previous operator", previousOperator);

    console.log("number clicked");

}
function delBtn(e) {

    // console.log(e.target);
    let delValue = "";
    if (inputField.value !== "") {
        //  for(let i=0;i<inputField.value.length;i++){

        delValue = inputField.value.slice(0, -1);
        inputField.value = delValue;
        // }
        console.log(delValue);
    }

}
function numAdd() {
    // inputField.value += num; 
    operator = "+";
    if (num1 == "") {
        num1 = inputField.value;
        para.innerText += num1 + "+";
        inputField.value = 0;
    }
    else if (previousOperator == "-") {
        num2 = inputField.value;
        num1 = parseInt(num1) - parseInt(num2) + "+";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "*") {
        num2 = inputField.value;

        num1 = parseInt(num1) * parseInt(num2) + "+";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "/") {
        num2 = inputField.value;

        num1 = parseInt(num1) / parseInt(num2) + "+";
        para.innerText = num1;
        inputField.value = 0;
    }
    else {
        num2 = inputField.value;

        num1 = parseInt(num1) + parseInt(num2) + "+";
        para.innerText = num1;
        inputField.value = 0;
    }
    // operator = "";
    console.log("num1", num1);
    console.log("num2", num2);
}
function numMinus() {
    operator = "-"
    console.log("previous operator", previousOperator)
    console.log("operator", operator)
    // console.log(num1, num2);
    // if (num1 !== 0 && num2 !== 0) {
    //     console.log('ifff');
    //     (operator == "+") && console.log(num1 + num2);
    // } else {
    //     console.log('else');
    // }
    // operator = "-";
    if (num1 == 0 && previousOperator == "") {
        num1 = inputField.value;
        para.innerText += num1 + "-";
        inputField.value = 0;
    }
    else if (previousOperator == "+") {
        num2 = inputField.value;

        num1 = parseInt(num1) + parseInt(num2) + "-";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "/") {
        num2 = inputField.value;

        num1 = parseInt(num1) / parseInt(num2) + "-";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "*") {
        num2 = inputField.value;

        num1 = parseInt(num1) * parseInt(num2) + "-";
        para.innerText = num1;
        inputField.value = 0;
    }
    else {
        num2 = inputField.value;

        num1 = parseInt(num1) - parseInt(num2) + "-";
        para.innerText = num1;
        inputField.value = 0;
    }
    // operator = "";
    console.log("num1", num1);
    console.log("num2", num2);
}
function numDivide() {
    operator = "/";
    if (num1 == 0) {
        num1 = inputField.value;
        para.innerText += num1 + "/";
        inputField.value = 0;
    }
    else if (previousOperator == "+") {
        num2 = inputField.value;

        num1 = parseInt(num1) + parseInt(num2) + "/";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "-") {
        num2 = inputField.value;

        num1 = parseInt(num1) - parseInt(num2) + "/";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "*") {
        num2 = inputField.value;

        num1 = parseInt(num1) * parseInt(num2) + "/";
        para.innerText = num1;
        inputField.value = 0;
    }
    else {
        num2 = inputField.value;

        num1 = parseInt(num1) / parseInt(num2) + "/";
        para.innerText = num1;
        inputField.value = 0;
    }
    // operator = "";
}
function numMultiply() {
    operator = "*";
    if (num1 == 0) {
        num1 = inputField.value;
        para.innerText += num1 + "*";
        inputField.value = 0;
    }
    else if (previousOperator == "+") {
        num2 = inputField.value;

        num1 = parseInt(num1) + parseInt(num2) + "*";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "-") {
        num2 = inputField.value;

        num1 = parseInt(num1) - parseInt(num2) + "*";
        para.innerText = num1;
        inputField.value = 0;
    }
    else if (previousOperator == "/") {
        num2 = inputField.value;

        num1 = parseInt(num1) / parseInt(num2) + "*";
        para.innerText = num1;
        inputField.value = 0;
    }
    else {
        num2 = inputField.value;

        num1 = parseInt(num1) * parseInt(num2) + "*";
        para.innerText = num1;
        inputField.value = 0;
    }
    // operator = "";
}
function equalBtn() {
    num2 = inputField.value;
    console.log("operator", operator);
    if (num2 == 0) {
        console.log("equal ifff")
        // para.innerText = parseInt(num1) + parseInt(num2) ;
        num2 = inputField.value;
        console.log("num2", num2);
    }
    else if (operator == "+") {
        para.innerText = parseInt(num1) + parseInt(num2);
        inputField.value = 0;
    }
    else if (operator == "-") {
        para.innerText = parseInt(num1) - parseInt(num2);
        inputField.value = 0;
    }
    else if (operator == "*") {
        para.innerText = parseInt(num1) * parseInt(num2);
        inputField.value = 0;
    }
    else if (operator == "/") {
        para.innerText = parseInt(num1) / parseInt(num2);
        inputField.value = 0;
    }
    else {
        para.innerText = parseInt(num1) + parseInt(num2);
        console.log("equal else");
    }
    // operator = "";
    num1 = para.innerText;
    // num1 = "";
    num2 = "";
    inputField.value = para.innerText;
    // num1 = inputField.value;
    para.innerText = "";

}
function resetBtn() {
    para.innerText = "";
    inputField.value = "";
}