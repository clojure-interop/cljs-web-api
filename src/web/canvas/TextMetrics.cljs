(ns web.canvas.TextMetrics
  "The TextMetrics interface represents the dimensions of a piece
  text in the canvas, as created by the `CanvasRenderingContext2D.measureText()`"
  (:refer-clojure :exclude []))

(defn width
  "Property.

  The read-only width property of the `web.canvas.TextMetrics`
  contains the text's advance width (the width of that inline box)
  CSS pixels.

  `var width = metrics.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The read-only width property of the `web.canvas.TextMetrics`
  contains the text's advance width (the width of that inline box)
  CSS pixels.

  `var width = metrics.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics/width`"
  [this val]
  (aset this "width" val))

