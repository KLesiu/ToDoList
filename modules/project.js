const project = () => {
  const form = document.querySelector(".form-project");
  const buttonForm = document.querySelector(".form-project button");
  const inputForm = document.querySelector("#addNewProjectForm");
  const areaProject = document.querySelector("#projectArea");
  const addProject = document.querySelector("#buttonProject");
  const projectsList = document.querySelector(".projectList");
  const projectTitle = document.querySelector(".projectContainer h2");
  const projectButtonTask = document.querySelector("#projectButtonTask");
  class Project {
    constructor(name) {
      this.name = name;
    }
    createProject(name) {
      const projectName = document.createElement("li");
      const projectNameHolder = document.createElement("div");
      projectNameHolder.classList.add("li-holder-project");
      projectName.innerHTML = name;
      projectNameHolder.appendChild(projectName);
      projectsList.appendChild(projectNameHolder);
      let taskHolder = [];
      projectName.addEventListener("click", () => {
        projectTitle.innerHTML = name;
        this.showProject();
      });
      projectButtonTask.addEventListener("click", () => {});
    }
    showProject() {
      areaProject.classList.toggle("hidden");
    }
  }
  addProject.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });
  buttonForm.addEventListener("click", () => {
    const title = inputForm.value;
    const project = new Project(title);
    console.log(project.name);
    project.createProject(title);
    form.classList.add("hidden");
  });
};
export default project;
