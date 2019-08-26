(ns web.dom.HTMLParamElement
  "The HTMLParamElement interface provides special properties (beyond
  of the regular `web.dom.HTMLElement` object interface it inherits)
  manipulating `<param>` elements, representing a pair of a key
  a value that acts as a parameter for an `<object>` element."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  Is a DOMString representing the name of the parameter. It reflects
  name attribute."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  Is a DOMString representing the name of the parameter. It reflects
  name attribute."
  [this val]
  (aset this "name" val))

