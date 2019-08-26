(ns web.svg.SVGCursorElement
  "The SVGCursorElement interface provides access to the properties
  `<cursor>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <cursor> element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  <cursor> element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  <cursor> element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  <cursor> element."
  [this val]
  (aset this "y" val))

