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

(defn contains-ns
  "Method.

  Returns a Boolean."
  [this & args]
  (apply (-> this .-containsNS) (concat [this] args)))

(defn get-name
  "Method.

  Returns a DOMString."
  [this & args]
  (apply (-> this .-getName) (concat [this] args)))

(defn get-namespace-uri
  "Method.

  Returns a DOMString."
  [this & args]
  (apply (-> this .-getNamespaceURI) (concat [this] args)))

(defn length
  "Property."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property."
  [this val]
  (aset this "length" val))

