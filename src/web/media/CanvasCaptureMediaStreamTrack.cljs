(ns web.media.CanvasCaptureMediaStreamTrack
  "The CanvasCaptureMediaStreamTrack interface represents the video
  contained in a `web.streams.MediaStream` being generated from
  `<canvas>` following a call to `HTMLCanvasElement.captureStream()`."
  (:refer-clojure :exclude []))

(defn request-frame
  "Method.

  The `web.media.CanvasCaptureMediaStreamTrack` method requestFrame()
  that a frame be captured from the canvas and sent to the stream.

  `stream.requestFrame();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack/requestFrame`"
  [this ]
  (-> this (.requestFrame)))

(defn canvas
  "Property.

  [Read Only]

  The `web.media.CanvasCaptureMediaStreamTrack` canvas read-only
  returns the `web.canvas.HTMLCanvasElement` from which frames
  being captured.

  `var elt = stream.canvas;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack/canvas`"
  [this]
  (-> this (.-canvas)))

