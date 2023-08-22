//task list Script.js
var form = document.getElementById('todo-form');
var input = document.getElementById('todo-input');
var input = document.getElementById('todo-list');

//load tasks from user input
window.addEventListener ('load', function() {
    for (var i = 0; i < localStorage.length; i++) { 
    addTaskToList(localStorage.key(i));   
}
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
 //input and submit tasks  
   
    var task = input.value;
    input.value = '';
   
  //adds task to to do list  
    addTaskToList(task);
    localStorage.setItem(task, task);
   });
   
   function addTaskToList(task) {
    var listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.addEventListener('click', function() {
      listItem.remove();
      localStorage.removeItem(task);
    });
  
    list.appendChild(listItem);
  }
  

       




