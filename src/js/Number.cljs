(ns js.Number
  "The Number JavaScript object is a wrapper object allowing you
  work with numerical values. A Number object is created using
  Number() constructor. A primitive type object number is created
  the Number() function."
  (:refer-clojure :exclude []))

(defn is-na-n
  "Method.

  The Number.isNaN() method determines whether the passed value
  `js.NaN` and its type is `js.Number`. It is a more robust version
  the original, global `isNaN()`.

  `Number.isNaN(value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN`"
  [this value]
  (-> this (.isNaN value)))

(defn is-finite
  "Method.

  The Number.isFinite() method determines whether the passed value
  a finite number.

  `Number.isFinite(value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite`"
  [this value]
  (-> this (.isFinite value)))

(defn is-integer
  "Method.

  The Number.isInteger() method determines whether the passed value
  an integer.

  `Number.isInteger(value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger`"
  [this value]
  (-> this (.isInteger value)))

(defn is-safe-integer
  "Method.

  The Number.isSafeInteger() method determines whether the provided
  is a number that is a safe integer.

  `Number.isSafeInteger(testValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger`"
  [this test-value]
  (-> this (.isSafeInteger test-value)))

(defn to-integer
  "Method.

  Used to evaluate the passed value and convert it to an integer
  Infinity), but has been removed."
  [this & args]
  (apply (-> this .-toInteger) (concat [this] args)))

(defn parse-float
  "Method.

  The Number.parseFloat() method parses a string argument and returns
  floating point number.

  `Number.parseFloat(string)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat`"
  [this string]
  (-> this (.parseFloat string)))

(defn parse-int
  "Method.

  The Number.parseInt() method parses a string argument and returns
  integer of the specified radix or base.

  `Number.parseInt(string,[ radix])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt`"
  [this & args]
  (apply (-> this .-parseInt) (concat [this] args)))

(defn to-exponential
  "Method.

  The toExponential() method returns a string representing the
  object in exponential notation.

  `numObj.toExponential([fractionDigits])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential`"
  [this & args]
  (apply (-> this .-toExponential) (concat [this] args)))

(defn to-fixed
  "Method.

  The toFixed() method formats a number using fixed-point notation.

  `numObj.toFixed([digits])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed`"
  [this & args]
  (apply (-> this .-toFixed) (concat [this] args)))

(defn to-locale-string
  "Method.

  The toLocaleString() method returns a string with a language-sensitive
  of this number.

  `numObj.toLocaleString([locales [, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString`"
  [this & args]
  (apply (-> this .-toLocaleString) (concat [this] args)))

(defn to-precision
  "Method.

  The toPrecision() method returns a string representing the `js.Number`
  to the specified precision.

  `numObj.toPrecision([precision])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision`"
  [this & args]
  (apply (-> this .-toPrecision) (concat [this] args)))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the object.

  `numObj.toSource()
  Number.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toSource`"
  [this & args]
  (apply (-> this .-toSource) (concat [this] args)))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  object.

  `numObj.toString([radix])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString`"
  [this & args]
  (apply (-> this .-toString) (concat [this] args)))

(defn value-of
  "Method.

  The valueOf() method returns the wrapped primitive value of a
  object.

  `numObj.valueOf()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf`"
  [this ]
  (-> this (.valueOf)))

(defn epsilon
  "Property.

  The Number.EPSILON property represents the difference between
  and the smallest floating point number greater than 1.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON`"
  [this]
  (-> this (.-EPSILON)))

(defn set-epsilon!
  "Property.

  The Number.EPSILON property represents the difference between
  and the smallest floating point number greater than 1.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON`"
  [this val]
  (aset this "EPSILON" val))

(defn max-safe-integer
  "Property.

  The Number.MAX_SAFE_INTEGER constant represents the maximum safe
  in JavaScript (253 - 1).

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER`"
  [this]
  (-> this (.-MAX_SAFE_INTEGER)))

(defn set-max-safe-integer!
  "Property.

  The Number.MAX_SAFE_INTEGER constant represents the maximum safe
  in JavaScript (253 - 1).

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER`"
  [this val]
  (aset this "MAX_SAFE_INTEGER" val))

(defn max-value
  "Property.

  The Number.MAX_VALUE property represents the maximum numeric
  representable in JavaScript.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE`"
  [this]
  (-> this (.-MAX_VALUE)))

(defn set-max-value!
  "Property.

  The Number.MAX_VALUE property represents the maximum numeric
  representable in JavaScript.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE`"
  [this val]
  (aset this "MAX_VALUE" val))

(defn min-safe-integer
  "Property.

  The Number.MIN_SAFE_INTEGER constant represents the minimum safe
  in JavaScript (-(253 - 1)).

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER`"
  [this]
  (-> this (.-MIN_SAFE_INTEGER)))

(defn set-min-safe-integer!
  "Property.

  The Number.MIN_SAFE_INTEGER constant represents the minimum safe
  in JavaScript (-(253 - 1)).

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER`"
  [this val]
  (aset this "MIN_SAFE_INTEGER" val))

(defn min-value
  "Property.

  The Number.MIN_VALUE property represents the smallest positive
  value representable in JavaScript.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE`"
  [this]
  (-> this (.-MIN_VALUE)))

(defn set-min-value!
  "Property.

  The Number.MIN_VALUE property represents the smallest positive
  value representable in JavaScript.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE`"
  [this val]
  (aset this "MIN_VALUE" val))

(defn na-n
  "Property.

  The Number.NaN property represents Not-A-Number. Equivalent of

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN`"
  [this]
  (-> this (.-NaN)))

(defn set-na-n!
  "Property.

  The Number.NaN property represents Not-A-Number. Equivalent of

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN`"
  [this val]
  (aset this "NaN" val))

(defn negative-infinity
  "Property.

  The Number.NEGATIVE_INFINITY property represents the negative
  value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY`"
  [this]
  (-> this (.-NEGATIVE_INFINITY)))

(defn set-negative-infinity!
  "Property.

  The Number.NEGATIVE_INFINITY property represents the negative
  value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY`"
  [this val]
  (aset this "NEGATIVE_INFINITY" val))

(defn positive-infinity
  "Property.

  The Number.POSITIVE_INFINITY property represents the positive
  value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY`"
  [this]
  (-> this (.-POSITIVE_INFINITY)))

(defn set-positive-infinity!
  "Property.

  The Number.POSITIVE_INFINITY property represents the positive
  value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY`"
  [this val]
  (aset this "POSITIVE_INFINITY" val))

(defn prototype
  "Property.

  The Number.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Number.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype`"
  [this val]
  (aset this "prototype" val))

