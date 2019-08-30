(ns js.BigInt64Array
  "The BigInt64Array typed array represents an array of 64-bit signed
  in the platform byte order. If control over byte order is needed,
  `js.DataView` instead. The contents are initialized to 0n. Once
  you can reference elements in the array using the object's methods,
  by using standard array index syntax (that is, using bracket"
  (:refer-clojure :exclude [name filter find keys map reduce reverse set some sort]))

(defn from
  "Method.

  The TypedArray.from() method creates a new typed array from an
  or iterable object. This method is nearly the same as `Array.from()`.

  `TypedArray.from(source[, mapFn[, thisArg]])

  where TypedArray is one of:

  Int8Array
  Uint8Array
  Uint8ClampedArray
  Int16Array
  Uint16Array
  Int32Array
  Uint32Array
  Float32Array
  Float64Array
  BigInt64Array
  BigUint64Array`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from`"
  [this & args]
  (-> this .-from (.apply this (clj->js args))))

(defn of
  "Method.

  The TypedArray.of() method creates a new typed array from a variable
  of arguments. This method is nearly the same as `Array.of()`.

  `TypedArray.of(element0[, element1[, ...[, elementN]]])

  where TypedArray is one of:

  Int8Array
  Uint8Array
  Uint8ClampedArray
  Int16Array
  Uint16Array
  Int32Array
  Uint32Array
  Float32Array
  Float64Array
  BigInt64Array
  BigUint64Array`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of`"
  [this & args]
  (-> this .-of (.apply this (clj->js args))))

(defn copy-within
  "Method.

  The copyWithin() method copies the sequence of array elements
  the array to the position starting at target. The copy is taken
  the index positions of the second and third arguments start and
  The end argument is optional and defaults to the length of the
  This method has the same algorithm as `Array.prototype.copyWithin`.
  is one of the typed array types here.

  `typedarray.copyWithin(target, start[, end = this.length])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin`"
  [this & args]
  (-> this .-copyWithin (.apply this (clj->js args))))

(defn entries
  "Method.

  The entries() method returns a new Array Iterator object that
  the key/value pairs for each index in the array.

  `arr.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries`"
  [this ]
  (-> this (.entries)))

(defn every
  "Method.

  The every() method tests whether all elements in the typed array
  the test implemented by the provided function. This method has
  same algorithm as `Array.prototype.every()`. TypedArray is one
  the typed array types here.

  `typedarray.every(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every`"
  [this & args]
  (-> this .-every (.apply this (clj->js args))))

(defn fill
  "Method.

  The fill() method fills all the elements of a typed array from
  start index to an end index with a static value. This method
  the same algorithm as `Array.prototype.fill()`. TypedArray is
  of the typed array types here.

  `typedarray.fill(value[, start = 0[, end = this.length]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill`"
  [this & args]
  (-> this .-fill (.apply this (clj->js args))))

(defn filter
  "Method.

  The filter() method creates a new typed array with all elements
  pass the test implemented by the provided function. This method
  the same algorithm as `Array.prototype.filter()`. TypedArray
  one of the typed array types here.

  `typedarray.filter(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter`"
  [this & args]
  (-> this .-filter (.apply this (clj->js args))))

(defn find
  "Method.

  The find() method returns a value in the typed array, if an element
  the provided testing function. Otherwise `js.undefined` is returned.
  is one of the typed array types here.

  `typedarray.find(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find`"
  [this & args]
  (-> this .-find (.apply this (clj->js args))))

(defn find-index
  "Method.

  The findIndex() method returns an index in the typed array, if
  element in the typed array satisfies the provided testing function.
  -1 is returned.

  `typedarray.findIndex(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex`"
  [this & args]
  (-> this .-findIndex (.apply this (clj->js args))))

(defn for-each
  "Method.

  The forEach() method executes a provided function once per array
  This method has the same algorithm as `Array.prototype.forEach()`.
  is one of the typed array types here.

  `typedarray.forEach(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach`"
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn includes
  "Method.

  The includes() method determines whether a typed array includes
  certain element, returning true or false as appropriate. This
  has the same algorithm as `Array.prototype.includes()`. TypedArray
  one of the typed array types here.

  `typedarray.includes(searchElement[, fromIndex]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes`"
  [this & args]
  (-> this .-includes (.apply this (clj->js args))))

(defn index-of
  "Method.

  The indexOf() method returns the first index at which a given
  can be found in the typed array, or -1 if it is not present.
  method has the same algorithm as `Array.prototype.indexOf()`.
  is one of the typed array types here.

  `typedarray.indexOf(searchElement[, fromIndex = 0])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf`"
  [this & args]
  (-> this .-indexOf (.apply this (clj->js args))))

(defn join
  "Method.

  The join() method joins all elements of an array into a string.
  method has the same algorithm as `Array.prototype.join()`. TypedArray
  one of the typed array types here.

  `typedarray.join([separator = ',']);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join`"
  [this & args]
  (-> this .-join (.apply this (clj->js args))))

(defn keys
  "Method.

  The keys() method returns a new Array Iterator object that contains
  keys for each index in the array.

  `arr.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys`"
  [this ]
  (-> this (.keys)))

(defn last-index-of
  "Method.

  The lastIndexOf() method returns the last index at which a given
  can be found in the typed array, or -1 if it is not present.
  typed array is searched backwards, starting at fromIndex. This
  has the same algorithm as `Array.prototype.lastIndexOf()`. TypedArray
  one of the typed array types here.

  `typedarray.lastIndexOf(searchElement[, fromIndex = typedarray.length])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf`"
  [this & args]
  (-> this .-lastIndexOf (.apply this (clj->js args))))

(defn map
  "Method.

  The map() method creates a new typed array with the results of
  a provided function on every element in this typed array. This
  has the same algorithm as `Array.prototype.map()`. TypedArray
  one of the typed array types here.

  `typedarray.map(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map`"
  [this & args]
  (-> this .-map (.apply this (clj->js args))))

(defn move
  "Method.

  [Non Standard]
  [Obsolute]

  The move() method used to copy the sequence of array elements
  the array to the position starting at target. However, this non-standard
  has been replaced with the standard `TypedArray.prototype.copyWithin()`
  TypedArray is one of the typed array types here.

  `typedarray.move(start, end, target)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/move`"
  [this start end target]
  (-> this (.move start end target)))

(defn reduce
  "Method.

  The reduce() method applies a function against an accumulator
  each value of the typed array (from left-to-right) has to reduce
  to a single value. This method has the same algorithm as `Array.prototype.reduce()`.
  is one of the typed array types here.

  `typedarray.reduce(callback[, initialValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce`"
  [this & args]
  (-> this .-reduce (.apply this (clj->js args))))

(defn reduce-right
  "Method.

  The reduceRight() method applies a function against an accumulator
  each value of the typed array (from right-to-left) has to reduce
  to a single value. This method has the same algorithm as `Array.prototype.reduceRight()`.
  is one of the typed array types here.

  `typedarray.reduceRight(callback[, initialValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight`"
  [this & args]
  (-> this .-reduceRight (.apply this (clj->js args))))

(defn reverse
  "Method.

  The reverse() method reverses a typed array in place. The first
  array element becomes the last and the last becomes the first.
  method has the same algorithm as `Array.prototype.reverse()`.
  is one of the typed array types here.

  `typedarray.reverse();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse`"
  [this ]
  (-> this (.reverse)))

(defn set
  "Method.

  The set() method stores multiple values in the typed array, reading
  values from a specified array.

  `typedarray.set(array[, offset])
  typedarray.set(typedarray[, offset])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set`"
  [this & args]
  (-> this .-set (.apply this (clj->js args))))

(defn slice
  "Method.

  The slice() method returns a shallow copy of a portion of a typed
  into a new typed array object. This method has the same algorithm
  `Array.prototype.slice()`. TypedArray is one of the typed array
  here.

  `typedarray.slice([begin[, end]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice`"
  [this & args]
  (-> this .-slice (.apply this (clj->js args))))

(defn some
  "Method.

  The some() method tests whether some element in the typed array
  the test implemented by the provided function. This method has
  same algorithm as `Array.prototype.some()`. TypedArray is one
  the typed array types here.

  `typedarray.some(callback[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some`"
  [this & args]
  (-> this .-some (.apply this (clj->js args))))

(defn sort
  "Method.

  The sort() method sorts the elements of a typed array numerically
  place and returns the typed array. This method has the same algorithm
  `Array.prototype.sort()`, except that sorts the values numerically
  of as strings. TypedArray is one of the typed array types here.

  `typedarray.sort([compareFunction])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort`"
  [this & args]
  (-> this .-sort (.apply this (clj->js args))))

(defn subarray
  "Method.

  The subarray() method returns a new TypedArray on the same `js.ArrayBuffer`
  and with the same element types as for this TypedArray object.
  begin offset is inclusive and the end offset is exclusive. TypedArray
  one of the typed array types.

  `typedarray.subarray([begin [,end]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray`"
  [this & args]
  (-> this .-subarray (.apply this (clj->js args))))

(defn to-locale-string
  "Method.

  The toLocaleString() method returns a string representing the
  of the typed array. The elements are converted to strings and
  separated by a locale-specific string (such as a comma “,”).
  method has the same algorithm as `Array.prototype.toLocaleString()`
  as the typed array elements are numbers, the same algorithm as
  applies for each element. TypedArray is one of the typed array
  here.

  `typedarray.toLocaleString([locales [, options]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString`"
  [this & args]
  (-> this .-toLocaleString (.apply this (clj->js args))))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  and its elements. This method has the same algorithm as `Array.prototype.toString()`.
  is one of the typed array types here.

  `typedarray.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString`"
  [this ]
  (-> this (.toString)))

(defn values
  "Method.

  The values() method returns a new Array Iterator object that
  the values for each index in the array.

  `arr.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values`"
  [this ]
  (-> this (.values)))

(defn bytes-per-element
  "Property.

  The TypedArray.BYTES_PER_ELEMENT property represents the size
  bytes of each element in an typed array.

  `TypedArray.BYTES_PER_ELEMENT;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT`"
  [this]
  (-> this (.-BYTES_PER_ELEMENT)))

(defn set-bytes-per-element!
  "Property.

  The TypedArray.BYTES_PER_ELEMENT property represents the size
  bytes of each element in an typed array.

  `TypedArray.BYTES_PER_ELEMENT;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT`"
  [this val]
  (aset this "BYTES_PER_ELEMENT" val))

(defn name
  "Property.

  The TypedArray.name property represents a string value of the
  array constructor name.

  `TypedArray.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The TypedArray.name property represents a string value of the
  array constructor name.

  `TypedArray.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name`"
  [this val]
  (aset this "name" val))

(defn prototype
  "Property.

  The TypedArray.prototype property represents the prototype for
  constructors.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The TypedArray.prototype property represents the prototype for
  constructors.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype`"
  [this val]
  (aset this "prototype" val))

(defn buffer
  "Property.

  The buffer accessor property represents the `js.ArrayBuffer`
  by a TypedArray at construction time.

  `typedArray.buffer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer`"
  [this]
  (-> this (.-buffer)))

(defn set-buffer!
  "Property.

  The buffer accessor property represents the `js.ArrayBuffer`
  by a TypedArray at construction time.

  `typedArray.buffer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer`"
  [this val]
  (aset this "buffer" val))

(defn byte-length
  "Property.

  The byteLength accessor property represents the length (in bytes)
  a typed array.

  `typedarray.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength`"
  [this]
  (-> this (.-byteLength)))

(defn set-byte-length!
  "Property.

  The byteLength accessor property represents the length (in bytes)
  a typed array.

  `typedarray.byteLength`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength`"
  [this val]
  (aset this "byteLength" val))

(defn byte-offset
  "Property.

  The byteOffset accessor property represents the offset (in bytes)
  a typed array from the start of its `js.ArrayBuffer`.

  `typedarray.byteOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset`"
  [this]
  (-> this (.-byteOffset)))

(defn set-byte-offset!
  "Property.

  The byteOffset accessor property represents the offset (in bytes)
  a typed array from the start of its `js.ArrayBuffer`.

  `typedarray.byteOffset`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset`"
  [this val]
  (aset this "byteOffset" val))

(defn length
  "Property.

  The length accessor property represents the length (in elements)
  a typed array.

  `typedarray.length`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The length accessor property represents the length (in elements)
  a typed array.

  `typedarray.length`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length`"
  [this val]
  (aset this "length" val))

