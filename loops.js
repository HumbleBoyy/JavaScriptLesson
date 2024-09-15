/*  
Use map() when you need to transform or manipulate every element in an array. 
Use filter() when you want to select specific elements that meet a particular condition.
*/


const todos = [
    {
        id:1,
        text:"Take out trash",
        isDone:true
    },
    {
        id:2,
        text:"Meeting with loved ones",
        isDone:true
    },
    {
        id:3,
        text:"Working",
        isDone:false
    },
    {
        id:4,
        text:"Dev",
        isDone:false
    }
];

// Map = returns array
const todoText = todos.filter(function(todo){
    return todo.isDone === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoText)


// forEach, map, filter
todos.forEach(function(todo){
 console.log(todo.id + " ForEach");
});

const todoDone = todos.filter((todo)=> {
    return todo.isDone === true
})

console.log(todoDone)



// How to send data to server
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// How to send data to server





// a for of loop
for(let todo of todos){
    console.log(todo.id, todo.text)
}



// For loops
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
}

// for(let i = 0; i < 1; i++){
//     console.log(i)
// }



// While loop
let i = 0;
while(i < 10){
    console.log(`While loop Number: ${i}`);
    i++;
}