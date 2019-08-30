(ns web.DocumentType
  "The DocumentType interface represents a `web.Node` containing
  doctype."
  (:refer-clojure :exclude [name remove]))

(defn remove
  "Method.

  The ChildNode.remove() method removes the object from the tree
  belongs to.

  `node.remove();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`"
  [this ]
  (-> this (.remove)))

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

(defn entities
  "Property.

  A NamedNodeMap of entities declared in the DTD. Every node in
  map implements the Entity interface."
  [this]
  (-> this (.-entities)))

(defn set-entities!
  "Property.

  A NamedNodeMap of entities declared in the DTD. Every node in
  map implements the Entity interface."
  [this val]
  (aset this "entities" val))

(defn internal-subset
  "Property.

  A DOMString of the internal subset, or null if there is none.
  \"<!ELEMENT foo (bar)>\"."
  [this]
  (-> this (.-internalSubset)))

(defn set-internal-subset!
  "Property.

  A DOMString of the internal subset, or null if there is none.
  \"<!ELEMENT foo (bar)>\"."
  [this val]
  (aset this "internalSubset" val))

(defn name
  "Property.

  A DOMString, eg \"html\" for <!DOCTYPE HTML>."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString, eg \"html\" for <!DOCTYPE HTML>."
  [this val]
  (aset this "name" val))

(defn notations
  "Property.

  A NamedNodeMap with notations declared in the DTD. Every node
  this map implements the Notation interface."
  [this]
  (-> this (.-notations)))

(defn set-notations!
  "Property.

  A NamedNodeMap with notations declared in the DTD. Every node
  this map implements the Notation interface."
  [this val]
  (aset this "notations" val))

(defn public-id
  "Property.

  A DOMString, eg \"-//W3C//DTD HTML 4.01//EN\", empty string for"
  [this]
  (-> this (.-publicId)))

(defn set-public-id!
  "Property.

  A DOMString, eg \"-//W3C//DTD HTML 4.01//EN\", empty string for"
  [this val]
  (aset this "publicId" val))

(defn system-id
  "Property.

  A DOMString, eg \"http://www.w3.org/TR/html4/strict.dtd\", empty
  for HTML5."
  [this]
  (-> this (.-systemId)))

(defn set-system-id!
  "Property.

  A DOMString, eg \"http://www.w3.org/TR/html4/strict.dtd\", empty
  for HTML5."
  [this val]
  (aset this "systemId" val))

