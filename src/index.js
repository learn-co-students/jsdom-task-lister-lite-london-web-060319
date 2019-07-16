document.addEventListener("DOMContentLoaded", (evt) => {
  const createTaskFrom = document.getElementById('create-task-form');
  createTaskFrom.addEventListener("submit", addTask);
});

function addTask(event) {
  event.preventDefault();
  let ul = document.getElementById("tasks")
  let li = document.createElement("li");
  let form_input = document.querySelector("#new-task-description").value;
  li.appendChild(document.createTextNode(form_input));
  ul.appendChild(li);
};



//document.addEventListener("DOMContentLoaded", (evt) => {
  
//});

//document.getElementById('create-task-form').addEventListener("submit", function(event){
//  event.preventDefault();
//  let ul = document.getElementById("tasks")
//  let li = document.createElement("li");
//  let form_input = document.querySelector("#new-task-description").value;
//  li.appendChild(document.createTextNode(form_input));
//  ul.appendChild(li);
//});

