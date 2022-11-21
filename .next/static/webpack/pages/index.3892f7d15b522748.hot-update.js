"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase.config.js */ \"./firebase/firebase.config.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction App() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const currentUser = (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function handleSignup() {\n        setLoading(true);\n        // try {\n        await (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.signup)(emailRef.current.value, passwordRef.current.value);\n        // } catch {\n        // alert(\"Error!\");\n        // }\n        setLoading(false);\n    }\n    async function handleLogin() {\n        setLoading(true);\n        try {\n            await (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.login)(emailRef.current.value, passwordRef.current.value);\n        } catch (e) {\n            alert(\"Error!\");\n        }\n        setLoading(false);\n    }\n    async function handleLogout() {\n        setLoading(true);\n        try {\n            await (0,_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.logout)();\n        } catch (e) {\n            alert(\"Error!\");\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Currently logged in as: \",\n                    currentUser === null || currentUser === void 0 ? void 0 : currentUser.email,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"fields\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading || currentUser,\n                onClick: handleSignup,\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading || currentUser,\n                onClick: handleLogin,\n                children: \"Log In\"\n            }, void 0, false, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: loading || !currentUser,\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pureumsun/Desktop/teampurple/pages/index.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"3E+l0P3BPYdvaTW06+pm38LLKqU=\", false, function() {\n    return [\n        _firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFFZ0M7QUFFakUsU0FBU08sTUFBTTs7SUFDNUIsTUFBTSxDQUFFQyxTQUFTQyxXQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTVEsY0FBY0oscUVBQU9BO0lBRTNCLE1BQU1LLFdBQVdWLDZDQUFNQTtJQUN2QixNQUFNVyxjQUFjWCw2Q0FBTUE7SUFFMUIsZUFBZVksZUFBZTtRQUM1QkosV0FBVyxJQUFJO1FBQ2YsUUFBUTtRQUNOLE1BQU1OLG9FQUFNQSxDQUFDUSxTQUFTRyxPQUFPLENBQUNDLEtBQUssRUFBRUgsWUFBWUUsT0FBTyxDQUFDQyxLQUFLO1FBQ2hFLFlBQVk7UUFDVixtQkFBbUI7UUFDckIsSUFBSTtRQUNKTixXQUFXLEtBQUs7SUFDbEI7SUFFQSxlQUFlTyxjQUFjO1FBQzNCUCxXQUFXLElBQUk7UUFDZixJQUFJO1lBQ0YsTUFBTUwsbUVBQUtBLENBQUNPLFNBQVNHLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFSCxZQUFZRSxPQUFPLENBQUNDLEtBQUs7UUFFL0QsRUFBRSxVQUFNO1lBQ05FLE1BQU07UUFDUjtRQUNBUixXQUFXLEtBQUs7SUFDbEI7SUFFQSxlQUFlUyxlQUFlO1FBQzVCVCxXQUFXLElBQUk7UUFDZixJQUFJO1lBQ0YsTUFBTUosb0VBQU1BO1FBQ2QsRUFBRSxVQUFNO1lBQ05ZLE1BQU07UUFDUjtRQUNBUixXQUFXLEtBQUs7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsSUFBRzs7MEJBRU4sOERBQUNEOztvQkFBSTtvQkFBMEJULHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYVcsS0FBSztvQkFBRTs7Ozs7OzswQkFFbkQsOERBQUNGO2dCQUFJQyxJQUFHOztrQ0FDTiw4REFBQ0U7d0JBQU9DLGFBQVk7Ozs7OztrQ0FDcEIsOERBQUNEO3dCQUFPRSxNQUFLO3dCQUFXRCxhQUFZOzs7Ozs7Ozs7Ozs7MEJBR3RDLDhEQUFDRTtnQkFBT0MsVUFBV2xCLFdBQVdFO2dCQUFjaUIsU0FBU2Q7MEJBQWM7Ozs7OzswQkFDbkUsOERBQUNZO2dCQUFPQyxVQUFXbEIsV0FBV0U7Z0JBQWNpQixTQUFTWDswQkFBYTs7Ozs7OzBCQUNsRSw4REFBQ1M7Z0JBQU9DLFVBQVdsQixXQUFXLENBQUNFO2dCQUFjaUIsU0FBU1Q7MEJBQWM7Ozs7Ozs7Ozs7OztBQUkxRSxDQUFDO0dBdER1Qlg7O1FBRUZELGlFQUFPQTs7O0tBRkxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgc2lnbnVwLCBsb2dpbiwgbG9nb3V0LCB1c2VBdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZUF1dGgoKTtcblxuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNpZ251cCgpIHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vIHRyeSB7XG4gICAgICBhd2FpdCBzaWdudXAoZW1haWxSZWYuY3VycmVudC52YWx1ZSwgcGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSk7XG4gICAgLy8gfSBjYXRjaCB7XG4gICAgICAvLyBhbGVydChcIkVycm9yIVwiKTtcbiAgICAvLyB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dpbigpIHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbihlbWFpbFJlZi5jdXJyZW50LnZhbHVlLCBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlKTtcbiAgICAgIFxuICAgIH0gY2F0Y2gge1xuICAgICAgYWxlcnQoXCJFcnJvciFcIik7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGxvZ291dCgpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgYWxlcnQoXCJFcnJvciFcIik7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgXG4gICAgICA8ZGl2PkN1cnJlbnRseSBsb2dnZWQgaW4gYXM6IHsgY3VycmVudFVzZXI/LmVtYWlsIH0gPC9kaXY+XG5cbiAgICAgIDxkaXYgaWQ9XCJmaWVsZHNcIj5cbiAgICAgICAgPGlucHV0ICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgPGlucHV0ICB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXsgbG9hZGluZyB8fCBjdXJyZW50VXNlciB9IG9uQ2xpY2s9e2hhbmRsZVNpZ251cH0+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IGxvYWRpbmcgfHwgY3VycmVudFVzZXIgfSBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9nIEluPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXsgbG9hZGluZyB8fCAhY3VycmVudFVzZXIgfSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBPdXQ8L2J1dHRvbj5cblxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic2lnbnVwIiwibG9naW4iLCJsb2dvdXQiLCJ1c2VBdXRoIiwiQXBwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50VXNlciIsImVtYWlsUmVmIiwicGFzc3dvcmRSZWYiLCJoYW5kbGVTaWdudXAiLCJjdXJyZW50IiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsImFsZXJ0IiwiaGFuZGxlTG9nb3V0IiwiZGl2IiwiaWQiLCJlbWFpbCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});