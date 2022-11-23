/* 
Funtions:
- Functions provide a blcok of code that will only be ran when it is called upon
- It starts with the keyword function followed by the name that you give it
- Functions fo not need to have parameters
- Functions do not need to return a value but often do
- Functions get "HOISTED" able to use it anywhere in code, before or after it is called
*/


/* 
1. key word funtion
2. function name (Camel Casing Rules)
3. No parameters are expected
*/

// ? Can we call the funtion before it is written? YES

example1()

// (1) .   (2) .  (3)
function example1() {
    // any code inside here will be executed when the function is called
    console.log("Example 1 function was executed")
}
// ! You MUST call the function in order for it to be executed
example1()


/* 
Funtion with Parameters
1. function keyword
2. function name
3. parameter names separated by commas
*/
// (1)     (2)       (3)
function example2(param1, param2){
    console.log("example 2 function was executed")
    console.log("param1", param1)
    console.log("param2", param2)
}

example2(10,5)
example2("Stephen", "Reed")

// ? Create a function that will add two number together and RETURN the sum

function sumTwoNumbers(number1, number2){
    console.log("number1", number1, "number2", number2);
    let total = number1 + number2;
    return total;
}

/* 
1. variable name
2. calling the function and storing the returned value
*/
//  (1) .   (2)
let sum1 = sumTwoNumbers(15, 30);
console.log("sum1", sum1);

let sum2 = sumTwoNumbers(10, 5);
console.log("sum2", sum2);

let sum3 = sumTwoNumbers(100, 50);
console.log("sum3", sum3);


// Simplified Return Statement

function sumTwoNumbers(number1, number2){
    console.log("number1", number1, "number2", number2);
    let total = number1 + number2;
    return total;
}


function sumTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  
  let add1 = sumTwoNumbers(5, 23);
  console.log(add1);
  

// ? Write a function that will take the parameters of length, width, height and return the volume of the cubiod.
// ? Store the returned value in a variable called volume1

function volume(length, width, height) {
    let volumeCalc = length * width * height;
  
    return volumeCalc;
  }
  
  let volume1 = volume(5, 6, 7);
  console.log(volume1);

//   Function Random Number

function randomNum(min, max) {
    let range = max - min + 1
  
    return Math.floor(Math.random() * range) + min
  }
  
  const random1 = randomNum(0, 100)
console.log(random1);

// Code above generates a random number between 1 and 100

  console.log(Math.round(45.9999999)); // rounds up or down

  console.log(Math.floor(45.999999)); // does not see decimal


  let randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber * 101);