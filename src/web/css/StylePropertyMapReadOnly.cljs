(ns web.css.StylePropertyMapReadOnly
  "The StylePropertyMapReadOnly interface of the the CSS Typed Object
  API provides a read-only representation of a CSS declaration
  that is an alternative to `web.cssdom.CSSStyleDeclaration`. Retrieve
  instance of this interface using `Element.computedStyleMap()`."
  (:refer-clojure :exclude [get keys]))

(defn entries
  "Method.

  The StylePropertyMapReadOnly.entries() method returns an array
  a given object's own enumerable property [key, value] pairs,
  the same order as that provided by a `for...in` loop (the difference
  that a for-in loop enumerates properties in the prototype chain
  well).

  `StylePropertyMapReadOnly.entries()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The StylePropertyMapReadOnly.forEach() method executes a provided
  once for each element of `web.css.StylePropertyMapReadOnly`.

  `StylePropertyMapReadOnly.forEach(function callback(currentValue[, index[, array]]) {
  //your code
  }[, thisArg]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/forEach`"
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn get
  "Method.

  The get() method of the `web.css.StylePropertyMapReadOnly` interface
  a `web.css.CSSStyleValue` object for the first value of the specified

  `var declarationBlock = StylePropertyMapReadOnly.get(property)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/get`"
  [this property]
  (-> this (.get property)))

(defn get-all
  "Method.

  The getAll() method of the `web.css.StylePropertyMapReadOnly`
  returns an array of `web.css.CSSStyleValue` objects containing
  values for the provided property.

  `var cssStyleValues[] = StylePropertyMapReadOnly.getAll(property)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/getAll`"
  [this property]
  (-> this (.getAll property)))

(defn has
  "Method.

  The has() method of the `web.css.StylePropertyMapReadOnly` interface
  whether the specified property is in the StylePropertyMapReadOnly

  `var boolean = StylePropertyMapReadOnly.has(property)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/has`"
  [this property]
  (-> this (.has property)))

(defn keys
  "Method.

  The StylePropertyMapReadOnly.keys() method returns a new Array
  containing the keys for each item in StylePropertyMapReadOnly

  `StylePropertyMapReadOnly.keys()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/keys`"
  [this ]
  (-> this (.keys)))

(defn values
  "Method.

  The StylePropertyMapReadOnly.values() method returns a new Array
  containing the values for each index in the StylePropertyMapReadOnly

  `StylePropertyMapReadOnly.values()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/values`"
  [this ]
  (-> this (.values)))

(defn size
  "Property.

  The size read-only property of the `web.css.StylePropertyMapReadOnly`
  returns an unsinged long integer containing the size of the StylePropertyMapReadOnly

  `var size = StylePropertyMapReadOnly.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  The size read-only property of the `web.css.StylePropertyMapReadOnly`
  returns an unsinged long integer containing the size of the StylePropertyMapReadOnly

  `var size = StylePropertyMapReadOnly.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size`"
  [this val]
  (aset this "size" val))

