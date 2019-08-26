(ns web.svg.SVGGradientElement
  "The SVGGradient interface is a base interface used by `web.svg.SVGLinearGradientElement`
  `web.svg.SVGRadialGradientElement`."
  (:refer-clojure :exclude []))

(defn gradient-units
  "Property.

  Returns an SVGAnimatedEnumeration corresponding to the gradientUnits
  on the given element. Takes one of the constants defined in SVGUnitTypes."
  [this]
  (-> this (.gradientUnits)))

(defn set-gradient-units!
  "Property.

  Returns an SVGAnimatedEnumeration corresponding to the gradientUnits
  on the given element. Takes one of the constants defined in SVGUnitTypes."
  [this val]
  (aset this "gradientUnits" val))

