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

/***/ "./components/image-popup/index.js":
/*!*****************************************!*\
  !*** ./components/image-popup/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./components/image-popup/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\n// import closeIcon from './close-button.png';\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ImagePopup(param) {\n    var image = param.image, isOpen = param.isOpen, handleCloseCardClick = param.handleCloseCardClick;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleEscClose = function handleEscClose(evt) {\n            if (evt.key === \"Escape\") {\n                handleCloseCardClick();\n            }\n        };\n        // function closeByOverlayClick(evt) {\n        //     if (evt.target.id.contains('modal-overlay')) {\n        //         handleCloseCardClick();\n        //     }\n        // }\n        document.addEventListener(\"keydown\", handleEscClose);\n        // document.addEventListener('click', closeByOverlayClick);\n        return function() {\n            document.removeEventListener(\"keydown\", handleEscClose);\n        // document.removeEventListener('click', closeByOverlayClick);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup), _defineProperty({}, (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup_opened), isOpen)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup__overlay), (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup__overlay)),\n                id: \"modal-overlay\",\n                onClick: handleCloseCardClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup__image),\n                children: image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image.src,\n                    layout: \"fill\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCloseCardClick,\n                type: \"button\",\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().popup__close),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    width: \"58\",\n                    height: \"58\",\n                    viewBox: \"0 0 58 58\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M44.7661 41.5683L31.9759 28.778L44.7661 15.9878L41.5686 12.7902L28.7783 25.5805L15.9881 12.7902L12.7905 15.9878L25.5808 28.778L12.7905 41.5683L15.9881 44.7658L28.7783 31.9756L41.5686 44.7658L44.7661 41.5683Z\",\n                        fill: \"white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Tom\\\\Desktop\\\\Yandex\\\\cubodemadera\\\\components\\\\image-popup\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, this);\n}\n_s(ImagePopup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ImagePopup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagePopup);\nvar _c;\n$RefreshReg$(_c, \"ImagePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ltYWdlLXBvcHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBREEsOENBQThDO0FBQ1o7QUFDSDtBQUNRO0FBQ1g7O0FBRTVCLFNBQVNJLFVBQVUsQ0FBQyxLQUF1QyxFQUFFO1FBQXZDQyxLQUFLLEdBQVAsS0FBdUMsQ0FBckNBLEtBQUssRUFBRUMsTUFBTSxHQUFmLEtBQXVDLENBQTlCQSxNQUFNLEVBQUVDLG9CQUFvQixHQUFyQyxLQUF1QyxDQUF0QkEsb0JBQW9COztJQUVyRFAsZ0RBQVMsQ0FBQyxXQUFNO1lBQ0hRLGNBQWMsR0FBdkIsU0FBU0EsY0FBYyxDQUFDQyxHQUFHLEVBQUU7WUFDekIsSUFBSUEsR0FBRyxDQUFDQyxHQUFHLEtBQUssUUFBUSxFQUFFO2dCQUN0Qkgsb0JBQW9CLEVBQUUsQ0FBQzthQUMxQjtTQUNKO1FBRUQsc0NBQXNDO1FBQ3RDLHFEQUFxRDtRQUNyRCxrQ0FBa0M7UUFDbEMsUUFBUTtRQUNSLElBQUk7UUFFSkksUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVKLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELDJEQUEyRDtRQUUzRCxPQUFPLFdBQU07WUFDVEcsUUFBUSxDQUFDRSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVMLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELDhEQUE4RDtTQUNqRSxDQUFDO0tBQ0wsQ0FBQyxDQUFDO0lBRUgscUJBQU8sOERBQUNNLFNBQU87UUFBQ0MsU0FBUyxFQUFFWixpREFBRSxDQUFDRCxnRUFBWSxFQUFJLG9CQUFDQSx1RUFBbUIsRUFBR0ksTUFBTSxFQUFHOzswQkFDMUUsOERBQUNZLEtBQUc7Z0JBQUNILFNBQVMsRUFBRVosaURBQUUsQ0FBQ0QseUVBQXFCLEVBQUVBLHlFQUFxQixDQUFDO2dCQUFFa0IsRUFBRSxFQUFDLGVBQWU7Z0JBQUNDLE9BQU8sRUFBRWQsb0JBQW9COzs7OztvQkFBUzswQkFFM0gsOERBQUNXLEtBQUc7Z0JBQUNILFNBQVMsRUFBRWIsdUVBQW1COzBCQUM5QkcsS0FBSyxrQkFBSSw4REFBQ0osbURBQUs7b0JBQUNzQixHQUFHLEVBQUVsQixLQUFLLENBQUNrQixHQUFHO29CQUFFQyxNQUFNLEVBQUMsTUFBTTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7Ozs7O3dCQUFHOzs7OztvQkFFbkU7MEJBRU4sOERBQUNDLFFBQU07Z0JBQUNMLE9BQU8sRUFBRWQsb0JBQW9CO2dCQUFFb0IsSUFBSSxFQUFDLFFBQVE7Z0JBQUNaLFNBQVMsRUFBRWIsdUVBQW1COzBCQUMvRSw0RUFBQzJCLEtBQUc7b0JBQUNDLEtBQUssRUFBQyxJQUFJO29CQUFDQyxNQUFNLEVBQUMsSUFBSTtvQkFBQ0MsT0FBTyxFQUFDLFdBQVc7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxLQUFLLEVBQUMsNEJBQTRCOzhCQUMxRiw0RUFBQ0MsTUFBSTt3QkFBQ0MsQ0FBQyxFQUFDLGlOQUFpTjt3QkFBQ0gsSUFBSSxFQUFDLE9BQU87Ozs7OzRCQUFHOzs7Ozt3QkFDdk87Ozs7O29CQUNEOzs7Ozs7WUFDRjtDQUVkO0dBdkNRN0IsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBeUNuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW1hZ2UtcG9wdXAvaW5kZXguanM/MDY3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY2xvc2VJY29uIGZyb20gJy4vY2xvc2UtYnV0dG9uLnBuZyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VQb3B1cCh7IGltYWdlLCBpc09wZW4sIGhhbmRsZUNsb3NlQ2FyZENsaWNrIH0pIHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQ2FyZENsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGNsb3NlQnlPdmVybGF5Q2xpY2soZXZ0KSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChldnQudGFyZ2V0LmlkLmNvbnRhaW5zKCdtb2RhbC1vdmVybGF5JykpIHtcclxuICAgICAgICAvLyAgICAgICAgIGhhbmRsZUNsb3NlQ2FyZENsaWNrKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2NDbG9zZSk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUJ5T3ZlcmxheUNsaWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzY0Nsb3NlKTtcclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUJ5T3ZlcmxheUNsaWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y24oc3R5bGVzLnBvcHVwLCB7IFtzdHlsZXMucG9wdXBfb3BlbmVkXTogaXNPcGVuIH0pfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnBvcHVwX19vdmVybGF5LCBzdHlsZXMucG9wdXBfX292ZXJsYXkpfSBpZD1cIm1vZGFsLW92ZXJsYXlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUNhcmRDbGlja30gPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwX19pbWFnZX0+XHJcbiAgICAgICAgICAgIHtpbWFnZSAmJiA8SW1hZ2Ugc3JjPXtpbWFnZS5zcmN9IGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb250YWluJyAvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VDYXJkQ2xpY2t9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cF9fY2xvc2V9PlxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI1OFwiIHZpZXdCb3g9XCIwIDAgNTggNThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDQuNzY2MSA0MS41NjgzTDMxLjk3NTkgMjguNzc4TDQ0Ljc2NjEgMTUuOTg3OEw0MS41Njg2IDEyLjc5MDJMMjguNzc4MyAyNS41ODA1TDE1Ljk4ODEgMTIuNzkwMkwxMi43OTA1IDE1Ljk4NzhMMjUuNTgwOCAyOC43NzhMMTIuNzkwNSA0MS41NjgzTDE1Ljk4ODEgNDQuNzY1OEwyOC43NzgzIDMxLjk3NTZMNDEuNTY4NiA0NC43NjU4TDQ0Ljc2NjEgNDEuNTY4M1pcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvc2VjdGlvbiA+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVBvcHVwOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJJbWFnZSIsInN0eWxlcyIsImNuIiwiSW1hZ2VQb3B1cCIsImltYWdlIiwiaXNPcGVuIiwiaGFuZGxlQ2xvc2VDYXJkQ2xpY2siLCJoYW5kbGVFc2NDbG9zZSIsImV2dCIsImtleSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicG9wdXAiLCJwb3B1cF9vcGVuZWQiLCJkaXYiLCJwb3B1cF9fb3ZlcmxheSIsImlkIiwib25DbGljayIsInBvcHVwX19pbWFnZSIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImJ1dHRvbiIsInR5cGUiLCJwb3B1cF9fY2xvc2UiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/image-popup/index.js\n");

/***/ })

});