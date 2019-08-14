(ns web.Range
  "The Range interface represents a fragment of a document that
  contain nodes and parts of text nodes."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Range() constructor returns a newly created `web.Range` object whose start and end is the global `web.Document` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/Range`"
  js/Range)

(defn clone-contents
  "Method.

  The Range.cloneContents() returns a `web.DocumentFragment` copying
  objects of type `web.Node` included in the `web.Range`.

  `documentFragment = range.cloneContents();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneContents`"
  [this ]
  (-> this (.cloneContents)))

(defn clone-range
  "Method.

  The Range.cloneRange() method returns a `web.Range` object with
  points identical to the cloned `web.Range`.

  `clone = range.cloneRange();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneRange`"
  [this ]
  (-> this (.cloneRange)))

(defn collapse
  "Method.

  The Range.collapse() method collapses the `web.Range` to one
  its boundary points.

  `range.collapse(toStart);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/collapse`"
  [this to-start]
  (-> this (.collapse to-start)))

(defn compare-boundary-points
  "Method.

  The Range.compareBoundaryPoints() method compares the boundary
  of the `web.Range` with another one.

  `compare = range.compareBoundaryPoints(how, sourceRange);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/compareBoundaryPoints`"
  [this how source-range]
  (-> this (.compareBoundaryPoints how source-range)))

(defn compare-node
  "Method.

  The Range.compareNode() returns a constant indicating the position
  the `web.Node`.

  `returnValue = range.compareNode( referenceNode );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/compareNode`"
  [this & args]
  (apply (-> this .-compareNode) (concat [this] args)))

(defn compare-point
  "Method.

  The Range.comparePoint() method returns -1, 0, or 1 depending
  whether the referenceNode is before, the same as, or after the

  `returnValue = range.comparePoint(referenceNode, offset)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/comparePoint`"
  [this reference-node offset]
  (-> this (.comparePoint reference-node offset)))

(defn create-contextual-fragment
  "Method.

  The Range.createContextualFragment() method returns a `web.DocumentFragment`
  invoking the HTML fragment parsing algorithm or the XML fragment
  algorithm with the start of the range (the parent of the selected
  as the context node. The HTML fragment parsing algorithm is used
  the range belongs to a Document whose HTMLness bit is set. In
  HTML case, if the context node would be html, for historical
  the fragment parsing algorithm is invoked with body as the context

  `documentFragment = range.createContextualFragment(tagString)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment`"
  [this tag-string]
  (-> this (.createContextualFragment tag-string)))

(defn delete-contents
  "Method.

  The Range.deleteContents() method removes the contents of the
  from the `web.Document`.

  `range.deleteContents()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents`"
  [this ]
  (-> this (.deleteContents)))

(defn detach
  "Method.

  The Range.detach() method does nothing. It used to disable the
  object and enable the browser to release associated resources.
  method has been kept for compatibility.

  `range.detach();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/detach`"
  [this ]
  (-> this (.detach)))

(defn extract-contents
  "Method.

  The Range.extractContents() method moves contents of the `web.Range`
  the document tree into a `web.DocumentFragment`.

  `documentFragment = range.extractContents();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/extractContents`"
  [this ]
  (-> this (.extractContents)))

(defn get-bounding-client-rect
  "Method.

  The Range.getBoundingClientRect() method returns a `dom.DOMRect`
  that bounds the contents of the range; this is a rectangle enclosing
  union of the bounding rectangles for all the elements in the

  `boundingRect = range.getBoundingClientRect()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/getBoundingClientRect`"
  [this ]
  (-> this (.getBoundingClientRect)))

(defn get-client-rects
  "Method.

  The Range.getClientRects() method returns a list of `dom.DOMRect`
  representing the area of the screen occupied by the range. This
  created by aggregating the results of calls to `web.Element.getClientRects()`
  all the elements in the range.

  `rectList = range.getClientRects()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/getClientRects`"
  [this ]
  (-> this (.getClientRects)))

(defn insert-node
  "Method.

  The Range.insertNode() method inserts a node at the start of
  `web.Range`.

  `range.insertNode(newNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode`"
  [this new-node]
  (-> this (.insertNode new-node)))

(defn intersects-node
  "Method.

  The Range.intersectsNode() method returns a boolean indicating
  the given `web.Node` intersects the `web.Range`.

  `bool = range.intersectsNode( referenceNode )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/intersectsNode`"
  [this & args]
  (apply (-> this .-intersectsNode) (concat [this] args)))

(defn is-point-in-range
  "Method.

  The Range.isPointInRange() method returns a boolean indicating
  the given point is in the `web.Range`. It returns true if the
  (cursor position) at offset within ReferenceNode is within this

  `bool = range.isPointInRange( referenceNode, offset )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/isPointInRange`"
  [this & args]
  (apply (-> this .-isPointInRange) (concat [this] args)))

(defn select-node
  "Method.

  The Range.selectNode() method sets the `web.Range` to contain
  `web.Node` and its contents. The parent `web.Node` of the start
  end of the `web.Range` will be the same as the parent of the

  `range.selectNode(referenceNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNode`"
  [this reference-node]
  (-> this (.selectNode reference-node)))

(defn select-node-contents
  "Method.

  The Range.selectNodeContents() method sets the `web.Range` to
  the contents of a `web.Node`.

  `range.selectNodeContents(referenceNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNodeContents`"
  [this reference-node]
  (-> this (.selectNodeContents reference-node)))

(defn set-end
  "Method.

  The Range.setEnd() method sets the end position of a `web.Range`.

  `range.setEnd(endNode, endOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setEnd`"
  [this end-node end-offset]
  (-> this (.setEnd end-node end-offset)))

(defn set-end-after
  "Method.

  The Range.setEndAfter() method sets the end position of a `web.Range`
  to another `web.Node`. The parent Node of end of the Range will
  the same as that for the referenceNode.

  `range.setEndAfter(referenceNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndAfter`"
  [this reference-node]
  (-> this (.setEndAfter reference-node)))

(defn set-end-before
  "Method.

  The Range.setEndBefore() method sets the end position of a Range
  to another `web.Node`. The parent Node of end of the Range will
  the same as that for the referenceNode.

  `range.setEndBefore(referenceNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndBefore`"
  [this reference-node]
  (-> this (.setEndBefore reference-node)))

(defn set-start
  "Method.

  The Range.setStart() method sets the start position of a `web.Range`.

  `range.setStart(startNode, startOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart`"
  [this start-node start-offset]
  (-> this (.setStart start-node start-offset)))

(defn set-start-after
  "Method.

  The Range.setStartAfter() method sets the start position of a
  relative to a `web.Node`. The parent `web.Node` of the start
  the `web.Range` will be the same as that for the referenceNode.

  `range.setStartAfter(referenceNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartAfter`"
  [this reference-node]
  (-> this (.setStartAfter reference-node)))

(defn set-start-before
  "Method.

  The Range.setStartBefore() method sets the start position of
  `web.Range` relative to another `web.Node`. The parent `web.Node`
  the start of the `web.Range` will be the same as that for the

  `range.setStartBefore(referenceNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartBefore`"
  [this reference-node]
  (-> this (.setStartBefore reference-node)))

(defn surround-contents
  "Method.

  The Range.surroundContents() method moves content of the `web.Range`
  a new node, placing the new node at the start of the specified

  `range.surroundContents(newParent);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents`"
  [this new-parent]
  (-> this (.surroundContents new-parent)))

(defn to-string
  "Method.

  The Range.toString() method is a stringifier returning the text
  the `web.Range`.

  `text = range.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/toString`"
  [this ]
  (-> this (.toString)))

(defn collapsed
  "Property.

  The Range.collapsed read-only property returns a `web.Boolean`
  indicating whether the start and end points of the `web.Range`
  at the same position. It returns true if the start and end boundary
  of the `web.Range` are the same point in the DOM, false if not.

  `isCollapsed = range.collapsed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/collapsed`"
  [this]
  (-> this (.collapsed)))

(defn set-collapsed!
  "Property.

  The Range.collapsed read-only property returns a `web.Boolean`
  indicating whether the start and end points of the `web.Range`
  at the same position. It returns true if the start and end boundary
  of the `web.Range` are the same point in the DOM, false if not.

  `isCollapsed = range.collapsed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/collapsed`"
  [this val]
  (aset this "collapsed" val))

(defn common-ancestor-container
  "Property.

  The Range.commonAncestorContainer read-only property returns
  deepest — or furthest down the document tree — `web.Node` that
  both boundary points of the range. This means that if `web.Range.startContainer`
  `web.Range.endContainer` both refer to the same node, this node
  the commonAncestorContainer.

  `rangeAncestor = range.commonAncestorContainer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/commonAncestorContainer`"
  [this]
  (-> this (.commonAncestorContainer)))

(defn set-common-ancestor-container!
  "Property.

  The Range.commonAncestorContainer read-only property returns
  deepest — or furthest down the document tree — `web.Node` that
  both boundary points of the range. This means that if `web.Range.startContainer`
  `web.Range.endContainer` both refer to the same node, this node
  the commonAncestorContainer.

  `rangeAncestor = range.commonAncestorContainer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/commonAncestorContainer`"
  [this val]
  (aset this "commonAncestorContainer" val))

(defn end-container
  "Property.

  The Range.endContainer read-only property returns the `web.Node`
  which the `web.Range` ends. To change the end position of a node,
  the `web.Range.setEnd()` method or a similar one.

  `endRangeNode = range.endContainer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endContainer`"
  [this]
  (-> this (.endContainer)))

(defn set-end-container!
  "Property.

  The Range.endContainer read-only property returns the `web.Node`
  which the `web.Range` ends. To change the end position of a node,
  the `web.Range.setEnd()` method or a similar one.

  `endRangeNode = range.endContainer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endContainer`"
  [this val]
  (aset this "endContainer" val))

(defn end-offset
  "Property.

  The Range.endOffset read-only property returns a number representing
  in the `web.Range.endContainer` the `web.Range` ends.

  `endRangeOffset = range.endOffset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endOffset`"
  [this]
  (-> this (.endOffset)))

(defn set-end-offset!
  "Property.

  The Range.endOffset read-only property returns a number representing
  in the `web.Range.endContainer` the `web.Range` ends.

  `endRangeOffset = range.endOffset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/endOffset`"
  [this val]
  (aset this "endOffset" val))

(defn start-container
  "Property.

  The Range.startContainer read-only property returns the `web.Node`
  which the Range starts. To change the start position of a node,
  one of the `web.Range.setStart()` methods.

  `startRangeNode = range.startContainer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startContainer`"
  [this]
  (-> this (.startContainer)))

(defn set-start-container!
  "Property.

  The Range.startContainer read-only property returns the `web.Node`
  which the Range starts. To change the start position of a node,
  one of the `web.Range.setStart()` methods.

  `startRangeNode = range.startContainer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startContainer`"
  [this val]
  (aset this "startContainer" val))

(defn start-offset
  "Property.

  The Range.startOffset read-only property returns a number representing
  in the startContainer the Range starts.

  `startRangeOffset = range.startOffset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startOffset`"
  [this]
  (-> this (.startOffset)))

(defn set-start-offset!
  "Property.

  The Range.startOffset read-only property returns a number representing
  in the startContainer the Range starts.

  `startRangeOffset = range.startOffset;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Range/startOffset`"
  [this val]
  (aset this "startOffset" val))

