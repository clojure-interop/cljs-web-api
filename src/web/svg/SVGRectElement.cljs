(ns web.svg.SVGRectElement
  "The SVGRectElement interface provides access to the properties
  `<rect>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  Returns an SVGAnimatedLength corresponding to the x attribute
  the given <rect> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  Returns an SVGAnimatedLength corresponding to the x attribute
  the given <rect> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  Returns an SVGAnimatedLength corresponding to the y attribute
  the given <rect> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  Returns an SVGAnimatedLength corresponding to the y attribute
  the given <rect> element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  Returns an SVGAnimatedLength corresponding to the width attribute
  the given <rect> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  Returns an SVGAnimatedLength corresponding to the width attribute
  the given <rect> element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  Returns an SVGAnimatedLength corresponding to the height attribute
  the given <rect> element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  Returns an SVGAnimatedLength corresponding to the height attribute
  the given <rect> element."
  [this val]
  (aset this "height" val))

(defn rx
  "Property.

  Returns an SVGAnimatedLength corresponding to the rx attribute
  the given <rect> element."
  [this]
  (-> this (.-rx)))

(defn set-rx!
  "Property.

  Returns an SVGAnimatedLength corresponding to the rx attribute
  the given <rect> element."
  [this val]
  (aset this "rx" val))

(defn ry
  "Property.

  Returns an SVGAnimatedLength corresponding to the ry attribute
  the given <rect> element."
  [this]
  (-> this (.-ry)))

(defn set-ry!
  "Property.

  Returns an SVGAnimatedLength corresponding to the ry attribute
  the given <rect> element."
  [this val]
  (aset this "ry" val))

