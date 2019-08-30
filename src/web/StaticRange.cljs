(ns web.StaticRange
  "The StaticRange interface provides attributes that track the
  and end position of a range, and a boolean attribute indicating
  the current range is collapsed into a single position."
  (:refer-clojure :exclude []))

(defn to-range
  "Method.

  [Experimental]

  The toRange() property of the `web.StaticRange` interface converts
  StaticRange object to a `web.Range` object.

  `var range = staticRange.toRange()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/toRange`"
  [this ]
  (-> this (.toRange)))

(defn start-container
  "Property.

  [Experimental]

  The startContainer property of the `web.StaticRange` interface
  the start `web.Node` for the range.

  `var node = staticNode.startContainer
  staticNode.startContainer = startContainer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startContainer`"
  [this]
  (-> this (.-startContainer)))

(defn set-start-container!
  "Property.

  [Experimental]

  The startContainer property of the `web.StaticRange` interface
  the start `web.Node` for the range.

  `var node = staticNode.startContainer
  staticNode.startContainer = startContainer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startContainer`"
  [this val]
  (aset this "startContainer" val))

(defn start-offset
  "Property.

  [Experimental]

  The startOffset property of the `web.StaticRange` interface returns
  offset into the start node of the range's start position.

  `var startOffset = staticRange.startOffset
  staticRange.startOffset = startOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startOffset`"
  [this]
  (-> this (.-startOffset)))

(defn set-start-offset!
  "Property.

  [Experimental]

  The startOffset property of the `web.StaticRange` interface returns
  offset into the start node of the range's start position.

  `var startOffset = staticRange.startOffset
  staticRange.startOffset = startOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startOffset`"
  [this val]
  (aset this "startOffset" val))

(defn end-container
  "Property.

  [Experimental]

  The endContainer property of the `web.StaticRange` interface
  the end `web.Node` for the range.

  `var node = staticNode.endContainer
  staticNode.endContainer = endContainer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endContainer`"
  [this]
  (-> this (.-endContainer)))

(defn set-end-container!
  "Property.

  [Experimental]

  The endContainer property of the `web.StaticRange` interface
  the end `web.Node` for the range.

  `var node = staticNode.endContainer
  staticNode.endContainer = endContainer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endContainer`"
  [this val]
  (aset this "endContainer" val))

(defn end-offset
  "Property.

  [Experimental]

  The endOffset property of the `web.StaticRange` interface returns
  offset into the end node of the range's end position.

  `var endOffset = staticRange.endOffset
  staticRange.endOffset = endOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endOffset`"
  [this]
  (-> this (.-endOffset)))

(defn set-end-offset!
  "Property.

  [Experimental]

  The endOffset property of the `web.StaticRange` interface returns
  offset into the end node of the range's end position.

  `var endOffset = staticRange.endOffset
  staticRange.endOffset = endOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endOffset`"
  [this val]
  (aset this "endOffset" val))

(defn collapsed
  "Property.

  [Read Only]
  [Experimental]

  The collapsed read-only property of the `web.StaticRange` interface
  true if the range's start position and end position are the same.

  `var boolean = staticRange.collapsed`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/collapsed`"
  [this]
  (-> this (.-collapsed)))

