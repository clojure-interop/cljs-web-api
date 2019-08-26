(ns web.dom.HTMLTableCaptionElement
  "The HTMLTableCaptionElement interface special properties (beyond
  regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating table caption elements."
  (:refer-clojure :exclude []))

(defn align
  "Property.

  Is a DOMString which represents an enumerated attribute indicating
  of the caption with respect to the table."
  [this]
  (-> this (.-align)))

(defn set-align!
  "Property.

  Is a DOMString which represents an enumerated attribute indicating
  of the caption with respect to the table."
  [this val]
  (aset this "align" val))

