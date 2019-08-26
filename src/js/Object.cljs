(ns js.Object
  "The Object constructor creates an object wrapper."
  (:refer-clojure :exclude [create keys eval]))

(defn assign
  "Method.

  The Object.assign() method is used to copy the values of all
  own properties from one or more source objects to a target object.
  will return the target object.

  `Object.assign(target, ...sources)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign`"
  [this & args]
  (apply (-> this .-assign) (concat [this] args)))

(defn create
  "Method.

  The Object.create() method creates a new object, using an existing
  as the prototype of the newly created object.

  `Object.create(proto, [propertiesObject])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create`"
  [this & args]
  (apply (-> this .-create) (concat [this] args)))

(defn define-properties
  "Method.

  The Object.defineProperties() method defines new or modifies
  properties directly on an object, returning the object.

  `Object.defineProperties(obj, props)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties`"
  [this obj props]
  (-> this (.defineProperties obj props)))

(defn define-property
  "Method.

  The static method Object.defineProperty() defines a new property
  on an object, or modifies an existing property on an object,
  returns the object.

  `Object.defineProperty(obj, prop, descriptor)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty`"
  [this obj prop descriptor]
  (-> this (.defineProperty obj prop descriptor)))

(defn entries
  "Method.

  The Object.entries() method returns an array of a given object's
  enumerable string-keyed property [key, value] pairs, in the same
  as that provided by a `for...in` loop (the difference being that
  for-in loop enumerates properties in the prototype chain as well).
  order of the array returned by Object.entries() does not depend
  how an object is defined. If there is a need for certain ordering
  the array should be sorted first like Object.entries(obj).sort((a,
  => b[0].localeCompare(a[0]));.

  `Object.entries(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries`"
  [this obj]
  (-> this (.entries obj)))

(defn freeze
  "Method.

  The Object.freeze() method freezes an object. A frozen object
  no longer be changed; freezing an object prevents new properties
  being added to it, existing properties from being removed, prevents
  the enumerability, configurability, or writability of existing
  and prevents the values of existing properties from being changed.
  addition, freezing an object also prevents its prototype from
  changed. freeze() returns the same object that was passed in.

  `Object.freeze(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze`"
  [this obj]
  (-> this (.freeze obj)))

(defn from-entries
  "Method.

  The Object.fromEntries() method transforms a list of key-value
  into an object.

  `Object.fromEntries(iterable);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries`"
  [this iterable]
  (-> this (.fromEntries iterable)))

(defn get-notifier
  "Method.

  The Object.getNotifer() method was used to create an object that
  to synthetically trigger a change, but has been deprecated and
  in browsers.

  `Object.getNotifier(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getNotifier`"
  [this obj]
  (-> this (.getNotifier obj)))

(defn get-own-property-descriptor
  "Method.

  The Object.getOwnPropertyDescriptor() method returns a property
  for an own property (that is, one directly present on an object
  not in the object's prototype chain) of a given object.

  `Object.getOwnPropertyDescriptor(obj, prop)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor`"
  [this obj prop]
  (-> this (.getOwnPropertyDescriptor obj prop)))

(defn get-own-property-descriptors
  "Method.

  The Object.getOwnPropertyDescriptors() method returns all own
  descriptors of a given object.

  `Object.getOwnPropertyDescriptors(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors`"
  [this obj]
  (-> this (.getOwnPropertyDescriptors obj)))

(defn get-own-property-names
  "Method.

  The Object.getOwnPropertyNames() method returns an array of all
  (including non-enumerable properties except for those which use
  found directly in a given object.

  `Object.getOwnPropertyNames(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames`"
  [this obj]
  (-> this (.getOwnPropertyNames obj)))

(defn get-own-property-symbols
  "Method.

  The Object.getOwnPropertySymbols() method returns an array of
  symbol properties found directly upon a given object.

  `Object.getOwnPropertySymbols(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols`"
  [this obj]
  (-> this (.getOwnPropertySymbols obj)))

(defn get-prototype-of
  "Method.

  The Object.getPrototypeOf() method returns the prototype (i.e.
  value of the internal [[Prototype]] property) of the specified

  `Object.getPrototypeOf(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf`"
  [this obj]
  (-> this (.getPrototypeOf obj)))

(defn is
  "Method.

  The Object.is() method determines whether two values are the
  value.

  `Object.is(value1, value2);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is`"
  [this value1 value2]
  (-> this (.is value1 value2)))

(defn is-extensible
  "Method.

  The Object.isExtensible() method determines if an object is extensible
  it can have new properties added to it).

  `Object.isExtensible(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible`"
  [this obj]
  (-> this (.isExtensible obj)))

(defn is-frozen
  "Method.

  The Object.isFrozen() determines if an object is frozen.

  `Object.isFrozen(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen`"
  [this obj]
  (-> this (.isFrozen obj)))

(defn is-sealed
  "Method.

  The Object.isSealed() method determines if an object is sealed.

  `Object.isSealed(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed`"
  [this obj]
  (-> this (.isSealed obj)))

(defn keys
  "Method.

  The Object.keys() method returns an array of a given object's
  enumerable property names, in the same order as we get with a
  loop.

  `Object.keys(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys`"
  [this obj]
  (-> this (.keys obj)))

(defn observe
  "Method.

  The Object.observe() method was used for asynchronously observing
  changes to an object. It provided a stream of changes in the
  in which they occur. However, this API has been deprecated and
  from browsers. You can use the more general `js.Proxy` object

  `Object.observe(obj, callback[, acceptList])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe`"
  [this & args]
  (apply (-> this .-observe) (concat [this] args)))

(defn prevent-extensions
  "Method.

  The Object.preventExtensions() method prevents new properties
  ever being added to an object (i.e. prevents future extensions
  the object).

  `Object.preventExtensions(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions`"
  [this obj]
  (-> this (.preventExtensions obj)))

(defn define-getter
  "Method.

  The __defineGetter__ method binds an object's property to a function
  be called when that property is looked up.

  `obj.__defineGetter__(prop, func)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__`"
  [this prop func]
  (-> this (.__defineGetter__ prop func)))

(defn define-setter
  "Method.

  The __defineSetter__ method binds an object's property to a function
  be called when an attempt is made to set that property.

  `obj.__defineSetter__(prop, fun)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__`"
  [this prop fun]
  (-> this (.__defineSetter__ prop fun)))

(defn lookup-getter
  "Method.

  The __lookupGetter__ method returns the function bound as a getter
  the specified property.

  `obj.__lookupGetter__(sprop)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__`"
  [this sprop]
  (-> this (.__lookupGetter__ sprop)))

(defn lookup-setter
  "Method.

  The __lookupSetter__ method returns the function bound as a setter
  the specified property.

  `obj.__lookupSetter__(sprop)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__`"
  [this sprop]
  (-> this (.__lookupSetter__ sprop)))

(defn eval
  "Method.

  The Object.eval() method used to evaluate a string of JavaScript
  in the context of an object, however, this method has been removed.

  `obj.eval(string)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/eval`"
  [this string]
  (-> this (.eval string)))

(defn has-own-property
  "Method.

  The hasOwnProperty() method returns a boolean indicating whether
  object has the specified property as its own property (as opposed
  inheriting it).

  `obj.hasOwnProperty(prop)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty`"
  [this prop]
  (-> this (.hasOwnProperty prop)))

(defn is-prototype-of
  "Method.

  The isPrototypeOf() method checks if an object exists in another
  prototype chain.

  `prototypeObj.isPrototypeOf(object)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf`"
  [this object]
  (-> this (.isPrototypeOf object)))

(defn property-is-enumerable
  "Method.

  The propertyIsEnumerable() method returns a Boolean indicating
  the specified property is enumerable.

  `obj.propertyIsEnumerable(prop)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable`"
  [this prop]
  (-> this (.propertyIsEnumerable prop)))

(defn to-locale-string
  "Method.

  The toLocaleString() method returns a string representing the
  This method is meant to be overridden by derived objects for
  purposes.

  `obj.toLocaleString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString`"
  [this ]
  (-> this (.toLocaleString)))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the object.

  `Object.toSource();
  obj.toSource();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource`"
  [this & args]
  (apply (-> this .-toSource) (concat [this] args)))

(defn to-string
  "Method.

  The toString() method returns a string representing the object.

  `obj.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString`"
  [this ]
  (-> this (.toString)))

(defn unwatch
  "Method.

  The unwatch() method removes a watchpoint set with the `watch()`

  `obj.unwatch(prop)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unwatch`"
  [this prop]
  (-> this (.unwatch prop)))

(defn value-of
  "Method.

  The valueOf() method returns the primitive value of the specified

  `object.valueOf()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf`"
  [this ]
  (-> this (.valueOf)))

(defn watch
  "Method.

  The watch() method watches for a property to be assigned a value
  runs a function when that occurs.

  `obj.watch(prop, handler)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch`"
  [this prop handler]
  (-> this (.watch prop handler)))

(defn seal
  "Method.

  The Object.seal() method seals an object, preventing new properties
  being added to it and marking all existing properties as non-configurable.
  of present properties can still be changed as long as they are

  `Object.seal(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal`"
  [this obj]
  (-> this (.seal obj)))

(defn set-prototype-of
  "Method.

  The Object.setPrototypeOf() method sets the prototype (i.e.,
  internal [[Prototype]] property) of a specified object to another
  or `js.null`.

  `Object.setPrototypeOf(obj, prototype)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf`"
  [this obj prototype]
  (-> this (.setPrototypeOf obj prototype)))

(defn unobserve
  "Method.

  The Object.unobserve() method was used to remove observers set
  `Object.observe()`, but has been deprecated and removed from
  You can use the more general `js.Proxy` object instead.

  `Object.unobserve(obj, callback)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/unobserve`"
  [this obj callback]
  (-> this (.unobserve obj callback)))

(defn values
  "Method.

  The Object.values() method returns an array of a given object's
  enumerable property values, in the same order as that provided
  a `for...in` loop (the difference being that a for-in loop enumerates
  in the prototype chain as well).

  `Object.values(obj)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values`"
  [this obj]
  (-> this (.values obj)))

(defn prototype
  "Property.

  The Object.prototype is a property of the `js.Object` constructor.
  is also the end of a prototype chain.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Object.prototype is a property of the `js.Object` constructor.
  is also the end of a prototype chain.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype`"
  [this val]
  (aset this "prototype" val))

(defn count
  "Property.

  The __count__ property used to store the count of enumerable
  on the object, but it has been removed.

  `obj.__count__`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/count`"
  [this]
  (-> this (.__count__)))

(defn set-count!
  "Property.

  The __count__ property used to store the count of enumerable
  on the object, but it has been removed.

  `obj.__count__`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/count`"
  [this val]
  (aset this "__count__" val))

(defn no-such-method
  "Property.

  The __noSuchMethod__ property used to reference a function to
  executed when a non-existent method is called on an object, but
  function is no longer available.

  `obj.__noSuchMethod__ = fun`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/noSuchMethod`"
  [this]
  (-> this (.__noSuchMethod__)))

(defn set-no-such-method!
  "Property.

  The __noSuchMethod__ property used to reference a function to
  executed when a non-existent method is called on an object, but
  function is no longer available.

  `obj.__noSuchMethod__ = fun`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/noSuchMethod`"
  [this val]
  (aset this "__noSuchMethod__" val))

(defn parent
  "Property.

  The __parent__ property used to point to an object's context,
  it has been removed.

  `obj.__parent__`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent`"
  [this]
  (-> this (.__parent__)))

(defn set-parent!
  "Property.

  The __parent__ property used to point to an object's context,
  it has been removed.

  `obj.__parent__`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Parent`"
  [this val]
  (aset this "__parent__" val))

(defn proto
  "Property.

  The __proto__ property of `Object.prototype` is an accessor property
  getter function and a setter function) that exposes the internal
  (either an object or `js.null`) of the object through which it
  accessed.

  `var Circle = function () {};
  var shape = {};
  var circle = new Circle();

  // Set the object prototype.
  // DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
  shape.__proto__ = circle;

  // Get the object prototype
  console.log(shape.__proto__ === circle); // true



  var shape = function () {};
  var p = {
  a: function () {
  console.log('aaa');
  }
  };
  shape.prototype.__proto__ = p;

  var circle = new shape();
  circle.a(); // aaa
  console.log(shape.prototype === circle.__proto__); // true

  // or
  var shape = function () {};
  var p = {
  a: function () {
  console.log('a');
  }
  };

  var circle = new shape();
  circle.__proto__ = p;
  circle.a(); // a
  console.log(shape.prototype === circle.__proto__); // false

  // or
  function test() {};
  test.prototype.myname = function () {
  console.log('myname');
  };

  var a = new test();
  console.log(a.__proto__ === test.prototype); // true
  a.myname(); // myname


  // or
  var fn = function () {};
  fn.prototype.myname = function () {
  console.log('myname');
  };

  var obj = {
  __proto__: fn.prototype
  };

  obj.myname(); // myname

  Note: that is two underscores, followed by the five characters \\\"proto\\\", followed by two more underscores.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto`"
  [this]
  (-> this (.__proto__)))

(defn set-proto!
  "Property.

  The __proto__ property of `Object.prototype` is an accessor property
  getter function and a setter function) that exposes the internal
  (either an object or `js.null`) of the object through which it
  accessed.

  `var Circle = function () {};
  var shape = {};
  var circle = new Circle();

  // Set the object prototype.
  // DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
  shape.__proto__ = circle;

  // Get the object prototype
  console.log(shape.__proto__ === circle); // true



  var shape = function () {};
  var p = {
  a: function () {
  console.log('aaa');
  }
  };
  shape.prototype.__proto__ = p;

  var circle = new shape();
  circle.a(); // aaa
  console.log(shape.prototype === circle.__proto__); // true

  // or
  var shape = function () {};
  var p = {
  a: function () {
  console.log('a');
  }
  };

  var circle = new shape();
  circle.__proto__ = p;
  circle.a(); // a
  console.log(shape.prototype === circle.__proto__); // false

  // or
  function test() {};
  test.prototype.myname = function () {
  console.log('myname');
  };

  var a = new test();
  console.log(a.__proto__ === test.prototype); // true
  a.myname(); // myname


  // or
  var fn = function () {};
  fn.prototype.myname = function () {
  console.log('myname');
  };

  var obj = {
  __proto__: fn.prototype
  };

  obj.myname(); // myname

  Note: that is two underscores, followed by the five characters \\\"proto\\\", followed by two more underscores.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto`"
  [this val]
  (aset this "__proto__" val))

