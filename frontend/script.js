document.addEventListener('DOMContentLoaded', function() {
    fetchTodos();
});

function fetchTodos() {
    fetch('https://localhost:5093/todo')
        .then(response => response.json())
        .then(data => displayTodos(data))
        .catch(error => console.error('Unable to get items.', error));
}

function displayTodos(todos) {
    const list = document.getElementById('todoList');
    list.innerHTML = '';

    todos.forEach(todo => {
        let li = document.createElement('li');
        li.innerText = todo.name;
        list.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todo = { name: todoInput.value, isComplete: false };

    fetch('https://localhost:5093/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(response => response.json())
    .then(() => {
        todoInput.value = '';
        fetchTodos();
    })
    .catch(error => console.error('Unable to add item.', error));
}
