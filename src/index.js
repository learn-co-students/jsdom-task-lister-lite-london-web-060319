document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
 

  form.addEventListener("submit", addNewTask)

});


const addNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};