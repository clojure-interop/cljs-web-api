(ns web.dom.HTMLHeadingElement
  "The HTMLHeadingElement interface represents the different heading
  It inherits methods and properties from the `web.dom.HTMLElement`"
  (:refer-clojure :exclude []))

(defn align
  "Property.

  Is a DOMString representing an enumerated attribute indicating
  of the heading with respect to the surrounding context. The possible
  are \"left\", \"right\", \"justify\", and \"center\"."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  Is a DOMString representing an enumerated attribute indicating
  of the heading with respect to the surrounding context. The possible
  are \"left\", \"right\", \"justify\", and \"center\"."
  [this val]
  (aset this "align" val))

