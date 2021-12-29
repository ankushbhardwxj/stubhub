"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixpRUFBZ0IsRUFBQ0MsQ0FBQUEsR0FBRyxHQUFDLEdBQUssQ0FBQztJQUMxQixFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1FBQ25DLEVBQXVCO1FBRXZCLE1BQU0sQ0FBQ0QsbURBQVksQ0FBQyxDQUFDO1lBQ3BCRyxPQUFPLEVBQ04sQ0FBaUU7WUFDbEVDLE9BQU8sRUFBRUgsR0FBRyxDQUFDRyxPQUFPO1FBQ3JCLENBQUM7SUFDRixDQUFDLE1BQU0sRUFLTjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2M2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKHtyZXF9KSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXG5cblx0XHRyZXR1cm4gYXhpb3MuY3JlYXRlKHtcblx0XHRcdGJhc2VVUkw6XG5cdFx0XHRcdCdodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnLFxuXHRcdFx0aGVhZGVyczogcmVxLmhlYWRlcnMsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxuXHRcdHJldHVybiBheGlvcy5jcmVhdGUoe1xuXHRcdFx0YmFzZVVybDogJy8nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst LandingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n        __source: {\n            fileName: \"/home/anking/stubhub/client/pages/index.js\",\n            lineNumber: 5,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: \"You are signed in\"\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n        __source: {\n            fileName: \"/home/anking/stubhub/client/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: \"You are NOT signed in\"\n    });\n};\nLandingPage.getInitialProps = async (context)=>{\n    console.log('LANDING PAGE!');\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    const { data  } = await client.get('/api/users/currentuser');\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUU3QyxLQUFLLENBQUNDLFdBQVcsSUFBSSxDQUFDQyxDQUFBQSxXQUFXLEdBQUMsR0FBSyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0EsV0FBVyx3RUFDaEJDLENBQUU7Ozs7Ozs7a0JBQUMsQ0FBaUI7OEVBRXBCQSxDQUFFOzs7Ozs7O2tCQUFDLENBQXFCOztBQUUzQixDQUFDO0FBRURGLFdBQVcsQ0FBQ0csZUFBZSxVQUFTQyxPQUFPLEdBQUksQ0FBQztJQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZTtJQUMzQixLQUFLLENBQUNDLE1BQU0sR0FBR1IsNkRBQVcsQ0FBQ0ssT0FBTztJQUNsQyxLQUFLLENBQUMsQ0FBQ0ksQ0FBQUEsSUFBSSxHQUFDLEdBQUcsS0FBSyxDQUFDRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUF3QjtJQUV4RCxNQUFNLENBQUNELElBQUk7QUFDWixDQUFDO0FBRUQsaUVBQWVSLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7Y3VycmVudFVzZXJ9KSA9PiB7XG5cdHJldHVybiBjdXJyZW50VXNlciA/IChcblx0XHQ8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPlxuXHQpIDogKFxuXHRcdDxoMT5Zb3UgYXJlIE5PVCBzaWduZWQgaW48L2gxPlxuXHQpO1xufTtcblxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XG5cdGNvbnNvbGUubG9nKCdMQU5ESU5HIFBBR0UhJyk7XG5cdGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpO1xuXHRjb25zdCB7ZGF0YX0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XG5cblx0cmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcblxuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();