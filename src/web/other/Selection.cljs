(ns web.other.Selection
  "A Selection object represents the range of text selected by the
  or the current position of the caret. To obtain a Selection object
  examination or manipulation, call `Window.getSelection()`."
  (:refer-clojure :exclude [type empty]))

(defn add-range
  "Method.

  The Selection.addRange() method adds a `web.Range` to a `web.other.Selection`.

  `selection.addRange(range);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/addRange`"
  [this range]
  (-> this (.addRange range)))

(defn collapse
  "Method.

  The Selection.collapse() method collapses the current selection
  a single point. The document is not modified. If the content
  focused and editable, the caret will blink there.

  `sel.collapse(node, offset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/collapse`"
  [this node offset]
  (-> this (.collapse node offset)))

(defn collapse-to-end
  "Method.

  The Selection.collapseToEnd() method collapses the selection
  the end of the last range in the selection. If the content of
  selection is focused and editable, the caret will blink there.

  `sel.collapseToEnd()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/collapseToEnd`"
  [this ]
  (-> this (.collapseToEnd)))

(defn collapse-to-start
  "Method.

  The Selection.collapseToStart() method collapses the selection
  the start of the first range in the selection. If the content
  the selection is focused and editable, the caret will blink there.

  `sel.collapseToStart()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/collapseToStart`"
  [this ]
  (-> this (.collapseToStart)))

(defn contains-node
  "Method.

  The Selection.containsNode() method indicates whether a specfied
  is part of the selection.

  `sel.containsNode(node, partialContainment)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/containsNode`"
  [this node partial-containment]
  (-> this (.containsNode node partial-containment)))

(defn delete-from-document
  "Method.

  The deleteFromDocument() method of the `web.other.Selection`
  deletes the selected text from the document's DOM.

  `sel.deleteFromDocument()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/deleteFromDocument`"
  [this ]
  (-> this (.deleteFromDocument)))

(defn empty
  "Method.

  Removes all ranges from the selection. This is an alias for removeAllRanges()
  See Selection.removeAllRanges() for more details."
  [this & args]
  (apply (-> this .-empty) (concat [this] args)))

(defn extend
  "Method.

  The Selection.extend() method moves the focus of the selection
  a specified point. The anchor of the selection does not move.
  selection will be from the anchor to the new focus, regardless
  direction.

  `sel.extend(node, offset)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/extend`"
  [this node offset]
  (-> this (.extend node offset)))

(defn get-range-at
  "Method.

  The Selection.getRangeAt() method returns a range object representing
  of the ranges currently selected.

  `range = sel.getRangeAt(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt`"
  [this index]
  (-> this (.getRangeAt index)))

(defn modify
  "Method.

  The Selection.modify() method applies a change to the current
  or cursor position, using simple textual commands.

  `sel.modify(alter, direction, granularity)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/modify`"
  [this alter direction granularity]
  (-> this (.modify alter direction granularity)))

(defn remove-range
  "Method.

  The Selection.removeRange() method removes a range from a selection.

  `sel.removeRange(range)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/removeRange`"
  [this range]
  (-> this (.removeRange range)))

(defn remove-all-ranges
  "Method.

  The Selection.removeAllRanges() method removes all ranges from
  selection, leaving the `anchorNode` and `focusNode` properties
  to null and leaving nothing selected.

  `sel.removeAllRanges();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/removeAllRanges`"
  [this ]
  (-> this (.removeAllRanges)))

(defn select-all-children
  "Method.

  The Selection.selectAllChildren() method adds all the children
  the specified node to the selection. Previous selection is lost.

  `sel.selectAllChildren(parentNode)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/selectAllChildren`"
  [this parent-node]
  (-> this (.selectAllChildren parent-node)))

(defn set-base-and-extent
  "Method.

  The setBaseAndExtent() method of the `web.other.Selection` interface
  the selection to be a range including all or parts of two specified
  nodes, and any content located between them.

  `sel.setBaseAndExtent(anchorNode,anchorOffset,focusNode,focusOffset)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/setBaseAndExtent`"
  [this anchor-node anchor-offset focus-node focus-offset]
  (-> this (.setBaseAndExtent anchor-node anchor-offset focus-node focus-offset)))

(defn set-position
  "Method.

  Collapses the current selection to a single point. This is an
  for collapse() — See Selection.collapse() for more details."
  [this & args]
  (apply (-> this .-setPosition) (concat [this] args)))

(defn to-string
  "Method.

  The Selection.toString() method returns a string currently being
  by the selection object, i.e. the currently selected text.

  `sel.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/toString`"
  [this ]
  (-> this (.toString)))

(defn anchor-node
  "Property.

  The Selection.anchorNode read-only property returns the `web.Node`
  which the selection begins.

  `node = sel.anchorNode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/anchorNode`"
  [this]
  (-> this (.-anchorNode)))

(defn anchor-offset
  "Property.

  The Selection.anchorOffset read-only property returns the number
  characters that the selection's anchor is offset within the `Selection.anchorNode`.

  `number = sel.anchorOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/anchorOffset`"
  [this]
  (-> this (.-anchorOffset)))

(defn focus-node
  "Property.

  The Selection.focusNode read-only property returns the `web.Node`
  which the selection ends.

  `node = sel.focusNode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/focusNode`"
  [this]
  (-> this (.-focusNode)))

(defn focus-offset
  "Property.

  The Selection.focusOffset read-only property returns the number
  characters that the selection's focus is offset within the `Selection.focusNode`.

  `offset = sel.focusOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/focusOffset`"
  [this]
  (-> this (.-focusOffset)))

(defn is-collapsed
  "Property.

  The Selection.isCollapsed read-only property returns a `js.Boolean`
  indicates whether or not there is currently any text selected.
  text is selected when the selection's start and end points are
  the same position in the content.

  `bool = sel.isCollapsed`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/isCollapsed`"
  [this]
  (-> this (.-isCollapsed)))

(defn range-count
  "Property.

  The Selection.rangeCount read-only property returns the number
  ranges in the selection.

  `value = sel.rangeCount`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount`"
  [this]
  (-> this (.-rangeCount)))

(defn type
  "Property.

  The type read-only property of the `web.other.Selection` interface
  a `web.dom.DOMString` describing the type of the current selection.

  `value = sel.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.other.Selection` interface
  a `web.dom.DOMString` describing the type of the current selection.

  `value = sel.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Selection/type`"
  [this val]
  (aset this "type" val))

