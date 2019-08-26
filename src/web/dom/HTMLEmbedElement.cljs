(ns web.dom.HTMLEmbedElement
  "The HTMLEmbedElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<embed>` elements."
  (:refer-clojure :exclude [name type]))

(defn align
  "Property.

  Is a DOMString representing an enumerated property indicating
  of the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"center\", and \"justify\"."
  [this]
  (-> this (.-align)))

(defn set-align!
  "Property.

  Is a DOMString representing an enumerated property indicating
  of the element's contents with respect to the surrounding context.
  possible values are \"left\", \"right\", \"center\", and \"justify\"."
  [this val]
  (aset this "align" val))

(defn height
  "Property.

  Is a DOMString reflecting the height HTML attribute, containing
  displayed height of the resource."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  Is a DOMString reflecting the height HTML attribute, containing
  displayed height of the resource."
  [this val]
  (aset this "height" val))

(defn name
  "Property.

  Is a DOMString representing the name of the embedded object."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Is a DOMString representing the name of the embedded object."
  [this val]
  (aset this "name" val))

(defn src
  "Property.

  Is a DOMString that reflects the src HTML attribute, containing
  address of the resource."
  [this]
  (-> this (.-src)))

(defn set-src!
  "Property.

  Is a DOMString that reflects the src HTML attribute, containing
  address of the resource."
  [this val]
  (aset this "src" val))

(defn type
  "Property.

  Is a DOMString that reflects the type HTML attribute, containing
  type of the resource."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString that reflects the type HTML attribute, containing
  type of the resource."
  [this val]
  (aset this "type" val))

(defn width
  "Property.

  Is a DOMString that reflects the width HTML attribute, containing
  displayed width of the resource."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  Is a DOMString that reflects the width HTML attribute, containing
  displayed width of the resource."
  [this val]
  (aset this "width" val))

