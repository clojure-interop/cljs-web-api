(ns js.Array
  "The JavaScript Array object is a global object that is used in
  construction of arrays; which are high-level, list-like objects."
  (:refer-clojure :exclude [concat filter find keys map pop reduce reverse some sort]))

(defn from
  "Method.

  The Array.from() method creates a new, shallow-copied Array instance
  an array-like or iterable object.

  `Array.from(arrayLike[, mapFn[, thisArg]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from`"
  [this & args]
  (-> this .-from (.apply this (clj->js args))))

(defn is-array
  "Method.

  The Array.isArray() method determines whether the passed value
  an `js.Array`.

  `Array.isArray(value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray`"
  [this value]
  (-> this (.isArray value)))

(defn of
  "Method.

  The Array.of() method creates a new Array instance from a variable
  of arguments, regardless of number or type of the arguments.

  `Array.of(element0[, element1[, ...[, elementN]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of`"
  [this & args]
  (-> this .-of (.apply this (clj->js args))))

(defn observe
  "Method.

  The Array.observe() method was used for asynchronously observing
  to Arrays, similar to `Object.observe()` for objects. It provided
  stream of changes in order of occurrence. It's equivalent to
  invoked with the accept type list [\\\"add\\\", \\\"update\\\", \\\"delete\\\",
  However, this API has been deprecated and removed from Browsers.
  can use the more general `js.Proxy` object instead.

  `Array.observe(arr, callback)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe`"
  [this arr callback]
  (-> this (.observe arr callback)))

(defn concat
  "Method.

  The concat() method is used to merge two or more arrays. This
  does not change the existing arrays, but instead returns a new

  `var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat`"
  [this & args]
  (-> this .-concat (.apply this (clj->js args))))

(defn copy-within
  "Method.

  The copyWithin() method shallow copies part of an array to another
  in the same array and returns it without modifying its length.

  `arr.copyWithin(target[, start[, end]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin`"
  [this & args]
  (-> this .-copyWithin (.apply this (clj->js args))))

(defn entries
  "Method.

  The entries() method returns a new Array Iterator object that
  the key/value pairs for each index in the array.

  `array.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries`"
  [this ]
  (-> this (.entries)))

(defn every
  "Method.

  The every() method tests whether all elements in the array pass
  test implemented by the provided function. It returns a Boolean

  `arr.every(callback(element[, index[, array]])[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every`"
  [this & args]
  (-> this .-every (.apply this (clj->js args))))

(defn fill
  "Method.

  The fill() method fills (modifies) all the elements of an array
  a start index (default zero) to an end index (default array length)
  a static value. It returns the modified array.

  `arr.fill(value[, start[, end]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill`"
  [this & args]
  (-> this .-fill (.apply this (clj->js args))))

(defn filter
  "Method.

  The filter() method creates a new array with all elements that
  the test implemented by the provided function.

  `var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`"
  [this & args]
  (-> this .-filter (.apply this (clj->js args))))

(defn find
  "Method.

  The find() method returns the value of the first element in the
  that satisfies the provided testing function. Otherwise `js.undefined`
  returned.

  `arr.find(callback(element[, index[, array]])[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find`"
  [this & args]
  (-> this .-find (.apply this (clj->js args))))

(defn find-index
  "Method.

  The findIndex() method returns the index of the first element
  the array that satisfies the provided testing function. Otherwise,
  returns -1, indicating that no element passed the test.

  `arr.findIndex(callback(element[, index[, array]])[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex`"
  [this & args]
  (-> this .-findIndex (.apply this (clj->js args))))

(defn flat
  "Method.

  The flat() method creates a new array with all sub-array elements
  into it recursively up to the specified depth.

  `var newArray = arr.flat([depth]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat`"
  [this & args]
  (-> this .-flat (.apply this (clj->js args))))

(defn flat-map
  "Method.

  The flatMap() method first maps each element using a mapping
  then flattens the result into a new array. It is identical to
  `map()` followed by a `flat()` of depth 1, but flatMap() is often
  useful, as merging both into one method is slightly more efficient.

  `var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
  // return element for new_array
  }[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap`"
  [this & args]
  (-> this .-flatMap (.apply this (clj->js args))))

(defn for-each
  "Method.

  The forEach() method executes a provided function once for each
  element.

  `arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach`"
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn includes
  "Method.

  The includes() method determines whether an array includes a
  value among its entries, returning true or false as appropriate.

  `arr.includes(valueToFind[, fromIndex])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes`"
  [this & args]
  (-> this .-includes (.apply this (clj->js args))))

(defn index-of
  "Method.

  The indexOf() method returns the first index at which a given
  can be found in the array, or -1 if it is not present.

  `arr.indexOf(searchElement[, fromIndex])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf`"
  [this & args]
  (-> this .-indexOf (.apply this (clj->js args))))

(defn join
  "Method.

  The join() method creates and returns a new string by concatenating
  of the elements in an array (or an array-like object), separated
  commas or a specified separator string. If the array has only
  item, then that item will be returned without using the separator.

  `arr.join([separator])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join`"
  [this & args]
  (-> this .-join (.apply this (clj->js args))))

(defn keys
  "Method.

  The keys() method returns a new Array Iterator object that contains
  keys for each index in the array.

  `arr.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys`"
  [this ]
  (-> this (.keys)))

(defn last-index-of
  "Method.

  The lastIndexOf() method returns the last index at which a given
  can be found in the array, or -1 if it is not present. The array
  searched backwards, starting at fromIndex.

  `arr.lastIndexOf(searchElement[, fromIndex])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf`"
  [this & args]
  (-> this .-lastIndexOf (.apply this (clj->js args))))

(defn map
  "Method.

  The map() method creates a new array with the results of calling
  provided function on every element in the calling array.

  `var new_array = arr.map(function callback(currentValue[, index[, array]]) {
  // Return element for new_array
  }[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map`"
  [this & args]
  (-> this .-map (.apply this (clj->js args))))

(defn pop
  "Method.

  The pop() method removes the last element from an array and returns
  element. This method changes the length of the array.

  `arr.pop()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop`"
  [this ]
  (-> this (.pop)))

(defn push
  "Method.

  The push() method adds one or more elements to the end of an
  and returns the new length of the array.

  `arr.push(element1[, ...[, elementN]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push`"
  [this & args]
  (-> this .-push (.apply this (clj->js args))))

(defn reduce
  "Method.

  The reduce() method executes a reducer function (that you provide)
  each element of the array, resulting in a single output value.

  `arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce`"
  [this & args]
  (-> this .-reduce (.apply this (clj->js args))))

(defn reduce-right
  "Method.

  The reduceRight() method applies a function against an accumulator
  each value of the array (from right-to-left) to reduce it to
  single value.

  `arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight`"
  [this & args]
  (-> this .-reduceRight (.apply this (clj->js args))))

(defn reverse
  "Method.

  The reverse() method reverses an array in place. The first array
  becomes the last, and the last array element becomes the first.

  `a.reverse()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse`"
  [this ]
  (-> this (.reverse)))

(defn shift
  "Method.

  The shift() method removes the first element from an array and
  that removed element. This method changes the length of the array.

  `arr.shift()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift`"
  [this ]
  (-> this (.shift)))

(defn slice
  "Method.

  The slice() method returns a shallow copy of a portion of an
  into a new array object selected from begin to end (end not included)
  begin and end represent the index of items in that array. The
  array will not be modified.

  `arr.slice([begin[, end]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice`"
  [this & args]
  (-> this .-slice (.apply this (clj->js args))))

(defn some
  "Method.

  The some() method tests whether at least one element in the array
  the test implemented by the provided function. It returns a Boolean

  `arr.some(callback(element[, index[, array]])[, thisArg])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some`"
  [this & args]
  (-> this .-some (.apply this (clj->js args))))

(defn sort
  "Method.

  The sort() method sorts the elements of an array in place and
  the sorted array. The default sort order is built upon converting
  elements into strings, then comparing their sequences of UTF-16
  units values.

  `arr.sort([compareFunction])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort`"
  [this & args]
  (-> this .-sort (.apply this (clj->js args))))

(defn splice
  "Method.

  The splice() method changes the contents of an array by removing
  replacing existing elements and/or adding new elements in place.

  `var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice`"
  [this & args]
  (-> this .-splice (.apply this (clj->js args))))

(defn to-locale-string
  "Method.

  The toLocaleString() method returns a string representing the
  of the array. The elements are converted to Strings using their
  methods and these Strings are separated by a locale-specific
  (such as a comma “,”).

  `arr.toLocaleString([locales[, options]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString`"
  [this & args]
  (-> this .-toLocaleString (.apply this (clj->js args))))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the array.

  `arr.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource`"
  [this ]
  (-> this (.toSource)))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  and its elements.

  `arr.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString`"
  [this ]
  (-> this (.toString)))

(defn unshift
  "Method.

  The unshift() method adds one or more elements to the beginning
  an array and returns the new length of the array.

  `arr.unshift(element1[, ...[, elementN]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift`"
  [this & args]
  (-> this .-unshift (.apply this (clj->js args))))

(defn values
  "Method.

  The values() method returns a new Array Iterator object that
  the values for each index in the array.

  `arr.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values`"
  [this ]
  (-> this (.values)))

(defn unobserve
  "Method.

  The Array.unobserve() method was used to remove observers set
  `Array.observe()`, but has been deprecated and removed from Browsers.
  can use the more general `js.Proxy` object instead.

  `Array.unobserve(arr, callback)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unobserve`"
  [this arr callback]
  (-> this (.unobserve arr callback)))

(defn length
  "Property.

  The Array constructor's length property whose value is 1."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The Array constructor's length property whose value is 1."
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  `js.Array` instances inherit from Array.prototype. As with all
  you can change the constructor's prototype object to make changes
  all `js.Array` instances. For example, you can add new methods
  properties to extend all Array objects. This is used for polyfilling,
  example.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  `js.Array` instances inherit from Array.prototype. As with all
  you can change the constructor's prototype object to make changes
  all `js.Array` instances. For example, you can add new methods
  properties to extend all Array objects. This is used for polyfilling,
  example.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype`"
  [this val]
  (aset this "prototype" val))

