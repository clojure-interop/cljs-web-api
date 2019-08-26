(ns web.svg.SVGFEColorMatrixElement
  "The SVGFEColorMatrixElement interface corresponds to the `<feColorMatrix>`"
  (:refer-clojure :exclude [type]))

(defn in1
  "Property.

  An SVGAnimatedString corresponding to the in attribute of the
  element."
  [this]
  (-> this (.-in1)))

(defn set-in1!
  "Property.

  An SVGAnimatedString corresponding to the in attribute of the
  element."
  [this val]
  (aset this "in1" val))

(defn type
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_FECOLORMATRIX_TYPE_*
  defined on this interface."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_FECOLORMATRIX_TYPE_*
  defined on this interface."
  [this val]
  (aset this "type" val))

(defn values
  "Property.

  An SVGAnimatedNumberList corresponding to the values attribute
  the given element."
  [this]
  (-> this (.-values)))

(defn set-values!
  "Property.

  An SVGAnimatedNumberList corresponding to the values attribute
  the given element."
  [this val]
  (aset this "values" val))

