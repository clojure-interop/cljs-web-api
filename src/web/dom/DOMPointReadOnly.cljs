(ns web.dom.DOMPointReadOnly
  "The DOMPointReadOnly interface specifies the coordinate and perspective
  used by `web.dom.DOMPoint` to define a 2D or 3D point in a coordinate"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMPointReadOnly() constructor returns a new `web.dom.DOMPointReadOnly` object representing a point in 2D or 3D space, optionally with perspective, whose values cannot be altered by script code.

  x Optional
  The value of the horizontal coordinate, x, as a floating point number. The default value is 0.
  y Optional
  The value of the vertical coordinate, y, as a floating point number. The default value is 0.
  z Optional
  The value of the depth coordinate, z, as a floating point number. The default value is 0.
  w Optional
  The value of the perspective, w, as a floating point number. The default is 1.



  Note: Each of these values is what's called an unrestricted number. In addition to any finite floating-point value, you may use special values such as ±`js.Infinity` and `js.NaN`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly`"
  js/DOMPointReadOnly)

(defn matrix-transform
  "Method.

  Applies a matrix transform specified as a DOMMatrixInit object
  the DOMPointReadOnly object."
  [this & args]
  (apply (-> this .-matrixTransform) (concat [this] args)))

(defn from-point
  "Method.

  The static `web.dom.DOMPointReadOnly` method fromPoint() creates
  returns a new DOMPointReadOnly object given a source point.

  `var point = DOMPointReadOnly.fromPoint(sourcePoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/fromPoint`"
  [this source-point]
  (-> this (.fromPoint source-point)))

(defn to-json
  "Method.

  The `web.dom.DOMPointReadOnly` method toJSON() returns a `web.dom.DOMPointInit`
  giving the JSON form of the point object.

  `pointJSON = DOMPointReadOnly.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/toJSON`"
  [this ]
  (-> this (.toJSON)))

