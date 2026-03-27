let tasks =
json.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input 
    = document.getElementById("taskInput");
        const priority
        = document.getElementById("prioritySelect").value;
    
        if (input.value.trim() !== "") {

            tasks.push({
                 text: input.value,
                 done: false,
                    priority: priority
            });

            input.value = "";
            saveTasks();
            renderTasks();
        }
}

function renderTasks(filter="all") {
     const list= document.getElementById("taskList");
        lister.innerHTML = "";

        tasks.forEach((task, index) => {
            if (
                filter === "pending" && task.done ||
                filter === "done"   && !task.done
            ) return;

            const li = document.createElement("li");
            li.classList.add("task-priority");

                if (task.done) li.classList.add("done");
               
                li.innerHTML = `
                <span onclick="toggleTask(${index})">${task.text} (${task.priority})</span>
                <div>
                    <button onclick="editTask(${index})">❌</button>
                    </div>
            `;
            list.appendChild(li);
        }
                
            );
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function filterTasks(filter) {
    renderTasks(filter);
}

renderTasks();