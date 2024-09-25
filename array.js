
const clock = document.getElementById('clock')
const timeBtn = document.getElementById('time')

timeBtn.addEventListener('click', () => {
  clock.innerHTML = Date();
});

// Arrays - varaibles that hold multiple values
const numbers = new Array(1,2,3, 4, 5)

const fruits = ['Apple', 'Orange', "Quince"]

document.getElementById("demo").innerHTML = fruits.join("+")

// Adding item to end of an array
fruits[3] = 'Grapes'
fruits.push('PineApple')

// Adding item to begining of an array
fruits.unshift('Pomigranate')

// Taking a last item from an array
// fruits.pop()


// shift() removes the first item in array
numbers.shift()

// Taking index of item in an array
console.log(fruits.indexOf('PineApple'))

console.log(Array.isArray(numbers))
console.log(numbers)
console.log(fruits)


"javascrit".startsWith("sava")

