(ns web.FormData
  "The FormData interface provides a way to easily construct a set
  key/value pairs representing form fields and their values, which
  then be easily sent using the `XMLHttpRequest.send()` method.
  uses the same format a form would use if the encoding type were
  to \\\"multipart/form-data\\\"."
  (:refer-clojure :exclude [get keys set]))

(def constructor
  "Constructor.

  The FormData() constructor creates a new `web.FormData` object.

  form Optional
  An HTML `<form>` element — when specified, the `web.FormData` object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData`"
  js/FormData)

(defn append
  "Method.

  The append() method of the `web.FormData` interface appends a
  value onto an existing key inside a FormData object, or adds
  key if it does not already exist.

  `There are two versions of this method: a two and a three parameter version:



  formData.append(name, value);
  formData.append(name, value, filename);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/append`"
  [this & args]
  (apply (-> this .-append) (concat [this] args)))

(defn delete
  "Method.

  The delete() method of the `web.FormData` interface deletes a
  and its value(s) from a FormData object.

  `formData.delete(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete`"
  [this name]
  (-> this (.delete name)))

(defn entries
  "Method.

  The FormData.entries() method returns an `iterator` allowing
  go through all key/value pairs contained in this object. The
  of each pair is a `web.USVString` object; the value either a
  or a `web.files.Blob`.

  `formData.entries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries`"
  [this ]
  (-> this (.entries)))

(defn get
  "Method.

  The get() method of the `web.FormData` interface returns the
  value associated with a given key from within a FormData object.
  you expect multiple values and want all of them, use the `getAll()`
  instead.

  `formData.get(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/get`"
  [this name]
  (-> this (.get name)))

(defn get-all
  "Method.

  The getAll() method of the `web.FormData` interface returns all
  values associated with a given key from within a FormData object.

  `formData.getAll(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll`"
  [this name]
  (-> this (.getAll name)))

(defn has
  "Method.

  The has() method of the `web.FormData` interface returns a boolean
  whether a FormData object contains a certain key.

  `formData.has(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/has`"
  [this name]
  (-> this (.has name)))

(defn keys
  "Method.

  The FormData.keys() method returns an `iterator` allowing to
  through all keys contained in this object. The keys are `web.USVString`

  `formData.keys();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys`"
  [this ]
  (-> this (.keys)))

(defn set
  "Method.

  The set() method of the `web.FormData` interface sets a new value
  an existing key inside a FormData object, or adds the key/value
  it does not already exist.

  `There are two versions of this method: a two and a three parameter version:



  formData.set(name, value);
  formData.set(name, value, filename);

  Parameters


  name
  The name of the field whose data is contained in value.
  value
  The field's value. In the two parameter version this is a `web.USVString`, or if it is not, it is converted to a string. In the three parameter version this can be a `web.files.Blob`, `web.files.File`, or a `web.USVString`. If none of these are specified the value is converted to a string.
  filename Optional
  The filename reported to the server (a `web.USVString`), when a `web.files.Blob` or `web.files.File` is passed as the second parameter. The default filename for `web.files.Blob` objects is \\\"blob\\\".



  Note: If you specify a `web.files.Blob` as the data to append to the FormData object, the filename that will be reported to the server in the \\\"Content-Disposition\\\" header used to vary from browser to browser.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/set`"
  [this & args]
  (apply (-> this .-set) (concat [this] args)))

(defn values
  "Method.

  The FormData.values() method returns an `iterator` allowing to
  through all values contained in this object. The values are `web.USVString`
  `web.files.Blob` objects.

  `formData.values();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FormData/values`"
  [this ]
  (-> this (.values)))

