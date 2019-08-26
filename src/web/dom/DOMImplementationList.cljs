(ns web.dom.DOMImplementationList
  "Returned by `DOMImplementationSource.getDOMImplementationList()`
  `DOMImplementationRegistry.getDOMImplementationList()` . Can
  iterated with 0-based index."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  Returns the pos item."
  [this & args]
  (apply (-> this .-item) (concat [this] args)))

(defn length
  "Property.

  Returns an integer."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Returns an integer."
  [this val]
  (aset this "length" val))

