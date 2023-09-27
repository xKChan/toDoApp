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
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
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

function updateTask(index, description) {
  myTasks[index].description = description;
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
  closeEdit();
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
          description.classList.add("description");
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
  document.querySelectorAll(".editBtn").forEach((btn) => {
    btn.addEventListener("click", function () {
      showEdit();
      for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
        if (btn.dataset.edit == i) {
          document.querySelector("#editTitle").textContent = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].title;
          document.querySelector("#editTitle").value = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].title;
          document.querySelector("#editDescription").value =
            _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].description;
          document.querySelector("#editPriority").value = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].priority;
          editTask();
          return;
        }
      }
    });
  });
}

function closeEdit() {
  document.querySelector("#cancelEdit").addEventListener("click", function () {
    hideEdit();
  });
}

function hideEdit() {
  document.querySelector("#editPopUp").style.display = "none";
  toggleContainer();
}

function showEdit() {
  document.querySelector("#editPopUp").removeAttribute("style");
  toggleContainer();
}

function toggleContainer() {
  document
    .querySelector("#popUpEditContainer")
    .classList.toggle("popUpEditContainer");
}

function editTask() {
  let selectedTask = document.querySelector("#editTitle");
  for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
    if (selectedTask.textContent == _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].title) {
      return i;
    }
  }
}

function confirmEdit() {
  let confirmBtn = document.querySelector("#edit-task");
  confirmBtn.addEventListener("click", function () {
    let task = editTask();
    _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[task].title = document.querySelector("#editTitle").value;
    _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[task].description =
      document.querySelector("#editDescription").value;
    _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[task].priority = document.querySelector("#editPriority").value;
    hideEdit();
    displayTasks();
  });
}

confirmEdit();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQmdDOztBQUVoQywrQ0FBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlUYXNrcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNsZWFuIFJvb21cIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBkdWVEYXRlOiBcIlN1bmRheVwiLFxuICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRmlsbCBvdXQgQ2hpbmVzZSBWaXNhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlsbCBvdXQgYXBwbGljYXRpb24gZm9yIGNoaW5lc2UgdmlzYXNcIixcbiAgICBkdWVEYXRlOiBcIkZyaWRheVwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBhY2sgdXAgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGFjayB1cCBhbGwgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2Ugd2hlbiBpdHMgZG9uZSBidWlsZGluZ1wiLFxuICAgIGR1ZURhdGU6IFwiVG9kYXlcIixcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgfSxcbl07XG5cbi8vIFByb2plY3QgZmFjdG9yeVxuY2xhc3MgVGFza3Mge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIk4vQVwiLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IGFkZFRhc2tzID0gbmV3IFRhc2tzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpO1xuICBteVRhc2tzLnB1c2goYWRkVGFza3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrLmRhdGFzZXQucmVtb3ZlID09IGkpIHtcbiAgICAgIG15VGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFzayhpbmRleCwgZGVzY3JpcHRpb24pIHtcbiAgbXlUYXNrc1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbn1cbiIsImltcG9ydCB7IG15VGFza3MsIG1ha2VOZXdUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCByZW1vdmVpY29uIGZyb20gXCIuL2ltZ3MvcmVtb3ZlMS5zdmdcIjtcbmltcG9ydCBhZGROZXdJY29uIGZyb20gXCIuL2ltZ3MvbmV3LnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltZ3MvZWRpdC5zdmdcIjtcbmltcG9ydCB7IGRlIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbWVudSA9IFtcIkhvbWVcIiwgXCJUb2RheVwiLCBcIlVwY29taW5nXCJdO1xuY29uc3QgcHJvamVjdHMgPSBbXCJHeW1cIiwgXCJXb3JrXCIsIFwiR29hbHNcIl07XG5cbmNvbnN0IGluaXRpYWxpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVVpKCkge1xuICBjcmVhdGVTaWRlYmFyKCk7XG4gIGRpc3BsYXlUYXNrcygpO1xuICBhZGROZXdCdG4oKTtcbiAgc3VibWl0Rm9ybSgpO1xuICBjYW5jZWxCdG4oKTtcbiAgY2xvc2VFZGl0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNyZWF0ZU5hdkJhcigpO1xuICBjcmVhdGVQcm9qZWN0QmFyKCk7XG4gIGNvbnN0IGFkZE5ldyA9IG5ldyBJbWFnZSgpO1xuICBhZGROZXcuY2xhc3NMaXN0LmFkZChcImFkZE5ld1wiLCBcImljb25cIik7XG4gIGFkZE5ldy5zcmMgPSBhZGROZXdJY29uO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZE5ldyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIGEuaW5uZXJIVE1MID0gbWVudVtpXTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICB9XG4gIHJldHVybiBuYXZMaXN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QmFyKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZcIik7XG4gICAgYS5pbm5lckhUTUwgPSBwcm9qZWN0c1tpXTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gIGxldCBjbGVhckRpc3BsYXkgPSBwcm9qZWN0VGFza3M7XG4gIHJlbW92ZUR1cGxpY2F0ZXMoY2xlYXJEaXNwbGF5KTtcbiAgY3JlYXRlVGFza3MoKTtcbiAgcmVtb3ZlVGFza0J0bigpO1xuICBjb21wbGV0ZVRhc2soKTtcbiAgbW9yZURldGFpbHMoKTtcbiAgZWRpdEJ0bigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGRvbSkge1xuICB3aGlsZSAoZG9tLmZpcnN0Q2hpbGQpIHtcbiAgICBkb20ucmVtb3ZlQ2hpbGQoZG9tLmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBkb207XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFzayA9IG15VGFza3NbaV07XG4gICAgbGV0IHRhc2tMaXN0ID0gYHRhc2tMaXN0JHtpfWA7XG5cbiAgICBsZXQgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKFwidGFza0xpc3RcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInRpdGxlVGFza3NcIiwgdGFza0xpc3QpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIsIFwicmlnaHRTaWRlXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInJpZ2h0U2lkZVwiKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0QnRuXCIsIFwiaWNvblwiKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZUJ0blwiLCBcImljb25cIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja1wiLCBpKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIiwgaSk7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRcIiwgaSk7XG4gICAgcmVtb3ZlLnNldEF0dHJpYnV0ZShcImRhdGEtcmVtb3ZlXCIsIGkpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIC8vIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGFmYXVsdERlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIGVkaXQuc3JjID0gZWRpdEljb247XG4gICAgcmVtb3ZlLnNyYyA9IHJlbW92ZWljb247XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQodGFza0VsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrQnRuKCkge1xuICBsZXQgZGVsZXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZW1vdmVdXCIpO1xuICBkZWxldGVUYXNrLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW1vdmVUYXNrKGl0ZW0pO1xuICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICBtYWtlTmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgZGlzcGxheVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFkZE5ld1Rhc2soKTtcbiAgICAgIGhpZGVGb3JtKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0J0bigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGROZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsQnRuKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbE5ld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhpZGVGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICBmb3JtQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBmb3JtQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1Db250YWluZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUNvbnRhaW5lclwiKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVUYXNrKCkge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LmZvckVhY2goKGJveCkgPT4ge1xuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgICBjb21wbGV0ZVRhc2tDaGVjayhib3gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGVUYXNrQ2hlY2soYm94KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFza0NoZWNrKGJveCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYm94LmRhdGFzZXQuY2hlY2sgPT0gaSkge1xuICAgICAgbGV0IHRhc2tTZWxlY3RvciA9IGAudGFza0xpc3Qke2l9YDtcbiAgICAgIGxldCBzZWxlY3RlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhc2tTZWxlY3Rvcik7XG4gICAgICBzZWxlY3RlZFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlVGFza1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9yZURldGFpbHMoKSB7XG4gIGNvbnN0IGRldGFpbFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxQb3BVcFwiKTtcbiAgY29uc3QgZ2V0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YXNrXVwiKTtcbiAgZ2V0RGV0YWlscy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlRHVwbGljYXRlcyhkZXRhaWxQb3BVcCk7XG4gICAgICBkZXRhaWxQb3BVcC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwQ29udGFpbmVyXCIpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wVXBDb250YWluZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2suZGF0YXNldC50YXNrID09IGkpIHtcbiAgICAgICAgICBjb25zdCByZW1vdmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb25zdCBwb3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG15VGFza3NbaV0udGl0bGU7XG4gICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbXlUYXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBkdWVEYXRlVGl0bGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gbXlUYXNrc1tpXS5kdWVEYXRlO1xuICAgICAgICAgIHJlbW92ZS5zcmMgPSByZW1vdmVpY29uO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wQ29udGFpbmVyXCIpO1xuICAgICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicG9wVXBJY29uXCIsIFwiaWNvblwiKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICBwb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgICAgZGV0YWlsUG9wVXAuYXBwZW5kQ2hpbGQocG9wQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvc2VQb3BVcCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcEljb25cIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxQb3BVcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwQ29udGFpbmVyXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwQ29udGFpbmVyXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdEJ0bigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0QnRuXCIpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc2hvd0VkaXQoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYnRuLmRhdGFzZXQuZWRpdCA9PSBpKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0VGl0bGVcIikudGV4dENvbnRlbnQgPSBteVRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFRpdGxlXCIpLnZhbHVlID0gbXlUYXNrc1tpXS50aXRsZTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXREZXNjcmlwdGlvblwiKS52YWx1ZSA9XG4gICAgICAgICAgICBteVRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFByaW9yaXR5XCIpLnZhbHVlID0gbXlUYXNrc1tpXS5wcmlvcml0eTtcbiAgICAgICAgICBlZGl0VGFzaygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VFZGl0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbEVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBoaWRlRWRpdCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZUVkaXQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFBvcFVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdG9nZ2xlQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dFZGl0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQb3BVcFwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgdG9nZ2xlQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbnRhaW5lcigpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNwb3BVcEVkaXRDb250YWluZXJcIilcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwRWRpdENvbnRhaW5lclwiKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gIGxldCBzZWxlY3RlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUaXRsZVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNlbGVjdGVkVGFzay50ZXh0Q29udGVudCA9PSBteVRhc2tzW2ldLnRpdGxlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmlybUVkaXQoKSB7XG4gIGxldCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2tcIik7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFzayA9IGVkaXRUYXNrKCk7XG4gICAgbXlUYXNrc1t0YXNrXS50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFRpdGxlXCIpLnZhbHVlO1xuICAgIG15VGFza3NbdGFza10uZGVzY3JpcHRpb24gPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0RGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgbXlUYXNrc1t0YXNrXS5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGhpZGVFZGl0KCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gIH0pO1xufVxuXG5jb25maXJtRWRpdCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplVWkgZnJvbSBcIi4vdWlcIjtcblxuaW5pdGlhbGl6ZVVpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=