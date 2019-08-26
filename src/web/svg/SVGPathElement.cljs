(ns web.svg.SVGPathElement
  "The SVGPathElement interface corresponds to the `<path>` element."
  (:refer-clojure :exclude []))

(defn get-total-length
  "Method.

  The SVGPathElement.getTotalLength() method returns the user agent's
  value for the total length of the path in user units.

  `float someElement.getTotalLength();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/getTotalLength`"
  [this ]
  (-> this (.getTotalLength)))

(defn get-point-at-length
  "Method.

  The SVGPathElement.getPointAtLength() method returns the point
  a given distance along the path.

  `SVGPoint someElement.getPointAtLength(float distance);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/getPointAtLength`"
  [this & args]
  (apply (-> this .-getPointAtLength) (concat [this] args)))

(defn path-length
  "Property.

  The SVGPathElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/pathLength`"
  [this]
  (-> this (.pathLength)))

(defn set-path-length!
  "Property.

  The SVGPathElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/pathLength`"
  [this val]
  (aset this "pathLength" val))

