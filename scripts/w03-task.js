/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    
    //call function
    document.querySelector('#sum').value = add(number1, number2);
    
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract (subtractNumber1, subtractNumber2) {
    return subtractNumber1 - subtractNumber2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    //call function
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
    
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (x, y) => x * y;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
};

document.getElementById("multiplyNumbers").addEventListener("click",multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers").addEventListener("click",divideNumbers);

/* Decision Structure */
function getTotal() {


// Input
let subtotal = parseFloat(document.getElementById("subtotal").value);

// Processing
if (document.getElementById("member").checked) {
    subtotal = subtotal * .8;
} 
// Output
document.getElementById("total").innerHTML = subtotal.toFixed(2);
}
document.getElementById("getTotal").addEventListener("click", getTotal);
   
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray =[1,2,3,4,5,6,7,8,9,10,11,12,13]
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').innerHTML = `Sum of Array: ${sumOfArray}`;
//numbersArray.reduce((sum, number) => sum + number);
//numbersArray.map(sumOfArray => sumOfArray * 2)
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(num => num * 2);
document.getElementById('multiplied').innerHTML = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').innerHTML = `Sum of Multiplied: ${sumOfMultiplied}`;

