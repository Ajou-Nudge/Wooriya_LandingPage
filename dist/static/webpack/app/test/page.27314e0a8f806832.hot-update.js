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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"(app-pages-browser)/./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ScrollDirectionExample = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(()=>{\n        _s1();\n        const handleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(()=>{\n            const currentScrollY = window.scrollY;\n            // 스크롤 방향에 따라 다음 또는 이전 섹션으로 이동\n            if (currentScrollY > prevScrollYRef.current) {\n                scrollToNextSection();\n            } else if (currentScrollY < prevScrollYRef.current) {\n                scrollToPrevSection();\n            }\n            prevScrollYRef.current = currentScrollY;\n        }, 1000); // 1초마다 한 번씩만 실행되도록 제한\n        const prevScrollYRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n        const scrollToNextSection = ()=>{\n            const nextSection = document.getElementById(\"next-section\");\n            if (nextSection) {\n                nextSection.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        };\n        const scrollToPrevSection = ()=>{\n            const prevSection = document.getElementById(\"prev-section\");\n            if (prevSection) {\n                prevSection.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, \"s0qGIK5NdENv+uBLuYcEsmCB+KY=\"), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"prev-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"next-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"이전 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"next-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"extra-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"다음 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"extra-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"prev-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"이전 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"next-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"다음 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollDirectionExample, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ScrollDirectionExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollDirectionExample);\nvar _c;\n$RefreshReg$(_c, \"ScrollDirectionExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpRDtBQUNiO0FBQ0k7QUFFeEMsTUFBTUsseUJBQW1DOzs7SUFDdkNKLGdEQUFTQSxLQUFDOztRQUNSLE1BQU1LLGVBQWVGLHNEQUFTQSxDQUFDO1lBQzdCLE1BQU1HLGlCQUFpQkMsT0FBT0MsT0FBTztZQUVyQyw4QkFBOEI7WUFDOUIsSUFBSUYsaUJBQWlCRyxlQUFlQyxPQUFPLEVBQUU7Z0JBQzNDQztZQUNGLE9BQU8sSUFBSUwsaUJBQWlCRyxlQUFlQyxPQUFPLEVBQUU7Z0JBQ2xERTtZQUNGO1lBRUFILGVBQWVDLE9BQU8sR0FBR0o7UUFDM0IsR0FBRyxPQUFPLHNCQUFzQjtRQUVoQyxNQUFNRyxpQkFBaUJSLDZDQUFNQSxDQUFTO1FBRXRDLE1BQU1VLHNCQUFzQjtZQUMxQixNQUFNRSxjQUFjQyxTQUFTQyxjQUFjLENBQUM7WUFDNUMsSUFBSUYsYUFBYTtnQkFDZkEsWUFBWUcsY0FBYyxDQUFDO29CQUFFQyxVQUFVO2dCQUFTO1lBQ2xEO1FBQ0Y7UUFFQSxNQUFNTCxzQkFBc0I7WUFDMUIsTUFBTU0sY0FBY0osU0FBU0MsY0FBYyxDQUFDO1lBQzVDLElBQUlHLGFBQWE7Z0JBQ2ZBLFlBQVlGLGNBQWMsQ0FBQztvQkFBRUMsVUFBVTtnQkFBUztZQUNsRDtRQUNGO1FBRUFWLE9BQU9ZLGdCQUFnQixDQUFDLFVBQVVkO1FBRWxDLE9BQU87WUFDTEUsT0FBT2EsbUJBQW1CLENBQUMsVUFBVWY7UUFDdkM7SUFDRixvQ0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNnQjs7MEJBQ0MsOERBQUNDO2dCQUFRQyxJQUFHO2dCQUFlQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFROzBCQUVsRCw0RUFBQ3ZCLDhDQUFJQTtvQkFBQ3dCLElBQUc7b0JBQWVDLFFBQVE7b0JBQU1DLFFBQVE7b0JBQUdDLFVBQVU7b0JBQUtDLFdBQVU7OEJBQWlCOzs7Ozs7Ozs7OzswQkFLN0YsOERBQUNSO2dCQUFRQyxJQUFHO2dCQUFlQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFROzBCQUVsRCw0RUFBQ3ZCLDhDQUFJQTtvQkFBQ3dCLElBQUc7b0JBQWdCQyxRQUFRO29CQUFNQyxRQUFRO29CQUFHQyxVQUFVO29CQUFLQyxXQUFVOzhCQUFpQjs7Ozs7Ozs7Ozs7MEJBSzlGLDhEQUFDUjtnQkFBUUMsSUFBRztnQkFBZ0JDLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVE7O2tDQUVuRCw4REFBQ3ZCLDhDQUFJQTt3QkFBQ3dCLElBQUc7d0JBQWVDLFFBQVE7d0JBQU1DLFFBQVE7d0JBQUdDLFVBQVU7d0JBQUtDLFdBQVU7a0NBQWlCOzs7Ozs7a0NBRzNGLDhEQUFDNUIsOENBQUlBO3dCQUFDd0IsSUFBRzt3QkFBZUMsUUFBUTt3QkFBTUMsUUFBUTt3QkFBR0MsVUFBVTt3QkFBS0MsV0FBVTtrQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRztHQWpFTTFCO0tBQUFBO0FBbUVOLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Rlc3QvcGFnZS50c3g/YjM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgX3Rocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbmNvbnN0IFNjcm9sbERpcmVjdGlvbkV4YW1wbGU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IF90aHJvdHRsZSgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAvLyDsiqTtgazroaQg67Cp7Zal7JeQIOuUsOudvCDri6TsnYwg65iQ64qUIOydtOyghCDshLnshZjsnLzroZwg7J2064+ZXG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiBwcmV2U2Nyb2xsWVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNjcm9sbFRvTmV4dFNlY3Rpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbFkgPCBwcmV2U2Nyb2xsWVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNjcm9sbFRvUHJldlNlY3Rpb24oKTtcbiAgICAgIH1cblxuICAgICAgcHJldlNjcm9sbFlSZWYuY3VycmVudCA9IGN1cnJlbnRTY3JvbGxZO1xuICAgIH0sIDEwMDApOyAvLyAx7LSI66eI64ukIO2VnCDrsojslKnrp4wg7Iuk7ZaJ65CY64+E66GdIOygnO2VnFxuXG4gICAgY29uc3QgcHJldlNjcm9sbFlSZWYgPSB1c2VSZWY8bnVtYmVyPigwKTtcblxuICAgIGNvbnN0IHNjcm9sbFRvTmV4dFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXNlY3Rpb24nKTtcbiAgICAgIGlmIChuZXh0U2VjdGlvbikge1xuICAgICAgICBuZXh0U2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9QcmV2U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYtc2VjdGlvbicpO1xuICAgICAgaWYgKHByZXZTZWN0aW9uKSB7XG4gICAgICAgIHByZXZTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlY3Rpb24gaWQ9XCJwcmV2LXNlY3Rpb25cIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIHsvKiDsnbTsoIQg7IS57IWYIOy7qO2FkOy4oCAqL31cbiAgICAgICAgPExpbmsgdG89XCJuZXh0LXNlY3Rpb25cIiBzbW9vdGg9e3RydWV9IG9mZnNldD17MH0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICDsnbTsoIQg7IS57IWY7Jy866GcIOydtOuPmVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPVwibmV4dC1zZWN0aW9uXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICB7Lyog64uk7J2MIOyEueyFmCDsu6jthZDsuKAgKi99XG4gICAgICAgIDxMaW5rIHRvPVwiZXh0cmEtc2VjdGlvblwiIHNtb290aD17dHJ1ZX0gb2Zmc2V0PXswfSBkdXJhdGlvbj17NTAwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIOuLpOydjCDshLnshZjsnLzroZwg7J2064+ZXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9XCJleHRyYS1zZWN0aW9uXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICB7Lyog7LaU6rCA65CcIOyEueyFmCDsu6jthZDsuKAgKi99XG4gICAgICAgIDxMaW5rIHRvPVwicHJldi1zZWN0aW9uXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezB9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAg7J207KCEIOyEueyFmOycvOuhnCDsnbTrj5lcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIm5leHQtc2VjdGlvblwiIHNtb290aD17dHJ1ZX0gb2Zmc2V0PXswfSBkdXJhdGlvbj17NTAwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIOuLpOydjCDshLnshZjsnLzroZwg7J2064+ZXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbERpcmVjdGlvbkV4YW1wbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5rIiwiX3Rocm90dGxlIiwiU2Nyb2xsRGlyZWN0aW9uRXhhbXBsZSIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsInByZXZTY3JvbGxZUmVmIiwiY3VycmVudCIsInNjcm9sbFRvTmV4dFNlY3Rpb24iLCJzY3JvbGxUb1ByZXZTZWN0aW9uIiwibmV4dFNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInByZXZTZWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJzZWN0aW9uIiwiaWQiLCJzdHlsZSIsImhlaWdodCIsInRvIiwic21vb3RoIiwib2Zmc2V0IiwiZHVyYXRpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});