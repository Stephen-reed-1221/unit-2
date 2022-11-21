var helicopter1 = "BlackHawk"
var helicopter2 = "blaCkHawk"

var stringThree = "3"
var numberThree = 3

console.log(helicopter1 == helicopter2)
// Output:false

console.log(helicopter1.toUpperCase == helicopter2.toUpperCase)
// Output: true

console.log(stringThree == numberThree)
// Output:true
// Double equal signs will compare the value and doesnt care about data type

console.log(stringThree === numberThree)
// Output:false
// three = signs will compare Type and Value

// Not Operator
// != only looks at the value and doesnt care about the type
console.log("not equal helicopter:", helicopter1 != helicopter2) 

//output true
// !== will compare Type and Value
console.log("not equal stringThree and numberThree:", stringThree !== 
numberThree)
// output:true

// greater than
console.log("greater than:", 10 > 2) //output: true

// less than
console.log("less than:", 10 < 2) // output: false

// greater than or equal to >=
console.log("greater than or equal:", 4>= 4) //output:true

// less than or equal <=
console.log("less than or equal:", 2 <= 4) //output:true


// Logical Operators

var num1 = 6
var num2 = 3
console.log("And Operator")
console.log(num1<10 && num2>1) //output:true
console.log("Or Operator")
console.log(num1 === 4 || num2 === 6) //output:false
console.log(num1 === 6 || num2 === 6)//output:true

