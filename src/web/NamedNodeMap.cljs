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

(defn set-named-item
  "Method.

  Replaces, or adds, the Attr identified in the map by the given"
  [this & args]
  (-> this .-setNamedItem (.apply this (clj->js args))))

(defn remove-named-item
  "Method.

  Removes the Attr identified by the given map."
  [this & args]
  (-> this .-removeNamedItem (.apply this (clj->js args))))

(defn item
  "Method.

  Returns the Attr at the given index, or null if the index is
  or equal to the number of nodes."
  [this & args]
  (-> this .-item (.apply this (clj->js args))))

(defn get-named-item-ns
  "Method.

  Returns a Attr identified by a namespace and related local name."
  [this & args]
  (-> this .-getNamedItemNS (.apply this (clj->js args))))

(defn set-named-item-ns
  "Method.

  Replaces, or adds, the Attr identified in the map by the given
  and related local name."
  [this & args]
  (-> this .-setNamedItemNS (.apply this (clj->js args))))

(defn remove-named-item-ns
  "Method.

  Removes the Attr identified by the given namespace and related
  name."
  [this & args]
  (-> this .-removeNamedItemNS (.apply this (clj->js args))))

(defn length
  "Property.

  Returns the amount of objects in the map."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Returns the amount of objects in the map."
  [this val]
  (aset this "length" val))

