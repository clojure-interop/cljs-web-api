(ns web.dom.DOMStringMap
  "Used by the dataset HTML attribute to represent data for custom
  added to elements."
  (:refer-clojure :exclude []))

(defn prop
  "Method.

  The property for which to check for the existence of a value."
  [this & args]
  (apply (-> this .-prop) (concat [this] args)))

(defn attr
  "Method.

  The property to remove from the dataset."
  [this & args]
  (apply (-> this .-attr) (concat [this] args)))

