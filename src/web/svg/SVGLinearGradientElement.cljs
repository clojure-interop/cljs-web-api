(ns web.svg.SVGLinearGradientElement
  "The SVGLinearGradientElement interface corresponds to the `<linearGradient>`"
  (:refer-clojure :exclude []))

(defn x1
  "Property.

  An SVGAnimatedLength corresponding to the x1 attribute of the
  <linearGradient> element."
  [this]
  (-> this (.x1)))

(defn set-x1!
  "Property.

  An SVGAnimatedLength corresponding to the x1 attribute of the
  <linearGradient> element."
  [this val]
  (aset this "x1" val))

