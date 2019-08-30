(ns web.canvas.Path2D
  "The Path2D interface of the Canvas 2D API is used to declare
  path that can then be used on a `web.canvas.CanvasRenderingContext2D`
  The path methods of the CanvasRenderingContext2D interface are
  present on this interface, which gives you the convenience of
  able to retain and replay your path whenever desired."
  (:refer-clojure :exclude []))

(defn add-path
  "Method.

  The Path2D.addPath() method of the Canvas 2D API adds one `web.canvas.Path2D`
  to another Path2D object.

  `void path.addPath(path [, transform]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath`"
  [this & args]
  (-> this .-addPath (.apply this (clj->js args))))

(defn close-path
  "Method.

  The CanvasRenderingContext2D.closePath() method of the Canvas
  API attempts to add a straight line from the current point to
  start of the current sub-path. If the shape has already been
  or has only one point, this function does nothing.

  `void ctx.closePath();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath`"
  [this ]
  (-> this (.closePath)))

(defn move-to
  "Method.

  The CanvasRenderingContext2D.moveTo() method of the Canvas 2D
  begins a new sub-path at the point specified by the given (x,
  coordinates.

  `void ctx.moveTo(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo`"
  [this x y]
  (-> this (.moveTo x y)))

(defn line-to
  "Method.

  The `web.canvas.CanvasRenderingContext2D` method lineTo(), part
  the Canvas 2D API, adds a straight line to the current sub-path
  connecting the sub-path's last point to the specified (x, y)

  `ctx.lineTo(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo`"
  [this x y]
  (-> this (.lineTo x y)))

(defn bezier-curve-to
  "Method.

  The CanvasRenderingContext2D.bezierCurveTo() method of the Canvas
  API adds a cubic Bézier curve to the current sub-path. It requires
  points: the first two are control points and the third one is
  end point. The starting point is the latest point in the current
  which can be changed using `moveTo()` before creating the Bézier

  `void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo`"
  [this cp1x cp1y cp2x cp2y x y]
  (-> this (.bezierCurveTo cp1x cp1y cp2x cp2y x y)))

(defn quadratic-curve-to
  "Method.

  The CanvasRenderingContext2D.quadraticCurveTo() method of the
  2D API adds a quadratic Bézier curve to the current sub-path.
  requires two points: the first one is a control point and the
  one is the end point. The starting point is the latest point
  the current path, which can be changed using `moveTo()` before
  the quadratic Bézier curve.

  `void ctx.quadraticCurveTo(cpx, cpy, x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo`"
  [this cpx cpy x y]
  (-> this (.quadraticCurveTo cpx cpy x y)))

(defn arc
  "Method.

  The CanvasRenderingContext2D.arc() method of the Canvas 2D API
  a circular arc to the current sub-path.

  `void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);

  The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle and ends at endAngle, and travels in the direction given by anticlockwise (defaulting to clockwise).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc`"
  [this & args]
  (-> this .-arc (.apply this (clj->js args))))

(defn arc-to
  "Method.

  The CanvasRenderingContext2D.arcTo() method of the Canvas 2D
  adds a circular arc to the current sub-path, using the given
  points and radius. The arc is automatically connected to the
  latest point with a straight line, if necessary for the specified

  `void ctx.arcTo(x1, y1, x2, y2, radius);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo`"
  [this x1 y1 x2 y2 radius]
  (-> this (.arcTo x1 y1 x2 y2 radius)))

(defn ellipse
  "Method.

  The CanvasRenderingContext2D.ellipse() method of the Canvas 2D
  adds an elliptical arc to the current sub-path.

  `void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);

  The ellipse() method creates an elliptical arc centered at (x, y) with the radii radiusX and radiusY. The path starts at startAngle and ends at endAngle, and travels in the direction given by anticlockwise (defaulting to clockwise).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse`"
  [this & args]
  (-> this .-ellipse (.apply this (clj->js args))))

(defn rect
  "Method.

  The CanvasRenderingContext2D.rect() method of the Canvas 2D API
  a rectangle to the current path.

  `void ctx.rect(x, y, width, height);

  The rect() method creates a rectangular path whose starting point is at (x, y) and whose size is specified by width and height.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect`"
  [this & args]
  (-> this .-rect (.apply this (clj->js args))))

