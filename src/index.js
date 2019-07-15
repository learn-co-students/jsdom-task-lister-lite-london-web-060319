
document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  createTaskForm.addEventListener("submit", addTasks);
});

function addTasks(event) {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");
  tasks.innerHTML += `<li>${newTaskDescription.value}</li>`;
};

