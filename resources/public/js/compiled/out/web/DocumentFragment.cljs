(ns web.DocumentFragment
  "The DocumentFragment interface represents a minimal document
  that has no parent. It is used as a lightweight version of `web.Document`
  stores a segment of a document structure comprised of nodes just
  a standard document. The key difference is that because the document
  isn't part of the active document tree structure, changes made
  the fragment don't affect the document, cause reflow, or incur
  performance impact that can occur when changes are made."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DocumentFragment() constructor returns a new, empty `web.DocumentFragment` object .

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/DocumentFragment`"
  js/DocumentFragment)

(defn append
  "Method.

  The ParentNode.append() method inserts a set of `web.Node` objects
  `dom.DOMString` objects after the last child of the ParentNode.
  objects are inserted as equivalent `web.Text` nodes.

  `[Throws, Unscopable]
  void ParentNode.append((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append`"
  [this & args]
  (apply (-> this .-append) (concat [this] args)))

(defn prepend
  "Method.

  The ParentNode.prepend() method inserts a set of `web.Node` objects
  `dom.DOMString` objects before the first child of the `web.ParentNode`.
  objects are inserted as equivalent `web.Text` nodes.

  `ParentNode.prepend(...nodesToPrepend);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend`"
  [this & args]
  (apply (-> this .-prepend) (concat [this] args)))

(defn query-selector
  "Method.

  The DocumentFragment.querySelector() method returns the first
  or null if no matches are found, within the `web.DocumentFragment`
  depth-first pre-order traversal of the document's nodes) that
  the specified group of selectors.

  `element = documentfragment.querySelector(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector`"
  [this selectors]
  (-> this (.querySelector selectors)))

(defn query-selector-all
  "Method.

  The DocumentFragment.querySelectorAll() method returns a `web.NodeList`
  elements within the `web.DocumentFragment` (using depth-first
  traversal of the document's nodes) that matches the specified
  of selectors.

  `elementList = documentframgment.querySelectorAll(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll`"
  [this selectors]
  (-> this (.querySelectorAll selectors)))

(defn child-element-count
  "Property.

  The ParentNode.childElementCount read-only property returns an
  long representing the number of child elements of the given element.

  `var count = node.childElementCount;


  count
  The return value, which is an unsigned long (simply an integer) type.
  node
  An object representing a `web.Document`, `web.DocumentFragment`, or `web.Element`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`"
  [this]
  (-> this (.childElementCount)))

(defn set-child-element-count!
  "Property.

  The ParentNode.childElementCount read-only property returns an
  long representing the number of child elements of the given element.

  `var count = node.childElementCount;


  count
  The return value, which is an unsigned long (simply an integer) type.
  node
  An object representing a `web.Document`, `web.DocumentFragment`, or `web.Element`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`"
  [this val]
  (aset this "childElementCount" val))

(defn children
  "Property.

  The `web.ParentNode` property children is a read-only property
  returns a live `html.HTMLCollection` which contains all of the
  `web.elements` of the node upon which it was called.

  `var children = node.children;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`"
  [this]
  (-> this (.children)))

(defn set-children!
  "Property.

  The `web.ParentNode` property children is a read-only property
  returns a live `html.HTMLCollection` which contains all of the
  `web.elements` of the node upon which it was called.

  `var children = node.children;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`"
  [this val]
  (aset this "children" val))

(defn first-element-child
  "Property.

  The ParentNode.firstElementChild read-only property returns the
  first child `web.Element`, or null if there are no child elements.

  `var element = node.firstElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`"
  [this]
  (-> this (.firstElementChild)))

(defn set-first-element-child!
  "Property.

  The ParentNode.firstElementChild read-only property returns the
  first child `web.Element`, or null if there are no child elements.

  `var element = node.firstElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`"
  [this val]
  (aset this "firstElementChild" val))

(defn last-element-child
  "Property.

  The ParentNode.lastElementChild read-only property returns the
  last child `web.Element` or null if there are no child elements.

  `var element = node.lastElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`"
  [this]
  (-> this (.lastElementChild)))

(defn set-last-element-child!
  "Property.

  The ParentNode.lastElementChild read-only property returns the
  last child `web.Element` or null if there are no child elements.

  `var element = node.lastElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`"
  [this val]
  (aset this "lastElementChild" val))

