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

const {firstname, lastName, adress:{city} } = person;
console.log(firstname, lastName, city)







/*
JavaScript Object Notation (JSON) is a standard 
text-based format for representing structured data based on JavaScript object syntax. 
It is commonly used for transmitting data in web applications 
(e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)
*/




