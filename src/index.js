document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.getElementById("create-task-form");

 taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

   
    const taskInput = document.getElementById("new-task-description");
    const newTask = taskInput.value;

    
    const task = document.createElement("li");
    task.textContent = newTask;

    
    const taskList = document.getElementById("tasks");
    taskList.appendChild(task);

    taskInput.value = ""; 

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'x';
    deleteBtn.style.marginLeft = '20px';
    deleteBtn.style.color ='red'
    task.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function(event) {
    task.remove();
  });
   


})
});