(ns web.svg.SVGRect
  "The SVGRect represents a rectangle. Rectangles consist of an
  and y coordinate pair identifying a minimum x value, a minimum
  value, and a width and height, which are constrained to be non-negative."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  The exact effect of this coordinate depends on each element.
  the attribute is not specified, the effect is as if a value of
  were specified."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  The exact effect of this coordinate depends on each element.
  the attribute is not specified, the effect is as if a value of
  were specified."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The exact effect of this coordinate depends on each element.If
  attribute is not specified, the effect is as if a value of 0
  specified."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  The exact effect of this coordinate depends on each element.If
  attribute is not specified, the effect is as if a value of 0
  specified."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  This represents the width of the rectangle.A value that is negative
  to an error. A value of zero disables rendering of the element"
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  This represents the width of the rectangle.A value that is negative
  to an error. A value of zero disables rendering of the element"
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  This represents the height of the rectangle.A value that is negative
  to an error.A value of zero disables rendering of the element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  This represents the height of the rectangle.A value that is negative
  to an error.A value of zero disables rendering of the element."
  [this val]
  (aset this "height" val))

