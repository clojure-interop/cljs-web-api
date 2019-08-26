(ns web.dom.DOMLocator
  "Indicates a location such as where an error occurred. Returned
  DOMError.location."
  (:refer-clojure :exclude []))

(defn line-number
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.lineNumber)))

(defn set-line-number!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "lineNumber" val))

