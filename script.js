document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.classList.contains("remove-btn")) {
        const taskItem = event.target.parentElement;
        removeTask(taskItem);
      }
    });
  
    
    loadTasks();
  
    function addTask(taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.classList.add("remove-btn");
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      saveTasks();
    }
  
    function removeTask(taskItem) {
      taskItem.remove();
      saveTasks();
    }
  
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll("#taskList li").forEach(function(task) {
        tasks.push(task.textContent.trim());
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        tasks.forEach(function(taskText) {
          addTask(taskText);
        });
      }
    }
  });
  