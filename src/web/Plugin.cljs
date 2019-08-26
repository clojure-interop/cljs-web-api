(ns web.Plugin
  "The Plugin interface provides information about a browser plugin."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  Returns the MIME type of a supported content type, given the
  number into a list of supported types."
  [this & args]
  (apply (-> this .-item) (concat [this] args)))

(defn description
  "Property.

  A human readable description of the plugin."
  [this]
  (-> this (.description)))

(defn set-description!
  "Property.

  A human readable description of the plugin."
  [this val]
  (aset this "description" val))

