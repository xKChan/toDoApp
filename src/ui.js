import { myTasks, makeNewTask, removeTask } from "./tasks";
import removeicon from "./imgs/remove1.svg";
import addNewIcon from "./imgs/new.svg";
// import "./style.css";

const menu = ["Home", "Today", "Upcoming"];

const initialize = document.querySelector("#content");
const sidebar = document.querySelector(".sidebar");
const projectTasks = document.querySelector(".tasks");

export default function initializeUi() {
  createSidebar();
  displayTasks();
  addNewBtn();
}

function createSidebar() {
  const navList = document.createElement("ul");
  const addNew = new Image();
  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.classList.add("menu");
    a.innerHTML = menu[i];
    li.appendChild(a);
    navList.appendChild(li);
  }
  addNew.classList.add("addNew", "icon");
  addNew.src = addNewIcon;
  sidebar.appendChild(navList);
  sidebar.appendChild(addNew);
}

function displayTasks() {
  removeDuplicates();
  createTasks();
  removeTaskBtn();
}

function removeDuplicates() {
  while (projectTasks.firstChild) {
    projectTasks.removeChild(projectTasks.firstChild);
  }
}

function createTasks() {
  for (let i = 0; i < myTasks.length; i++) {
    let task = myTasks[i];
    // const dafaultDescription = task.description != "" ? task.description : "NA";
    let taskEl = document.createElement("div");
    let title = document.createElement("h3");
    let dueDate = document.createElement("div");
    let priority = document.createElement("h5");
    const remove = new Image();
    taskEl.classList.add("taskList");
    title.classList.add("cards");
    dueDate.classList.add("cards", "rightSide");
    priority.classList.add("cards", "rightSide");
    remove.classList.add("removeBtn", "icon");
    remove.setAttribute("data-remove", i);
    title.textContent = task.title;
    // description.textContent = dafaultDescription;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;
    remove.src = removeicon;
    taskEl.appendChild(title);
    taskEl.appendChild(dueDate);
    taskEl.appendChild(priority);
    taskEl.appendChild(remove);
    projectTasks.appendChild(taskEl);
  }
}

function removeTaskBtn() {
  let deleteTask = document.querySelectorAll("[data-remove]");
  deleteTask.forEach((item) => {
    item.addEventListener("click", () => {
      removeTask(item);
      displayTasks();
    });
  });
}

function addNewBtn() {
  let addTask = document.querySelector(".addNew");
  addTask.addEventListener("click", () => {
    console.log("hi");
    makeNewTask("Charge Laptop", "", "Tomorrow", "Low");
    console.log(myTasks);

    displayTasks();
    return;
  });
}
