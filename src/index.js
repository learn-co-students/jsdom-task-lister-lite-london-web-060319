document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('#create-task-form').lastElementChild;
  btn.addEventListener("click", function(event) {
    const userInput = document.querySelector("#new-task-description");
    const boxList = document.querySelector("div#list");
    const newItem = document.createElement("li");
    newItem.innerHTML = userInput.value;
    boxList.appendChild(newItem);
    event.preventDefault();
  }, false)
});

