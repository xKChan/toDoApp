import { myProjects, newProject } from "./projects";
// import "./style.css";

const menu = ["Home", "Today", "Upcoming"];

const initialize = document.querySelector("#content");
const sidebar = document.querySelector(".sidebar");

export default function initializeUi() {
  createSidebar();
  displayTasks();
}

function createSidebar() {
  const navList = document.createElement("ul");
  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.classList.add("menu");

    a.innerHTML = menu[i];
    li.appendChild(a);
    navList.appendChild(li);
  }
  sidebar.appendChild(navList);
}

function displayTasks() {
  const projectTasks = document.querySelector(".tasks");
  for (let i = 0; i < myProjects.length; i++) {
    let task = myProjects[i];
    const dafaultDescription = task.description != "" ? task.description : "NA";
    let taskEl = document.createElement("div");
    let title = document.createElement("h3");
    let description = document.createElement("p");
    let dueDate = document.createElement("div");
    let priority = document.createElement("h5");
    taskEl.classList.add("taskList");
    title.textContent = task.title;
    description.textContent = dafaultDescription;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;
    taskEl.appendChild(title);
    taskEl.appendChild(description);
    taskEl.appendChild(dueDate);
    taskEl.appendChild(priority);
    projectTasks.appendChild(taskEl);
    console.log(task);
  }
}

// console.log(myProjects);

newProject("Clean keyboard", "NA", "Friday", "low");
newProject("Clean Car", "NA", "Saturday", "High");
