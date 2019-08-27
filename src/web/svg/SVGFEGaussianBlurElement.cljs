(ns web.svg.SVGFEGaussianBlurElement
  "The SVGFEGaussianBlurElement interface corresponds to the `<feGaussianBlur>`"
  (:refer-clojure :exclude []))

(defn set-std-deviation
  "Method.

  Sets the values for the stdDeviation attribute."
  [this & args]
  (-> this .-setStdDeviation (.apply this (clj->js args))))

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

(defn std-deviation-x
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  X component of the stdDeviation attribute of the given element."
  [this]
  (-> this (.-stdDeviationX)))

(defn set-std-deviation-x!
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  X component of the stdDeviation attribute of the given element."
  [this val]
  (aset this "stdDeviationX" val))

(defn std-deviation-y
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  Y component of the stdDeviation attribute of the given element."
  [this]
  (-> this (.-stdDeviationY)))

(defn set-std-deviation-y!
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  Y component of the stdDeviation attribute of the given element."
  [this val]
  (aset this "stdDeviationY" val))

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

