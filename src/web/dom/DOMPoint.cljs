(ns web.dom.DOMPoint
  "A DOMPoint object represents a 2D or 3D point in a coordinate
  it includes values for the coordinates in up to three dimensions,
  well as an optional perspective value."
  (:refer-clojure :exclude []))

(defn from-point
  "Method.

  Creates a new mutable DOMPoint object given an existing point
  a DOMPointInit dictionary which provides the values for its properties."
  [this & args]
  (-> this .-fromPoint (.apply this (clj->js args))))

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

