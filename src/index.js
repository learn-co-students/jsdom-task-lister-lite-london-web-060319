document.addEventListener("DOMContentLoaded", () => {
  function myFunction(text) {
    document.querySelector("#tasks").appendChild(document.createElement("li")).innerText = text
  }
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    input = document.querySelector("#new-task-description").value;
    myFunction(input);
  });


});
