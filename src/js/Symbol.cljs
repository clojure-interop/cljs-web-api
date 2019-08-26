(ns js.Symbol
  "The data type symbol is a primitive data type. The Symbol() function
  a value of type symbol, has static properties that expose several
  of built-in objects, has static methods that expose the global
  registry, and resembles a built-in object class but is incomplete
  a constructor because it does not support the syntax \\\"new Symbol()\\\"."
  (:refer-clojure :exclude [replace for]))

(defn for
  "Method.

  The Symbol.for(key) method searches for existing symbols in a
  symbol registry with the given key and returns it if found. Otherwise
  new symbol gets created in the global symbol registry with this

  `Symbol.for(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for`"
  [this key]
  (-> this (.for key)))

(defn key-for
  "Method.

  The Symbol.keyFor(sym) method retrieves a shared symbol key from
  global symbol registry for the given symbol.

  `Symbol.keyFor(sym);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor`"
  [this sym]
  (-> this (.keyFor sym)))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the object.

  `Symbol.toSource()

  var sym = Symbol()
  sym.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toSource`"
  [this & args]
  (apply (-> this .-toSource) (concat [this] args)))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  object.

  `Symbol().toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString`"
  [this & args]
  (apply (-> this .-toString) (concat [this] args)))

(defn value-of
  "Method.

  The valueOf() method returns the primitive value of a Symbol

  `Symbol().valueOf();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf`"
  [this & args]
  (apply (-> this .-valueOf) (concat [this] args)))

(defn length
  "Property.

  Length property whose value is 0."
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  Length property whose value is 0."
  [this val]
  (aset this "length" val))

(defn iterator
  "Property.

  The Symbol.iterator well-known symbol specifies the default iterator
  an object. Used by `for...of`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator`"
  [this]
  (-> this (.iterator)))

(defn set-iterator!
  "Property.

  The Symbol.iterator well-known symbol specifies the default iterator
  an object. Used by `for...of`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator`"
  [this val]
  (aset this "iterator" val))

(defn match
  "Property.

  The Symbol.match well-known symbol specifies the matching of
  regular expression against a string. This function is called
  the `String.prototype.match()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match`"
  [this]
  (-> this (.match)))

(defn set-match!
  "Property.

  The Symbol.match well-known symbol specifies the matching of
  regular expression against a string. This function is called
  the `String.prototype.match()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match`"
  [this val]
  (aset this "match" val))

(defn has-instance
  "Property.

  The Symbol.hasInstance well-known symbol is used to determine
  a constructor object recognizes an object as its instance. The
  operator's behavior can be customized by this symbol.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance`"
  [this]
  (-> this (.hasInstance)))

(defn set-has-instance!
  "Property.

  The Symbol.hasInstance well-known symbol is used to determine
  a constructor object recognizes an object as its instance. The
  operator's behavior can be customized by this symbol.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance`"
  [this val]
  (aset this "hasInstance" val))

(defn async-iterator
  "Property.

  The Symbol.asyncIterator well-known symbol specifies the default
  for an object. If this property is set on an object, it is an
  iterable and can be used in a for await...of loop.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator`"
  [this]
  (-> this (.asyncIterator)))

(defn set-async-iterator!
  "Property.

  The Symbol.asyncIterator well-known symbol specifies the default
  for an object. If this property is set on an object, it is an
  iterable and can be used in a for await...of loop.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator`"
  [this val]
  (aset this "asyncIterator" val))

(defn is-concat-spreadable
  "Property.

  The Symbol.isConcatSpreadable well-known symbol is used to configure
  an object should be flattened to its array elements when using
  `Array.prototype.concat()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable`"
  [this]
  (-> this (.isConcatSpreadable)))

(defn set-is-concat-spreadable!
  "Property.

  The Symbol.isConcatSpreadable well-known symbol is used to configure
  an object should be flattened to its array elements when using
  `Array.prototype.concat()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable`"
  [this val]
  (aset this "isConcatSpreadable" val))

(defn match-all
  "Property.

  The Symbol.matchAll well-known symbol returns an iterator, that
  matches of the regular expression against a string. This function
  called by the `String.prototype.matchAll()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll`"
  [this]
  (-> this (.matchAll)))

(defn set-match-all!
  "Property.

  The Symbol.matchAll well-known symbol returns an iterator, that
  matches of the regular expression against a string. This function
  called by the `String.prototype.matchAll()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll`"
  [this val]
  (aset this "matchAll" val))

(defn prototype
  "Property.

  The Symbol.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Symbol.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/prototype`"
  [this val]
  (aset this "prototype" val))

(defn description
  "Property.

  The read-only description property is a string returning the
  description of `js.Symbol` objects.

  `Symbol('myDescription').description;
  Symbol.iterator.description;
  Symbol.for('foo').description;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description`"
  [this]
  (-> this (.description)))

(defn set-description!
  "Property.

  The read-only description property is a string returning the
  description of `js.Symbol` objects.

  `Symbol('myDescription').description;
  Symbol.iterator.description;
  Symbol.for('foo').description;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description`"
  [this val]
  (aset this "description" val))

(defn replace
  "Property.

  The Symbol.replace well-known symbol specifies the method that
  matched substrings of a string. This function is called by the
  method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace`"
  [this]
  (-> this (.replace)))

(defn set-replace!
  "Property.

  The Symbol.replace well-known symbol specifies the method that
  matched substrings of a string. This function is called by the
  method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace`"
  [this val]
  (aset this "replace" val))

(defn search
  "Property.

  The Symbol.search well-known symbol specifies the method that
  the index within a string that matches the regular expression.
  function is called by the `String.prototype.search()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search`"
  [this]
  (-> this (.search)))

(defn set-search!
  "Property.

  The Symbol.search well-known symbol specifies the method that
  the index within a string that matches the regular expression.
  function is called by the `String.prototype.search()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search`"
  [this val]
  (aset this "search" val))

(defn species
  "Property.

  The well-known symbol Symbol.species specifies a function-valued
  that the constructor function uses to create derived objects.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species`"
  [this]
  (-> this (.species)))

(defn set-species!
  "Property.

  The well-known symbol Symbol.species specifies a function-valued
  that the constructor function uses to create derived objects.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species`"
  [this val]
  (aset this "species" val))

(defn split
  "Property.

  The Symbol.split well-known symbol specifies the method that
  a string at the indices that match a regular expression. This
  is called by the `String.prototype.split()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split`"
  [this]
  (-> this (.split)))

(defn set-split!
  "Property.

  The Symbol.split well-known symbol specifies the method that
  a string at the indices that match a regular expression. This
  is called by the `String.prototype.split()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split`"
  [this val]
  (aset this "split" val))

(defn to-primitive
  "Property.

  The Symbol.toPrimitive is a symbol that specifies a function
  property that is called to convert an object to a corresponding
  value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive`"
  [this]
  (-> this (.toPrimitive)))

(defn set-to-primitive!
  "Property.

  The Symbol.toPrimitive is a symbol that specifies a function
  property that is called to convert an object to a corresponding
  value.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive`"
  [this val]
  (aset this "toPrimitive" val))

(defn to-string-tag
  "Property.

  The Symbol.toStringTag well-known symbol is a string valued property
  is used in the creation of the default string description of
  object. It is accessed internally by the `Object.prototype.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag`"
  [this]
  (-> this (.toStringTag)))

(defn set-to-string-tag!
  "Property.

  The Symbol.toStringTag well-known symbol is a string valued property
  is used in the creation of the default string description of
  object. It is accessed internally by the `Object.prototype.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag`"
  [this val]
  (aset this "toStringTag" val))

(defn unscopables
  "Property.

  The Symbol.unscopables well-known symbol is used to specify an
  value of whose own and inherited property names are excluded
  the with environment bindings of the associated object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables`"
  [this]
  (-> this (.unscopables)))

(defn set-unscopables!
  "Property.

  The Symbol.unscopables well-known symbol is used to specify an
  value of whose own and inherited property names are excluded
  the with environment bindings of the associated object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables`"
  [this val]
  (aset this "unscopables" val))

