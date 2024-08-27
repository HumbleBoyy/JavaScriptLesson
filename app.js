// const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');



myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        message.classList.add('error');
        message.innerHTML = "Plese fill the field";


        setTimeout(()=> {
            message.remove('error')
            message.innerText = '';
        },3000);
    }else{
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       userList.appendChild(li);

    //  Clear the fields

        nameInput.value = '';
        emailInput.value = ''
    }

    localStorage.setItem(userList)
}









// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.children[1].innerText = "Non";
// ul.firstElementChild.textContent = "Hello, how are you?";
// ul.lastElementChild.innerHTML = '<h1>This is h1 text</h1>'


// const btn = document.querySelector('.btn');
// btn.style.background = 'red'
// btn.style.cursor = 'pointer'