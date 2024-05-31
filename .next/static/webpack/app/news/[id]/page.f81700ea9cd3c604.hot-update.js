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

/***/ "(app-pages-browser)/./app/components/Forms/ArticlEditForm.jsx":
/*!*************************************************!*\
  !*** ./app/components/Forms/ArticlEditForm.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArticlEditForm: function() { return /* binding */ ArticlEditForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPlaceForm.module.css */ \"(app-pages-browser)/./app/components/Forms/NewPlaceForm.module.css\");\n/* harmony import */ var _NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_data_data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/data/data-utils */ \"(app-pages-browser)/./app/data/data-utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_data_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/data/config */ \"(app-pages-browser)/./app/data/config.js\");\n/* harmony import */ var _app_store_app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/store/app-store */ \"(app-pages-browser)/./app/store/app-store.js\");\n/* __next_internal_client_entry_do_not_use__ ArticlEditForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ArticlEditForm = (props)=>{\n    _s();\n    const [formData, setPlaceData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\",\n        text: \"\"\n    });\n    const title = props.data.title;\n    const descr = props.data.description;\n    const text = props.data.text;\n    const id = props.data.id;\n    const handleInput = (e)=>{\n        setPlaceData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        let body = {\n            news: {\n                title: formData.title || props.data.title,\n                description: formData.description || props.data.description,\n                text: formData.text || props.data.text\n            }\n        };\n        await (0,_app_data_data_utils__WEBPACK_IMPORTED_MODULE_2__.editProfile)(_app_data_config__WEBPACK_IMPORTED_MODULE_4__.endpoints.news + \"/\" + id, body);\n        props.close();\n        e.target.reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__title),\n                    children: [\n                        \" \",\n                        props.data.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__fields),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__field),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"form__field-title\"]),\n                                    children: \"Название\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"form__field-input\"]),\n                                    onInput: handleInput,\n                                    type: \"text\",\n                                    name: \"title\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__field),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"form__field-title\"]),\n                                    children: \"Описание\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"form__field-input\"]),\n                                    onInput: handleInput,\n                                    type: \"text\",\n                                    name: \"description\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__field),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"form__field-title\"]),\n                                    children: \"Текст\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"form__field-input\"]),\n                                    onInput: handleInput,\n                                    type: \"text\",\n                                    name: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__actions),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__submit),\n                            type: \"submit\",\n                            children: \"Редактировать статью\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_NewPlaceForm_module_css__WEBPACK_IMPORTED_MODULE_1___default().form__delet),\n                            type: \"button\",\n                            onClick: (0,_app_data_data_utils__WEBPACK_IMPORTED_MODULE_2__.deletArticl)(_app_data_config__WEBPACK_IMPORTED_MODULE_4__.endpoints.news + \"/\" + id),\n                            children: \"Удалить статью\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lizacesnova/diverse/app/components/Forms/ArticlEditForm.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ArticlEditForm, \"cLdpcIyepwALWlPOo246bgfE87Q=\");\n_c = ArticlEditForm;\nvar _c;\n$RefreshReg$(_c, \"ArticlEditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Zvcm1zL0FydGljbEVkaXRGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNrQjtBQUNyQjtBQUNFO0FBRUc7QUFFMUMsTUFBTU8saUJBQWlCLENBQUNDOztJQUUzQixNQUFNLENBQUNDLFVBQVVDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7UUFBRU8sT0FBTztRQUFJQyxhQUFhO1FBQUlDLE1BQU07SUFBRTtJQUNoRixNQUFNRixRQUFRSCxNQUFNTSxJQUFJLENBQUNILEtBQUs7SUFDOUIsTUFBTUksUUFBUVAsTUFBTU0sSUFBSSxDQUFDRixXQUFXO0lBQ3BDLE1BQU1DLE9BQU9MLE1BQU1NLElBQUksQ0FBQ0QsSUFBSTtJQUM1QixNQUFNRyxLQUFLUixNQUFNTSxJQUFJLENBQUNFLEVBQUU7SUFFeEIsTUFBTUMsY0FBYyxDQUFDQztRQUNqQlIsYUFBYTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDUyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNoRTtJQUNBLE1BQU1DLGVBQWUsT0FBT0o7UUFDeEJBLEVBQUVLLGNBQWM7UUFDaEIsSUFBSUMsT0FBTztZQUNUQyxNQUFNO2dCQUNKZCxPQUFPRixTQUFTRSxLQUFLLElBQUlILE1BQU1NLElBQUksQ0FBQ0gsS0FBSztnQkFDekNDLGFBQWFILFNBQVNHLFdBQVcsSUFBSUosTUFBTU0sSUFBSSxDQUFDRixXQUFXO2dCQUMzREMsTUFBTUosU0FBU0ksSUFBSSxJQUFJTCxNQUFNTSxJQUFJLENBQUNELElBQUk7WUFDeEM7UUFDRjtRQUVBLE1BQU1YLGlFQUFXQSxDQUFDRyx1REFBU0EsQ0FBQ29CLElBQUksR0FBRyxNQUFNVCxJQUFJUTtRQUM3Q2hCLE1BQU1rQixLQUFLO1FBQ1hSLEVBQUVDLE1BQU0sQ0FBQ1EsS0FBSztJQUNoQjtJQUNGLHFCQUNJLDhEQUFDQztrQkFHRyw0RUFBQ0M7WUFBS0MsV0FBVzlCLHNFQUFjO1lBQUUrQixVQUFVVDs7OEJBQzNDLDhEQUFDVTtvQkFBR0YsV0FBVzlCLDZFQUFxQjs7d0JBQUU7d0JBQUVRLE1BQU1NLElBQUksQ0FBQ0gsS0FBSzs7Ozs7Ozs4QkFDcEQsOERBQUNpQjtvQkFBSUUsV0FBVzlCLDhFQUFzQjs7c0NBQ2xDLDhEQUFDaUM7NEJBQU1ILFdBQVc5Qiw2RUFBcUI7OzhDQUNuQyw4REFBQ2tDO29DQUFLSixXQUFXOUIsc0ZBQTJCOzhDQUFFOzs7Ozs7OENBQzlDLDhEQUFDbUM7b0NBQU1MLFdBQVc5QixzRkFBMkI7b0NBQUVvQyxTQUFTbkI7b0NBQWFvQixNQUFLO29DQUFRakIsTUFBSzs7Ozs7Ozs7Ozs7O3NDQUUzRiw4REFBQ2E7NEJBQU1ILFdBQVc5Qiw2RUFBcUI7OzhDQUNuQyw4REFBQ2tDO29DQUFLSixXQUFXOUIsc0ZBQTJCOzhDQUFFOzs7Ozs7OENBQzlDLDhEQUFDbUM7b0NBQU1MLFdBQVc5QixzRkFBMkI7b0NBQUVvQyxTQUFTbkI7b0NBQWFvQixNQUFLO29DQUFRakIsTUFBSzs7Ozs7Ozs7Ozs7O3NDQUUzRiw4REFBQ2E7NEJBQU1ILFdBQVc5Qiw2RUFBcUI7OzhDQUNuQyw4REFBQ2tDO29DQUFLSixXQUFXOUIsc0ZBQTJCOzhDQUFFOzs7Ozs7OENBQzlDLDhEQUFDbUM7b0NBQU1MLFdBQVc5QixzRkFBMkI7b0NBQUVvQyxTQUFTbkI7b0NBQWFvQixNQUFLO29DQUFRakIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUkvRiw4REFBQ1E7b0JBQUlFLFdBQVc5QiwrRUFBdUI7O3NDQUNuQyw4REFBQ3NDOzRCQUFPUixXQUFXOUIsOEVBQXNCOzRCQUFFcUMsTUFBSztzQ0FBUzs7Ozs7O3NDQUN6RCw4REFBQ0M7NEJBQU9SLFdBQVc5Qiw2RUFBcUI7NEJBQUVxQyxNQUFLOzRCQUFTRSxTQUFTdEMsaUVBQVdBLENBQUNJLHVEQUFTQSxDQUFDb0IsSUFBSSxHQUFHLE1BQU1UO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3SCxFQUFFO0dBekRXVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Gb3Jtcy9BcnRpY2xFZGl0Rm9ybS5qc3g/OWU0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9OZXdQbGFjZUZvcm0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBkZWxldEFydGljbCwgZWRpdFByb2ZpbGUgfSBmcm9tICdAL2FwcC9kYXRhL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGVuZHBvaW50cyB9IGZyb20gJ0AvYXBwL2RhdGEvY29uZmlnJztcblxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAL2FwcC9zdG9yZS9hcHAtc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsRWRpdEZvcm0gPSAocHJvcHMpID0+IHtcbiAgICBcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldFBsYWNlRGF0YV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGV4dDogXCJcIn0pO1xuICAgIGNvbnN0IHRpdGxlID0gcHJvcHMuZGF0YS50aXRsZVxuICAgIGNvbnN0IGRlc2NyID0gcHJvcHMuZGF0YS5kZXNjcmlwdGlvblxuICAgIGNvbnN0IHRleHQgPSBwcm9wcy5kYXRhLnRleHRcbiAgICBjb25zdCBpZCA9IHByb3BzLmRhdGEuaWRcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGxhY2VEYXRhKHsgLi4uZm9ybURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBib2R5ID0ge1xuICAgICAgICAgIG5ld3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YS50aXRsZSB8fCBwcm9wcy5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmRlc2NyaXB0aW9uIHx8IHByb3BzLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0ZXh0OiBmb3JtRGF0YS50ZXh0IHx8IHByb3BzLmRhdGEudGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICBhd2FpdCBlZGl0UHJvZmlsZShlbmRwb2ludHMubmV3cyArICcvJyArIGlkLCBib2R5KTtcbiAgICAgICAgcHJvcHMuY2xvc2UoKTtcbiAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1N0eWxlc1snZm9ybSddfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1N0eWxlc1snZm9ybV9fdGl0bGUnXX0+IHtwcm9wcy5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlc1snZm9ybV9fZmllbGRzJ119PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtTdHlsZXNbJ2Zvcm1fX2ZpZWxkJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtTdHlsZXNbJ2Zvcm1fX2ZpZWxkLXRpdGxlJ119PtCd0LDQt9Cy0LDQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtTdHlsZXNbJ2Zvcm1fX2ZpZWxkLWlucHV0J119IG9uSW5wdXQ9e2hhbmRsZUlucHV0fSB0eXBlPVwidGV4dFwiICBuYW1lPSd0aXRsZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17U3R5bGVzWydmb3JtX19maWVsZCddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzWydmb3JtX19maWVsZC10aXRsZSddfT7QntC/0LjRgdCw0L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17U3R5bGVzWydmb3JtX19maWVsZC1pbnB1dCddfSBvbklucHV0PXtoYW5kbGVJbnB1dH0gdHlwZT1cInRleHRcIiAgbmFtZT0nZGVzY3JpcHRpb24nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e1N0eWxlc1snZm9ybV9fZmllbGQnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlc1snZm9ybV9fZmllbGQtdGl0bGUnXX0+0KLQtdC60YHRgjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1N0eWxlc1snZm9ybV9fZmllbGQtaW5wdXQnXX0gb25JbnB1dD17aGFuZGxlSW5wdXR9IHR5cGU9XCJ0ZXh0XCIgIG5hbWU9J3RleHQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzWydmb3JtX19hY3Rpb25zJ119PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGVzWydmb3JtX19zdWJtaXQnXX0gdHlwZT1cInN1Ym1pdFwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINGB0YLQsNGC0YzRjjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGVzWydmb3JtX19kZWxldCddfSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZGVsZXRBcnRpY2woZW5kcG9pbnRzLm5ld3MgKyAnLycgKyBpZCl9PtCj0LTQsNC70LjRgtGMINGB0YLQsNGC0YzRjjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIClcbn07Il0sIm5hbWVzIjpbIlN0eWxlcyIsImRlbGV0QXJ0aWNsIiwiZWRpdFByb2ZpbGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImVuZHBvaW50cyIsInVzZVN0b3JlIiwiQXJ0aWNsRWRpdEZvcm0iLCJwcm9wcyIsImZvcm1EYXRhIiwic2V0UGxhY2VEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHQiLCJkYXRhIiwiZGVzY3IiLCJpZCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsIm5ld3MiLCJjbG9zZSIsInJlc2V0IiwiZGl2IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaDIiLCJsYWJlbCIsInNwYW4iLCJpbnB1dCIsIm9uSW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Forms/ArticlEditForm.jsx\n"));

/***/ })

});