function updateCounters() {
  // Total number of todos
  var todoCounter = document.getElementById('todo-count');
  var totalTodos = document.getElementByClassName("todo").length;
  todoCounter.innerHTML = totalTodos;

  // Total number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Total number of uncompleted todos
  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
}

updateCounter();
