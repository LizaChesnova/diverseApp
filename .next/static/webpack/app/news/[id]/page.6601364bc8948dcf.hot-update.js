"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/news/[id]/page",{

/***/ "(app-pages-browser)/./app/components/NewsList/ArticalByID.jsx":
/*!*************************************************!*\
  !*** ./app/components/NewsList/ArticalByID.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArticlById: function() { return /* binding */ ArticlById; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_news_id_Place_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/news/[id]/Place.module.css */ \"(app-pages-browser)/./app/news/[id]/Place.module.css\");\n/* harmony import */ var _app_news_id_Place_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_news_id_Place_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/store/app-store */ \"(app-pages-browser)/./app/store/app-store.js\");\n/* harmony import */ var _Buttons_EditArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Buttons/EditArticle */ \"(app-pages-browser)/./app/components/Buttons/EditArticle.jsx\");\n/* __next_internal_client_entry_do_not_use__ ArticlById auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ArticlById = (props)=>{\n    _s();\n    const authContext = (0,_app_store_app_store__WEBPACK_IMPORTED_MODULE_3__.useStore)();\n    const [adminMode, setAdminMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (authContext.user.email === \"admindiverse@gmail.com\") {\n            setAdminMode(true);\n        }\n    }, [\n        authContext.user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_news_id_Place_module_css__WEBPACK_IMPORTED_MODULE_1___default().place),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_app_news_id_Place_module_css__WEBPACK_IMPORTED_MODULE_1___default().place_title),\n                        children: [\n                            props.data.title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_app_news_id_Place_module_css__WEBPACK_IMPORTED_MODULE_1___default().place_disc),\n                        children: props.data.text\n                    }, void 0, false, {\n                        fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            adminMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_EditArticle__WEBPACK_IMPORTED_MODULE_4__.EditArticle, {\n                        data: props.data\n                    }, void 0, false, {\n                        fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"delet_btn\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n                lineNumber: 25,\n                columnNumber: 18\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lizacesnova/diverse/app/components/NewsList/ArticalByID.jsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ArticlById, \"JMzu68yBoDWdHxC1s+4vXf/R660=\", false, function() {\n    return [\n        _app_store_app_store__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c = ArticlById;\nvar _c;\n$RefreshReg$(_c, \"ArticlById\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0L0FydGljYWxCeUlELmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3NEO0FBRVY7QUFFSztBQUNJO0FBQzlDLE1BQU1LLGFBQWEsQ0FBQ0M7O0lBQ3ZCLE1BQU1DLGNBQWNKLDhEQUFRQTtJQUM1QixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0NDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSUssWUFBWUcsSUFBSSxDQUFDQyxLQUFLLEtBQUssMEJBQTBCO1lBQ3JERixhQUFhO1FBQ2pCO0lBQ0osR0FBRztRQUFDRixZQUFZRyxJQUFJO0tBQUM7SUFFckIscUJBQ0ksOERBQUNFOzswQkFDRyw4REFBQ0M7Z0JBQUlDLFdBQVdkLDRFQUFZOztrQ0FDeEIsOERBQUNnQjt3QkFBRUYsV0FBV2Qsa0ZBQWtCOzs0QkFBR00sTUFBTVksSUFBSSxDQUFDQyxLQUFLOzRCQUFDOzs7Ozs7O2tDQUNwRCw4REFBQ0g7d0JBQUVGLFdBQVdkLGlGQUFpQjtrQ0FBR00sTUFBTVksSUFBSSxDQUFDRyxJQUFJOzs7Ozs7Ozs7Ozs7WUFHcERiLDBCQUNJLDhEQUFDSzs7a0NBQ0UsOERBQUNULDZEQUFXQTt3QkFBQ2MsTUFBTVosTUFBTVksSUFBSTs7Ozs7O2tDQUM3Qiw4REFBQ0k7a0NBQ0csNEVBQUNDOzRCQUFPVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzRCQU0xQjs7Ozs7OztBQVFoQixFQUFDO0dBbENZVDs7UUFDV0YsMERBQVFBOzs7S0FEbkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05ld3NMaXN0L0FydGljYWxCeUlELmpzeD8yNTI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiQC9hcHAvbmV3cy9baWRdL1BsYWNlLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJAL2FwcC9zdG9yZS9hcHAtc3RvcmVcIjtcbmltcG9ydCB7IEVkaXRBcnRpY2xlIH0gZnJvbSBcIi4uL0J1dHRvbnMvRWRpdEFydGljbGVcIjtcbmV4cG9ydCBjb25zdCBBcnRpY2xCeUlkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgYXV0aENvbnRleHQgPSB1c2VTdG9yZSgpO1xuICAgIGNvbnN0IFthZG1pbk1vZGUsIHNldEFkbWluTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYXV0aENvbnRleHQudXNlci5lbWFpbCA9PT0gXCJhZG1pbmRpdmVyc2VAZ21haWwuY29tXCIpIHtcbiAgICAgICAgICAgIHNldEFkbWluTW9kZSh0cnVlKVxuICAgICAgICB9XG4gICAgfSwgW2F1dGhDb250ZXh0LnVzZXJdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBsYWNlfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1N0eWxlcy5wbGFjZV90aXRsZX0+e3Byb3BzLmRhdGEudGl0bGV9IDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1N0eWxlcy5wbGFjZV9kaXNjfT57cHJvcHMuZGF0YS50ZXh0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7YWRtaW5Nb2RlID9cbiAgICAgICAgICAgICAgICAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVkaXRBcnRpY2xlIGRhdGE9e3Byb3BzLmRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldF9idG5cIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgXCJcIn1cblxuICAgICAgICA8L3NlY3Rpb24+XG5cblxuXG5cbiAgICApXG59Il0sIm5hbWVzIjpbIlN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU3RvcmUiLCJFZGl0QXJ0aWNsZSIsIkFydGljbEJ5SWQiLCJwcm9wcyIsImF1dGhDb250ZXh0IiwiYWRtaW5Nb2RlIiwic2V0QWRtaW5Nb2RlIiwidXNlciIsImVtYWlsIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInBsYWNlIiwicCIsInBsYWNlX3RpdGxlIiwiZGF0YSIsInRpdGxlIiwicGxhY2VfZGlzYyIsInRleHQiLCJmb3JtIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NewsList/ArticalByID.jsx\n"));

/***/ })

});