(ns web.TreeWalker
  "The TreeWalker object represents the nodes of a document subtree
  a position within them."
  (:refer-clojure :exclude [filter]))

(defn parent-node
  "Method.

  The TreeWalker.parentNode() method moves the current `web.Node`
  the first visible ancestor node in the document order, and returns
  found node. If no such node exists, or if it is above the TreeWalker's
  node, returns null and the current node is not changed.

  `node = treeWalker.parentNode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/parentNode`"
  [this ]
  (-> this (.parentNode)))

(defn first-child
  "Method.

  The TreeWalker.firstChild() method moves the current `web.Node`
  the first visible child of the current node, and returns the
  child. It also moves the current node to this child. If no such
  exists, returns null and the current node is not changed.

  `node = treeWalker.firstChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/firstChild`"
  [this ]
  (-> this (.firstChild)))

(defn last-child
  "Method.

  The TreeWalker.lastChild() method moves the current `web.Node`
  the last visible child of the current node, and returns the found
  It also moves the current node to this child. If no such child
  returns null and the current node is not changed.

  `node = treeWalker.lastChild();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/lastChild`"
  [this ]
  (-> this (.lastChild)))

(defn previous-sibling
  "Method.

  The TreeWalker.previousSibling() method moves the current `web.Node`
  its previous sibling, if any, and returns the found sibling.
  there is no such node, return null and the current node is not

  `node = treeWalker.previousSibling();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousSibling`"
  [this ]
  (-> this (.previousSibling)))

(defn next-sibling
  "Method.

  The TreeWalker.nextSibling() method moves the current `web.Node`
  its next sibling, if any, and returns the found sibling. I there
  no such node, return null and the current node is not changed.

  `node = treeWalker.nextSibling();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextSibling`"
  [this ]
  (-> this (.nextSibling)))

(defn previous-node
  "Method.

  The TreeWalker.previousNode() method moves the current `web.Node`
  the previous visible node in the document order, and returns
  found node. It also moves the current node to this one. If no
  node exists,or if it is before that the root node defined at
  object construction, returns null and the current node is not

  `node = treeWalker.previousNode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousNode`"
  [this ]
  (-> this (.previousNode)))

(defn next-node
  "Method.

  The TreeWalker.nextNode() method moves the current `web.Node`
  the next visible node in the document order, and returns the
  node. It also moves the current node to this one. If no such
  exists, returns null and the current node is not changed.

  `node = treeWalker.nextNode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextNode`"
  [this ]
  (-> this (.nextNode)))

(defn root
  "Property.

  [Read Only]

  The TreeWalker.root read-only property returns the node that
  the root of what the TreeWalker traverses.

  `root = TreeWalker.root;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/root`"
  [this]
  (-> this (.-root)))

(defn what-to-show
  "Property.

  [Read Only]

  The TreeWalker.whatToShow read-only property returns an unsigned
  being a bitmask made of constants describing the types of `web.Node`
  must to be presented. Non-matching nodes are skipped, but their
  may be included, if relevant. The possible values are:

  `nodeTypes = treeWalker.whatToShow;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/whatToShow`"
  [this]
  (-> this (.-whatToShow)))

(defn filter
  "Property.

  [Read Only]

  The TreeWalker.filter read-only property returns a `web.NodeFilter`
  is the filtering object associated with the `web.TreeWalker`.

  `nodeFilter = treeWalker.filter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/filter`"
  [this]
  (-> this (.-filter)))

(defn expand-entity-references
  "Property.

  [Read Only]
  [Obsolute]

  The TreeWalker.expandEntityReferences read-only property returns
  `js.Boolean` flag indicating whether or not the children of entity
  nodes are visible to the `web.TreeWalker`.

  `expand = treeWalker.expandEntityReferences;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/expandEntityReferences`"
  [this]
  (-> this (.-expandEntityReferences)))

(defn current-node
  "Property.

  The TreeWalker.currentNode property represents the `web.Node`
  which the `web.TreeWalker` is currently pointing at.

  `node = treeWalker.currentNode;
  treeWalker.currentNode = node;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/currentNode`"
  [this]
  (-> this (.-currentNode)))

(defn set-current-node!
  "Property.

  The TreeWalker.currentNode property represents the `web.Node`
  which the `web.TreeWalker` is currently pointing at.

  `node = treeWalker.currentNode;
  treeWalker.currentNode = node;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/currentNode`"
  [this val]
  (aset this "currentNode" val))

