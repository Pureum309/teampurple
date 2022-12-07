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

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"signup\": () => (/* binding */ signup),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDiljGRaDoBd8vV0a5lA3JOPWX8sJiBgJ4\",\n    authDomain: \"database-e342b.firebaseapp.com\",\n    projectId: \"database-e342b\",\n    storageBucket: \"database-e342b.appspot.com\",\n    messagingSenderId: \"520876269296\",\n    appId: \"1:520876269296:web:b5162025fa736dc4fc2c35\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nfunction signup(email, password) {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);\n}\nfunction login(email, password) {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);\n}\nfunction logout() {\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n}\n// Custom Hook\nfunction useAuth() {\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const unsub = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>setCurrentUser(user));\n        return unsub;\n    }, []);\n    return currentUser;\n}\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFQztBQUNvRjtBQUMvRTtBQUVsRCxNQUFNUyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1A7QUFFRixNQUFNQyxNQUFNZCwyREFBYUEsQ0FBQ087QUFDbkIsTUFBTVEsT0FBT2Qsc0RBQU9BLENBQUNhLEtBQUs7QUFFMUIsU0FBU0UsT0FBT0MsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsT0FBT2hCLDZFQUE4QkEsQ0FBQ2EsTUFBTUUsT0FBT0M7QUFDckQsQ0FBQztBQUVNLFNBQVNDLE1BQU1GLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3JDLE9BQU9mLHlFQUEwQkEsQ0FBQ1ksTUFBTUUsT0FBT0M7QUFDakQsQ0FBQztBQUVNLFNBQVNFLFNBQVM7SUFDdkIsT0FBT2Ysc0RBQU9BLENBQUNVO0FBQ2pCLENBQUM7QUFFRCxjQUFjO0FBQ1AsU0FBU00sVUFBVTtJQUN4QixNQUFNLENBQUVDLGFBQWFDLGVBQWdCLEdBQUd4QiwrQ0FBUUE7SUFFaERELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNMEIsUUFBUXBCLGlFQUFrQkEsQ0FBQ1csTUFBTVUsQ0FBQUEsT0FBUUYsZUFBZUU7UUFDOUQsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPRjtBQUNULENBQUM7QUFFTSxNQUFNSSxLQUFLcEIsZ0VBQVlBLENBQUNRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXJwbGUvLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcuanM/MGUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RGlsakdSYURvQmQ4dlYwYTVsQTNKT1BXWDhzSmlCZ0o0XCIsXHJcbiAgYXV0aERvbWFpbjogXCJkYXRhYmFzZS1lMzQyYi5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZGF0YWJhc2UtZTM0MmJcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRhdGFiYXNlLWUzNDJiLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTIwODc2MjY5Mjk2XCIsXHJcbiAgYXBwSWQ6IFwiMTo1MjA4NzYyNjkyOTY6d2ViOmI1MTYyMDI1ZmE3MzZkYzRmYzJjMzVcIlxyXG4gIH07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbnVwKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gIHJldHVybiBzaWduT3V0KGF1dGgpO1xyXG59XHJcblxyXG4vLyBDdXN0b20gSG9va1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBbIGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciBdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3ViID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXIgPT4gc2V0Q3VycmVudFVzZXIodXNlcikpO1xyXG4gICAgcmV0dXJuIHVuc3ViO1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gY3VycmVudFVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbk91dCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsInNpZ251cCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvZ291dCIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidW5zdWIiLCJ1c2VyIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firebase.config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.config.js */ \"./firebase/firebase.config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App() {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const currentUser = (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function handleSignup() {\n        setLoading(true);\n        // try {\n        await (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.signup)(emailRef.current.value, passwordRef.current.value);\n        window.location = \"/HomePage\";\n        // } catch {\n        // alert(\"Error!\");\n        // }\n        setLoading(false);\n    }\n    async function handleLogin() {\n        setLoading(true);\n        try {\n            await (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.login)(emailRef.current.value, passwordRef.current.value);\n            window.location = \"/HomePage\";\n        } catch  {\n            alert(\"Error!\");\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to our Social media\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"fields\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: emailRef,\n                        placeholder: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: passwordRef,\n                        type: \"password\",\n                        placeholder: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSignup,\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                children: \"Log In\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Horus\\\\Desktop\\\\teampurple\\\\pages\\\\index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUVnQztBQUVqRSxTQUFTTyxNQUFNO0lBQzVCLE1BQU0sQ0FBRUMsU0FBU0MsV0FBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU1RLGNBQWNKLHFFQUFPQTtJQUUzQixNQUFNSyxXQUFXViw2Q0FBTUE7SUFDdkIsTUFBTVcsY0FBY1gsNkNBQU1BO0lBRTFCLGVBQWVZLGVBQWU7UUFDNUJKLFdBQVcsSUFBSTtRQUNmLFFBQVE7UUFDTixNQUFNTixvRUFBTUEsQ0FBQ1EsU0FBU0csT0FBTyxDQUFDQyxLQUFLLEVBQUVILFlBQVlFLE9BQU8sQ0FBQ0MsS0FBSztRQUM5REMsT0FBT0MsUUFBUSxHQUFHO1FBQ3BCLFlBQVk7UUFDVixtQkFBbUI7UUFDckIsSUFBSTtRQUNKUixXQUFXLEtBQUs7SUFDbEI7SUFFQSxlQUFlUyxjQUFjO1FBQzNCVCxXQUFXLElBQUk7UUFDZixJQUFJO1lBQ0YsTUFBTUwsbUVBQUtBLENBQUNPLFNBQVNHLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFSCxZQUFZRSxPQUFPLENBQUNDLEtBQUs7WUFDN0RDLE9BQU9DLFFBQVEsR0FBRztRQUVwQixFQUFFLE9BQU07WUFDTkUsTUFBTTtRQUNSO1FBQ0FWLFdBQVcsS0FBSztJQUNsQjtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxJQUFHOzswQkFFTiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0Y7Z0JBQUlDLElBQUc7O2tDQUNOLDhEQUFDRTt3QkFBTUMsS0FBS2I7d0JBQVVjLGFBQVk7Ozs7OztrQ0FDbEMsOERBQUNGO3dCQUFNQyxLQUFLWjt3QkFBYWMsTUFBSzt3QkFBV0QsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUd2RCw4REFBQ0U7Z0JBQU9DLFNBQVNmOzBCQUFjOzs7Ozs7MEJBQy9CLDhEQUFDYztnQkFBT0MsU0FBU1Y7MEJBQWE7Ozs7Ozs7Ozs7OztBQUdwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVycGxlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgc2lnbnVwLCBsb2dpbiwgbG9nb3V0LCB1c2VBdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNpZ251cCgpIHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyB0cnkge1xyXG4gICAgICBhd2FpdCBzaWdudXAoZW1haWxSZWYuY3VycmVudC52YWx1ZSwgcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL0hvbWVQYWdlXCI7XHJcbiAgICAvLyB9IGNhdGNoIHtcclxuICAgICAgLy8gYWxlcnQoXCJFcnJvciFcIik7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvZ2luKCkge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGxvZ2luKGVtYWlsUmVmLmN1cnJlbnQudmFsdWUsIHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9Ib21lUGFnZVwiO1xyXG4gICAgICBcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBhbGVydChcIkVycm9yIVwiKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluXCI+XHJcbiAgICAgIFxyXG4gICAgICA8aDE+V2VsY29tZSB0byBvdXIgU29jaWFsIG1lZGlhPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJmaWVsZHNcIj5cclxuICAgICAgICA8aW5wdXQgcmVmPXtlbWFpbFJlZn0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgPGlucHV0IHJlZj17cGFzc3dvcmRSZWZ9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2lnbnVwfT5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59PkxvZyBJbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic2lnbnVwIiwibG9naW4iLCJsb2dvdXQiLCJ1c2VBdXRoIiwiQXBwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50VXNlciIsImVtYWlsUmVmIiwicGFzc3dvcmRSZWYiLCJoYW5kbGVTaWdudXAiLCJjdXJyZW50IiwidmFsdWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhbmRsZUxvZ2luIiwiYWxlcnQiLCJkaXYiLCJpZCIsImgxIiwiaW5wdXQiLCJyZWYiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

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