import { myProjects, newProject } from "./projects";
import "./style.css";

const menu = ["Home", "Today", "Upcoming"];

const initialize = document.querySelector("#content");

export default function initializeUi() {
  initialize.appendChild(createHeader());
  initialize.appendChild(createMain());
  initialize.appendChild(createFooter());
}

function createHeader() {
  const headerContainer = document.createElement("div");
  const headerIcon = document.createElement("h1");
  headerContainer.setAttribute("id", "headerContainer");
  headerIcon.classList.add("title");
  headerIcon.textContent = "Do It Up";
  headerContainer.appendChild(headerIcon);
  return headerContainer;
}

function createMain() {
  const mainContainer = document.createElement("div");
  const main = document.createElement("div");
  const sidebar = document.createElement("div");
  const navList = document.createElement("ul");
  mainContainer.setAttribute("id", "mainContainer");
  sidebar.classList.add("sidebar");
  main.classList.add("main");

  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    li.classList.add(menu[i].toLowerCase(), "menu");
    const a = document.createElement("a");
    a.innerHTML = menu[i];
    li.appendChild(a);
    navList.appendChild(li);
  }

  sidebar.appendChild(navList);
  mainContainer.appendChild(sidebar);
  mainContainer.appendChild(main);
  return mainContainer;
}

function createFooter() {
  const footerContainer = document.createElement("div");
  const footer = document.createElement("div");
  footerContainer.setAttribute("id", "footerContainer");
  footer.classList.add("footer");
  footer.textContent = "Do It Up 2023 © https://github.com/xKChan";
  footerContainer.appendChild(footer);
  return footerContainer;
}

console.log(myProjects);
newProject("Clean keyboard", "NA", "Friday", "low");
newProject("Clean Car", "NA", "Saturday", "High");
