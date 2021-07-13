webpackHotUpdate_N_E("pages/index",{

/***/ "./libs/converters/HomePageConverter.js":
/*!**********************************************!*\
  !*** ./libs/converters/HomePageConverter.js ***!
  \**********************************************/
/*! exports provided: convertDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataPage", function() { return convertDataPage; });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.assign */ "./node_modules/lodash.assign/index.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/config */ "./libs/config.js");


var welcomeDefault = {
  name: 'Phung NLG',
  description: 'description',
  job: 'job',
  location: 'location',
  upwork: '',
  email: '',
  skype: '',
  github: '',
  twitter: ''
};
var whatICanDoDefault = {
  frontend: {
    name: 'FRONTEND',
    description: "description"
  },
  backend: {
    name: 'BACKEND',
    description: "description"
  },
  database: {
    name: 'DATABASE',
    description: "description"
  },
  moreThings: {
    name: 'MORE THINGS',
    description: "description"
  }
};

var convertDataPage = function convertDataPage(data) {
  var welcomeCustomField = data.custom_fields ? Object(_libs_config__WEBPACK_IMPORTED_MODULE_1__["getByName"])(data.custom_fields, 'welcome') : {};
  var whatICanDoCustomField = data.custom_fields ? Object(_libs_config__WEBPACK_IMPORTED_MODULE_1__["getByName"])(data.custom_fields, 'whatICanDo') : {};
  var experiencesCustomField = data.custom_fields ? Object(_libs_config__WEBPACK_IMPORTED_MODULE_1__["getByName"])(data.custom_fields, 'experiences') : [];
  var result = {
    meta: {
      title: data.title,
      description: data.description
    },
    content: {
      name: 'Contact',
      welcome: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()(welcomeDefault, welcomeCustomField.json),
      whatICanDo: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()(whatICanDoDefault, whatICanDoCustomField.json),
      experiences: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()([], experiencesCustomField.json)
    }
  };
  return result;
};



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9jb252ZXJ0ZXJzL0hvbWVQYWdlQ29udmVydGVyLmpzIl0sIm5hbWVzIjpbIndlbGNvbWVEZWZhdWx0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiam9iIiwibG9jYXRpb24iLCJ1cHdvcmsiLCJlbWFpbCIsInNreXBlIiwiZ2l0aHViIiwidHdpdHRlciIsIndoYXRJQ2FuRG9EZWZhdWx0IiwiZnJvbnRlbmQiLCJiYWNrZW5kIiwiZGF0YWJhc2UiLCJtb3JlVGhpbmdzIiwiY29udmVydERhdGFQYWdlIiwiZGF0YSIsIndlbGNvbWVDdXN0b21GaWVsZCIsImN1c3RvbV9maWVsZHMiLCJnZXRCeU5hbWUiLCJ3aGF0SUNhbkRvQ3VzdG9tRmllbGQiLCJleHBlcmllbmNlc0N1c3RvbUZpZWxkIiwicmVzdWx0IiwibWV0YSIsInRpdGxlIiwiY29udGVudCIsIndlbGNvbWUiLCJhc3NpZ24iLCJqc29uIiwid2hhdElDYW5EbyIsImV4cGVyaWVuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUc7QUFDakJDLE1BQUksRUFBRSxXQURXO0FBRWpCQyxhQUFXLEVBQUUsYUFGSTtBQUdqQkMsS0FBRyxFQUFFLEtBSFk7QUFJakJDLFVBQVEsRUFBRSxVQUpPO0FBS2pCQyxRQUFNLEVBQUUsRUFMUztBQU1qQkMsT0FBSyxFQUFFLEVBTlU7QUFPakJDLE9BQUssRUFBRSxFQVBVO0FBUWpCQyxRQUFNLEVBQUUsRUFSUztBQVNqQkMsU0FBTyxFQUFFO0FBVFEsQ0FBckI7QUFZQSxJQUFJQyxpQkFBaUIsR0FBRztBQUNwQkMsVUFBUSxFQUFFO0FBQ05WLFFBQUksRUFBRSxVQURBO0FBRU5DLGVBQVc7QUFGTCxHQURVO0FBS3BCVSxTQUFPLEVBQUU7QUFDTFgsUUFBSSxFQUFFLFNBREQ7QUFFTEMsZUFBVztBQUZOLEdBTFc7QUFTcEJXLFVBQVEsRUFBRTtBQUNOWixRQUFJLEVBQUUsVUFEQTtBQUVOQyxlQUFXO0FBRkwsR0FUVTtBQWFwQlksWUFBVSxFQUFFO0FBQ1JiLFFBQUksRUFBRSxhQURFO0FBRVJDLGVBQVc7QUFGSDtBQWJRLENBQXhCOztBQW1CQSxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBVTtBQUM5QixNQUFJQyxrQkFBa0IsR0FBR0QsSUFBSSxDQUFDRSxhQUFMLEdBQXFCQyw4REFBUyxDQUFDSCxJQUFJLENBQUNFLGFBQU4sRUFBcUIsU0FBckIsQ0FBOUIsR0FBZ0UsRUFBekY7QUFDQSxNQUFJRSxxQkFBcUIsR0FBR0osSUFBSSxDQUFDRSxhQUFMLEdBQXFCQyw4REFBUyxDQUFDSCxJQUFJLENBQUNFLGFBQU4sRUFBcUIsWUFBckIsQ0FBOUIsR0FBbUUsRUFBL0Y7QUFDQSxNQUFJRyxzQkFBc0IsR0FBR0wsSUFBSSxDQUFDRSxhQUFMLEdBQXFCQyw4REFBUyxDQUFDSCxJQUFJLENBQUNFLGFBQU4sRUFBcUIsYUFBckIsQ0FBOUIsR0FBb0UsRUFBakc7QUFFQSxNQUFJSSxNQUFNLEdBQUc7QUFDVEMsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRVIsSUFBSSxDQUFDUSxLQURWO0FBRUZ0QixpQkFBVyxFQUFFYyxJQUFJLENBQUNkO0FBRmhCLEtBREc7QUFLVHVCLFdBQU8sRUFBRTtBQUNMeEIsVUFBSSxFQUFFLFNBREQ7QUFFTHlCLGFBQU8sRUFBRUMsb0RBQU0sQ0FBQzNCLGNBQUQsRUFBaUJpQixrQkFBa0IsQ0FBQ1csSUFBcEMsQ0FGVjtBQUdMQyxnQkFBVSxFQUFFRixvREFBTSxDQUFDakIsaUJBQUQsRUFBb0JVLHFCQUFxQixDQUFDUSxJQUExQyxDQUhiO0FBSUxFLGlCQUFXLEVBQUVILG9EQUFNLENBQUMsRUFBRCxFQUFLTixzQkFBc0IsQ0FBQ08sSUFBNUI7QUFKZDtBQUxBLEdBQWI7QUFhQSxTQUFPTixNQUFQO0FBQ0gsQ0FuQkQ7O0FBcUJBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzMzY3ZDM5NDBjY2RhYTcwOTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzaWduIGZyb20gJ2xvZGFzaC5hc3NpZ24nXHJcbmltcG9ydCB7IGdldEJ5TmFtZSB9IGZyb20gJ0AvbGlicy9jb25maWcnXHJcblxyXG5sZXQgd2VsY29tZURlZmF1bHQgPSB7XHJcbiAgICBuYW1lOiAnUGh1bmcgTkxHJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgam9iOiAnam9iJyxcclxuICAgIGxvY2F0aW9uOiAnbG9jYXRpb24nLFxyXG4gICAgdXB3b3JrOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHNreXBlOiAnJyxcclxuICAgIGdpdGh1YjogJycsXHJcbiAgICB0d2l0dGVyOiAnJ1xyXG59XHJcblxyXG5sZXQgd2hhdElDYW5Eb0RlZmF1bHQgPSB7XHJcbiAgICBmcm9udGVuZDoge1xyXG4gICAgICAgIG5hbWU6ICdGUk9OVEVORCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbmAsXHJcbiAgICB9LFxyXG4gICAgYmFja2VuZDoge1xyXG4gICAgICAgIG5hbWU6ICdCQUNLRU5EJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYGRlc2NyaXB0aW9uYCxcclxuICAgIH0sXHJcbiAgICBkYXRhYmFzZToge1xyXG4gICAgICAgIG5hbWU6ICdEQVRBQkFTRScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbmAsXHJcbiAgICB9LFxyXG4gICAgbW9yZVRoaW5nczoge1xyXG4gICAgICAgIG5hbWU6ICdNT1JFIFRISU5HUycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbmAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbnZlcnREYXRhUGFnZSA9IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgd2VsY29tZUN1c3RvbUZpZWxkID0gZGF0YS5jdXN0b21fZmllbGRzID8gZ2V0QnlOYW1lKGRhdGEuY3VzdG9tX2ZpZWxkcywgJ3dlbGNvbWUnKSA6IHt9XHJcbiAgICBsZXQgd2hhdElDYW5Eb0N1c3RvbUZpZWxkID0gZGF0YS5jdXN0b21fZmllbGRzID8gZ2V0QnlOYW1lKGRhdGEuY3VzdG9tX2ZpZWxkcywgJ3doYXRJQ2FuRG8nKSA6IHt9XHJcbiAgICBsZXQgZXhwZXJpZW5jZXNDdXN0b21GaWVsZCA9IGRhdGEuY3VzdG9tX2ZpZWxkcyA/IGdldEJ5TmFtZShkYXRhLmN1c3RvbV9maWVsZHMsICdleHBlcmllbmNlcycpIDogW11cclxuXHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ29udGFjdCcsXHJcbiAgICAgICAgICAgIHdlbGNvbWU6IGFzc2lnbih3ZWxjb21lRGVmYXVsdCwgd2VsY29tZUN1c3RvbUZpZWxkLmpzb24pLFxyXG4gICAgICAgICAgICB3aGF0SUNhbkRvOiBhc3NpZ24od2hhdElDYW5Eb0RlZmF1bHQsIHdoYXRJQ2FuRG9DdXN0b21GaWVsZC5qc29uKSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZXM6IGFzc2lnbihbXSwgZXhwZXJpZW5jZXNDdXN0b21GaWVsZC5qc29uKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY29udmVydERhdGFQYWdlXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9