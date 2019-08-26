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
  (-> this (.-filterUnits)))

(defn set-filter-units!
  "Property.

  An SVGAnimatedEnumeration that corresponds to the filterUnits
  of the given <filter> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "filterUnits" val))

(defn primitive-units
  "Property.

  An SVGAnimatedEnumeration that corresponds to the primitiveUnits
  of the given <filter> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.-primitiveUnits)))

(defn set-primitive-units!
  "Property.

  An SVGAnimatedEnumeration that corresponds to the primitiveUnits
  of the given <filter> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "primitiveUnits" val))

(defn x
  "Property.

  An SVGAnimatedLength that corresponds to the x attribute on the
  <filter> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength that corresponds to the x attribute on the
  <filter> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength that corresponds to the y attribute of the
  <filter> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength that corresponds to the y attribute of the
  <filter> element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedLength that corresponds to the width attribute
  the given <filter> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedLength that corresponds to the width attribute
  the given <filter> element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedLength that corresponds to the height attribute
  the given <filter> element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedLength that corresponds to the height attribute
  the given <filter> element."
  [this val]
  (aset this "height" val))

(defn filter-res-x
  "Property.

  An SVGAnimatedInteger that contains the X component of the filterRes
  of the given <filter> element."
  [this]
  (-> this (.-filterResX)))

(defn set-filter-res-x!
  "Property.

  An SVGAnimatedInteger that contains the X component of the filterRes
  of the given <filter> element."
  [this val]
  (aset this "filterResX" val))

(defn filter-res-y
  "Property.

  An SVGAnimatedInteger that contains the Y component of the filterRes
  of the given <filter> element."
  [this]
  (-> this (.-filterResY)))

(defn set-filter-res-y!
  "Property.

  An SVGAnimatedInteger that contains the Y component of the filterRes
  of the given <filter> element."
  [this val]
  (aset this "filterResY" val))

