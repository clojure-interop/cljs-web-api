(ns web.dom.DOMStringList
  "A type returned by some APIs which contains a list of DOMString"
  (:refer-clojure :exclude []))

(defn item
  "Method.

  Returns a DOMString."
  [this & args]
  (-> this .-item (.apply this (clj->js args))))

(defn contains
  "Method.

  Returns Boolean indicating if the given string is in the list"
  [this & args]
  (-> this .-contains (.apply this (clj->js args))))

(defn length
  "Property.

  Returns the length of the list."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Returns the length of the list."
  [this val]
  (aset this "length" val))

