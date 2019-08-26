(ns js.Function
  "The Function constructor creates a new Function object. Calling
  constructor directly can create functions dynamically, but suffers
  security and similar (but far less significant) performance issues
  `js.eval`. However, unlike eval, the Function constructor creates
  which execute in the global scope only."
  (:refer-clojure :exclude [name apply]))

(defn apply
  "Method.

  The apply() method calls a function with a given this value,
  arguments provided as an array (or an array-like object).

  `function.apply(thisArg, [argsArray])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply`"
  [this & args]
  (apply (-> this .-apply) (concat [this] args)))

(defn bind
  "Method.

  The bind() method creates a new function that, when called, has
  this keyword set to the provided value, with a given sequence
  arguments preceding any provided when the new function is called.

  `function.bind(thisArg[, arg1[, arg2[, ...]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind`"
  [this & args]
  (apply (-> this .-bind) (concat [this] args)))

(defn call
  "Method.

  The call() method calls a function with a given this value and
  provided individually.

  `function.call(thisArg, arg1, arg2, ...)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call`"
  [this & args]
  (apply (-> this .-call) (concat [this] args)))

(defn is-generator
  "Method.

  The non-standard isGenerator() method used to determine whether
  not a function is a generator. It has been removed from Firefox
  with version 58.

  `fun.isGenerator()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/isGenerator`"
  [this ]
  (-> this (.isGenerator)))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the object.

  `function.toSource();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toSource`"
  [this ]
  (-> this (.toSource)))

(defn to-string
  "Method.

  The toString() method returns a string representing the source
  of the function.

  `function.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString`"
  [this ]
  (-> this (.toString)))

(defn arguments
  "Property.

  The function.arguments property refers to an an array-like object
  to the arguments passed to a function. Use the simple variable
  instead. This property is forbidden in strict model.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments`"
  [this]
  (-> this (.arguments)))

(defn set-arguments!
  "Property.

  The function.arguments property refers to an an array-like object
  to the arguments passed to a function. Use the simple variable
  instead. This property is forbidden in strict model.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments`"
  [this val]
  (aset this "arguments" val))

(defn arity
  "Property.

  The arity property used to return the number of arguments expected
  the function, however, it no longer exists and has been replaced
  the `Function.prototype.length` property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity`"
  [this]
  (-> this (.arity)))

(defn set-arity!
  "Property.

  The arity property used to return the number of arguments expected
  the function, however, it no longer exists and has been replaced
  the `Function.prototype.length` property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity`"
  [this val]
  (aset this "arity" val))

(defn caller
  "Property.

  The function.caller property returns the function that invoked
  specified function. This property is forbidden in strict mode.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller`"
  [this]
  (-> this (.caller)))

(defn set-caller!
  "Property.

  The function.caller property returns the function that invoked
  specified function. This property is forbidden in strict mode.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller`"
  [this val]
  (aset this "caller" val))

(defn display-name
  "Property.

  The function.displayName property returns the display name of
  function.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName`"
  [this]
  (-> this (.displayName)))

(defn set-display-name!
  "Property.

  The function.displayName property returns the display name of
  function.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/displayName`"
  [this val]
  (aset this "displayName" val))

(defn length
  "Property.

  The length property indicates the number of parameters expected
  the function.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length property indicates the number of parameters expected
  the function.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length`"
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The Function.prototype property represents the `js.Function`
  object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Function.prototype property represents the `js.Function`
  object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype`"
  [this val]
  (aset this "prototype" val))

(defn name
  "Property.

  A `js.Function` object's read-only name property indicates the
  name as specified when it was created, or \\\"anonymous\\\" for functions
  anonymously.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A `js.Function` object's read-only name property indicates the
  name as specified when it was created, or \\\"anonymous\\\" for functions
  anonymously.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name`"
  [this val]
  (aset this "name" val))

