(ns web.dom.HTMLParagraphElement
  "The HTMLParagraphElement interface provides special properties
  those of the regular `web.dom.HTMLElement` object interface it
  for manipulating `<p>` elements."
  (:refer-clojure :exclude []))

(defn align
  "Property.

  A DOMString representing an enumerated property indicating alignment
  the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"justify\", and \"center\"."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  A DOMString representing an enumerated property indicating alignment
  the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"justify\", and \"center\"."
  [this val]
  (aset this "align" val))

