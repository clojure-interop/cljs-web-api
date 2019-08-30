(ns web.css.CSSMathValue
  "The CSSMathValue interface of the CSS Typed Object Model API
  base class for classes representing complex numeric values."
  (:refer-clojure :exclude []))

(defn operator
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The CSSMathValue.operator read-only property of the `web.css.CSSMathValue`
  indicates the operator that the current subtype represents. For
  if the current CSSMathValue subtype is CSSMathSum, this property
  return the string \\\"sum\\\".

  `var aString = CSSMathValue.operator;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSMathValue/operator`"
  [this]
  (-> this (.-operator)))

