(ns web.dom.DOMLocator
  "Indicates a location such as where an error occurred. Returned
  DOMError.location."
  (:refer-clojure :exclude []))

(defn line-number
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.-lineNumber)))

(defn set-line-number!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "lineNumber" val))

(defn column-number
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.-columnNumber)))

(defn set-column-number!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "columnNumber" val))

(defn byte-offset
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.-byteOffset)))

(defn set-byte-offset!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "byteOffset" val))

(defn utf16offset
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.-utf16Offset)))

(defn set-utf16offset!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "utf16Offset" val))

(defn related-node
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.-relatedNode)))

(defn set-related-node!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "relatedNode" val))

(defn uri
  "Property.

  Returns a positive integer or -1."
  [this]
  (-> this (.-uri)))

(defn set-uri!
  "Property.

  Returns a positive integer or -1."
  [this val]
  (aset this "uri" val))

