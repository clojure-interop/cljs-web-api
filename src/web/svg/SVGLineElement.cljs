(ns web.svg.SVGLineElement
  "The SVGLineElement interface provides access to the properties
  `<line>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn x1
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute x1
  the given <line> element."
  [this]
  (-> this (.-x1)))

(defn set-x1!
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute x1
  the given <line> element."
  [this val]
  (aset this "x1" val))

(defn y1
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute y1
  the given <line> element."
  [this]
  (-> this (.-y1)))

(defn set-y1!
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute y1
  the given <line> element."
  [this val]
  (aset this "y1" val))

(defn x2
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute x2
  the given <line> element."
  [this]
  (-> this (.-x2)))

(defn set-x2!
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute x2
  the given <line> element."
  [this val]
  (aset this "x2" val))

(defn y2
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute y2
  the given <line> element."
  [this]
  (-> this (.-y2)))

(defn set-y2!
  "Property.

  Returns an SVGAnimatedLength that corresponds to attribute y2
  the given <line> element."
  [this val]
  (aset this "y2" val))

