(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts__ManagementLayout"],{

/***/ "./public/logo_talaria.svg":
/*!*********************************!*\
  !*** ./public/logo_talaria.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo_talaria.2b8b7043.svg";

/***/ }),

/***/ "./src/layouts/LogOut/LogOut.jsx":
/*!***************************************!*\
  !*** ./src/layouts/LogOut/LogOut.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/menu/style */ "./node_modules/antd/es/menu/style/index.js");

var _menu = _interopRequireDefault(__webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js"));

__webpack_require__(/*! antd/es/avatar/style */ "./node_modules/antd/es/avatar/style/index.js");

var _avatar = _interopRequireDefault(__webpack_require__(/*! antd/es/avatar */ "./node_modules/antd/es/avatar/index.js"));

__webpack_require__(/*! antd/es/icon/style */ "./node_modules/antd/es/icon/style/index.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _LogOut = _interopRequireDefault(__webpack_require__(/*! ./LogOut.less */ "./src/layouts/LogOut/LogOut.less"));

var _dec, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AdminSignOut = (_dec = (0, _dva.connect)(), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(AdminSignOut, _Component);

  var _super = _createSuper(AdminSignOut);

  function AdminSignOut() {
    var _this;

    (0, _classCallCheck2.default)(this, AdminSignOut);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleQuit = function () {
      _this.props.dispatch({
        type: 'admin/signOut'
      });
    };

    return _this;
  }

  (0, _createClass2.default)(AdminSignOut, [{
    key: "render",
    value: function render() {
      var content = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: this.handleQuit
      }, /*#__PURE__*/_react.default.createElement(_icon.default, {
        className: _LogOut.default.iconLogOut,
        type: "logout"
      }), "Sign Out"));

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_menu.default, {
        mode: "vertical",
        className: _LogOut.default.dropDownSignOut
      }, /*#__PURE__*/_react.default.createElement(_menu.default.SubMenu, {
        key: "sub4",
        title: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_avatar.default, {
          className: _LogOut.default.adminAvatar,
          style: {
            backgroundColor: '#2AAEB7'
          },
          icon: /*#__PURE__*/_react.default.createElement(_icons.UserOutlined, {
            styles: {
              marginLeft: 10
            }
          })
        }), /*#__PURE__*/_react.default.createElement("span", null, "Admin"))
      }, /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
        key: "log-out"
      }, content))));
    }
  }]);
  return AdminSignOut;
}(_react.Component), _temp)) || _class);
var _default = AdminSignOut;
exports.default = _default;

/***/ }),

/***/ "./src/layouts/LogOut/LogOut.less":
/*!****************************************!*\
  !*** ./src/layouts/LogOut/LogOut.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropDownSignOut":"antd-pro-layouts-log-out-log-out-dropDownSignOut","adminAvatar":"antd-pro-layouts-log-out-log-out-adminAvatar","iconLogOut":"antd-pro-layouts-log-out-log-out-iconLogOut"};
    if(true) {
      // 1609233372391
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/layouts/ManagementLayout.jsx":
/*!******************************************!*\
  !*** ./src/layouts/ManagementLayout.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _proLayout = _interopRequireWildcard(__webpack_require__(/*! @ant-design/pro-layout */ "./node_modules/@ant-design/pro-layout/es/index.js"));

var _umi = __webpack_require__(/*! umi */ "./node_modules/umi/dist/index.esm.js");

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _Authorized = _interopRequireDefault(__webpack_require__(/*! @/utils/Authorized */ "./src/utils/Authorized.js"));

var _reactHelmetAsync = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");

var _logo_talaria = _interopRequireDefault(__webpack_require__(/*! ../../public/logo_talaria.svg */ "./public/logo_talaria.svg"));

var _ManagementLayout = _interopRequireDefault(__webpack_require__(/*! ./ManagementLayout.less */ "./src/layouts/ManagementLayout.less"));

var _LogOut = _interopRequireDefault(__webpack_require__(/*! ./LogOut/LogOut */ "./src/layouts/LogOut/LogOut.jsx"));

var _defaultSettings = _interopRequireDefault(__webpack_require__(/*! ../../config/defaultSettings */ "./config/defaultSettings.js"));

var _dec, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ManagementLayout = (_dec = (0, _dva.connect)(function (_ref) {
  var global = _ref.global,
      settings = _ref.settings;
  return {
    collapsed: global.collapsed,
    settings: settings
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ManagementLayout, _React$Component);

  var _super = _createSuper(ManagementLayout);

  function ManagementLayout() {
    var _this;

    (0, _classCallCheck2.default)(this, ManagementLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleMenuCollapse = function (payload) {
      var dispatch = _this.props.dispatch;
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: payload
      });
    };

    _this.menuItemRender = function (menuItemProps, defaultDom) {
      if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
        return defaultDom;
      } // if (menuItemProps.hidden) return;


      return /*#__PURE__*/_react.default.createElement(_umi.Link, {
        to: menuItemProps.path
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _ManagementLayout.default.textInSider
      }, menuItemProps.iconPath ? /*#__PURE__*/_react.default.createElement("img", {
        src: menuItemProps.iconPath,
        alt: "slots logo",
        className: _ManagementLayout.default.siderIcon
      }) : null, /*#__PURE__*/_react.default.createElement("span", {
        className: _ManagementLayout.default.andminSider
      }, menuItemProps.name)));
    };

    return _this;
  }

  (0, _createClass2.default)(ManagementLayout, [{
    key: "render",
    value: function render() {
      var _getMenuData = (0, _proLayout.getMenuData)(this.props.route.routes),
          breadcrumb = _getMenuData.breadcrumb;

      var title = (0, _proLayout.getPageTitle)({
        pathname: this.props.location.pathname,
        breadcrumb: breadcrumb,
        title: _defaultSettings.default.title
      }); // let currentPageName = '';

      var menuDataRender = function menuDataRender(menuList) {
        return menuList.map(function (item) {
          if (item.hidden) return;
          var localItem = (0, _objectSpread2.default)({}, item, {
            children: item.children ? menuDataRender(item.children) : []
          }); // if (window.location.href.includes(localItem.path)) {
          //   currentPageName = localItem.name;
          // }
          // eslint-disable-next-line consistent-return

          return _Authorized.default.check(item.authority, localItem, null);
        });
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _ManagementLayout.default.adminLayoutContainer
      }, /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
        filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/ManagementLayout.jsx",
        index: "0"
      }), /*#__PURE__*/_react.default.createElement(_reactHelmetAsync.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, title)), /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
        filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/ManagementLayout.jsx",
        index: "1"
      }), /*#__PURE__*/_react.default.createElement(_proLayout.default, (0, _extends2.default)({
        headerRender: function headerRender() {
          return null;
        } // headerRender={() => (
        //   <div className={styles.adminLayoutHeader}>
        //     <span className={styles.pageName}>
        //       {currentPageName
        //         .toLowerCase()
        //         .split(' ')
        //         .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        //         .join(' ')}
        //     </span>
        //     <Breadcrumb>
        //       <Breadcrumb.Item>
        //         <Link to="/dashboard">talent</Link>
        //       </Breadcrumb.Item>
        //     </Breadcrumb>
        //   </div>
        // )}
        ,
        menuHeaderRender: function menuHeaderRender() {
          return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
            src: _logo_talaria.default,
            alt: "talaria logo",
            className: _ManagementLayout.default.adminLayoutLogo
          }));
        } // breadcrumbRender={(routers = []) => [
        //   {
        //     path: '/',
        //     breadcrumbName: formatMessage({
        //       id: 'menu.home',
        //     }),
        //   },
        //   {
        //     path: '/',
        //     breadcrumbName: formatMessage({
        //       id: 'menu.home',
        //     }),
        //   },
        //   ...routers,
        // ]}
        ,
        siderWidth: 240,
        collapsed: false,
        onCollapse: this.handleMenuCollapse,
        menuItemRender: this.menuItemRender,
        menuDataRender: menuDataRender
      }, this.props), this.props.children), /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
        filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/ManagementLayout.jsx",
        index: "2"
      }), /*#__PURE__*/_react.default.createElement(_LogOut.default, null), /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
        filename: "/Users/nguyenan/Documents/talaria_frontend/src/layouts/ManagementLayout.jsx",
        index: "3"
      }));
    }
  }]);
  return ManagementLayout;
}(_react.default.Component), _temp)) || _class);
var _default = ManagementLayout;
exports.default = _default;

/***/ }),

/***/ "./src/layouts/ManagementLayout.less":
/*!*******************************************!*\
  !*** ./src/layouts/ManagementLayout.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"adminLayoutContainer":"antd-pro-layouts-management-layout-adminLayoutContainer","siderIcon":"antd-pro-layouts-management-layout-siderIcon","adminLayoutLogo":"antd-pro-layouts-management-layout-adminLayoutLogo","adminLayoutHeader":"antd-pro-layouts-management-layout-adminLayoutHeader","pageName":"antd-pro-layouts-management-layout-pageName","andminSider":"antd-pro-layouts-management-layout-andminSider"};
    if(true) {
      // 1609233370373
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ })

}]);
//# sourceMappingURL=layouts__ManagementLayout.async.js.map