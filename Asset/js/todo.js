var todoList = [];

function addTodo() {
  var todo = document.getElementById("todo").value;

  if (todoList.length == 0) {
    var id = 1;
  } else {
    var id = todoList[todoList.length - 1].id + 1
  }
  if (todo.length == 0) {
    alert("No new to do to add"); 
  } else {
    console.log(todo);
    document.getElementById("todo").value = "";
    document.getElementById("todolist").innerHTML += todoFormat(
      "list-group-item",
      id,
      todo,
      id
    );

    todoList.push({ name: todo, id: id, done: false });
    updateStorage();

    id++;
  }
}

function loadTodo(todo) {
  document.getElementById("todolist").innerHTML += todoFormat(
    "list-group-item",
    todo.id,
    todo.name,
    todo.id
  );
  todoList.push(todo);

  var checkboxid;
  if (todoList.length == 0) {
    checkboxid = 1;
  } else {
    checkboxid = "checkbox" + (todoList[todoList.length - 1].id)
  }

  console.log(checkboxid)
  if (todo.done) {
    document.getElementById(checkboxid).checked = true;
    document.getElementById(todo.id).classList.add("done");
  } else {
    document.getElementById(checkboxid).checked = false;
    document.getElementById(todo.id).classList.remove("done");
  }

  console.log("todo list" + todoList)
}

function delTodo(id) {
  document.getElementById(id).remove();
  todoList = todoList.filter((todo) => {
    console.log("del todo" + todo);
    return todo.id != id;
  });
  console.log("todo aftr del"+ todoList);
  localStorage.setItem("todo", JSON.stringify(todoList));
}

function checkTodo(id) {
  var checkboxid = "checkbox" + id
  if (document.getElementById(checkboxid).checked) {
    document.getElementById(id).classList.add("done");
  } else {
    document.getElementById(id).classList.remove("done");
  }
  for (var i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      todoList[i].done = !todoList[i].done;
      console.log(todoList[i].id, todoList[i].done)
    }
    console.log(todoList[i].id, "=", id)
  }
  localStorage.setItem("todo", JSON.stringify(todoList));

}

function updateStorage() {
  localStorage.setItem("todo", JSON.stringify(todoList));
}
function filterTodo(filter) {}

function todoFormat(classname, Category, Title, id) {
  return (
    '<li id="' +
    id +
    '"class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><input id="checkbox' +
    id +
    '" class="form-check-input me-1" type="checkbox" onClick="checkTodo(' +
    id +
    ')">' +
    Title +
    "</div>" +
    Category +
    '</div><span class="badge bg-primary rounded-pill" onclick="delTodo(' +
    id +
    ')">&times;</span></li>'
    // '<li class="' +
    // classname +
    // '" id="' +
    // id +
    // '">' +
    // content +
    // '<span onclick="delTodo(' +
    // id +
    // ')">&times;</span></li>'
  );
}
