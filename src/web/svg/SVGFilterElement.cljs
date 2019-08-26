(ns web.svg.SVGFilterElement
  "The SVGFilterElement interface provides access to the properties
  `<filter>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn set-filter-res
  "Method.

  Sets the values of the filterRes attribute."
  [this & args]
  (apply (-> this .-setFilterRes) (concat [this] args)))

(defn filter-units
  "Property.

  An SVGAnimatedEnumeration that corresponds to the filterUnits
  of the given <filter> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.filterUnits)))

(defn set-filter-units!
  "Property.

  An SVGAnimatedEnumeration that corresponds to the filterUnits
  of the given <filter> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "filterUnits" val))

