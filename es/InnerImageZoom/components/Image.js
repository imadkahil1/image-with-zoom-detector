function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Sentry from "react-activity/dist/Sentry"; // import "react-activity/dist/Sentry.css";

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
      loaderColor = _ref.loaderColor,
      setContainerWidth = _ref.setContainerWidth,
      setContainerHeight = _ref.setContainerHeight,
      containerHeight = _ref.containerHeight,
      containerWidth = _ref.containerWidth,
      loaderSize = _ref.loaderSize;
  var createSpacer = width && height && hasSpacer;
  var ref = useRef(null);

  var getListSize = function getListSize() {
    var _ref$current, _ref$current2;

    var newWidth = ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.clientWidth;
    setContainerWidth(newWidth);
    var newHeight = ref === null || ref === void 0 ? void 0 : (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.clientHeight;
    setContainerHeight(newHeight);
  };

  useEffect(function () {
    getListSize();
  }, [getListSize]);
  useEffect(function () {
    window.addEventListener("resize", getListSize, true);
    return function () {
      window.removeEventListener("resize", getListSize);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      paddingTop: createSpacer ? height / width * 100 + "%" : null
    }
  }, sources && sources.length > 0 ? /*#__PURE__*/React.createElement("picture", null, sources.map(function (source, i) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, source.srcSet && /*#__PURE__*/React.createElement("source", source));
  }), isLoading && /*#__PURE__*/React.createElement("div", {
    style: _extends({}, styles.loaderContainer, overrideLoadingContainerStyle)
  }, /*#__PURE__*/React.createElement(Sentry, {
    color: loaderColor,
    size: loaderSize,
    style: _extends({}, styles.loader, {
      top: containerHeight / 2.25,
      left: containerWidth / 2.25
    }, overrideLoaderstyle)
  })), /*#__PURE__*/React.createElement("img", _extends({}, imgAttributes, {
    className: "iiz__img " + (imgAttributes.className || "") + " " + (isZoomed ? "iiz__img--hidden" : "") + " " + (createSpacer ? "iiz__img--abs" : ""),
    style: {
      transition: "linear 0ms opacity " + (isZoomed ? fadeDuration : 0) + "ms, linear " + fadeDuration + "ms visibility " + (isZoomed ? fadeDuration : 0) + "ms"
    },
    src: src,
    width: width,
    height: height
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, isLoading && /*#__PURE__*/React.createElement("div", {
    style: _extends({}, styles.loaderContainer, overrideLoadingContainerStyle)
  }, /*#__PURE__*/React.createElement(Sentry, {
    color: loaderColor,
    size: loaderSize,
    style: _extends({}, styles.loader, {
      top: containerHeight / 2.25,
      left: containerWidth / 2.25
    }, overrideLoaderstyle)
  })), /*#__PURE__*/React.createElement("img", _extends({}, imgAttributes, {
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
  src: PropTypes.string.isRequired,
  sources: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  hasSpacer: PropTypes.bool,
  imgAttributes: PropTypes.object,
  fadeDuration: PropTypes.number,
  isZoomed: PropTypes.bool,
  overrideLoaderstyle: PropTypes.object,
  overrideLoadingContainerStyle: PropTypes.object,
  loaderColor: PropTypes.string,
  setContainerWidth: PropTypes.func,
  setContainerHeight: PropTypes.func,
  containerHeight: PropTypes.number,
  containerWidth: PropTypes.number,
  loaderSize: PropTypes.number
} : {};
export default Image;