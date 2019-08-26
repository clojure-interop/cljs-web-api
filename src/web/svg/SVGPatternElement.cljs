(ns web.svg.SVGPatternElement
  "The SVGPatternElement interface corresponds to the `<pattern>`"
  (:refer-clojure :exclude []))

(defn pattern-units
  "Property.

  An SVGAnimatedEnumeration corresponding to the patternUnits attribute
  the given <pattern> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.patternUnits)))

(defn set-pattern-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the patternUnits attribute
  the given <pattern> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "patternUnits" val))

