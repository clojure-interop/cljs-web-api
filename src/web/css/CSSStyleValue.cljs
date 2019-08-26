(ns web.css.CSSStyleValue
  "The CSSStyleValue interface of the the CSS Typed Object Model
  is the base class of all CSS values accessible through the Typed
  API. An instance of this class may be used anywhere a string
  expected."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The CSSUnitValue() constructor creates a new `web.css.CSSUnitValue` object which returns a new `web.css.CSSUnitValue` object which represents values that contain a single unit type. For example, \\\"42px\\\" would be represented by a CSSNumericValue.

  value
  Returns a double indicating the number of units.
  unit
  Returns a `web.USVString` indicating the type of unit.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/CSSUnitValue`"
  js/CSSUnitValue)

(defn parse
  "Method.

  The parse() method of the `web.css.CSSStyleValue` interface sets
  specific CSS property to the specified values and returns the
  value as a `web.css.CSSStyleValue` object.

  `CSSStyleValue.parse(property, cssText)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse`"
  [this property css-text]
  (-> this (.parse property css-text)))

(defn parse-all
  "Method.

  The parseAll() method of the `web.css.CSSStyleValue` interface
  all occurences of a specific CSS property to the specified valueand
  an array of `web.css.CSSStyleValue` objects, each containing
  of the supplied values.

  `CSSStyleValue.parseAll(property, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll`"
  [this property value]
  (-> this (.parseAll property value)))

