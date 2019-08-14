(ns dom.DOMPoint
  "A DOMPoint object represents a 2D or 3D point in a coordinate
  it includes values for the coordinates in up to three dimensions,
  well as an optional perspective value."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMPoint() constructor creates and returns a new `dom.DOMPoint` object, given the values for some or all of its properties.

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

  The static `dom.DOMPoint` method fromPoint() creates and returns
  new mutable DOMPoint object given a source point.

  `var point = DOMPoint.fromPoint(sourcePoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/DOMPoint.fromPoint()`"
  [this source-point]
  (-> this (.fromPoint source-point)))

(defn w
  "Property.

  The DOMPoint interface's w property holds the point's perspective
  w, for a point in space.

  `var perspective = DOMPoint.w;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/w`"
  [this]
  (-> this (.w)))

(defn set-w!
  "Property.

  The DOMPoint interface's w property holds the point's perspective
  w, for a point in space.

  `var perspective = DOMPoint.w;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/w`"
  [this val]
  (aset this "w" val))

(defn x
  "Property.

  The DOMPoint interface's x property holds the horizontal coordinate,
  for a point in space.

  `var xPos = DOMPoint.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/x`"
  [this]
  (-> this (.x)))

(defn set-x!
  "Property.

  The DOMPoint interface's x property holds the horizontal coordinate,
  for a point in space.

  `var xPos = DOMPoint.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The DOMPoint interface's y property holds the vertical coordinate,
  for a point in space.

  `var yPos = DOMPoint.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/y`"
  [this]
  (-> this (.y)))

(defn set-y!
  "Property.

  The DOMPoint interface's y property holds the vertical coordinate,
  for a point in space.

  `var yPos = DOMPoint.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  The DOMPoint interface's z property specifies the depth coordinate
  a point in space.

  `var zPos = DOMPoint.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/z`"
  [this]
  (-> this (.z)))

(defn set-z!
  "Property.

  The DOMPoint interface's z property specifies the depth coordinate
  a point in space.

  `var zPos = DOMPoint.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPoint/z`"
  [this val]
  (aset this "z" val))

