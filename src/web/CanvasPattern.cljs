(ns web.CanvasPattern
  "The CanvasPattern interface represents an opaque object describing
  pattern, based on an image, a canvas, or a video, created by
  `web.CanvasRenderingContext2D.createPattern()` method."
  (:refer-clojure :exclude []))

(defn set-transform
  "Method.

  The CanvasPattern.setTransform() method uses an `svg.SVGMatrix`
  as the pattern's transformation matrix and invokes it on the

  `void pattern.setTransform(matrix);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern/setTransform`"
  [this matrix]
  (-> this (.setTransform matrix)))

