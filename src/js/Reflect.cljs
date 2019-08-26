(ns js.Reflect
  "Reflect is a built-in object that provides methods for interceptable
  operations. The methods are the same as those of proxy handlers.
  is not a function object, so it's not constructible."
  (:refer-clojure :exclude [apply get set]))

(defn apply
  "Method.

  The static Reflect.apply() method calls a target function with
  as specified.

  `Reflect.apply(target, thisArgument, argumentsList)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply`"
  [this target this-argument arguments-list]
  (-> this (.apply target this-argument arguments-list)))

(defn construct
  "Method.

  The static Reflect.construct() method acts like the new operator,
  as a function. It is equivalent to calling new target(...args).
  gives also the added option to specify a different prototype.

  `Reflect.construct(target, argumentsList[, newTarget])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct`"
  [this & args]
  (apply (-> this .-construct) (concat [this] args)))

(defn define-property
  "Method.

  The static Reflect.defineProperty() method is like `Object.defineProperty()`
  returns a `js.Boolean`.

  `Reflect.defineProperty(target, propertyKey, attributes)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty`"
  [this target property-key attributes]
  (-> this (.defineProperty target property-key attributes)))

(defn delete-property
  "Method.

  The static Reflect.deleteProperty() method allows to delete properties.
  is like the `delete` as a function.

  `Reflect.deleteProperty(target, propertyKey)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty`"
  [this target property-key]
  (-> this (.deleteProperty target property-key)))

(defn get
  "Method.

  The static Reflect.get() method works like getting a property
  an object (target[propertyKey]) as a function.

  `Reflect.get(target, propertyKey[, receiver])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get`"
  [this & args]
  (apply (-> this .-get) (concat [this] args)))

(defn get-own-property-descriptor
  "Method.

  The static Reflect.getOwnPropertyDescriptor() method is similar
  `Object.getOwnPropertyDescriptor()`. It returns a property descriptor
  the given property if it exists on the object, `js.undefined`

  `Reflect.getOwnPropertyDescriptor(target, propertyKey)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor`"
  [this target property-key]
  (-> this (.getOwnPropertyDescriptor target property-key)))

(defn get-prototype-of
  "Method.

  The static Reflect.getPrototypeOf() method is almost the same
  as `Object.getPrototypeOf()`. It returns the prototype (i.e.
  value of the internal [[Prototype]] property) of the specified

  `Reflect.getPrototypeOf(target)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf`"
  [this target]
  (-> this (.getPrototypeOf target)))

(defn has
  "Method.

  The static Reflect.has() method works like the `in` as a function.

  `Reflect.has(target, propertyKey)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has`"
  [this target property-key]
  (-> this (.has target property-key)))

(defn is-extensible
  "Method.

  The static Reflect.isExtensible() method determines if an object
  extensible (whether it can have new properties added to it).
  is similar to `Object.isExtensible()`, but with some differences.

  `Reflect.isExtensible(target)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible`"
  [this target]
  (-> this (.isExtensible target)))

(defn own-keys
  "Method.

  The static Reflect.ownKeys() method returns an array of the target
  own property keys.

  `Reflect.ownKeys(target)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys`"
  [this target]
  (-> this (.ownKeys target)))

(defn prevent-extensions
  "Method.

  The static Reflect.preventExtensions() method prevents new properties
  ever being added to an object (i.e., prevents future extensions
  the object).

  `Reflect.preventExtensions(target)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions`"
  [this target]
  (-> this (.preventExtensions target)))

(defn set
  "Method.

  The static Reflect.set() method works like setting a property
  an object.

  `Reflect.set(target, propertyKey, value[, receiver])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set`"
  [this & args]
  (apply (-> this .-set) (concat [this] args)))

(defn set-prototype-of
  "Method.

  The static Reflect.setPrototypeOf() method is the same method
  `Object.setPrototypeOf()`, except for its return type. It sets
  prototype (i.e., the internal [[Prototype]] property) of a specified
  to another object or to `js.null`, and returns true if the operation
  successful, or false otherwise.

  `Reflect.setPrototypeOf(target, prototype)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf`"
  [this target prototype]
  (-> this (.setPrototypeOf target prototype)))

(defn enumerate
  "Method.

  The static Reflect.enumerate() method used to return an iterator
  the enumerable own and inherited properties of the target object,
  has been removed in ECMAScript 2016 and is deprecated in browsers.

  `Reflect.enumerate(target)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/enumerate`"
  [this target]
  (-> this (.enumerate target)))

