(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["p__admin__TalentManagement__Detailtalent__Detailtalent"],{

/***/ "./src/pages/admin/TalentManagement/Detailtalent/Detailtalent.jsx":
/*!************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/Detailtalent.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/tabs/style */ "./node_modules/antd/es/tabs/style/index.js");

var _tabs = _interopRequireDefault(__webpack_require__(/*! antd/es/tabs */ "./node_modules/antd/es/tabs/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _GeneralInformation = _interopRequireDefault(__webpack_require__(/*! ./GeneralInformation */ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/index.jsx"));

var _HistoryOM = _interopRequireDefault(__webpack_require__(/*! ./HistoryOM */ "./src/pages/admin/TalentManagement/Detailtalent/HistoryOM/index.jsx"));

var _ValueProposition = _interopRequireDefault(__webpack_require__(/*! ./ValueProposition */ "./src/pages/admin/TalentManagement/Detailtalent/ValueProposition/index.jsx"));

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TalentDetail = (_dec = (0, _dva.connect)(function (_ref) {
  var admin = _ref.admin;
  return {
    admin: admin,
    talentObject: admin.getTalentById
  };
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TalentDetail, _React$Component);

  var _super = _createSuper(TalentDetail);

  function TalentDetail() {
    (0, _classCallCheck2.default)(this, TalentDetail);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TalentDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          dispatch = _this$props.dispatch,
          talentId = _this$props.talentId;
      dispatch({
        type: 'admin/getTalentById',
        payload: talentId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var talentObject = this.props.talentObject;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
        filename: "/Users/nguyenan/Documents/talaria_frontend/src/pages/admin/TalentManagement/Detailtalent/Detailtalent.jsx",
        index: "0"
      }), /*#__PURE__*/_react.default.createElement(_tabs.default, {
        defaultActiveKey: "information",
        centered: true
      }, /*#__PURE__*/_react.default.createElement(_tabs.default.TabPane, {
        tab: "General Information",
        key: "information"
      }, /*#__PURE__*/_react.default.createElement(_GeneralInformation.default, {
        talent: talentObject
      })), /*#__PURE__*/_react.default.createElement(_tabs.default.TabPane, {
        tab: "Value Proposition",
        key: "proposition"
      }, /*#__PURE__*/_react.default.createElement(_ValueProposition.default, {
        talent: talentObject
      })), /*#__PURE__*/_react.default.createElement(_tabs.default.TabPane, {
        tab: "History Opportunity Matching",
        key: "history"
      }, /*#__PURE__*/_react.default.createElement(_HistoryOM.default, {
        talent: talentObject
      }))), /*#__PURE__*/_react.default.createElement(GUmiUIFlag, {
        filename: "/Users/nguyenan/Documents/talaria_frontend/src/pages/admin/TalentManagement/Detailtalent/Detailtalent.jsx",
        index: "1"
      }));
    }
  }]);
  return TalentDetail;
}(_react.default.Component)) || _class);
var _default = TalentDetail;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/AddValidation.jsx":
/*!******************************************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/AddValidation.jsx ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/modal/style */ "./node_modules/antd/es/modal/style/index.js");

var _modal = _interopRequireDefault(__webpack_require__(/*! antd/es/modal */ "./node_modules/antd/es/modal/index.js"));

__webpack_require__(/*! antd/es/row/style */ "./node_modules/antd/es/row/style/index.js");

var _row = _interopRequireDefault(__webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js"));

__webpack_require__(/*! antd/es/col/style */ "./node_modules/antd/es/col/style/index.js");

var _col = _interopRequireDefault(__webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js"));

__webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");

var _form = _interopRequireDefault(__webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js"));

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

__webpack_require__(/*! antd/es/select/style */ "./node_modules/antd/es/select/style/index.js");

var _select = _interopRequireDefault(__webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js"));

__webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");

var _input = _interopRequireDefault(__webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _dec, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextArea = _input.default.TextArea;
var Option = _select.default.Option;
var AddValidation = (_dec = (0, _dva.connect)(function (_ref) {
  var admin = _ref.admin,
      loading = _ref.loading;
  return {
    listPIC: admin.pic,
    listStatus: admin.listStatus,
    talent: admin.oneTalent,
    isLoadingAddNote: loading.effects['admin/addCoreValue']
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AddValidation, _React$Component);

  var _super = _createSuper(AddValidation);

  function AddValidation(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AddValidation);
    _this = _super.call(this, props);
    _this.formRef = _react.default.createRef();

    _this.onSubmit = function () {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          talent = _this$props.talent,
          titleCoreValue = _this$props.titleCoreValue;

      _this.formRef.current.validateFields().then(function () {
        var value = (0, _objectSpread2.default)({}, _this.formRef.current.getFieldValue());
        value.talentId = talent.id;
        value.category = titleCoreValue.toUpperCase();
        value.verification = value.verification ? value.verification : '';
        dispatch({
          type: 'admin/addCoreValue',
          payload: value
        }).then(function () {
          _this.setState({
            visible: false
          });

          _this.formRef.current.resetFields();
        });
      }).catch(function (info) {
        console.log('Validate Failed:', info);
      });
    };

    _this.onCancel = function () {
      _this.setState({
        visible: false
      });

      _this.formRef.current.resetFields();
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  (0, _createClass2.default)(AddValidation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          listPIC = _this$props2.listPIC,
          listStatus = _this$props2.listStatus,
          titleCoreValue = _this$props2.titleCoreValue;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "primary",
        onClick: function onClick() {
          _this2.setState({
            visible: true
          });
        },
        icon: /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null)
      }, "New notes"), /*#__PURE__*/_react.default.createElement(_modal.default, {
        visible: this.state.visible,
        title: "Create a new validation for ".concat(titleCoreValue),
        okText: "Create",
        cancelText: "Cancel",
        onCancel: this.onCancel,
        footer: [/*#__PURE__*/_react.default.createElement(_button.default, {
          key: "back",
          onClick: this.onCancel
        }, "Cancel"), /*#__PURE__*/_react.default.createElement(_button.default, {
          key: "submit",
          form: "formAddNode",
          htmlType: "submit",
          type: "primary",
          loading: this.props.isLoadingAddNote,
          onClick: this.onSubmit
        }, "Submit")]
      }, /*#__PURE__*/_react.default.createElement(_form.default, {
        ref: this.formRef,
        layout: "vertical",
        id: "formAddNode"
      }, /*#__PURE__*/_react.default.createElement(_row.default, null, /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 8
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        label: "Status",
        name: "status",
        rules: [{
          required: true,
          message: 'Please choose status'
        }]
      }, /*#__PURE__*/_react.default.createElement(_select.default, {
        placeholder: "select status"
      }, listStatus.map(function (status) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: status
        }, status);
      })))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 1
      }), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 8
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        label: "PIC",
        name: "picId",
        rules: [{
          required: true,
          message: 'Please choose pic'
        }]
      }, /*#__PURE__*/_react.default.createElement(_select.default, {
        placeholder: "select pic"
      }, listPIC.map(function (pic) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: pic.id
        }, pic.name);
      }))))), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "assumption",
        label: "Assumption",
        rules: [{
          required: true,
          message: 'Please input assumption!'
        }]
      }, /*#__PURE__*/_react.default.createElement(TextArea, {
        rows: 4
      })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "verification",
        label: "Verification"
      }, /*#__PURE__*/_react.default.createElement(TextArea, {
        rows: 4
      })))));
    }
  }]);
  return AddValidation;
}(_react.default.Component), _temp)) || _class);
var _default = AddValidation;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/CoreValue.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/CoreValue.jsx ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/row/style */ "./node_modules/antd/es/row/style/index.js");

var _row = _interopRequireDefault(__webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js"));

__webpack_require__(/*! antd/es/col/style */ "./node_modules/antd/es/col/style/index.js");

var _col = _interopRequireDefault(__webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Validation = _interopRequireDefault(__webpack_require__(/*! ./Validation */ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/Validation.jsx"));

var _AddValidation = _interopRequireDefault(__webpack_require__(/*! ./AddValidation */ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/AddValidation.jsx"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CoreValue = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CoreValue, _React$Component);

  var _super = _createSuper(CoreValue);

  function CoreValue() {
    (0, _classCallCheck2.default)(this, CoreValue);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CoreValue, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          titleCoreValue = _this$props.titleCoreValue,
          listValidation = _this$props.listValidation;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_row.default, null, /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 20
      }, /*#__PURE__*/_react.default.createElement("h3", {
        style: {
          fontWeight: 'bold'
        }
      }, titleCoreValue)), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 4
      }, /*#__PURE__*/_react.default.createElement(_AddValidation.default, {
        titleCoreValue: titleCoreValue
      }))), /*#__PURE__*/_react.default.createElement("div", null, listValidation.map(function (obj) {
        return /*#__PURE__*/_react.default.createElement(_Validation.default, {
          key: obj.id,
          validation: obj,
          titleCoreValue: titleCoreValue
        });
      })));
    }
  }]);
  return CoreValue;
}(_react.default.Component);

var _default = CoreValue;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/Validation.jsx":
/*!***************************************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/Validation.jsx ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/row/style */ "./node_modules/antd/es/row/style/index.js");

var _row = _interopRequireDefault(__webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js"));

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js"));

__webpack_require__(/*! antd/es/date-picker/style */ "./node_modules/antd/es/date-picker/style/index.js");

var _datePicker = _interopRequireDefault(__webpack_require__(/*! antd/es/date-picker */ "./node_modules/antd/es/date-picker/index.js"));

__webpack_require__(/*! antd/es/col/style */ "./node_modules/antd/es/col/style/index.js");

var _col = _interopRequireDefault(__webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js"));

__webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");

var _form = _interopRequireDefault(__webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

__webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");

var _input = _interopRequireDefault(__webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js"));

__webpack_require__(/*! antd/es/select/style */ "./node_modules/antd/es/select/style/index.js");

var _select = _interopRequireDefault(__webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var _dec, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Option = _select.default.Option;
var TextArea = _input.default.TextArea;
var Validation = (_dec = (0, _dva.connect)(function (_ref) {
  var admin = _ref.admin,
      loading = _ref.loading;
  return {
    listPIC: admin.pic,
    listStatus: admin.listStatus,
    isLoadingUpdateCoreValue: loading.effects['admin/updateCoreValue']
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Validation, _React$Component);

  var _super = _createSuper(Validation);

  function Validation(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Validation);
    _this = _super.call(this, props);
    _this.formRef = _react.default.createRef();

    _this.handleCollapse = function (e) {
      e.preventDefault();

      _this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        isCollapse: !_this.state.isCollapse
      });
    };

    _this.resetFormField = function () {
      _this.formRef.current.resetFields();
    };

    _this.onFinish = function (value) {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          titleCoreValue = _this$props.titleCoreValue,
          validation = _this$props.validation;
      var newValue = (0, _objectSpread2.default)({}, value);
      newValue.category = titleCoreValue.toUpperCase();
      delete newValue.on;
      dispatch({
        type: 'admin/updateCoreValue',
        payload: {
          header: value,
          valueId: validation.id
        }
      }).then(function () {
        _this.setState({
          isCollapse: true
        });

        _this.formRef.current.resetFields();
      });
    };

    _this.state = {
      isCollapse: true
    };
    return _this;
  }

  (0, _createClass2.default)(Validation, [{
    key: "render",
    value: function render() {
      var _validation$pic;

      var _this$props2 = this.props,
          listStatus = _this$props2.listStatus,
          listPIC = _this$props2.listPIC,
          validation = _this$props2.validation;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_form.default, {
        ref: this.formRef,
        onFinish: this.onFinish,
        id: validation.id,
        layout: "vertical"
      }, /*#__PURE__*/_react.default.createElement(_row.default, {
        gutter: 16
      }, /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 5
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "status",
        label: /*#__PURE__*/_react.default.createElement("span", null, "Status"),
        initialValue: validation.status,
        rules: [{
          required: true,
          message: 'Please choose status'
        }]
      }, /*#__PURE__*/_react.default.createElement(_select.default, null, listStatus.map(function (status) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: status
        }, status);
      })))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 5
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "picId",
        label: "PIC",
        initialValue: (_validation$pic = validation.pic) === null || _validation$pic === void 0 ? void 0 : _validation$pic.id,
        rules: [{
          required: true,
          message: 'Please choose pic'
        }]
      }, /*#__PURE__*/_react.default.createElement(_select.default, null, listPIC.map(function (pic) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: pic.id,
          value: pic.id
        }, pic.name);
      })))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 5
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "on",
        label: "On",
        initialValue: (0, _moment.default)((0, _moment.default)(validation.updateAt).format('DD/MM/YYYY'), 'DD/MM/YYYY')
      }, /*#__PURE__*/_react.default.createElement(_datePicker.default, {
        format: "DD/MM/YYYY",
        disabled: true
      }))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 4
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        onClick: this.handleCollapse,
        type: "link",
        icon: this.state.isCollapse === true ? /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.UpOutlined, null)
      }, this.state.isCollapse ? 'Expand' : 'Collapse'))), /*#__PURE__*/_react.default.createElement(_row.default, {
        gutter: 16,
        style: {
          display: this.state.isCollapse === true ? 'none' : ''
        }
      }, /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 12
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "assumption",
        label: "Assumption",
        initialValue: validation.assumption,
        rules: [{
          required: true,
          message: 'Please input assumption'
        }]
      }, /*#__PURE__*/_react.default.createElement(TextArea, {
        rows: 4
      }))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 12
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        name: "verification",
        label: "Verification",
        initialValue: validation.verification
      }, /*#__PURE__*/_react.default.createElement(TextArea, {
        rows: 4
      }))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 4
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, null, /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "primary",
        htmlType: "submit",
        loading: this.props.isLoadingUpdateCoreValue
      }, "Update"))))));
    }
  }]);
  return Validation;
}(_react.default.Component), _temp)) || _class);
var _default = Validation;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/index.jsx":
/*!**********************************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/index.jsx ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/divider/style */ "./node_modules/antd/es/divider/style/index.js");

var _divider = _interopRequireDefault(__webpack_require__(/*! antd/es/divider */ "./node_modules/antd/es/divider/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _CoreValue = _interopRequireDefault(__webpack_require__(/*! ./CoreValue */ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/CoreValue.jsx"));

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AreaCoreValue = (_dec = (0, _dva.connect)(function (state) {
  return {
    talent: state.admin.oneTalent
  };
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(AreaCoreValue, _React$Component);

  var _super = _createSuper(AreaCoreValue);

  function AreaCoreValue() {
    (0, _classCallCheck2.default)(this, AreaCoreValue);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AreaCoreValue, [{
    key: "render",
    value: function render() {
      var talent = this.props.talent;
      var workable = talent.valueValidation.filter(function (obj) {
        return obj.category === 'WORKABLE';
      });
      var valuable = talent.valueValidation.filter(function (obj) {
        return obj.category === 'VALUABLE';
      });
      var fittable = talent.valueValidation.filter(function (obj) {
        return obj.category === 'FITTABLE';
      });
      var growable = talent.valueValidation.filter(function (obj) {
        return obj.category === 'GROWABLE';
      });
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_CoreValue.default, {
        titleCoreValue: "Workable",
        listValidation: workable
      }), /*#__PURE__*/_react.default.createElement(_divider.default, {
        dashed: "true"
      }), /*#__PURE__*/_react.default.createElement(_CoreValue.default, {
        titleCoreValue: "Valuable",
        listValidation: valuable
      }), /*#__PURE__*/_react.default.createElement(_divider.default, {
        dashed: "true"
      }), /*#__PURE__*/_react.default.createElement(_CoreValue.default, {
        titleCoreValue: "Fittable",
        listValidation: fittable
      }), /*#__PURE__*/_react.default.createElement(_divider.default, {
        dashed: "true"
      }), /*#__PURE__*/_react.default.createElement(_CoreValue.default, {
        titleCoreValue: "Growable",
        listValidation: growable
      }));
    }
  }]);
  return AreaCoreValue;
}(_react.default.Component)) || _class);
var _default = AreaCoreValue;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/index.jsx":
/*!************************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/index.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/divider/style */ "./node_modules/antd/es/divider/style/index.js");

var _divider = _interopRequireDefault(__webpack_require__(/*! antd/es/divider */ "./node_modules/antd/es/divider/index.js"));

__webpack_require__(/*! antd/es/row/style */ "./node_modules/antd/es/row/style/index.js");

var _row = _interopRequireDefault(__webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js"));

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js"));

__webpack_require__(/*! antd/es/select/style */ "./node_modules/antd/es/select/style/index.js");

var _select = _interopRequireDefault(__webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js"));

__webpack_require__(/*! antd/es/col/style */ "./node_modules/antd/es/col/style/index.js");

var _col = _interopRequireDefault(__webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js"));

__webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");

var _form = _interopRequireDefault(__webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js"));

__webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");

var _input = _interopRequireDefault(__webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _CoreValue = _interopRequireDefault(__webpack_require__(/*! ./CoreValue */ "./src/pages/admin/TalentManagement/Detailtalent/GeneralInformation/CoreValue/index.jsx"));

var _dec, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var GeneralInformationTab = (_dec = (0, _dva.connect)(function (state) {
  return {
    listContact: state.admin.allContact,
    talent: state.admin.oneTalent
  };
}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(GeneralInformationTab, _React$Component);

  var _super = _createSuper(GeneralInformationTab);

  function GeneralInformationTab(props) {
    var _this;

    (0, _classCallCheck2.default)(this, GeneralInformationTab);
    _this = _super.call(this, props);
    _this.formRef = _react.default.createRef();
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(GeneralInformationTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: 'admin/getAllTags'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var listContact = this.props.listContact;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_form.default, {
        ref: this.formRef,
        initialValues: {
          fullName: this.props.talent.contact.fullName,
          linkedContact: this.props.talent.contact.id,
          generalNotes: this.props.talent.generalNotes
        },
        layout: "vertical"
      }, /*#__PURE__*/_react.default.createElement(_row.default, {
        gutter: 16
      }, /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 10
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        label: "Full Name",
        name: "fullName"
      }, /*#__PURE__*/_react.default.createElement(_input.default, null))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 10
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        label: "Linked Contact",
        name: "linkedContact"
      }, /*#__PURE__*/_react.default.createElement(_select.default, {
        placeholder: "select linked contact",
        onChange: this.changeLinkedContact
      }, listContact.map(function (contact) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: contact.id
        }, contact.fullName);
      })))), /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 4
      }, /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "link",
        onClick: this.showContactForm,
        style: {
          height: '100%'
        }
      }, "View contact"))), /*#__PURE__*/_react.default.createElement(_row.default, null, /*#__PURE__*/_react.default.createElement(_col.default, {
        span: 24
      }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
        label: "Notes from talent",
        name: "generalNotes"
      }, /*#__PURE__*/_react.default.createElement(TextArea, {
        placeholder: "Notes",
        rows: 3
      }))))), /*#__PURE__*/_react.default.createElement(_divider.default, {
        style: {
          margin: '0 0 10 0'
        }
      }), /*#__PURE__*/_react.default.createElement(_CoreValue.default, null));
    }
  }]);
  return GeneralInformationTab;
}(_react.default.Component), _temp)) || _class);
var _default = GeneralInformationTab;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/HistoryOM/index.jsx":
/*!***************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/HistoryOM/index.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HistoryOMTab = (_dec = (0, _dva.connect)(function (_ref) {
  var admin = _ref.admin;
  return {
    admin: admin
  };
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HistoryOMTab, _React$Component);

  var _super = _createSuper(HistoryOMTab);

  function HistoryOMTab() {
    (0, _classCallCheck2.default)(this, HistoryOMTab);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(HistoryOMTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: 'admin/getAllTags'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "Table History OM");
    }
  }]);
  return HistoryOMTab;
}(_react.default.Component)) || _class);
var _default = HistoryOMTab;
exports.default = _default;

/***/ }),

/***/ "./src/pages/admin/TalentManagement/Detailtalent/ValueProposition/index.jsx":
/*!**********************************************************************************!*\
  !*** ./src/pages/admin/TalentManagement/Detailtalent/ValueProposition/index.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/dist/index.esm.js");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ValuePropositionTab = (_dec = (0, _dva.connect)(function (_ref) {
  var admin = _ref.admin;
  return {
    admin: admin
  };
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ValuePropositionTab, _React$Component);

  var _super = _createSuper(ValuePropositionTab);

  function ValuePropositionTab() {
    (0, _classCallCheck2.default)(this, ValuePropositionTab);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ValuePropositionTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: 'admin/getAllTags'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "Value Proposition");
    }
  }]);
  return ValuePropositionTab;
}(_react.default.Component)) || _class);
var _default = ValuePropositionTab;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=p__admin__TalentManagement__Detailtalent__Detailtalent.async.js.map