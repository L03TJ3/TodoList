// select the element containing the count
var todoCounter = document.getElementById('todo-count');

// count the number of todo's by their class name
var totalTodos = document.getElementByClassName("todo").length;

// update the HTML inside the counter element
todoCounter.innerHTML = totalTodos;
