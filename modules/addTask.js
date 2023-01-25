const addTask = () => {
  const taskName = document.querySelector("#firstInput");
  const taskDescription = document.querySelector("#descriptionInput");
  const taskDate = document.querySelector("#taskDate");
  const taskPriority = document.querySelector("#priorityInput");
  const formButton = document.querySelector(".formButton");
  const showTasks = document.querySelector("#taskArea");
  const showForm = document.querySelector(".form");
  const showError = document.querySelector(".error");
  const main = document.querySelector("#taskArea");
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
      <li>Time to: ${this.time}</li>
      <li>Important: ${this.important}</li>
             
      </ul> 
      <span style="position: absolute;
      top: 0;
      right: 10px;
      font-size: 30px;"  class="done material-symbols-outlined">
      done
      </span>  
<button class="task-delete">Delete</button>
<button class="task-edit">Edit</button>
      `;

      main.appendChild(task);
      console.log(this.name);
    }
  }
  const testTask = new Task("test");
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
      console.log(taskDiv);

      const makeDone = document.querySelectorAll(".done");
      console.log(makeDone);
      makeDone.forEach((element) => {
        element.addEventListener("click", (e) => {
          console.log(e.target);
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
          main.removeChild(parent);
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
};
export default addTask;
