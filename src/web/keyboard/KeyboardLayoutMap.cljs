(ns web.keyboard.KeyboardLayoutMap
  "The KeyboardLayoutMap interface of the the Keyboard API is a
  object with functions for retrieving the string associated with
  physical keys."
  (:refer-clojure :exclude [keys get]))

(defn for-each
  "Method.

  The forEach() method of the `web.keyboard.KeyboardLayoutMap`
  executes a provided function once for each element of the map.

  `KeyboardLayoutMap.forEach(function callback(currentValue[, index[, array]]) {
  //your iterator
  }[, thisArg]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn get
  "Method.

  The get() method of the `web.keyboard.KeyboardLayoutMap` interface
  the element with the given key.

  `var value = KeyboardLayoutMap.get(key)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/get`"
  [this key]
  (-> this (.get key)))

(defn has
  "Method.

  The has() method of the `web.keyboard.KeyboardLayoutMap` interface
  a boolean indicating whether the object has an element with the
  key.

  `var aBoolean = KeyboardLayoutMap.has(key)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/has`"
  [this key]
  (-> this (.has key)))

(defn entries
  "Property.

  The entries read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns an array of a given object's own enumerable property
  value] pairs, in the same order as that provided by a `for...in`
  (the difference being that a for-in loop enumerates properties
  the prototype chain as well).

  `KeyboardLayoutMap.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/entries`"
  [this]
  (-> this (.-entries)))

(defn set-entries!
  "Property.

  The entries read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns an array of a given object's own enumerable property
  value] pairs, in the same order as that provided by a `for...in`
  (the difference being that a for-in loop enumerates properties
  the prototype chain as well).

  `KeyboardLayoutMap.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/entries`"
  [this val]
  (aset this "entries" val))

(defn keys
  "Property.

  The keys read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns a new object that contains the keys for each index in
  array.

  `iterator = KeyboardLayoutMap.keys`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/keys`"
  [this]
  (-> this (.-keys)))

(defn set-keys!
  "Property.

  The keys read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns a new object that contains the keys for each index in
  array.

  `iterator = KeyboardLayoutMap.keys`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/keys`"
  [this val]
  (aset this "keys" val))

(defn size
  "Property.

  The size read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns the number of elements in the map.

  `var size = KeyboardLayoutMap.size()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  The size read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns the number of elements in the map.

  `var size = KeyboardLayoutMap.size()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/size`"
  [this val]
  (aset this "size" val))

(defn values
  "Property.

  The values read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns a new object that contains the values for each index
  the .

  `var iterator = KeyboardLayoutMap.values`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/values`"
  [this]
  (-> this (.-values)))

(defn set-values!
  "Property.

  The values read-only property of the `web.keyboard.KeyboardLayoutMap`
  returns a new object that contains the values for each index
  the .

  `var iterator = KeyboardLayoutMap.values`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/values`"
  [this val]
  (aset this "values" val))

