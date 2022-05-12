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

/***/ "./src/client/js/upload.js":
/*!*********************************!*\
  !*** ./src/client/js/upload.js ***!
  \*********************************/
/***/ (() => {

eval("var previewImage = document.getElementById(\"previewImage\");\nvar inputImage = document.getElementById(\"inputImage\");\nvar fileInput = document.getElementById(\"fileInput\");\n\nvar readImg = function readImg(input) {\n  if (input.files && input.files[0]) {\n    var reader = new FileReader();\n    previewImage.style.display = \"block\";\n    fileInput.style.display = \"none\";\n\n    reader.onload = function (e) {\n      previewImage.src = e.target.result;\n    };\n\n    reader.readAsDataURL(input.files[0]);\n  }\n};\n\ninputImage.addEventListener(\"change\", function (e) {\n  readImg(e.target);\n});\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/upload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/upload.js"]();
/******/ 	
/******/ })()
;