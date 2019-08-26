(ns web.dom.DOMPoint
  "A DOMPoint object represents a 2D or 3D point in a coordinate
  it includes values for the coordinates in up to three dimensions,
  well as an optional perspective value."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMPoint() constructor creates and returns a new `web.dom.DOMPoint` object, given the values for some or all of its properties.

  x Optional
  The x coordinate for the new DOMPoint.
  y Optional
  The y coordinate for the new DOMPoint.
  z Optional
  The z coordinate for the new DOMPoint.
  w Optional
  The perspective value of the new DOMPoint.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/DOMPoint`"
  js/DOMPoint)

(defn from-point
  "Method.

  Creates a new mutable DOMPoint object given an existing point
  a DOMPointInit dictionary which provides the values for its properties."
  [this & args]
  (apply (-> this .-fromPoint) (concat [this] args)))

