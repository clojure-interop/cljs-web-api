(ns web.svg.SVGFEBlendElement
  "The SVGFEBlendElement interface corresponds to the `<feBlend>`"
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

(defn in2
  "Property.

  An SVGAnimatedString corresponding to the in2 attribute of the
  element."
  [this]
  (-> this (.-in2)))

(defn set-in2!
  "Property.

  An SVGAnimatedString corresponding to the in2 attribute of the
  element."
  [this val]
  (aset this "in2" val))

(defn mode
  "Property.

  An SVGAnimatedEnumeration corresponding to the mode attribute
  the given element. It takes one of the SVG_FEBLEND_MODE_* constants
  on this interface."
  [this]
  (-> this (.-mode)))

(defn set-mode!
  "Property.

  An SVGAnimatedEnumeration corresponding to the mode attribute
  the given element. It takes one of the SVG_FEBLEND_MODE_* constants
  on this interface."
  [this val]
  (aset this "mode" val))

