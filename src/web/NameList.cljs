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
  (-> this .-contains (.apply this (clj->js args))))

(defn contains-ns
  "Method.

  Returns a Boolean."
  [this & args]
  (-> this .-containsNS (.apply this (clj->js args))))

(defn get-name
  "Method.

  Returns a DOMString."
  [this & args]
  (-> this .-getName (.apply this (clj->js args))))

(defn get-namespace-uri
  "Method.

  Returns a DOMString."
  [this & args]
  (-> this .-getNamespaceURI (.apply this (clj->js args))))

(defn length
  "Property."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property."
  [this val]
  (aset this "length" val))

