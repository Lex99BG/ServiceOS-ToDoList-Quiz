const inputForm = document.getElementById("inputForm");
inputForm.addEventListener('submit', addList);

function addList(event) {
    event.preventDefault();
    let inputValue = event.target.inputValue.value;
    const todoList = document.querySelector('.todo_list');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = inputValue; 
        newTodo.classList.add("todo_item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = 'Done';
        completedButton.classList.add('complete_btn');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = 'Del';
        trashButton.classList.add('trash_btn');
        todoDiv.appendChild(trashButton);
        
    todoList.appendChild(todoDiv);
    event.target.inputValue.value = "";
}

const todoList = document.querySelector('.todo_list');
todoList.addEventListener('click', deleteList);

function deleteList(event) {
    const item = event.target;

    if (item.classList.contains('trash_btn')) {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }

    if (item.classList.contains('complete_btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}