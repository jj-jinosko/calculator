// constants 0-9 (not sure if this is ncessary?)
// const ZERO = 0;

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


let num1 = null; //use for testing calculate()
let num2 = null;
let operator = null;

// assign num1 and num2
const selectNumber = function (number){
    if (num1 == null){
        num1 = number;
    } else if(num2 == null){
        num2 = number;
        // console.log("num2", num2)
    }
}

const selectOperator = function (selection){
    if (operator == null){
        operator = selection;
    }
}

const displaySelected = function (){
    console.log('displaycalculation');
    num1Box.textContent = num1;
    operatorBox.textContent = operator;
    num2Box.textContent = num2;
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
    if(num1 != null && num2 != null && operator != null){ //also, disable enter button until all values entered
        let result = operations(num1)(operator)(num2);
        console.log(result);
        return result;
    }
}

// const calculate = function (){
//     let result = num1 + num2;
//     return result;
// };

const displayResult = function (){
    resultBox.textContent = calculate();
};

// seven.addEventListener("click", function(){ alert("Hello World!"); });
nine.addEventListener("click", function(){ selectNumber(9); });
nine.addEventListener("click", displaySelected);
eight.addEventListener("click", function(){ selectNumber(8); });
eight.addEventListener("click", displaySelected);
seven.addEventListener("click", function(){ selectNumber(7); });
seven.addEventListener("click", displaySelected);
six.addEventListener("click", function(){ selectNumber(6); });
six.addEventListener("click", displaySelected);
five.addEventListener("click", function(){ selectNumber(5); });
five.addEventListener("click", displaySelected);
four.addEventListener("click", function(){ selectNumber(4); });
four.addEventListener("click", displaySelected);
three.addEventListener("click", function(){ selectNumber(3); });
three.addEventListener("click", displaySelected);
two.addEventListener("click", function(){ selectNumber(2); });
two.addEventListener("click", displaySelected);
one.addEventListener("click", function(){ selectNumber(1); });
one.addEventListener("click", displaySelected);
zero.addEventListener("click", function(){ selectNumber(0); });
zero.addEventListener("click", displaySelected);

// +, -, *, /
addBox.addEventListener("click", function (){ selectOperator("+") });
addBox.addEventListener("click", displaySelected);
subtractBox.addEventListener("click", function (){ selectOperator("-") });
subtractBox.addEventListener("click", displaySelected);
multiplyBox.addEventListener("click", function (){ selectOperator("*") });
multiplyBox.addEventListener("click", displaySelected);
divideBox.addEventListener("click", function (){ selectOperator("/") });
divideBox.addEventListener("click", displaySelected);

// =, clear
equals.addEventListener("click", displayResult);
