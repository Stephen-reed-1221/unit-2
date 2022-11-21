/* 
Veriables:
- Variables are named containers for storing data and values.
- We can name variables anything with a few exceptions
- We use these variables to reference them at a later time.
*/

/* 
You can start the declaration process with a var, let, or const
- Variable Names in javascript should be Camel Cased: Starts off lower case and each word is capitalized there after.  Example: currentLivingAddress, currentHour, currentWeather, age, location
*/

// prettier-ignore
var firstName ="Stephen"
//   (1)  (2)(3)  (4)

/* 
1. Javascript Keyword to denote the creation of variable (var, let, const)
2. The name of the variable that the developer will reference in order to grab the vaule that is stored.
3. Assignment Operator
4. Initial Value
*/

console.log("Hello from console.log line:24")

// To run a javascript file in terminal -use command : node (file Name)
// Example: node variable.js

console.log(firstName)

console.log("Variable firstName:", firstName);

/* 
Variable declaration:
- The declaration is to the left side of the assignment operator
- This is where the cariable is created - it's not assigned a value yet.
- If no value is assigned to it becomes undefined
*/

// Just declared not assigned value
var lastName
console.log("Variable lastName", lastName)

// Value is assigned
lastName = "Reed"
console.log("Variable lastName", lastName)

// Changed value
lastName = "Smith"
console.log("Variable lastName", lastName)

// note for git purpose