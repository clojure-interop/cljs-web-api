(ns web.css.CSSUnparsedValue
  "The CSSUnparsedValue interface of the CSS Typed Object Model
  represents property values that reference custom properties.
  consists of a list of string fragments and variable references."
  (:refer-clojure :exclude [keys]))

(defn entries
  "Method.

  [Draft]
  [Experimental]

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

  [Draft]
  [Experimental]

  The CSSUnparsedValue.forEach() method executes a provided function
  for each element of the `web.css.CSSUnparsedValue`.

  `CSSUnparsedValue.forEach(function callback(currentValue[, index[, array]]) {
  // your iterator
  }[, thisArg]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/forEach`"
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn keys
  "Method.

  [Draft]
  [Experimental]

  The CSSUnparsedValue.keys() method returns a new Array Iterator
  that contains the keys for each index in the array.

  `CSSUnparsedValue.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/keys`"
  [this ]
  (-> this (.keys)))

(defn values
  "Method.

  [Draft]
  [Experimental]

  The CSSUnparsedValue.values() method returns a new Array Iterator
  that contains the values for each index in the CSSUnparsedValue

  `CSSUnparsedValue.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/values`"
  [this ]
  (-> this (.values)))

(defn length
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The length read-only property of the `web.css.CSSUnparsedValue`
  returns the number of items in the object.

  `var length = CSSUnparsedValue.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/length`"
  [this]
  (-> this (.-length)))

