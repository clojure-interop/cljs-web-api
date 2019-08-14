(ns web.ImageData
  "The ImageData interface represents the underlying pixel data
  an area of a `web.<canvas>` element. It is created using the
  constructor or creator methods on the `web.CanvasRenderingContext2D`
  associated with a canvas: `web.createImageData()` and `web.getImageData()`.
  can also be used to set a part of the canvas by using `web.putImageData()`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ImageData() constructor returns a newly instantiated `web.ImageData` object built from the typed array given and having the specified width and height.

  array Optional
  A `web.Uint8ClampedArray` containing the underlying pixel representation of the image. If no such array is given, an image with a black rectangle of the specified width and height will be created.
  width
  An unsigned long representing the width of the image.
  height
  An unsigned long representing the height of the image. This value is optional if an array is given: the height will be inferred from the array's size and the given width.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData`"
  js/ImageData)

(defn data
  "Property.

  The readonly ImageData.data property returns a `web.Uint8ClampedArray`
  contains the `web.ImageData` object's pixel data. Data is stored
  a one-dimensional array in the RGBA order, with integer values
  0 and 255 (inclusive).

  `imageData.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The readonly ImageData.data property returns a `web.Uint8ClampedArray`
  contains the `web.ImageData` object's pixel data. Data is stored
  a one-dimensional array in the RGBA order, with integer values
  0 and 255 (inclusive).

  `imageData.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data`"
  [this val]
  (aset this "data" val))

(defn height
  "Property.

  The readonly ImageData.height property returns the number of
  in the `web.ImageData` object.

  `imageData.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The readonly ImageData.height property returns the number of
  in the `web.ImageData` object.

  `imageData.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/height`"
  [this val]
  (aset this "height" val))

(defn width
  "Property.

  The readonly ImageData.width property returns the number of pixels
  row in the `web.ImageData` object.

  `imageData.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The readonly ImageData.width property returns the number of pixels
  row in the `web.ImageData` object.

  `imageData.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/width`"
  [this val]
  (aset this "width" val))

