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

/***/ "./src/client/js/join.js":
/*!*******************************!*\
  !*** ./src/client/js/join.js ***!
  \*******************************/
/***/ (() => {

eval("var id = document.getElementById(\"id\");\nvar name = document.getElementById(\"name\");\nvar password = document.getElementById(\"password\");\nvar confirmPw = document.getElementById(\"confirmPw\");\nvar joinBtn = document.getElementById(\"joinBtn\");\nvar idCheck, nameCheck, passwordCheck, confirmPwCheck;\njoinBtn.disabled = true;\n\nvar ableBtn = function ableBtn() {\n  if (idCheck && nameCheck && passwordCheck && confirmPwCheck) {\n    joinBtn.disabled = false;\n    joinBtn.style.cursor = \"pointer\";\n    joinBtn.style.backgroundColor = \"#0095F6\";\n  }\n};\n\nvar inputCheck = function inputCheck(event) {\n  var data = event.target.value;\n\n  if (data.length > 0) {\n    idCheck = true;\n    id.style.backgroundColor = \"#E8F0FE\";\n    ableBtn();\n  } else {\n    idCheck = false;\n    id.style.backgroundColor = \"#FAFAFA\";\n  }\n};\n\nvar inputCheck2 = function inputCheck2(event) {\n  var data = event.target.value;\n\n  if (data.length > 0) {\n    nameCheck = true;\n    name.style.backgroundColor = \"#E8F0FE\";\n    ableBtn();\n  } else {\n    nameCheck = false;\n    name.style.backgroundColor = \"#FAFAFA\";\n  }\n};\n\nvar inputCheck3 = function inputCheck3(event) {\n  var data = event.target.value;\n\n  if (data.length > 5) {\n    passwordCheck = true;\n    password.style.backgroundColor = \"#E8F0FE\";\n    ableBtn();\n  } else {\n    passwordCheck = false;\n    password.style.backgroundColor = \"#FAFAFA\";\n  }\n};\n\nvar inputCheck4 = function inputCheck4(event) {\n  var data = event.target.value;\n\n  if (data.length > 5) {\n    confirmPwCheck = true;\n    confirmPw.style.backgroundColor = \"#E8F0FE\";\n    ableBtn();\n  } else {\n    confirmPwCheck = false;\n    confirmPw.style.backgroundColor = \"#FAFAFA\";\n  }\n};\n\nid.addEventListener(\"input\", inputCheck);\nname.addEventListener(\"input\", inputCheck2);\npassword.addEventListener(\"input\", inputCheck3);\nconfirmPw.addEventListener(\"input\", inputCheck4);\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/join.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/join.js"]();
/******/ 	
/******/ })()
;