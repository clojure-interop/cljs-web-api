(ns web.canvas.CanvasRenderingContext2D
  "The CanvasRenderingContext2D interface, part of the Canvas API,
  the 2D rendering context for the drawing surface of a `<canvas>`
  It is used for drawing shapes, text, images, and other objects."
  (:refer-clojure :exclude [filter]))

(defn add-hit-region
  "Method.

  [Experimental]

  The `web.canvas.CanvasRenderingContext2D` method addHitRegion()
  a hit region to the bitmap.

  `void ctx.addHitRegion(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion`"
  [this options]
  (-> this (.addHitRegion options)))

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

(defn begin-path
  "Method.

  The CanvasRenderingContext2D.beginPath() method of the Canvas
  API starts a new path by emptying the list of sub-paths. Call
  method when you want to create a new path.

  `void ctx.beginPath();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath`"
  [this ]
  (-> this (.beginPath)))

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

(defn clear-hit-regions
  "Method.

  [Experimental]

  The `web.canvas.CanvasRenderingContext2D` method clearHitRegions()
  all hit regions from the canvas.

  `void ctx.clearHitRegions();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearHitRegions`"
  [this ]
  (-> this (.clearHitRegions)))

(defn clear-rect
  "Method.

  The CanvasRenderingContext2D.clearRect() method of the Canvas
  API erases the pixels in a rectangular area by setting them to
  black.

  `void ctx.clearRect(x, y, width, height);

  The clearRect() method sets the pixels in a rectangular area to transparent black (rgba(0,0,0,0)). The rectangle's corner is at (x, y), and its size is specified by width and height.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect`"
  [this & args]
  (-> this .-clearRect (.apply this (clj->js args))))

(defn clip
  "Method.

  The CanvasRenderingContext2D.clip() method of the Canvas 2D API
  the current or given path into the current clipping region. It
  any previous clipping region.

  `void ctx.clip([fillRule]);
  void ctx.clip(path [, fillRule]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip`"
  [this & args]
  (-> this .-clip (.apply this (clj->js args))))

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

(defn create-image-data
  "Method.

  The CanvasRenderingContext2D.createImageData() method of the
  2D API creates a new, blank `web.canvas.ImageData` object with
  specified dimensions. All of the pixels in the new object are
  black.

  `ImageData ctx.createImageData(width, height);
  ImageData ctx.createImageData(imagedata);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData`"
  [this & args]
  (-> this .-createImageData (.apply this (clj->js args))))

(defn create-linear-gradient
  "Method.

  The CanvasRenderingContext2D.createLinearGradient() method of
  Canvas 2D API creates a gradient along the line connecting two
  coordinates.

  `CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);

  The createLinearGradient() method is specified by four parameters defining the start and end points of the gradient line.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient`"
  [this & args]
  (-> this .-createLinearGradient (.apply this (clj->js args))))

(defn create-pattern
  "Method.

  The CanvasRenderingContext2D.createPattern() method of the Canvas
  API creates a pattern using the specified image and repetition.
  method returns a `web.canvas.CanvasPattern`.

  `CanvasPattern ctx.createPattern(image, repetition);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern`"
  [this image repetition]
  (-> this (.createPattern image repetition)))

(defn create-radial-gradient
  "Method.

  The CanvasRenderingContext2D.createRadialGradient() method of
  Canvas 2D API creates a radial gradient using the size and coordinates
  two circles.

  `CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);

  The createRadialGradient() method is specified by six parameters, three defining the gradient's start circle, and three defining the end circle.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient`"
  [this & args]
  (-> this .-createRadialGradient (.apply this (clj->js args))))

(defn draw-focus-if-needed
  "Method.

  The CanvasRenderingContext2D.drawFocusIfNeeded() method of the
  2D API draws a focus ring around the current or given path, if
  specified element is focused.

  `void ctx.drawFocusIfNeeded(element);
  void ctx.drawFocusIfNeeded(path, element);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded`"
  [this & args]
  (-> this .-drawFocusIfNeeded (.apply this (clj->js args))))

(defn draw-image
  "Method.

  The CanvasRenderingContext2D.drawImage() method of the Canvas
  API provides different ways to draw an image onto the canvas.

  `void ctx.drawImage(image, dx, dy);
  void ctx.drawImage(image, dx, dy, dWidth, dHeight);
  void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage`"
  [this & args]
  (-> this .-drawImage (.apply this (clj->js args))))

(defn draw-widget-as-on-screen
  "Method.

  [Non Standard]

  The non-standard and internal only CanvasRenderingContext2D.drawWidgetAsOnScreen()
  of the Canvas 2D API renders the root widget of a window into
  canvas. Unlike `drawWindow()`, this API uses the operating system
  snapshot the widget on-screen, rather than reading from Gecko's
  compositor.

  `void ctx.drawWidgetAsOnScreen(window);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawWidgetAsOnScreen`"
  [this window]
  (-> this (.drawWidgetAsOnScreen window)))

(defn draw-window
  "Method.

  [Non Standard]

  The non-standard and internal only CanvasRenderingContext2D.drawWindow()
  of the Canvas 2D API renders a region of a window into the canvas.
  contents of the window's viewport are rendered, ignoring viewport
  and scrolling.

  `void ctx.drawWindow(window, x, y, w, h, bgColor [, flags]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawWindow`"
  [this & args]
  (-> this .-drawWindow (.apply this (clj->js args))))

(defn ellipse
  "Method.

  The CanvasRenderingContext2D.ellipse() method of the Canvas 2D
  adds an elliptical arc to the current sub-path.

  `void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);

  The ellipse() method creates an elliptical arc centered at (x, y) with the radii radiusX and radiusY. The path starts at startAngle and ends at endAngle, and travels in the direction given by anticlockwise (defaulting to clockwise).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse`"
  [this & args]
  (-> this .-ellipse (.apply this (clj->js args))))

(defn fill
  "Method.

  The CanvasRenderingContext2D.fill() method of the Canvas 2D API
  the current or given path with the current `fillStyle`.

  `void ctx.fill([fillRule]);
  void ctx.fill(path [, fillRule]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill`"
  [this & args]
  (-> this .-fill (.apply this (clj->js args))))

(defn fill-rect
  "Method.

  The CanvasRenderingContext2D.fillRect() method of the Canvas
  API draws a rectangle that is filled according to the current

  `void ctx.fillRect(x, y, width, height);

  The fillRect() method draws a filled rectangle whose starting point is at (x, y) and whose size is specified by width and height. The fill style is determined by the current fillStyle attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect`"
  [this & args]
  (-> this .-fillRect (.apply this (clj->js args))))

(defn fill-text
  "Method.

  The `web.canvas.CanvasRenderingContext2D` method fillText(),
  of the Canvas 2D API, draws a text string at the specified coordinates,
  the string's characters with the current `fillStyle`. An optional
  allows specifying a maximum width for the rendered text, which
  user agent will achieve by condensing the text or by using a
  font size.

  `CanvasRenderingContext2D.fillText(text, x, y [, maxWidth]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText`"
  [this & args]
  (-> this .-fillText (.apply this (clj->js args))))

(defn get-image-data
  "Method.

  The `web.canvas.CanvasRenderingContext2D` method getImageData()
  the Canvas 2D API returns an `web.canvas.ImageData` object representing
  underlying pixel data for a specified portion of the canvas.

  `ctx.getImageData(sx, sy, sw, sh);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData`"
  [this sx sy sw sh]
  (-> this (.getImageData sx sy sw sh)))

(defn get-line-dash
  "Method.

  The getLineDash() method of the Canvas 2D API's `web.canvas.CanvasRenderingContext2D`
  gets the current line dash pattern.

  `ctx.getLineDash();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getLineDash`"
  [this ]
  (-> this (.getLineDash)))

(defn is-point-in-path
  "Method.

  The CanvasRenderingContext2D.isPointInPath() method of the Canvas
  API reports whether or not the specified point is contained in
  current path.

  `ctx.isPointInPath(x, y [, fillRule]);
  ctx.isPointInPath(path, x, y [, fillRule]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath`"
  [this & args]
  (-> this .-isPointInPath (.apply this (clj->js args))))

(defn is-point-in-stroke
  "Method.

  The CanvasRenderingContext2D.isPointInStroke() method of the
  2D API reports whether or not the specified point is inside the
  contained by the stroking of a path.

  `ctx.isPointInStroke(x, y);
  ctx.isPointInStroke(path, x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInStroke`"
  [this & args]
  (-> this .-isPointInStroke (.apply this (clj->js args))))

(defn line-to
  "Method.

  The `web.canvas.CanvasRenderingContext2D` method lineTo(), part
  the Canvas 2D API, adds a straight line to the current sub-path
  connecting the sub-path's last point to the specified (x, y)

  `ctx.lineTo(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo`"
  [this x y]
  (-> this (.lineTo x y)))

(defn measure-text
  "Method.

  The CanvasRenderingContext2D.measureText() method returns a `web.canvas.TextMetrics`
  that contains information about the measured text (such as its
  for example).

  `ctx.measureText(text);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText`"
  [this text]
  (-> this (.measureText text)))

(defn move-to
  "Method.

  The CanvasRenderingContext2D.moveTo() method of the Canvas 2D
  begins a new sub-path at the point specified by the given (x,
  coordinates.

  `void ctx.moveTo(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo`"
  [this x y]
  (-> this (.moveTo x y)))

(defn put-image-data
  "Method.

  The CanvasRenderingContext2D.putImageData() method of the Canvas
  API paints data from the given `web.canvas.ImageData` object
  the canvas. If a dirty rectangle is provided, only the pixels
  that rectangle are painted. This method is not affected by the
  transformation matrix.

  `void ctx.putImageData(imageData, dx, dy);
  void ctx.putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData`"
  [this & args]
  (-> this .-putImageData (.apply this (clj->js args))))

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

(defn rect
  "Method.

  The CanvasRenderingContext2D.rect() method of the Canvas 2D API
  a rectangle to the current path.

  `void ctx.rect(x, y, width, height);

  The rect() method creates a rectangular path whose starting point is at (x, y) and whose size is specified by width and height.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect`"
  [this & args]
  (-> this .-rect (.apply this (clj->js args))))

(defn remove-hit-region
  "Method.

  [Experimental]

  The `web.canvas.CanvasRenderingContext2D` method removeHitRegion()
  a given hit region from the canvas.

  `void ctx.removeHitRegion(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/removeHitRegion`"
  [this id]
  (-> this (.removeHitRegion id)))

(defn reset-transform
  "Method.

  [Experimental]

  The CanvasRenderingContext2D.resetTransform() method of the Canvas
  API resets the current transform to the identity matrix.

  `void ctx.resetTransform();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform`"
  [this ]
  (-> this (.resetTransform)))

(defn restore
  "Method.

  The CanvasRenderingContext2D.restore() method of the Canvas 2D
  restores the most recently saved canvas state by popping the
  entry in the drawing state stack. If there is no saved state,
  method does nothing.

  `void ctx.restore();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore`"
  [this ]
  (-> this (.restore)))

(defn rotate
  "Method.

  The CanvasRenderingContext2D.rotate() method of the Canvas 2D
  adds a rotation to the transformation matrix.

  `void ctx.rotate(angle);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate`"
  [this angle]
  (-> this (.rotate angle)))

(defn save
  "Method.

  The CanvasRenderingContext2D.save() method of the Canvas 2D API
  the entire state of the canvas by pushing the current state onto
  stack.

  `void ctx.save();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save`"
  [this ]
  (-> this (.save)))

(defn scale
  "Method.

  The CanvasRenderingContext2D.scale() method of the Canvas 2D
  adds a scaling transformation to the canvas units horizontally
  vertically.

  `void ctx.scale(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale`"
  [this x y]
  (-> this (.scale x y)))

(defn scroll-path-into-view
  "Method.

  [Experimental]

  The CanvasRenderingContext2D.scrollPathIntoView() method of the
  2D API scrolls the current or given path into view. It is similar
  `Element.scrollIntoView()`.

  `void ctx.scrollPathIntoView();
  void ctx.scrollPathIntoView(path);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scrollPathIntoView`"
  [this & args]
  (-> this .-scrollPathIntoView (.apply this (clj->js args))))

(defn set-line-dash
  "Method.

  The setLineDash() method of the Canvas 2D API's `web.canvas.CanvasRenderingContext2D`
  sets the line dash pattern used when stroking lines. It uses
  array of values that specify alternating lengths of lines and
  which describe the pattern.

  `ctx.setLineDash(segments);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash`"
  [this segments]
  (-> this (.setLineDash segments)))

(defn set-transform
  "Method.

  The CanvasRenderingContext2D.setTransform() method of the Canvas
  API resets (overrides) the current transformation to the identity
  and then invokes a transformation described by the arguments
  this method. This lets you scale, rotate, translate (move), and
  the context.

  `void ctx.setTransform(a, b, c, d, e, f);

  The transformation matrix is described by: [acebdf001]\\\\left[ \\\\begin{array}{ccc} a & c & e \\\\\\\\ b & d & f \\\\\\\\ 0 & 0 & 1 \\\\end{array} \\\\right]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform`"
  [this & args]
  (-> this .-setTransform (.apply this (clj->js args))))

(defn stroke
  "Method.

  The CanvasRenderingContext2D.stroke() method of the Canvas 2D
  strokes (outlines) the current or given path with the current
  style.

  `void ctx.stroke();
  void ctx.stroke(path);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke`"
  [this & args]
  (-> this .-stroke (.apply this (clj->js args))))

(defn stroke-rect
  "Method.

  The CanvasRenderingContext2D.strokeRect() method of the Canvas
  API draws a rectangle that is stroked (outlined) according to
  current `strokeStyle` and other context settings.

  `void ctx.strokeRect(x, y, width, height);

  The strokeRect() method draws a stroked rectangle whose starting point is at (x, y) and whose size is specified by width and height.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect`"
  [this & args]
  (-> this .-strokeRect (.apply this (clj->js args))))

(defn stroke-text
  "Method.

  The `web.canvas.CanvasRenderingContext2D` method strokeText(),
  of the Canvas 2D API, strokes — that is, draws the outlines of
  the characters of a text string at the specified coordinates.
  optional parameter allows specifying a maximum width for the
  text, which the user agent will achieve by condensing the text
  by using a lower font size.

  `CanvasRenderingContext2D.strokeText(text, x, y [, maxWidth]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText`"
  [this & args]
  (-> this .-strokeText (.apply this (clj->js args))))

(defn transform
  "Method.

  The CanvasRenderingContext2D.transform() method of the Canvas
  API multiplies the current transformation with the matrix described
  the arguments of this method. This lets you scale, rotate, translate
  and skew the context.

  `void ctx.transform(a, b, c, d, e, f);

  The transformation matrix is described by: [acebdf001]\\\\left[ \\\\begin{array}{ccc} a & c & e \\\\\\\\ b & d & f \\\\\\\\ 0 & 0 & 1 \\\\end{array} \\\\right]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform`"
  [this & args]
  (-> this .-transform (.apply this (clj->js args))))

(defn translate
  "Method.

  The CanvasRenderingContext2D.translate() method of the Canvas
  API adds a translation transformation to the current matrix.

  `void ctx.translate(x, y);

  The translate() method adds a translation transformation to the current matrix by moving the canvas and its origin x units horizontally and y units vertically on the grid.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate`"
  [this & args]
  (-> this .-translate (.apply this (clj->js args))))

(defn canvas
  "Property.

  [Read Only]

  The CanvasRenderingContext2D.canvas property, part of the Canvas
  is a read-only reference to the `web.canvas.HTMLCanvasElement`
  that is associated with a given context. It might be `js.null`
  there is no associated `<canvas>` element.

  `ctx.canvas;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/canvas`"
  [this]
  (-> this (.-canvas)))

(defn current-transform
  "Property.

  [Experimental]

  The CanvasRenderingContext2D.currentTransform property of the
  2D API returns or sets a `web.dom.DOMMatrix` (current specification)
  `web.deprecated.SVGMatrix` (old specification) object for the
  transformation matrix.

  `ctx.currentTransform [= value];


  value
  A `web.dom.DOMMatrix` or `web.deprecated.SVGMatrix`   object to use as the current transformation matrix.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/currentTransform`"
  [this]
  (-> this (.-currentTransform)))

(defn set-current-transform!
  "Property.

  [Experimental]

  The CanvasRenderingContext2D.currentTransform property of the
  2D API returns or sets a `web.dom.DOMMatrix` (current specification)
  `web.deprecated.SVGMatrix` (old specification) object for the
  transformation matrix.

  `ctx.currentTransform [= value];


  value
  A `web.dom.DOMMatrix` or `web.deprecated.SVGMatrix`   object to use as the current transformation matrix.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/currentTransform`"
  [this val]
  (aset this "currentTransform" val))

(defn direction
  "Property.

  [Experimental]

  The CanvasRenderingContext2D.direction property of the Canvas
  API specifies the current text direction used to draw text.

  `ctx.direction = \\\"ltr\\\" || \\\"rtl\\\" || \\\"inherit\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction`"
  [this]
  (-> this (.-direction)))

(defn set-direction!
  "Property.

  [Experimental]

  The CanvasRenderingContext2D.direction property of the Canvas
  API specifies the current text direction used to draw text.

  `ctx.direction = \\\"ltr\\\" || \\\"rtl\\\" || \\\"inherit\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction`"
  [this val]
  (aset this "direction" val))

(defn fill-style
  "Property.

  The CanvasRenderingContext2D.fillStyle property of the Canvas
  API specifies the color, gradient, or pattern to use inside shapes.
  default style is #000 (black).

  `ctx.fillStyle = color;
  ctx.fillStyle = gradient;
  ctx.fillStyle = pattern;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle`"
  [this]
  (-> this (.-fillStyle)))

(defn set-fill-style!
  "Property.

  The CanvasRenderingContext2D.fillStyle property of the Canvas
  API specifies the color, gradient, or pattern to use inside shapes.
  default style is #000 (black).

  `ctx.fillStyle = color;
  ctx.fillStyle = gradient;
  ctx.fillStyle = pattern;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle`"
  [this val]
  (aset this "fillStyle" val))

(defn filter
  "Property.

  [Experimental]

  The CanvasRenderingContext2D.filter property of the Canvas 2D
  provides filter effects such as blurring and grayscaling. It
  similar to the CSS `filter` property and accepts the same values.

  `ctx.filter = \\\"<filter-function1> [<filter-function2>] [<filter-functionN>]\\\";
  ctx.filter = \\\"none\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter`"
  [this]
  (-> this (.-filter)))

(defn set-filter!
  "Property.

  [Experimental]

  The CanvasRenderingContext2D.filter property of the Canvas 2D
  provides filter effects such as blurring and grayscaling. It
  similar to the CSS `filter` property and accepts the same values.

  `ctx.filter = \\\"<filter-function1> [<filter-function2>] [<filter-functionN>]\\\";
  ctx.filter = \\\"none\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter`"
  [this val]
  (aset this "filter" val))

(defn font
  "Property.

  The CanvasRenderingContext2D.font property of the Canvas 2D API
  the current text style to use when drawing text. This string
  the same syntax as the CSS font specifier.

  `ctx.font = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font`"
  [this]
  (-> this (.-font)))

(defn set-font!
  "Property.

  The CanvasRenderingContext2D.font property of the Canvas 2D API
  the current text style to use when drawing text. This string
  the same syntax as the CSS font specifier.

  `ctx.font = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font`"
  [this val]
  (aset this "font" val))

(defn global-alpha
  "Property.

  The CanvasRenderingContext2D.globalAlpha property of the Canvas
  API specifies the alpha (transparency) value that is applied
  shapes and images before they are drawn onto the canvas.

  `ctx.globalAlpha = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha`"
  [this]
  (-> this (.-globalAlpha)))

(defn set-global-alpha!
  "Property.

  The CanvasRenderingContext2D.globalAlpha property of the Canvas
  API specifies the alpha (transparency) value that is applied
  shapes and images before they are drawn onto the canvas.

  `ctx.globalAlpha = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha`"
  [this val]
  (aset this "globalAlpha" val))

(defn global-composite-operation
  "Property.

  The CanvasRenderingContext2D.globalCompositeOperation property
  the Canvas 2D API sets the type of compositing operation to apply
  drawing new shapes.

  `ctx.globalCompositeOperation = type;

  type is a `js.String` identifying which of the compositing or blending mode operations to use.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation`"
  [this]
  (-> this (.-globalCompositeOperation)))

(defn set-global-composite-operation!
  "Property.

  The CanvasRenderingContext2D.globalCompositeOperation property
  the Canvas 2D API sets the type of compositing operation to apply
  drawing new shapes.

  `ctx.globalCompositeOperation = type;

  type is a `js.String` identifying which of the compositing or blending mode operations to use.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation`"
  [this val]
  (aset this "globalCompositeOperation" val))

(defn image-smoothing-enabled
  "Property.

  The imageSmoothingEnabled property of the `web.canvas.CanvasRenderingContext2D`
  part of the Canvas API, determines whether scaled images are
  (true, default) or not (false). On getting the imageSmoothingEnabled
  the last value it was set to is returned.

  `ctx.imageSmoothingEnabled = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled`"
  [this]
  (-> this (.-imageSmoothingEnabled)))

(defn set-image-smoothing-enabled!
  "Property.

  The imageSmoothingEnabled property of the `web.canvas.CanvasRenderingContext2D`
  part of the Canvas API, determines whether scaled images are
  (true, default) or not (false). On getting the imageSmoothingEnabled
  the last value it was set to is returned.

  `ctx.imageSmoothingEnabled = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled`"
  [this val]
  (aset this "imageSmoothingEnabled" val))

(defn image-smoothing-quality
  "Property.

  [Experimental]

  The imageSmoothingQuality property of the `web.canvas.CanvasRenderingContext2D`
  part of the Canvas API, lets you set the quality of image smoothing.

  `ctx.imageSmoothingQuality = \\\"low\\\" || \\\"medium\\\" || \\\"high\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality`"
  [this]
  (-> this (.-imageSmoothingQuality)))

(defn set-image-smoothing-quality!
  "Property.

  [Experimental]

  The imageSmoothingQuality property of the `web.canvas.CanvasRenderingContext2D`
  part of the Canvas API, lets you set the quality of image smoothing.

  `ctx.imageSmoothingQuality = \\\"low\\\" || \\\"medium\\\" || \\\"high\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality`"
  [this val]
  (aset this "imageSmoothingQuality" val))

(defn line-cap
  "Property.

  The CanvasRenderingContext2D.lineCap property of the Canvas 2D
  determines the shape used to draw the end points of lines.

  `ctx.lineCap = \\\"butt\\\" || \\\"round\\\" || \\\"square\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap`"
  [this]
  (-> this (.-lineCap)))

(defn set-line-cap!
  "Property.

  The CanvasRenderingContext2D.lineCap property of the Canvas 2D
  determines the shape used to draw the end points of lines.

  `ctx.lineCap = \\\"butt\\\" || \\\"round\\\" || \\\"square\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap`"
  [this val]
  (aset this "lineCap" val))

(defn line-dash-offset
  "Property.

  The CanvasRenderingContext2D.lineDashOffset property of the Canvas
  API sets the line dash offset, or \\\"phase.\\\"

  `ctx.lineDashOffset = value;


  value
  A float specifying the amount of the line dash offset. The default value is 0.0.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset`"
  [this]
  (-> this (.-lineDashOffset)))

(defn set-line-dash-offset!
  "Property.

  The CanvasRenderingContext2D.lineDashOffset property of the Canvas
  API sets the line dash offset, or \\\"phase.\\\"

  `ctx.lineDashOffset = value;


  value
  A float specifying the amount of the line dash offset. The default value is 0.0.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset`"
  [this val]
  (aset this "lineDashOffset" val))

(defn line-join
  "Property.

  The CanvasRenderingContext2D.lineJoin property of the Canvas
  API determines the shape used to join two line segments where
  meet.

  `ctx.lineJoin = \\\"bevel\\\" || \\\"round\\\" || \\\"miter\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin`"
  [this]
  (-> this (.-lineJoin)))

(defn set-line-join!
  "Property.

  The CanvasRenderingContext2D.lineJoin property of the Canvas
  API determines the shape used to join two line segments where
  meet.

  `ctx.lineJoin = \\\"bevel\\\" || \\\"round\\\" || \\\"miter\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin`"
  [this val]
  (aset this "lineJoin" val))

(defn line-width
  "Property.

  The CanvasRenderingContext2D.lineWidth property of the Canvas
  API sets the thickness of lines.

  `ctx.lineWidth = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth`"
  [this]
  (-> this (.-lineWidth)))

(defn set-line-width!
  "Property.

  The CanvasRenderingContext2D.lineWidth property of the Canvas
  API sets the thickness of lines.

  `ctx.lineWidth = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth`"
  [this val]
  (aset this "lineWidth" val))

(defn miter-limit
  "Property.

  The CanvasRenderingContext2D.miterLimit property of the Canvas
  API sets the miter limit ratio.

  `ctx.miterLimit = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit`"
  [this]
  (-> this (.-miterLimit)))

(defn set-miter-limit!
  "Property.

  The CanvasRenderingContext2D.miterLimit property of the Canvas
  API sets the miter limit ratio.

  `ctx.miterLimit = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit`"
  [this val]
  (aset this "miterLimit" val))

(defn shadow-blur
  "Property.

  The CanvasRenderingContext2D.shadowBlur property of the Canvas
  API specifies the amount of blur applied to shadows. The default
  0 (no blur).

  `ctx.shadowBlur = level;


  level
  A non-negative float specifying the level of shadow blur, where 0 represents no blur and larger numbers represent increasingly more blur. This value doesn't correspond to a number of pixels, and is not affected by the current transformation matrix. The default value is 0. Negative, `js.Infinity`, and `js.NaN` values are ignored.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur`"
  [this]
  (-> this (.-shadowBlur)))

(defn set-shadow-blur!
  "Property.

  The CanvasRenderingContext2D.shadowBlur property of the Canvas
  API specifies the amount of blur applied to shadows. The default
  0 (no blur).

  `ctx.shadowBlur = level;


  level
  A non-negative float specifying the level of shadow blur, where 0 represents no blur and larger numbers represent increasingly more blur. This value doesn't correspond to a number of pixels, and is not affected by the current transformation matrix. The default value is 0. Negative, `js.Infinity`, and `js.NaN` values are ignored.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur`"
  [this val]
  (aset this "shadowBlur" val))

(defn shadow-color
  "Property.

  The CanvasRenderingContext2D.shadowColor property of the Canvas
  API specifies the color of shadows.

  `ctx.shadowColor = color;


  color
  A `web.dom.DOMString` parsed as a CSS `<color>` value. The default value is fully-transparent black.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor`"
  [this]
  (-> this (.-shadowColor)))

(defn set-shadow-color!
  "Property.

  The CanvasRenderingContext2D.shadowColor property of the Canvas
  API specifies the color of shadows.

  `ctx.shadowColor = color;


  color
  A `web.dom.DOMString` parsed as a CSS `<color>` value. The default value is fully-transparent black.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor`"
  [this val]
  (aset this "shadowColor" val))

(defn shadow-offset-x
  "Property.

  The CanvasRenderingContext2D.shadowOffsetX property of the Canvas
  API specifies the distance that shadows will be offset horizontally.

  `ctx.shadowOffsetX = offset;


  offset
  A float specifying the distance that shadows will be offset horizontally. Positive values are to the right, and negative to the left. The default value is 0 (no horizontal offset). `js.Infinity` and `js.NaN` values are ignored.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX`"
  [this]
  (-> this (.-shadowOffsetX)))

(defn set-shadow-offset-x!
  "Property.

  The CanvasRenderingContext2D.shadowOffsetX property of the Canvas
  API specifies the distance that shadows will be offset horizontally.

  `ctx.shadowOffsetX = offset;


  offset
  A float specifying the distance that shadows will be offset horizontally. Positive values are to the right, and negative to the left. The default value is 0 (no horizontal offset). `js.Infinity` and `js.NaN` values are ignored.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX`"
  [this val]
  (aset this "shadowOffsetX" val))

(defn shadow-offset-y
  "Property.

  The CanvasRenderingContext2D.shadowOffsetY property of the Canvas
  API specifies the distance that shadows will be offset vertically.

  `ctx.shadowOffsetY = offset;


  offset
  A float specifying the distance that shadows will be offset vertically. Positive values are down, and negative are up. The default value is 0 (no vertical offset). `js.Infinity` and `js.NaN` values are ignored.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY`"
  [this]
  (-> this (.-shadowOffsetY)))

(defn set-shadow-offset-y!
  "Property.

  The CanvasRenderingContext2D.shadowOffsetY property of the Canvas
  API specifies the distance that shadows will be offset vertically.

  `ctx.shadowOffsetY = offset;


  offset
  A float specifying the distance that shadows will be offset vertically. Positive values are down, and negative are up. The default value is 0 (no vertical offset). `js.Infinity` and `js.NaN` values are ignored.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY`"
  [this val]
  (aset this "shadowOffsetY" val))

(defn stroke-style
  "Property.

  The CanvasRenderingContext2D.strokeStyle property of the Canvas
  API specifies the color, gradient, or pattern to use for the
  (outlines) around shapes. The default is #000 (black).

  `ctx.strokeStyle = color;
  ctx.strokeStyle = gradient;
  ctx.strokeStyle = pattern;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle`"
  [this]
  (-> this (.-strokeStyle)))

(defn set-stroke-style!
  "Property.

  The CanvasRenderingContext2D.strokeStyle property of the Canvas
  API specifies the color, gradient, or pattern to use for the
  (outlines) around shapes. The default is #000 (black).

  `ctx.strokeStyle = color;
  ctx.strokeStyle = gradient;
  ctx.strokeStyle = pattern;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle`"
  [this val]
  (aset this "strokeStyle" val))

(defn text-align
  "Property.

  The CanvasRenderingContext2D.textAlign property of the Canvas
  API specifies the current text alignment used when drawing text.

  `ctx.textAlign = \\\"left\\\" || \\\"right\\\" || \\\"center\\\" || \\\"start\\\" || \\\"end\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign`"
  [this]
  (-> this (.-textAlign)))

(defn set-text-align!
  "Property.

  The CanvasRenderingContext2D.textAlign property of the Canvas
  API specifies the current text alignment used when drawing text.

  `ctx.textAlign = \\\"left\\\" || \\\"right\\\" || \\\"center\\\" || \\\"start\\\" || \\\"end\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign`"
  [this val]
  (aset this "textAlign" val))

(defn text-baseline
  "Property.

  The CanvasRenderingContext2D.textBaseline property of the Canvas
  API specifies the current text baseline used when drawing text.

  `ctx.textBaseline = \\\"top\\\" || \\\"hanging\\\" || \\\"middle\\\" || \\\"alphabetic\\\" || \\\"ideographic\\\" || \\\"bottom\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline`"
  [this]
  (-> this (.-textBaseline)))

(defn set-text-baseline!
  "Property.

  The CanvasRenderingContext2D.textBaseline property of the Canvas
  API specifies the current text baseline used when drawing text.

  `ctx.textBaseline = \\\"top\\\" || \\\"hanging\\\" || \\\"middle\\\" || \\\"alphabetic\\\" || \\\"ideographic\\\" || \\\"bottom\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline`"
  [this val]
  (aset this "textBaseline" val))

