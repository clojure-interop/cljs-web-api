(ns web.canvas.ImageData
  "The ImageData interface represents the underlying pixel data
  an area of a `<canvas>` element. It is created using the `ImageData()`
  or creator methods on the `web.canvas.CanvasRenderingContext2D`
  associated with a canvas: `createImageData()` and `getImageData()`.
  can also be used to set a part of the canvas by using `putImageData()`."
  (:refer-clojure :exclude []))

(defn data
  "Property.

  [Read Only]

  The readonly ImageData.data property returns a `js.Uint8ClampedArray`
  contains the `web.canvas.ImageData` object's pixel data. Data
  stored as a one-dimensional array in the RGBA order, with integer
  between 0 and 255 (inclusive).

  `imageData.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data`"
  [this]
  (-> this (.-data)))

(defn height
  "Property.

  [Read Only]

  The readonly ImageData.height property returns the number of
  in the `web.canvas.ImageData` object.

  `imageData.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/height`"
  [this]
  (-> this (.-height)))

(defn width
  "Property.

  [Read Only]

  The readonly ImageData.width property returns the number of pixels
  row in the `web.canvas.ImageData` object.

  `imageData.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/width`"
  [this]
  (-> this (.-width)))

