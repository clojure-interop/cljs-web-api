(ns web.svg.SVGFEOffsetElement
  "The SVGFEOffsetElement interface corresponds to the `<feOffset>`"
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

