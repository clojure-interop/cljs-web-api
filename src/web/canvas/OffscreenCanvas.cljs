(ns web.canvas.OffscreenCanvas
  "The OffscreenCanvas interface provides a canvas that can be rendered
  screen. It is available in both the window and worker contexts."
  (:refer-clojure :exclude []))

(defn get-context
  "Method.

  [Experimental]

  The OffscreenCanvas.getContext() method returns a drawing context
  an offscreen canvas, or `js.null` if the context identifier is
  supported.

  `offscreen.getContext(contextType, contextAttributes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/getContext`"
  [this context-type context-attributes]
  (-> this (.getContext context-type context-attributes)))

(defn convert-to-blob
  "Method.

  [Experimental]

  The OffscreenCanvas.convertToBlob()method creates a `web.files.Blob`
  representing the image contained in the canvas.

  `Promise<Blob> OffscreenCanvas.convertToBlob(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/convertToBlob`"
  [this options]
  (-> this (.convertToBlob options)))

(defn transfer-to-image-bitmap
  "Method.

  [Experimental]

  The OffscreenCanvas.transferToImageBitmap() method creates an
  object from the most recently rendered image of the OffscreenCanvas.

  `ImageBitmap OffscreenCanvas.transferToImageBitmap()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/transferToImageBitmap`"
  [this ]
  (-> this (.transferToImageBitmap)))

(defn height
  "Property.

  [Experimental]

  The height property returns and sets the height of an `web.canvas.OffscreenCanvas`

  `var pxl = offscreen.height;
  offscreen.height = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/height`"
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  [Experimental]

  The height property returns and sets the height of an `web.canvas.OffscreenCanvas`

  `var pxl = offscreen.height;
  offscreen.height = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/height`"
  [this val]
  (aset this "height" val))

(defn width
  "Property.

  [Experimental]

  The width property returns and sets the width of an `web.canvas.OffscreenCanvas`

  `var pxl = offscreen.width;
  offscreen.width = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/width`"
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  [Experimental]

  The width property returns and sets the width of an `web.canvas.OffscreenCanvas`

  `var pxl = offscreen.width;
  offscreen.width = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/width`"
  [this val]
  (aset this "width" val))

