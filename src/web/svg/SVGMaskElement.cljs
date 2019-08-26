(ns web.svg.SVGMaskElement
  "The SVGMaskElement interface provides access to the properties
  `<mask>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn mask-units
  "Property.

  An SVGAnimatedEnumeration corresponding to the maskUnits attribute
  the given <mask> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.maskUnits)))

(defn set-mask-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the maskUnits attribute
  the given <mask> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "maskUnits" val))

