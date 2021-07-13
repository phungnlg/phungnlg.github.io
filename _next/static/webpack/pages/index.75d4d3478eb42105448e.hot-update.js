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
                href: "#",
                "data-tippy-content": "@github_handle",
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
                href: "#",
                "data-tippy-content": "@facebook_handle",
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
                href: "#",
                "data-tippy-content": "@twitter_handle",
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
                href: "#",
                "data-tippy-content": "@github_handle",
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "px-4 py-2 mx-4 my-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
                children: "Hire me"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "px-4 py-2 mx-4 my-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900",
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
            }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ3ZWJzaXRlIiwicGFnZURhdGEiLCJnZXRQYWdlRGF0YSIsImNvbnZlcnREYXRhUGFnZSIsIm1ldGEiLCJjb250ZW50IiwiYXZhdGFyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNpdGVfbmFtZSIsImJhY2tncm91bmRJbWFnZSIsInN0cmluZ3MiLCJ3ZWxjb21lIiwibmFtZSIsImpvYiIsImxvY2F0aW9uIiwiYXV0b1N0YXJ0IiwibG9vcCIsImV4cGVyaWVuY2VzIiwibWFwIiwiaXRlbSIsImljb24iLCJ0aW1lIiwiRnJvbmVuZFN2ZyIsIndoYXRJQ2FuRG8iLCJmcm9udGVuZCIsIkJhY2tlbmRTdmciLCJiYWNrZW5kIiwiRGF0YUJhc2VTdmciLCJkYXRhYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0MsZ0VBQVcsQ0FBQ0YsT0FBRCxFQUFVLGVBQVYsQ0FBNUI7O0FBRGdDLHlCQUVORywwRkFBZSxDQUFDRixRQUFELENBRlQ7QUFBQSxNQUV4QkcsSUFGd0Isb0JBRXhCQSxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQixvQkFFbEJBLE9BRmtCOztBQUdoQyxNQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FEZDtBQUVFLGlCQUFXLEVBQUVILElBQUksQ0FBQ0ksV0FGcEI7QUFHRSxlQUFTLEVBQUU7QUFDVEQsYUFBSyxZQUFLSCxJQUFJLENBQUNHLEtBQVYsMERBREk7QUFFVEUsaUJBQVMsWUFBS0ws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QUFBQSxhQXJGRjtBQUFBLGtCQURGO0FBOElELENBbEpEOztLQUFNVCxROztBQW9KU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzVkNGQzNDc4ZWI0MjEwNTQ0OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJzaXRlTWl4aW4gZnJvbSAnQC9saWJzL21peGlucy9XZWJzaXRlTWl4aW4nXG5pbXBvcnQgeyBjb252ZXJ0RGF0YVBhZ2UgfSBmcm9tICdAL2xpYnMvY29udmVydGVycy9Ib21lUGFnZUNvbnZlcnRlcidcbmltcG9ydCB7IGdldFBhZ2VEYXRhIH0gZnJvbSAnQC9saWJzL2NvbmZpZydcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3R5cGV3cml0ZXItZWZmZWN0J1xuXG5pbXBvcnQgRnJvbmVuZFN2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvZnJvbmVuZC5zdmcnXG5pbXBvcnQgQmFja2VuZFN2ZyBmcm9tICdAL2Fzc2V0cy9zdmcvYmFja2VuZC5zdmcnXG5pbXBvcnQgRGF0YUJhc2VTdmcgZnJvbSAnQC9hc3NldHMvc3ZnL2RhdGFiYXNlLnN2ZydcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyB3ZWJzaXRlIH0pID0+IHtcbiAgY29uc3QgcGFnZURhdGEgPSBnZXRQYWdlRGF0YSh3ZWJzaXRlLCAncGh1bmdubGctaG9tZScpXG4gIGNvbnN0IHsgbWV0YSwgY29udGVudCB9ID0gY29udmVydERhdGFQYWdlKHBhZ2VEYXRhKVxuICBjb25zdCBhdmF0YXIgPSAnL2F2YXRhci5qcGcnXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXttZXRhLnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGU6IGAke21ldGEudGl0bGV9IPCfkajwn4+94oCN8J+SuyBQaHVuZyBOTEdgLFxuICAgICAgICAgIHNpdGVfbmFtZTogYCR7bWV0YS50aXRsZX1gXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbWluLWgtc2NyZWVuIHB4LTQgcHQtMjQgcGItOCBteC1hdXRvIHRleHQtYmxhY2sgbGc6cHQtNTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgaC1hdXRvIG1heC13LTN4bCBteC1hdXRvIG15LTE2XCI+XG4gICAgICAgICAgPGRpdiBpZD1cInByb2ZpbGVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBwYi0yIHRleHQtY2VudGVyIG1kOnAtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctNDggaC00OCBteC1hdXRvIGJnLWNlbnRlciBiZy1jb3ZlciByb3VuZGVkLWZ1bGwgc2hhZG93LXhsIC1tdC0yOFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXZhdGFyfSlgIH19PjwvZGl2PlxuXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC04IHRleHQteGwgZm9udC1ib2xkIGxnOnRleHQtM3hsXCI+XG4gICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogW2NvbnRlbnQud2VsY29tZS5uYW1lLCBjb250ZW50LndlbGNvbWUuam9iLCBjb250ZW50LndlbGNvbWUubG9jYXRpb25dLFxuICAgICAgICAgICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzUgcHQtMyBteC1hdXRvIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTUwMFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTggdGV4dC1iYXNlXCI+e2NvbnRlbnQud2VsY29tZS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctNC81IHB5LTQgbXgtYXV0byBtdC00XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDAgbGluayBob3Zlcjp0ZXh0LWdyZWVuLTUwMFwiIGhyZWY9XCIjXCIgZGF0YS10aXBweS1jb250ZW50PVwiQGdpdGh1Yl9oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhcyBmYS1lbnZlbG9wZS1vcGVuLXRleHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwIGxpbmsgaG92ZXI6dGV4dC1ncmVlbi01MDBcIiBocmVmPVwiI1wiIGRhdGEtdGlwcHktY29udGVudD1cIkBmYWNlYm9va19oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhYiBmYS1za3lwZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDAgbGluayBob3Zlcjp0ZXh0LWdyZWVuLTUwMFwiIGhyZWY9XCIjXCIgZGF0YS10aXBweS1jb250ZW50PVwiQHR3aXR0ZXJfaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDAgbGluayBob3Zlcjp0ZXh0LWdyZWVuLTUwMFwiIGhyZWY9XCIjXCIgZGF0YS10aXBweS1jb250ZW50PVwiQGdpdGh1Yl9oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQtMnhsIGZhYiBmYS1naXRodWJcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBteC00IG15LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctZ3JlZW4tNzAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmVlbi05MDBcIj5cbiAgICAgICAgICAgICAgICAgIEhpcmUgbWVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBteC00IG15LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctZ3JlZW4tNzAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmVlbi05MDBcIj5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgbWVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggYmctZ3JheS0xMDAgYm9yZGVyLWJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctNXhsIG0tOCBteC1hdXRvXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCBteS0yIHRleHQtM3hsIGZvbnQtYmxhY2sgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwIGxnOnRleHQtNXhsXCI+XG4gICAgICAgICAgICBFeHBlcmllbmNlc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtMSBweS0wIG14LWF1dG8gbXktMCBiZy1ncmF5LTUwMCByb3VuZGVkLXRcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVcIj5cbiAgICAgICAgICAgIHsgY29udGVudC5leHBlcmllbmNlcyAmJiBjb250ZW50LmV4cGVyaWVuY2VzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1jb250YWluZXIgcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lbGluZS1zdWJ0aXRsZVwiPntpdGVtLnRpbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggYm9yZGVyLWJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXctNXhsIG0tOCBteC1hdXRvXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCBteS0yIHRleHQtM3hsIGZvbnQtYmxhY2sgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwIGxnOnRleHQtNXhsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgV2hhdCBJIGNhbiBkbz9cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLTEgcHktMCBteC1hdXRvIG15LTAgYmctZ3JheS01MDAgcm91bmRlZC10XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMjhcIiBzcmM9e0Zyb25lbmRTdmd9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMyB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDAgbGc6dGV4dC0zeGwgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmZyb250ZW5kLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04IHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmZyb250ZW5kLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTI4XCIgc3JjPXtCYWNrZW5kU3ZnfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zIHRleHQtMnhsIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMCBsZzp0ZXh0LTN4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQud2hhdElDYW5Eby5iYWNrZW5kLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmJhY2tlbmQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0yOFwiIHNyYz17RGF0YUJhc2VTdmd9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTZcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMyB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDAgbGc6dGV4dC0zeGwgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmRhdGFiYXNlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04IHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudC53aGF0SUNhbkRvLmRhdGFiYXNlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgV2Vic2l0ZU1peGluLmdldFN0YXRpY1Byb3BzKClcblxuICByZXR1cm4gZGF0YVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==