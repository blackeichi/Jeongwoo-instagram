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

/***/ "./src/client/js/avatar.js":
/*!*********************************!*\
  !*** ./src/client/js/avatar.js ***!
  \*********************************/
/***/ (() => {

eval("var previewAvatar = document.getElementById(\"previewAvatar\");\nvar inputAvatar = document.getElementById(\"inputAvatar\");\nvar avatarInput = document.getElementById(\"avatarInput\");\nvar avatarImg = document.getElementById(\"avatarImg\");\nvar avatarIcon = document.getElementById(\"avatarIcon\");\n\nvar readAvatar = function readAvatar(input) {\n  if (input.files && input.files[0]) {\n    console.log(\"hi\");\n    var reader = new FileReader();\n    previewAvatar.style.display = \"block\";\n    avatarInput.style.display = \"none\";\n\n    reader.onload = function (e) {\n      previewAvatar.src = e.target.result;\n    };\n\n    reader.readAsDataURL(input.files[0]);\n  }\n\n  if (avatarImg) {\n    avatarImg.style.display = \"none\";\n  } else {\n    avatarIcon.style.display = \"none\";\n  }\n};\n\ninputAvatar.addEventListener(\"change\", function (e) {\n  readAvatar(e.target);\n});\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/avatar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/avatar.js"]();
/******/ 	
/******/ })()
;