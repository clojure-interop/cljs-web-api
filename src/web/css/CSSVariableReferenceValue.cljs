(ns web.css.CSSVariableReferenceValue
  "The CSSVariableReferenceValue interface of the CSS Typed Object
  API allows you to create a custom name for a built-in CSS value.
  object functionality is sometimes called a \\\"CSS variable\\\" and
  the same purpose as the `var()` function. The custom name must
  with two dashes."
  (:refer-clojure :exclude []))

(defn variable
  "Property.

  [Draft]
  [Experimental]

  The variable property of the `web.css.CSSVariableReferenceValue`
  a built-in CSS value to be returned by the custom name.

  `var fallback = CSSVariableReferenceValue.fallback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSVariableReferenceValue/variable`"
  [this]
  (-> this (.-variable)))

(defn set-variable!
  "Property.

  [Draft]
  [Experimental]

  The variable property of the `web.css.CSSVariableReferenceValue`
  a built-in CSS value to be returned by the custom name.

  `var fallback = CSSVariableReferenceValue.fallback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSVariableReferenceValue/variable`"
  [this val]
  (aset this "variable" val))

(defn fallback
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The fallback read-only property of the `web.css.CSSVariableReferenceValue`
  returns a custom name for a built-in CSS value.

  `var variable = CSSVariableReferenceValue.variable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSVariableReferenceValue/fallback`"
  [this]
  (-> this (.-fallback)))

