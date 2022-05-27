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

eval("var searchBar = document.querySelector(\"input\");\nvar searchBox = document.getElementById(\"searchBox\");\nvar searchCancle = document.getElementById(\"searchCancle\");\nvar home = document.querySelector(\"#tabbar :nth-child(1)\");\nvar upload = document.querySelector(\"#tabbar :nth-child(3)\");\nvar profile = document.querySelector(\"#tabbar :nth-child(5)\");\nvar headerLogo = document.getElementById(\"headerLogo\");\nsearchCancle.style.display = \"none\";\nvar path = window.location.pathname;\nconsole.log(path.slice(0, 8));\n\nif (path === \"/home\") {\n  home.style.color = \"black\";\n} else if (path === \"/upload\") {\n  upload.style.color = \"black\";\n} else if (path.slice(0, 8) === \"/profile\") {\n  profile.style.color = \"black\";\n}\n\nvar handleClick = function handleClick() {\n  searchBar.value = \"\";\n  console.log(\"click\");\n};\n\nvar onFocus = function onFocus(event) {\n  searchBox.style.display = \"none\";\n  searchBar.style.paddingLeft = \"10px\";\n  searchCancle.style.display = \"flex\";\n};\n\nvar offFocus = function offFocus() {\n  setTimeout(function () {\n    searchCancle.style.display = \"none\";\n  }, 100);\n  searchBox.style.display = \"flex\";\n  searchBar.style.paddingLeft = \"40px\";\n};\n\nvar clickLogo = function clickLogo() {\n  location.href = \"/home\";\n};\n\nsearchCancle.addEventListener(\"click\", handleClick);\nsearchBar.addEventListener(\"focus\", onFocus);\nsearchBar.addEventListener(\"focusout\", offFocus);\nheaderLogo.addEventListener(\"click\", clickLogo);\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/header.js?");

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