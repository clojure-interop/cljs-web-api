(ns js.Boolean
  "The Boolean object is an object wrapper for a boolean value."
  (:refer-clojure :exclude []))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the object.

  `booleanObj.toSource()
  Boolean.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toSource`"
  [this & args]
  (-> this .-toSource (.apply this (clj->js args))))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  object.

  `bool.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString`"
  [this ]
  (-> this (.toString)))

(defn value-of
  "Method.

  The valueOf() method returns the primitive value of a `js.Boolean`

  `bool.valueOf()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf`"
  [this ]
  (-> this (.valueOf)))

(defn length
  "Property.

  Length property whose value is 1."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Length property whose value is 1."
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The Boolean.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Boolean.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype`"
  [this val]
  (aset this "prototype" val))

