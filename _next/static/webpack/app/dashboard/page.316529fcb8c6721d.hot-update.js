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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_stocks_finnHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/stocks/finnHub */ \"(app-pages-browser)/./app/api/stocks/finnHub.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst StockList = ()=>{\n    _s();\n    const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"MSFT\",\n        \"AAPL\",\n        \"TSLA\",\n        \"PYPL\",\n        \"ELF\"\n    ]);\n    const [stockData, setStockData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const promises = watchlist.map((symbol)=>_app_api_stocks_finnHub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/quote\", {\n                        params: {\n                            symbol\n                        }\n                    }).then((response)=>({\n                            ...response.data,\n                            s: symbol\n                        })));\n                const data = await Promise.all(promises);\n                setStockData(data);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        fetchData();\n    }, [\n        watchlist\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table hover mt-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    style: {\n                        color: \"rgb(79,89,102)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Last\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Chg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Chg%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"High\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Low\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Open\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Pclose\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: stock.map((stockData)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            style: {\n                                cursor: \"pointer\"\n                            },\n                            onClick: ()=>console.log(\"clicked\"),\n                            className: \"table-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"row\",\n                                    children: stockData.symbol\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: stockData.data.c\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"text-\".concat(changeColor(stockData.data.d)),\n                                    children: [\n                                        stockData.data.d,\n                                        \" \",\n                                        renderIcon(stockData.data.d)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"text-\".concat(changeColor(stockData.data.d)),\n                                    children: [\n                                        stockData.data.dp,\n                                        \" \",\n                                        renderIcon(stockData.data.d),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: stockData.data.h\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: stockData.data.l\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: stockData.data.o\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: [\n                                        stockData.data.pc,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-danger btn-sm ml-3 d-inline-block delete-button\",\n                                            onClick: (e)=>{\n                                                e.stopPropagation();\n                                                deleteStock(stockData.symbol);\n                                            },\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, stockData.symbol, true, {\n                            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/marcobonafini/Desktop/SWAD/final-project-mb/app/components/dashboardComp/StockList.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StockList, \"OoL4mlGuNHraXIfKYmKvJz2UN+g=\");\n_c = StockList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockList);\nvar _c;\n$RefreshReg$(_c, \"StockList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZENvbXAvU3RvY2tMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ0o7QUFZL0MsTUFBTUksWUFBc0I7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUN6QztRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQWMsRUFBRTtJQUUxREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBV0wsVUFBVU0sR0FBRyxDQUFDLENBQUNDLFNBQzlCVCwrREFBT0EsQ0FDSlUsR0FBRyxDQUFDLFVBQVU7d0JBQ2JDLFFBQVE7NEJBQ05GO3dCQUNGO29CQUNGLEdBQ0NHLElBQUksQ0FBQyxDQUFDQyxXQUFjOzRCQUNuQixHQUFHQSxTQUFTQyxJQUFJOzRCQUNoQkMsR0FBR047d0JBQ0w7Z0JBR0osTUFBTUssT0FBTyxNQUFNRSxRQUFRQyxHQUFHLENBQUNWO2dCQUMvQkYsYUFBYVM7WUFDZixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGO1FBRUFaO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBRWQscUJBQ0UsOERBQUNtQjtrQkFDQyw0RUFBQ0M7WUFBTUMsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUFNQyxPQUFPO3dCQUFFQyxPQUFPO29CQUFpQjs4QkFDdEMsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQUdDLE9BQU07MENBQU07Ozs7OzswQ0FDaEIsOERBQUNEO2dDQUFHQyxPQUFNOzBDQUFNOzs7Ozs7MENBQ2hCLDhEQUFDRDtnQ0FBR0MsT0FBTTswQ0FBTTs7Ozs7OzBDQUNoQiw4REFBQ0Q7Z0NBQUdDLE9BQU07MENBQU07Ozs7OzswQ0FDaEIsOERBQUNEO2dDQUFHQyxPQUFNOzBDQUFNOzs7Ozs7MENBQ2hCLDhEQUFDRDtnQ0FBR0MsT0FBTTswQ0FBTTs7Ozs7OzBDQUNoQiw4REFBQ0Q7Z0NBQUdDLE9BQU07MENBQU07Ozs7OzswQ0FDaEIsOERBQUNEO2dDQUFHQyxPQUFNOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHcEIsOERBQUNDOzhCQUNFQyxNQUFNdkIsR0FBRyxDQUFDLENBQUNKO3dCQUNWLHFCQUNFLDhEQUFDdUI7NEJBQ0NGLE9BQU87Z0NBQUVPLFFBQVE7NEJBQVU7NEJBQzNCQyxTQUFTLElBQU1kLFFBQVFDLEdBQUcsQ0FBQzs0QkFDM0JHLFdBQVU7OzhDQUdWLDhEQUFDSztvQ0FBR0MsT0FBTTs4Q0FBT3pCLFVBQVVLLE1BQU07Ozs7Ozs4Q0FDakMsOERBQUN5Qjs4Q0FBSTlCLFVBQVVVLElBQUksQ0FBQ3FCLENBQUM7Ozs7Ozs4Q0FDckIsOERBQUNEO29DQUFHWCxXQUFXLFFBQXNDLE9BQTlCYSxZQUFZaEMsVUFBVVUsSUFBSSxDQUFDdUIsQ0FBQzs7d0NBQ2hEakMsVUFBVVUsSUFBSSxDQUFDdUIsQ0FBQzt3Q0FBQzt3Q0FBRUMsV0FBV2xDLFVBQVVVLElBQUksQ0FBQ3VCLENBQUM7Ozs7Ozs7OENBRWpELDhEQUFDSDtvQ0FBR1gsV0FBVyxRQUFzQyxPQUE5QmEsWUFBWWhDLFVBQVVVLElBQUksQ0FBQ3VCLENBQUM7O3dDQUNoRGpDLFVBQVVVLElBQUksQ0FBQ3lCLEVBQUU7d0NBQUM7d0NBQUVELFdBQVdsQyxVQUFVVSxJQUFJLENBQUN1QixDQUFDO3dDQUFHOzs7Ozs7OzhDQUVyRCw4REFBQ0g7OENBQUk5QixVQUFVVSxJQUFJLENBQUMwQixDQUFDOzs7Ozs7OENBQ3JCLDhEQUFDTjs4Q0FBSTlCLFVBQVVVLElBQUksQ0FBQzJCLENBQUM7Ozs7Ozs4Q0FDckIsOERBQUNQOzhDQUFJOUIsVUFBVVUsSUFBSSxDQUFDNEIsQ0FBQzs7Ozs7OzhDQUNyQiw4REFBQ1I7O3dDQUNFOUIsVUFBVVUsSUFBSSxDQUFDNkIsRUFBRTt3Q0FBRTtzREFDcEIsOERBQUNDOzRDQUNDckIsV0FBVTs0Q0FDVlUsU0FBUyxDQUFDWTtnREFDUkEsRUFBRUMsZUFBZTtnREFDakJDLFlBQVkzQyxVQUFVSyxNQUFNOzRDQUM5QjtzREFDRDs7Ozs7Ozs7Ozs7OzsyQkFyQkVMLFVBQVVLLE1BQU07Ozs7O29CQTJCM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0ExRk1SO0tBQUFBO0FBNEZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZENvbXAvU3RvY2tMaXN0LnRzeD9mMDM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnQvX3V0aWxzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZpbm5IdWIgZnJvbSBcIkAvYXBwL2FwaS9zdG9ja3MvZmlubkh1YlwiO1xuXG5pbnRlcmZhY2UgU3RvY2tEYXRhIHtcbiAgczogc3RyaW5nOyAvLyBTdG9jayBzeW1ib2xcbiAgYzogbnVtYmVyOyAvLyBDdXJyZW50IHByaWNlXG4gIGQ6IG51bWJlcjsgLy8gQ2hhbmdlXG4gIGg6IG51bWJlcjsgLy8gSGlnaCBwcmljZSBvZiB0aGUgZGF5XG4gIGw6IG51bWJlcjsgLy8gTG93IHByaWNlIG9mIHRoZSBkYXlcbiAgbzogbnVtYmVyOyAvLyBPcGVuIHByaWNlIG9mIHRoZSBkYXlcbiAgcGM6IG51bWJlcjsgLy8gUHJldmlvdXMgY2xvc2UgcHJpY2Vcbn1cblxuY29uc3QgU3RvY2tMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3dhdGNobGlzdCwgc2V0V2F0Y2hsaXN0XSA9IHVzZVN0YXRlKFtcbiAgICBcIk1TRlRcIixcbiAgICBcIkFBUExcIixcbiAgICBcIlRTTEFcIixcbiAgICBcIlBZUExcIixcbiAgICBcIkVMRlwiLFxuICBdKTtcbiAgY29uc3QgW3N0b2NrRGF0YSwgc2V0U3RvY2tEYXRhXSA9IHVzZVN0YXRlPFN0b2NrRGF0YVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHdhdGNobGlzdC5tYXAoKHN5bWJvbCkgPT5cbiAgICAgICAgICBmaW5uSHViXG4gICAgICAgICAgICAuZ2V0KFwiL3F1b3RlXCIsIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgczogc3ltYm9sLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgc2V0U3RvY2tEYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3dhdGNobGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBob3ZlciBtdC01XCI+XG4gICAgICAgIDx0aGVhZCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoNzksODksMTAyKVwiIH19PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DaGc8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q2hnJTwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxvdzwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5PcGVuPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlBjbG9zZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtzdG9jay5tYXAoKHN0b2NrRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1yb3dcIlxuICAgICAgICAgICAgICAgIGtleT17c3RvY2tEYXRhLnN5bWJvbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntzdG9ja0RhdGEuc3ltYm9sfTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkPntzdG9ja0RhdGEuZGF0YS5jfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17YHRleHQtJHtjaGFuZ2VDb2xvcihzdG9ja0RhdGEuZGF0YS5kKX1gfT5cbiAgICAgICAgICAgICAgICAgIHtzdG9ja0RhdGEuZGF0YS5kfSB7cmVuZGVySWNvbihzdG9ja0RhdGEuZGF0YS5kKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2B0ZXh0LSR7Y2hhbmdlQ29sb3Ioc3RvY2tEYXRhLmRhdGEuZCl9YH0+XG4gICAgICAgICAgICAgICAgICB7c3RvY2tEYXRhLmRhdGEuZHB9IHtyZW5kZXJJY29uKHN0b2NrRGF0YS5kYXRhLmQpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57c3RvY2tEYXRhLmRhdGEuaH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57c3RvY2tEYXRhLmRhdGEubH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57c3RvY2tEYXRhLmRhdGEub308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtzdG9ja0RhdGEuZGF0YS5wY317XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbSBtbC0zIGQtaW5saW5lLWJsb2NrIGRlbGV0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU3RvY2soc3RvY2tEYXRhLnN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaW5uSHViIiwiU3RvY2tMaXN0Iiwid2F0Y2hsaXN0Iiwic2V0V2F0Y2hsaXN0Iiwic3RvY2tEYXRhIiwic2V0U3RvY2tEYXRhIiwiZmV0Y2hEYXRhIiwicHJvbWlzZXMiLCJtYXAiLCJzeW1ib2wiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicyIsIlByb21pc2UiLCJhbGwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwic3R5bGUiLCJjb2xvciIsInRyIiwidGgiLCJzY29wZSIsInRib2R5Iiwic3RvY2siLCJjdXJzb3IiLCJvbkNsaWNrIiwidGQiLCJjIiwiY2hhbmdlQ29sb3IiLCJkIiwicmVuZGVySWNvbiIsImRwIiwiaCIsImwiLCJvIiwicGMiLCJidXR0b24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlU3RvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardComp/StockList.tsx\n"));

/***/ })

});