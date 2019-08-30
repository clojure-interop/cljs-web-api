(ns web.ParentNode
  "The ParentNode mixin contains methods and properties that are
  to all types of `web.Node` objects that can have children."
  (:refer-clojure :exclude []))

(defn append
  "Method.

  The ParentNode.append() method inserts a set of `web.Node` objects
  `web.dom.DOMString` objects after the last child of the ParentNode.
  objects are inserted as equivalent `web.Text` nodes.

  `[Throws, Unscopable]
  void ParentNode.append((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append`"
  [this & args]
  (-> this .-append (.apply this (clj->js args))))

(defn prepend
  "Method.

  The ParentNode.prepend() method inserts a set of `web.Node` objects
  `web.dom.DOMString` objects before the first child of the `web.ParentNode`.
  objects are inserted as equivalent `web.Text` nodes.

  `ParentNode.prepend(...nodesToPrepend);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend`"
  [this & args]
  (-> this .-prepend (.apply this (clj->js args))))

(defn query-selector
  "Method.

  [Draft]

  The `web.ParentNode` mixin defines the querySelector() method
  returning an `web.Element` representing the first element matching
  specified group of selectors which are descendants of the object
  which the method was called.

  `element = parentNode.querySelector(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelector`"
  [this selectors]
  (-> this (.querySelector selectors)))

(defn query-selector-all
  "Method.

  The `web.ParentNode` mixin defines the querySelectorAll() method
  returning a `web.NodeList` representing a list of elements matching
  specified group of selectors which are descendants of the object
  which the method was called.

  `elementList = parentNode.querySelectorAll(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll`"
  [this selectors]
  (-> this (.querySelectorAll selectors)))

(defn child-element-count
  "Property.

  [Read Only]

  The ParentNode.childElementCount read-only property returns an
  long representing the number of child elements of the given element.

  `var count = node.childElementCount;


  count
  The return value, which is an unsigned long (simply an integer) type.
  node
  An object representing a `web.Document`, `web.web-components.DocumentFragment`, or `web.Element`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`"
  [this]
  (-> this (.-childElementCount)))

(defn children
  "Property.

  [Read Only]

  The `web.ParentNode` property children is a read-only property
  returns a live `web.dom.HTMLCollection` which contains all of
  child `elements` of the node upon which it was called.

  `var children = node.children;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`"
  [this]
  (-> this (.-children)))

(defn first-element-child
  "Property.

  [Read Only]

  The ParentNode.firstElementChild read-only property returns the
  first child `web.Element`, or null if there are no child elements.

  `var element = node.firstElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`"
  [this]
  (-> this (.-firstElementChild)))

(defn last-element-child
  "Property.

  [Read Only]

  The ParentNode.lastElementChild read-only property returns the
  last child `web.Element` or null if there are no child elements.

  `var element = node.lastElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`"
  [this]
  (-> this (.-lastElementChild)))

