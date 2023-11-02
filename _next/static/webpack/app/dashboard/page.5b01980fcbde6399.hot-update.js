"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/components/dashboardComp/StockList.tsx":
/*!****************************************************!*\
  !*** ./app/components/dashboardComp/StockList.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_stocks_finnHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/stocks/finnHub */ \"(app-pages-browser)/./app/api/stocks/finnHub.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst StockList = ()=>{\n    _s();\n    const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"MSFT\",\n        \"AAPL\",\n        \"TSLA\",\n        \"PYPL\",\n        \"ELF\"\n    ]);\n    const [stockData, setStockData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const promises = watchlist.map((symbol)=>_app_api_stocks_finnHub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/quote\", {\n                        params: {\n                            symbol\n                        }\n                    }).then((response)=>({\n                            ...response.data,\n                            s: symbol\n                        })));\n                const data = await Promise.all(promises);\n                setStockData(data);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        fetchData();\n    }, [\n        watchlist\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table hover mt-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                style: {\n                    color: \"rgb(79,89,102)\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Last\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Chg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Chg%\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"High\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Low\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Open\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            children: \"Pclose\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StockList, \"OoL4mlGuNHraXIfKYmKvJz2UN+g=\");\n_c = StockList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockList);\nvar _c;\n$RefreshReg$(_c, \"StockList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZENvbXAvU3RvY2tMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ0o7QUFZL0MsTUFBTUksWUFBc0I7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUN6QztRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQWMsRUFBRTtJQUUxREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBV0wsVUFBVU0sR0FBRyxDQUFDLENBQUNDLFNBQzlCVCwrREFBT0EsQ0FDSlUsR0FBRyxDQUFDLFVBQVU7d0JBQ2JDLFFBQVE7NEJBQ05GO3dCQUNGO29CQUNGLEdBQ0NHLElBQUksQ0FBQyxDQUFDQyxXQUFjOzRCQUNuQixHQUFHQSxTQUFTQyxJQUFJOzRCQUNoQkMsR0FBR047d0JBQ0w7Z0JBR0osTUFBTUssT0FBTyxNQUFNRSxRQUFRQyxHQUFHLENBQUNWO2dCQUMvQkYsYUFBYVM7WUFDZixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGO1FBRUFaO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBRWQscUJBQ0UsOERBQUNtQjtrQkFDQyw0RUFBQ0M7WUFBTUMsV0FBVTtzQkFDZiw0RUFBQ0M7Z0JBQU1DLE9BQU87b0JBQUVDLE9BQU87Z0JBQWlCOzBCQUN0Qyw0RUFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR0MsT0FBTTtzQ0FBTTs7Ozs7O3NDQUNoQiw4REFBQ0Q7NEJBQUdDLE9BQU07c0NBQU07Ozs7OztzQ0FDaEIsOERBQUNEOzRCQUFHQyxPQUFNO3NDQUFNOzs7Ozs7c0NBQ2hCLDhEQUFDRDs0QkFBR0MsT0FBTTtzQ0FBTTs7Ozs7O3NDQUNoQiw4REFBQ0Q7NEJBQUdDLE9BQU07c0NBQU07Ozs7OztzQ0FDaEIsOERBQUNEOzRCQUFHQyxPQUFNO3NDQUFNOzs7Ozs7c0NBQ2hCLDhEQUFDRDs0QkFBR0MsT0FBTTtzQ0FBTTs7Ozs7O3NDQUNoQiw4REFBQ0Q7NEJBQUdDLE9BQU07c0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQXRETTVCO0tBQUFBO0FBd0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZENvbXAvU3RvY2tMaXN0LnRzeD9mMDM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnQvX3V0aWxzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZpbm5IdWIgZnJvbSBcIkAvYXBwL2FwaS9zdG9ja3MvZmlubkh1YlwiO1xuXG5pbnRlcmZhY2UgU3RvY2tEYXRhIHtcbiAgczogc3RyaW5nOyAvLyBTdG9jayBzeW1ib2xcbiAgYzogbnVtYmVyOyAvLyBDdXJyZW50IHByaWNlXG4gIGQ6IG51bWJlcjsgLy8gQ2hhbmdlXG4gIGg6IG51bWJlcjsgLy8gSGlnaCBwcmljZSBvZiB0aGUgZGF5XG4gIGw6IG51bWJlcjsgLy8gTG93IHByaWNlIG9mIHRoZSBkYXlcbiAgbzogbnVtYmVyOyAvLyBPcGVuIHByaWNlIG9mIHRoZSBkYXlcbiAgcGM6IG51bWJlcjsgLy8gUHJldmlvdXMgY2xvc2UgcHJpY2Vcbn1cblxuY29uc3QgU3RvY2tMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3dhdGNobGlzdCwgc2V0V2F0Y2hsaXN0XSA9IHVzZVN0YXRlKFtcbiAgICBcIk1TRlRcIixcbiAgICBcIkFBUExcIixcbiAgICBcIlRTTEFcIixcbiAgICBcIlBZUExcIixcbiAgICBcIkVMRlwiLFxuICBdKTtcbiAgY29uc3QgW3N0b2NrRGF0YSwgc2V0U3RvY2tEYXRhXSA9IHVzZVN0YXRlPFN0b2NrRGF0YVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHdhdGNobGlzdC5tYXAoKHN5bWJvbCkgPT5cbiAgICAgICAgICBmaW5uSHViXG4gICAgICAgICAgICAuZ2V0KFwiL3F1b3RlXCIsIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgczogc3ltYm9sLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgc2V0U3RvY2tEYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3dhdGNobGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBob3ZlciBtdC01XCI+XG4gICAgICAgIDx0aGVhZCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoNzksODksMTAyKVwiIH19PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DaGc8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q2hnJTwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxvdzwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5PcGVuPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlBjbG9zZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpbm5IdWIiLCJTdG9ja0xpc3QiLCJ3YXRjaGxpc3QiLCJzZXRXYXRjaGxpc3QiLCJzdG9ja0RhdGEiLCJzZXRTdG9ja0RhdGEiLCJmZXRjaERhdGEiLCJwcm9taXNlcyIsIm1hcCIsInN5bWJvbCIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzIiwiUHJvbWlzZSIsImFsbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJzdHlsZSIsImNvbG9yIiwidHIiLCJ0aCIsInNjb3BlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardComp/StockList.tsx\n"));

/***/ })

});