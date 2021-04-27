(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts__BasicLayout"],{

/***/ "./src/layouts/BasicLayout.jsx":
/*!*************************************!*\
  !*** ./src/layouts/BasicLayout.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/result/style */ "./node_modules/antd/es/result/style/index.js");

var _result = _interopRequireDefault(__webpack_require__(/*! antd/es/result */ "./node_modules/antd/es/result/index.js"));

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _proLayout = __webpack_require__(/*! @ant-design/pro-layout */ "./node_modules/@ant-design/pro-layout/es/index.js");

var _reactHelmetAsync = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");

var _umi = __webpack_require__(/*! umi */ "./node_modules/umi/dist/index.esm.js");

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _Authorized = _interopRequireDefault(__webpack_require__(/*! @/utils/Authorized */ "./src/utils/Authorized.js"));

var _utils = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");

__webpack_require__(/*! ./BasicLayout.less */ "./src/layouts/BasicLayout.less");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var _defaultSettings = _interopRequireDefault(__webpack_require__(/*! ../../config/defaultSettings */ "./config/defaultSettings.js"));

_moment.default.locale('en', {
  week: {
    dow: 6
  }
});

var noMatch = /*#__PURE__*/_react.default.createElement(_result.default, {
  status: "403",
  title: "403",
  subTitle: "Sorry, you are not authorized to access this page.",
  extra: /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary"
  }, /*#__PURE__*/_react.default.createElement(_umi.Link, {
    to: "/user/signin"
  }, "Go to sign in page"))
});

var BasicLayout = function BasicLayout(props) {
  var children = props.children,
      _props$location = props.location,
      location = _props$location === void 0 ? {
    pathname: '/'
  } : _props$location,
      route = props.route;

  var _getMenuData = (0, _proLayout.getMenuData)(route.routes),
      breadcrumb = _getMenuData.breadcrumb;

  var title = (0, _proLayout.getPageTitle)({
    pathname: location.pathname,
    breadcrumb: breadcrumb,
    title: _defaultSettings.default.title
  });
  var authority = localStorage.getItem('authority');

  if (!authority || !authority.length) {
    _umi.router.push('/user/signin');
  } else if (window.location.href.endsWith('/user/signup')) {
    _umi.router.push('/user/signin');
  } else if (window.location.pathname === '/') {
    var authorityJson = JSON.parse(authority);

    if (authorityJson && authorityJson.length && authorityJson[0] === 'admin') {
      _umi.router.push('/administration/contact-management');
    } else if (authorityJson && authorityJson.length && authorityJson[0] === 'application') {
      _umi.router.push('/application/dashboard');
    } else {
      _umi.router.push('/application/dashboard');
    }
  }

  var authorized = (0, _utils.getAuthorityFromRouter)(props.route.routes, location.pathname || '/') || {
    authority: undefined
  };
  return /*#__PURE__*/_react.default.createElement(_reactHelmetAsync.HelmetProvider, null, /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
    filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/BasicLayout.jsx",
    index: "0"
  }), /*#__PURE__*/_react.default.createElement(_reactHelmetAsync.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: title
  })), /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
    filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/BasicLayout.jsx",
    index: "1"
  }), /*#__PURE__*/_react.default.createElement(_Authorized.default, {
    authority: authorized.authority,
    noMatch: noMatch
  }, children), /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
    filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/BasicLayout.jsx",
    index: "2"
  }));
};

var _default = (0, _dva.connect)(function (_ref) {
  var global = _ref.global,
      settings = _ref.settings;
  return {
    collapsed: global.collapsed,
    settings: settings
  };
})(BasicLayout);

exports.default = _default;

/***/ }),

/***/ "./src/layouts/BasicLayout.less":
/*!**************************************!*\
  !*** ./src/layouts/BasicLayout.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1609233370889
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailableCategories = exports.getListArticlesApplicationState = exports.arrayRange = exports.getSlotName = exports.isMayDuplicate = exports.getFileNameFromUrl = exports.getChapterNameByAlias = exports.getChapterByAlias = exports.getSeasonFilter = exports.getSeasonNameFromAlias = exports.getSeasonSources = exports.getChapters = exports.getSourceOfApplicationName = exports.getApplicationSources = exports.ymdDateFormat = exports.dmyDateFormat = exports.getRouteAuthority = exports.getAuthorityFromRouter = exports.getPageQuery = exports.isAntDesignProOrDev = exports.isAntDesignPro = exports.isUrl = void 0;

var _querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var _pathToRegexp = _interopRequireDefault(__webpack_require__(/*! path-to-regexp */ "./node_modules/umi-plugin-dva/node_modules/path-to-regexp/index.js"));

var _constant = __webpack_require__(/*! ../../config/constant */ "./config/constant.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

var isUrl = function isUrl(path) {
  return reg.test(path);
};

exports.isUrl = isUrl;

var isAntDesignPro = function isAntDesignPro() {
  if (false) {}

  return window.location.hostname === 'preview.pro.ant.design';
};

exports.isAntDesignPro = isAntDesignPro;

var isAntDesignProOrDev = function isAntDesignProOrDev() {
  var NODE_ENV = "development";

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};

exports.isAntDesignProOrDev = isAntDesignProOrDev;

var getPageQuery = function getPageQuery() {
  return (0, _querystring.parse)(window.location.href.split('?')[1]);
};
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */


exports.getPageQuery = getPageQuery;

var getAuthorityFromRouter = function getAuthorityFromRouter() {
  var router = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var pathname = arguments.length > 1 ? arguments[1] : undefined;
  var authority = router.find(function (_ref) {
    var routes = _ref.routes,
        _ref$path = _ref.path,
        path = _ref$path === void 0 ? '/' : _ref$path;
    return path && (0, _pathToRegexp.default)(path).exec(pathname) || routes && getAuthorityFromRouter(routes, pathname);
  });
  if (authority) return authority;
  return undefined;
};

exports.getAuthorityFromRouter = getAuthorityFromRouter;

var getRouteAuthority = function getRouteAuthority(path, routeData) {
  var authorities;
  routeData.forEach(function (route) {
    // match prefix
    if ((0, _pathToRegexp.default)("".concat(route.path, "/(.*)")).test("".concat(path, "/"))) {
      if (route.authority) {
        authorities = route.authority;
      } // exact match


      if (route.path === path) {
        authorities = route.authority || authorities;
      } // get children authority recursively


      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

exports.getRouteAuthority = getRouteAuthority;

var dmyDateFormat = function dmyDateFormat() {
  return 'DD/MM/YYYY';
};

exports.dmyDateFormat = dmyDateFormat;

var ymdDateFormat = function ymdDateFormat() {
  return 'YYYY/MM/DD';
};

exports.ymdDateFormat = ymdDateFormat;

var getApplicationSources = function getApplicationSources() {
  return [{
    alias: 'facebook_fanpage',
    name: 'Facebook Fanpage'
  }, {
    alias: 'grandline',
    name: 'Grandline'
  }, {
    alias: 'gu_Linkedin',
    name: 'GU Linkedin'
  }, {
    alias: 'itviec',
    name: 'ITviec'
  }, {
    alias: 'facebook',
    name: 'Facebook'
  }, {
    alias: 'linkedin',
    name: 'Linkedin'
  }, {
    alias: 'network',
    name: 'Network'
  }, {
    alias: 'referral',
    name: 'Referral'
  }, {
    alias: 'others',
    name: 'Others'
  }];
};

exports.getApplicationSources = getApplicationSources;

var getSourceOfApplicationName = function getSourceOfApplicationName(sourceAlias) {
  var sources = getApplicationSources();
  var source = sources.find(function (_ref2) {
    var alias = _ref2.alias;
    return alias === sourceAlias;
  });
  return source ? source.name : '';
};

exports.getSourceOfApplicationName = getSourceOfApplicationName;

var getChapters = function getChapters() {
  return [{
    alias: 'PA',
    name: 'Product Analysis'
  }, {
    alias: 'PD',
    name: 'Product Design'
  }, {
    alias: 'PM',
    name: 'Product Mobile Development'
  }, {
    alias: 'PF',
    name: 'Product Frontend Development'
  }, {
    alias: 'PB',
    name: 'Product Backend Development'
  }, {
    alias: 'PO',
    name: 'Product Operations'
  }, {
    alias: 'GA',
    name: 'Geek Acquisition'
  }, {
    alias: 'GD',
    name: 'Geek Development'
  }, {
    alias: 'GE',
    name: 'Geek Experience'
  }, {
    alias: 'GH',
    name: 'GEEK Hub'
  }, {
    alias: 'CD',
    name: 'Client Development'
  }, {
    alias: 'BO',
    name: 'Business Operations'
  }, {
    alias: 'BD',
    name: 'Business Design'
  }];
};

exports.getChapters = getChapters;

var getSeasonSources = function getSeasonSources() {
  return [{
    alias: 'spring2020',
    name: 'Spring 2020',
    enable: false
  }, {
    alias: 'summer2020',
    name: 'Summer 2020',
    enable: false
  }, {
    alias: 'autumn2020',
    name: 'Autumn 2020',
    enable: false
  }, {
    alias: 'winter2020',
    name: 'Winter 2020',
    enable: true
  }, {
    alias: 'spring2021',
    name: 'Spring 2021',
    enable: true
  }, {
    alias: 'summer2021',
    name: 'Summer 2021',
    enable: true
  }, {
    alias: 'autumn2021',
    name: 'Autumn 2021',
    enable: true
  }, {
    alias: 'winter2021',
    name: 'Winter 2021',
    enable: true
  }];
};

exports.getSeasonSources = getSeasonSources;

var getSeasonNameFromAlias = function getSeasonNameFromAlias(alias) {
  var seasons = getSeasonSources();
  var foundSeason = seasons.find(function (season) {
    return season.alias === alias;
  });
  if (!foundSeason) return alias;
  return foundSeason.name;
};

exports.getSeasonNameFromAlias = getSeasonNameFromAlias;

var getSeasonFilter = function getSeasonFilter() {
  var seasons = getSeasonSources();
  seasons[seasons.length] = {
    name: 'No season',
    alias: 'NO_SEASON'
  };
  return seasons.map(function (season) {
    return {
      text: season.name,
      value: season.alias
    };
  });
};

exports.getSeasonFilter = getSeasonFilter;

var getChapterByAlias = function getChapterByAlias(alias) {
  var chapters = getChapters(); // i mean that.  dont want to  witch to find()
  // eslint-disable-next-line no-restricted-syntax

  var _iterator = _createForOfIteratorHelper(chapters),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var chapter = _step.value;

      if (chapter.alias.localeCompare(alias) === 0) {
        return chapter;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};

exports.getChapterByAlias = getChapterByAlias;

var getChapterNameByAlias = function getChapterNameByAlias(alias) {
  var chapters = getChapters(); // i mean that.  dont want to  witch to find()
  // eslint-disable-next-line no-restricted-syntax

  var _iterator2 = _createForOfIteratorHelper(chapters),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var chapter = _step2.value;

      if (chapter.alias.localeCompare(alias) === 0) {
        return chapter.name;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return '';
};

exports.getChapterNameByAlias = getChapterNameByAlias;

var getFileNameFromUrl = function getFileNameFromUrl(url) {
  if (!url) return '';
  var lastPath = url.split('/').pop();
  return lastPath.split('?').shift();
};

exports.getFileNameFromUrl = getFileNameFromUrl;

var isMayDuplicate = function isMayDuplicate(application, applications) {
  return applications.find(function (_ref3) {
    var applicationCode = _ref3.applicationCode,
        email = _ref3.email,
        phone = _ref3.phone;
    if (application.applicationCode.localeCompare(applicationCode) === 0) return false;
    return application.email.localeCompare(email) === 0 || (application.phone || '').localeCompare(phone) === 0;
  });
};

exports.isMayDuplicate = isMayDuplicate;

var getSlotName = function getSlotName(slotType) {
  switch (slotType) {
    case _constant.SlotType.fullDay:
      return 'Full day interview';

    case _constant.SlotType.afternoon:
      return 'Afternoon interview';

    case _constant.SlotType.morning:
      return 'Morning interview';

    default:
      return '';
  }
};

exports.getSlotName = getSlotName;

var arrayRange = function arrayRange(start, stop, step) {
  return Array.from({
    length: (stop - start) / step + 1
  }, function (_, i) {
    return start + i * step;
  });
};

exports.arrayRange = arrayRange;

var getListArticlesApplicationState = function getListArticlesApplicationState() {
  return ['NEW', _constant.ApplicationState.phoneInterview, 'FACE_TO_FACE_INTERVIEW', _constant.ApplicationState.observationDay];
};

exports.getListArticlesApplicationState = getListArticlesApplicationState;

var getAvailableCategories = function getAvailableCategories(categories, currentApplication) {
  var currentApplicationState = currentApplication.state,
      isProcessing = currentApplication.isProcessing,
      consolidateResult = currentApplication.consolidateResult;

  if (!isProcessing || consolidateResult !== null || currentApplicationState === _constant.ApplicationState.success) {
    return categories.filter(function (category) {
      return category.applicationState === null;
    });
  }

  var states = getListArticlesApplicationState();
  if (states.indexOf(currentApplicationState) === states.length - 1) return categories;
  var availableStates = states.slice(0, states.indexOf(currentApplicationState) + 1);
  return categories.filter(function (category) {
    return category.applicationState === null || availableStates.includes(category.applicationState);
  });
};

exports.getAvailableCategories = getAvailableCategories;

/***/ })

}]);
//# sourceMappingURL=layouts__BasicLayout.async.js.map