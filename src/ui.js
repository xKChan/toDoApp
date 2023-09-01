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
  headerIcon.textContent = "Do It Up";

  headerContainer.appendChild(headerIcon);

  return headerContainer;
}

function createMain() {
  const menu = ["Home", "Today", "Upcoming"];

  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "mainContainer");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const navList = document.createElement("ul");

  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    li.classList.add(menu[i].toLowerCase(), "menu");

    const a = document.createElement("a");
    a.innerHTML = menu[i];

    li.appendChild(a);
    navList.appendChild(li);
  }

  const main = document.createElement("div");
  main.classList.add("main");

  sidebar.appendChild(navList);

  mainContainer.appendChild(sidebar);
  mainContainer.appendChild(main);

  return mainContainer;
}

function createFooter() {
  const footerContainer = document.createElement("div");
  footerContainer.setAttribute("id", "footerContainer");

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Do It Up 2023 © https://github.com/xKChan";

  footerContainer.appendChild(footer);
  return footerContainer;
}
