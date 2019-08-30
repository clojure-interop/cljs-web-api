(ns web.css.CSSStyleValue
  "The CSSStyleValue interface of the the CSS Typed Object Model
  is the base class of all CSS values accessible through the Typed
  API. An instance of this class may be used anywhere a string
  expected."
  (:refer-clojure :exclude []))

(defn parse
  "Method.

  [Experimental]

  The parse() method of the `web.css.CSSStyleValue` interface sets
  specific CSS property to the specified values and returns the
  value as a `web.css.CSSStyleValue` object.

  `CSSStyleValue.parse(property, cssText)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse`"
  [this property css-text]
  (-> this (.parse property css-text)))

(defn parse-all
  "Method.

  [Experimental]

  The parseAll() method of the `web.css.CSSStyleValue` interface
  all occurences of a specific CSS property to the specified valueand
  an array of `web.css.CSSStyleValue` objects, each containing
  of the supplied values.

  `CSSStyleValue.parseAll(property, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll`"
  [this property value]
  (-> this (.parseAll property value)))

