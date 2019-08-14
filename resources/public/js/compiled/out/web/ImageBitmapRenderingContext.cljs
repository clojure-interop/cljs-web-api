(ns web.ImageBitmapRenderingContext
  "The ImageBitmapRenderingContext interface is a canvas rendering
  that provides the functionality to replace the canvas's contents
  the given `web.ImageBitmap`. Its context id (the first argument
  `html.HTMLCanvasElement.getContext()` or `web.OffscreenCanvas.getContext()`)
  \\\"bitmaprenderer\\\"."
  (:refer-clojure :exclude []))

(defn transfer-from-image-bitmap
  "Method.

  The ImageBitmapRenderingContext.transferFromImageBitmap() method
  the given `web.ImageBitmap` in the canvas associated with this
  context. The ownership of the ImageBitmap is transferred to the
  as well.

  `void ImageBitmapRenderingContext.transferFromImageBitmap(bitmap)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap`"
  [this bitmap]
  (-> this (.transferFromImageBitmap bitmap)))

