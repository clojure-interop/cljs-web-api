(ns js.WeakMap
  "The WeakMap object is a collection of key/value pairs in which
  keys are weakly referenced. The keys must be objects and the
  can be arbitrary values."
  (:refer-clojure :exclude [get set]))

(defn clear
  "Method.

  [Obsolute]

  The clear() method used to remove all elements from a WeakMap
  but is no longer part of ECMAScript and its implementations.

  `wm.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/clear`"
  [this ]
  (-> this (.clear)))

(defn delete
  "Method.

  The delete() method removes the specified element from a `js.WeakMap`

  `wm.delete(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete`"
  [this key]
  (-> this (.delete key)))

(defn get
  "Method.

  The get() method returns a specified element from a WeakMap object.

  `wm.get(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get`"
  [this key]
  (-> this (.get key)))

(defn has
  "Method.

  The has() method returns a boolean indicating whether an element
  the specified key exists in the WeakMap object or not.

  `wm.has(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has`"
  [this key]
  (-> this (.has key)))

(defn set
  "Method.

  The set() method adds a new element with a specified key and
  to a WeakMap object.

  `wm.set(key, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set`"
  [this key value]
  (-> this (.set key value)))

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

  The WeakMap.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The WeakMap.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype`"
  [this val]
  (aset this "prototype" val))

