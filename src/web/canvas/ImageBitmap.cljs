(ns web.canvas.ImageBitmap
  "The ImageBitmap interface represents a bitmap image which can
  drawn to a `<canvas>` without undue latency. It can be created
  a variety of source objects using the `createImageBitmap()` factory
  ImageBitmap provides an asynchronous and resource efficient pathway
  prepare textures for rendering in WebGL."
  (:refer-clojure :exclude []))

(defn close
  "Method.

  The ImageBitmap.close() method disposes of all graphical resources
  with an ImageBitmap.

  `void ImageBitmap.close()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap/close`"
  [this ]
  (-> this (.close)))

(defn height
  "Property.

  The read-only ImageBitmap.height property returns the `web.canvas.ImageBitmap`
  height in CSS pixels.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The read-only ImageBitmap.height property returns the `web.canvas.ImageBitmap`
  height in CSS pixels.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap/height`"
  [this val]
  (aset this "height" val))

(defn width
  "Property.

  The read-only ImageBitmap.width property returns the `web.canvas.ImageBitmap`
  width in CSS pixels.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The read-only ImageBitmap.width property returns the `web.canvas.ImageBitmap`
  width in CSS pixels.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap/width`"
  [this val]
  (aset this "width" val))

