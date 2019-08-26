(ns web.dom.HTMLMapElement
  "The HTMLMapElement interface provides special properties and
  (beyond those of the regular object `web.dom.HTMLElement` interface
  also has available to it by inheritance) for manipulating the
  and presentation of map elements."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  Is a DOMString representing the <map> element for referencing
  other context. If the id attribute is set, this must have the
  value; and it cannot be null or empty."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  Is a DOMString representing the <map> element for referencing
  other context. If the id attribute is set, this must have the
  value; and it cannot be null or empty."
  [this val]
  (aset this "name" val))

