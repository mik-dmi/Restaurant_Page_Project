/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainPage: () => (/* binding */ mainPage)\n/* harmony export */ });\nconst mainPage = ()=>{\n\n    const mainContainer = document.getElementById('content');\n    const headerContainer = document.createElement('div');\n    const bodyContainer = document.createElement('div');\n    const footerContainer = document.createElement('div');\n    const homePageContainers = [];\n   \n    const homeButton = document.createElement('button');\n    homeButton.classList = \"menuButton\";\n    \n    const menuButton =  document.createElement('button');\n    menuButton.classList = \"menuButton\";\n    \n    const galleryButton =  document.createElement('button');\n    galleryButton.classList = \"menuButton\";\n    \n    const contactButton =  document.createElement('button');\n    contactButton.classList = \"menuButton\";\n    \n    const nameOfRestaurant = document.createElement('div');\n    nameOfRestaurant.classList = \"menuButton\";\n\n    mainContainer.appendChild(headerContainer); //main page template \n    mainContainer.appendChild(bodyContainer);   //main page template \n    mainContainer.appendChild(footerContainer); //main page template \n\n    headerContainer.appendChild(homeButton);\n    headerContainer.appendChild(menuButton);\n    headerContainer.appendChild(galleryButton);\n    headerContainer.appendChild(contactButton);\n    bodyContainer.appendChild(nameOfRestaurant);\n\n    for(let i = 0; i < 3; i++ ){\n        homePageContainers[i] = document.createElement('div');\n        homePageContainers[i].classList = \"containersHomePage\";\n        homePageContainers[i].textContent = \"wsadcv\"\n        bodyContainer.appendChild(homePageContainers[i])\n    };\n     \n    nameOfRestaurant.textContent = \"Snacks on the Plate\"\n\n    homeButton.textContent = 'Home';\n    menuButton.textContent = 'Menu';\n    galleryButton.textContent = 'Gallery';\n    contactButton.textContent = 'Contact';\n\n    console.log(\"coococ\")\n\n\n}\n\n//# sourceURL=webpack://restaurant_page_project/./src/home_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page.js */ \"./src/home_page.js\");\n\n\n\n\n\n\n(0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.mainPage)()\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page_project/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;