//Problem 1 :- To get single digit number

let Take = (Math.floor(Math.random() * 10));
console.log("Single digit number = " + Take);

//Problem 2 :- To get dice number between 1-6

let num = (Math.floor(Math.random() * 6) + 1);
console.log("Dice number = " + num);

//Problem 3:- Addition of two dice number

let num1 = (Math.floor(Math.random() * 6) + 1);
let num2 = (Math.floor(Math.random() * 6) + 1);
let Addition = num1 + num2;
console.log("Addition of the two dice number = " + Addition);

//problem 4 :- Sum and average  of two digit random number

let number1 = (Math.floor(Math.random() * 99) + 1);
let number2 = (Math.floor(Math.random() * 99) + 1);
let number3 = (Math.floor(Math.random() * 99) + 1);
let number4 = (Math.floor(Math.random() * 99) + 1);
let number5 = (Math.floor(Math.random() * 99) + 1);

let sum = (number1 + number2 + number3 + number4 + number5);
console.log("Sum of 5 two digit random number is  = " + sum);

let Average = sum / 5;
console.log("Average of 5 two digit random number is  = " + Average);


//Problem 5 :- Unit Conversion

//Inches to feet conversion
let inches = 42;
let InchToFeet = inches / 12;
console.log("Inches to feet conversion =  " + InchToFeet);

//Rectangular conversion of feet into meters 
let plotInFeet = 60 * 40;
let plotInMeters = plotInFeet / 3.281;
console.log("Conversion of rectangular plot of feet into meters =  " + plotInMeters);

// Calculation of 25 such Plots
let plotInFeet1 = 60 * 40;
const numOfPlots = 25;
let plotInMeters1 = numOfPlots * (plotInFeet1 / 3.281);
console.log("Calculation of 25 plots  =" + plotInMeters1);