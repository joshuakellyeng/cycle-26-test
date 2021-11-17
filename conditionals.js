// =========== CONDITIONALS =============
// Definition: perform different operations based on the given condition

// Task: define whether a number is positive or negative
let integer = 1

// inside the parenthesis in an if statement, we write a logical statement checking whether it's true or false
if(integer < 0) {
  // inside the curly brackets is our code block that runs IF we meet our condition
  console.log("Negative: " + integer)
} else {
  // if we didn't meet our logical statement, else code block will execute
  console.log("Positive: " + integer)
}

// Task: Setting up a security web site that grants users over the age of 18+ access to the site. Write a conditional that gives users who are 18+ access and logs access denied for users who do no meet the given condition.

// create if statement checking if age is 18+ and if less 18 log access denied
let age = 3

// if(age < 18) {
//   console.log("access denied: " + age)
// }

if(age >= 18) {
  console.log("access granted: " + age)
} else {
  // else doesn't accept a conditional statement
  console.log("access denied: " + age)
}

// Task:
/* 
  Nested if/else statement
  Declare a variable called num
  Add an if/else statement that checks if num is positive & greater than 100
  Add another statement to check if num is positive but less than 100
  Add a final statement to check if num is negative
*/

let num = '100'

// & is called ampersand
// && equals to AND
if(num > 100) {
  console.log(num + " is positive and greater than 100")
} else if(num < 100) {
  if(num > 0) {
    console.log(num + " is positive and less than 100")
  }
} else if(num < 0) {
  console.log(num + " is less than 0 AKA negative.")
} else {
  if(num === 100) {
    console.log("WE GOT A HUNDRED!!!")
  } else {
    console.log("error NaN " + num + " is a " + typeof(num))
  }
}

// Task: What is your letter grade?
/* 
  If student gets 90 or higher: log A
  If 80 or above: log B
  if 70 or above: log C
  if 55 or above: log D
  if below 55: log F
*/

let grade = 54

// JavaScript runs Top to Down approach
if(grade >= 90) {
  console.log('A')
} else if(grade >= 80) {
  console.log('B')
} else if(grade >= 70) {
  console.log('C')
} else if(grade >= 55) {
  console.log('D')
} else {
  console.log('F')
}


//REMAINDER OPERATOR (also known as mod) returns the remainder left over when one operand is divided by a