/* 
An object is a data type that can take in collections of key-value pairs. 
A major difference between an object and other data types such as strings 
and numbers in JavaScript is that an objects can store different types of 
data as its values.
*/
const person = {
    firstname:"John",
    lastName:"Doe",
    age:30,
    hobbies: ['football', 'movies', 'reading'],
    adress: {
        street: '66 main st',
        city:'Boston',
        state:'MA'
    }
}

console.log(person.firstname, person.lastName, person.hobbies[1], person.adress.city)

// Pulling out something from an object
const {firstname, lastName, adress:{city} } = person;

console.log(firstname, lastName, city)







/*
JavaScript Object Notation (JSON) is a standard 
text-based format for representing structured data based on JavaScript object syntax. 
It is commonly used for transmitting data in web applications 
(e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)
*/




const todos = [
    {
        id:1,
        text:"Having dinner with family",
        isDone:true
    },
    {
        id:2,
        text:"Making money",
        isDone:false
    },
    {
        id:3,
        text:"Take out the trash",
        isDone:true
    },
    {
        id:4,
        text:"Going out with friends",
        isDone:true
    }
]

console.log(todos[1].isDone)

const todoJson = JSON.stringify(todos)
console.log(todoJson)