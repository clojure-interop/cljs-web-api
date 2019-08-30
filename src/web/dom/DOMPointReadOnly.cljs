(ns web.dom.DOMPointReadOnly
  "The DOMPointReadOnly interface specifies the coordinate and perspective
  used by `web.dom.DOMPoint` to define a 2D or 3D point in a coordinate"
  (:refer-clojure :exclude []))

(defn matrix-transform
  "Method.

  Applies a matrix transform specified as a DOMMatrixInit object
  the DOMPointReadOnly object."
  [this & args]
  (-> this .-matrixTransform (.apply this (clj->js args))))

(defn to-json
  "Method.

  The `web.dom.DOMPointReadOnly` method toJSON() returns a `web.dom.DOMPointInit`
  giving the JSON form of the point object.

  `pointJSON = DOMPointReadOnly.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn from-point
  "Method.

  The static `web.dom.DOMPointReadOnly` method fromPoint() creates
  returns a new DOMPointReadOnly object given a source point.

  `var point = DOMPointReadOnly.fromPoint(sourcePoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/fromPoint`"
  [this source-point]
  (-> this (.fromPoint source-point)))

(defn x
  "Property.

  [Read Only]

  The DOMPointReadOnly interface's x property holds the horizontal
  x, for a read-only point in space. This property cannot be changed
  JavaScript code in this read-only version of the DOMPoint object.

  `var xPos = DOMPointReadOnly.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The DOMPointReadOnly interface's y property holds the vertical
  y, for a read-only point in space.

  `var yPos = DOMPointReadOnly.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/y`"
  [this]
  (-> this (.-y)))

(defn z
  "Property.

  [Read Only]

  The DOMPointReadOnly interface's z property holds the depth coordinate,
  for a read-only point in space.

  `var zPos = DOMPointReadOnly.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/z`"
  [this]
  (-> this (.-z)))

(defn w
  "Property.

  [Read Only]

  The DOMPointReadOnly interface's w property holds the point's
  value, w, for a read-only point in space.

  `var perspective = DOMPointReadOnly.w;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/w`"
  [this]
  (-> this (.-w)))

