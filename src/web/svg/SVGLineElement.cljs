(ns web.svg.SVGLineElement
  "The SVGLineElement interface provides access to the properties
  `<line>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn x1
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute x1
  the given <line> element."
  [this]
  (-> this (.x1)))

(defn set-x1!
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute x1
  the given <line> element."
  [this val]
  (aset this "x1" val))

