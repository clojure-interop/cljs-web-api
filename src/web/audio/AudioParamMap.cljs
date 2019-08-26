(ns web.audio.AudioParamMap
  "The Web Audio API interface AudioParamMap represents a set of
  audio parameters, each described as a mapping of a `web.dom.DOMString`
  the parameter to the `web.audio.AudioParam` object representing
  value."
  (:refer-clojure :exclude [keys]))

(defn entries
  "Method.

  ?"
  [this & args]
  (apply (-> this .-entries) (concat [this] args)))

(defn for-each
  "Method.

  ?"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn has
  "Method.

  ?"
  [this & args]
  (apply (-> this .-has) (concat [this] args)))

(defn keys
  "Method.

  ?"
  [this & args]
  (apply (-> this .-keys) (concat [this] args)))

(defn values
  "Method.

  ?"
  [this & args]
  (apply (-> this .-values) (concat [this] args)))

(defn size
  "Property.

  ?"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  ?"
  [this val]
  (aset this "size" val))

