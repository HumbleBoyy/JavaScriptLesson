// Arrays - varaibles that hold multiple values
const numbers = new Array(1,2,3, 4, 5)

const fruits = ['Apple', 'Orange', "Quince"]

// Adding item to end of an array
fruits[3] = 'Grapes'
fruits.push('PineApple')

// Adding item to begining of an array
fruits.unshift('Pomigranate')

// Taking a last item from an array
// fruits.pop()

// Taking index of item in an array
console.log(fruits.indexOf('PineApple'))

console.log(Array.isArray(numbers))
console.log(numbers)
console.log(fruits)
