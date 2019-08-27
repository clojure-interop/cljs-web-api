(ns js.JSON
  "The JSON object contains methods for parsing JavaScript Object
  (JSON) and converting values to JSON. It can't be called or constructed,
  aside from its two method properties, it has no interesting functionality
  its own."
  (:refer-clojure :exclude []))

(defn parse
  "Method.

  The JSON.parse() method parses a JSON string, constructing the
  value or object described by the string. An optional reviver
  can be provided to perform a transformation on the resulting
  before it is returned.

  `JSON.parse(text[, reviver])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse`"
  [this & args]
  (-> this .-parse (.apply this (clj->js args))))

(defn stringify
  "Method.

  The JSON.stringify() method converts a JavaScript object or value
  a JSON string, optionally replacing values if a replacer function
  specified or optionally including only the specified properties
  a replacer array is specified.

  `JSON.stringify(value[, replacer[, space]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify`"
  [this & args]
  (-> this .-stringify (.apply this (clj->js args))))

