(ns js.GeneratorFunction
  "The GeneratorFunction constructor creates a new `generator function`
  In JavaScript every generator function is actually a GeneratorFunction"
  (:refer-clojure :exclude []))

(defn length
  "Property.

  The GeneratorFunction constructor's length property whose value
  1."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The GeneratorFunction constructor's length property whose value
  1."
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The GeneratorFunction.prototype property represents the `js.GeneratorFunction`
  object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The GeneratorFunction.prototype property represents the `js.GeneratorFunction`
  object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype`"
  [this val]
  (aset this "prototype" val))

