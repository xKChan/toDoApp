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
          return;
        }
      }
      closeEdit();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLDJDQUFPLFNBQVM7QUFDMUM7QUFDQSxzQkFBc0IsMkNBQU87QUFDN0IsNkRBQTZELDJDQUFPO0FBQ3BFO0FBQ0EsWUFBWSwyQ0FBTztBQUNuQiwwREFBMEQsMkNBQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEJnQzs7QUFFaEMsK0NBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15VGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDbGVhbiBSb29tXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgZHVlRGF0ZTogXCJTdW5kYXlcIixcbiAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZpbGwgb3V0IENoaW5lc2UgVmlzYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpbGwgb3V0IGFwcGxpY2F0aW9uIGZvciBjaGluZXNlIHZpc2FzXCIsXG4gICAgZHVlRGF0ZTogXCJGcmlkYXlcIixcbiAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQYWNrIHVwIGl0ZW1zIHRvIG1vdmUgdG8gbmV3IGhvdXNlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlBhY2sgdXAgYWxsIGl0ZW1zIHRvIG1vdmUgdG8gbmV3IGhvdXNlIHdoZW4gaXRzIGRvbmUgYnVpbGRpbmdcIixcbiAgICBkdWVEYXRlOiBcIlRvZGF5XCIsXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gIH0sXG5dO1xuXG4vLyBQcm9qZWN0IGZhY3RvcnlcbmNsYXNzIFRhc2tzIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJOL0FcIiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gIGxldCBhZGRUYXNrcyA9IG5ldyBUYXNrcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgbXlUYXNrcy5wdXNoKGFkZFRhc2tzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFzay5kYXRhc2V0LnJlbW92ZSA9PSBpKSB7XG4gICAgICBteVRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IG15VGFza3MsIG1ha2VOZXdUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCByZW1vdmVpY29uIGZyb20gXCIuL2ltZ3MvcmVtb3ZlMS5zdmdcIjtcbmltcG9ydCBhZGROZXdJY29uIGZyb20gXCIuL2ltZ3MvbmV3LnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltZ3MvZWRpdC5zdmdcIjtcbmltcG9ydCB7IGRlIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbWVudSA9IFtcIkhvbWVcIiwgXCJUb2RheVwiLCBcIlVwY29taW5nXCJdO1xuY29uc3QgcHJvamVjdHMgPSBbXCJHeW1cIiwgXCJXb3JrXCIsIFwiR29hbHNcIl07XG5cbmNvbnN0IGluaXRpYWxpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVVpKCkge1xuICBjcmVhdGVTaWRlYmFyKCk7XG4gIGRpc3BsYXlUYXNrcygpO1xuICBhZGROZXdCdG4oKTtcbiAgc3VibWl0Rm9ybSgpO1xuICBjYW5jZWxCdG4oKTtcbiAgY2xvc2VFZGl0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNyZWF0ZU5hdkJhcigpO1xuICBjcmVhdGVQcm9qZWN0QmFyKCk7XG4gIGNvbnN0IGFkZE5ldyA9IG5ldyBJbWFnZSgpO1xuICBhZGROZXcuY2xhc3NMaXN0LmFkZChcImFkZE5ld1wiLCBcImljb25cIik7XG4gIGFkZE5ldy5zcmMgPSBhZGROZXdJY29uO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZE5ldyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIGEuaW5uZXJIVE1MID0gbWVudVtpXTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICB9XG4gIHJldHVybiBuYXZMaXN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QmFyKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZcIik7XG4gICAgYS5pbm5lckhUTUwgPSBwcm9qZWN0c1tpXTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gIGxldCBjbGVhckRpc3BsYXkgPSBwcm9qZWN0VGFza3M7XG4gIHJlbW92ZUR1cGxpY2F0ZXMoY2xlYXJEaXNwbGF5KTtcbiAgY3JlYXRlVGFza3MoKTtcbiAgcmVtb3ZlVGFza0J0bigpO1xuICBjb21wbGV0ZVRhc2soKTtcbiAgbW9yZURldGFpbHMoKTtcbiAgZWRpdEJ0bigpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGRvbSkge1xuICB3aGlsZSAoZG9tLmZpcnN0Q2hpbGQpIHtcbiAgICBkb20ucmVtb3ZlQ2hpbGQoZG9tLmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBkb207XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFzayA9IG15VGFza3NbaV07XG4gICAgbGV0IHRhc2tMaXN0ID0gYHRhc2tMaXN0JHtpfWA7XG5cbiAgICBsZXQgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKFwidGFza0xpc3RcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInRpdGxlVGFza3NcIiwgdGFza0xpc3QpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIsIFwicmlnaHRTaWRlXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInJpZ2h0U2lkZVwiKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0QnRuXCIsIFwiaWNvblwiKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZUJ0blwiLCBcImljb25cIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja1wiLCBpKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIiwgaSk7XG4gICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRcIiwgaSk7XG4gICAgcmVtb3ZlLnNldEF0dHJpYnV0ZShcImRhdGEtcmVtb3ZlXCIsIGkpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIC8vIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGFmYXVsdERlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIGVkaXQuc3JjID0gZWRpdEljb247XG4gICAgcmVtb3ZlLnNyYyA9IHJlbW92ZWljb247XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQodGFza0VsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrQnRuKCkge1xuICBsZXQgZGVsZXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZW1vdmVdXCIpO1xuICBkZWxldGVUYXNrLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW1vdmVUYXNrKGl0ZW0pO1xuICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKCkge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICBtYWtlTmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgZGlzcGxheVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFkZE5ld1Rhc2soKTtcbiAgICAgIGhpZGVGb3JtKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0J0bigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGROZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsQnRuKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbE5ld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhpZGVGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICBmb3JtQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBmb3JtQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1Db250YWluZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUNvbnRhaW5lclwiKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVUYXNrKCkge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LmZvckVhY2goKGJveCkgPT4ge1xuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgICBjb21wbGV0ZVRhc2tDaGVjayhib3gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGVUYXNrQ2hlY2soYm94KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFza0NoZWNrKGJveCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYm94LmRhdGFzZXQuY2hlY2sgPT0gaSkge1xuICAgICAgbGV0IHRhc2tTZWxlY3RvciA9IGAudGFza0xpc3Qke2l9YDtcbiAgICAgIGxldCBzZWxlY3RlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhc2tTZWxlY3Rvcik7XG4gICAgICBzZWxlY3RlZFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlVGFza1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9yZURldGFpbHMoKSB7XG4gIGNvbnN0IGRldGFpbFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxQb3BVcFwiKTtcbiAgY29uc3QgZ2V0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YXNrXVwiKTtcbiAgZ2V0RGV0YWlscy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlRHVwbGljYXRlcyhkZXRhaWxQb3BVcCk7XG4gICAgICBkZXRhaWxQb3BVcC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwQ29udGFpbmVyXCIpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wVXBDb250YWluZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2suZGF0YXNldC50YXNrID09IGkpIHtcbiAgICAgICAgICBjb25zdCByZW1vdmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBjb25zdCBwb3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG15VGFza3NbaV0udGl0bGU7XG4gICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbXlUYXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBkdWVEYXRlVGl0bGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gbXlUYXNrc1tpXS5kdWVEYXRlO1xuICAgICAgICAgIHJlbW92ZS5zcmMgPSByZW1vdmVpY29uO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wQ29udGFpbmVyXCIpO1xuICAgICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicG9wVXBJY29uXCIsIFwiaWNvblwiKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlVGl0bGUpO1xuICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICBwb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgICAgICAgICBkZXRhaWxQb3BVcC5hcHBlbmRDaGlsZChwb3BDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjbG9zZVBvcFVwKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xuICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwSWNvblwiKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbFBvcFVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBDb250YWluZXJcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wVXBDb250YWluZXJcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0QnRuKCkge1xuICBsZXQgZWRpdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0UG9wVXBcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdEJ0blwiKS5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVkaXRQb3BVcC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwRWRpdENvbnRhaW5lclwiKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwRWRpdENvbnRhaW5lclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYnRuLmRhdGFzZXQuZWRpdCA9PSBpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobXlUYXNrc1tpXSk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VGl0bGVcIikudGV4dENvbnRlbnQgPSBteVRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdERlc2NyaXB0aW9uXCIpLnZhbHVlID1cbiAgICAgICAgICAgIG15VGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0UHJpb3JpdHlcIikudmFsdWUgPSBteVRhc2tzW2ldLnByaW9yaXR5O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvc2VFZGl0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVkaXQoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsRWRpdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdFBvcFVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBFZGl0Q29udGFpbmVyXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwRWRpdENvbnRhaW5lclwiKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGluaXRpYWxpemVVaSBmcm9tIFwiLi91aVwiO1xuXG5pbml0aWFsaXplVWkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==