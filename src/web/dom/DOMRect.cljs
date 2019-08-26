(ns web.dom.DOMRect
  "A DOMRect represents a rectangle."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMRect() constructor creates a new `web.dom.DOMRect` object.

  x
  The x coordinate of the DOMRect's origin.
  y
  The y coordinate of the DOMRect's origin.
  width
  The width of the DOMRect.
  height
  The height of the DOMRect.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/DOMRect`"
  js/DOMRect)

(defn from-rect
  "Method.

  The fromRect() property of the `web.dom.DOMRectReadOnly` interface
  a new DOMRectReadOnly object with a given location and dimensions.

  `var domRect = DOMRectReadOnly.fromRect(rectangle)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/fromRect`"
  [this rectangle]
  (-> this (.fromRect rectangle)))

