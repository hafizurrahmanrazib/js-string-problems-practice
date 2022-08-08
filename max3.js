// Problem 02: 
// Using If else condition
/* const jim = 84;
const dela = 99;
const chinku = 77;

if (jim > dela && jim > chinku) {
    console.log('Jim will get the cake');
}
else if (dela > jim && dela > chinku) {
    console.log('Dela will get the cake');
}
else {
    console.log('Chinku will get the cake');
} */

// Using Math.max
// Using Math.min

// Home Work-01: write a function that will take 3 numbers and return the max number
// First time do it using if else And second time do it using Math.max
// using if-else
/* function getMaxNumber(numbers) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
let num1 = 10;
let num2 = 20;
let num3 = 30;

let inputNumbers = (num1, num2, num3);
let maxNumer = getMaxNumber(inputNumbers);
console.log(maxNumer); */

// using Math.max
/* function getMaxNumber(numbers) {
    let maxValue = Math.max(num1, num2, num3);
    return maxValue;
}
let num1 = 10;
let num2 = 20;
let num3 = 30;

let inputNumbers = (num1, num2, num3);
let maxNumer = getMaxNumber(inputNumbers);
console.log(maxNumer); */



// Home Work-02: write a function that will take 3 parameters and return the min number
// First time do it using if else And second time do it using Math.min
// using if-else
/* function getMinNumber(numbers) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
let num1 = 10;
let num2 = 20;
let num3 = 30;

let inputNumbers = (num1, num2, num3);
let minNumer = getMinNumber(inputNumbers);
console.log(minNumer); */

// using Math.min
function getMinNumber(numbers) {
    let minValue = Math.min(num1, num2, num3);
    return minValue;
}
let num1 = 10;
let num2 = 20;
let num3 = 30;

let inputNumbers = (num1, num2, num3);
let minNumer = getMinNumber(inputNumbers);
console.log(minNumer);
