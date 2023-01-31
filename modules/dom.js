const buildDom = () => {
  const header = document.createElement("header");
  const h1Header = document.createElement("h1");
  const saveButton = document.createElement("button");
  saveButton.id = "saveBut";
  const pSaveButton = document.createElement("p");
  pSaveButton.innerText = "Save";
  saveButton.appendChild(pSaveButton);
  h1Header.innerHTML = `<span style="font-size:40px" class="material-symbols-outlined"> done </span>To<span>DO</span>List by Lesiuuu`;
  header.appendChild(h1Header);
  header.appendChild(saveButton);
  document.body.appendChild(header);
  const container = document.createElement("div");
  container.classList.add("container");
  const nav = document.createElement("nav");
  nav.innerHTML = `<h2>MENU</h2>
  <ul>
  <li id="todayTasks"> Today Tasks </li>
  <li id="allTasks"> All Tasks </li>
  </ul>
  <button id="buttonTask"> Add Task </button>`;
  container.appendChild(nav);
  const form = document.createElement("div");
  form.classList.add("form");
  form.classList.add("hidden");
  form.innerHTML = `<h2><input id="firstInput" type="text" name="name" value="Name" /></h2>

  <label for="description">Describe it a little longer</label>
  <input type="text" name="description" id="descriptionInput" />
  <label for="dueDate">How much time do you have?</label>
  <input type="date" name="dueDate" id="taskDate" />
  <label for="priority">Is it very important?</label>
  <input type="text" name="priority" id="priorityInput" />
  <button class="formButton" type="submit">ADD</button>

  <p class="error"></p>`;
  container.appendChild(form);
  const mainTaskArea = document.createElement("main");
  mainTaskArea.id = "taskArea";
  mainTaskArea.classList.add("hidden");
  container.appendChild(mainTaskArea);
  document.body.appendChild(container);
};
export default buildDom;
