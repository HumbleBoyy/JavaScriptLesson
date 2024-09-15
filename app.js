const myForm = document.querySelector('#my-form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const message = document.querySelector('.message')
const usersList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        message.classList.add('error')
        message.innerHTML = 'Plese fill all fields'

        setTimeout(()=> 
            message.remove(),
            3000
        )
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
            ${nameInput.value} : ${emailInput.value}
        `));

        usersList.appendChild(li)

        // Clear the fields

        nameInput.value = ''
        emailInput.value = ''
    }
}
  













// ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Asadulloh';
// ul.children[1].textContent = 'CHosen';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


// const btn = document.querySelector('.btn');
// btn.style.background = 'green'
// btn.style.cursor = 'pointer'
// btn.addEventListener('click', (e)=> {
//     alert('Clicked')
// })


















// Single Element Selectors

// document.getElementById('my-form')
// console.log(document.querySelector('#my-form'))

// Multiple Element Selectors
// console.log(document.querySelectorAll('h1, h2'))