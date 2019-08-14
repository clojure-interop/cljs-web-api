(ns web.DocumentType
  "The DocumentType interface represents a `web.Node` containing
  doctype."
  (:refer-clojure :exclude [remove]))

(defn after
  "Method.

  The ChildNode.after() method inserts a set of `web.Node` or `dom.DOMString`
  in the children list of this ChildNode's parent, just after this
  `dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.after((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after`"
  [this & args]
  (apply (-> this .-after) (concat [this] args)))

(defn before
  "Method.

  The ChildNode.before() method inserts a set of `web.Node` or
  objects in the children list of this ChildNode's parent, just
  this ChildNode. `dom.DOMString` objects are inserted as equivalent
  nodes.

  `[Throws, Unscopable]
  void ChildNode.before((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before`"
  [this & args]
  (apply (-> this .-before) (concat [this] args)))

(defn remove
  "Method.

  The ChildNode.remove() method removes the object from the tree
  belongs to.

  `node.remove();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`"
  [this ]
  (-> this (.remove)))

(defn replace-with
  "Method.

  The ChildNode.replaceWith() method replaces this ChildNode in
  children list of its parent with a set of `web.Node` or `dom.DOMString`
  `dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.replaceWith((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith`"
  [this & args]
  (apply (-> this .-replaceWith) (concat [this] args)))

