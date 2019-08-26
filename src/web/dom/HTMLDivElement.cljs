(ns web.dom.HTMLDivElement
  "The HTMLDivElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<div>` elements."
  (:refer-clojure :exclude []))

(defn align
  "Property.

  Is a DOMString representing an enumerated property indicating
  of the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"justify\", and \"center\"."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  Is a DOMString representing an enumerated property indicating
  of the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"justify\", and \"center\"."
  [this val]
  (aset this "align" val))

