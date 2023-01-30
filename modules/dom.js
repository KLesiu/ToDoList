const showSection = () => {
  const showAllTasksArea = document.querySelector("#taskArea");
  const showFormArea = document.querySelector(".form");

  const showAllTasks = document.querySelector("#allTasks");
  const showAddTaskForm = document.querySelector("#buttonTask");

  const showTodayTasks = document.querySelector("#todayTasks");
  const todayTasks = document.querySelector("#todayTaskArea");

  showAllTasks.addEventListener("click", () => {
    showFormArea.classList.add("hidden");

    showAllTasksArea.classList.toggle("hidden");
    todayTasks.classList.add("hidden");
  });

  showAddTaskForm.addEventListener("click", () => {
    showFormArea.classList.add("active-task");
    showFormArea.classList.toggle("hidden");

    showAllTasksArea.classList.add("hidden");
    todayTasks.classList.add("hidden");
  });

  showTodayTasks.addEventListener("click", () => {
    todayTasks.classList.toggle("hidden");
    showAllTasksArea.classList.add("hidden");

    showFormArea.classList.add("hidden");
  });
};
export default showSection;
