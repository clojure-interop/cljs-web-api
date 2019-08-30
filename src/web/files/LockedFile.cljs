(ns web.files.LockedFile
  "The LockedFile interface provides tools to deal with a given
  with all the necessary locks."
  (:refer-clojure :exclude [flush]))

(defn get-metadata
  "Method.

  [Non Standard]

  The getMetadata method allows to retrieve some metadata about
  locked file.

  `var request = instanceOfLockedFile.getMetadata(param);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/getMetaData`"
  [this param]
  (-> this (.getMetadata param)))

(defn read-as-array-buffer
  "Method.

  [Non Standard]

  The readAsArrayBuffer method is used to read the content of the
  object and provide the result of that reading as an `js.ArrayBuffer`.
  many ways, it performs like the `FileReader.readAsArrayBuffer()`

  `var request = instanceOfLockedFile.readAsArrayBuffer(size);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/readAsArrayBuffer`"
  [this size]
  (-> this (.readAsArrayBuffer size)))

(defn read-as-text
  "Method.

  [Non Standard]

  The readAsText method is used to read the content of the `web.files.LockedFile`
  and provide the result of that reading as a string. In many ways,
  performs like the `FileReader.readAsText()` method.

  `var request = instanceOfLockedFile.readAsText(size[, encoding]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/readAsText`"
  [this & args]
  (-> this .-readAsText (.apply this (clj->js args))))

(defn write
  "Method.

  [Non Standard]

  The write method is used to write some data within the file.

  `var request = instanceOfLockedFile.write(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/write`"
  [this data]
  (-> this (.write data)))

(defn append
  "Method.

  [Non Standard]

  The append method is used to write some data at the end of the

  `var request = instanceOfLockedFile.append(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/append`"
  [this data]
  (-> this (.append data)))

(defn truncate
  "Method.

  [Non Standard]

  The truncate method is used to remove some data within the file.

  `var request = instanceOfLockedFile.truncate(start);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/truncate`"
  [this start]
  (-> this (.truncate start)))

(defn flush
  "Method.

  [Non Standard]

  The flush method is used to ensure any change made to a file
  properly written on disk.

  `var request = instanceOfLockedFile.flush();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/flush`"
  [this ]
  (-> this (.flush)))

(defn abort
  "Method.

  [Non Standard]

  The abort method is used to release the lock on the `web.files.LockedFile`
  making it inactive: its `active` property is set to false and
  ongoing operations are canceled.

  `var request = instanceOfLockedFile.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/abort`"
  [this ]
  (-> this (.abort)))

(defn file-handle
  "Property.

  [Read Only]
  [Non Standard]

  The fileHandle property gives access to the `FileHandle` object
  produced the `web.files.LockedFile` object.

  `var handler = instanceOfLockedFile.fileHandle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/fileHandle`"
  [this]
  (-> this (.-fileHandle)))

(defn mode
  "Property.

  [Read Only]
  [Non Standard]

  The mode property provides the read/write status of the `web.files.LockedFile`

  `var mode = instanceOfLockedFile.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/mode`"
  [this]
  (-> this (.-mode)))

(defn active
  "Property.

  [Read Only]
  [Non Standard]

  The active property allows to know if the `web.files.LockedFile`
  is still usable (true) or not (false). If the object is inactive
  it is impossible to perform any read or write operation with
  Typically, a `web.files.LockedFile` object becomes inactive when
  `LockedFile.abort()` method is called or if an error occurs.

  `var state = instanceOfLockedFile.active`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/active`"
  [this]
  (-> this (.-active)))

(defn location
  "Property.

  [Non Standard]

  The location property is a zero-based index representing the
  of the read/write pointer within the file. Its value indicates
  which bytes within the file any write or read operation will

  `var location = instanceOfLockedFile.location`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/location`"
  [this]
  (-> this (.-location)))

(defn set-location!
  "Property.

  [Non Standard]

  The location property is a zero-based index representing the
  of the read/write pointer within the file. Its value indicates
  which bytes within the file any write or read operation will

  `var location = instanceOfLockedFile.location`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/location`"
  [this val]
  (aset this "location" val))

(defn oncomplete
  "Property.

  [Non Standard]

  Specifies an event listener to receive complete events. These
  occur each time a read or write operation is successful.

  `instanceOfLockedFile.oncomplete = funcRef;

  Where funcRef is a function to be called when the complete event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/oncomplete`"
  [this]
  (-> this (.-oncomplete)))

(defn set-oncomplete!
  "Property.

  [Non Standard]

  Specifies an event listener to receive complete events. These
  occur each time a read or write operation is successful.

  `instanceOfLockedFile.oncomplete = funcRef;

  Where funcRef is a function to be called when the complete event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/oncomplete`"
  [this val]
  (aset this "oncomplete" val))

(defn onabort
  "Property.

  [Non Standard]

  Specifies an event listener to receive abort events. These events
  when the locked file has been aborted with the `LockedFile.abort()`

  `instanceOfLockedFile.onabort = funcRef;

  Where funcRef is a function to be called when the abort event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  [Non Standard]

  Specifies an event listener to receive abort events. These events
  when the locked file has been aborted with the `LockedFile.abort()`

  `instanceOfLockedFile.onabort = funcRef;

  Where funcRef is a function to be called when the abort event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onerror
  "Property.

  [Non Standard]

  Specifies an event listener to receive error events. These events
  when something goes wrong.

  `instanceOfLockedFile.onerror = funcRef;

  Where funcRef is a function to be called when the error event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  [Non Standard]

  Specifies an event listener to receive error events. These events
  when something goes wrong.

  `instanceOfLockedFile.onerror = funcRef;

  Where funcRef is a function to be called when the error event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockedFile/onerror`"
  [this val]
  (aset this "onerror" val))

