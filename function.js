/* 
A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, 
but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious 
relationship between the input and the output.
*/


/* 
 There are three main types of functions in JavaScript:
  named functions, anonymous functions, and arrow functions
*/

/* 
   Named function: Using the function keyword followed by a name that
   can be used as a callback to that function is known as using a named function in JavaScript. 
   Named functions are regular functions that have a name or identifier. 
   Both their use in expressions and their declaration in statements are options.
*/

/* 
   Introduction. The definition of the term "anonymous" is "unknown or without identification." 
   An anonymous function in JavaScript is a function that has no name, or more precisely, 
   one that lacks a name. 
   An anonymous function has no identification when it is created.
*/

/* 
    An arrow function expression is a compact alternative to a traditional function expression, 
    with some semantic differences and deliberate limitations in usage: 
    Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods.
*/

/* 
   In JavaScript, functions are first-class objects, because they can be passed to other functions, 
   returned from functions, and assigned to variables and properties. 
   They can also have properties and methods just like any other object. 
   What distinguishes them from other objects is that functions can be called.
*/


// Named function
function addNums(num1 = 20, num2 =21){
   return(num1 * num2)
}

console.log(addNums())
// Named function


//Arrow function 
const addNums = () => {
    return(num1 * num2)
 }
 
 console.log(addNums())