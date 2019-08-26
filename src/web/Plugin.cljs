(ns web.Plugin
  "The Plugin interface provides information about a browser plugin."
  (:refer-clojure :exclude [name]))

(defn item
  "Method.

  Returns the MIME type of a supported content type, given the
  number into a list of supported types."
  [this & args]
  (apply (-> this .-item) (concat [this] args)))

(defn named-item
  "Method.

  Returns the MIME type of a supported item."
  [this & args]
  (apply (-> this .-namedItem) (concat [this] args)))

(defn description
  "Property.

  A human readable description of the plugin."
  [this]
  (-> this (.-description)))

(defn set-description!
  "Property.

  A human readable description of the plugin."
  [this val]
  (aset this "description" val))

(defn filename
  "Property.

  The filename of the plugin file."
  [this]
  (-> this (.-filename)))

(defn set-filename!
  "Property.

  The filename of the plugin file."
  [this val]
  (aset this "filename" val))

(defn name
  "Property.

  The name of the plugin."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The name of the plugin."
  [this val]
  (aset this "name" val))

(defn version
  "Property.

  The plugin's version number string."
  [this]
  (-> this (.-version)))

(defn set-version!
  "Property.

  The plugin's version number string."
  [this val]
  (aset this "version" val))

