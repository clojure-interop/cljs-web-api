(ns web.fetch.Headers
  "The Headers interface of the Fetch API allows you to perform
  actions on HTTP request and response headers. These actions include
  setting, adding to, and removing. A Headers object has an associated
  list, which is initially empty and consists of zero or more name
  value pairs. You can add to this using methods like `append()`
  Examples.) In all methods of this interface, header names are
  by case-insensitive byte sequence."
  (:refer-clojure :exclude [get keys set]))

(defn append
  "Method.

  The append() method of the `web.fetch.Headers` interface appends
  new value onto an existing header inside a Headers object, or
  the header if it does not already exist.

  `myHeaders.append(name, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/append`"
  [this name value]
  (-> this (.append name value)))

(defn delete
  "Method.

  The delete() method of the `web.fetch.Headers` interface deletes
  header from the current Headers object.

  `myHeaders.delete(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete`"
  [this name]
  (-> this (.delete name)))

(defn entries
  "Method.

  The Headers.entries() method returns an `iterator` allowing to
  through all key/value pairs contained in this object. The both
  key and value of each pairs are `web.ByteString` objects.

  `headers.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries`"
  [this ]
  (-> this (.entries)))

(defn for-each
  "Method.

  Executes a provided function once for each array element."
  [this & args]
  (-> this .-forEach (.apply this (clj->js args))))

(defn get
  "Method.

  The get() method of the `web.fetch.Headers` interface returns
  byte string of all the values of a header within a Headers object
  a given name. If the requested header doesn't exist in the Headers
  it returns null.

  `myHeaders.get(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/get`"
  [this name]
  (-> this (.get name)))

(defn has
  "Method.

  The has() method of the `web.fetch.Headers` interface returns
  boolean stating whether a Headers object contains a certain header.

  `myHeaders.has(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/has`"
  [this name]
  (-> this (.has name)))

(defn keys
  "Method.

  The Headers.keys() method returns an `iterator` allowing to go
  all keys contained in this object. The keys are `web.ByteString`

  `headers.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys`"
  [this ]
  (-> this (.keys)))

(defn set
  "Method.

  The set() method of the `web.fetch.Headers` interface sets a
  value for an existing header inside a Headers object, or adds
  header if it does not already exist.

  `myHeaders.set(name, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/set`"
  [this name value]
  (-> this (.set name value)))

(defn values
  "Method.

  The Headers.values() method returns an `iterator` allowing to
  through all values contained in this object. The values are `web.ByteString`

  `headers.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/values`"
  [this ]
  (-> this (.values)))

(defn get-all
  "Method.

  [Experimental]
  [Obsolute]

  The getAll() method of the `web.fetch.Headers` interface used
  return an array of all the values of a header within a Headers
  with a given name; in newer versions of the Fetch spec, it has
  deleted, and `Headers.get()` has been updated to fetch all header
  instead of only the first one.

  `myHeaders.getAll(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/getAll`"
  [this name]
  (-> this (.getAll name)))

