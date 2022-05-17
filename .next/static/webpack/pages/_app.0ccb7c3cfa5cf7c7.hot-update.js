"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./components/header/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav */ \"./components/nav/index.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"./components/logo/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = _slicedToArray(useState(false), 2), humburgerOpened = ref[0], setHumburgerOpened = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                humburgerOpened: humburgerOpened\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().header__buttons),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().burger__pic),\n                        onClick: function() {\n                            setHumburgerOpened(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/burger-icon.png\",\n                            alt: \"burger-icon\",\n                            layout: \"responsive\",\n                            objectFit: \"contain\",\n                            width: \"100%\",\n                            height: \"100%\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().header__button),\n                        children: \"\\u041A\\u0423\\u041F\\u0418\\u0422\\u042C\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\header\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 10\n    }, this);\n}\n_s(Header, \"IaxRf4duM8zMnPFlobr2FodTfEU=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZDtBQUNFO0FBQ0k7O0FBRS9CLFNBQVNJLE1BQU0sR0FBRzs7SUFDaEIsSUFBOENDLEdBQWUsa0JBQWZBLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBdERDLGVBQWUsR0FBd0JELEdBQWUsR0FBdkMsRUFBRUUsa0JBQWtCLEdBQUlGLEdBQWUsR0FBbkI7SUFFMUMscUJBQU8sOERBQUNHLFFBQU07UUFBQ0MsU0FBUyxFQUFFVCxpRUFBYTs7MEJBQ3JDLDhEQUFDRSw2Q0FBSTs7OztvQkFBRzswQkFDUiw4REFBQ0QsNENBQUc7Z0JBQUNLLGVBQWUsRUFBRUEsZUFBZTs7Ozs7b0JBQUk7MEJBQ3pDLDhEQUFDSSxLQUFHO2dCQUFDRCxTQUFTLEVBQUVULDBFQUFzQjs7a0NBQ3BDLDhEQUFDWSxRQUFNO3dCQUFDSCxTQUFTLEVBQUVULHNFQUFrQjt3QkFDckNjLE9BQU8sRUFBRSxXQUFNOzRCQUNiUCxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDM0I7a0NBQ0MsNEVBQUNKLG1EQUFLOzRCQUFDWSxHQUFHLEVBQUMsa0JBQWtCOzRCQUFDQyxHQUFHLEVBQUMsYUFBYTs0QkFBQ0MsTUFBTSxFQUFDLFlBQVk7NEJBQUNDLFNBQVMsRUFBQyxTQUFTOzRCQUFDQyxLQUFLLEVBQUMsTUFBTTs0QkFBQ0MsTUFBTSxFQUFDLE1BQU07Ozs7O2dDQUFHOzs7Ozs0QkFDOUc7a0NBQ1QsOERBQUNSLFFBQU07d0JBQUNILFNBQVMsRUFBRVQseUVBQXFCO2tDQUFFLHNDQUUxQzs7Ozs7NEJBQVM7Ozs7OztvQkFDTDs7Ozs7O1lBQ0M7Q0FFVjtHQW5CUUksTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBcUJmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzP2UwZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2JztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vbG9nbyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbaHVtYnVyZ2VyT3BlbmVkLCBzZXRIdW1idXJnZXJPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgPExvZ28gLz5cclxuICAgIDxOYXYgaHVtYnVyZ2VyT3BlbmVkPXtodW1idXJnZXJPcGVuZWR9IC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnV0dG9uc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyX19waWN9IFxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0SHVtYnVyZ2VyT3BlbmVkKGZhbHNlKTtcclxuICAgICAgfX0+XHJcbiAgICAgICAgPEltYWdlIHNyYz0nL2J1cmdlci1pY29uLnBuZycgYWx0PSdidXJnZXItaWNvbicgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIG9iamVjdEZpdD0nY29udGFpbicgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnV0dG9ufT5cclxuICAgICAgICDQmtCj0J/QmNCi0KxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2hlYWRlcj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJzdHlsZXMiLCJOYXYiLCJMb2dvIiwiSW1hZ2UiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImh1bWJ1cmdlck9wZW5lZCIsInNldEh1bWJ1cmdlck9wZW5lZCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRlcl9fYnV0dG9ucyIsImJ1dHRvbiIsImJ1cmdlcl9fcGljIiwib25DbGljayIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0IiwiaGVhZGVyX19idXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/index.js\n");

/***/ })

});