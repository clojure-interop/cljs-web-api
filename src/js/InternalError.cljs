(ns js.InternalError
  "The InternalError object indicates an error that occurred internally
  the JavaScript engine. For example: \\\"InternalError: too much"
  (:refer-clojure :exclude [name]))

(defn to-source
  "Method.

  [Non Standard]

  The toSource() method returns code that could eval to the same

  `e.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource`"
  [this ]
  (-> this (.toSource)))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  object.

  `e.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString`"
  [this ]
  (-> this (.toString)))

(defn prototype
  "Property.

  [Non Standard]

  The InternalError.prototype property represents the prototype
  the `js.InternalError` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  [Non Standard]

  The InternalError.prototype property represents the prototype
  the `js.InternalError` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype`"
  [this val]
  (aset this "prototype" val))

(defn column-number
  "Property.

  [Non Standard]

  The columnNumber property contains the column number in the line
  the file that raised this error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber`"
  [this]
  (-> this (.-columnNumber)))

(defn set-column-number!
  "Property.

  [Non Standard]

  The columnNumber property contains the column number in the line
  the file that raised this error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber`"
  [this val]
  (aset this "columnNumber" val))

(defn file-name
  "Property.

  [Non Standard]

  The fileName property contains the path to the file that raised
  error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName`"
  [this]
  (-> this (.-fileName)))

(defn set-file-name!
  "Property.

  [Non Standard]

  The fileName property contains the path to the file that raised
  error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName`"
  [this val]
  (aset this "fileName" val))

(defn line-number
  "Property.

  [Non Standard]

  The lineNumber property contains the line number in the file
  raised this error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber`"
  [this]
  (-> this (.-lineNumber)))

(defn set-line-number!
  "Property.

  [Non Standard]

  The lineNumber property contains the line number in the file
  raised this error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber`"
  [this val]
  (aset this "lineNumber" val))

(defn message
  "Property.

  The message property is a human-readable description of the error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message`"
  [this]
  (-> this (.-message)))

(defn set-message!
  "Property.

  The message property is a human-readable description of the error.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message`"
  [this val]
  (aset this "message" val))

(defn name
  "Property.

  The name property represents a name for the type of error. The
  value is \\\"Error\\\".

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The name property represents a name for the type of error. The
  value is \\\"Error\\\".

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name`"
  [this val]
  (aset this "name" val))

(defn stack
  "Property.

  [Non Standard]

  The non-standard stack property of `js.Error` objects offer a
  of which functions were called, in what order, from which line
  file, and with what arguments. The stack string proceeds from
  most recent calls to earlier ones, leading back to the original
  scope call.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack`"
  [this]
  (-> this (.-stack)))

(defn set-stack!
  "Property.

  [Non Standard]

  The non-standard stack property of `js.Error` objects offer a
  of which functions were called, in what order, from which line
  file, and with what arguments. The stack string proceeds from
  most recent calls to earlier ones, leading back to the original
  scope call.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack`"
  [this val]
  (aset this "stack" val))

