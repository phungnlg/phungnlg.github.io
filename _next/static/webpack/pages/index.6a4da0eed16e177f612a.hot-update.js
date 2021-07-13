webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_converters_HomePageConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/converters/HomePageConverter */ "./libs/converters/HomePageConverter.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/config */ "./libs/config.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typewriter-effect */ "./node_modules/typewriter-effect/dist/react.js");
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/svg/fronend.svg */ "./assets/svg/fronend.svg");
/* harmony import */ var _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/svg/backend.svg */ "./assets/svg/backend.svg");
/* harmony import */ var _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/svg/database.svg */ "./assets/svg/database.svg");
/* harmony import */ var _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "E:\\working\\phungnlg\\phungnlg-fe\\pages\\index.js",
    _this = undefined;









var HomePage = function HomePage(_ref) {
  var website = _ref.website;
  var pageData = Object(_libs_config__WEBPACK_IMPORTED_MODULE_2__["getPageData"])(website, 'phungnlg-home');

  var _convertDataPage = Object(_libs_converters_HomePageConverter__WEBPACK_IMPORTED_MODULE_1__["convertDataPage"])(pageData),
      meta = _convertDataPage.meta,
      content = _convertDataPage.content;

  var avatar = '/avatar.jpg';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: "".concat(meta.title, " \uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB Phung NLG"),
        site_name: "".concat(meta.title)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "container min-h-screen px-4 pt-24 pb-8 mx-auto text-black lg:pt-56",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center h-auto max-w-3xl mx-auto my-16",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "profile",
          className: "w-full mx-6 bg-white rounded-lg shadow-2xl",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-8 pb-2 text-center md:p-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "block w-48 h-48 mx-auto bg-center bg-cover rounded-full shadow-xl -mt-28",
              style: {
                backgroundImage: "url(".concat(avatar, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "pt-8 text-xl font-bold lg:text-3xl",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(typewriter_effect__WEBPACK_IMPORTED_MODULE_4___default.a, {
                options: {
                  strings: [content.welcome.name, content.welcome.job, content.welcome.location],
                  autoStart: true,
                  loop: true
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-4/5 pt-3 mx-auto border-b-2 border-green-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-8 text-base",
              children: content.welcome.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-wrap items-center justify-between w-4/5 py-4 mx-auto mt-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-green-700 link hover:text-green-500",
                href: "mailto:phungnlg@gmail.com",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fas fa-envelope-open-text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-green-700 link hover:text-green-500",
                href: "skype:phungnlg?chat",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-skype"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-green-700 link hover:text-green-500",
                href: "",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-twitter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-green-700 link hover:text-green-500",
                href: "https://github.com/phungnlg",
                target: "_blank",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "text-2xl fab fa-github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "py-8 text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "px-4 py-2 mx-4 my-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                href: "http://myup.work/phungnlg",
                target: "_blank",
                children: "Hire me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "px-4 py-2 mx-4 my-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                href: "mailto:phungnlg@gmail.com",
                target: "_blank",
                children: "Contact me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "py-8 bg-gray-100 border-b",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container max-w-5xl m-8 mx-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "w-full my-2 text-3xl font-black leading-tight text-center text-gray-800 lg:text-5xl",
          children: "Experiences"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-64 h-1 py-0 mx-auto my-0 bg-gray-500 rounded-t"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "timeline",
          children: content.experiences && content.experiences.map(function (item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "timeline-container primary",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "timeline-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: item.icon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "timeline-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: item.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "timeline-subtitle",
                  children: item.time
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)]
            }, item.name, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "py-8 border-b",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container max-w-5xl m-8 mx-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "w-full my-2 text-3xl font-black leading-tight text-center text-gray-800 lg:text-5xl dark:text-white",
          children: "What I can do?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full mb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-64 h-1 py-0 mx-auto my-0 bg-gray-500 rounded-t"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap w-full text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full lg:w-1/3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-center w-full p-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-28",
                src: _assets_svg_fronend_svg__WEBPACK_IMPORTED_MODULE_5___default.a
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full p-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-3 text-2xl font-bold leading-none text-gray-800 lg:text-3xl dark:text-white",
                children: content.whatICanDo.frontend.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-8 text-gray-600 dark:text-white",
                children: content.whatICanDo.frontend.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full lg:w-1/3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-center w-full p-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-28",
                src: _assets_svg_backend_svg__WEBPACK_IMPORTED_MODULE_6___default.a
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full p-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "align-middle",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "mb-3 text-2xl font-bold leading-none text-gray-800 lg:text-3xl dark:text-white",
                  children: content.whatICanDo.backend.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "mb-8 text-gray-600 dark:text-white",
                  children: content.whatICanDo.backend.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full lg:w-1/3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-center w-full p-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-28",
                src: _assets_svg_database_svg__WEBPACK_IMPORTED_MODULE_7___default.a
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full p-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-3 text-2xl font-bold leading-none text-gray-800 lg:text-3xl dark:text-white",
                children: content.whatICanDo.database.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-8 text-gray-600 dark:text-white",
                children: content.whatICanDo.database.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ3ZWJzaXRlIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnZlcnREYXRhUGFnZSIsIm1ldGEiLCJjb250ZW50IiwiYXZhdGFyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNpdGVfbmFtZSIsImJhY2tncm91bmRJbWFnZSIsInN0cmluZ3MiLCJ3ZWxjb21lIiwibmFtZSIsImpvYiIsImxvY2F0aW9uIiwiYXV0b1N0YXJ0IiwibG9vcCIsImV4cGVyaWVuY2VzIiwibWFwIiwiaXRlbSIsImljb24iLCJ0aW1lIiwiRnJvbmVuZFN2ZyIsIndoYXRJQ2FuRG8iLCJmcm9udGVuZCIsIkJhY2tlbmRTdmciLCJiYWNrZW5kIiwiRGF0YUJhc2VTdmciLCJkYXRhYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0MsZ0VBQVcsQ0FBQ0YsT0FBRCxFQUFVLGVBQVYsQ0FBNUI7O0FBRGdDLHlCQUVORywwRkFBZSxDQUFDRixRQUFELENBRlQ7QUFBQSxNQUV4QkcsSUFGd0Isb0JBRXhCQSxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQixvQkFFbEJBLE9BRmtCOztBQUdoQyxNQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FEZDtBQUVFLGlCQUFXLEVBQUVILElBQUksQ0FBQ0ksV0FGcEI7QUFHRSxlQUFTLEVBQUU7QUFDVEQsYUFBSyxZQUFLSCxJQUFJLENBQUNHLEtBQVYsMERBREk7QUFFVEUsaUJBQVMsWUFBS0wsSUFBSSxDQUFDRyxLQUFWO0FBRkE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRTtBQUFTLGVBQVMsRUFBQyxvRUFBbkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsNERBQWY7QUFBQSwrQkFDRTtBQUFLLFlBQUUsRUFBQyxTQUFSO0FBQWtCLG1CQUFTLEVBQUMsNENBQTVCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLCtCQUFmO0FBQUEsb0NBQ0U7QUFDRSx1QkFBUyxFQUFDLDBFQURaO0FBRUUsbUJBQUssRUFBRTtBQUFFRywrQkFBZSxnQkFBU0osTUFBVDtBQUFqQjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFJLHVCQUFTLEVBQUMsb0NBQWQ7QUFBQSxxQ0FDRSxxRUFBQyx3REFBRDtBQUNFLHVCQUFPLEVBQUU7QUFDUEsseUJBQU8sRUFBRSxDQUFDTixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLElBQWpCLEVBQXVCUixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JFLEdBQXZDLEVBQTRDVCxPQUFPLENBQUNPLE9BQVIsQ0FBZ0JHLFFBQTVELENBREY7QUFFUEMsMkJBQVMsRUFBRSxJQUZKO0FBR1BDLHNCQUFJLEVBQUU7QUFIQztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLGVBY0U7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkRixlQWdCRTtBQUFHLHVCQUFTLEVBQUMsZ0JBQWI7QUFBQSx3QkFBK0JaLE9BQU8sQ0FBQ08sT0FBUixDQUFnQko7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFrQkU7QUFBSyx1QkFBUyxFQUFDLHFFQUFmO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFDLDBDQUFiO0FBQXdELG9CQUFJLEVBQUMsMkJBQTdEO0FBQXlGLHNCQUFNLEVBQUMsUUFBaEc7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUcseUJBQVMsRUFBQywwQ0FBYjtBQUF3RCxvQkFBSSxFQUFDLHFCQUE3RDtBQUFtRixzQkFBTSxFQUFDLFFBQTFGO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFPRTtBQUFHLHlCQUFTLEVBQUMsMENBQWI7QUFBd0Qsb0JBQUksRUFBQyxFQUE3RDtBQUFnRSxzQkFBTSxFQUFDLFFBQXZFO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEYsZUFVRTtBQUFHLHlCQUFTLEVBQUMsMENBQWI7QUFBd0Qsb0JBQUksRUFBQyw2QkFBN0Q7QUFBMkYsc0JBQU0sRUFBQyxRQUFsRztBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkYsZUFpQ0U7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFDLHVGQUFiO0FBQXFHLG9CQUFJLEVBQUMsMkJBQTFHO0FBQXNJLHNCQUFNLEVBQUMsUUFBN0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFHLHlCQUFTLEVBQUMsdUZBQWI7QUFBcUcsb0JBQUksRUFBQywyQkFBMUc7QUFBc0ksc0JBQU0sRUFBQyxRQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBMkRFO0FBQVMsZUFBUyxFQUFDLDJCQUFuQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxxRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLG9CQUNJSCxPQUFPLENBQUNhLFdBQVIsSUFBdUJiLE9BQU8sQ0FBQ2EsV0FBUixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGdDQUNuRDtBQUFxQix1QkFBUyxFQUFDLDRCQUEvQjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFFQSxJQUFJLENBQUNDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx3Q0FDRTtBQUFBLDRCQUFLRCxJQUFJLENBQUNQO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsNEJBQUlPLElBQUksQ0FBQ1o7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBRywyQkFBUyxFQUFDLG1CQUFiO0FBQUEsNEJBQWtDWSxJQUFJLENBQUNFO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUEsZUFBVUYsSUFBSSxDQUFDUCxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG1EO0FBQUEsV0FBNUI7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0RGLGVBcUZFO0FBQVMsZUFBUyxFQUFDLGVBQW5CO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLHFHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVFFO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQXNCLG1CQUFHLEVBQUVVLDhEQUFVQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLGdGQUFkO0FBQUEsMEJBQ0dsQixPQUFPLENBQUNtQixVQUFSLENBQW1CQyxRQUFuQixDQUE0Qlo7QUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUcseUJBQVMsRUFBQyxvQ0FBYjtBQUFBLDBCQUNHUixPQUFPLENBQUNtQixVQUFSLENBQW1CQyxRQUFuQixDQUE0QmpCO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWNFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQXNCLG1CQUFHLEVBQUVrQiw4REFBVUE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLGdGQUFkO0FBQUEsNEJBQ0dyQixPQUFPLENBQUNtQixVQUFSLENBQW1CRyxPQUFuQixDQUEyQmQ7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFO0FBQUcsMkJBQVMsRUFBQyxvQ0FBYjtBQUFBLDRCQUNHUixPQUFPLENBQUNtQixVQUFSLENBQW1CRyxPQUFuQixDQUEyQm5CO0FBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsZUE2QkU7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGdDQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBc0IsbUJBQUcsRUFBRW9CLCtEQUFXQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLGdGQUFkO0FBQUEsMEJBQ0d2QixPQUFPLENBQUNtQixVQUFSLENBQW1CSyxRQUFuQixDQUE0QmhCO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFHLHlCQUFTLEVBQUMsb0NBQWI7QUFBQSwwQkFDR1IsT0FBTyxDQUFDbUIsVUFBUixDQUFtQkssUUFBbkIsQ0FBNEJyQjtBQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckZGO0FBQUEsa0JBREY7QUE4SUQsQ0FsSkQ7O0tBQU1ULFE7O0FBb0pTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YTRkYTBlZWQxNmUxNzdmNjEyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnNpdGVNaXhpbiBmcm9tICdAL2xpYnMvbWl4aW5zL1dlYnNpdGVNaXhpbidcbmltcG9ydCB7IGNvbnZlcnREYXRhUGFnZSB9IGZyb20gJ0AvbGlicy9jb252ZXJ0ZXJzL0hvbWVQYWdlQ29udmVydGVyJ1xuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tICdAL2xpYnMvY29uZmlnJ1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnXG5cbmltcG9ydCBGcm9uZW5kU3ZnIGZyb20gJ0AvYXNzZXRzL3N2Zy9mcm9uZW5kLnN2ZydcbmltcG9ydCBCYWNrZW5kU3ZnIGZyb20gJ0AvYXNzZXRzL3N2Zy9iYWNrZW5kLnN2ZydcbmltcG9ydCBEYXRhQmFzZVN2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvZGF0YWJhc2Uuc3ZnJ1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHdlYnNpdGUgfSkgPT4ge1xuICBjb25zdCBwYWdlRGF0YSA9IGdldFBhZ2VEYXRhKHdlYnNpdGUsICdwaHVuZ25sZy1ob21lJylcbiAgY29uc3QgeyBtZXRhLCBjb250ZW50IH0gPSBjb252ZXJ0RGF0YVBhZ2UocGFnZURhdGEpXG4gIGNvbnN0IGF2YXRhciA9ICcvYXZhdGFyLmpwZydcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0aXRsZTogYCR7bWV0YS50aXRsZX0g8J+RqPCfj73igI3wn5K7IFBodW5nIE5MR2AsXG4gICAgICAgICAgc2l0ZV9uYW1lOiBgJHttZXRhLnRpdGxlfWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtaW4taC1zY3JlZW4gcHgtNCBwdC0yNCBwYi04IG14LWF1dG8gdGV4dC1ibGFjayBsZzpwdC01NlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBoLWF1dG8gbWF4LXctM3hsIG14LWF1dG8gbXktMTZcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZVwiIGNsYXNzTmFtZT1cInctZnVsbCBteC02IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IHBiLTIgdGV4dC1jZW50ZXIgbWQ6cC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy00OCBoLTQ4IG14LWF1dG8gYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtZnVsbCBzaGFkb3cteGwgLW10LTI4XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdmF0YXJ9KWAgfX0+PC9kaXY+XG5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB0LTggdGV4dC14bCBmb250LWJvbGQgbGc6dGV4dC0zeGxcIj5cbiAgICAgICAgICAgICAgICA8VHlwZXdyaXRlclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmdzOiBbY29udGVudC53ZWxjb21lLm5hbWUsIGNvbnRlbnQud2VsY29tZS5qb2IsIGNvbnRlbnQud2VsY29tZS5sb2NhdGlvbl0sXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBwdC0zIG14LWF1dG8gYm9yZGVyLWItMiBib3JkZXItZ3JlZW4tNTAwXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtOCB0ZXh0LWJhc2VcIj57Y29udGVudC53ZWxjb21lLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy00LzUgcHktNCBteC1hdXRvIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTcwMCBsaW5rIGhvdmVyOnRleHQtZ3JlZW4tNTAwXCIgaHJlZj1cIm1haWx0bzpwaHVuZ25sZ0BnbWFpbC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhcyBmYS1lbnZlbG9wZS1vcGVuLXRleHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwIGxpbmsgaG92ZXI6dGV4dC1ncmVlbi01MDBcIiBocmVmPVwic2t5cGU6cGh1bmdubGc/Y2hhdFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC0yeGwgZmFiIGZhLXNreXBlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTcwMCBsaW5rIGhvdmVyOnRleHQtZ3JlZW4tNTAwXCIgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC0yeGwgZmFiIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwIGxpbmsgaG92ZXI6dGV4dC1ncmVlbi01MDBcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BodW5nbmxnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmYWIgZmEtZ2l0aHViXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtNCBweS0yIG14LTQgbXktMiBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1ncmVlbi03MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyZWVuLTkwMFwiIGhyZWY9XCJodHRwOi8vbXl1cC53b3JrL3BodW5nbmxnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICBIaXJlIG1lXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTQgcHktMiBteC00IG15LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctZ3JlZW4tNzAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmVlbi05MDBcIiBocmVmPVwibWFpbHRvOnBodW5nbmxnQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBtZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggYmctZ3JheS0xMDAgYm9yZGVyLWJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctNXhsIG0tOCBteC1hdXRvXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCBteS0yIHRleHQtM3hsIGZvbnQtYmxhY2sgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwIGxnOnRleHQtNXhsXCI+XG4gICAgICAgICAgICBFeHBlcmllbmNlc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtMSBweS0wIG14LWF1dG8gbXktMCBiZy1ncmF5LTUwMCByb3VuZGVkLXRcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVcIj5cbiAgICAgICAgICAgIHsgY29udGVudC5leHBlcmllbmNlcyAmJiBjb250ZW50LmV4cGVyaWVuY2VzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwidGltZWxpbmUtY29udGFpbmVyIHByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0ubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZWxpbmUtc3VidGl0bGVcIj57aXRlbS50aW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IGJvcmRlci1iXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LTV4bCBtLTggbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktMiB0ZXh0LTN4bCBmb250LWJsYWNrIGxlYWRpbmctdGlnaHQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCBsZzp0ZXh0LTV4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdoYXQgSSBjYW4gZG8/XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC0xIHB5LTAgbXgtYXV0byBteS0wIGJnLWdyYXktNTAwIHJvdW5kZWQtdFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTI4XCIgc3JjPXtGcm9uZW5kU3ZnfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwIGxnOnRleHQtM3hsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5mcm9udGVuZC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5mcm9udGVuZC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0yOFwiIHNyYz17QmFja2VuZFN2Z30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMyB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDAgbGc6dGV4dC0zeGwgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LndoYXRJQ2FuRG8uYmFja2VuZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTggdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5iYWNrZW5kLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMjhcIiBzcmM9e0RhdGFCYXNlU3ZnfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwIGxnOnRleHQtM3hsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5kYXRhYmFzZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5kYXRhYmFzZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFdlYnNpdGVNaXhpbi5nZXRTdGF0aWNQcm9wcygpXG5cbiAgcmV0dXJuIGRhdGFcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=