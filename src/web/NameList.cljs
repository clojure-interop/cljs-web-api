(ns web.NameList
  "The NameList interface provides an abstraction for an ordered
  of name and namespace value pairs. Items can be accessed by a
  index. The DOM spec does not specify how the collection is to
  implemented."
  (:refer-clojure :exclude []))

(defn contains
  "Method.

  Returns a Boolean."
  [this & args]
  (apply (-> this .-contains) (concat [this] args)))

(defn length
  "Property."
  [this]
  (-> this (.length)))

(defn set-length!
  "Property."
  [this val]
  (aset this "length" val))

