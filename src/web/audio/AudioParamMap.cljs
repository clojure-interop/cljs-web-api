(ns web.audio.AudioParamMap
  "The Web Audio API interface AudioParamMap represents a set of
  audio parameters, each described as a mapping of a `web.dom.DOMString`
  the parameter to the `web.audio.AudioParam` object representing
  value."
  (:refer-clojure :exclude []))

(defn entries
  "Method.

  ?"
  [this & args]
  (apply (-> this .-entries) (concat [this] args)))

(defn size
  "Property.

  ?"
  [this]
  (-> this (.size)))

(defn set-size!
  "Property.

  ?"
  [this val]
  (aset this "size" val))

