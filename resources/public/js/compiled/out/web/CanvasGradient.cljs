(ns web.CanvasGradient
  "The CanvasGradient interface represents an opaque object describing
  gradient. It is returned by the methods `web.CanvasRenderingContext2D.createLinearGradient()`
  `web.CanvasRenderingContext2D.createRadialGradient()`."
  (:refer-clojure :exclude []))

(defn add-color-stop
  "Method.

  The CanvasGradient.addColorStop() method adds a new color stop,
  by an offset and a color, to a given canvas gradient.

  `void gradient.addColorStop(offset, color);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop`"
  [this offset color]
  (-> this (.addColorStop offset color)))

