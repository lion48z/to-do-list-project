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

       




