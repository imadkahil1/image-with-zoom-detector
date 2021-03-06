# zoom-loading-detector

![GitHub Actions][build-badge] [![npm package][npm-badge]][npm] [![TypeScript definitions on DefinitelyTyped][dt-badge]][dt]

A React component for magnifying an image within its original container. Zoom behavior can be triggered on click or hover and the zoomed image can be moved by dragging on touch devices and either dragging or pan on hover on non-touch devices. The component supports responsive images, loading placeholders, optional fullscreen zoom on mobile, and more. In addition a loading view will can be added when the image load for the first time then the zoom feature will work perfectly.

## NPM link
https://www.npmjs.com/package/zoom-loading-detector

## Installation

**Note:** Version 1.2.4 introduces React hooks and requires React v16.8.0 or above. To use this package with older versions of React, install with `npm install zoom-loading-detector@1.2.4` or `yarn add zoom-loading-detector@1.2.4` instead of the instructions below.

### NPM
```
npm install zoom-loading-detector
```

### Yarn
```
yarn add zoom-loading-detector
```

### TypeScript

For TypeScript users, type definitions are available through [DefinitelyTyped](https://definitelytyped.org/) and can be installed with:

```
npm install --save-dev @types/zoom-loading-detector
```

### Styling

I was originally importing the CSS directly into the component but I've recently realized that makes too many assumptions about the wider build process. You can now download the raw CSS file at:

[/src/InnerImageZoom/styles.css](https://raw.githubusercontent.com/laurenashpole/zoom-loading-detector/master/src/InnerImageZoom/styles.css)

or the minified raw minified version at:

[/src/InnerImageZoom/styles.min.css](https://raw.githubusercontent.com/laurenashpole/zoom-loading-detector/master/src/InnerImageZoom/styles.min.css)

to include however you see fit. Or, if your setup supports it, import the files directory from your `node_modules` using:

```javascript
import 'zoom-loading-detector/lib/InnerImageZoom/styles.css';
```

or:

```javascript
import 'zoom-loading-detector/lib/InnerImageZoom/styles.min.css';
```

## Usage

Import and render the component:
```javascript
import InnerImageZoom from 'zoom-loading-detector';
import 'react-activity/dist/Sentry.css'
...

<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />
```

## Props

Prop | Type | Default | Description
--- | --- | --- | ---
src | String | | (Required) URL for the original image.
sources | Array | | A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).
width | Number | | Width attribute for original image.
height | Number | | Height attribute for original image.
hasSpacer | Boolean | false | If true, gets the original image's aspect ratio based on the width and height props and creates a spacer to prevent cumulative layout shift.
imgAttributes | Object | | [Img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) and [global](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) attributes for the original image (excluding `src`, `width`, `height`, and `style` which are set elsewhere). The imgAttributes keys should follow the [React DOM element](https://reactjs.org/docs/dom-elements.html) naming conventions.
zoomSrc | String | | URL for the larger zoom image. Falls back to original image src if not defined.
zoomScale | Number | 1 | Multiplied against the natural width and height of the zoomed image. This will generally be a decimal (example, 0.9 for 90%).
zoomPreload | Boolean | false | If set to true, preloads the zoom image instead of waiting for mouseenter and (unless on a touch device) persists the image on mouseleave.
moveType | String | pan | `pan` or `drag`. The user behavior for moving zoomed images on non-touch devices.
zoomType | String | click | `click` or `hover`. The user behavior for triggering zoom. When using `hover`, combine with `zoomPreload` to avoid flickering on rapid mouse movements.
fadeDuration | Number | 150 | Fade transition time in milliseconds. If zooming in on transparent images, set this to `0` for best results.
fullscreenOnMobile | Boolean | false | Enables fullscreen zoomed image on touch devices below a specified breakpoint.
mobileBreakpoint | Number | 640 | The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.
hideCloseButton | Boolean | false | Hides the close button on touch devices. If set to true, zoom out is triggered by tap.
hideHint | Boolean | false | Hides the magnifying glass hint.
className | String | | Custom classname for styling the component.
afterZoomIn | Function | | Function to be called after zoom in.
afterZoomOut | Function | | Function to be called after zoom out.
loaderColor | string |rgba(0,0,0,1)| the loading view color ,
loaderSize | number | 30 | number to determine the size of the loading view size,
overrideLoaderstyle | object|  | style object, it will override the small loader style,
overrideLoadingContainerStyle | object |  |it will override the whole loader style,
setContainerWidth | function | |callback function that return the width of the whole container of the image,
setContainerHeight | function |  |callback function that returns the height of the whole container of the image
containerHeight | number |  | height returned from the setContainer state,
containerWidth | number |  | width returned from the setContainer width,


## code example
```javascript

import InnerImageZoom from 'zoom-loading-detector';
import 'react-activity/dist/Sentry.css'

const ZoomWithLoading =()=>{
    
  const [containerHeight, setContainerHeight] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [zoomIn, setZoomIn] = useState(false)

    return(
        <InnerImageZoom
          setContainerWidth={(containerWidth) => {
            setContainerWidth(containerWidth)
          }}
          setContainerHeight={(containerHeight) => {
            setContainerHeight(containerHeight)
          }}
          overrideLoaderstyle={{
            top: containerHeight / 2.25,
            left: containerWidth / 2.25
          }}
          loaderSize={containerHeight / 16}
          loaderColor={'rgba(1,1,1,1)'}
          overrideLoadingContainerStyle={{ backgroundColor: 'rgba(213,213,213,0.22)' }}
          className={`${zoomIn ? 'w-full ' : 'w-3/5'}`}
          fullscreenOnMobile={true}
          src={'/path/to/image.jpg'}
          zoomSrc={'/path/to/image.jpg'}
          zoomPreload={false}
          hideHint={true}
          afterZoomIn={() => setZoomIn(true)}
          afterZoomOut={() => setZoomIn(false)}
        />
    )
}
    


```




