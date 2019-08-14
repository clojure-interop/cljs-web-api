(ns web.CharacterData
  "The CharacterData abstract interface represents a `web.Node`
  that contains characters. This is an abstract interface, meaning
  aren't any object of type CharacterData: it is implemented by
  interfaces, like `web.Text`, `web.Comment`, or `web.ProcessingInstruction`
  aren't abstract."
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

(defn next-element-sibling
  "Property.

  The NonDocumentTypeChildNode.nextElementSibling read-only property
  the element immediately following the specified one in its parent's
  list, or null if the specified element is the last one in the

  `var nextNode = elementNodeReference.nextElementSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`"
  [this]
  (-> this (.nextElementSibling)))

(defn set-next-element-sibling!
  "Property.

  The NonDocumentTypeChildNode.nextElementSibling read-only property
  the element immediately following the specified one in its parent's
  list, or null if the specified element is the last one in the

  `var nextNode = elementNodeReference.nextElementSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`"
  [this val]
  (aset this "nextElementSibling" val))

(defn previous-element-sibling
  "Property.

  The NonDocumentTypeChildNode.previousElementSibling read-only
  returns the `web.Element` immediately prior to the specified
  in its parent's children list, or null if the specified element
  the first one in the list.

  `prevNode = elementNodeReference.previousElementSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling`"
  [this]
  (-> this (.previousElementSibling)))

