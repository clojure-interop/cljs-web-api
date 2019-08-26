(ns web.svg.SVGGradientElement
  "The SVGGradient interface is a base interface used by `web.svg.SVGLinearGradientElement`
  `web.svg.SVGRadialGradientElement`."
  (:refer-clojure :exclude []))

(defn gradient-units
  "Property.

  Returns an SVGAnimatedEnumeration corresponding to the gradientUnits
  on the given element. Takes one of the constants defined in SVGUnitTypes."
  [this]
  (-> this (.-gradientUnits)))

(defn set-gradient-units!
  "Property.

  Returns an SVGAnimatedEnumeration corresponding to the gradientUnits
  on the given element. Takes one of the constants defined in SVGUnitTypes."
  [this val]
  (aset this "gradientUnits" val))

(defn gradient-transform
  "Property.

  Returns an SVGAnimatedTransformList corresponding to attribute
  on the given element."
  [this]
  (-> this (.-gradientTransform)))

(defn set-gradient-transform!
  "Property.

  Returns an SVGAnimatedTransformList corresponding to attribute
  on the given element."
  [this val]
  (aset this "gradientTransform" val))

(defn spread-method
  "Property.

  Returns an SVGAnimatedEnumeration corresponding to attribute
  on the given element. One of the spread method types defined
  this interface."
  [this]
  (-> this (.-spreadMethod)))

(defn set-spread-method!
  "Property.

  Returns an SVGAnimatedEnumeration corresponding to attribute
  on the given element. One of the spread method types defined
  this interface."
  [this val]
  (aset this "spreadMethod" val))

