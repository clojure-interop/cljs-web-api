(ns web.svg.SVGClipPathElement
  "The SVGClipPathElement interface provides access to the properties
  `<clipPath>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn clip-path-units
  "Property.

  An SVGAnimatedEnumeration corresponding to the clipPathUnits
  of the given <clipPath> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.-clipPathUnits)))

(defn set-clip-path-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the clipPathUnits
  of the given <clipPath> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "clipPathUnits" val))

