const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const darkModeToggle = document.getElementById("darkModeToggle");
const voiceRecordBtn = document.getElementById("voiceRecordBtn");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
darkModeToggle.addEventListener("change", toggleDarkMode);
voiceRecordBtn.addEventListener("click", startVoiceRecording);

function addTask() {
  const taskText = taskInput.value.trim();
  const category = categorySelect.value;
  const dueDate = document.getElementById("dueDate").value;

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <span class="category">${category}</span>
      <span class="due-date">${dueDate}</span>
      <span class="delete-btn">Delete</span>
      <input type="checkbox" class="task-completed">
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

function startVoiceRecording() {

}

// Data Visualization: Task Statistics
function visualizeTaskStatistics() {
  // Code to collect task data and create charts or graphs for data visualization
  // You can use libraries like Chart.js or D3.js to create visual representations.
}

// Call the function to visualize task statistics (e.g., on page load)
visualizeTaskStatistics();
