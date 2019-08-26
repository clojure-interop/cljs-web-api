(ns web.svg.SVGFEConvolveMatrixElement
  "The SVGFEConvolveMatrixElement interface corresponds to the `<feConvolveMatrix>`"
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

(defn order-x
  "Property.

  An SVGAnimatedInteger corresponding to the order attribute of
  given element."
  [this]
  (-> this (.-orderX)))

(defn set-order-x!
  "Property.

  An SVGAnimatedInteger corresponding to the order attribute of
  given element."
  [this val]
  (aset this "orderX" val))

(defn order-y
  "Property.

  An SVGAnimatedInteger corresponding to the order attribute of
  given element."
  [this]
  (-> this (.-orderY)))

(defn set-order-y!
  "Property.

  An SVGAnimatedInteger corresponding to the order attribute of
  given element."
  [this val]
  (aset this "orderY" val))

(defn kernel-matrix
  "Property.

  An SVGAnimatedNumberList corresponding to the kernelMatrix attribute
  the given element."
  [this]
  (-> this (.-kernelMatrix)))

(defn set-kernel-matrix!
  "Property.

  An SVGAnimatedNumberList corresponding to the kernelMatrix attribute
  the given element."
  [this val]
  (aset this "kernelMatrix" val))

(defn divisor
  "Property.

  An SVGAnimatedNumber corresponding to the divisor attribute of
  given element."
  [this]
  (-> this (.-divisor)))

(defn set-divisor!
  "Property.

  An SVGAnimatedNumber corresponding to the divisor attribute of
  given element."
  [this val]
  (aset this "divisor" val))

(defn bias
  "Property.

  An SVGAnimatedNumber corresponding to the bias attribute of the
  element."
  [this]
  (-> this (.-bias)))

(defn set-bias!
  "Property.

  An SVGAnimatedNumber corresponding to the bias attribute of the
  element."
  [this val]
  (aset this "bias" val))

(defn target-x
  "Property.

  An SVGAnimatedInteger corresponding to the targetX attribute
  the given element."
  [this]
  (-> this (.-targetX)))

(defn set-target-x!
  "Property.

  An SVGAnimatedInteger corresponding to the targetX attribute
  the given element."
  [this val]
  (aset this "targetX" val))

(defn target-y
  "Property.

  An SVGAnimatedInteger corresponding to the targetY attribute
  the given element."
  [this]
  (-> this (.-targetY)))

(defn set-target-y!
  "Property.

  An SVGAnimatedInteger corresponding to the targetY attribute
  the given element."
  [this val]
  (aset this "targetY" val))

(defn edge-mode
  "Property.

  An SVGAnimatedEnumeration corresponding to the edgeMode attribute
  the given element. Takes one of the SVG_EDGEMODE_* constants
  on this interface."
  [this]
  (-> this (.-edgeMode)))

(defn set-edge-mode!
  "Property.

  An SVGAnimatedEnumeration corresponding to the edgeMode attribute
  the given element. Takes one of the SVG_EDGEMODE_* constants
  on this interface."
  [this val]
  (aset this "edgeMode" val))

(defn kernel-unit-length-x
  "Property.

  An SVGAnimatedNumber corresponding to the kernelUnitLength attribute
  the given element."
  [this]
  (-> this (.-kernelUnitLengthX)))

(defn set-kernel-unit-length-x!
  "Property.

  An SVGAnimatedNumber corresponding to the kernelUnitLength attribute
  the given element."
  [this val]
  (aset this "kernelUnitLengthX" val))

(defn kernel-unit-length-y
  "Property.

  An SVGAnimatedNumber corresponding to the kernelUnitLength attribute
  the given element."
  [this]
  (-> this (.-kernelUnitLengthY)))

(defn set-kernel-unit-length-y!
  "Property.

  An SVGAnimatedNumber corresponding to the kernelUnitLength attribute
  the given element."
  [this val]
  (aset this "kernelUnitLengthY" val))

(defn preserve-alpha
  "Property.

  An SVGAnimatedBoolean corresponding to the preserveAlpha attribute
  the given element."
  [this]
  (-> this (.-preserveAlpha)))

(defn set-preserve-alpha!
  "Property.

  An SVGAnimatedBoolean corresponding to the preserveAlpha attribute
  the given element."
  [this val]
  (aset this "preserveAlpha" val))

