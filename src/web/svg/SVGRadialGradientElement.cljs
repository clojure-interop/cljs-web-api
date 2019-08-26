(ns web.svg.SVGRadialGradientElement
  "The SVGRadialGradientElement interface corresponds to the `<RadialGradient>`"
  (:refer-clojure :exclude []))

(defn cx
  "Property.

  An SVGAnimatedLength corresponding to the cx attribute of the
  <RadialGradient> element."
  [this]
  (-> this (.-cx)))

(defn set-cx!
  "Property.

  An SVGAnimatedLength corresponding to the cx attribute of the
  <RadialGradient> element."
  [this val]
  (aset this "cx" val))

(defn r
  "Property.

  An SVGAnimatedLength corresponding to the r attribute of the
  <RadialGradient> element."
  [this]
  (-> this (.-r)))

(defn set-r!
  "Property.

  An SVGAnimatedLength corresponding to the r attribute of the
  <RadialGradient> element."
  [this val]
  (aset this "r" val))

(defn fx
  "Property.

  An SVGAnimatedLength corresponding to the fx attribute of the
  <RadialGradient> element."
  [this]
  (-> this (.-fx)))

(defn set-fx!
  "Property.

  An SVGAnimatedLength corresponding to the fx attribute of the
  <RadialGradient> element."
  [this val]
  (aset this "fx" val))

(defn fy
  "Property.

  An SVGAnimatedLength corresponding to the fy attribute of the
  <RadialGradient> element."
  [this]
  (-> this (.-fy)))

(defn set-fy!
  "Property.

  An SVGAnimatedLength corresponding to the fy attribute of the
  <RadialGradient> element."
  [this val]
  (aset this "fy" val))

