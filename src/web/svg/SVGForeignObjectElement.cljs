(ns web.svg.SVGForeignObjectElement
  "The SVGForeignObjectElement interface provides access to the
  of `<foreignObject>` elements, as well as methods to manipulate"
  (:refer-clojure :exclude []))

(defn x
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <foreignObject> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <foreignObject> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <foreignObject> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <foreignObject> element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given <foreignObject> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given <foreignObject> element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given <foreignObject> element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given <foreignObject> element."
  [this val]
  (aset this "height" val))

