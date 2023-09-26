/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeNewTask: () => (/* binding */ makeNewTask),
/* harmony export */   myTasks: () => (/* binding */ myTasks),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
const myTasks = [
  {
    title: "Clean Room",
    description: "",
    dueDate: "Sunday",
    priority: "Low",
  },
  {
    title: "Fill out Chinese Visa",
    description: "Fill out application for chinese visas",
    dueDate: "Friday",
    priority: "High",
  },
  {
    title: "Pack up items to move to new house",
    description:
      "Pack up all items to move to new house when its done building",
    dueDate: "Today",
    priority: "Medium",
  },
];

// Project factory
class Tasks {
  constructor(title, description = "N/A", dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function makeNewTask(title, description, duedate, priority) {
  let addTasks = new Tasks(title, description, duedate, priority);
  myTasks.push(addTasks);
}

function removeTask(task) {
  for (let i = 0; i < myTasks.length; i++) {
    if (task.dataset.remove == i) {
      myTasks.splice(i, 1);
      return;
    }
  }
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeUi)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _imgs_remove1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/remove1.svg */ "./src/imgs/remove1.svg");
/* harmony import */ var _imgs_new_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/new.svg */ "./src/imgs/new.svg");
/* harmony import */ var _imgs_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/edit.svg */ "./src/imgs/edit.svg");





// import "./style.css";

const menu = ["Home", "Today", "Upcoming"];
const projects = ["Gym", "Work", "Goals"];

const initialize = document.querySelector("#content");
const sidebar = document.querySelector(".sidebar");
const projectTasks = document.querySelector(".tasks");

function initializeUi() {
  createSidebar();
  displayTasks();
  addNewBtn();
  submitForm();
  cancelBtn();
}

function createSidebar() {
  createNavBar();
  createProjectBar();
  const addNew = new Image();
  addNew.classList.add("addNew", "icon");
  addNew.src = _imgs_new_svg__WEBPACK_IMPORTED_MODULE_2__;
  sidebar.appendChild(addNew);
}

function createNavBar() {
  const navList = document.createElement("ul");
  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.classList.add("menu");
    a.innerHTML = menu[i];
    li.appendChild(a);
    navList.appendChild(li);
    sidebar.appendChild(navList);
  }
  return navList;
}

function createProjectBar() {
  const projectList = document.createElement("ul");
  projectList.textContent = "PROJECTS";
  for (let i = 0; i < projects.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.classList.add("projectNav");
    a.innerHTML = projects[i];
    li.appendChild(a);
    projectList.appendChild(li);
    sidebar.appendChild(projectList);
  }
  return projectList;
}

function displayTasks() {
  let clearDisplay = projectTasks;
  removeDuplicates(clearDisplay);
  createTasks();
  removeTaskBtn();
  completeTask();
  moreDetails();
  editBtn();
}

function removeDuplicates(dom) {
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
  return dom;
}

function createTasks() {
  for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
    let task = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i];
    let taskList = `taskList${i}`;

    let taskEl = document.createElement("div");
    let checkbox = document.createElement("input");
    let title = document.createElement("h3");
    let dueDate = document.createElement("div");
    let priority = document.createElement("h5");
    const edit = new Image();
    const remove = new Image();
    taskEl.classList.add("taskList");
    checkbox.classList.add("checkbox");
    title.classList.add("cards", "titleTasks", taskList);
    dueDate.classList.add("cards", "rightSide");
    priority.classList.add("cards", "rightSide");
    edit.classList.add("editBtn", "icon");
    remove.classList.add("removeBtn", "icon");
    checkbox.setAttribute("data-check", i);
    title.setAttribute("data-task", i);
    edit.setAttribute("data-edit", i);
    remove.setAttribute("data-remove", i);
    checkbox.type = "checkbox";
    title.textContent = task.title;
    // description.textContent = dafaultDescription;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;
    edit.src = _imgs_edit_svg__WEBPACK_IMPORTED_MODULE_3__;
    remove.src = _imgs_remove1_svg__WEBPACK_IMPORTED_MODULE_1__;
    taskEl.appendChild(checkbox);
    taskEl.appendChild(title);
    taskEl.appendChild(dueDate);
    taskEl.appendChild(priority);
    taskEl.appendChild(edit);
    taskEl.appendChild(remove);
    projectTasks.appendChild(taskEl);
  }
}

function removeTaskBtn() {
  let deleteTask = document.querySelectorAll("[data-remove]");
  deleteTask.forEach((item) => {
    item.addEventListener("click", () => {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.removeTask)(item);
      displayTasks();
    });
  });
}

function addNewTask() {
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let dueDate = document.querySelector("#dueDate").value;
  let priority = document.querySelector("#priority").value;

  (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.makeNewTask)(title, description, dueDate, priority);
  displayTasks();
}

function submitForm() {
  document
    .querySelector("#formContainer")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      addNewTask();
      hideForm();
    });
}

function addNewBtn() {
  document.querySelector(".addNew").addEventListener("click", () => {
    showForm();
  });
}

function cancelBtn() {
  document.querySelector("#cancelNew").addEventListener("click", () => {
    hideForm();
  });
}

function showForm() {
  document.querySelector("#form").removeAttribute("style");
  formContainer();
}

function hideForm() {
  document.querySelector("#form").style.display = "none";
  formContainer();
}

function formContainer() {
  document.querySelector("#formContainer").classList.toggle("formContainer");
}

function completeTask() {
  const checkbox = document.querySelectorAll(".checkbox");
  checkbox.forEach((box) => {
    box.addEventListener("change", function () {
      if (box.checked) {
        completeTaskCheck(box);
      } else {
        completeTaskCheck(box);
      }
    });
  });
}

function completeTaskCheck(box) {
  for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
    if (box.dataset.check == i) {
      let taskSelector = `.taskList${i}`;
      let selectedTask = document.querySelector(taskSelector);
      selectedTask.classList.toggle("completeTask");
    }
  }
}

function moreDetails() {
  const detailPopUp = document.querySelector("#detailPopUp");
  const getDetails = document.querySelectorAll("[data-task]");
  getDetails.forEach((task) => {
    task.addEventListener("click", function () {
      removeDuplicates(detailPopUp);
      detailPopUp.removeAttribute("style");
      document
        .querySelector("#popUpContainer")
        .classList.toggle("popUpContainer");
      for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
        if (task.dataset.task == i) {
          const remove = new Image();
          const popContainer = document.createElement("div");
          const title = document.createElement("h1");
          const descriptionContainer = document.createElement("div");
          const descriptionTitle = document.createElement("h5");
          const description = document.createElement("p");
          const dueDateContainer = document.createElement("div");
          const dueDateTitle = document.createElement("h5");
          const dueDate = document.createElement("p");
          title.textContent = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].title;
          descriptionTitle.textContent = "Description: ";
          description.textContent = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].description;
          dueDateTitle.textContent = "Due Date: ";
          dueDate.textContent = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].dueDate;
          remove.src = _imgs_remove1_svg__WEBPACK_IMPORTED_MODULE_1__;
          popContainer.classList.add("popContainer");
          remove.classList.add("popUpIcon", "icon");
          descriptionContainer.appendChild(descriptionTitle);
          descriptionContainer.appendChild(description);
          dueDateContainer.appendChild(dueDateTitle);
          dueDateContainer.appendChild(dueDate);
          popContainer.appendChild(remove);
          popContainer.appendChild(title);
          popContainer.appendChild(descriptionContainer);
          popContainer.appendChild(dueDateContainer);
          detailPopUp.appendChild(popContainer);
        }
      }
      closePopUp();
    });
  });
}

function closePopUp() {
  let close = document.querySelector(".popUpIcon");
  close.addEventListener("click", function () {
    document.querySelector("#detailPopUp").style.display = "none";
    document
      .querySelector("#popUpContainer")
      .classList.toggle("popUpContainer");
  });
}

function editBtn() {
  let editPopUp = document.querySelector("#editPopUp");
  document.querySelectorAll(".editBtn").forEach((btn) => {
    btn.addEventListener("click", function () {
      editPopUp.removeAttribute("style");
      document
        .querySelector("#popUpEditContainer")
        .classList.toggle("popUpEditContainer");
      for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
        if (btn.dataset.edit == i) {
          console.log(_tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i]);
          document.querySelector(".editTitle").textContent = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].title;
          document.querySelector("#editDescription").value =
            _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].description;
          document.querySelector("#editPriority").value = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].priority;
        }
      }
    });
    closeEdit();
  });
}

function closeEdit() {
  document.querySelector("#cancelEdit").addEventListener("click", function () {
    document.querySelector("#editPopUp").style.display = "none";
    document
      .querySelector("#popUpEditContainer")
      .classList.toggle("popUpEditContainer");
  });
}


/***/ }),

/***/ "./src/imgs/edit.svg":
/*!***************************!*\
  !*** ./src/imgs/edit.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8421b7fc701a0f1a93be.svg";

/***/ }),

/***/ "./src/imgs/new.svg":
/*!**************************!*\
  !*** ./src/imgs/new.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "163901b5272c64ad919e.svg";

/***/ }),

/***/ "./src/imgs/remove1.svg":
/*!******************************!*\
  !*** ./src/imgs/remove1.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


(0,_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSwyQ0FBTyxTQUFTO0FBQzFDO0FBQ0Esc0JBQXNCLDJDQUFPO0FBQzdCLDZEQUE2RCwyQ0FBTztBQUNwRTtBQUNBLFlBQVksMkNBQU87QUFDbkIsMERBQTBELDJDQUFPO0FBQ2pFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeFJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQmdDOztBQUVoQywrQ0FBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlUYXNrcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNsZWFuIFJvb21cIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBkdWVEYXRlOiBcIlN1bmRheVwiLFxuICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRmlsbCBvdXQgQ2hpbmVzZSBWaXNhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlsbCBvdXQgYXBwbGljYXRpb24gZm9yIGNoaW5lc2UgdmlzYXNcIixcbiAgICBkdWVEYXRlOiBcIkZyaWRheVwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBhY2sgdXAgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGFjayB1cCBhbGwgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2Ugd2hlbiBpdHMgZG9uZSBidWlsZGluZ1wiLFxuICAgIGR1ZURhdGU6IFwiVG9kYXlcIixcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgfSxcbl07XG5cbi8vIFByb2plY3QgZmFjdG9yeVxuY2xhc3MgVGFza3Mge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIk4vQVwiLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IGFkZFRhc2tzID0gbmV3IFRhc2tzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpO1xuICBteVRhc2tzLnB1c2goYWRkVGFza3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrLmRhdGFzZXQucmVtb3ZlID09IGkpIHtcbiAgICAgIG15VGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbXlUYXNrcywgbWFrZU5ld1Rhc2ssIHJlbW92ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHJlbW92ZWljb24gZnJvbSBcIi4vaW1ncy9yZW1vdmUxLnN2Z1wiO1xuaW1wb3J0IGFkZE5ld0ljb24gZnJvbSBcIi4vaW1ncy9uZXcuc3ZnXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vaW1ncy9lZGl0LnN2Z1wiO1xuaW1wb3J0IHsgZGUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBtZW51ID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiVXBjb21pbmdcIl07XG5jb25zdCBwcm9qZWN0cyA9IFtcIkd5bVwiLCBcIldvcmtcIiwgXCJHb2Fsc1wiXTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5jb25zdCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplVWkoKSB7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbiAgZGlzcGxheVRhc2tzKCk7XG4gIGFkZE5ld0J0bigpO1xuICBzdWJtaXRGb3JtKCk7XG4gIGNhbmNlbEJ0bigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICBjcmVhdGVOYXZCYXIoKTtcbiAgY3JlYXRlUHJvamVjdEJhcigpO1xuICBjb25zdCBhZGROZXcgPSBuZXcgSW1hZ2UoKTtcbiAgYWRkTmV3LmNsYXNzTGlzdC5hZGQoXCJhZGROZXdcIiwgXCJpY29uXCIpO1xuICBhZGROZXcuc3JjID0gYWRkTmV3SWNvbjtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGROZXcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBhLmlubmVySFRNTCA9IG1lbnVbaV07XG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgfVxuICByZXR1cm4gbmF2TGlzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJhcigpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2XCIpO1xuICAgIGEuaW5uZXJIVE1MID0gcHJvamVjdHNbaV07XG4gICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICBsZXQgY2xlYXJEaXNwbGF5ID0gcHJvamVjdFRhc2tzO1xuICByZW1vdmVEdXBsaWNhdGVzKGNsZWFyRGlzcGxheSk7XG4gIGNyZWF0ZVRhc2tzKCk7XG4gIHJlbW92ZVRhc2tCdG4oKTtcbiAgY29tcGxldGVUYXNrKCk7XG4gIG1vcmVEZXRhaWxzKCk7XG4gIGVkaXRCdG4oKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhkb20pIHtcbiAgd2hpbGUgKGRvbS5maXJzdENoaWxkKSB7XG4gICAgZG9tLnJlbW92ZUNoaWxkKGRvbS5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSBteVRhc2tzW2ldO1xuICAgIGxldCB0YXNrTGlzdCA9IGB0YXNrTGlzdCR7aX1gO1xuXG4gICAgbGV0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCByZW1vdmUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcInRhc2tMaXN0XCIpO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIiwgXCJ0aXRsZVRhc2tzXCIsIHRhc2tMaXN0KTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInJpZ2h0U2lkZVwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIiwgXCJyaWdodFNpZGVcIik7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ0blwiLCBcImljb25cIik7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVCdG5cIiwgXCJpY29uXCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tcIiwgaSk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIsIGkpO1xuICAgIGVkaXQuc2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0XCIsIGkpO1xuICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbW92ZVwiLCBpKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAvLyBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhZmF1bHREZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICBlZGl0LnNyYyA9IGVkaXRJY29uO1xuICAgIHJlbW92ZS5zcmMgPSByZW1vdmVpY29uO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgcHJvamVjdFRhc2tzLmFwcGVuZENoaWxkKHRhc2tFbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0J0bigpIHtcbiAgbGV0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVtb3ZlXVwiKTtcbiAgZGVsZXRlVGFzay5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVtb3ZlVGFzayhpdGVtKTtcbiAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFzaygpIHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgbWFrZU5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gIGRpc3BsYXlUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1Db250YWluZXJcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGROZXdUYXNrKCk7XG4gICAgICBoaWRlRm9ybSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdCdG4oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTmV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEJ0bigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxOZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoaWRlRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgZm9ybUNvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiBoaWRlRm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZm9ybUNvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiBmb3JtQ29udGFpbmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1Db250YWluZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1Db250YWluZXJcIik7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzaygpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICBjaGVja2JveC5mb3JFYWNoKChib3gpID0+IHtcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoYm94LmNoZWNrZWQpIHtcbiAgICAgICAgY29tcGxldGVUYXNrQ2hlY2soYm94KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlVGFza0NoZWNrKGJveCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2tDaGVjayhib3gpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGJveC5kYXRhc2V0LmNoZWNrID09IGkpIHtcbiAgICAgIGxldCB0YXNrU2VsZWN0b3IgPSBgLnRhc2tMaXN0JHtpfWA7XG4gICAgICBsZXQgc2VsZWN0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXNrU2VsZWN0b3IpO1xuICAgICAgc2VsZWN0ZWRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVRhc2tcIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1vcmVEZXRhaWxzKCkge1xuICBjb25zdCBkZXRhaWxQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsUG9wVXBcIik7XG4gIGNvbnN0IGdldERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFza11cIik7XG4gIGdldERldGFpbHMuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZUR1cGxpY2F0ZXMoZGV0YWlsUG9wVXApO1xuICAgICAgZGV0YWlsUG9wVXAucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNwb3BVcENvbnRhaW5lclwiKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwQ29udGFpbmVyXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0YXNrLmRhdGFzZXQudGFzayA9PSBpKSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29uc3QgcG9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBteVRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG15VGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgZHVlRGF0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG15VGFza3NbaV0uZHVlRGF0ZTtcbiAgICAgICAgICByZW1vdmUuc3JjID0gcmVtb3ZlaWNvbjtcbiAgICAgICAgICBwb3BDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcENvbnRhaW5lclwiKTtcbiAgICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInBvcFVwSWNvblwiLCBcImljb25cIik7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICBwb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgICAgZGV0YWlsUG9wVXAuYXBwZW5kQ2hpbGQocG9wQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvc2VQb3BVcCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcEljb25cIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxQb3BVcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwQ29udGFpbmVyXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwQ29udGFpbmVyXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdEJ0bigpIHtcbiAgbGV0IGVkaXRQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFBvcFVwXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRCdG5cIikuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlZGl0UG9wVXAucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNwb3BVcEVkaXRDb250YWluZXJcIilcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJwb3BVcEVkaXRDb250YWluZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LmVkaXQgPT0gaSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG15VGFza3NbaV0pO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRpdGxlXCIpLnRleHRDb250ZW50ID0gbXlUYXNrc1tpXS50aXRsZTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXREZXNjcmlwdGlvblwiKS52YWx1ZSA9XG4gICAgICAgICAgICBteVRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFByaW9yaXR5XCIpLnZhbHVlID0gbXlUYXNrc1tpXS5wcmlvcml0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNsb3NlRWRpdCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbEVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQb3BVcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwRWRpdENvbnRhaW5lclwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJwb3BVcEVkaXRDb250YWluZXJcIik7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplVWkgZnJvbSBcIi4vdWlcIjtcblxuaW5pdGlhbGl6ZVVpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=