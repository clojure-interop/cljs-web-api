(ns js.Proxy
  "The Proxy object is used to define custom behavior for fundamental
  (e.g. property lookup, assignment, enumeration, function invocation,"
  (:refer-clojure :exclude [apply get set]))

(defn revocable
  "Method.

  The Proxy.revocable() method is used to create a revocable `js.Proxy`

  `Proxy.revocable(target, handler);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable`"
  [this target handler]
  (-> this (.revocable target handler)))

(defn apply
  "Method.

  The handler.apply() method is a trap for a function call.

  `var p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply`"
  [this & args]
  (-> this .-apply (.apply this (clj->js args))))

(defn construct
  "Method.

  The handler.construct() method is a trap for the `new` operator.
  order for the new operation to be valid on the resulting Proxy
  the target used to initialize the proxy must itself have a [[Construct]]
  method (i.e. new target must be valid).

  `var p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct`"
  [this & args]
  (-> this .-construct (.apply this (clj->js args))))

(defn define-property
  "Method.

  The handler.defineProperty() method is a trap for `Object.defineProperty()`.

  `var p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty`"
  [this & args]
  (-> this .-defineProperty (.apply this (clj->js args))))

(defn delete-property
  "Method.

  The handler.deleteProperty() method is a trap for the `delete`

  `var p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty`"
  [this & args]
  (-> this .-deleteProperty (.apply this (clj->js args))))

(defn enumerate
  "Method.

  [Obsolute]

  The handler.enumerate() method used to be a trap for `for...in`
  but has been removed from the ECMAScript standard in ES2016 and
  deprecated in browsers.

  `var p = new Proxy(target, {
  enumerate(target) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate`"
  [this & args]
  (-> this .-enumerate (.apply this (clj->js args))))

(defn get
  "Method.

  The handler.get() method is a trap for getting a property value.

  `var p = new Proxy(target, {
  get: function(target, property, receiver) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get`"
  [this & args]
  (-> this .-get (.apply this (clj->js args))))

(defn get-own-property-descriptor
  "Method.

  The handler.getOwnPropertyDescriptor() method is a trap for `Object.getOwnPropertyDescriptor()`.

  `var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, prop) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor`"
  [this & args]
  (-> this .-getOwnPropertyDescriptor (.apply this (clj->js args))))

(defn get-prototype-of
  "Method.

  The handler.getPrototypeOf() method is a trap for the [[GetPrototypeOf]]
  method.

  `var p = new Proxy(obj, {
  getPrototypeOf(target) {
  ...
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf`"
  [this & args]
  (-> this .-getPrototypeOf (.apply this (clj->js args))))

(defn has
  "Method.

  The handler.has() method is a trap for the `in` operator.

  `var p = new Proxy(target, {
  has: function(target, prop) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has`"
  [this & args]
  (-> this .-has (.apply this (clj->js args))))

(defn is-extensible
  "Method.

  The handler.isExtensible() method is a trap for `Object.isExtensible()`.

  `var p = new Proxy(target, {
  isExtensible: function(target) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible`"
  [this & args]
  (-> this .-isExtensible (.apply this (clj->js args))))

(defn own-keys
  "Method.

  The handler.ownKeys() method is a trap for `Reflect.ownKeys()`.

  `var p = new Proxy(target, {
  ownKeys: function(target) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys`"
  [this & args]
  (-> this .-ownKeys (.apply this (clj->js args))))

(defn prevent-extensions
  "Method.

  The handler.preventExtensions() method is a trap for `Object.preventExtensions()`.

  `var p = new Proxy(target, {
  preventExtensions: function(target) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions`"
  [this & args]
  (-> this .-preventExtensions (.apply this (clj->js args))))

(defn set
  "Method.

  The handler.set() method is a trap for setting a property value.

  `var p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set`"
  [this & args]
  (-> this .-set (.apply this (clj->js args))))

(defn set-prototype-of
  "Method.

  The handler.setPrototypeOf() method is a trap for `Object.setPrototypeOf()`.

  `var p = new Proxy(target, {
  setPrototypeOf: function(target, prototype) {
  }
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf`"
  [this & args]
  (-> this .-setPrototypeOf (.apply this (clj->js args))))

