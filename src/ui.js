import { myTasks, newTasks } from "./tasks";
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
  for (let i = 0; i < myTasks.length; i++) {
    let task = myTasks[i];
    const dafaultDescription = task.description != "" ? task.description : "NA";
    let taskEl = document.createElement("div");
    let title = document.createElement("h3");
    let dueDate = document.createElement("div");
    let priority = document.createElement("h5");
    taskEl.classList.add("taskList");
    title.classList.add("cards");
    dueDate.classList.add("cards", "rightSide");
    priority.classList.add("cards", "rightSide");
    title.textContent = task.title;
    // description.textContent = dafaultDescription;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;
    taskEl.appendChild(title);
    taskEl.appendChild(dueDate);
    taskEl.appendChild(priority);
    projectTasks.appendChild(taskEl);
    console.log(task);
  }
}

// console.log(myProjects);

newTasks("Clean keyboard", "NA", "Friday", "low");
newTasks("Clean Car", "NA", "Saturday", "High");
