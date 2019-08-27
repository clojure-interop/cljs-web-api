(ns web.CharacterData
  "The CharacterData abstract interface represents a `web.Node`
  that contains characters. This is an abstract interface, meaning
  aren't any object of type CharacterData: it is implemented by
  interfaces, like `web.Text`, `web.Comment`, or `web.ProcessingInstruction`
  aren't abstract."
  (:refer-clojure :exclude [remove]))

(defn append-data
  "Method.

  Appends the given DOMString to the CharacterData.data string;
  this method returns, data contains the concatenated DOMString."
  [this & args]
  (-> this .-appendData (.apply this (clj->js args))))

(defn delete-data
  "Method.

  Removes the specified amount of characters, starting at the specified
  from the CharacterData.data string; when this method returns,
  contains the shortened DOMString."
  [this & args]
  (-> this .-deleteData (.apply this (clj->js args))))

(defn insert-data
  "Method.

  Inserts the specified characters, at the specified offset, in
  CharacterData.data string; when this method returns, data contains
  modified DOMString."
  [this & args]
  (-> this .-insertData (.apply this (clj->js args))))

(defn remove
  "Method.

  The ChildNode.remove() method removes the object from the tree
  belongs to.

  `node.remove();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`"
  [this ]
  (-> this (.remove)))

(defn replace-data
  "Method.

  Replaces the specified amount of characters, starting at the
  offset, with the specified DOMString; when this method returns,
  contains the modified DOMString."
  [this & args]
  (-> this .-replaceData (.apply this (clj->js args))))

(defn substring-data
  "Method.

  Returns a DOMString containing the part of CharacterData.data
  the specified length and starting at the specified offset."
  [this & args]
  (-> this .-substringData (.apply this (clj->js args))))

(defn after
  "Method.

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

  The ChildNode.replaceWith() method replaces this ChildNode in
  children list of its parent with a set of `web.Node` or `web.dom.DOMString`
  `web.dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.replaceWith((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith`"
  [this & args]
  (-> this .-replaceWith (.apply this (clj->js args))))

(defn data
  "Property.

  Is a DOMString representing the textual data contained in this"
  [this]
  (-> this (.-data)))

(defn set-data!
  "Property.

  Is a DOMString representing the textual data contained in this"
  [this val]
  (aset this "data" val))

(defn length
  "Property.

  Returns an unsigned long representing the size of the string
  in CharacterData.data."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Returns an unsigned long representing the size of the string
  in CharacterData.data."
  [this val]
  (aset this "length" val))

(defn next-element-sibling
  "Property.

  The NonDocumentTypeChildNode.nextElementSibling read-only property
  the element immediately following the specified one in its parent's
  list, or null if the specified element is the last one in the

  `var nextNode = elementNodeReference.nextElementSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`"
  [this]
  (-> this (.-nextElementSibling)))

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
  (-> this (.-previousElementSibling)))

