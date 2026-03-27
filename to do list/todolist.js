let toDoList = [];

function addToDo(task) {
    if (!task || task.trim() === "") return;
    
    toDoList.push({
        text: task,
        isDone: false
    });
    renderList();
}

function toggleToDo(index) {
    if(index >= 0 && index < toDoList.length) {
        toDoList[index].isDone = !toDoList[index].isDone;
        renderList();
    }
}

function deleteToDo(index) {
    if(index >= 0 && index < toDoList.length) {
        toDoList.splice(index, 1);
        renderList();
    }
}

function addFromInput() {
    let input = document.getElementById('taskInput');
    addToDo(input.value);
    input.value = '';
}

function renderList() {
    let list = document.getElementById('todoList');
    list.innerHTML = '';
    
    toDoList.forEach((task, index) => {
        let li = document.createElement('li');
        li.className = task.isDone ? 'done' : '';
        
        let span = document.createElement('span');
        span.textContent = task.text;
        
        let toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.isDone ? '↩' : '✓';
        toggleBtn.onclick = () => toggleToDo(index);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑';
        deleteBtn.onclick = () => deleteToDo(index);
        
        li.appendChild(span);
        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    
    addButton.addEventListener('click', addFromInput);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addFromInput();
        }
    });
});