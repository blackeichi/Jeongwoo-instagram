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

/***/ "./src/client/js/header.js":
/*!*********************************!*\
  !*** ./src/client/js/header.js ***!
  \*********************************/
/***/ (() => {

eval("var home = document.querySelector(\"#tabbar :nth-child(1)\");\nvar upload = document.querySelector(\"#tabbar :nth-child(2)\");\nvar like = document.querySelector(\"#tabbar :nth-child(3)\");\nvar profile = document.querySelector(\"#tabbar :nth-child(5)\");\nvar footer = document.querySelector(\"footer\");\nvar path = window.location.pathname;\nconsole.log(path.slice(0, 6));\n\nif (path === \"/home\") {\n  home.style.color = \"black\";\n} else if (path === \"/upload\") {\n  upload.style.color = \"black\";\n} else if (path.slice(0, 8) === \"/profile\") {\n  profile.style.color = \"black\";\n  footer.style.display = \"none\";\n} else if (path.slice(0, 5) === \"/like\") {\n  like.style.color = \"black\";\n}\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/header.js"]();
/******/ 	
/******/ })()
;