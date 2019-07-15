
document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", addSomeTasks);
});

function addSomeTasks(event) {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");
  tasks.innerHTML += `<li>${newTaskDescription.value}</li>`;
};

