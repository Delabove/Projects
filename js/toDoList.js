



// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo')

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);


// Functions
function addTodo(event) {
    // prevent form from submitting
event.preventDefault();

//toDoList DIV
const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

// create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

// ADD TO DO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);

    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

//    APPEND TO LIST
todoList.appendChild(todoDiv);

// clear todolist input value
    todoInput.value = "";

}

function deleteCheck(e) {
   const item = e.target;

    // trash btn remove

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });

    }

    // check mark remove
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

//
// function filterTodo(e) {
// const todos = todoList.childNodes;
// todos.forEach(function(todo) {
//     switch(e.target.value){
//         // case 'all':
//         //     console.log('flexed');
//             // todo.style.display= 'flex';
//             // break;
//         case "completed":
//             if(todo.classList.contains('completed')) {
//                 const todo = item.parentElement;
//                 todo.display= 'flex';
//             console.log('not flexed');
//                 // todo.style.display= 'flex';
//             // } else {
//             //     todo.display= 'none';
//             }
//     }
// });
// }
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}
