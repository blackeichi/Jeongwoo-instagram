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

/***/ "./src/client/js/like.js":
/*!*******************************!*\
  !*** ./src/client/js/like.js ***!
  \*******************************/
/***/ (() => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar like = document.querySelectorAll(\".like\");\nvar postBottom = document.getElementById(\"postBottom\");\nvar likeNumber = document.getElementById(\"likeNumber\");\n\nvar increaseLike = function increaseLike() {};\n\nvar clickLike = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n    var clicked, postId, _yield$fetch, status;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            clicked = 1;\n            postId = event.target.dataset.id;\n            console.log(postId);\n            _context.next = 5;\n            return fetch(\"/api/\".concat(postId, \"/like\"), {\n              method: \"POST\",\n              body: JSON.stringify({\n                clicked: clicked\n              }),\n              headers: {\n                \"Content-Type\": \"application/json\"\n              }\n            });\n\n          case 5:\n            _yield$fetch = _context.sent;\n            status = _yield$fetch.status;\n\n            if (status === 200) {\n              increaseLike();\n            } else if (status === 404) {\n              alert(\"이미 좋아요를 누르셨습니다.\");\n            } else if (status === 403) {\n              alert(\"본인의 게시물은 좋아요를 누를 수 없습니다.\");\n            } else if (status === 403) {\n              alert(\"비정상적인 접근입니다.\");\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function clickLike(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfor (var i = 0; i < like.length; i++) {\n  like[i].addEventListener(\"click\", clickLike);\n}\n\n//# sourceURL=webpack://jeongwoo-instagram/./src/client/js/like.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/like.js"]();
/******/ 	
/******/ })()
;