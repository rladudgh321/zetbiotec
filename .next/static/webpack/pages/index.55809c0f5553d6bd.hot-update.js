/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
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
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Slider */ \"./components/Slider.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_TestKit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TestKit */ \"./components/TestKit.js\");\n/* harmony import */ var _components_ForBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ForBody */ \"./components/ForBody.js\");\n/* harmony import */ var _components_TwoInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TwoInfo */ \"./components/TwoInfo.js\");\n/* harmony import */ var _components_ForAnimal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ForAnimal */ \"./components/ForAnimal.js\");\n/* harmony import */ var _components_Certificate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Certificate */ \"./components/Certificate.js\");\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/News */ \"./components/News.js\");\n/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_News__WEBPACK_IMPORTED_MODULE_10__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var isMenu = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.image;\n    }).isMenu;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    top: \"-12vh\"\n                },\n                children: [\n                    isMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        op: \"rgba(0,0,0,0.7)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 27\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 27\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TestKit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ForBody__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TwoInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ForAnimal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Certificate__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_News__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dudgh\\\\OneDrive\\\\바탕 화면\\\\project\\\\새 폴더\\\\zetbiotec\\\\pages\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"hbwoXY9xyEwxG2F2NTkpTFmg+7I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); //url('http://zetbio.com/theme/zb/img/main/sl-img02.jpg') top center / cover no-repeat\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ2dCO0FBQ007QUFDckI7QUFDYztBQUNHO0FBQ0E7QUFDQTtBQUNJO0FBQ0k7QUFDZDtBQUV0QyxJQUFNVyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBTSxNQUFRLEdBQUtQLHdEQUFXLENBQUMsU0FBQ1MsS0FBSztlQUFHQSxLQUFLLENBQUNDLEtBQUs7S0FBQSxDQUFDLENBQTVDRixNQUFNO0lBQ1oscUJBQ0k7a0JBQ0ksNEVBQUNWLDZEQUFTO3NCQUNOLDRFQUFDYSxLQUFHO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLFFBQVEsRUFBQyxVQUFVO29CQUFFQyxHQUFHLEVBQUMsT0FBTztpQkFBQzs7b0JBRXZDTixNQUFNLGlCQUNKLDhEQUFDWCwwREFBTTt3QkFBQ2tCLEVBQUUsRUFBQyxpQkFBaUI7Ozs7OzZCQUFFLGlCQUM5Qiw4REFBQ2xCLDBEQUFNOzs7OzZCQUFHO2tDQUVoQiw4REFBQ0ksMkRBQU87Ozs7NkJBQUc7a0NBQ1gsOERBQUNDLDJEQUFPOzs7OzZCQUFHO2tDQUNYLDhEQUFDQywyREFBTzs7Ozs2QkFBRztrQ0FDWCw4REFBQ0MsNkRBQVM7Ozs7NkJBQUc7a0NBQ2IsOERBQUNDLCtEQUFXOzs7OzZCQUFHO2tDQUNmLDhEQUFDQywwREFBSTs7Ozs2QkFBRzs7Ozs7O3FCQUNOOzs7OztpQkFDRTtxQkFDYixDQUNMO0FBQ04sQ0FBQztHQXJCS0MsSUFBSTs7UUFDV1Asb0RBQVc7OztBQUQxQk8sS0FBQUEsSUFBSTtBQXVCViwrREFBZUEsSUFBSSxFQUFDLENBRXBCLHNGQUFzRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TbGlkZXInO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBUZXN0S2l0IGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdEtpdCc7XHJcbmltcG9ydCBGb3JCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvRm9yQm9keSc7XHJcbmltcG9ydCBUd29JbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVHdvSW5mbyc7XHJcbmltcG9ydCBGb3JBbmltYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JBbmltYWwnO1xyXG5pbXBvcnQgQ2VydGlmaWNhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9DZXJ0aWZpY2F0ZSc7XHJcbmltcG9ydCBOZXdzIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3cyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNNZW51IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5pbWFnZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIHRvcDonLTEydmgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8U2xpZGVyIG9wPVwicmdiYSgwLDAsMCwwLjcpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxTbGlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRlc3RLaXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9yQm9keSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUd29JbmZvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvckFuaW1hbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDZXJ0aWZpY2F0ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXdzIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuLy91cmwoJ2h0dHA6Ly96ZXRiaW8uY29tL3RoZW1lL3piL2ltZy9tYWluL3NsLWltZzAyLmpwZycpIHRvcCBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQiXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJBcHBMYXlvdXQiLCJSb3ciLCJ1c2VTZWxlY3RvciIsIlRlc3RLaXQiLCJGb3JCb2R5IiwiVHdvSW5mbyIsIkZvckFuaW1hbCIsIkNlcnRpZmljYXRlIiwiTmV3cyIsIkhvbWUiLCJpc01lbnUiLCJzdGF0ZSIsImltYWdlIiwiZGl2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsIm9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});