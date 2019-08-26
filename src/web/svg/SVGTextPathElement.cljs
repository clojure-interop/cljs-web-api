(ns web.svg.SVGTextPathElement
  "The SVGTextPathElement interface corresponds to the `<textPath>`"
  (:refer-clojure :exclude []))

(defn start-offset
  "Property.

  An SVGAnimatedLength corresponding to the X component of the
  attribute of the given element."
  [this]
  (-> this (.startOffset)))

(defn set-start-offset!
  "Property.

  An SVGAnimatedLength corresponding to the X component of the
  attribute of the given element."
  [this val]
  (aset this "startOffset" val))

