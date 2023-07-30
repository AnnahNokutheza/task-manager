const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const darkModeToggle = document.getElementById("darkModeToggle");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
darkModeToggle.addEventListener("change", toggleDarkMode);

function addTask() {
  const taskText = taskInput.value.trim();
  const category = categorySelect.value;

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <span class="category">${category}</span>
      <span class="delete-btn">Delete</span>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  if (event.target.classList.contains("delete-btn")) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".container").classList.toggle("dark-mode");
}
