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
  (-> this (.-maskUnits)))

(defn set-mask-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the maskUnits attribute
  the given <mask> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "maskUnits" val))

(defn mask-content-units
  "Property.

  An SVGAnimatedEnumeration corresponding to the maskContentUnits
  of the given <mask> element. Takes one of the constants defined
  SVGUnitTypes."
  [this]
  (-> this (.-maskContentUnits)))

(defn set-mask-content-units!
  "Property.

  An SVGAnimatedEnumeration corresponding to the maskContentUnits
  of the given <mask> element. Takes one of the constants defined
  SVGUnitTypes."
  [this val]
  (aset this "maskContentUnits" val))

(defn x
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <mask> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <mask> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  <mask> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  <mask> element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given <mask> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given <mask> element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given <mask> element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given <mask> element."
  [this val]
  (aset this "height" val))

