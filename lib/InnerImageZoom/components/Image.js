"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Sentry = _interopRequireDefault(require("react-activity/dist/Sentry"));

require("react-activity/dist/Sentry.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Image = function Image(_ref) {
  var src = _ref.src,
      sources = _ref.sources,
      width = _ref.width,
      height = _ref.height,
      hasSpacer = _ref.hasSpacer,
      imgAttributes = _ref.imgAttributes,
      isZoomed = _ref.isZoomed,
      fadeDuration = _ref.fadeDuration,
      isLoading = _ref.isLoading,
      overrideLoaderstyle = _ref.overrideLoaderstyle,
      overrideLoadingContainerStyle = _ref.overrideLoadingContainerStyle,
      loaderColor = _ref.loaderColor;
  var createSpacer = width && height && hasSpacer;
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      heightt = _useState[0],
      setHeightt = _useState[1];

  var _useState2 = (0, _react.useState)(0),
      widthh = _useState2[0],
      setWidth = _useState2[1];

  var getListSize = function getListSize() {
    var newWidth = ref.current.clientWidth;
    setWidth(newWidth);
    var newHeight = ref.current.clientHeight;
    setHeightt(newHeight);
  };

  (0, _react.useEffect)(function () {
    getListSize();
  }, [ref.current]);
  (0, _react.useEffect)(function () {
    window.addEventListener("resize", getListSize);
  }, []);
  console.log("height", heightt);
  console.log("width", widthh);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: {
      paddingTop: createSpacer ? height / width * 100 + "%" : null
    }
  }, sources && sources.length > 0 ? /*#__PURE__*/_react["default"].createElement("picture", null, sources.map(function (source, i) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: i
    }, source.srcSet && /*#__PURE__*/_react["default"].createElement("source", source));
  }), !isLoading && /*#__PURE__*/_react["default"].createElement("div", {
    style: _extends({}, styles.loaderContainer, overrideLoadingContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Sentry["default"], {
    color: loaderColor,
    size: heightt / 16,
    style: _extends({}, styles.loader, {
      top: heightt / 2.25,
      left: widthh / 2.25
    }, overrideLoaderstyle)
  })), /*#__PURE__*/_react["default"].createElement("img", _extends({}, imgAttributes, {
    className: "iiz__img " + (imgAttributes.className || "") + " " + (isZoomed ? "iiz__img--hidden" : "") + " " + (createSpacer ? "iiz__img--abs" : ""),
    style: {
      transition: "linear 0ms opacity " + (isZoomed ? fadeDuration : 0) + "ms, linear " + fadeDuration + "ms visibility " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    width: width,
    height: height
  }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isLoading && /*#__PURE__*/_react["default"].createElement("div", {
    style: _extends({}, styles.loaderContainer, overrideLoadingContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Sentry["default"], {
    color: loaderColor,
    size: heightt / 16,
    style: _extends({}, styles.loader, {
      top: heightt / 2.25,
      left: widthh / 2.25
    }, overrideLoaderstyle)
  })), /*#__PURE__*/_react["default"].createElement("img", _extends({}, imgAttributes, {
    className: "iiz__img " + (imgAttributes.className || "") + " " + (isZoomed ? "iiz__img--hidden" : "") + " " + (createSpacer ? "iiz__img--abs" : ""),
    style: {
      transition: "linear 0ms opacity " + (isZoomed ? fadeDuration : 0) + "ms, linear " + fadeDuration + "ms visibility " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    width: width,
    height: height
  }))));
};

var styles = {
  loaderContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    position: "absolute",
    zIndex: 100,
    flex: 1
  },
  loader: {
    position: "absolute",
    top: "43%",
    left: "45%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000000
  }
};
Image.propTypes = process.env.NODE_ENV !== "production" ? {
  src: _propTypes["default"].string.isRequired,
  sources: _propTypes["default"].array,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  hasSpacer: _propTypes["default"].bool,
  imgAttributes: _propTypes["default"].object,
  fadeDuration: _propTypes["default"].number,
  isZoomed: _propTypes["default"].bool,
  overrideLoaderstyle: _propTypes["default"].object,
  overrideLoadingContainerStyle: _propTypes["default"].object,
  loaderColor: _propTypes["default"].string
} : {};
var _default = Image;
exports["default"] = _default;
module.exports = exports.default;