(ns web.dom.HTMLLIElement
  "The HTMLLIElement interface exposes specific properties and methods
  those defined by regular `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating list elements."
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  Is a DOMString representing the type of the bullets, \"disc\",
  or \"circle\". As the standard way of defining the list type is
  the CSS list-style-type property, use the CSSOM methods to set
  via a script."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString representing the type of the bullets, \"disc\",
  or \"circle\". As the standard way of defining the list type is
  the CSS list-style-type property, use the CSSOM methods to set
  via a script."
  [this val]
  (aset this "type" val))

(defn value
  "Property.

  Is a long indicating the ordinal position of the list element
  a given <ol>. It reflects the value attribute of the HTML <li>
  and can be smaller than 0. If the <li> element is not a child
  an <ol> element, the property has no meaning."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  Is a long indicating the ordinal position of the list element
  a given <ol>. It reflects the value attribute of the HTML <li>
  and can be smaller than 0. If the <li> element is not a child
  an <ol> element, the property has no meaning."
  [this val]
  (aset this "value" val))

