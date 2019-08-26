(ns web.canvas.HTMLCanvasElement
  "The HTMLCanvasElement interface provides properties and methods
  manipulating the layout and presentation of `<canvas>` elements.
  HTMLCanvasElement interface also inherits the properties and
  of the `web.dom.HTMLElement` interface."
  (:refer-clojure :exclude []))

(defn capture-stream
  "Method.

  The `web.canvas.HTMLCanvasElement` captureStream() method returns
  `web.streams.MediaStream` which includes a `web.media.CanvasCaptureMediaStreamTrack`
  a real-time video capture of the canvas's contents.

  `MediaStream = canvas.captureStream(frameRate);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream`"
  [this frame-rate]
  (-> this (.captureStream frame-rate)))

(defn get-context
  "Method.

  The HTMLCanvasElement.getContext() method returns a drawing context
  the canvas, or `js.null` if the context identifier is not supported.

  `var ctx = canvas.getContext(contextType);
  var ctx = canvas.getContext(contextType, contextAttributes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext`"
  [this & args]
  (apply (-> this .-getContext) (concat [this] args)))

(defn moz-fetch-as-stream
  "Method.

  The HTMLCanvasElement.mozFetchAsStream() internal method used
  create a new input stream that, when ready, would provide the
  of the canvas as image data. However, this non-standard and internal
  has been removed.

  `void canvas.mozFetchAsStream(callback, type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozFetchAsStream`"
  [this callback type]
  (-> this (.mozFetchAsStream callback type)))

(defn moz-get-as-file
  "Method.

  The HTMLCanvasElement.mozGetAsFile() method returns a `web.files.File`
  representing the image contained in the canvas; this file is
  memory-based file, with the specified name. If type is not specified,
  image type is image/png.

  `canvas.mozGetAsFile(name, type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozGetAsFile`"
  [this name type]
  (-> this (.mozGetAsFile name type)))

(defn to-blob
  "Method.

  The HTMLCanvasElement.toBlob() method creates a `web.files.Blob`
  representing the image contained in the canvas; this file may
  cached on the disk or stored in memory at the discretion of the
  agent. If type is not specified, the image type is image/png.
  created image is in a resolution of 96dpi.

  `canvas.toBlob(callback, mimeType, qualityArgument);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob`"
  [this callback mime-type quality-argument]
  (-> this (.toBlob callback mime-type quality-argument)))

(defn to-data-url
  "Method.

  The HTMLCanvasElement.toDataURL() method returns a data URI containing
  representation of the image in the format specified by the type
  (defaults to PNG). The returned image is in a resolution of 96

  `canvas.toDataURL(type, encoderOptions);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL`"
  [this type encoder-options]
  (-> this (.toDataURL type encoder-options)))

(defn transfer-control-to-offscreen
  "Method.

  The HTMLCanvasElement.transferControlToOffscreen() method transfers
  to an `web.canvas.OffscreenCanvas` object, either on the main
  or on a worker.

  `OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen`"
  [this ]
  (-> this (.transferControlToOffscreen)))

(defn height
  "Property.

  The HTMLCanvasElement.height property is a positive integer reflecting
  height HTML attribute of the `<canvas>` element interpreted in
  pixels. When the attribute is not specified, or if it is set
  an invalid value, like a negative, the default value of 150 is

  `var pxl = canvas.height;
  canvas.height = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The HTMLCanvasElement.height property is a positive integer reflecting
  height HTML attribute of the `<canvas>` element interpreted in
  pixels. When the attribute is not specified, or if it is set
  an invalid value, like a negative, the default value of 150 is

  `var pxl = canvas.height;
  canvas.height = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height`"
  [this val]
  (aset this "height" val))

(defn moz-opaque
  "Property.

  The non-standard HTMLCanvasElement.mozOpaque property is a `js.Boolean`
  the moz-opaque HTML attribute of the `<canvas>` element. It lets
  canvas know whether or not translucency will be a factor. If
  canvas knows there's no translucency, painting performance can
  optimized.

  `var opaque = canvas.mozOpaque;
  canvas.mozOpaque = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozOpaque`"
  [this]
  (-> this (.mozOpaque)))

(defn set-moz-opaque!
  "Property.

  The non-standard HTMLCanvasElement.mozOpaque property is a `js.Boolean`
  the moz-opaque HTML attribute of the `<canvas>` element. It lets
  canvas know whether or not translucency will be a factor. If
  canvas knows there's no translucency, painting performance can
  optimized.

  `var opaque = canvas.mozOpaque;
  canvas.mozOpaque = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozOpaque`"
  [this val]
  (aset this "mozOpaque" val))

(defn width
  "Property.

  The HTMLCanvasElement.width property is a positive integer reflecting
  width HTML attribute of the `<canvas>` element interpreted in
  pixels. When the attribute is not specified, or if it is set
  an invalid value, like a negative, the default value of 300 is

  `var pxl = canvas.width;
  canvas.width = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The HTMLCanvasElement.width property is a positive integer reflecting
  width HTML attribute of the `<canvas>` element interpreted in
  pixels. When the attribute is not specified, or if it is set
  an invalid value, like a negative, the default value of 300 is

  `var pxl = canvas.width;
  canvas.width = pxl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width`"
  [this val]
  (aset this "width" val))

