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
/* harmony export */   myTasks: () => (/* binding */ myTasks),
/* harmony export */   newTasks: () => (/* binding */ newTasks)
/* harmony export */ });
const myTasks = [
  {
    title: "Clean Room",
    description: "",
    dueDate: "",
    priority: "Low",
  },
  {
    title: "Fill out Chinese Visa",
    description: "Fill out application for chinese visas",
    dueDate: "",
    priority: "High",
  },
  {
    title: "Pack up items to move to new house",
    description:
      "Pack up all items to move to new house when its done building",
    dueDate: "",
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

function newTasks(title, description, duedate, priority) {
  let addTasks = new Tasks(title, description, duedate, priority);
  myTasks.push(addTasks);
  console.log(myTasks);
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

// import "./style.css";

const menu = ["Home", "Today", "Upcoming"];

const initialize = document.querySelector("#content");
const sidebar = document.querySelector(".sidebar");

function initializeUi() {
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
  for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {
    let task = _tasks__WEBPACK_IMPORTED_MODULE_0__.myTasks[i];
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

(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.newTasks)("Clean keyboard", "NA", "Friday", "low");
(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.newTasks)("Clean Car", "NA", "Saturday", "High");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzRDO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkNBQU8sU0FBUztBQUN0QyxlQUFlLDJDQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0RBQVE7QUFDUixnREFBUTs7Ozs7OztVQ3ZEUjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQywrQ0FBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXlUYXNrcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNsZWFuIFJvb21cIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBkdWVEYXRlOiBcIlwiLFxuICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRmlsbCBvdXQgQ2hpbmVzZSBWaXNhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmlsbCBvdXQgYXBwbGljYXRpb24gZm9yIGNoaW5lc2UgdmlzYXNcIixcbiAgICBkdWVEYXRlOiBcIlwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBhY2sgdXAgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGFjayB1cCBhbGwgaXRlbXMgdG8gbW92ZSB0byBuZXcgaG91c2Ugd2hlbiBpdHMgZG9uZSBidWlsZGluZ1wiLFxuICAgIGR1ZURhdGU6IFwiXCIsXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gIH0sXG5dO1xuXG4vLyBQcm9qZWN0IGZhY3RvcnlcbmNsYXNzIFRhc2tzIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCJOL0FcIiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gIGxldCBhZGRUYXNrcyA9IG5ldyBUYXNrcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgbXlUYXNrcy5wdXNoKGFkZFRhc2tzKTtcbiAgY29uc29sZS5sb2cobXlUYXNrcyk7XG59XG4iLCJpbXBvcnQgeyBteVRhc2tzLCBuZXdUYXNrcyB9IGZyb20gXCIuL3Rhc2tzXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBtZW51ID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiVXBjb21pbmdcIl07XG5cbmNvbnN0IGluaXRpYWxpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplVWkoKSB7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbiAgZGlzcGxheVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGEuaW5uZXJIVE1MID0gbWVudVtpXTtcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBzaWRlYmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gIGNvbnN0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrID0gbXlUYXNrc1tpXTtcbiAgICBjb25zdCBkYWZhdWx0RGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uICE9IFwiXCIgPyB0YXNrLmRlc2NyaXB0aW9uIDogXCJOQVwiO1xuICAgIGxldCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKFwidGFza0xpc3RcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIsIFwicmlnaHRTaWRlXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjYXJkc1wiLCBcInJpZ2h0U2lkZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgLy8gZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYWZhdWx0RGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQodGFza0VsKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgfVxufVxuXG4vLyBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcblxubmV3VGFza3MoXCJDbGVhbiBrZXlib2FyZFwiLCBcIk5BXCIsIFwiRnJpZGF5XCIsIFwibG93XCIpO1xubmV3VGFza3MoXCJDbGVhbiBDYXJcIiwgXCJOQVwiLCBcIlNhdHVyZGF5XCIsIFwiSGlnaFwiKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVVaSBmcm9tIFwiLi91aVwiO1xuXG5pbml0aWFsaXplVWkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==