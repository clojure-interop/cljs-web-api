(ns js.AsyncFunction
  "The AsyncFunction constructor creates a new `async function`
  In JavaScript every asynchronous function is actually an AsyncFunction"
  (:refer-clojure :exclude []))

(defn length
  "Property.

  The AsyncFunction constructor's length property whose value is"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The AsyncFunction constructor's length property whose value is"
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The AsyncFunction.prototype property represents the `js.AsyncFunction`
  object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The AsyncFunction.prototype property represents the `js.AsyncFunction`
  object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype`"
  [this val]
  (aset this "prototype" val))

