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
exports.id = "pages/HomePage";
exports.ids = ["pages/HomePage"];
exports.modules = {

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"signup\": () => (/* binding */ signup),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBbzNvOsBAWeBEMaARzBUvD2RQ3N1tlUi8\",\n    authDomain: \"purple-data-7fe35.firebaseapp.com\",\n    projectId: \"purple-data-7fe35\",\n    storageBucket: \"purple-data-7fe35.appspot.com\",\n    messagingSenderId: \"1008620037133\",\n    appId: \"1:1008620037133:web:67e92dd2e70ee4536e6144\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nfunction signup(email, password) {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);\n}\nfunction login(email, password) {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);\n}\nfunction logout() {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n}\n// Custom Hook\nfunction useAuth() {\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const unsub = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>setCurrentUser(user));\n        return unsub;\n    }, []);\n    return currentUser;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFQztBQUNvRjtBQUVqSSxNQUFNUSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1A7QUFFRixNQUFNQyxNQUFNYiwyREFBYUEsQ0FBQ007QUFDMUIsTUFBTVEsT0FBT2Isc0RBQU9BLENBQUNZO0FBRWQsU0FBU0UsT0FBT0MsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsT0FBT2YsNkVBQThCQSxDQUFDWSxNQUFNRSxPQUFPQztBQUNyRCxDQUFDO0FBRU0sU0FBU0MsTUFBTUYsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDckMsT0FBT2QseUVBQTBCQSxDQUFDVyxNQUFNRSxPQUFPQztBQUNqRCxDQUFDO0FBRU0sU0FBU0UsU0FBUztJQUN2QixPQUFPZCxzREFBT0EsQ0FBQ1M7QUFDakIsQ0FBQztBQUVELGNBQWM7QUFDUCxTQUFTTSxVQUFVO0lBQ3hCLE1BQU0sQ0FBRUMsYUFBYUMsZUFBZ0IsR0FBR3ZCLCtDQUFRQTtJQUVoREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU15QixRQUFRbkIsaUVBQWtCQSxDQUFDVSxNQUFNVSxDQUFBQSxPQUFRRixlQUFlRTtRQUM5RCxPQUFPRDtJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU9GO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1cnBsZS8uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZy5qcz8wZTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGgsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QmJ6TnZPc0JBV2VCRU1hQVJ6QlV2RDJSUTNOMXRsVWk4XCIsXG4gIGF1dGhEb21haW46IFwicHVycGxlLWRhdGEtN2ZlMzUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJwdXJwbGUtZGF0YS03ZmUzNVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInB1cnBsZS1kYXRhLTdmZTM1LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDg2MjAwMzcxMzNcIixcbiAgYXBwSWQ6IFwiMToxMDA4NjIwMDM3MTMzOndlYjo2N2U5MmRkMmU3MGVlNDUzNmU2MTQ0XCJcbiAgfTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lnbnVwKGVtYWlsLCBwYXNzd29yZCkge1xuICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gIHJldHVybiBzaWduT3V0KGF1dGgpO1xufVxuXG4vLyBDdXN0b20gSG9va1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIGNvbnN0IFsgY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyIF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWIgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgdXNlciA9PiBzZXRDdXJyZW50VXNlcih1c2VyKSk7XG4gICAgcmV0dXJuIHVuc3ViO1xuICB9LCBbXSlcblxuICByZXR1cm4gY3VycmVudFVzZXI7XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwic2lnbnVwIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luIiwibG9nb3V0IiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1bnN1YiIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firebase.config.js\n");

/***/ }),

/***/ "./pages/HomePage.js":
/*!***************************!*\
  !*** ./pages/HomePage.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.config.js */ \"./firebase/firebase.config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const currentUser = (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function handleLogout() {\n        setLoading(true);\n        try {\n            await (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.logout)();\n            window.location = \"/\";\n        } catch  {\n            alert(\"Error!\");\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Currently logged in as: \",\n                    currentUser?.email,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/HomePage.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading || !currentUser,\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/HomePage.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pureumsun/Desktop/teampurple/pages/HomePage.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ib21lUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUVpQjtBQUVsRCxTQUFTSyxPQUFPO0lBRTdCLE1BQU0sQ0FBRUMsU0FBU0MsV0FBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU1NLGNBQWNKLHFFQUFPQTtJQUUzQixNQUFNSyxXQUFXUiw2Q0FBTUE7SUFDdkIsTUFBTVMsY0FBY1QsNkNBQU1BO0lBRTFCLGVBQWVVLGVBQWU7UUFDNUJKLFdBQVcsSUFBSTtRQUNmLElBQUk7WUFDRixNQUFNSixvRUFBTUE7WUFDWlMsT0FBT0MsUUFBUSxHQUFHO1FBQ3BCLEVBQUUsT0FBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQVAsV0FBVyxLQUFLO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLElBQUc7OzBCQUVOLDhEQUFDRDs7b0JBQUk7b0JBQTBCUCxhQUFhUztvQkFBTzs7Ozs7OzswQkFDbkQsOERBQUNDO2dCQUFPQyxVQUFXYixXQUFXLENBQUNFO2dCQUFjWSxTQUFTVDswQkFBYzs7Ozs7Ozs7Ozs7O0FBSzFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXJwbGUvLi9wYWdlcy9Ib21lUGFnZS5qcz9iMTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGxvZ291dCwgdXNlQXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VBdXRoKCk7XG5cbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dvdXQoKSB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG9nb3V0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IhXCIpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgIFxuICAgICAgPGRpdj5DdXJyZW50bHkgbG9nZ2VkIGluIGFzOiB7IGN1cnJlbnRVc2VyPy5lbWFpbCB9IDwvZGl2PlxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IGxvYWRpbmcgfHwgIWN1cnJlbnRVc2VyIH0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2cgT3V0PC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvZ291dCIsInVzZUF1dGgiLCJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50VXNlciIsImVtYWlsUmVmIiwicGFzc3dvcmRSZWYiLCJoYW5kbGVMb2dvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFsZXJ0IiwiZGl2IiwiaWQiLCJlbWFpbCIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/HomePage.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/HomePage.js"));
module.exports = __webpack_exports__;

})();