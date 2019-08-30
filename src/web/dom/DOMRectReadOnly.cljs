(ns web.dom.DOMRectReadOnly
  "The DOMRectReadOnly interface specifies the standard properties
  by `web.dom.DOMRect` to define a rectangle."
  (:refer-clojure :exclude []))

(defn from-rect
  "Method.

  [Experimental]

  The fromRect() property of the `web.dom.DOMRectReadOnly` interface
  a new DOMRectReadOnly object with a given location and dimensions.

  `var domRect = DOMRectReadOnly.fromRect(rectangle)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/fromRect`"
  [this rectangle]
  (-> this (.fromRect rectangle)))

(defn x
  "Property.

  [Read Only]
  [Experimental]

  The x read-only property of the DOMRectReadOnly interface represents
  x coordinate of the DOMRect's origin.

  `var recX = DOMRect.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]
  [Experimental]

  The y read-only property of the DOMRectReadOnly interface represents
  y coordinate of the DOMRect's origin.

  `var recY = DOMRect.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/y`"
  [this]
  (-> this (.-y)))

(defn width
  "Property.

  [Read Only]
  [Experimental]

  The width read-only property of the DOMRectReadOnly interface
  the width of the DOMRect.

  `var recWidth = DOMRect.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/width`"
  [this]
  (-> this (.-width)))

(defn height
  "Property.

  [Read Only]
  [Experimental]

  The height read-only property of the DOMRectReadOnly interface
  the height of the DOMRect.

  `var recHeight = DOMRect.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/height`"
  [this]
  (-> this (.-height)))

(defn top
  "Property.

  [Read Only]
  [Experimental]

  The top read-only property of the DOMRectReadOnly interface returns
  top coordinate value of the DOMRect. (Has the same value as y,
  y height if height is negative.)

  `var recTop = DOMRect.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/top`"
  [this]
  (-> this (.-top)))

(defn right
  "Property.

  [Read Only]
  [Experimental]

  The right read-only property of the DOMRectReadOnly interface
  the right coordinate value of the DOMRect. (Has the same value
  x width, or x if width is negative.)

  `var recRight = DOMRect.right;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/right`"
  [this]
  (-> this (.-right)))

(defn bottom
  "Property.

  [Read Only]
  [Experimental]

  The bottom read-only property of the DOMRectReadOnly interface
  the bottom coordinate value of the DOMRect. (Has the same value
  y height, or y if height is negative.)

  `var recBottom = DOMRect.bottom;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/bottom`"
  [this]
  (-> this (.-bottom)))

(defn left
  "Property.

  [Read Only]
  [Experimental]

  The left read-only property of the DOMRectReadOnly interface
  the left coordinate value of the DOMRect. (Has the same value
  x, or x width if width is negative.)

  `var recLeft = DOMRect.left;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/left`"
  [this]
  (-> this (.-left)))

