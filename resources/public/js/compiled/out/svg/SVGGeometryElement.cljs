(ns svg.SVGGeometryElement
  "The SVGGeometryElement interface represents SVG elements whose
  is defined by geometry with an equivalent path, and which can
  filled and stroked. This includes paths and the basic shapes."
  (:refer-clojure :exclude []))

(defn get-point-at-length
  "Method.

  The SVGGeometryElement.getPointAtLength() method returns the
  at a given distance along the path.

  `DOMPoint someElement.getPointAtLength(float distance);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getPointAtLength`"
  [this & args]
  (apply (-> this .-getPointAtLength) (concat [this] args)))

(defn get-total-length
  "Method.

  The SVGGeometryElement.getTotalLength() method returns the user
  computed value for the total length of the path in user units.

  `float someElement.getTotalLength();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength`"
  [this ]
  (-> this (.getTotalLength)))

(defn is-point-in-fill
  "Method.

  The SVGGeometryElement.isPointInFill() method determines whether
  given point is within the fill shape of an element. Normal hit
  rules apply; the value of the `web.pointer-events` property on
  element determines whether a point is considered to be within
  fill. The point argument is interpreted as a point in the local
  system of the element.

  `boolean someElement.isPointInFill(DOMPointInit point);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/isPointInFill`"
  [this & args]
  (apply (-> this .-isPointInFill) (concat [this] args)))

(defn is-point-in-stroke
  "Method.

  The SVGGeometryElement.isPointInStroke() method determines whether
  given point is within the stroke shape of an element. Normal
  testing rules apply; the value of the `web.pointer-events` property
  the element determines whether a point is considered to be within
  stroke. The point argument is interpreted as a point in the local
  system of the element.

  `boolean someElement.isPointInStroke(DOMPointInit point);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/isPointInStroke`"
  [this & args]
  (apply (-> this .-isPointInStroke) (concat [this] args)))

(defn path-length
  "Property.

  The SVGGeometryElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength`"
  [this]
  (-> this (.pathLength)))

(defn set-path-length!
  "Property.

  The SVGGeometryElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength`"
  [this val]
  (aset this "pathLength" val))

