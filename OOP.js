// Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instaniate object
const person1 = new Person('John', 'Doe', '18-01-1978');
const person2 = new Person('Tomm', 'Jerry', '18-05-2018');

console.log(person1, person2)

console.log(person1.getBirthYear());
console.log(person1.getFullName());