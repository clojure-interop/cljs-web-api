(ns web.dom.HTMLDataListElement
  "The HTMLDataListElement interface provides special properties
  the `web.dom.HTMLElement` object interface it also has available
  it by inheritance) to manipulate `<datalist>` elements and their"
  (:refer-clojure :exclude []))

(defn options
  "Property.

  Is a HTMLCollection representing a collection of the contained
  elements."
  [this]
  (-> this (.-options)))

(defn set-options!
  "Property.

  Is a HTMLCollection representing a collection of the contained
  elements."
  [this val]
  (aset this "options" val))

