(ns web.canvas.ImageBitmapRenderingContext
  "The ImageBitmapRenderingContext interface is a canvas rendering
  that provides the functionality to replace the canvas's contents
  the given `web.canvas.ImageBitmap`. Its context id (the first
  to `HTMLCanvasElement.getContext()` or `OffscreenCanvas.getContext()`)
  \\\"bitmaprenderer\\\"."
  (:refer-clojure :exclude []))

(defn transfer-from-image-bitmap
  "Method.

  The ImageBitmapRenderingContext.transferFromImageBitmap() method
  the given `web.canvas.ImageBitmap` in the canvas associated with
  rendering context. The ownership of the ImageBitmap is transferred
  the canvas as well.

  `void ImageBitmapRenderingContext.transferFromImageBitmap(bitmap)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap`"
  [this bitmap]
  (-> this (.transferFromImageBitmap bitmap)))

