const inputTodo = document.getElementById('input')
const todoList  = document.getElementById('todo-list')
const addTask = document.getElementById('add-btn')


addTask.addEventListener('click', () =>{
    let trash = document.createElement('li')
    trash.className = 'fas fa-trash'

    let li = document.createElement('li')
    let text = document.createTextNode(inputTodo.value)
    li.appendChild(text)
    li.appendChild(trash)
    li.className = 'show'

    trash.addEventListener('click', () =>{
        trash.parentElement.remove()
    })
    if(inputTodo.value){
        todoList.appendChild(li)
    }
    
})