const showSection = () => {
  const showAllTasksArea = document.querySelector("#taskArea");
  const showFormArea = document.querySelector(".form");
  const showProjectArea = document.querySelector(".projectList li");
  const showAllTasks = document.querySelector("#allTasks");
  const showAddTaskForm = document.querySelector("#buttonTask");
  const showProject = document.querySelector("#projectArea");
  const showAllProjects = document.querySelector(".project");
  const liHolderProject = document.querySelector(".li-holder-project");
  const showTodayTasks = document.querySelector("#todayTasks");
  const todayTasks = document.querySelector("#todayTaskArea");

  showAllTasks.addEventListener("click", () => {
    showFormArea.classList.add("hidden");
    // showProject.classList.add("hidden");
    showAllTasksArea.classList.toggle("hidden");
    todayTasks.classList.add("hidden");
  });

  showAddTaskForm.addEventListener("click", () => {
    showFormArea.classList.toggle("hidden");
    // showProject.classList.add("hidden");
    showAllTasksArea.classList.add("hidden");
    todayTasks.classList.add("hidden");
  });
  showProjectArea.addEventListener("click", () => {
    showFormArea.classList.add("hidden");
    // showProject.classList.toggle("hidden");
    showAllTasksArea.classList.add("hidden");
    todayTasks.classList.add("hidden");
  });
  showAllProjects.addEventListener("click", () => {
    liHolderProject.classList.toggle("hidden");
  });
  showTodayTasks.addEventListener("click", () => {
    todayTasks.classList.toggle("hidden");
    showAllTasksArea.classList.add("hidden");
    // showProject.classList.add("hidden");
    showFormArea.classList.add("hidden");
  });
};
export default showSection;
