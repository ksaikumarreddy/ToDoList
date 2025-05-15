const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}
function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('completed');
    }
});

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
