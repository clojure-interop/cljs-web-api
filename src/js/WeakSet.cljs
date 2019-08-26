(ns js.WeakSet
  "The WeakSet object lets you store weakly held objects in a collection."
  (:refer-clojure :exclude []))

(defn add
  "Method.

  The add() method appends a new object to the end of a WeakSet

  `ws.add(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add`"
  [this value]
  (-> this (.add value)))

(defn clear
  "Method.

  The clear() method used to remove all elements from a WeakSet
  but is no longer part of ECMAScript and its implementations.

  `ws.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/clear`"
  [this ]
  (-> this (.clear)))

(defn delete
  "Method.

  The delete() method removes the specified element from a WeakSet

  `ws.delete(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete`"
  [this value]
  (-> this (.delete value)))

(defn has
  "Method.

  The has() method returns a boolean indicating whether an object
  in a WeakSet or not.

  `ws.has(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has`"
  [this value]
  (-> this (.has value)))

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

  The WeakSet.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The WeakSet.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype`"
  [this val]
  (aset this "prototype" val))

