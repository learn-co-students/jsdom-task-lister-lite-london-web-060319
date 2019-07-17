document.addEventListener("DOMContentLoaded", () => {
  // your code here
const newTaskBtn = document.querySelector('#create-task-form').lastElementChild;

newTaskBtn.addEventListener('click', function(event) {
  const input = document.getElementById('new-task-description');
  const divList = document.querySelector('div#list');
  const newTaskLi = document.createElement('li');

  newTaskLi.innerHTML = input.value;
  divList.appendChild(newTaskLi);
  event.preventDefault();

})

});
