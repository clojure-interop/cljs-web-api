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

(defn get-path-seg-at-length
  "Method.

  Returns an unsigned long representing the index within the pathSegList
  the user agent's distance-along-a-path algorithm."
  [this & args]
  (apply (-> this .-getPathSegAtLength) (concat [this] args)))

(defn create-svg-path-seg-close-path
  "Method.

  Returns a stand-alone, parentless SVGPathSegClosePath object."
  [this & args]
  (apply (-> this .-createSVGPathSegClosePath) (concat [this] args)))

(defn create-svg-path-seg-moveto-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegMovetoAbs object."
  [this & args]
  (apply (-> this .-createSVGPathSegMovetoAbs) (concat [this] args)))

(defn create-svg-path-seg-moveto-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegMovetoRel object."
  [this & args]
  (apply (-> this .-createSVGPathSegMovetoRel) (concat [this] args)))

(defn create-svg-path-seg-lineto-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoAbs object."
  [this & args]
  (apply (-> this .-createSVGPathSegLinetoAbs) (concat [this] args)))

(defn create-svg-path-seg-lineto-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoRel object."
  [this & args]
  (apply (-> this .-createSVGPathSegLinetoRel) (concat [this] args)))

(defn create-svg-path-seg-curveto-cubic-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicAbs object."
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoCubicAbs) (concat [this] args)))

(defn create-svg-path-seg-curveto-cubic-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicRel object."
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoCubicRel) (concat [this] args)))

(defn create-svg-path-seg-curveto-quadratic-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticAbs"
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoQuadraticAbs) (concat [this] args)))

(defn create-svg-path-seg-curveto-quadratic-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticRel"
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoQuadraticRel) (concat [this] args)))

(defn create-svg-path-seg-arc-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegArcAbs object."
  [this & args]
  (apply (-> this .-createSVGPathSegArcAbs) (concat [this] args)))

(defn create-svg-path-seg-arc-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegArcRel object."
  [this & args]
  (apply (-> this .-createSVGPathSegArcRel) (concat [this] args)))

(defn create-svg-path-seg-lineto-horizontal-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoHorizontalAbs"
  [this & args]
  (apply (-> this .-createSVGPathSegLinetoHorizontalAbs) (concat [this] args)))

(defn create-svg-path-seg-lineto-horizontal-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoHorizontalRel"
  [this & args]
  (apply (-> this .-createSVGPathSegLinetoHorizontalRel) (concat [this] args)))

(defn create-svg-path-seg-lineto-vertical-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoVerticalAbs"
  [this & args]
  (apply (-> this .-createSVGPathSegLinetoVerticalAbs) (concat [this] args)))

(defn create-svg-path-seg-lineto-vertical-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegLinetoVerticalRel"
  [this & args]
  (apply (-> this .-createSVGPathSegLinetoVerticalRel) (concat [this] args)))

(defn create-svg-path-seg-curveto-cubic-smooth-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicSmoothAbs"
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoCubicSmoothAbs) (concat [this] args)))

(defn create-svg-path-seg-curveto-cubic-smooth-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoCubicSmoothRel"
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoCubicSmoothRel) (concat [this] args)))

(defn create-svg-path-seg-curveto-quadratic-smooth-abs
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticSmoothAbs"
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoQuadraticSmoothAbs) (concat [this] args)))

(defn create-svg-path-seg-curveto-quadratic-smooth-rel
  "Method.

  Returns a stand-alone, parentless SVGPathSegCurvetoQuadraticSmoothRel"
  [this & args]
  (apply (-> this .-createSVGPathSegCurvetoQuadraticSmoothRel) (concat [this] args)))

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

