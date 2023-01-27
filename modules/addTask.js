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
  const editFormButton = document.querySelector(".editFormButton");
  const todayTasksButton = document.querySelector("#todayTasks");
  const todayTasksArea = document.querySelector("#todayTaskArea");
  const showAllTasks = document.querySelector("#allTasks");
  let allTasksHolder = [];
  let todayHolder = [];
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
<button class="task-edit">Edit</button>
      `;

      main.appendChild(task);
      allTasksHolder.push(task);
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
          // const popUpDelete = document.querySelector(".popUpDelete");
          // popUpDelete.classList.remove("hidden");

          const parent = element.parentElement;

          // const popUpDeleteYes = document.querySelector(".Yes-Delete");
          // const popUpDeleteNo = document.querySelector(".No-Delete");
          main.removeChild(parent);
          // popUpDeleteYes.addEventListener("click", () => {
          //   popUpDelete.classList.add("hidden");

          //   main.removeChild(parent);
          // });
          // popUpDeleteNo.addEventListener("click", () => {
          //   popUpDelete.classList.add("hidden");
          // });
        });
      });
      taskName.value = "";
      taskDescription.value = "";
      taskDate.value = "";
      taskPriority.value = "";
      showForm.classList.add("hidden");
      showTasks.classList.remove("hidden");
      showError.innerHTML = "";
      const editTask = document.querySelectorAll(".task-edit");
      editTask.forEach((element) => {
        element.addEventListener("click", (e) => {
          const parentEdit = e.target.parentElement;
          editFormButton.classList.remove("hidden");
          showForm.classList.remove("hidden");
          showForm.classList.add("absolute");
          editFormButton.addEventListener("click", () => {
            const newChild = document.createElement("div");
            newChild.classList.add("task");
            newChild.innerHTML = `<h3>${taskName.value}</h3>
                  <ul>
                   <li>Task: ${taskName.value}</li>
                   <li>Description: ${taskDescription.value}</li>
                   <li class="timeToDo">Time to: ${taskDate.value}</li>
                   <li>Important: ${taskPriority.value}</li>
 
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
            // main.replaceChild(newChild, parentEdit);
            parentEdit.replaceWith(newChild);
            showForm.classList.add("hidden");
            showForm.classList.remove("absolute");
          });
        });
      });
    }
  });
  const dateFunction = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    // if (month < 10) {
    //   month = "0" + month;
    // }

    if (month < 10) {
      time = `  <li class="timeToDo">Time to: ${year}-0${
        month + 1
      }-${day}</li>`;
    } else {
      time = `  <li class="timeToDo">Time to: ${year}-${month + 1}-${day}</li>`;
    }

    setTimeout(dateFunction, 100000);
  };
  dateFunction();
  todayTasksButton.addEventListener("click", () => {
    const tasksDate = document.querySelectorAll(".timeToDo");
    for (let i = 0; i < tasksDate.length; i++) {
      if (tasksDate[i] == time) {
        todayHolder.push(tasksDate[i]);
      } else {
        console.log("ni ma");
      }
    }
    console.log(tasksDate[0]);
    console.log(time);
    console.log(tasksDate);
    console.log(todayHolder);
  });
  // showAllTasks.addEventListener("click", () => {
  //   const tasks = document.querySelectorAll(".task");

  //   tasks.forEach((element) => {
  //     if (todayHolder.includes(element)) {
  //       return;
  //     } else {
  //       // if () {
  //       //   todayHolder.push(element);
  //       // } else {
  //       //   console.log("ni ma");
  //       // }
  //     }
  //   });
  //   for (let i = 0; i < todayHolder.length; i++) {
  //     showTasks.appendChild(todayHolder[i]);
  //   }
  // });
};
export default addTask;
