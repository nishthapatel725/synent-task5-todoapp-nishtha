let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleTask(${index})" class="${task.done ? 'completed' : ''}">
                ${task.text}
            </span>
            <button class="delete" onclick="deleteTask(${index})">X</button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if(input.value.trim() === "") return;

    tasks.push({
        text: input.value,
        done:false
    });

    input.value = "";
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index,1);
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

renderTasks();