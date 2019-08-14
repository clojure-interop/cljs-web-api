(ns web.CanvasCaptureMediaStreamTrack
  "The CanvasCaptureMediaStreamTrack interface represents the video
  contained in a `media.MediaStream` being generated from a `web.<canvas>`
  a call to `html.HTMLCanvasElement.captureStream()`."
  (:refer-clojure :exclude []))

(defn request-frame
  "Method.

  The `web.CanvasCaptureMediaStreamTrack` method requestFrame()
  that a frame be captured from the canvas and sent to the stream.

  `stream.requestFrame();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack/requestFrame`"
  [this ]
  (-> this (.requestFrame)))

(defn canvas
  "Property.

  The `web.CanvasCaptureMediaStreamTrack` canvas read-only property
  the `html.HTMLCanvasElement` from which frames are being captured.

  `var elt = stream.canvas;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack/canvas`"
  [this]
  (-> this (.canvas)))

