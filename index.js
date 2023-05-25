let inputField = document.getElementById("inputContent");
let allButtons = document.querySelectorAll("button");
let themeEle = document.getElementById("myRange");
themeEle.addEventListener("change", (e) => {
    let theme = e.target.value;
    let calcMain = document.getElementById("calcMain");
    let calcHeading = document.getElementById("calcHeading");
    let buttons = document.getElementById("buttonsAll");
    let inputFieldELe = document.getElementById("inputField");
    let inputELe = document.getElementById("inputContent");
    let deleteBtn = document.getElementById("deleteBtn");
    let resetBtn = document.getElementById("resetBtn");
    let equalBtn = document.getElementById("equalBtn");
    let buttonNum = document.querySelectorAll(".button-num");
    if (theme == 1) {
        calcMain.classList.remove("calc-main-purple");
        calcMain.classList.remove("calc-main-light");
        calcMain.classList.add("calc-main-dark");

        calcHeading.classList.remove("heading-purple");
        calcHeading.classList.remove("heading-light");
        calcHeading.classList.add("heading-dark");

        buttons.classList.remove("buttons-all-purple");
        buttons.classList.remove("buttons-all-light");
        buttons.classList.add("buttons-all-dark");

        inputFieldELe.classList.remove("input-field-purple");
        inputFieldELe.classList.remove("input-field-light");
        inputFieldELe.classList.add("input-field-dark");

        inputELe.classList.remove("input-content-purple");
        inputELe.classList.remove("input-content-light");
        inputELe.classList.add("input-content-dark");

        deleteBtn.classList.remove("del-button-purple");
        deleteBtn.classList.remove("del-button-light");
        deleteBtn.classList.add("del-button-dark");

        resetBtn.classList.remove("rst-button-purple");
        resetBtn.classList.remove("rst-button-light");
        resetBtn.classList.add("rst-button-dark");

        equalBtn.classList.remove("eql-button-purple");
        equalBtn.classList.remove("eql-button-light");
        equalBtn.classList.add("eql-button-dark");

        for (let i = 0; i < buttonNum.length; i++) {
            buttonNum[i].classList.remove("button-item-purple");
            buttonNum[i].classList.remove("button-item-light");
            buttonNum[i].classList.add("button-item-dark");
        }
        // allButtons.classList.add("input")

    }
    else if (theme == 2) {
        calcMain.classList.remove("calc-main-purple");
        calcMain.classList.remove("calc-main-dark");
        calcMain.classList.add("calc-main-light");

        calcHeading.classList.remove("heading-purple");
        calcHeading.classList.remove("heading-dark");
        calcHeading.classList.add("heading-light");

        buttons.classList.remove("buttons-all-purple");
        buttons.classList.remove("buttons-all-dark");
        buttons.classList.add("buttons-all-light");

        inputFieldELe.classList.remove("input-field-purple");
        inputFieldELe.classList.remove("input-field-dark");
        inputFieldELe.classList.add("input-field-light");

        inputELe.classList.remove("input-content-purple");
        inputELe.classList.remove("input-content-dark");
        inputELe.classList.add("input-content-light");

        deleteBtn.classList.remove("del-button-purple");
        deleteBtn.classList.remove("del-button-dark");
        deleteBtn.classList.add("del-button-light");

        resetBtn.classList.remove("rst-button-purple");
        resetBtn.classList.remove("rst-button-dark");
        resetBtn.classList.add("rst-button-light");

        equalBtn.classList.remove("eql-button-purple");
        equalBtn.classList.remove("eql-button-dark");
        equalBtn.classList.add("eql-button-light");

        for (let i = 0; i < buttonNum.length; i++) {
            buttonNum[i].classList.remove("button-item-purple");
            buttonNum[i].classList.remove("button-item-dark");
            buttonNum[i].classList.add("button-item-light");
        }
    }
    else if (theme == 3) {
        calcMain.classList.remove("calc-main-light");
        calcMain.classList.remove("calc-main-dark");
        calcMain.classList.add("calc-main-purple");

        calcHeading.classList.remove("heading-dark");
        calcHeading.classList.remove("heading-light");
        calcHeading.classList.add("heading-purple");

        buttons.classList.remove("buttons-all-dark");
        buttons.classList.remove("buttons-all-light");
        buttons.classList.add("buttons-all-purple");

        inputFieldELe.classList.remove("input-field-dark");
        inputFieldELe.classList.remove("input-field-light");
        inputFieldELe.classList.add("input-field-purple");

        inputELe.classList.remove("input-content-dark");
        inputELe.classList.remove("input-content-light");
        inputELe.classList.add("input-content-purple");

        deleteBtn.classList.remove("del-button-dark");
        deleteBtn.classList.remove("del-button-light");
        deleteBtn.classList.add("del-button-purple");

        resetBtn.classList.remove("rst-button-dark");
        resetBtn.classList.remove("rst-button-light");
        resetBtn.classList.add("rst-button-purple");

        equalBtn.classList.remove("eql-button-dark");
        equalBtn.classList.remove("eql-button-light");
        equalBtn.classList.add("eql-button-purple");

        for (let i = 0; i < buttonNum.length; i++) {
            buttonNum[i].classList.remove("button-item-dark");
            buttonNum[i].classList.remove("button-item-light");
            buttonNum[i].classList.add("button-item-purple");
        }

    }
})
let isEqual = false;
// let equalBtn = document.getElementById("equalBtn");
let para = document.getElementById("numAdd");

document.addEventListener("keyup", keyPressed);


let calculatedValue = null;
let consecutiveOperator = false;
let value = 0;
let operator = "";
let historyArr = [];
let validOperator = {
    "+": numAdd,
    "-": numMinus,
    "*": numMultiply,
    "/": numDivide
}
function keyPressed(e) {
    console.log(e.key);
    let num = e.key;
    buttonPressed(num);
}

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", clickButton);
}
function clickButton(e) {
    console.log("called");
    // inputField.value = "";
    let num = e.target.innerText;
    buttonPressed(num);
    
}
function calculated(eql) {
    // para.innerText = historyArr.join(" ");
    // historyArr.push("=");
    // historyArr.push(calculatedValue);
    // historyArr.push(operator);
    // historyArr.push(inputField.value);
    // console.log(validOperator[operator]);
    console.log(eql);
    if (operator !== "") {
        validOperator[operator]();
    }
    calculatedValue = 0;
    operator = "";
    isEqual = true;
    // para.innerText = inputField.value;
    // inputField.value = 0;

    console.log("history arr", historyArr);
}
function numAdd() {
    console.log("calculatedValue in numAdd : " + calculatedValue)
    console.log("value in numAdd : " + value)
    calculatedValue = parseFloat(calculatedValue) + parseFloat(value);
    inputField.value = calculatedValue;
    para.innerText = "";
    // operator = "+";
    value = 0;

    console.log("add function")
    // return calculatedValue;

}
function numMinus() {
    calculatedValue = parseFloat(calculatedValue) - parseFloat(value);
    inputField.value = calculatedValue;
    para.innerText = "";
    value = 0;
    // operator = "-";
    console.log("minus function")
}
function numMultiply() {
    calculatedValue = parseFloat(calculatedValue) * parseFloat(value);
    inputField.value = calculatedValue;
    para.innerText = "";
    value = 0;
    // operator = "*";
    console.log("multiply function")
}
function numDivide() {
    calculatedValue = parseFloat(calculatedValue) / parseFloat(value);
    inputField.value = calculatedValue;
    para.innerText = "";
    value = 0;
    // operator = "/";
    console.log("divide function")
}
function resetBtn() {
    para.innerText = "";
    inputField.value = "";
    calculatedValue = null;
    value = 0;
    operator = "";
    historyArr = [];
}
function deleteBtn() {
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
function buttonPressed(num) {

    if (isEqual && !(num in validOperator)) {
        //    para.innerText = calculatedValue + operator;
        inputField.value = "";
        isEqual = false
    }
    console.log(isEqual, "isEqual");
    // console.log(typeof value,"isEqual");
    if (isNaN(num) == false || num === "." && !inputField.value.includes(".")) {
        console.log("POint is here")
        value += num;
        inputField.value += num;
        consecutiveOperator = true;
        // return value;
    }
    else if (num === "=" || num === "Enter") {
        calculated();
    }
    else if (num in validOperator) {
        
        // calculatedValue = value;
        if (calculatedValue !== null && consecutiveOperator && value !== 0 && operator !== "") {
            console.log("iff ");
            calculated();
        }
        operator = num;
        if (inputField.value !== "") {
            
            calculatedValue = inputField.value;
            para.innerText = calculatedValue + operator;
        }
        
        inputField.value = "";
        value = 0;
        // return operator;
        consecutiveOperator = false;
    } else if (num === 'Backspace') {
        deleteBtn();
    }
    // else{
        //     inputField.value += num; 
        // }
        console.log("value", value);
        console.log("operator", operator);
        console.log("calculated value", calculatedValue);
    }