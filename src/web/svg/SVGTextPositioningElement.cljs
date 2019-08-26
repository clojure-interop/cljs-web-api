(ns web.svg.SVGTextPositioningElement
  "The SVGTextPositioningElement interface is implemented by elements
  support attributes that position individual text glyphs. It is
  by `web.svg.SVGTextElement`, `web.svg.SVGTSpanElement`, `web.deprecated.SVGTRefElement`
  `web.deprecated.SVGAltGlyphElement`."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  Returns an SVGAnimatedLengthList reflecting the x attribute of
  given element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  Returns an SVGAnimatedLengthList reflecting the x attribute of
  given element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  Returns an SVGAnimatedLengthList reflecting the y attribute of
  given element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  Returns an SVGAnimatedLengthList reflecting the y attribute of
  given element."
  [this val]
  (aset this "y" val))

(defn dx
  "Property.

  Returns an SVGAnimatedLengthList reflecting the dx attribute
  the given element."
  [this]
  (-> this (.-dx)))

(defn set-dx!
  "Property.

  Returns an SVGAnimatedLengthList reflecting the dx attribute
  the given element."
  [this val]
  (aset this "dx" val))

(defn dy
  "Property.

  Returns an SVGAnimatedLengthList reflecting the dy attribute
  the given element."
  [this]
  (-> this (.-dy)))

(defn set-dy!
  "Property.

  Returns an SVGAnimatedLengthList reflecting the dy attribute
  the given element."
  [this val]
  (aset this "dy" val))

(defn rotate
  "Property.

  Returns an SVGAnimatedNumberList reflecting the rotate attribute
  the given element."
  [this]
  (-> this (.-rotate)))

(defn set-rotate!
  "Property.

  Returns an SVGAnimatedNumberList reflecting the rotate attribute
  the given element."
  [this val]
  (aset this "rotate" val))

