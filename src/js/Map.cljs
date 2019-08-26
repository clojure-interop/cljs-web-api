(ns js.Map
  "The Map object holds key-value pairs and remembers the original
  order of the keys."
  (:refer-clojure :exclude [get keys set]))

(defn clear
  "Method.

  The clear() method removes all elements from a Map object.

  `myMap.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear`"
  [this ]
  (-> this (.clear)))

(defn delete
  "Method.

  The delete() method removes the specified element from a Map
  by key.

  `myMap.delete(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete`"
  [this key]
  (-> this (.delete key)))

(defn entries
  "Method.

  The entries() method returns a new Iterator object that contains
  [key, value] pairs for each element in the Map object in insertion

  `myMap.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The forEach() method executes a provided function once per each
  pair in the Map object, in insertion order.

  `myMap.forEach(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach`"
  [this & args]
  (apply (-> this .-forEach) (concat [this] args)))

(defn get
  "Method.

  The get() method returns a specified element from a Map object.

  `myMap.get(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get`"
  [this key]
  (-> this (.get key)))

(defn has
  "Method.

  The has() method returns a boolean indicating whether an element
  the specified key exists or not.

  `myMap.has(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has`"
  [this key]
  (-> this (.has key)))

(defn keys
  "Method.

  The keys() method returns a new Iterator object that contains
  keys for each element in the Map object in insertion order.

  `myMap.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys`"
  [this ]
  (-> this (.keys)))

(defn set
  "Method.

  The set() method adds or updates an element with a specified
  and a value to a Map object.

  `myMap.set(key, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set`"
  [this key value]
  (-> this (.set key value)))

(defn values
  "Method.

  The values() method returns a new Iterator object that contains
  values for each element in the Map object in insertion order.

  `myMap.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values`"
  [this ]
  (-> this (.values)))

(defn length
  "Property.

  The value of the length property is 0.
  To count how many elements are in a Map, use Map.prototype.size."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The value of the length property is 0.
  To count how many elements are in a Map, use Map.prototype.size."
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The Map.prototype property represents the prototype for the `js.Map`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Map.prototype property represents the prototype for the `js.Map`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/prototype`"
  [this val]
  (aset this "prototype" val))

(defn size
  "Property.

  The size accessor property returns the number of elements in
  `js.Map` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  The size accessor property returns the number of elements in
  `js.Map` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size`"
  [this val]
  (aset this "size" val))

