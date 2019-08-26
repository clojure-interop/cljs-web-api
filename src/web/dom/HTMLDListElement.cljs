(ns web.dom.HTMLDListElement
  "The HTMLDListElement interface provides special properties (beyond
  of the regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating definition list (`<dl>`)"
  (:refer-clojure :exclude []))

(defn compact
  "Property.

  Is a Boolean indicating that spacing between list items should
  reduced."
  [this]
  (-> this (.-compact)))

(defn set-compact!
  "Property.

  Is a Boolean indicating that spacing between list items should
  reduced."
  [this val]
  (aset this "compact" val))

