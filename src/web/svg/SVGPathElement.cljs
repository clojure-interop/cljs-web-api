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
  (-> this .-getPointAtLength (.apply this (clj->js args))))

(defn get-path-seg-at-length
  "Method.

  Returns an unsigned long representing the index within the pathSegList
  the user agent's distance-along-a-path algorithm."
  [this & args]
  (-> this .-getPathSegAtLength (.apply this (clj->js args))))

(defn create-svg-path-seg-close-path
  "Method.

  Returns a stand-alone, parentless SVGPathSegClosePath object."
  [this & args]
  (-> this .-createSVGPathSegClosePath (.apply this (clj->js args))))

(defn create-svg-path-seg-moveto-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegMovetoAbs object."
  [this & args]
  (-> this .-createSVGPathSegMovetoAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-moveto-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegMovetoRel object."
  [this & args]
  (-> this .-createSVGPathSegMovetoRel (.apply this (clj->js args))))

(defn create-svg-path-seg-lineto-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoAbs object."
  [this & args]
  (-> this .-createSVGPathSegLinetoAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-lineto-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoRel object."
  [this & args]
  (-> this .-createSVGPathSegLinetoRel (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-cubic-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicAbs object."
  [this & args]
  (-> this .-createSVGPathSegCurvetoCubicAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-cubic-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicRel object."
  [this & args]
  (-> this .-createSVGPathSegCurvetoCubicRel (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-quadratic-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticAbs"
  [this & args]
  (-> this .-createSVGPathSegCurvetoQuadraticAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-quadratic-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticRel"
  [this & args]
  (-> this .-createSVGPathSegCurvetoQuadraticRel (.apply this (clj->js args))))

(defn create-svg-path-seg-arc-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegArcAbs object."
  [this & args]
  (-> this .-createSVGPathSegArcAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-arc-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegArcRel object."
  [this & args]
  (-> this .-createSVGPathSegArcRel (.apply this (clj->js args))))

(defn create-svg-path-seg-lineto-horizontal-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoHorizontalAbs"
  [this & args]
  (-> this .-createSVGPathSegLinetoHorizontalAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-lineto-horizontal-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoHorizontalRel"
  [this & args]
  (-> this .-createSVGPathSegLinetoHorizontalRel (.apply this (clj->js args))))

(defn create-svg-path-seg-lineto-vertical-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoVerticalAbs"
  [this & args]
  (-> this .-createSVGPathSegLinetoVerticalAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-lineto-vertical-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoVerticalRel"
  [this & args]
  (-> this .-createSVGPathSegLinetoVerticalRel (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-cubic-smooth-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicSmoothAbs"
  [this & args]
  (-> this .-createSVGPathSegCurvetoCubicSmoothAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-cubic-smooth-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicSmoothRel"
  [this & args]
  (-> this .-createSVGPathSegCurvetoCubicSmoothRel (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-quadratic-smooth-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticSmoothAbs"
  [this & args]
  (-> this .-createSVGPathSegCurvetoQuadraticSmoothAbs (.apply this (clj->js args))))

(defn create-svg-path-seg-curveto-quadratic-smooth-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticSmoothRel"
  [this & args]
  (-> this .-createSVGPathSegCurvetoQuadraticSmoothRel (.apply this (clj->js args))))

(defn path-length
  "Property.

  The SVGPathElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/pathLength`"
  [this]
  (-> this (.-pathLength)))

(defn set-path-length!
  "Property.

  The SVGPathElement.pathLength property reflects the pathLength
  and returns the total length of the path, in user units.

  `var pathLength = someElement.pathLength;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/pathLength`"
  [this val]
  (aset this "pathLength" val))

