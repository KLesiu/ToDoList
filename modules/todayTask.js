// const todayTask = () => {
//   let todayHolder = [];
//   const getTasks = () => {
//     const tasks = document.querySelectorAll(".task");
//     tasks.forEach((element) => {
//       if (todayHolder.includes(element)) {
//         return;
//       } else {
//         todayHolder.push(element);
//       }
//     });
//     console.log(todayHolder);
//   };
//   const todayTasksButton = document.querySelector("#todayTasks");
//   todayTasksButton.addEventListener("click", () => {
//     getTasks();
//     const todayTaskArea = document.querySelector("#todayTaskArea");
//     for (let i = 0; i < todayHolder.length; i++) {
//       todayTaskArea.appendChild(todayHolder[i]);
//       console.log(i);
//     }
//   });
// };
// export default todayTask;
