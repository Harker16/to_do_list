todolist = new ToDoList(ToDo);

document.getElementById("newtodo").addEventListener('submit', function(event) {
  event.preventDefault();
  todolist.createToDo(document.getElementById("task").value);
  reload();
});

function reload() {
  document.getElementById("todos").innerHTML = todolist.convertListToHTML();
  document.getElementById("newtodo").reset();
};
