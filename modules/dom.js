const showSection = () => {
  const showAllTasksArea = document.querySelector("#taskArea");
  const showFormArea = document.querySelector(".form");
  const showProjectArea = document.querySelector(".projectList li");
  const showAllTasks = document.querySelector("#allTasks");
  const showAddTaskForm = document.querySelector("#buttonTask");
  const showProject = document.querySelector("#projectArea");
  const showAllProjects = document.querySelector(".project");
  const liHolderProject = document.querySelector(".li-holder-project");

  showAllTasks.addEventListener("click", () => {
    showFormArea.classList.add("hidden");
    showProject.classList.add("hidden");
    showAllTasksArea.classList.toggle("hidden");
  });

  showAddTaskForm.addEventListener("click", () => {
    showFormArea.classList.toggle("hidden");
    showProject.classList.add("hidden");
    showAllTasksArea.classList.add("hidden");
  });
  showProjectArea.addEventListener("click", () => {
    showFormArea.classList.add("hidden");
    showProject.classList.toggle("hidden");
    showAllTasksArea.classList.add("hidden");
  });
  showAllProjects.addEventListener("click", () => {
    liHolderProject.classList.toggle("hidden");
  });
};
export default showSection;
