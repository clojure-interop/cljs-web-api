(ns web.other.Notation
  "Represents a DTD notation (read-only). May declare format of
  unparsed entity or formally declare the document's processing
  targets. Inherits methods and properties from Node. Its nodeName
  the notation name. Has no parent."
  (:refer-clojure :exclude []))

(defn public-id
  "Property.

  Is a DOMString."
  [this]
  (-> this (.-publicId)))

(defn set-public-id!
  "Property.

  Is a DOMString."
  [this val]
  (aset this "publicId" val))

(defn system-id
  "Property.

  Is a DOMString."
  [this]
  (-> this (.-systemId)))

(defn set-system-id!
  "Property.

  Is a DOMString."
  [this val]
  (aset this "systemId" val))

