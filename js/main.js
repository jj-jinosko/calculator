
let num1 = null;
let num2 = null;
let operator = null;

// assign html components
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");

const addBox = document.getElementById("add");
const subtractBox = document.getElementById("subtract");
const multiplyBox = document.getElementById("multiply");
const divideBox = document.getElementById("divide");
const equalsBox = document.getElementById("equals");

const clearBox = document.getElementById("clear");
// read if these updating parameters should be let or const?
let num1Box = document.getElementById("num1");
let num2Box = document.getElementById("num2");
let operatorBox = document.getElementById("operator");
let resultBox = document.getElementById("result");

// assign num1 and num2
const selectNumber = function (number){
    if (num1 == null){
        num1 = number;
    } else if(num1 != null && operator == null){
        let num1String = num1.toString().concat(number.toString());
        num1 = Number(num1String);
        console.log("num1", num1);
    } else if(num2 == null){
        num2 = number;
    } else if(num2 != null){
        let num2String = num2.toString().concat(number.toString());
        num2 = Number(num2String);
        console.log("num2", num2);
    }
}

const selectOperator = function (selection){
        operator = selection;
}


// operations (can use reduce on array of operations or switch/case)
// https://stackoverflow.com/questions/22303738/passing-a-math-operator-as-a-parameter
//  +, -, x, /

// --------------- reduce 
// const operations = { 
//     "+" : (operand1, operand2) => operand1 + operand2,
//     "-" : (operand1, operand2) => operand1 - operand2,
//     "*" : (operand1, operand2) => operand1 * operand2,
//     "/" : (operand1, operand2) => operand1 / operand2,
// };

// function accumulate(list, operator) {
//     return list.reduce(operations[operator]);
// }

//console.log(accumulate([1, 2, 3, 4], "+")); 

// -----------------switch--------------------------
//
const operations = a => str => b => {switch(str) {
    case "+": return a + b
    case "-": return a - b
    case "*": return a * b
    case "/": return a / b
    default: return 'Invalid operation'
  }}
// ---------------------------------------
const calculate = function (){
        console.log("num1", num1);
        console.log("operator", operator);
        console.log("num2", num2);
        let result = operations(num1)(operator)(num2);
        console.log("result", result);
        return result;

} 

// const displaySelected = function (){
//     num1Box.textContent = num1;
//     operatorBox.textContent = operator;
//     num2Box.textContent = num2;
// }

const evaluateEquals = function(){
    let result = calculate();
    // if(result){ //won't work for 0
        console.log("got here");
        
        displayResult(result);
        num1 = result;
        num2 = null;
}

const evaluateOther = function(newOperator){
    selectOperator(newOperator);
    result = calculate();
        num1 = result;
        // operator = operator;
        num2 = null;
        // result = result;
        
        displayResult(result);
}

const displayResult = function (result){
    num1Box.textContent = num1;
    operatorBox.textContent = operator;
    num2Box.textContent = num2;
    resultBox.textContent = result;
};

const clearSelections = function (){
    num1 = null;
    num2 = null;
    operator = null;
}

// could reconfigure to select number based on textContent of buttons
// seven.addEventListener("click", function(){ alert("Hello World!"); });
nine.addEventListener("click", function(){ selectNumber(9); });
nine.addEventListener("click", displayResult);
eight.addEventListener("click", function(){ selectNumber(8); });
eight.addEventListener("click", displayResult);
seven.addEventListener("click", function(){ selectNumber(7); });
seven.addEventListener("click", displayResult);
six.addEventListener("click", function(){ selectNumber(6); });
six.addEventListener("click", displayResult);
five.addEventListener("click", function(){ selectNumber(5); });
five.addEventListener("click", displayResult);
four.addEventListener("click", function(){ selectNumber(4); });
four.addEventListener("click", displayResult);
three.addEventListener("click", function(){ selectNumber(3); });
three.addEventListener("click", displayResult);
two.addEventListener("click", function(){ selectNumber(2); });
two.addEventListener("click", displayResult);
one.addEventListener("click", function(){ selectNumber(1); });
one.addEventListener("click", displayResult);
zero.addEventListener("click", function(){ selectNumber(0); });
zero.addEventListener("click", displayResult);

// +, -, *, /
// addBox.addEventListener("click", function (){ selectOperator("+") });
addBox.addEventListener("click", function (){ evaluateOther("+") });
subtractBox.addEventListener("click", function (){ evaluateOther("-") });
multiplyBox.addEventListener("click", function (){ evaluateOther("*") });
divideBox.addEventListener("click", function (){ evaluateOther("/") });

// =, clear
equalsBox.addEventListener("click", evaluateEquals);

clearBox.addEventListener("click", clearSelections);
clearBox.addEventListener("click", displayResult);

