(ns web.dom.DOMRectReadOnly
  "The DOMRectReadOnly interface specifies the standard properties
  by `web.dom.DOMRect` to define a rectangle."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMRectReadOnly() constructor creates a new `web.dom.DOMRectReadOnly` object.

  x
  The x coordinate of the DOMRectReadOnly's origin.
  y
  The y coordinate of the DOMRectReadOnly's origin.
  width
  The width of the DOMRectReadOnly.
  height
  The height of the DOMRectReadOnly.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/DOMRectReadOnly`"
  js/DOMRectReadOnly)

(defn from-rect
  "Method.

  The fromRect() property of the `web.dom.DOMRectReadOnly` interface
  a new DOMRectReadOnly object with a given location and dimensions.

  `var domRect = DOMRectReadOnly.fromRect(rectangle)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/fromRect`"
  [this rectangle]
  (-> this (.fromRect rectangle)))

(defn bottom
  "Property.

  The bottom read-only property of the DOMRectReadOnly interface
  the bottom coordinate value of the DOMRect. (Has the same value
  y height, or y if height is negative.)

  `var recBottom = DOMRect.bottom;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/bottom`"
  [this]
  (-> this (.bottom)))

(defn set-bottom!
  "Property.

  The bottom read-only property of the DOMRectReadOnly interface
  the bottom coordinate value of the DOMRect. (Has the same value
  y height, or y if height is negative.)

  `var recBottom = DOMRect.bottom;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/bottom`"
  [this val]
  (aset this "bottom" val))

(defn height
  "Property.

  The height read-only property of the DOMRectReadOnly interface
  the height of the DOMRect.

  `var recHeight = DOMRect.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The height read-only property of the DOMRectReadOnly interface
  the height of the DOMRect.

  `var recHeight = DOMRect.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/height`"
  [this val]
  (aset this "height" val))

(defn left
  "Property.

  The left read-only property of the DOMRectReadOnly interface
  the left coordinate value of the DOMRect. (Has the same value
  x, or x width if width is negative.)

  `var recLeft = DOMRect.left;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/left`"
  [this]
  (-> this (.left)))

(defn set-left!
  "Property.

  The left read-only property of the DOMRectReadOnly interface
  the left coordinate value of the DOMRect. (Has the same value
  x, or x width if width is negative.)

  `var recLeft = DOMRect.left;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/left`"
  [this val]
  (aset this "left" val))

(defn right
  "Property.

  The right read-only property of the DOMRectReadOnly interface
  the right coordinate value of the DOMRect. (Has the same value
  x width, or x if width is negative.)

  `var recRight = DOMRect.right;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/right`"
  [this]
  (-> this (.right)))

(defn set-right!
  "Property.

  The right read-only property of the DOMRectReadOnly interface
  the right coordinate value of the DOMRect. (Has the same value
  x width, or x if width is negative.)

  `var recRight = DOMRect.right;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/right`"
  [this val]
  (aset this "right" val))

(defn top
  "Property.

  The top read-only property of the DOMRectReadOnly interface returns
  top coordinate value of the DOMRect. (Has the same value as y,
  y height if height is negative.)

  `var recTop = DOMRect.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/top`"
  [this]
  (-> this (.top)))

(defn set-top!
  "Property.

  The top read-only property of the DOMRectReadOnly interface returns
  top coordinate value of the DOMRect. (Has the same value as y,
  y height if height is negative.)

  `var recTop = DOMRect.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/top`"
  [this val]
  (aset this "top" val))

(defn width
  "Property.

  The width read-only property of the DOMRectReadOnly interface
  the width of the DOMRect.

  `var recWidth = DOMRect.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The width read-only property of the DOMRectReadOnly interface
  the width of the DOMRect.

  `var recWidth = DOMRect.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/width`"
  [this val]
  (aset this "width" val))
