(ns web.NodeList
  "NodeList objects are collections of nodes, usually returned by
  such as `Node.childNodes` and methods such as `document.querySelectorAll()`."
  (:refer-clojure :exclude [keys]))

(defn item
  "Method.

  Returns a node from a `web.NodeList` by index. This method doesn't
  exceptions as long as you provide arguments. A value of null
  returned if the index is out of range, and a TypeError is thrown
  no argument is provided.

  `nodeItem = nodeList.item(index)


  nodeList is a NodeList. This is usually obtained from another DOM property or method, such as childNodes.
  index is the index of the node to be fetched. The index is zero-based.
  nodeItem is the indexth node in the nodeList returned by the item method.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/item`"
  [this & args]
  (apply (-> this .-item) (concat [this] args)))

(defn entries
  "Method.

  The NodeList.entries() method returns an `iterator` allowing
  go through all key/value pairs contained in this object. The
  are `web.Node` objects.

  `list.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The forEach() method of the `web.NodeList` interface calls the
  given in parameter once for each value pair in the list, in insertion

  `NodeList.forEach(callback[, thisArg]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn keys
  "Method.

  The NodeList.keys() method returns an `iterator` allowing to
  through all keys contained in this object. The keys are unsigned

  `nodeList.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/keys`"
  [this ]
  (-> this (.keys)))

(defn values
  "Method.

  The NodeList.values() method returns an `iterator` allowing to
  through all values contained in this object. The values are `web.Node`

  `nodeList.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/values`"
  [this ]
  (-> this (.values)))

(defn length
  "Property.

  The NodeList.length property returns the number of items in a

  `numItems = nodeList.length


  numItems is an integer value representing the number of items in a NodeList.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The NodeList.length property returns the number of items in a

  `numItems = nodeList.length


  numItems is an integer value representing the number of items in a NodeList.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length`"
  [this val]
  (aset this "length" val))

