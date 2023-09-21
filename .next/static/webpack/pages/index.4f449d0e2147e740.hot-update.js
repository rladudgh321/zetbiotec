/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ForAnimal.js":
/*!*********************************!*\
  !*** ./components/ForAnimal.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_TestKit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TestKit */ \"./components/TestKit.js\");\n/* harmony import */ var _components_ForBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ForBody */ \"./components/ForBody.js\");\n/* harmony import */ var _components_TwoInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TwoInfo */ \"./components/TwoInfo.js\");\n/* harmony import */ var _components_ForAnimal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ForAnimal */ \"./components/ForAnimal.js\");\n/* harmony import */ var _components_ForAnimal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_ForAnimal__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var isMenu = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.image;\n    }).isMenu;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    top: \"-12vh\"\n                },\n                children: [\n                    isMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        op: \"rgba(0,0,0,0.7)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 27\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 27\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TestKit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ForBody__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TwoInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ForAnimal__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"hbwoXY9xyEwxG2F2NTkpTFmg+7I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); //url('http://zetbio.com/theme/zb/img/main/sl-img02.jpg') top center / cover no-repeat\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNnQjtBQUNNO0FBQ3JCO0FBQ2M7QUFDRztBQUNBO0FBQ0E7QUFDSTtBQUVoRCxJQUFNUyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBTSxNQUFRLEdBQUtMLHdEQUFXLENBQUMsU0FBQ08sS0FBSztlQUFHQSxLQUFLLENBQUNDLEtBQUs7S0FBQSxDQUFDLENBQTVDRixNQUFNO0lBQ1oscUJBQ0k7a0JBQ0ksNEVBQUNSLDZEQUFTO3NCQUNOLDRFQUFDVyxLQUFHO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLFFBQVEsRUFBQyxVQUFVO29CQUFFQyxHQUFHLEVBQUMsT0FBTztpQkFBQzs7b0JBRXZDTixNQUFNLGlCQUNKLDhEQUFDVCwwREFBTTt3QkFBQ2dCLEVBQUUsRUFBQyxpQkFBaUI7Ozs7OzZCQUFFLGlCQUM5Qiw4REFBQ2hCLDBEQUFNOzs7OzZCQUFHO2tDQUVoQiw4REFBQ0ksMkRBQU87Ozs7NkJBQUc7a0NBQ1gsOERBQUNDLDJEQUFPOzs7OzZCQUFHO2tDQUNYLDhEQUFDQywyREFBTzs7Ozs2QkFBRztrQ0FDWCw4REFBQ0MsOERBQVM7Ozs7NkJBQUc7Ozs7OztxQkFDWDs7Ozs7aUJBQ0U7cUJBQ2IsQ0FDTDtBQUNOLENBQUM7R0FuQktDLElBQUk7O1FBQ1dMLG9EQUFXOzs7QUFEMUJLLEtBQUFBLElBQUk7QUFxQlYsK0RBQWVBLElBQUksRUFBQyxDQUVwQixzRkFBc0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVyJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVGVzdEtpdCBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RLaXQnO1xyXG5pbXBvcnQgRm9yQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0ZvckJvZHknO1xyXG5pbXBvcnQgVHdvSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1R3b0luZm8nO1xyXG5pbXBvcnQgRm9yQW5pbWFsIGZyb20gJy4uL2NvbXBvbmVudHMvRm9yQW5pbWFsJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc01lbnUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLmltYWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgdG9wOictMTJ2aCd9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxTbGlkZXIgb3A9XCJyZ2JhKDAsMCwwLDAuNylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPFNsaWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8VGVzdEtpdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JCb2R5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR3b0luZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9yQW5pbWFsIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuLy91cmwoJ2h0dHA6Ly96ZXRiaW8uY29tL3RoZW1lL3piL2ltZy9tYWluL3NsLWltZzAyLmpwZycpIHRvcCBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQiXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJBcHBMYXlvdXQiLCJSb3ciLCJ1c2VTZWxlY3RvciIsIlRlc3RLaXQiLCJGb3JCb2R5IiwiVHdvSW5mbyIsIkZvckFuaW1hbCIsIkhvbWUiLCJpc01lbnUiLCJzdGF0ZSIsImltYWdlIiwiZGl2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsIm9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});