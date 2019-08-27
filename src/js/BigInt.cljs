(ns js.BigInt
  "BigInt is a built-in object that provides a way to represent
  numbers larger than 253 - 1, which is the largest number JavaScript
  reliably represent with the `js.Number` primitive. BigInt can
  used for arbitrarily large integers."
  (:refer-clojure :exclude []))

(defn as-int-n
  "Method.

  The BigInt.asIntN static method is used to wrap a BigInt value
  a signed integer between -2width-1 and 2width-1-1.

  `BigInt.asIntN(width, bigint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN`"
  [this width bigint]
  (-> this (.asIntN width bigint)))

(defn as-uint-n
  "Method.

  The BigInt.asUintN static method is used to wrap a BigInt value
  an unsigned integer between between 0 and 2width-1.

  `BigInt.asUintN(width, bigint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asUintN`"
  [this width bigint]
  (-> this (.asUintN width bigint)))

(defn to-locale-string
  "Method.

  The toLocaleString() method returns a string with a language-sensitive
  of this BigInt.

  `bigIntObj.toLocaleString([locales [, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString`"
  [this & args]
  (-> this .-toLocaleString (.apply this (clj->js args))))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  object. The trailing \\\"n\\\" is not part of the string.

  `bigIntObj.toString([radix])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString`"
  [this & args]
  (-> this .-toString (.apply this (clj->js args))))

(defn value-of
  "Method.

  The valueOf() method returns the wrapped primitive value of a
  object.

  `bigIntObj.valueOf()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf`"
  [this ]
  (-> this (.valueOf)))

(defn prototype
  "Property.

  The BigInt.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The BigInt.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/prototype`"
  [this val]
  (aset this "prototype" val))

