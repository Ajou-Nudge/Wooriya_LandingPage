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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ScrollDirectionExample = ()=>{\n    _s();\n    const sections = [\n        \"prev-section\",\n        \"next-section\",\n        \"extra-section\"\n    ];\n    const prevScrollYRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const scrollInterval = 20; // 20ms\n    const [scrollEventInProgress, setScrollEventInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (scrollEventInProgress) {\n                return; // 이벤트 실행 중일 때 추가적인 스크롤 이벤트 감지 방지\n            }\n            const currentScrollY = window.scrollY;\n            console.log(prevScrollYRef.current);\n            console.log(currentScrollY);\n            if (currentScrollY > prevScrollYRef.current) {\n                // 스크롤 방향이 아래로 내려가는 경우\n                scrollToNextSection();\n            } else if (currentScrollY < prevScrollYRef.current) {\n                // 스크롤 방향이 위로 올라가는 경우\n                scrollToPrevSection();\n            }\n            prevScrollYRef.current = currentScrollY;\n        };\n        let scrollTimer;\n        const handleScrollWithInterval = ()=>{\n            clearTimeout(scrollTimer);\n            scrollTimer = setTimeout(()=>{\n                setScrollEventInProgress(false); // 스크롤 이벤트가 끝나면 플래그를 false로 설정\n            }, scrollInterval);\n            setScrollEventInProgress(true); // 스크롤 이벤트 실행 중임을 표시\n            handleScroll();\n        };\n        window.addEventListener(\"scroll\", handleScrollWithInterval);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScrollWithInterval);\n            clearTimeout(scrollTimer);\n        };\n    }, [\n        scrollEventInProgress\n    ]);\n    const scrollToSection = (sectionId)=>{\n        const section = document.getElementById(sectionId);\n        if (section) {\n            section.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const scrollToNextSection = ()=>{\n        for(let i = 0; i < sections.length - 1; i++){\n            const currentSection = document.getElementById(sections[i]);\n            const nextSection = document.getElementById(sections[i + 1]);\n            if (currentSection && nextSection) {\n                const currentSectionRect = currentSection.getBoundingClientRect();\n                const nextSectionRect = nextSection.getBoundingClientRect();\n                if (nextSectionRect.top > 0 && currentSectionRect.bottom < window.innerHeight) {\n                    // 현재 섹션이 화면에서 보이고 다음 섹션은 아직 보이지 않는 경우에만 스크롤\n                    scrollToSection(sections[i + 1]);\n                    break;\n                }\n            }\n        }\n    };\n    const scrollToPrevSection = ()=>{\n        for(let i = sections.length - 1; i > 0; i--){\n            const currentSection = document.getElementById(sections[i]);\n            const prevSection = document.getElementById(sections[i - 1]);\n            if (currentSection && prevSection) {\n                const currentSectionRect = currentSection.getBoundingClientRect();\n                const prevSectionRect = prevSection.getBoundingClientRect();\n                if (prevSectionRect.bottom < window.innerHeight && currentSectionRect.top > 0) {\n                    // 현재 섹션이 화면에서 보이고 이전 섹션은 아직 보이지 않는 경우에만 스크롤\n                    scrollToSection(sections[i - 1]);\n                    break;\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"prev-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"next-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"이전 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"next-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    to: \"extra-section\",\n                    smooth: true,\n                    offset: 0,\n                    duration: 500,\n                    className: \"cursor-pointer\",\n                    children: \"다음 섹션으로 이동\"\n                }, void 0, false, {\n                    fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"extra-section\",\n                style: {\n                    height: \"100vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"prev-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"이전 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        to: \"next-section\",\n                        smooth: true,\n                        offset: 0,\n                        duration: 500,\n                        className: \"cursor-pointer\",\n                        children: \"다음 섹션으로 이동\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ichanju/Desktop/Wooriya/wooriya_landing_page/app/test/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollDirectionExample, \"PcJiYzgeAqY+0TrfLjNVapLg+aA=\");\n_c = ScrollDirectionExample;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollDirectionExample);\nvar _c;\n$RefreshReg$(_c, \"ScrollDirectionExample\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMkIsSUFBSSxFQUFFO29CQUMvQjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWTs7MEJBQ0EsOERBQUNqQjtnQkFBUWtCLElBQUc7Z0JBQWVDLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVE7MEJBRWpELDRFQUFDNUMsOENBQUlBO29CQUFDNkMsSUFBRztvQkFBZUMsUUFBUTtvQkFBTUMsUUFBUTtvQkFBR0MsVUFBVTtvQkFBS0MsV0FBVTs4QkFBaUI7Ozs7Ozs7Ozs7OzBCQUs3Riw4REFBQ3pCO2dCQUFRa0IsSUFBRztnQkFBZUMsT0FBTztvQkFBRUMsUUFBUTtnQkFBUTswQkFFbEQsNEVBQUM1Qyw4Q0FBSUE7b0JBQUM2QyxJQUFHO29CQUFnQkMsUUFBUTtvQkFBTUMsUUFBUTtvQkFBR0MsVUFBVTtvQkFBS0MsV0FBVTs4QkFBaUI7Ozs7Ozs7Ozs7OzBCQUs5Riw4REFBQ3pCO2dCQUFRa0IsSUFBRztnQkFBZ0JDLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVE7O2tDQUVuRCw4REFBQzVDLDhDQUFJQTt3QkFBQzZDLElBQUc7d0JBQWVDLFFBQVE7d0JBQU1DLFFBQVE7d0JBQUdDLFVBQVU7d0JBQUtDLFdBQVU7a0NBQWlCOzs7Ozs7a0NBRzNGLDhEQUFDakQsOENBQUlBO3dCQUFDNkMsSUFBRzt3QkFBZUMsUUFBUTt3QkFBTUMsUUFBUTt3QkFBR0MsVUFBVTt3QkFBS0MsV0FBVTtrQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRztHQWhITWhEO0tBQUFBO0FBa0hOLCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Rlc3QvcGFnZS50c3g/YjM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5jb25zdCBTY3JvbGxEaXJlY3Rpb25FeGFtcGxlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbnMgPSBbJ3ByZXYtc2VjdGlvbicsICduZXh0LXNlY3Rpb24nLCAnZXh0cmEtc2VjdGlvbiddO1xuICBjb25zdCBwcmV2U2Nyb2xsWVJlZiA9IHVzZVJlZjxudW1iZXI+KDApO1xuICBjb25zdCBzY3JvbGxJbnRlcnZhbCA9IDIwOyAvLyAyMG1zXG4gIGNvbnN0IFtzY3JvbGxFdmVudEluUHJvZ3Jlc3MsIHNldFNjcm9sbEV2ZW50SW5Qcm9ncmVzc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsRXZlbnRJblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybjsgLy8g7J2067Kk7Yq4IOyLpO2WiSDspJHsnbwg65WMIOy2lOqwgOyggeyduCDsiqTtgazroaQg7J2067Kk7Yq4IOqwkOyngCDrsKnsp4BcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnNvbGUubG9nKHByZXZTY3JvbGxZUmVmLmN1cnJlbnQpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFNjcm9sbFkpO1xuXG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiBwcmV2U2Nyb2xsWVJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIOyKpO2BrOuhpCDrsKntlqXsnbQg7JWE656Y66GcIOuCtOugpOqwgOuKlCDqsr3smrBcbiAgICAgICAgc2Nyb2xsVG9OZXh0U2VjdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8g7Iqk7YGs66GkIOuwqe2WpeydtCDsnITroZwg7Jis65286rCA64qUIOqyveyasFxuICAgICAgICBzY3JvbGxUb1ByZXZTZWN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHByZXZTY3JvbGxZUmVmLmN1cnJlbnQgPSBjdXJyZW50U2Nyb2xsWTtcbiAgICB9O1xuXG4gICAgbGV0IHNjcm9sbFRpbWVyOiBOb2RlSlMuVGltZW91dDtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbFdpdGhJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lcik7XG4gICAgICBzY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTY3JvbGxFdmVudEluUHJvZ3Jlc3MoZmFsc2UpOyAvLyDsiqTtgazroaQg7J2067Kk7Yq46rCAIOuBneuCmOuptCDtlIzrnpjqt7jrpbwgZmFsc2XroZwg7ISk7KCVXG4gICAgICB9LCBzY3JvbGxJbnRlcnZhbCk7XG4gICAgICBzZXRTY3JvbGxFdmVudEluUHJvZ3Jlc3ModHJ1ZSk7IC8vIOyKpO2BrOuhpCDsnbTrsqTtirgg7Iuk7ZaJIOykkeyehOydhCDtkZzsi5xcbiAgICAgIGhhbmRsZVNjcm9sbCgpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsV2l0aEludGVydmFsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsV2l0aEludGVydmFsKTtcbiAgICAgIGNsZWFyVGltZW91dChzY3JvbGxUaW1lcik7XG4gICAgfTtcbiAgfSwgW3Njcm9sbEV2ZW50SW5Qcm9ncmVzc10pO1xuXG4gIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChzZWN0aW9uSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpO1xuICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzY3JvbGxUb05leHRTZWN0aW9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IG5leHRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbnNbaSArIDFdKTtcbiAgICAgIGlmIChjdXJyZW50U2VjdGlvbiAmJiBuZXh0U2VjdGlvbikge1xuICAgICAgICBjb25zdCBjdXJyZW50U2VjdGlvblJlY3QgPSBjdXJyZW50U2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbmV4dFNlY3Rpb25SZWN0ID0gbmV4dFNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChuZXh0U2VjdGlvblJlY3QudG9wID4gMCAmJiBjdXJyZW50U2VjdGlvblJlY3QuYm90dG9tIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgLy8g7ZiE7J6sIOyEueyFmOydtCDtmZTrqbTsl5DshJwg67O07J206rOgIOuLpOydjCDshLnshZjsnYAg7JWE7KeBIOuztOydtOyngCDslYrripQg6rK97Jqw7JeQ66eMIOyKpO2BrOuhpFxuICAgICAgICAgIHNjcm9sbFRvU2VjdGlvbihzZWN0aW9uc1tpICsgMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNjcm9sbFRvUHJldlNlY3Rpb24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IHNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgcHJldlNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uc1tpIC0gMV0pO1xuICAgICAgaWYgKGN1cnJlbnRTZWN0aW9uICYmIHByZXZTZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uUmVjdCA9IGN1cnJlbnRTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwcmV2U2VjdGlvblJlY3QgPSBwcmV2U2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHByZXZTZWN0aW9uUmVjdC5ib3R0b20gPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgY3VycmVudFNlY3Rpb25SZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAvLyDtmITsnqwg7IS57IWY7J20IO2ZlOuptOyXkOyEnCDrs7TsnbTqs6Ag7J207KCEIOyEueyFmOydgCDslYTsp4Eg67O07J207KeAIOyViuuKlCDqsr3smrDsl5Drp4wg7Iqk7YGs66GkXG4gICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKHNlY3Rpb25zW2kgLSAxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICA8c2VjdGlvbiBpZD1cInByZXYtc2VjdGlvblwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgICAgey8qIOydtOyghCDshLnshZgg7Luo7YWQ7LigICovfVxuICAgICAgICA8TGluayB0bz1cIm5leHQtc2VjdGlvblwiIHNtb290aD17dHJ1ZX0gb2Zmc2V0PXswfSBkdXJhdGlvbj17NTAwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIOydtOyghCDshLnshZjsnLzroZwg7J2064+ZXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gaWQ9XCJuZXh0LXNlY3Rpb25cIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIHsvKiDri6TsnYwg7IS57IWYIOy7qO2FkOy4oCAqL31cbiAgICAgICAgPExpbmsgdG89XCJleHRyYS1zZWN0aW9uXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezB9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAg64uk7J2MIOyEueyFmOycvOuhnCDsnbTrj5lcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBpZD1cImV4dHJhLXNlY3Rpb25cIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgIHsvKiDstpTqsIDrkJwg7IS57IWYIOy7qO2FkOy4oCAqL31cbiAgICAgICAgPExpbmsgdG89XCJwcmV2LXNlY3Rpb25cIiBzbW9vdGg9e3RydWV9IG9mZnNldD17MH0gZHVyYXRpb249ezUwMH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICDsnbTsoIQg7IS57IWY7Jy866GcIOydtOuPmVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwibmV4dC1zZWN0aW9uXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezB9IGR1cmF0aW9uPXs1MDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAg64uk7J2MIOyEueyFmOycvOuhnCDsnbTrj5lcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsRGlyZWN0aW9uRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGluayIsIlNjcm9sbERpcmVjdGlvbkV4YW1wbGUiLCJzZWN0aW9ucyIsInByZXZTY3JvbGxZUmVmIiwic2Nyb2xsSW50ZXJ2YWwiLCJzY3JvbGxFdmVudEluUHJvZ3Jlc3MiLCJzZXRTY3JvbGxFdmVudEluUHJvZ3Jlc3MiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsWSIsIndpbmRvdyIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbFRvTmV4dFNlY3Rpb24iLCJzY3JvbGxUb1ByZXZTZWN0aW9uIiwic2Nyb2xsVGltZXIiLCJoYW5kbGVTY3JvbGxXaXRoSW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb1NlY3Rpb24iLCJzZWN0aW9uSWQiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJpIiwibGVuZ3RoIiwiY3VycmVudFNlY3Rpb24iLCJuZXh0U2VjdGlvbiIsImN1cnJlbnRTZWN0aW9uUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5leHRTZWN0aW9uUmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwicHJldlNlY3Rpb24iLCJwcmV2U2VjdGlvblJlY3QiLCJkaXYiLCJpZCIsInN0eWxlIiwiaGVpZ2h0IiwidG8iLCJzbW9vdGgiLCJvZmZzZXQiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/test/page.tsx\n"));

/***/ })

});