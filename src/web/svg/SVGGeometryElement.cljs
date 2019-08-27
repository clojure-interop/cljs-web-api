(ns web.svg.SVGGeometryElement
  "The SVGGeometryElement interface represents SVG elements whose
  is defined by geometry with an equivalent path, and which can
  filled and stroked. This includes paths and the basic shapes."
  (:refer-clojure :exclude []))

(defn is-point-in-fill
  "Method.

  The SVGGeometryElement.isPointInFill() method determines whether
  given point is within the fill shape of an element. Normal hit
  rules apply; the value of the `pointer-events` property on the
  determines whether a point is considered to be within the fill.
  point argument is interpreted as a point in the local coordiante
  of the element.

  `boolean someElement.isPointInFill(DOMPointInit point);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/isPointInFill`"
  [this & args]
  (-> this .-isPointInFill (.apply this (clj->js args))))

(defn is-point-in-stroke
  "Method.

  The SVGGeometryElement.isPointInStroke() method determines whether
  given point is within the stroke shape of an element. Normal
  testing rules apply; the value of the `pointer-events` property
  the element determines whether a point is considered to be within
  stroke. The point argument is interpreted as a point in the local
  system of the element.

  `boolean someElement.isPointInStroke(DOMPointInit point);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/isPointInStroke`"
  [this & args]
  (-> this .-isPointInStroke (.apply this (clj->js args))))

(defn get-total-length
  "Method.

  The SVGGeometryElement.getTotalLength() method returns the user
  computed value for the total length of the path in user units.

  `float someElement.getTotalLength();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength`"
  [this ]
  (-> this (.getTotalLength)))

(defn get-point-at-length
  "Method.

  The SVGGeometryElement.getPointAtLength() method returns the
  at a given distance along the path.

  `DOMPoint someElement.getPointAtLength(float distance);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getPointAtLength`"
  [this & args]
  (-> this .-getPointAtLength (.apply this (clj->js args))))

(defn path-length
  "Property.

  The SVGGeometryElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength`"
  [this]
  (-> this (.-pathLength)))

(defn set-path-length!
  "Property.

  The SVGGeometryElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength`"
  [this val]
  (aset this "pathLength" val))

