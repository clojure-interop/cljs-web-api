(ns web.dom.HTMLUListElement
  "The HTMLUListElement interface provides special properties (beyond
  defined on the regular `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating unordered list"
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  Is a DOMString value reflecting the type and defining the kind
  marker to be used to display. The values are browser dependent
  have never been standardized."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString value reflecting the type and defining the kind
  marker to be used to display. The values are browser dependent
  have never been standardized."
  [this val]
  (aset this "type" val))

(defn compact
  "Property.

  Is a Boolean indicating that spacing between list items should
  reduced. This property reflects the compact attribute only, it
  consider the line-height CSS property used for that behavior
  modern pages."
  [this]
  (-> this (.-compact)))

(defn set-compact!
  "Property.

  Is a Boolean indicating that spacing between list items should
  reduced. This property reflects the compact attribute only, it
  consider the line-height CSS property used for that behavior
  modern pages."
  [this val]
  (aset this "compact" val))

