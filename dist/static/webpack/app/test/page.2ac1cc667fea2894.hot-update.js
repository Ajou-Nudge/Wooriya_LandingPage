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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ScrollDirectionExample = ()=>{\n    _s();\n    const sections = [\n        \"prev-section\",\n        \"next-section\",\n        \"extra-section\"\n    ];\n    const prevScrollYRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const scrollInterval = 20; // 20ms\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const currentScrollY = window.scrollY;\n            console.log(prevScrollYRef.current);\n            console.log(currentScrollY);\n            if (currentScrollY > prevScrollYRef.current) {\n                // 스크롤 방향이 아래로 내려가는 경우\n                scrollToNextSection();\n            } else if (currentScrollY < prevScrollYRef.current) {\n                // 스크롤 방향이 위로 올라가는 경우\n                scrollToPrevSection();\n            }\n            prevScrollYRef.current = currentScrollY;\n        };\n        let scrollTimer;\n        const handleScrollWithInterval = ()=>{\n            clearTimeout(scrollTimer);\n            scrollTimer = setTimeout(handleScroll, scrollInterval);\n        };\n        window.addEventListener(\"scroll\", handleScrollWithInterval);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScrollWithInterval);\n            clearTimeout(scrollTimer);\n        };\n    }, []);\n    const scrollToSection = (sectionId)=>{\n        const section = document.getElementById(sectionId);\n        if (section) {\n            section.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const scrollToNextSection = ()=>{\n        for(let i = 0; i < sections.length - 1; i++){\n            const currentSection = document.getElementById(sections[i]);\n            const nextSection = document.getElementById(sections[i + 1]);\n            if (currentSection && nextSection) {\n                const currentSectionRect = currentSection.getBoundingClientRect();\n                const nextSectionRect = nextSection.getBoundingClientRect();\n                if (nextSectionRect.top > 0 && currentSectionRect.bottom < window.innerHeight) {\n                    // 현재 섹션이 화면에서 보이고 다음 섹션은 아직 보이지 않는 경우에만 스크롤\n                    scrollToSection(sections[i + 1]);\n                    break;\n                }\n            }\n        }\n    };\n    const scrollToPrevSection = ()=>{\n        for(let i = sections.length - 1; i > 0; i--){\n            const currentSection = document.getElementById(sections[i]);\n            const prevSection = document.getElementById(sections[i - 1]);\n            if (currentSection && prevSection) {\n                const currentSectionRect = currentSection.getBoundingClientRect();\n                const prevSectionRect = prevSection.getBoundingClientRect();\n                if (prevSectionRect.bottom < window.innerHeight && currentSectionRect.top > 0) {\n                    // 현재 섹션이 화면에서 보이고 이전 섹션은 아직 보이지 않는 경우에만 스크롤\n                    scrollToSection(sections[i - 1]);\n                    break;\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"prev-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"next-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"이전 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"next-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"extra-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"다음 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"extra-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"prev-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"이전 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"next-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"다음 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollDirectionExample, \"GbrS08EwBIhlwaluJHDRwiz15Eo=\");\n_c = ScrollDirectionExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollDirectionExample);\nvar _c;\n$RefreshReg$(_c, \"ScrollDirectionExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUFNQyxRQUFRO29CQUFHQyxVQUFVO29CQUFLQyxXQUFVOzhCQUFpQjs7Ozs7Ozs7Ozs7MEJBSzdGLDhEQUFDekI7Z0JBQVFrQixJQUFHO2dCQUFlQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFROzBCQUVsRCw0RUFBQzFDLDhDQUFJQTtvQkFBQzJDLElBQUc7b0JBQWdCQyxRQUFRO29CQUFNQyxRQUFRO29CQUFHQyxVQUFVO29CQUFLQyxXQUFVOzhCQUFpQjs7Ozs7Ozs7Ozs7MEJBSzlGLDhEQUFDekI7Z0JBQVFrQixJQUFHO2dCQUFnQkMsT0FBTztvQkFBRUMsUUFBUTtnQkFBUTs7a0NBRW5ELDhEQUFDMUMsOENBQUlBO3dCQUFDMkMsSUFBRzt3QkFBZUMsUUFBUTt3QkFBTUMsUUFBUTt3QkFBR0MsVUFBVTt3QkFBS0MsV0FBVTtrQ0FBaUI7Ozs7OztrQ0FHM0YsOERBQUMvQyw4Q0FBSUE7d0JBQUMyQyxJQUFHO3dCQUFlQyxRQUFRO3dCQUFNQyxRQUFRO3dCQUFHQyxVQUFVO3dCQUFLQyxXQUFVO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5HO0dBdkdNOUM7S0FBQUE7QUF5R04sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdGVzdC9wYWdlLnRzeD9iMzliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuY29uc3QgU2Nyb2xsRGlyZWN0aW9uRXhhbXBsZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25zID0gWydwcmV2LXNlY3Rpb24nLCAnbmV4dC1zZWN0aW9uJywgJ2V4dHJhLXNlY3Rpb24nXTtcbiAgY29uc3QgcHJldlNjcm9sbFlSZWYgPSB1c2VSZWY8bnVtYmVyPigwKTtcbiAgY29uc3Qgc2Nyb2xsSW50ZXJ2YWwgPSAyMDsgLy8gMjBtc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnNvbGUubG9nKHByZXZTY3JvbGxZUmVmLmN1cnJlbnQpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFNjcm9sbFkpO1xuXG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiBwcmV2U2Nyb2xsWVJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIOyKpO2BrOuhpCDrsKntlqXsnbQg7JWE656Y66GcIOuCtOugpOqwgOuKlCDqsr3smrBcbiAgICAgICAgc2Nyb2xsVG9OZXh0U2VjdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8g7Iqk7YGs66GkIOuwqe2WpeydtCDsnITroZwg7Jis65286rCA64qUIOqyveyasFxuICAgICAgICBzY3JvbGxUb1ByZXZTZWN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHByZXZTY3JvbGxZUmVmLmN1cnJlbnQgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICB9O1xuXG4gICAgbGV0IHNjcm9sbFRpbWVyOiBOb2RlSlMuVGltZW91dDtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbFdpdGhJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lcik7XG4gICAgICBzY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoaGFuZGxlU2Nyb2xsLCBzY3JvbGxJbnRlcnZhbCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwpO1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNjcm9sbFRvTmV4dFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgbmV4dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uc1tpICsgMV0pO1xuICAgICAgaWYgKGN1cnJlbnRTZWN0aW9uICYmIG5leHRTZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uUmVjdCA9IGN1cnJlbnRTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBuZXh0U2VjdGlvblJlY3QgPSBuZXh0U2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKG5leHRTZWN0aW9uUmVjdC50b3AgPiAwICYmIGN1cnJlbnRTZWN0aW9uUmVjdC5ib3R0b20gPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAvLyDtmITsnqwg7IS57IWY7J20IO2ZlOuptOyXkOyEnCDrs7TsnbTqs6Ag64uk7J2MIOyEueyFmOydgCDslYTsp4Eg67O07J207KeAIOyViuuKlCDqsr3smrDsl5Drp4wg7Iqk7YGs66GkXG4gICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKHNlY3Rpb25zW2kgKyAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9QcmV2U2VjdGlvbiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25zW2kgLSAxXSk7XG4gICAgICBpZiAoY3VycmVudFNlY3Rpb24gJiYgcHJldlNlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25SZWN0ID0gY3VycmVudFNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHByZXZTZWN0aW9uUmVjdCA9IHByZXZTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocHJldlNlY3Rpb25SZWN0LmJvdHRvbSA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiBjdXJyZW50U2VjdGlvblJlY3QudG9wID4gMCkge1xuICAgICAgICAgIC8vIO2YhOyerCDshLnshZjsnbQg7ZmU66m07JeQ7IScIOuztOydtOqzoCDsnbTsoIQg7IS57IWY7J2AIOyVhOyngSDrs7TsnbTsp4Ag7JWK64qUIOqyveyasOyXkOunjCDsiqTtgazroaRcbiAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oc2VjdGlvbnNbaSAtIDFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgIDxzZWN0aW9uIGlkPVwicHJldi1zZWN0aW9uXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICB7Lyog7J207KCEIOyEueyFmCDsu6jthZDsuKAgKi99XG4gICAgICAgIDxMaW5rIHRvPVwibmV4dC1zZWN0aW9uXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezB9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAg7J207KCEIOyEueyFmOycvOuhnCDsnbTrj5lcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD1cIm5leHQtc2VjdGlvblwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgey8qIOuLpOydjCDshLnshZgg7Luo7YWQ7LigICovfVxuICAgICAgICA8TGluayB0bz1cImV4dHJhLXNlY3Rpb25cIiBzbW9vdGg9e3RydWV9IG9mZnNldD17MH0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICDri6TsnYwg7IS57IWY7Jy866GcIOydtOuPmVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPVwiZXh0cmEtc2VjdGlvblwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgey8qIOy2lOqwgOuQnCDshLnshZgg7Luo7YWQ7LigICovfVxuICAgICAgICA8TGluayB0bz1cInByZXYtc2VjdGlvblwiIHNtb290aD17dHJ1ZX0gb2Zmc2V0PXswfSBkdXJhdGlvbj17NTAwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIOydtOyghCDshLnshZjsnLzroZwg7J2064+ZXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCJuZXh0LXNlY3Rpb25cIiBzbW9vdGg9e3RydWV9IG9mZnNldD17MH0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICDri6TsnYwg7IS57IWY7Jy866GcIOydtOuPmVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxEaXJlY3Rpb25FeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGluayIsIlNjcm9sbERpcmVjdGlvbkV4YW1wbGUiLCJzZWN0aW9ucyIsInByZXZTY3JvbGxZUmVmIiwic2Nyb2xsSW50ZXJ2YWwiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsWSIsIndpbmRvdyIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbFRvTmV4dFNlY3Rpb24iLCJzY3JvbGxUb1ByZXZTZWN0aW9uIiwic2Nyb2xsVGltZXIiLCJoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb1NlY3Rpb24iLCJzZWN0aW9uSWQiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJpIiwibGVuZ3RoIiwiY3VycmVudFNlY3Rpb24iLCJuZXh0U2VjdGlvbiIsImN1cnJlbnRTZWN0aW9uUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5leHRTZWN0aW9uUmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwicHJldlNlY3Rpb24iLCJwcmV2U2VjdGlvblJlY3QiLCJkaXYiLCJpZCIsInN0eWxlIiwiaGVpZ2h0IiwidG8iLCJzbW9vdGgiLCJvZmZzZXQiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});