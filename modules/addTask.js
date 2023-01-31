const addTaskFunction = () => {
  const todayTasks = document.querySelector("#todayTasks");
  const allTasks = document.querySelector("#allTasks");
  const addTask = document.querySelector("#buttonTask");
  const form = document.querySelector(".form");
  const inputNameForm = document.querySelector("#firstInput");
  const inputDescriptionForm = document.querySelector("#descriptionInput");
  const inputDateForm = document.querySelector("#taskDate");
  const inputPriorityForm = document.querySelector("#priorityInput");
  const buttonAddForm = document.querySelector(".formButton");
  const pErrorForm = document.querySelector(".error");
  const taskArea = document.querySelector("#taskArea");
  const saveButton = document.querySelector("#saveBut");
  let taskDelete;
  let numberOfTasks = +localStorage.getItem("number");
  let name;
  let description;
  let date;
  let priority;
  let task = {};
  let tasks = [];
  let tasksHolder = [];
  let time;
  const getFormItems = () => {
    name = inputNameForm.value;
    description = inputDescriptionForm.value;
    date = inputDateForm.value;
    priority = inputPriorityForm.value;
    return name, description, date, priority;
  };
  const createNewObj = () => {
    task = {
      name: name,
      description: description,
      date: date,
      priority: priority,
    };
    tasks.push(task);

    return task;
  };
  const createTask = () => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.classList.add(tasks.indexOf(task));
    newTask.innerHTML = `<h2>${name}</h2>
    <ul>
    <li>Name: ${name}</li>
    <li>Description: ${description}</li>
    <li>Date: ${date}</li>
    <li>Priority: ${priority}</li></ul>
    `;
    const button = document.createElement("button");
    button.classList.add("task-delete");
    button.classList.add = `but${tasks.indexOf(task)}`;
    button.innerText = "Delete";
    newTask.appendChild(button);
    tasksHolder.push(newTask);
    console.log(tasks);
    console.log(tasksHolder);
    generateTask();
    showTasks();
  };
  const generateTask = () => {
    taskArea.appendChild(tasksHolder[tasksHolder.length - 1]);
  };
  const showForm = () => {
    form.classList.toggle("hidden");
    taskArea.classList.add("hidden");
  };
  const showTasks = () => {
    form.classList.add("hidden");
    taskArea.classList.remove("hidden");
  };
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
    return time;
  };
  const deleteTask = () => {
    taskDelete =
      document.querySelectorAll(".task-delete") ||
      document.querySelector(".task-delete");
    taskDelete.forEach((element) => {
      element.addEventListener("click", () => {
        taskArea.removeChild(element.parentElement);

        for (let i = 0; i < tasksHolder.length; i++) {
          tasksHolder[i].classList.remove(i);
        }

        tasksHolder.splice(tasksHolder.indexOf(element.parentElement), 1);
        tasks.splice(tasksHolder.indexOf(element.parentElement) - 1, 1);

        for (let j = 0; j < tasksHolder.length; j++) {
          tasksHolder[j].classList.add(j);
        }
      });
    });
  };
  const getLocalStorage = () => {
    for (let i = 0; i < numberOfTasks; i++) {
      name = localStorage.getItem(`task${i}`);
      description = localStorage.getItem(`taskDescription${i}`);
      date = localStorage.getItem(`taskDate${i}`);
      priority = localStorage.getItem(`taskPriority${i}`);
      createNewObj();
      createTask();
      deleteTask();
    }
  };
  saveButton.addEventListener("click", () => {
    localStorage.setItem("number", `${tasksHolder.length}`);
    for (let i = 0; i < tasks.length; i++) {
      localStorage.setItem(`task${i}`, `${tasks[i].name}`);

      localStorage.setItem(`taskDescription${i}`, `${tasks[i].description}`);
      localStorage.setItem(`taskDate${i}`, `${tasks[i].date}`);
      localStorage.setItem(`taskPriority${i}`, `${tasks[i].priority}`);
    }
  });
  addTask.addEventListener("click", () => {
    showForm();
  });
  buttonAddForm.addEventListener("click", () => {
    if (
      inputNameForm.value === "" ||
      inputDescriptionForm.value === "" ||
      inputDateForm.value === "" ||
      inputPriorityForm.value === ""
    ) {
      pErrorForm.innerHTML = "Please, complete all fields";
    } else {
      pErrorForm.innerHTML = "";
      getFormItems();
      createNewObj();
      createTask();
      deleteTask();
      inputNameForm.value = "";
      inputDescriptionForm.value = "";
      inputDateForm.value = "";
      inputPriorityForm.value = "";
    }
  });
  todayTasks.addEventListener("click", () => {
    dateFunction();
    taskArea.classList.toggle("hidden");
    tasksHolder.forEach((element) => {
      element.classList.add("hidden");
    });
    console.log(tasks.length);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].date === time) {
        tasksHolder[i].classList.remove("hidden");
      }
    }
  });
  allTasks.addEventListener("click", () => {
    taskArea.classList.toggle("hidden");
    for (let i = 0; i < tasksHolder.length; i++) {
      tasksHolder[i].classList.remove("hidden");
    }
  });
  getLocalStorage();
};
export default addTaskFunction;
