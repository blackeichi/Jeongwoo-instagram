/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/detail.js":
/*!*********************************!*\
  !*** ./src/client/js/detail.js ***!
  \*********************************/
/***/ (() => {

eval("var detailForm = document.getElementById(\"comment_Form\");\nvar detailInput = document.getElementById(\"comment_Form_input\");\nvar detailBtn = document.getElementById(\"comment_Form_btn\");\n\nvar inputDetail = function inputDetail(event) {\n  var data = event.target.value;\n\n  if (data.length > 0) {\n    detailBtn.style.color = \"black\";\n    detailBtn.style.cursor = \"pointer\";\n  } else {\n    detailBtn.style.color = \"rgba(0,0,0,0.3)\";\n    detailBtn.style.cursor = \"default\";\n  }\n};\n\ndetailInput.addEventListener(\"input\", inputDetail);\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/detail.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/detail.js"]();
/******/ 	
/******/ })()
;