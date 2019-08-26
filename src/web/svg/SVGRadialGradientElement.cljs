(ns web.svg.SVGRadialGradientElement
  "The SVGRadialGradientElement interface corresponds to the `<RadialGradient>`"
  (:refer-clojure :exclude []))

(defn cx
  "Property.

  An SVGAnimatedLength corresponding to the cx attribute of the
  <RadialGradient> element."
  [this]
  (-> this (.cx)))

(defn set-cx!
  "Property.

  An SVGAnimatedLength corresponding to the cx attribute of the
  <RadialGradient> element."
  [this val]
  (aset this "cx" val))

