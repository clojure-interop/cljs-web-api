(ns web.svg.SVGFEDropShadowElement
  "The SVGFEDropShadowElement interface corresponds to the `<feDropShadow>`"
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

(defn dx
  "Property.

  An SVGAnimatedNumber corresponding to the dx attribute of the
  element."
  [this]
  (-> this (.-dx)))

(defn set-dx!
  "Property.

  An SVGAnimatedNumber corresponding to the dx attribute of the
  element."
  [this val]
  (aset this "dx" val))

(defn dy
  "Property.

  An SVGAnimatedNumber corresponding to the dy attribute of the
  element."
  [this]
  (-> this (.-dy)))

(defn set-dy!
  "Property.

  An SVGAnimatedNumber corresponding to the dy attribute of the
  element."
  [this val]
  (aset this "dy" val))

(defn std-deviation-x
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  X component of the stdDeviationX attribute of the given element."
  [this]
  (-> this (.-stdDeviationX)))

(defn set-std-deviation-x!
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  X component of the stdDeviationX attribute of the given element."
  [this val]
  (aset this "stdDeviationX" val))

(defn std-deviation-y
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  Y component of the stdDeviationY attribute of the given element."
  [this]
  (-> this (.-stdDeviationY)))

(defn set-std-deviation-y!
  "Property.

  An SVGAnimatedNumber corresponding to the (possibly automatically
  Y component of the stdDeviationY attribute of the given element."
  [this val]
  (aset this "stdDeviationY" val))

