(ns web.svg.SVGComponentTransferFunctionElement
  "The SVGComponentTransferFunctionElement interface defines a base
  used by the component transfer function interfaces."
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_FECOMPONENTTRANSFER_TYPE_*
  defined on this interface."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_FECOMPONENTTRANSFER_TYPE_*
  defined on this interface."
  [this val]
  (aset this "type" val))

(defn table-values
  "Property.

  An SVGAnimatedNumberList corresponding to the tableValues attribute
  the given element."
  [this]
  (-> this (.-tableValues)))

(defn set-table-values!
  "Property.

  An SVGAnimatedNumberList corresponding to the tableValues attribute
  the given element."
  [this val]
  (aset this "tableValues" val))

(defn slope
  "Property.

  An SVGAnimatedNumber corresponding to the slope attribute of
  given element."
  [this]
  (-> this (.-slope)))

(defn set-slope!
  "Property.

  An SVGAnimatedNumber corresponding to the slope attribute of
  given element."
  [this val]
  (aset this "slope" val))

(defn intercept
  "Property.

  An SVGAnimatedNumber corresponding to the intercept attribute
  the given element."
  [this]
  (-> this (.-intercept)))

(defn set-intercept!
  "Property.

  An SVGAnimatedNumber corresponding to the intercept attribute
  the given element."
  [this val]
  (aset this "intercept" val))

(defn amplitude
  "Property.

  An SVGAnimatedNumber corresponding to the amplitude attribute
  the given element."
  [this]
  (-> this (.-amplitude)))

(defn set-amplitude!
  "Property.

  An SVGAnimatedNumber corresponding to the amplitude attribute
  the given element."
  [this val]
  (aset this "amplitude" val))

(defn exponent
  "Property.

  An SVGAnimatedNumber corresponding to the exponent attribute
  the given element."
  [this]
  (-> this (.-exponent)))

(defn set-exponent!
  "Property.

  An SVGAnimatedNumber corresponding to the exponent attribute
  the given element."
  [this val]
  (aset this "exponent" val))

(defn offset
  "Property.

  An SVGAnimatedNumber corresponding to the offset attribute of
  given element."
  [this]
  (-> this (.-offset)))

(defn set-offset!
  "Property.

  An SVGAnimatedNumber corresponding to the offset attribute of
  given element."
  [this val]
  (aset this "offset" val))

