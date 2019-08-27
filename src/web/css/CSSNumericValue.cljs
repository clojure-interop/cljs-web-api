(ns web.css.CSSNumericValue
  "The CSSNumericValue interface of the CSS Typed Object Model API
  operations that all numeric values can perform."
  (:refer-clojure :exclude [type min max]))

(defn add
  "Method.

  The add() method of the `web.css.CSSNumericValue` interface adds
  supplied number to the CSSNumericValue.

  `var cssMathSum = CSSNumericValue.add(double | CSSNumericValue);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/add`"
  [this & args]
  (-> this .-add (.apply this (clj->js args))))

(defn sub
  "Method.

  The sub() method of the `web.css.CSSNumericValue` interface subtracts
  supplied number from the CSSNumericValue.

  `var cssMathSum = CSSNumericValue.sub(number);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/sub`"
  [this number]
  (-> this (.sub number)))

(defn mul
  "Method.

  The mul() method of the `web.css.CSSNumericValue` interface multiplies
  CSSNumericValue by the supplied value.

  `var cssMathProduct = CSSNumericValue.mul(number);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/mul`"
  [this number]
  (-> this (.mul number)))

(defn div
  "Method.

  The div() method of the `web.css.CSSNumericValue` interface divides
  CSSNumericValue by the supplied value.

  `var cssNumericValue = CSSNumericValue.div(number);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/div`"
  [this number]
  (-> this (.div number)))

(defn min
  "Method.

  The min() method of the `web.css.CSSNumericValue` interface returns
  lowest value from among those values passed. The passed values
  be of the same type.

  `var cssUnitValue = CSSNumericValue.min(number1 ... numbern);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/min`"
  [this & args]
  (-> this .-min (.apply this (clj->js args))))

(defn max
  "Method.

  The max() method of the `web.css.CSSNumericValue` interface returns
  highest value from among the values passed. The passed values
  be of the same type.

  `var cssUnitValue = CSSNumericValue.man(number1 ... numbern);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/max`"
  [this & args]
  (-> this .-max (.apply this (clj->js args))))

(defn equals
  "Method.

  The equals() method of the `web.css.CSSNumericValue` interface
  a boolean indicating whether the passed value are strictly equal.
  return a value of true, all passed values must be of the same
  and value and must be in the same order. This allows structural
  to be tested quickly.

  `var boolean = CSSNumericValue.equals(number);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/equals`"
  [this number]
  (-> this (.equals number)))

(defn to
  "Method.

  The to() method of the `web.css.CSSNumericValue` interface converts
  numberic value from one unit to another.

  `var cssUnitValue = CSSNumericVAlue.to(unit);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/to`"
  [this unit]
  (-> this (.to unit)))

(defn to-sum
  "Method.

  The toSum() method of the `web.css.CSSNumericValue` interface
  the object's value to a `web.css.CSSMathSum` object to values
  the specified unit.

  `var cssMathSum = CSSNumericValue.toSum(units);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/toSum`"
  [this units]
  (-> this (.toSum units)))

(defn type
  "Method.

  The type() method of the `web.css.CSSNumericValue` interface
  the type of CSSNumericValue, one of angle, flex, frequency, length,
  percent, percentHint, or time.

  `var cssNumericType = CSSNumericValue.type();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/type`"
  [this ]
  (-> this (.type)))

(defn parse
  "Method.

  The parse() method of the `web.css.CSSNumericValue` interface
  a value string into an object whose members are value and the

  `var cssNumericValue = CSSNumericValue.parse(cssText);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/parse`"
  [this css-text]
  (-> this (.parse css-text)))

(defn sum
  "Method.

  The sub() method of the `web.css.CSSNumericValue` interface subtracts
  supplied number from the CSSNumericValue.

  `var cssMathSum = CSSNumericValue.sub(number);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/sum`"
  [this number]
  (-> this (.sum number)))

