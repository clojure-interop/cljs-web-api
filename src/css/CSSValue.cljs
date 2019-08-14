(ns css.CSSValue
  "The CSSValue interface represents the current computed value
  a CSS property."
  (:refer-clojure :exclude []))

(defn css-text
  "Property.

  The cssText property of the `css.CSSValue` interface represents
  current computed CSS property value.

  `cssText = cssValue.cssText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSValue/cssText`"
  [this]
  (-> this (.cssText)))

(defn set-css-text!
  "Property.

  The cssText property of the `css.CSSValue` interface represents
  current computed CSS property value.

  `cssText = cssValue.cssText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSValue/cssText`"
  [this val]
  (aset this "cssText" val))

(defn css-value-type
  "Property.

  The cssValueType read-only property of the `css.CSSValue` interface
  the type of the current computed CSS property value.

  `cssValueType = cssValue.cssValueType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSValue/cssValueType`"
  [this]
  (-> this (.cssValueType)))

