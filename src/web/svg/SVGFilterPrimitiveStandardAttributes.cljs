(ns web.svg.SVGFilterPrimitiveStandardAttributes
  "The SVGFilterPrimitiveStandardAttributes interface defines the
  of DOM attributes that are common across the filter primitive"
  (:refer-clojure :exclude []))

(defn x
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given element."
  [this val]
  (aset this "height" val))

(defn result
  "Property.

  An SVGAnimatedString corresponding to the result attribute of
  given element."
  [this]
  (-> this (.-result)))

(defn set-result!
  "Property.

  An SVGAnimatedString corresponding to the result attribute of
  given element."
  [this val]
  (aset this "result" val))

