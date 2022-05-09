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

/***/ "./src/client/js/login.js":
/*!********************************!*\
  !*** ./src/client/js/login.js ***!
  \********************************/
/***/ (() => {

eval("var loginId = document.getElementById(\"loginId\");\nvar loginPw = document.getElementById(\"loginPw\");\nvar loginBtn = document.getElementById(\"loginBtn\");\nvar checkId, checkPw;\nloginBtn.disabled = true;\n\nvar ableBtn = function ableBtn() {\n  if (checkId && checkPw) {\n    loginBtn.disabled = false;\n    loginBtn.style.cursor = \"pointer\";\n    loginBtn.style.backgroundColor = \"#0095F6\";\n  }\n};\n\nvar inputCheck = function inputCheck(event) {\n  var data = event.target.value;\n\n  if (data.length > 0) {\n    checkId = true;\n    loginId.style.backgroundColor = \"#E8F0FE\";\n    ableBtn();\n  } else {\n    checkId = false;\n    loginId.style.backgroundColor = \"#FAFAFA\";\n  }\n\n  console.log(checkId);\n};\n\nvar inputCheck2 = function inputCheck2(event) {\n  var data = event.target.value;\n\n  if (data.length > 5) {\n    checkPw = true;\n    loginPw.style.backgroundColor = \"#E8F0FE\";\n    ableBtn();\n  } else {\n    loginPw.style.backgroundColor = \"#FAFAFA\";\n    checkPw = false;\n  }\n\n  console.log(checkPw);\n};\n\nloginId.addEventListener(\"input\", inputCheck);\nloginPw.addEventListener(\"input\", inputCheck2);\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/login.js"]();
/******/ 	
/******/ })()
;