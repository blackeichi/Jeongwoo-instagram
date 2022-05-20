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

/***/ "./src/client/js/home.js":
/*!*******************************!*\
  !*** ./src/client/js/home.js ***!
  \*******************************/
/***/ (() => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar deleteNo = document.getElementById(\"deleteNo\");\nvar trashIcon = document.getElementById(\"trashIcon\");\nvar deleteText = document.getElementById(\"deleteText\");\nvar deleteYes = document.getElementById(\"deleteYes\");\nvar setOpen = false;\n\nvar clikedNo = function clikedNo() {\n  deleteText.style.display = \"none\";\n  setOpen = false;\n};\n\nvar clikedTrash = function clikedTrash() {\n  setOpen = !setOpen;\n  console.log(setOpen);\n\n  if (setOpen) {\n    deleteText.style.display = \"block\";\n  } else {\n    deleteText.style.display = \"none\";\n  }\n};\n\nvar clickedYes = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n    var postId, _yield$fetch, status;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            postId = event.target.dataset.id;\n            _context.next = 3;\n            return fetch(\"/api/\".concat(postId, \"/delete\"), {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              }\n            });\n\n          case 3:\n            _yield$fetch = _context.sent;\n            status = _yield$fetch.status;\n            console.log(status);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function clickedYes(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ndeleteNo.addEventListener(\"click\", clikedNo);\ntrashIcon.addEventListener(\"click\", clikedTrash);\ndeleteYes.addEventListener(\"click\", clickedYes);\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/home.js"]();
/******/ 	
/******/ })()
;