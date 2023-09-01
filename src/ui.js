import "./style.css";

export default function initializeUi() {
  const initialize = document.querySelector("#content");
  initialize.appendChild(createHeader());
  initialize.appendChild(createMain());
  initialize.appendChild(createFooter());
}

function createHeader() {
  const headerContainer = document.createElement("div");
  headerContainer.setAttribute("id", "headerContainer");

  const headerIcon = document.createElement("h1");
  headerIcon.classList.add("title");
  headerIcon.textContent = "doItUp";

  headerContainer.appendChild(headerIcon);

  return headerContainer;
}

function createMain() {
  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "mainContainer");

  const sidebar = document.createElement("div");
  const main = document.createElement("div");

  sidebar.classList.add("sidebar");
  main.classList.add("main");

  mainContainer.appendChild(sidebar);
  mainContainer.appendChild(main);

  return mainContainer;
}

function createFooter() {
  const footerContainer = document.createElement("div");

  footerContainer.setAttribute("id", "footerContainer");

  return footerContainer;
}
