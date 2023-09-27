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
    dueDate: "2023-11-20",
    priority: "Low",
  },
  {
    title: "Fill out Chinese Visa",
    description: "Fill out application for chinese visas",
    dueDate: "2023-09-30",
    priority: "High",
  },
  {
    title: "Pack up items to move to new house",
    description:
      "Pack up all items to move to new house when its done building",
    dueDate: "2023-10-02",
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

var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
var localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1);
document.querySelector("#dueDate").min = localISOTime.split("T")[0];
document.querySelector("#editDueDate").min = localISOTime.split("T")[0];

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
          document.querySelector("#editDueDate").value = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i].dueDate;
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
    _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[task].dueDate = document.querySelector("#editDueDate").value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEJnQzs7QUFFaEMsK0NBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG15VGFza3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDbGVhbiBSb29tXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgZHVlRGF0ZTogXCIyMDIzLTExLTIwXCIsXG4gICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGaWxsIG91dCBDaGluZXNlIFZpc2FcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGaWxsIG91dCBhcHBsaWNhdGlvbiBmb3IgY2hpbmVzZSB2aXNhc1wiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0wOS0zMFwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBhY2sgdXAgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGFjayB1cCBhbGwgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2Ugd2hlbiBpdHMgZG9uZSBidWlsZGluZ1wiLFxuICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0wMlwiLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICB9LFxuXTtcblxuLy8gUHJvamVjdCBmYWN0b3J5XG5jbGFzcyBUYXNrcyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiTi9BXCIsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICBsZXQgYWRkVGFza3MgPSBuZXcgVGFza3ModGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSk7XG4gIG15VGFza3MucHVzaChhZGRUYXNrcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2spIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhc2suZGF0YXNldC5yZW1vdmUgPT0gaSkge1xuICAgICAgbXlUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrKGluZGV4LCBkZXNjcmlwdGlvbikge1xuICBteVRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuIiwiaW1wb3J0IHsgbXlUYXNrcywgbWFrZU5ld1Rhc2ssIHJlbW92ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHJlbW92ZWljb24gZnJvbSBcIi4vaW1ncy9yZW1vdmUxLnN2Z1wiO1xuaW1wb3J0IGFkZE5ld0ljb24gZnJvbSBcIi4vaW1ncy9uZXcuc3ZnXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vaW1ncy9lZGl0LnN2Z1wiO1xuaW1wb3J0IHsgZGUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBtZW51ID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiVXBjb21pbmdcIl07XG5jb25zdCBwcm9qZWN0cyA9IFtcIkd5bVwiLCBcIldvcmtcIiwgXCJHb2Fsc1wiXTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5jb25zdCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG52YXIgdHpvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDsgLy9vZmZzZXQgaW4gbWlsbGlzZWNvbmRzXG52YXIgbG9jYWxJU09UaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIHR6b2Zmc2V0KS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS5taW4gPSBsb2NhbElTT1RpbWUuc3BsaXQoXCJUXCIpWzBdO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0RHVlRGF0ZVwiKS5taW4gPSBsb2NhbElTT1RpbWUuc3BsaXQoXCJUXCIpWzBdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplVWkoKSB7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbiAgZGlzcGxheVRhc2tzKCk7XG4gIGFkZE5ld0J0bigpO1xuICBzdWJtaXRGb3JtKCk7XG4gIGNhbmNlbEJ0bigpO1xuICBjbG9zZUVkaXQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY3JlYXRlTmF2QmFyKCk7XG4gIGNyZWF0ZVByb2plY3RCYXIoKTtcbiAgY29uc3QgYWRkTmV3ID0gbmV3IEltYWdlKCk7XG4gIGFkZE5ldy5jbGFzc0xpc3QuYWRkKFwiYWRkTmV3XCIsIFwiaWNvblwiKTtcbiAgYWRkTmV3LnNyYyA9IGFkZE5ld0ljb247XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkTmV3KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgYS5pbm5lckhUTUwgPSBtZW51W2ldO1xuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5hdkxpc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCYXIoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdlwiKTtcbiAgICBhLmlubmVySFRNTCA9IHByb2plY3RzW2ldO1xuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbiAgfVxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgbGV0IGNsZWFyRGlzcGxheSA9IHByb2plY3RUYXNrcztcbiAgcmVtb3ZlRHVwbGljYXRlcyhjbGVhckRpc3BsYXkpO1xuICBjcmVhdGVUYXNrcygpO1xuICByZW1vdmVUYXNrQnRuKCk7XG4gIGNvbXBsZXRlVGFzaygpO1xuICBtb3JlRGV0YWlscygpO1xuICBlZGl0QnRuKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoZG9tKSB7XG4gIHdoaWxlIChkb20uZmlyc3RDaGlsZCkge1xuICAgIGRvbS5yZW1vdmVDaGlsZChkb20uZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGRvbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza3MoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrID0gbXlUYXNrc1tpXTtcbiAgICBsZXQgdGFza0xpc3QgPSBgdGFza0xpc3Qke2l9YDtcblxuICAgIGxldCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgICBjb25zdCBlZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgcmVtb3ZlID0gbmV3IEltYWdlKCk7XG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTGlzdFwiKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIsIFwidGl0bGVUYXNrc1wiLCB0YXNrTGlzdCk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2FyZHNcIiwgXCJyaWdodFNpZGVcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIsIFwicmlnaHRTaWRlXCIpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRCdG5cIiwgXCJpY29uXCIpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQnRuXCIsIFwiaWNvblwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrXCIsIGkpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCBpKTtcbiAgICBlZGl0LnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdFwiLCBpKTtcbiAgICByZW1vdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZW1vdmVcIiwgaSk7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgLy8gZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYWZhdWx0RGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgZWRpdC5zcmMgPSBlZGl0SWNvbjtcbiAgICByZW1vdmUuc3JjID0gcmVtb3ZlaWNvbjtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZCh0YXNrRWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4oKSB7XG4gIGxldCBkZWxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXJlbW92ZV1cIik7XG4gIGRlbGV0ZVRhc2suZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHJlbW92ZVRhc2soaXRlbSk7XG4gICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2soKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gIG1ha2VOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICBkaXNwbGF5VGFza3MoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTmV3VGFzaygpO1xuICAgICAgaGlkZUZvcm0oKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3QnRuKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZE5ld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxCdG4oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsTmV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGlkZUZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIikucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gIGZvcm1Db250YWluZXIoKTtcbn1cblxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGZvcm1Db250YWluZXIoKTtcbn1cblxuZnVuY3Rpb24gZm9ybUNvbnRhaW5lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtQ29udGFpbmVyXCIpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcbiAgY2hlY2tib3guZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGJveC5jaGVja2VkKSB7XG4gICAgICAgIGNvbXBsZXRlVGFza0NoZWNrKGJveCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZVRhc2tDaGVjayhib3gpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVUYXNrQ2hlY2soYm94KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChib3guZGF0YXNldC5jaGVjayA9PSBpKSB7XG4gICAgICBsZXQgdGFza1NlbGVjdG9yID0gYC50YXNrTGlzdCR7aX1gO1xuICAgICAgbGV0IHNlbGVjdGVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFza1NlbGVjdG9yKTtcbiAgICAgIHNlbGVjdGVkVGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVUYXNrXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtb3JlRGV0YWlscygpIHtcbiAgY29uc3QgZGV0YWlsUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbFBvcFVwXCIpO1xuICBjb25zdCBnZXREZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhc2tdXCIpO1xuICBnZXREZXRhaWxzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVEdXBsaWNhdGVzKGRldGFpbFBvcFVwKTtcbiAgICAgIGRldGFpbFBvcFVwLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBDb250YWluZXJcIilcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJwb3BVcENvbnRhaW5lclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGFzay5kYXRhc2V0LnRhc2sgPT0gaSkge1xuICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGNvbnN0IHBvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb25zdCBkdWVEYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbXlUYXNrc1tpXS50aXRsZTtcbiAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBteVRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIGR1ZURhdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiO1xuICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBteVRhc2tzW2ldLmR1ZURhdGU7XG4gICAgICAgICAgcmVtb3ZlLnNyYyA9IHJlbW92ZWljb247XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3BDb250YWluZXJcIik7XG4gICAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJwb3BVcEljb25cIiwgXCJpY29uXCIpO1xuICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlVGl0bGUpO1xuICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgICAgICAgcG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICBwb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgICAgICAgIHBvcENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgICAgICAgICBkZXRhaWxQb3BVcC5hcHBlbmRDaGlsZChwb3BDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjbG9zZVBvcFVwKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xuICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwSWNvblwiKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbFBvcFVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBDb250YWluZXJcIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwicG9wVXBDb250YWluZXJcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0QnRuKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRCdG5cIikuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzaG93RWRpdCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChidG4uZGF0YXNldC5lZGl0ID09IGkpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUaXRsZVwiKS50ZXh0Q29udGVudCA9IG15VGFza3NbaV0udGl0bGU7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0VGl0bGVcIikudmFsdWUgPSBteVRhc2tzW2ldLnRpdGxlO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdERlc2NyaXB0aW9uXCIpLnZhbHVlID1cbiAgICAgICAgICAgIG15VGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0UHJpb3JpdHlcIikudmFsdWUgPSBteVRhc2tzW2ldLnByaW9yaXR5O1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdER1ZURhdGVcIikudmFsdWUgPSBteVRhc2tzW2ldLmR1ZURhdGU7XG4gICAgICAgICAgZWRpdFRhc2soKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxFZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlkZUVkaXQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVFZGl0KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQb3BVcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRvZ2dsZUNvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiBzaG93RWRpdCgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0UG9wVXBcIikucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gIHRvZ2dsZUNvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb250YWluZXIoKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcG9wVXBFZGl0Q29udGFpbmVyXCIpXG4gICAgLmNsYXNzTGlzdC50b2dnbGUoXCJwb3BVcEVkaXRDb250YWluZXJcIik7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICBsZXQgc2VsZWN0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0VGl0bGVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZWxlY3RlZFRhc2sudGV4dENvbnRlbnQgPT0gbXlUYXNrc1tpXS50aXRsZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1FZGl0KCkge1xuICBsZXQgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrXCIpO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRhc2sgPSBlZGl0VGFzaygpO1xuICAgIG15VGFza3NbdGFza10udGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRUaXRsZVwiKS52YWx1ZTtcbiAgICBteVRhc2tzW3Rhc2tdLmRlc2NyaXB0aW9uID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdERlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIG15VGFza3NbdGFza10ucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRQcmlvcml0eVwiKS52YWx1ZTtcbiAgICBteVRhc2tzW3Rhc2tdLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXREdWVEYXRlXCIpLnZhbHVlO1xuICAgIGhpZGVFZGl0KCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gIH0pO1xufVxuXG5jb25maXJtRWRpdCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplVWkgZnJvbSBcIi4vdWlcIjtcblxuaW5pdGlhbGl6ZVVpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=