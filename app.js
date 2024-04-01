const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

// console.log(taskForm, taskList);

taskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const taskInput =document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    // console.log(taskText);

    if(taskText !==""){
        // Create a new task item

        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = taskText;

        taskItem.addEventListener("click", function(){
            console.log("completed");
            this.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);

        taskInput.value= "";
    }
});
