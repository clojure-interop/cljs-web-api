(ns dom.DOMPointReadOnly
  "The DOMPointReadOnly interface specifies the coordinate and perspective
  used by `dom.DOMPoint` to define a 2D or 3D point in a coordinate"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMPointReadOnly() constructor returns a new `dom.DOMPointReadOnly` object representing a point in 2D or 3D space, optionally with perspective, whose values cannot be altered by script code.

  x Optional
  The value of the horizontal coordinate, x, as a floating point number. The default value is 0.
  y Optional
  The value of the vertical coordinate, y, as a floating point number. The default value is 0.
  z Optional
  The value of the depth coordinate, z, as a floating point number. The default value is 0.
  w Optional
  The value of the perspective, w, as a floating point number. The default is 1.



  Note: Each of these values is what's called an unrestricted number. In addition to any finite floating-point value, you may use special values such as ±`web.Infinity` and `web.NaN`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly`"
  js/DOMPointReadOnly)

(defn from-point
  "Method.

  The static `dom.DOMPointReadOnly` method fromPoint() creates
  returns a new DOMPointReadOnly object given a source point.

  `var point = DOMPointReadOnly.fromPoint(sourcePoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/fromPoint`"
  [this source-point]
  (-> this (.fromPoint source-point)))

(defn to-json
  "Method.

  The `dom.DOMPointReadOnly` method toJSON() returns a `dom.DOMPointInit`
  giving the JSON form of the point object.

  `pointJSON = DOMPointReadOnly.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn w
  "Property.

  The DOMPointReadOnly interface's w property holds the point's
  value, w, for a read-only point in space.

  `var perspective = DOMPointReadOnly.w;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/w`"
  [this]
  (-> this (.w)))

(defn x
  "Property.

  The DOMPointReadOnly interface's x property holds the horizontal
  x, for a read-only point in space. This property cannot be changed
  JavaScript code in this read-only version of the DOMPoint object.

  `var xPos = DOMPointReadOnly.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/x`"
  [this]
  (-> this (.x)))

(defn y
  "Property.

  The DOMPointReadOnly interface's y property holds the vertical
  y, for a read-only point in space.

  `var yPos = DOMPointReadOnly.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/y`"
  [this]
  (-> this (.y)))

(defn z
  "Property.

  The DOMPointReadOnly interface's z property holds the depth coordinate,
  for a read-only point in space.

  `var zPos = DOMPointReadOnly.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/z`"
  [this]
  (-> this (.z)))

