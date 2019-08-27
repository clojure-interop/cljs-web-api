(ns web.other.MimeTypeArray
  "The MimeTypeArray interface returns an array of `web.other.MimeType`
  each of which contains information about a supported browser
  This object is returned by `NavigatorPlugins.mimeTypes`."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  Returns the MimeType object with the specified index."
  [this & args]
  (-> this .-item (.apply this (clj->js args))))

(defn named-item
  "Method.

  Returns the MimeType object with the specified name."
  [this & args]
  (-> this .-namedItem (.apply this (clj->js args))))

(defn length
  "Property.

  The number of items in the array."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The number of items in the array."
  [this val]
  (aset this "length" val))

