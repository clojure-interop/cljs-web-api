(ns web.dom.DOMImplementationList
  "Returned by `DOMImplementationSource.getDOMImplementationList()`
  `DOMImplementationRegistry.getDOMImplementationList()` . Can
  iterated with 0-based index."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  Returns the pos item."
  [this & args]
  (-> this .-item (.apply this (clj->js args))))

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

