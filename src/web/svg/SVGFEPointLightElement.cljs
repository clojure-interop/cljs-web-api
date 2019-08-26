(ns web.svg.SVGFEPointLightElement
  "The SVGFEPointLightElement interface corresponds to the `<fePointLight>`"
  (:refer-clojure :exclude []))

(defn x
  "Property.

  An SVGAnimatedNumber corresponding to the x attribute of the
  element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedNumber corresponding to the x attribute of the
  element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedNumber corresponding to the y attribute of the
  element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedNumber corresponding to the y attribute of the
  element."
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  An SVGAnimatedNumber corresponding to the z attribute of the
  element."
  [this]
  (-> this (.-z)))

(defn set-z!
  "Property.

  An SVGAnimatedNumber corresponding to the z attribute of the
  element."
  [this val]
  (aset this "z" val))

