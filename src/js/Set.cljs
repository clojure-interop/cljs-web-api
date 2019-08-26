(ns js.Set
  "The Set object lets you store unique values of any type, whether
  values or object references."
  (:refer-clojure :exclude []))

(defn add
  "Method.

  The add() method appends a new element with a specified value
  the end of a Set object.

  `mySet.add(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add`"
  [this value]
  (-> this (.add value)))

(defn clear
  "Method.

  The clear() method removes all elements from a Set object.

  `mySet.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear`"
  [this ]
  (-> this (.clear)))

(defn delete
  "Method.

  The delete() method removes the specified element from a Set

  `mySet.delete(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete`"
  [this value]
  (-> this (.delete value)))

(defn entries
  "Method.

  The entries() method returns a new Iterator object that contains
  array of [value, value] for each element in the Set object, in
  order. For Set objects there is no key like in Map objects. However,
  keep the API similar to the Map object, each entry has the same
  for its key and value here, so that an array [value, value] is

  `mySet.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The forEach() method executes a provided function once for each
  in the Set object, in insertion order.

  `mySet.forEach(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn has
  "Method.

  The has() method returns a boolean indicating whether an element
  the specified value exists in a Set object or not.

  `mySet.has(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has`"
  [this value]
  (-> this (.has value)))

(defn values
  "Method.

  The values() method returns a new Iterator object that contains
  values for each element in the Set object in insertion order.

  `mySet.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values`"
  [this ]
  (-> this (.values)))

(defn length
  "Property.

  The value of the length property is 0."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The value of the length property is 0."
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The Set.prototype property represents the prototype for the `js.Set`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Set.prototype property represents the prototype for the `js.Set`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype`"
  [this val]
  (aset this "prototype" val))

(defn size
  "Property.

  The size accessor property returns the number of (unique) elements
  a `js.Set` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  The size accessor property returns the number of (unique) elements
  a `js.Set` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size`"
  [this val]
  (aset this "size" val))

