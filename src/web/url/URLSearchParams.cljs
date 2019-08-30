(ns web.url.URLSearchParams
  "The URLSearchParams interface defines utility methods to work
  the query string of a URL."
  (:refer-clojure :exclude [get keys set sort]))

(defn append
  "Method.

  The append() method of the `web.url.URLSearchParams` interface
  a specified key/value pair as a new search parameter.

  `URLSearchParams.append(name, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/append`"
  [this name value]
  (-> this (.append name value)))

(defn delete
  "Method.

  The delete() method of the `web.url.URLSearchParams` interface
  the given search parameter and all its associated values, from
  list of all search parameters.

  `URLSearchParams.delete(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/delete`"
  [this name]
  (-> this (.delete name)))

(defn entries
  "Method.

  The entries() method of the `web.url.URLSearchParams` interface
  an `iterator` allowing iteration through all key/value pairs
  in this object. The key and value of each pair are `web.USVString`

  `searchParams.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  The forEach() method of the `web.url.URLSearchParams` interface
  iteration through all values contained in this object via a callback

  `searchParams.forEach(callback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach`"
  [this callback]
  (-> this (.forEach callback)))

(defn get
  "Method.

  The get() method of the `web.url.URLSearchParams` interface returns
  first value associated to the given search parameter.

  `URLSearchParams.get(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get`"
  [this name]
  (-> this (.get name)))

(defn get-all
  "Method.

  The getAll() method of the `web.url.URLSearchParams` interface
  all the values associated with a given search parameter as an

  `URLSearchParams.getAll(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/getAll`"
  [this name]
  (-> this (.getAll name)))

(defn has
  "Method.

  The has() method of the `web.url.URLSearchParams` interface returns
  `js.Boolean` that indicates whether a parameter with the specified
  exists.

  `var hasName = URLSearchParams.has(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/has`"
  [this name]
  (-> this (.has name)))

(defn keys
  "Method.

  The keys() method of the `web.url.URLSearchParams` interface
  an `iterator` allowing iteration through all keys contained in
  object. The keys are `web.USVString` objects.

  `searchParams.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/keys`"
  [this ]
  (-> this (.keys)))

(defn set
  "Method.

  The set() method of the `web.url.URLSearchParams` interface sets
  value associated with a given search parameter to the given value.
  there were several matching values, this method deletes the others.
  the search parameter doesn't exist, this method creates it.

  `URLSearchParams.set(name, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set`"
  [this name value]
  (-> this (.set name value)))

(defn sort
  "Method.

  The URLSearchParams.sort() method sorts all key/value pairs contained
  this object in place and returns undefined. The sort order is
  to unicode code points of the keys. This method uses a stable
  algorithm (i.e. the relative order between key/value pairs with
  keys will be preserved).

  `searchParams.sort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/sort`"
  [this ]
  (-> this (.sort)))

(defn to-string
  "Method.

  The toString() method of the `web.url.URLSearchParams` interface
  a query string suitable for use in a URL.

  `URLSearchParams.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/toString`"
  [this ]
  (-> this (.toString)))

(defn values
  "Method.

  The values() method of the `URLsearchParams` interface returns
  `iterator` allowing iteration through all values contained in
  object. The values are `web.USVString` objects.

  `searchParams.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/values`"
  [this ]
  (-> this (.values)))

