const addTask = () => {
  const taskName = document.querySelector("#firstInput");
  const taskDescription = document.querySelector("#descriptionInput");
  const taskDate = document.querySelector("#taskDate");
  const taskPriority = document.querySelector("#priorityInput");
  const formButton = document.querySelector(".formButton");
  const showTasks = document.querySelector("#taskArea");
  const showForm = document.querySelector(".form");
  const showError = document.querySelector(".error");

  const todayTasksButton = document.querySelector("#todayTasks");
  const todayTasksArea = document.querySelector("#todayTaskArea");
  const showAllTasks = document.querySelector("#allTasks");
  let allTasksHolder = [];
  let todayTasksHolder = [];
  let time;
  class Task {
    constructor(name, description, time, important) {
      this.name = name;
      this.description = description;
      this.time = time;
      this.important = important;
    }
    showAtTaskList() {
      const task = document.createElement("div");
      task.classList.add("task");
      task.innerHTML = `<h3>${this.name}</h3>
     <ul>
      <li>Task: ${this.name}</li>
      <li>Description: ${this.description}</li>
      <li class="timeToDo">Time to: ${this.time}</li>
      <li>Important: ${this.important}</li>
             
      </ul> 
      <span style="position: absolute;
      top: 0;
      right: 10px;
      font-size: 30px;"  class="done material-symbols-outlined">
      done
      </span>  
<button class="task-delete">Delete</button>

      `;
      task.contentEditable = true;
      showTasks.appendChild(task);
      allTasksHolder.push({ name: task, date: this.time });
    }
  }
  const testTask = new Task("test", "XD", "2023-01-27", "YES");
  testTask.showAtTaskList();

  formButton.addEventListener("click", () => {
    if (
      taskName.value === "" ||
      taskDescription.value === "" ||
      taskDate.value === "" ||
      taskPriority.value === ""
    ) {
      showError.innerHTML = "Please, complete all fields";
    } else {
      const taskDiv = new Task(
        `${taskName.value}`,
        `${taskDescription.value}`,
        `${taskDate.value}`,
        `${taskPriority.value}`
      );
      taskDiv.showAtTaskList();

      const makeDone = document.querySelectorAll(".done");

      makeDone.forEach((element) => {
        element.addEventListener("click", (e) => {
          if (element.parentElement.classList.contains("done")) {
            element.parentElement.style = "background-color:white";
            element.style = `position: absolute;
        top: 0;
        right: 10px;
        font-size: 30px;color:green;`;
            element.parentElement.classList.remove("done");
            element.innerHTML = "done";
          } else {
            element.parentElement.style = "background-color:green;";
            element.style = `position: absolute;
          top: 0;
          right: 10px;
          font-size: 30px;color:red;`;
            element.innerHTML = "reply";
            element.parentElement.classList.add("done");
          }
        });
      });
      const deleteTask = document.querySelectorAll(".task-delete");
      deleteTask.forEach((element) => {
        element.addEventListener("click", () => {
          const parent = element.parentElement;
          if (parent.parentElement == showTasks) {
            showTasks.removeChild(parent);
          } else {
            todayTasksArea.removeChild(parent);
          }
        });
      });
      taskName.value = "";
      taskDescription.value = "";
      taskDate.value = "";
      taskPriority.value = "";
      showForm.classList.add("hidden");
      showTasks.classList.remove("hidden");
      showError.innerHTML = "";
    }
  });
  const dateFunction = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (month < 10) {
      time = `${year}-0${month + 1}-${day}`;
    } else {
      time = `${year}-${month + 1}-${day}`;
    }

    setTimeout(dateFunction, 100000);
  };
  dateFunction();
  todayTasksButton.addEventListener("click", () => {
    for (let i = 0; i < allTasksHolder.length; i++) {
      if (allTasksHolder[i].date === time) {
        console.log(allTasksHolder[i]);
        todayTasksHolder.push(allTasksHolder[i].name);
      }
    }

    for (let j = 0; j < todayTasksHolder.length; j++) {
      todayTasksArea.appendChild(todayTasksHolder[j]);
    }
  });
  showAllTasks.addEventListener("click", () => {
    showTasks.innerHTML = "";
    for (let i = 0; i < allTasksHolder.length; i++) {
      showTasks.appendChild(allTasksHolder[i].name);
    }
  });
};
export default addTask;
