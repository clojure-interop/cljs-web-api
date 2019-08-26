(ns web.dom.HTMLEmbedElement
  "The HTMLEmbedElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<embed>` elements."
  (:refer-clojure :exclude []))

(defn align
  "Property.

  Is a DOMString representing an enumerated property indicating
  of the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"center\", and \"justify\"."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  Is a DOMString representing an enumerated property indicating
  of the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"center\", and \"justify\"."
  [this val]
  (aset this "align" val))

