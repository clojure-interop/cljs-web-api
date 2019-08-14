(ns web.Headers
  "The Headers interface of the Fetch API allows you to perform
  actions on HTTP request and response headers. These actions include
  setting, adding to, and removing. A Headers object has an associated
  list, which is initially empty and consists of zero or more name
  value pairs. You can add to this using methods like `web.append()`
  Examples.) In all methods of this interface, header names are
  by case-insensitive byte sequence."
  (:refer-clojure :exclude [get keys set]))

(def constructor
  "Constructor.

  The Headers() constructor creates a new `web.Headers` object.

  init Optional
  An object containing any HTTP headers that you want to pre-populate your Headers object with. This can be a simple object literal with `web.ByteString` values; or an existing Headers object. In the last case, the new Headers object inherits its data from the existing Headers object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers`"
  js/Headers)

(defn append
  "Method.

  The append() method of the `web.Headers` interface appends a
  value onto an existing header inside a Headers object, or adds
  header if it does not already exist.

  `myHeaders.append(name, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/append`"
  [this name value]
  (-> this (.append name value)))

(defn delete
  "Method.

  The delete() method of the `web.Headers` interface deletes a
  from the current Headers object.

  `myHeaders.delete(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete`"
  [this name]
  (-> this (.delete name)))

(defn entries
  "Method.

  The Headers.entries() method returns an `web.iterator` allowing
  go through all key/value pairs contained in this object. The
  the key and value of each pairs are `web.ByteString` objects.

  `headers.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries`"
  [this ]
  (-> this (.entries)))

(defn get
  "Method.

  The get() method of the `web.Headers` interface returns a byte
  of all the values of a header within a Headers object with a
  name. If the requested header doesn't exist in the Headers object,
  returns null.

  `myHeaders.get(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/get`"
  [this name]
  (-> this (.get name)))

(defn get-all
  "Method.

  The getAll() method of the `web.Headers` interface used to return
  array of all the values of a header within a Headers object with
  given name; in newer versions of the Fetch spec, it has been
  and `web.Headers.get()` has been updated to fetch all header
  instead of only the first one.

  `myHeaders.getAll(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/getAll`"
  [this name]
  (-> this (.getAll name)))

(defn has
  "Method.

  The has() method of the `web.Headers` interface returns a boolean
  whether a Headers object contains a certain header.

  `myHeaders.has(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/has`"
  [this name]
  (-> this (.has name)))

(defn keys
  "Method.

  The Headers.keys() method returns an `web.iterator` allowing
  go through all keys contained in this object. The keys are `web.ByteString`

  `headers.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys`"
  [this ]
  (-> this (.keys)))

(defn set
  "Method.

  The set() method of the `web.Headers` interface sets a new value
  an existing header inside a Headers object, or adds the header
  it does not already exist.

  `myHeaders.set(name, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/set`"
  [this name value]
  (-> this (.set name value)))

(defn values
  "Method.

  The Headers.values() method returns an `web.iterator` allowing
  go through all values contained in this object. The values are
  objects.

  `headers.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/values`"
  [this ]
  (-> this (.values)))

