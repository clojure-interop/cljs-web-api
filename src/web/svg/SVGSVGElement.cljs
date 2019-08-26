(ns web.svg.SVGSVGElement
  "The SVGSVGElement interface provides access to the properties
  `<svg>` elements, as well as methods to manipulate them. This
  contains also various miscellaneous commonly-used utility methods,
  as matrix operations and the ability to control the time of redraw
  visual rendering devices."
  (:refer-clojure :exclude []))

(defn suspend-redraw
  "Method.

  Takes a time-out value which indicates that redraw shall not
  until:
  the corresponding unsuspendRedraw() call has been made, an unsuspendRedrawAll()
  has been made, or its timer has timed out.
  In environments that do not support interactivity (e.g., print
  then redraw shall not be suspended. Calls to suspendRedraw()
  unsuspendRedraw() should, but need not be, made in balanced pairs.
  To suspend redraw actions as a collection of SVG DOM changes
  precede the changes to the SVG DOM with a method call similar
  suspendHandleID = suspendRedraw(maxWaitMilliseconds);
  and follow the changes with a method call similar to:
  unsuspendRedraw(suspendHandleID);
  Note that multiple suspendRedraw calls can be used at once and
  each such method call is treated independently of the other suspendRedraw
  calls."
  [this & args]
  (apply (-> this .-suspendRedraw) (concat [this] args)))

(defn unsuspend-redraw
  "Method.

  Cancels a specified suspendRedraw() by providing a unique suspend
  ID that was returned by a previous suspendRedraw() call."
  [this & args]
  (apply (-> this .-unsuspendRedraw) (concat [this] args)))

(defn unsuspend-redraw-all
  "Method.

  Cancels all currently active suspendRedraw() method calls. This
  is most useful at the very end of a set of SVG DOM calls to ensure
  all pending suspendRedraw() method calls have been cancelled."
  [this & args]
  (apply (-> this .-unsuspendRedrawAll) (concat [this] args)))

(defn force-redraw
  "Method.

  In rendering environments supporting interactivity, forces the
  agent to immediately redraw all regions of the viewport that
  updating."
  [this & args]
  (apply (-> this .-forceRedraw) (concat [this] args)))

(defn pause-animations
  "Method.

  Suspends (i.e., pauses) all currently running animations that
  defined within the SVG document fragment corresponding to this
  element, causing the animation clock corresponding to this document
  to stand still until it is unpaused."
  [this & args]
  (apply (-> this .-pauseAnimations) (concat [this] args)))

(defn unpause-animations
  "Method.

  Unsuspends (i.e., unpauses) currently running animations that
  defined within the SVG document fragment, causing the animation
  to continue from the time at which it was suspended."
  [this & args]
  (apply (-> this .-unpauseAnimations) (concat [this] args)))

(defn animations-paused
  "Method.

  Returns true if this SVG document fragment is in a paused state."
  [this & args]
  (apply (-> this .-animationsPaused) (concat [this] args)))

(defn get-current-time
  "Method.

  Returns the current time in seconds relative to the start time
  the current SVG document fragment. If getCurrentTime is called
  the document timeline has begun (for example, by script running
  a <script> element before the document's SVGLoad event is dispatched),
  0 is returned."
  [this & args]
  (apply (-> this .-getCurrentTime) (concat [this] args)))

(defn set-current-time
  "Method.

  Adjusts the clock for this SVG document fragment, establishing
  new current time. If setCurrentTime is called before the document
  has begun (for example, by script running in a <script> element
  the document's SVGLoad event is dispatched), then the value of
  in the last invocation of the method gives the time that the
  will seek to once the document timeline has begun."
  [this & args]
  (apply (-> this .-setCurrentTime) (concat [this] args)))

(defn get-intersection-list
  "Method.

  Returns a NodeList of graphics elements whose rendered content
  the supplied rectangle. Each candidate graphics element is to
  considered a match only if the same graphics element can be a
  of pointer events as defined in pointer-events processing."
  [this & args]
  (apply (-> this .-getIntersectionList) (concat [this] args)))

(defn get-enclosure-list
  "Method.

  Returns a NodeList of graphics elements whose rendered content
  entirely contained within the supplied rectangle. Each candidate
  element is to be considered a match only if the same graphics
  can be a target of pointer events as defined in pointer-events"
  [this & args]
  (apply (-> this .-getEnclosureList) (concat [this] args)))

(defn check-intersection
  "Method.

  Returns true if the rendered content of the given element intersects
  supplied rectangle. Each candidate graphics element is to be
  a match only if the same graphics element can be a target of
  events as defined in pointer-events processing."
  [this & args]
  (apply (-> this .-checkIntersection) (concat [this] args)))

(defn check-enclosure
  "Method.

  Returns true if the rendered content of the given element is
  contained within the supplied rectangle. Each candidate graphics
  is to be considered a match only if the same graphics element
  be a target of pointer events as defined in pointer-events processing."
  [this & args]
  (apply (-> this .-checkEnclosure) (concat [this] args)))

(defn deselect-all
  "Method.

  Unselects any selected objects, including any selections of text
  and type-in bars."
  [this & args]
  (apply (-> this .-deselectAll) (concat [this] args)))

(defn create-svg-number
  "Method.

  Creates an SVGNumber object outside of any document trees. The
  is initialized to a value of zero."
  [this & args]
  (apply (-> this .-createSVGNumber) (concat [this] args)))

(defn create-svg-length
  "Method.

  Creates an SVGLength object outside of any document trees. The
  is initialized to a value of zero user units."
  [this & args]
  (apply (-> this .-createSVGLength) (concat [this] args)))

(defn create-svg-angle
  "Method.

  Creates an SVGAngle object outside of any document trees. The
  is initialized to a value of zero degrees (unitless)."
  [this & args]
  (apply (-> this .-createSVGAngle) (concat [this] args)))

(defn create-svg-point
  "Method.

  Creates an SVGPoint object outside of any document trees. The
  is initialized to the point (0,0) in the user coordinate system."
  [this & args]
  (apply (-> this .-createSVGPoint) (concat [this] args)))

(defn create-svg-matrix
  "Method.

  Creates an SVGMatrix object outside of any document trees. The
  is initialized to the identity matrix."
  [this & args]
  (apply (-> this .-createSVGMatrix) (concat [this] args)))

(defn create-svg-rect
  "Method.

  Creates an SVGRect object outside of any document trees. The
  is initialized such that all values are set to 0 user units."
  [this & args]
  (apply (-> this .-createSVGRect) (concat [this] args)))

(defn create-svg-transform
  "Method.

  Creates an SVGTransform object outside of any document trees.
  object is initialized to an identity matrix transform (SVG_TRANSFORM_MATRIX)."
  [this & args]
  (apply (-> this .-createSVGTransform) (concat [this] args)))

(defn create-svg-transform-from-matrix
  "Method.

  Creates an SVGTransform object outside of any document trees.
  object is initialized to the given matrix transform (i.e., SVG_TRANSFORM_MATRIX).
  values from the parameter matrix are copied, the matrix parameter
  not adopted as SVGTransform::matrix."
  [this & args]
  (apply (-> this .-createSVGTransformFromMatrix) (concat [this] args)))

(defn get-element-by-id
  "Method.

  Searches this SVG document fragment (i.e., the search is restricted
  a subset of the document tree) for an Element whose id is given
  elementId. If an Element is found, that Element is returned.
  no such element exists, returns null. Behavior is not defined
  more than one element has this id."
  [this & args]
  (apply (-> this .-getElementById) (concat [this] args)))

(defn x
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <svg> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <svg> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  <svg> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  <svg> element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given <svg> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given <svg> element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given <svg> element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given <svg> element."
  [this val]
  (aset this "height" val))

(defn content-script-type
  "Property.

  An SVGAnimatedLength corresponding to the contentScriptType attribute
  the given <svg> element."
  [this]
  (-> this (.-contentScriptType)))

(defn set-content-script-type!
  "Property.

  An SVGAnimatedLength corresponding to the contentScriptType attribute
  the given <svg> element."
  [this val]
  (aset this "contentScriptType" val))

(defn content-style-type
  "Property.

  An SVGAnimatedLength corresponding to the contentStyleType attribute
  the given <svg> element."
  [this]
  (-> this (.-contentStyleType)))

(defn set-content-style-type!
  "Property.

  An SVGAnimatedLength corresponding to the contentStyleType attribute
  the given <svg> element."
  [this val]
  (aset this "contentStyleType" val))

(defn viewport
  "Property.

  An SVGRect containing the position and size of the viewport (implicit
  explicit) that corresponds to the given <svg> element. When the
  is actually rendering the content, then the position and size
  represent the actual values when rendering. The position and
  values are unitless values in the coordinate system of the parent
  If no parent element exists (i.e., <svg> element represents the
  of the document tree), if this SVG document is embedded as part
  another document (e.g., via the HTML <object> element), then
  position and size are unitless values in the coordinate system
  the parent document. (If the parent uses CSS or XSL layout, then
  values represent pixel units for the current CSS or XSL viewport.)"
  [this]
  (-> this (.-viewport)))

(defn set-viewport!
  "Property.

  An SVGRect containing the position and size of the viewport (implicit
  explicit) that corresponds to the given <svg> element. When the
  is actually rendering the content, then the position and size
  represent the actual values when rendering. The position and
  values are unitless values in the coordinate system of the parent
  If no parent element exists (i.e., <svg> element represents the
  of the document tree), if this SVG document is embedded as part
  another document (e.g., via the HTML <object> element), then
  position and size are unitless values in the coordinate system
  the parent document. (If the parent uses CSS or XSL layout, then
  values represent pixel units for the current CSS or XSL viewport.)"
  [this val]
  (aset this "viewport" val))

(defn pixel-unit-to-millimeter-x
  "Property.

  A float representing the size of the pixel unit (as defined by
  along the x-axis of the viewport, which represents a unit somewhere
  the range of 70dpi to 120dpi, and, on systems that support this,
  actually match the characteristics of the target medium. On systems
  it is impossible to know the size of a pixel, a suitable default
  size is provided."
  [this]
  (-> this (.-pixelUnitToMillimeterX)))

(defn set-pixel-unit-to-millimeter-x!
  "Property.

  A float representing the size of the pixel unit (as defined by
  along the x-axis of the viewport, which represents a unit somewhere
  the range of 70dpi to 120dpi, and, on systems that support this,
  actually match the characteristics of the target medium. On systems
  it is impossible to know the size of a pixel, a suitable default
  size is provided."
  [this val]
  (aset this "pixelUnitToMillimeterX" val))

(defn pixel-unit-to-millimeter-y
  "Property.

  A float representing the size of a pixel unit along the y-axis
  the viewport."
  [this]
  (-> this (.-pixelUnitToMillimeterY)))

(defn set-pixel-unit-to-millimeter-y!
  "Property.

  A float representing the size of a pixel unit along the y-axis
  the viewport."
  [this val]
  (aset this "pixelUnitToMillimeterY" val))

(defn screen-pixel-to-millimeter-x
  "Property.

  User interface (UI) events in DOM Level 2 indicate the screen
  at which the given UI event occurred. When the browser actually
  the physical size of a \"screen unit\", this float attribute will
  that information; otherwise, user agents will provide a suitable
  value such as .28mm."
  [this]
  (-> this (.-screenPixelToMillimeterX)))

(defn set-screen-pixel-to-millimeter-x!
  "Property.

  User interface (UI) events in DOM Level 2 indicate the screen
  at which the given UI event occurred. When the browser actually
  the physical size of a \"screen unit\", this float attribute will
  that information; otherwise, user agents will provide a suitable
  value such as .28mm."
  [this val]
  (aset this "screenPixelToMillimeterX" val))

(defn screen-pixel-to-millimeter-y
  "Property.

  Corresponding size of a screen pixel along the y-axis of the"
  [this]
  (-> this (.-screenPixelToMillimeterY)))

(defn set-screen-pixel-to-millimeter-y!
  "Property.

  Corresponding size of a screen pixel along the y-axis of the"
  [this val]
  (aset this "screenPixelToMillimeterY" val))

(defn use-current-view
  "Property.

  The initial view (i.e., before magnification and panning) of
  current innermost SVG document fragment can be either the \"standard\"
  i.e., based on attributes on the <svg> element such as viewBox)
  on a \"custom\" view (i.e., a hyperlink into a particular <view>
  other element). If the initial view is the \"standard\" view, then
  attribute is false. If the initial view is a \"custom\" view, then
  attribute is true."
  [this]
  (-> this (.-useCurrentView)))

(defn set-use-current-view!
  "Property.

  The initial view (i.e., before magnification and panning) of
  current innermost SVG document fragment can be either the \"standard\"
  i.e., based on attributes on the <svg> element such as viewBox)
  on a \"custom\" view (i.e., a hyperlink into a particular <view>
  other element). If the initial view is the \"standard\" view, then
  attribute is false. If the initial view is a \"custom\" view, then
  attribute is true."
  [this val]
  (aset this "useCurrentView" val))

(defn current-view
  "Property.

  An SVGViewSpec defining the initial view (i.e., before magnification
  panning) of the current innermost SVG document fragment. The
  depends on the situation: If the initial view was a \"standard\"
  then:
  the values for viewBox, preserveAspectRatio and zoomAndPan within
  will match the values for the corresponding DOM attributes that
  on SVGSVGElement directly
  the values for transform and viewTarget within currentView will
  null
  If the initial view was a link into a <view> element, then:
  the values for viewBox, preserveAspectRatio and zoomAndPan within
  will correspond to the corresponding attributes for the given
  element
  the values for transform and viewTarget within currentView will
  null
  If the initial view was a link into another element (i.e., other
  a <view>), then:
  the values for viewBox, preserveAspectRatio and zoomAndPan within
  will match the values for the corresponding DOM attributes that
  on SVGSVGElement directly for the closest ancestor <svg> element
  the values for transform within currentView will be null
  the viewTarget within currentView will represent the target
  the link
  If the initial view was a link into the SVG document fragment
  an SVG view specification fragment identifier (i.e., #svgView(...)),
  the values for viewBox, preserveAspectRatio, zoomAndPan, transform
  viewTarget within currentView will correspond to the values from
  SVG view specification fragment identifier"
  [this]
  (-> this (.-currentView)))

(defn set-current-view!
  "Property.

  An SVGViewSpec defining the initial view (i.e., before magnification
  panning) of the current innermost SVG document fragment. The
  depends on the situation: If the initial view was a \"standard\"
  then:
  the values for viewBox, preserveAspectRatio and zoomAndPan within
  will match the values for the corresponding DOM attributes that
  on SVGSVGElement directly
  the values for transform and viewTarget within currentView will
  null
  If the initial view was a link into a <view> element, then:
  the values for viewBox, preserveAspectRatio and zoomAndPan within
  will correspond to the corresponding attributes for the given
  element
  the values for transform and viewTarget within currentView will
  null
  If the initial view was a link into another element (i.e., other
  a <view>), then:
  the values for viewBox, preserveAspectRatio and zoomAndPan within
  will match the values for the corresponding DOM attributes that
  on SVGSVGElement directly for the closest ancestor <svg> element
  the values for transform within currentView will be null
  the viewTarget within currentView will represent the target
  the link
  If the initial view was a link into the SVG document fragment
  an SVG view specification fragment identifier (i.e., #svgView(...)),
  the values for viewBox, preserveAspectRatio, zoomAndPan, transform
  viewTarget within currentView will correspond to the values from
  SVG view specification fragment identifier"
  [this val]
  (aset this "currentView" val))

(defn current-scale
  "Property.

  On an outermost <svg> element, this float attribute indicates
  current scale factor relative to the initial view to take into
  user magnification and panning operations. DOM attributes currentScale
  currentTranslate are equivalent to the 2x3 matrix [a b c d e
  = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y].
  \"magnification\" is enabled (i.e., zoomAndPan=\"magnify\"), then
  effect is as if an extra transformation were placed at the outermost
  on the SVG document fragment (i.e., outside the outermost <svg>"
  [this]
  (-> this (.-currentScale)))

(defn set-current-scale!
  "Property.

  On an outermost <svg> element, this float attribute indicates
  current scale factor relative to the initial view to take into
  user magnification and panning operations. DOM attributes currentScale
  currentTranslate are equivalent to the 2x3 matrix [a b c d e
  = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y].
  \"magnification\" is enabled (i.e., zoomAndPan=\"magnify\"), then
  effect is as if an extra transformation were placed at the outermost
  on the SVG document fragment (i.e., outside the outermost <svg>"
  [this val]
  (aset this "currentScale" val))

(defn current-translate
  "Property.

  An SVGPoint representing the translation factor that takes into
  user \"magnification\" corresponding to an outermost <svg> element.
  behavior is undefined for <svg> elements that are not at the
  level."
  [this]
  (-> this (.-currentTranslate)))

(defn set-current-translate!
  "Property.

  An SVGPoint representing the translation factor that takes into
  user \"magnification\" corresponding to an outermost <svg> element.
  behavior is undefined for <svg> elements that are not at the
  level."
  [this val]
  (aset this "currentTranslate" val))

