(ns web.deprecated.DOMError
  "The DOMError interface describes an error object that contains
  error name."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  Returns a DOMString representing one of the error type names
  below)."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Returns a DOMString representing one of the error type names
  below)."
  [this val]
  (aset this "name" val))

(defn message
  "Property.

  Returns a DOMString representing a message or description associated
  the given error type name."
  [this]
  (-> this (.-message)))

(defn set-message!
  "Property.

  Returns a DOMString representing a message or description associated
  the given error type name."
  [this val]
  (aset this "message" val))

