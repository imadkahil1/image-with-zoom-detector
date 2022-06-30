import React, { Fragment, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Sentry from "react-activity/dist/Sentry";
import "react-activity/dist/Sentry.css";

const Image = ({
  src,
  sources,
  width,
  height,
  hasSpacer,
  imgAttributes,
  isZoomed,
  fadeDuration,
  isLoading,
  overrideLoaderstyle,
  overrideLoadingContainerStyle,
  loaderColor,
}) => {
  const createSpacer = width && height && hasSpacer;

  const ref = useRef(null);

  const [heightt, setHeightt] = useState(0);
  const [widthh, setWidth] = useState(0);

  const getListSize = () => {
    const newWidth = ref.current.clientWidth;
    setWidth(newWidth);

    const newHeight = ref.current.clientHeight;
    setHeightt(newHeight);
  };

  useEffect(() => {
    getListSize();
  }, [ref.current]);

  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);

  console.log("height", heightt);
  console.log("width", widthh);

  return (
    <div
      ref={ref}
      style={{ paddingTop: createSpacer ? `${(height / width) * 100}%` : null }}
    >
      {sources && sources.length > 0 ? (
        <picture>
          {sources.map((source, i) => {
            return (
              <Fragment key={i}>
                {source.srcSet && <source {...source} />}
              </Fragment>
            );
          })}
          {!isLoading && (
            <div
              style={{
                ...styles.loaderContainer,
                ...overrideLoadingContainerStyle,
              }}
            >
              <Sentry
                color={loaderColor}
                size={heightt / 16}
                style={{
                  ...styles.loader,
                  top: heightt / 2.25,
                  left: widthh / 2.25,
                  ...overrideLoaderstyle,
                }}
              />
            </div>
          )}
          <img
            {...imgAttributes}
            className={`iiz__img ${imgAttributes.className || ""} ${
              isZoomed ? "iiz__img--hidden" : ""
            } ${createSpacer ? "iiz__img--abs" : ""}`}
            style={{
              transition: `linear 0ms opacity ${
                isZoomed ? fadeDuration : 0
              }ms, linear ${fadeDuration}ms visibility ${
                isZoomed ? fadeDuration : 0
              }ms`,
            }}
            src={src}
            width={width}
            height={height}
          />
        </picture>
      ) : (
        <>
          {!isLoading && (
            <div
              style={{
                ...styles.loaderContainer,
                ...overrideLoadingContainerStyle,
              }}
            >
              <Sentry
                color={loaderColor}
                size={heightt / 16}
                style={{
                  ...styles.loader,
                  top: heightt / 2.25,
                  left: widthh / 2.25,
                  ...overrideLoaderstyle,
                }}
              />
            </div>
          )}
          <img
            {...imgAttributes}
            className={`iiz__img ${imgAttributes.className || ""} ${
              isZoomed ? "iiz__img--hidden" : ""
            } ${createSpacer ? "iiz__img--abs" : ""}`}
            style={{
              transition: `linear 0ms opacity ${
                isZoomed ? fadeDuration : 0
              }ms, linear ${fadeDuration}ms visibility ${
                isZoomed ? fadeDuration : 0
              }ms`,
            }}
            src={src}
            width={width}
            height={height}
          />
        </>
      )}
    </div>
  );
};

const styles = {
  loaderContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    position: "absolute",
    zIndex: 100,
    flex: 1,
  },
  loader: {
    position: "absolute",
    top: "43%",
    left: "45%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000000,
  },
};

Image.propTypes = {
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
};

export default Image;
