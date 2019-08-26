(ns web.svg.SVGFEDiffuseLightingElement
  "The SVGFEDiffuseLightingElement interface corresponds to the
  element."
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

(defn surface-scale
  "Property.

  An SVGAnimatedNumber corresponding to the surfaceScale attribute
  the given element."
  [this]
  (-> this (.-surfaceScale)))

(defn set-surface-scale!
  "Property.

  An SVGAnimatedNumber corresponding to the surfaceScale attribute
  the given element."
  [this val]
  (aset this "surfaceScale" val))

(defn diffuse-constant
  "Property.

  An SVGAnimatedNumber corresponding to the diffuseConstant attribute
  the given element."
  [this]
  (-> this (.-diffuseConstant)))

(defn set-diffuse-constant!
  "Property.

  An SVGAnimatedNumber corresponding to the diffuseConstant attribute
  the given element."
  [this val]
  (aset this "diffuseConstant" val))

(defn kernel-unit-length-x
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this]
  (-> this (.-kernelUnitLengthX)))

(defn set-kernel-unit-length-x!
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this val]
  (aset this "kernelUnitLengthX" val))

(defn kernel-unit-length-y
  "Property.

  An SVGAnimatedNumber corresponding to the Y component of the
  attribute of the given element."
  [this]
  (-> this (.-kernelUnitLengthY)))

(defn set-kernel-unit-length-y!
  "Property.

  An SVGAnimatedNumber corresponding to the Y component of the
  attribute of the given element."
  [this val]
  (aset this "kernelUnitLengthY" val))

