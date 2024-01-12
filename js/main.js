// constants 0-9 (not sure if this is ncessary?)
// const ZERO = 0;

// assign html components
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");



// read if these updating parameters should be let or const?
let num1Box = document.getElementById("num1");
let num2Box = document.getElementById("num2");
let operatorBox = document.getElementById("operator");
let resultBox = document.getElementById("result");


let num1 = 2; //use for testing calculate()
let num2 = null;
let operator = "+";

// assign num1 and num2
const buildCalculation = function (number){
    if (num1 == null){
        num1 = number;
    } else if(num2 == null){
        num2 = number;
        // console.log("num2", num2)
    }
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
// const operations = a => str => b => {switch(str) {
//     case "+": return a + b
//     case "-": return a - b
//     case "*": return a * b
//     case "/": return a / b
//     default: return 'Invalid operation'
//   }}
// ---------------------------------------

// const calculate = function (){
//     if(num1 != null && num2 != null && operator != null){ //also, disable enter button until all values entered
//         let result = operations(num1)("+")(num2);
//         console.log(result);
//         return result;
//     }
// }


const displayNumbersEntered = function (){
    console.log('displaycalculation');
    num1Box.textContent = num1;
    operatorBox.textContent = operator;
    num2Box.textContent = num2;
}



// seven.addEventListener("click", function(){ alert("Hello World!"); });
seven.addEventListener("click", function(){ buildCalculation(7); });
seven.addEventListener("click", displayNumbersEntered);

//seven.addEventListener("click", calculate); //this will move to enter button after tests

// =, clear

