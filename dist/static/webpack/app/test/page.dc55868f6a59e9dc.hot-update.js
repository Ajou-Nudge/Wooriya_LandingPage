"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/test/page",{

/***/ "(app-pages-browser)/./app/test/page.tsx":
/*!***************************!*\
  !*** ./app/test/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ScrollDirectionExample = ()=>{\n    _s();\n    const prevScrollYRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const scrollInterval = 27; // 1 second in milliseconds\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const currentScrollY = window.scrollY;\n            console.log(prevScrollYRef.current);\n            console.log(currentScrollY);\n            if (currentScrollY > prevScrollYRef.current) {\n                // 스크롤 방향이 아래로 내려가는 경우\n                const nextSection = document.getElementById(\"next-section\");\n                console.log(\"nextSection\", nextSection);\n                if (nextSection) {\n                    nextSection.scrollIntoView({\n                        behavior: \"smooth\"\n                    });\n                }\n            } else if (currentScrollY < prevScrollYRef.current) {\n                // 스크롤 방향이 위로 올라가는 경우\n                const prevSection = document.getElementById(\"prev-section\");\n                console.log(\"prevSection\", prevSection);\n                if (prevSection) {\n                    prevSection.scrollIntoView({\n                        behavior: \"smooth\"\n                    });\n                }\n            }\n            prevScrollYRef.current = currentScrollY;\n        };\n        let scrollTimer;\n        const handleScrollWithInterval = ()=>{\n            clearTimeout(scrollTimer);\n            scrollTimer = setTimeout(handleScroll, scrollInterval);\n        };\n        window.addEventListener(\"scroll\", handleScrollWithInterval);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScrollWithInterval);\n            clearTimeout(scrollTimer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"prev-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"next-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"이전 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"next-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"extra-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"다음 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"extra-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"prev-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"이전 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"next-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"다음 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollDirectionExample, \"GbrS08EwBIhlwaluJHDRwiz15Eo=\");\n_c = ScrollDirectionExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollDirectionExample);\nvar _c;\n$RefreshReg$(_c, \"ScrollDirectionExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUQ7QUFDYjtBQUVwQyxNQUFNSSx5QkFBbUM7O0lBQ3ZDLE1BQU1DLGlCQUFpQkgsNkNBQU1BLENBQVM7SUFDdEMsTUFBTUksaUJBQWlCLElBQUksMkJBQTJCO0lBRXRETCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGVBQWU7WUFDbkIsTUFBTUMsaUJBQWlCQyxPQUFPQyxPQUFPO1lBQ3JDQyxRQUFRQyxHQUFHLENBQUNQLGVBQWVRLE9BQU87WUFDbENGLFFBQVFDLEdBQUcsQ0FBQ0o7WUFFWixJQUFJQSxpQkFBaUJILGVBQWVRLE9BQU8sRUFBRTtnQkFDM0Msc0JBQXNCO2dCQUN0QixNQUFNQyxjQUFjQyxTQUFTQyxjQUFjLENBQUM7Z0JBQzVDTCxRQUFRQyxHQUFHLENBQUMsZUFBZUU7Z0JBQzNCLElBQUlBLGFBQWE7b0JBQ2ZBLFlBQVlHLGNBQWMsQ0FBQzt3QkFBRUMsVUFBVTtvQkFBUztnQkFDbEQ7WUFDRixPQUFPLElBQUlWLGlCQUFpQkgsZUFBZVEsT0FBTyxFQUFFO2dCQUNsRCxxQkFBcUI7Z0JBQ3JCLE1BQU1NLGNBQWNKLFNBQVNDLGNBQWMsQ0FBQztnQkFDNUNMLFFBQVFDLEdBQUcsQ0FBQyxlQUFlTztnQkFDM0IsSUFBSUEsYUFBYTtvQkFDZkEsWUFBWUYsY0FBYyxDQUFDO3dCQUFFQyxVQUFVO29CQUFTO2dCQUNsRDtZQUNGO1lBRUFiLGVBQWVRLE9BQU8sR0FBR0w7UUFDM0I7UUFFQSxJQUFJWTtRQUVKLE1BQU1DLDJCQUEyQjtZQUMvQkMsYUFBYUY7WUFDYkEsY0FBY0csV0FBV2hCLGNBQWNEO1FBQ3pDO1FBRUFHLE9BQU9lLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU87WUFDTFosT0FBT2dCLG1CQUFtQixDQUFDLFVBQVVKO1lBQ3JDQyxhQUFhRjtRQUNmO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNOzswQkFDQSw4REFBQ0M7Z0JBQVFDLElBQUc7Z0JBQWVDLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVE7MEJBRWpELDRFQUFDM0IsOENBQUlBO29CQUFDNEIsSUFBRztvQkFBZUMsUUFBUTtvQkFBTUMsUUFBUTtvQkFBR0MsVUFBVTtvQkFBS0MsV0FBVTs4QkFBaUI7Ozs7Ozs7Ozs7OzBCQUs3Riw4REFBQ1I7Z0JBQVFDLElBQUc7Z0JBQWVDLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVE7MEJBRWxELDRFQUFDM0IsOENBQUlBO29CQUFDNEIsSUFBRztvQkFBZ0JDLFFBQVE7b0JBQU1DLFFBQVE7b0JBQUdDLFVBQVU7b0JBQUtDLFdBQVU7OEJBQWlCOzs7Ozs7Ozs7OzswQkFLOUYsOERBQUNSO2dCQUFRQyxJQUFHO2dCQUFnQkMsT0FBTztvQkFBRUMsUUFBUTtnQkFBUTs7a0NBRW5ELDhEQUFDM0IsOENBQUlBO3dCQUFDNEIsSUFBRzt3QkFBZUMsUUFBUTt3QkFBTUMsUUFBUTt3QkFBR0MsVUFBVTt3QkFBS0MsV0FBVTtrQ0FBaUI7Ozs7OztrQ0FHM0YsOERBQUNoQyw4Q0FBSUE7d0JBQUM0QixJQUFHO3dCQUFlQyxRQUFRO3dCQUFNQyxRQUFRO3dCQUFHQyxVQUFVO3dCQUFLQyxXQUFVO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5HO0dBdkVNL0I7S0FBQUE7QUF5RU4sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdGVzdC9wYWdlLnRzeD9iMzliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3QgU2Nyb2xsRGlyZWN0aW9uRXhhbXBsZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHByZXZTY3JvbGxZUmVmID0gdXNlUmVmPG51bWJlcj4oMCk7XG4gIGNvbnN0IHNjcm9sbEludGVydmFsID0gMjc7IC8vIDEgc2Vjb25kIGluIG1pbGxpc2Vjb25kc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnNvbGUubG9nKHByZXZTY3JvbGxZUmVmLmN1cnJlbnQpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFNjcm9sbFkpO1xuXG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiBwcmV2U2Nyb2xsWVJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIOyKpO2BrOuhpCDrsKntlqXsnbQg7JWE656Y66GcIOuCtOugpOqwgOuKlCDqsr3smrBcbiAgICAgICAgY29uc3QgbmV4dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dFNlY3Rpb25cIiwgbmV4dFNlY3Rpb24pO1xuICAgICAgICBpZiAobmV4dFNlY3Rpb24pIHtcbiAgICAgICAgICBuZXh0U2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8g7Iqk7YGs66GkIOuwqe2WpeydtCDsnITroZwg7Jis65286rCA64qUIOqyveyasFxuICAgICAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LXNlY3Rpb24nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmV2U2VjdGlvblwiLCBwcmV2U2VjdGlvbik7XG4gICAgICAgIGlmIChwcmV2U2VjdGlvbikge1xuICAgICAgICAgIHByZXZTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZTY3JvbGxZUmVmLmN1cnJlbnQgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICB9O1xuXG4gICAgbGV0IHNjcm9sbFRpbWVyOiBOb2RlSlMuVGltZW91dDtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbFdpdGhJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lcik7XG4gICAgICBzY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlU2Nyb2xsLCBzY3JvbGxJbnRlcnZhbCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwpO1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICA8c2VjdGlvbiBpZD1cInByZXYtc2VjdGlvblwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgey8qIOydtOyghCDshLnshZgg7Luo7YWQ7LigICovfVxuICAgICAgICA8TGluayB0bz1cIm5leHQtc2VjdGlvblwiIHNtb290aD17dHJ1ZX0gb2Zmc2V0PXswfSBkdXJhdGlvbj17NTAwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIOydtOyghCDshLnshZjsnLzroZwg7J2064+ZXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9XCJuZXh0LXNlY3Rpb25cIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIHsvKiDri6TsnYwg7IS57IWYIOy7qO2FkOy4oCAqL31cbiAgICAgICAgPExpbmsgdG89XCJleHRyYS1zZWN0aW9uXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezB9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAg64uk7J2MIOyEueyFmOycvOuhnCDsnbTrj5lcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD1cImV4dHJhLXNlY3Rpb25cIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIHsvKiDstpTqsIDrkJwg7IS57IWYIOy7qO2FkOy4oCAqL31cbiAgICAgICAgPExpbmsgdG89XCJwcmV2LXNlY3Rpb25cIiBzbW9vdGg9e3RydWV9IG9mZnNldD17MH0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICDsnbTsoIQg7IS57IWY7Jy866GcIOydtOuPmVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwibmV4dC1zZWN0aW9uXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezB9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAg64uk7J2MIOyEueyFmOycvOuhnCDsnbTrj5lcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRGlyZWN0aW9uRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxpbmsiLCJTY3JvbGxEaXJlY3Rpb25FeGFtcGxlIiwicHJldlNjcm9sbFlSZWYiLCJzY3JvbGxJbnRlcnZhbCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwibmV4dFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInByZXZTZWN0aW9uIiwic2Nyb2xsVGltZXIiLCJoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJzZWN0aW9uIiwiaWQiLCJzdHlsZSIsImhlaWdodCIsInRvIiwic21vb3RoIiwib2Zmc2V0IiwiZHVyYXRpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});