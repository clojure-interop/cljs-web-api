(ns web.dom.HTMLCollection
  "The HTMLCollection interface represents a generic collection
  object similar to `arguments`) of elements (in document order)
  offers methods and properties for selecting from the list."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  The `web.dom.HTMLCollection` method item() returns the node located
  the specified offset into the collection.

  `var element = HTMLCollection.item(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/item`"
  [this index]
  (-> this (.item index)))

(defn length
  "Property.

  Returns the number of items in the collection."
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  Returns the number of items in the collection."
  [this val]
  (aset this "length" val))

