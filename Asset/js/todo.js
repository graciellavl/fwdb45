var id = 1;

function addTodo() {
  var todo = document.getElementById("todo").value;

  document.getElementById("todo").value = "";
  document.getElementById("todolist").innerHTML += todoFormat(
    "list-group-item",
    id,
    todo
  );

  id++;
}

function delTodo(id) {
  document.getElementById(id).remove();
}

function checkTodo(id) {
  var checked = true;
  if (checked) {
    document.getElementById(id).classList.add("check");
  } else {
    document.getElementById(id).classList.remove("check");
  }
}

function filterTodo(filter) {}

function todoFormat(classname, Category, Title) {
  return (
    '<li id="' +
    id +
    '"class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><input class="form-check-input me-1" type="checkbox" value="" aria-label="...">' +
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
