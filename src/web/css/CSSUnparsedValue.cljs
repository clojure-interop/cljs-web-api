(ns web.css.CSSUnparsedValue
  "The CSSUnparsedValue interface of the CSS Typed Object Model
  represents property values that reference custom properties.
  consists of a list of string fragments and variable references."
  (:refer-clojure :exclude [keys]))

(def constructor
  "Constructor.

  The CSSUnparsedValue() constructor creates a new `web.css.CSSUnparsedValue` object which represents property values that reference custom properties.

  members
  An array whose values must be either a `web.USVString` or a `web.css.CSSVariableReferenceValue`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue`"
  js/CSSUnparsedValue)

(defn entries
  "Method.

  The CSSUnparsedValue.entries() method returns an array of a given
  own enumerable property [key, value] pairs in the same order
  that provided by a `for...in` loop (the difference being that
  for-in loop enumerates properties in the prototype chain as well).

  `CSSUnparsedValue.entries(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/entries`"
  [this obj]
  (-> this (.entries obj)))

(defn for-each
  "Method.

  The CSSUnparsedValue.forEach() method executes a provided function
  for each element of the `web.css.CSSUnparsedValue`.

  `CSSUnparsedValue.forEach(function callback(currentValue[, index[, array]]) {
  // your iterator
  }[, thisArg]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn keys
  "Method.

  The CSSUnparsedValue.keys() method returns a new Array Iterator
  that contains the keys for each index in the array.

  `CSSUnparsedValue.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/keys`"
  [this ]
  (-> this (.keys)))

(defn values
  "Method.

  The CSSUnparsedValue.values() method returns a new Array Iterator
  that contains the values for each index in the CSSUnparsedValue

  `CSSUnparsedValue.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/values`"
  [this ]
  (-> this (.values)))

(defn length
  "Property.

  The length read-only property of the `web.css.CSSUnparsedValue`
  returns the number of items in the object.

  `var length = CSSUnparsedValue.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The length read-only property of the `web.css.CSSUnparsedValue`
  returns the number of items in the object.

  `var length = CSSUnparsedValue.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/length`"
  [this val]
  (aset this "length" val))

