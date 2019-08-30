(ns web.css.CSSKeywordValue
  "The CSSKeywordValue interface of the the CSS Typed Object Model
  creates an object to represent CSS keywords and other identifiers."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  [Experimental]

  The value property of the `web.css.CSSKeywordValue` interface
  or sets the value of the CSSKeywordValue.

  `var val = cssKeywordValue.value
  cssKeywordValue.value = val`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue/value`"
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  [Experimental]

  The value property of the `web.css.CSSKeywordValue` interface
  or sets the value of the CSSKeywordValue.

  `var val = cssKeywordValue.value
  cssKeywordValue.value = val`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue/value`"
  [this val]
  (aset this "value" val))

