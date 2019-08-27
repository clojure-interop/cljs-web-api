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
  (-> this .-entries (.apply this (clj->js args))))

(defn for-each
  "Method.

  ?"
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn has
  "Method.

  ?"
  [this & args]
  (-> this .-has (.apply this (clj->js args))))

(defn keys
  "Method.

  ?"
  [this & args]
  (-> this .-keys (.apply this (clj->js args))))

(defn values
  "Method.

  ?"
  [this & args]
  (-> this .-values (.apply this (clj->js args))))

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

