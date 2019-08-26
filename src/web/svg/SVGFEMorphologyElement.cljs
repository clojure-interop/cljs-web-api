(ns web.svg.SVGFEMorphologyElement
  "The SVGFEMorphologyElement interface corresponds to the `<feMorphology>`"
  (:refer-clojure :exclude []))

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

(defn operator
  "Property.

  An SVGAnimatedEnumeration corresponding to the operator attribute
  the given element. It takes one of the SVG_MORPHOLOGY_OPERATOR_*
  defined on this interface."
  [this]
  (-> this (.-operator)))

(defn set-operator!
  "Property.

  An SVGAnimatedEnumeration corresponding to the operator attribute
  the given element. It takes one of the SVG_MORPHOLOGY_OPERATOR_*
  defined on this interface."
  [this val]
  (aset this "operator" val))

(defn radius-x
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this]
  (-> this (.-radiusX)))

(defn set-radius-x!
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this val]
  (aset this "radiusX" val))

(defn radius-y
  "Property.

  An SVGAnimatedNumber corresponding to the Y component of the
  attribute of the given element."
  [this]
  (-> this (.-radiusY)))

(defn set-radius-y!
  "Property.

  An SVGAnimatedNumber corresponding to the Y component of the
  attribute of the given element."
  [this val]
  (aset this "radiusY" val))

