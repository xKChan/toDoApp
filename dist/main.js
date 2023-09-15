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
  moreDetails();
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
    remove.setAttribute("data-edit", i);
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
      console.log(`I am checked ${i}`);
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
    console.log("hello");
    document.querySelector("#detailPopUp").style.display = "none";
    document
      .querySelector("#popUpContainer")
      .classList.toggle("popUpContainer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEJnQzs7QUFFaEMsK0NBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15VGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDbGVhbiBSb29tXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgZHVlRGF0ZTogXCJTdW5kYXlcIixcbiAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZpbGwgb3V0IENoaW5lc2UgVmlzYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpbGwgb3V0IGFwcGxpY2F0aW9uIGZvciBjaGluZXNlIHZpc2FzXCIsXG4gICAgZHVlRGF0ZTogXCJGcmlkYXlcIixcbiAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQYWNrIHVwIGl0ZW1zIHRvIG1vdmUgdG8gbmV3IGhvdXNlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlBhY2sgdXAgYWxsIGl0ZW1zIHRvIG1vdmUgdG8gbmV3IGhvdXNlIHdoZW4gaXRzIGRvbmUgYnVpbGRpbmdcIixcbiAgICBkdWVEYXRlOiBcIlRvZGF5XCIsXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gIH0sXG5dO1xuXG4vLyBQcm9qZWN0IGZhY3RvcnlcbmNsYXNzIFRhc2tzIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJOL0FcIiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gIGxldCBhZGRUYXNrcyA9IG5ldyBUYXNrcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgbXlUYXNrcy5wdXNoKGFkZFRhc2tzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFzay5kYXRhc2V0LnJlbW92ZSA9PSBpKSB7XG4gICAgICBteVRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IG15VGFza3MsIG1ha2VOZXdUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCByZW1vdmVpY29uIGZyb20gXCIuL2ltZ3MvcmVtb3ZlMS5zdmdcIjtcbmltcG9ydCBhZGROZXdJY29uIGZyb20gXCIuL2ltZ3MvbmV3LnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltZ3MvZWRpdC5zdmdcIjtcbmltcG9ydCB7IGRlIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbWVudSA9IFtcIkhvbWVcIiwgXCJUb2RheVwiLCBcIlVwY29taW5nXCJdO1xuY29uc3QgcHJvamVjdHMgPSBbXCJHeW1cIiwgXCJXb3JrXCIsIFwiR29hbHNcIl07XG5cbmNvbnN0IGluaXRpYWxpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVVpKCkge1xuICBjcmVhdGVTaWRlYmFyKCk7XG4gIGRpc3BsYXlUYXNrcygpO1xuICBhZGROZXdCdG4oKTtcbiAgc3VibWl0Rm9ybSgpO1xuICBjYW5jZWxCdG4oKTtcbiAgbW9yZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY3JlYXRlTmF2QmFyKCk7XG4gIGNyZWF0ZVByb2plY3RCYXIoKTtcbiAgY29uc3QgYWRkTmV3ID0gbmV3IEltYWdlKCk7XG4gIGFkZE5ldy5jbGFzc0xpc3QuYWRkKFwiYWRkTmV3XCIsIFwiaWNvblwiKTtcbiAgYWRkTmV3LnNyYyA9IGFkZE5ld0ljb247XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgYS5pbm5lckhUTUwgPSBtZW51W2ldO1xuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5hdkxpc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCYXIoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdlwiKTtcbiAgICBhLmlubmVySFRNTCA9IHByb2plY3RzW2ldO1xuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbiAgfVxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgbGV0IGNsZWFyRGlzcGxheSA9IHByb2plY3RUYXNrcztcbiAgcmVtb3ZlRHVwbGljYXRlcyhjbGVhckRpc3BsYXkpO1xuICBjcmVhdGVUYXNrcygpO1xuICByZW1vdmVUYXNrQnRuKCk7XG4gIGNvbXBsZXRlVGFzaygpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGRvbSkge1xuICB3aGlsZSAoZG9tLmZpcnN0Q2hpbGQpIHtcbiAgICBkb20ucmVtb3ZlQ2hpbGQoZG9tLmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBkb207XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFzayA9IG15VGFza3NbaV07XG4gICAgbGV0IHRhc2tMaXN0ID0gYHRhc2tMaXN0JHtpfWA7XG5cbiAgICBsZXQgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKFwidGFza0xpc3RcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInRpdGxlVGFza3NcIiwgdGFza0xpc3QpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIsIFwicmlnaHRTaWRlXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInJpZ2h0U2lkZVwiKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0QnRuXCIsIFwiaWNvblwiKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZUJ0blwiLCBcImljb25cIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja1wiLCBpKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIiwgaSk7XG4gICAgcmVtb3ZlLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdFwiLCBpKTtcbiAgICByZW1vdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZW1vdmVcIiwgaSk7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgLy8gZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYWZhdWx0RGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgZWRpdC5zcmMgPSBlZGl0SWNvbjtcbiAgICByZW1vdmUuc3JjID0gcmVtb3ZlaWNvbjtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrRWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4oKSB7XG4gIGxldCBkZWxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXJlbW92ZV1cIik7XG4gIGRlbGV0ZVRhc2suZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHJlbW92ZVRhc2soaXRlbSk7XG4gICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gIG1ha2VOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICBkaXNwbGF5VGFza3MoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTmV3VGFzaygpO1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3QnRuKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZE5ld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxCdG4oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsTmV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGlkZUZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIikucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gIGZvcm1Db250YWluZXIoKTtcbn1cblxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGZvcm1Db250YWluZXIoKTtcbn1cblxuZnVuY3Rpb24gZm9ybUNvbnRhaW5lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtQ29udGFpbmVyXCIpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcbiAgY2hlY2tib3guZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGJveC5jaGVja2VkKSB7XG4gICAgICAgIGNvbXBsZXRlVGFza0NoZWNrKGJveCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZVRhc2tDaGVjayhib3gpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVUYXNrQ2hlY2soYm94KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChib3guZGF0YXNldC5jaGVjayA9PSBpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSSBhbSBjaGVja2VkICR7aX1gKTtcbiAgICAgIGxldCB0YXNrU2VsZWN0b3IgPSBgLnRhc2tMaXN0JHtpfWA7XG4gICAgICBsZXQgc2VsZWN0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXNrU2VsZWN0b3IpO1xuICAgICAgc2VsZWN0ZWRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVRhc2tcIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1vcmVEZXRhaWxzKCkge1xuICBjb25zdCBkZXRhaWxQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsUG9wVXBcIik7XG4gIGNvbnN0IGdldERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFza11cIik7XG4gIGdldERldGFpbHMuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZUR1cGxpY2F0ZXMoZGV0YWlsUG9wVXApO1xuICAgICAgZGV0YWlsUG9wVXAucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNwb3BVcENvbnRhaW5lclwiKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBvcFVwQ29udGFpbmVyXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0YXNrLmRhdGFzZXQudGFzayA9PSBpKSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgY29uc3QgcG9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBteVRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG15VGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgZHVlRGF0ZVRpdGxlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG15VGFza3NbaV0uZHVlRGF0ZTtcbiAgICAgICAgICByZW1vdmUuc3JjID0gcmVtb3ZlaWNvbjtcbiAgICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInBvcFVwSWNvblwiLCBcImljb25cIik7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICBwb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgICAgZGV0YWlsUG9wVXAuYXBwZW5kQ2hpbGQocG9wQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xvc2VQb3BVcCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcEljb25cIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbFBvcFVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBDb250YWluZXJcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wVXBDb250YWluZXJcIik7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplVWkgZnJvbSBcIi4vdWlcIjtcblxuaW5pdGlhbGl6ZVVpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=