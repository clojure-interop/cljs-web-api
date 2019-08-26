(ns web.dom.HTMLParamElement
  "The HTMLParamElement interface provides special properties (beyond
  of the regular `web.dom.HTMLElement` object interface it inherits)
  manipulating `<param>` elements, representing a pair of a key
  a value that acts as a parameter for an `<object>` element."
  (:refer-clojure :exclude [name type]))

(defn name
  "Property.

  Is a DOMString representing the name of the parameter. It reflects
  name attribute."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Is a DOMString representing the name of the parameter. It reflects
  name attribute."
  [this val]
  (aset this "name" val))

(defn value
  "Property.

  Is a DOMString representing the value associated to the parameter.
  reflects the value attribute."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  Is a DOMString representing the value associated to the parameter.
  reflects the value attribute."
  [this val]
  (aset this "value" val))

(defn type
  "Property.

  Is a DOMString containing the type of the parameter when valueType
  the \"ref\" value. It reflects the type attribute."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString containing the type of the parameter when valueType
  the \"ref\" value. It reflects the type attribute."
  [this val]
  (aset this "type" val))

(defn value-type
  "Property.

  Is a DOMString containing the type of the value. It reflects
  valuetype attribute and has one of the values: \"data\", \"ref\",
  \"object\"."
  [this]
  (-> this (.-valueType)))

(defn set-value-type!
  "Property.

  Is a DOMString containing the type of the value. It reflects
  valuetype attribute and has one of the values: \"data\", \"ref\",
  \"object\"."
  [this val]
  (aset this "valueType" val))

