const addTask = () => {
  const taskName = document.querySelector("#firstInput");
  const taskDescription = document.querySelector("#descriptionInput");
  const taskDate = document.querySelector("#taskDate");
  const taskPriority = document.querySelector("#priorityInput");
  const formButton = document.querySelector(".formButton");
  const showTasks = document.querySelector("#taskArea");
  const showForm = document.querySelector(".form");
  const showError = document.querySelector(".error");
  let tasks;
  const todayTasksButton = document.querySelector("#todayTasks");
  const todayTasksArea = document.querySelector("#todayTaskArea");
  const showAllTasks = document.querySelector("#allTasks");

  let allTasksHolder = [];
  let todayTasksHolder = [];
  let numberOfTasks = +localStorage.getItem("number");
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

      tasks =
        document.querySelectorAll(".task") || document.querySelector(".task");
      console.log(tasks);
      localStorage.setItem(`task${tasks.length}`, `${this.name}`);
      localStorage.setItem(`task${tasks.length}.${1}`, `${this.description}`);
      localStorage.setItem(`task${tasks.length}.${2}`, `${this.time}`);
      localStorage.setItem(`task${tasks.length}.${3}`, `${this.important}`);

      numberOfTasks = localStorage.setItem("number", `${tasks.length}`);

      allTasksHolder.push({ name: task, date: this.time });
    }
  }

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
        element.addEventListener("click", () => {
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
          const name = element.parentElement.firstChild;
          console.log(name.textContent);
          if (parent.parentElement == showTasks) {
            showTasks.removeChild(parent);
          } else {
            todayTasksArea.removeChild(parent);
          }
          for (let i = 1; i < numberOfTasks; i++) {
            if (localStorage.removeItem(`task${i}`, name.textContent)) {
              localStorage.removeItem(`task${i}`, name.textContent);
            }
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
    showForm.classList.remove("active-task");
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
    console.log(time);
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
  let getNumber = +localStorage.getItem("number");
  console.log(getNumber);
  const getStorage = () => {
    for (let i = 1; i <= getNumber; i++) {
      let storageTaskName = localStorage.getItem(`task${i}`);
      let storageTaskDescription = localStorage.getItem(`task${i}.1`);
      let storageTaskTime = localStorage.getItem(`task${i}.2`);
      let storageTaskImportant = localStorage.getItem(`task${i}.3`);
      const task = new Task(
        storageTaskName,
        storageTaskDescription,
        storageTaskTime,
        storageTaskImportant
      );
      task.showAtTaskList();
    }
  };
  getStorage();
  // const li = document.querySelectorAll("li");
  // li.forEach((element) => {
  //   element.addEventListener("keydown", () => {
  //     console.log("siema");
  //   });
  // });
};
export default addTask;
1087;
