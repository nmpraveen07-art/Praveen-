document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const error = document.getElementById("error");
  const taskList = document.getElementById("taskList");

  if (input.value.trim() === "") {
    error.textContent = "⚠ Please enter a task!";
    return;
  }

  error.textContent = "";

  const li = document.createElement("li");
  li.textContent = input.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}