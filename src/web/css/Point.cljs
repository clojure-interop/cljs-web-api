(ns web.css.Point
  "Point is an interface, which existed only briefly in the CSS
  Level 1 specification, which represents a point in 2-dimensional
  It is non-standard, not broadly compatible, and should not be"
  (:refer-clojure :exclude []))

(defn x
  "Property.

  A floating-point value specifying the point's position with respect
  the X (horizontal) axis."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  A floating-point value specifying the point's position with respect
  the X (horizontal) axis."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  A floating-point value specifying the point's position with respect
  the Y (vertical) axis."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  A floating-point value specifying the point's position with respect
  the Y (vertical) axis."
  [this val]
  (aset this "y" val))

