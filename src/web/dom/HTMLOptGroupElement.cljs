(ns web.dom.HTMLOptGroupElement
  "The HTMLOptGroupElement interface provides special properties
  methods (beyond the regular `web.dom.HTMLElement` object interface
  also have available to them by inheritance) for manipulating
  layout and presentation of `<optgroup>` elements."
  (:refer-clojure :exclude []))

(defn disabled
  "Property.

  Is a boolean representing whether or not the whole list of children
  is disabled (true) or not (false)."
  [this]
  (-> this (.disabled)))

(defn set-disabled!
  "Property.

  Is a boolean representing whether or not the whole list of children
  is disabled (true) or not (false)."
  [this val]
  (aset this "disabled" val))

