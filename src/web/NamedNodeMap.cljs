(ns web.NamedNodeMap
  "The NamedNodeMap interface represents a collection of `web.Attr`
  Objects inside a NamedNodeMap are not in any particular order,
  `web.NodeList`, although they may be accessed by an index as
  an array."
  (:refer-clojure :exclude []))

(defn get-named-item
  "Method.

  The getNamedItem() method of the `web.NamedNodeMap` interface
  the `web.Attr` corresponding to the given name, or null if there
  no corresponding attribute.

  `myAttr = attrs.getNamedItem(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/getNamedItem`"
  [this name]
  (-> this (.getNamedItem name)))

(defn length
  "Property.

  Returns the amount of objects in the map."
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  Returns the amount of objects in the map."
  [this val]
  (aset this "length" val))

