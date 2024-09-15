// const x  = 110;

// if(x === 10){
//     alert('x is ten')
// }else if(x > 10){
//     alert('x is greater than 10')
// }
// else{
//    alert('x is less than 10')
// }


/*
   Logical AND ( && ) evaluates operands from left to right, 
   returning immediately with the value of the first falsy operand it encounters; 
   if all values are truthy, the value of the last operand is returned. 
   If a value can be converted to true , the value is so-called truthy
*/

const ha = 10;
const yoq = 20;
if(ha < yoq && ha < yoq){
    console.log('Ha is less than Yoq')
}

/*
  Logical operators are used to combine two or more conditions together and return a single true/false result. 
  This is useful for creating more complex conditions in our programs. 
  There are three logical operators: AND, OR, and NOT. 
  The AND operator returns true only if both conditions being compared are true.
*/

const vay = 30;
const ehh = 24;
if(vay === ehh || vay < ehh){
    console.log("Vay is more than ehh or vay is less than ehh")
}

// Ternary operator
const x = 30

const color = x < 20 ? 'Blue' : "red"
console.log(color)

// Switches

switch(color){
    case 'red':
        console.log('color is red')
    break;
    case 'Blue':
    break;
    default: 
     console.log('Color is not red or blue')
}