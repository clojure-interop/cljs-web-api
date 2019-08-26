(ns web.css.CSSMathSum
  "The CSSMathSum interface of the CSS Typed Object Model API represents
  result obtained by calling `add()`, `sub()`, or `toSum()` on"
  (:refer-clojure :exclude []))

(defn values
  "Property.

  Returns a CSSNumericArray object which contains one or more CSSNumericValue"
  [this]
  (-> this (.-values)))

(defn set-values!
  "Property.

  Returns a CSSNumericArray object which contains one or more CSSNumericValue"
  [this val]
  (aset this "values" val))

