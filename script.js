function add() {
  const templatevariable = document.getElementById("template");
  const container = document.getElementById("additems");
  const cardClone = templatevariable.content.cloneNode(true);
  const val = filldata(cardClone);
  if (val == 0) {
    return;
  }
  container.appendChild(cardClone);
  saveTasksToLocalStorage();
}
function filldata(articles) {
  const task = articles.querySelector("#to-be-displayed");
  const data1 = document.getElementById("input-box");
  var taskText = data1.value.trim();
  const x = "";
  if ( taskText === x) {
    window.alert("Enter something");
    return 0;
  }

  task.innerHTML = data1.value;
  data1.value = "";
}
function removes(button) {
    var listItem = button.parentNode;
    listItem.remove();
    saveTasksToLocalStorage();
  }
//   to save data in local storage
function saveTasksToLocalStorage() {
    var taskList = document.getElementById("additems").innerHTML;
    localStorage.setItem("tasks", taskList);
  }
//   we will get data from here
function loadTasksFromLocalStorage() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      var taskList = document.getElementById("additems");
      taskList.innerHTML = savedTasks;
    }
  }
  function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
      add();
    }
  }
  document.getElementById("input-box").addEventListener("keypress", handleEnterKeyPress);
  loadTasksFromLocalStorage();