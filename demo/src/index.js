import React, { Component, useState } from "react";
import { render } from "react-dom";
import InnerImageZoom from "../../src";
import "../../src/InnerImageZoom/styles.css";

const Demo = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  console.log(containerHeight);
  console.log(containerWidth);
  return (
    <div>
      <h1>react-inner-image-zoom Demo</h1>
      <div style={{ marginBottom: "30px" }}>
        <h2>Pan Example</h2>
        <InnerImageZoom
          setContainerWidth={(awd) => {
            setContainerWidth(awd);
          }}
          setContainerHeight={(awd) => {
            setContainerHeight(awd);
          }}
          overrideLoaderstyle={{
            top: containerHeight / 2.25,
            left: containerWidth / 2.25,
          }}
          loaderSize={containerHeight / 16}
          loaderColor={"rgba(1,1,1,1)"}
          onZoomImageLoad={(e) => {
            console.log("onZoomImageLoad", e);
          }}
          onLoad={(e) => {
            console.log("onLoad", e);
          }}
          src="https://teelaunch-2-dev.s3.us-west-2.amazonaws.com/accounts/3/products/100000006039/mockup-files/85133/product_with_blank_White_Mockup-thumb.png
             "
          zoomSrc="https://teelaunch-2-dev.s3.us-west-2.amazonaws.com/accounts/3/products/100000006039/mockup-files/85133/product_with_blank_White_Mockup.png"
          fullscreenOnMobile={false}
          imgAttributes={{
            src: "test",
            "data-key": "value",
            title: "Title",
            alt: "",
            height: 1000,
            onLoad: () => console.log("Original image loaded"),
          }}
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Hover Example</h2>
        <InnerImageZoom
          src="unsplash2.jpg"
          width={750}
          height={500}
          hasSpacer={true}
          zoomSrc="unsplash2-large.jpg"
          zoomType="hover"
          zoomPreload={true}
          fullscreenOnMobile={true}
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Drag Example</h2>
        <InnerImageZoom
          src="unsplash3.jpg"
          zoomSrc="unsplash3-large.jpg"
          fullscreenOnMobile={true}
          moveType="drag"
          zoomScale={0.9}
          zoomPreload={true}
        />
      </div>
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
