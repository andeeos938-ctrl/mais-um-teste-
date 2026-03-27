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