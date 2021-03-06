(ns web.ChildNode
  "The ChildNode interface contains methods that are particular
  `web.Node` objects that can have a parent."
  (:refer-clojure :exclude [remove]))

(defn remove
  "Method.

  The ChildNode.remove() method removes the object from the tree
  belongs to.

  `node.remove();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`"
  [this ]
  (-> this (.remove)))

(defn before
  "Method.

  [Experimental]

  The ChildNode.before() method inserts a set of `web.Node` or
  objects in the children list of this ChildNode's parent, just
  this ChildNode. `web.dom.DOMString` objects are inserted as equivalent
  nodes.

  `[Throws, Unscopable]
  void ChildNode.before((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before`"
  [this & args]
  (-> this .-before (.apply this (clj->js args))))

(defn after
  "Method.

  [Experimental]

  The ChildNode.after() method inserts a set of `web.Node` or `web.dom.DOMString`
  in the children list of this ChildNode's parent, just after this
  `web.dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.after((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after`"
  [this & args]
  (-> this .-after (.apply this (clj->js args))))

(defn replace-with
  "Method.

  [Experimental]

  The ChildNode.replaceWith() method replaces this ChildNode in
  children list of its parent with a set of `web.Node` or `web.dom.DOMString`
  `web.dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.replaceWith((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith`"
  [this & args]
  (-> this .-replaceWith (.apply this (clj->js args))))

