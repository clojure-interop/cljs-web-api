(ns web.svg.SVGPatternElement
  "The SVGPatternElement interface corresponds to the `<pattern>`"
  (:refer-clojure :exclude []))

(defn pattern-units
  "Property.

  An SVGAnimatedEnumeration corresponding to the patternUnits attribute
  the given <pattern> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.-patternUnits)))

(defn set-pattern-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the patternUnits attribute
  the given <pattern> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "patternUnits" val))

(defn pattern-content-units
  "Property.

  An SVGAnimatedEnumeration corresponding to the patternContentUnits
  of the given <pattern> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.-patternContentUnits)))

(defn set-pattern-content-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the patternContentUnits
  of the given <pattern> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "patternContentUnits" val))

(defn pattern-transform
  "Property.

  An SVGAnimatedTransformList corresponding to the patternTransform
  of the given <pattern> element."
  [this]
  (-> this (.-patternTransform)))

(defn set-pattern-transform!
  "Property.

  An SVGAnimatedTransformList corresponding to the patternTransform
  of the given <pattern> element."
  [this val]
  (aset this "patternTransform" val))

(defn x
  "Property.

  An SVGAnimatedEnumeration corresponding to the x attribute of
  given <pattern> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedEnumeration corresponding to the x attribute of
  given <pattern> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedEnumeration corresponding to the y attribute of
  given <pattern> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedEnumeration corresponding to the y attribute of
  given <pattern> element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedEnumeration corresponding to the width attribute
  the given <pattern> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedEnumeration corresponding to the width attribute
  the given <pattern> element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedEnumeration corresponding to the height attribute
  the given <pattern> element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedEnumeration corresponding to the height attribute
  the given <pattern> element."
  [this val]
  (aset this "height" val))

