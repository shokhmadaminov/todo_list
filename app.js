// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const modal = document.querySelector('.modal')
const modalText = document.querySelector('.modal-text')
todoInput.focus()
// EVENTLISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// FUNCTIONS 
function addTodo(event) {
    event.preventDefault();
    if(todoInput.value.length < 1){
        showModal(`Kechirasiz...! siz hali ro'yhatni yozmadingiz!`)
    } else{
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo-div')
    
        const newLi = document.createElement('li')
        newLi.innerText = todoInput.value
        newLi.classList.add('todo-item')
        todoDiv.appendChild(newLi)
    
        const complatedButton = document.createElement('button')
        complatedButton.innerHTML= '<i class="fas fa-check"></i>'
        complatedButton.classList.add('complate-btn')
        todoDiv.appendChild(complatedButton)  
    
        const trashButton = document.createElement('button')
        trashButton.innerHTML= '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)
    
        todoList.appendChild(todoDiv)
    
        todoInput.value = '';
    }
}


function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall')

        todo.addEventListener('transitionend', function() {
        todo.remove()
        showModal(`Siz ro'yhatni o'chirdingiz`)
        })
    }

    if(item.classList[0] === 'complate-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('complated')
    }
}
const data = todoList.childNodes

document.addEventListener('keydown', (e)=> {
if(data.length > 0) {
    if(e.keyCode == 46) {
        const todo = data[data.length - 1];
        todo.classList.add('fall')

        todo.addEventListener('transitionend', function() {
        todo.remove();
        showModal('Delete Todo')
        })
    }
}
})

function showModal(m) {
    modalText.textContent = m
    modal.classList.remove('hidden')
    setTimeout(()=> {
        modal.classList.add('hidden')
    },3000)
}
