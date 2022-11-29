/* 
Conditionals
- Conditionals are used for decision making
- Tools we have available for decision making are the following:
    - if statements
    - if else statements
    - if else if statements
    - switch
    - ternary
*/


// ! Example of an if statement

var currentHour = 20
var greeting = ""
// current hour is less than 12 store good morning in greeting
if(currentHour<12){
    // inbetween brackets is considered a block of code
    // this block of code will be executed if the conditional is true
greeting = "Good Morning"
}

// ! Example of if else

// if the current hour is less than 12 say good morning else say good afternoon

if(currentHour<12){
greeting = "Good Morning"
} else{
    // block of code gets executed if the conditional is NOT TRUE
    greeting = "Good Afternoon"
}
console.log(greeting)

// ! Example if else if statement
// if the hours are between 12-5 (12 or 17) greeting of "Good Afternoon" from the hours of greater than 17 to 24 greeting will be "Good Evening"
if(currentHour<12){
    greeting = "Good Morning"
    } else if (currentHour>=12 && currentHour <= 17) {
        // block of code gets executed if the conditional is NOT TRUE
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }
    console.log(greeting)


    // Code Refactoring If Statements
    
    var isLightBulbOn = false

    if(isLightBulbOn === true){
        console.log("Yes the light bulb is on!")
    }

    // Refactored Code
    if(isLightBulbOn){
        console.log("Refactored - Yes the light bulb is on!")
    }
    
    // If the light bulb is off using NOT
    if(isLightBulbOn !==true){
        console.log("The light bulb is off")
    }

 // Refactored Code
 if(!isLightBulbOn){
    console.log("Refactored - Yes the light bulb is off!")
}

// double equal !== (not(comparing two boolean(strict)))
// single equal != (not, but loosey goosey)



var today = new Date()
console.log(today.getSeconds())
var currentSeconds = today.getSeconds()

// ? Write an if statement to determine if the current seconds are odd or even
// ? If even - console.log ex: "The current seconds is 22 and is even"

// ? If odd - console.log ex: "The current seconds is 23 and is odd"

// 5/2 remainder is 1
// 4/2 remainder is 0
console.log(currentSeconds %2)

if(currentSeconds % 2 === 0){
    console.log(`The current second is ${currentSeconds} and it is even`)
} else{
    console.log(`The current second is ${currentSeconds} and it is odd`)
}


// ! Ternary Statements
var birthDate = new Date("12-05-1990")
console.log(birthDate)

var age =(20)

if(age>=18){
    console.log("you can vote")
} else {
    console.log(" you can not vote")
}

// 1. Conditional
// 2. What you want to happen if it is true
// 3. What you want to happen if it is false
// (1)         (2)                                    (3)
age >= 18 ? console.log("T: you can vote") : console.log("T: you can not vote")


// ! Switch Statement


let month = "Jan";
let totalNumberofDays = 0;
switch (month) {
  case "Dec":
    totalNumberofDays = 31;
    break;
  case "Jan":
    totalNumberofDays = 31;
    break;
  case "Feb":
    totalNumberofDays = 28;
    break;
}
console.log(totalNumberofDays)

// ? Ternary React Conditional Component

let flag = false

// if (flag) {
//   console.log("<Signup />")
// } else {
//   console.log("<Login />")
// }

// Ternary Syntax
// ? condition ? statement if true : statement if false

flag ? console.log("<Signup />") : console.log("<Login />")

// ? If/else allows for if-only conditional
if (true) {
  console.log("true condition")
}

// ? Ternaries do not. There needs to be a null for the falsey condition
true ? console.log("ternary true condition") : null

let temp = 45

if (temp >= 72) {
  console.log("it's summer")
} else if (temp >= 62) {
  console.log("it's fall")
}


// ? Chaining ternaries
// ? : else if ? condition if true

// do not use this approach, can get messy
temp >= 72 ? console.log("It's summer")
  : temp >= 62 ? console.log("It's Fall")
  : temp >= 32 ? console.log("It's winter")
  : null