(ns web.files.FileReader
  "The FileReader object lets web applications asynchronously read
  contents of files (or raw data buffers) stored on the user's
  using `web.files.File` or `web.files.Blob` objects to specify
  file or data to read."
  (:refer-clojure :exclude [load]))

(def constructor
  "Constructor.

  The FileReader() constructor creates a new FileReader.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader`"
  js/FileReader)

(defn abort
  "Method.

  The abort method aborts the read operation. Upon return, the
  will be DONE.

  `instanceOfFileReader.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/abort`"
  [this ]
  (-> this (.abort)))

(defn read-as-array-buffer
  "Method.

  The `web.files.FileReader` interface's readAsArrayBuffer() method
  used to start reading the contents of a specified `web.files.Blob`
  `web.files.File`. When the read operation is finished, the `readyState`
  DONE, and the loadend is triggered. At that time, the `result`
  contains an `js.ArrayBuffer` representing the file's data.

  `instanceOfFileReader.readAsArrayBuffer(blob);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsArrayBuffer`"
  [this blob]
  (-> this (.readAsArrayBuffer blob)))

(defn read-as-binary-string
  "Method.

  The readAsBinaryString method is used to start reading the contents
  the specified `web.files.Blob` or `web.files.File`. When the
  operation is finished, the `readyState` becomes DONE, and the
  is triggered. At that time, the `result` attribute contains the
  binary data from the file.

  `instanceOfFileReader.readAsBinaryString(blob);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString`"
  [this blob]
  (-> this (.readAsBinaryString blob)))

(defn read-as-data-url
  "Method.

  The readAsDataURL method is used to read the contents of the
  `web.files.Blob` or `web.files.File`. When the read operation
  finished, the `readyState` becomes DONE, and the loadend is triggered.
  that time, the `result` attribute contains the data as a data:
  representing the file's data as a base64 encoded string.

  `instanceOfFileReader.readAsDataURL(blob);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL`"
  [this blob]
  (-> this (.readAsDataURL blob)))

(defn read-as-text
  "Method.

  The readAsText() method is used to read the contents of the specified
  or `web.files.File`. When the read operation is complete, the
  is changed to DONE, the loadend event is triggered, and the `result`
  contains the contents of the file as a text string.

  `instanceOfFileReader.readAsText(blob[, encoding]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText`"
  [this & args]
  (-> this .-readAsText (.apply this (clj->js args))))

(defn error
  "Property.

  Returns the error that occurred while reading the file.

  `var error = instanceOfFileReader.error`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error`"
  [this]
  (-> this (.-error)))

(defn set-error!
  "Property.

  Returns the error that occurred while reading the file.

  `var error = instanceOfFileReader.error`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error`"
  [this val]
  (aset this "error" val))

(defn ready-state
  "Property.

  The `web.files.FileReader` readyState property provides the current
  of the reading operation a FileReader is in. A FileReader exists
  one of the following states:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState`"
  [this]
  (-> this (.-readyState)))

(defn set-ready-state!
  "Property.

  The `web.files.FileReader` readyState property provides the current
  of the reading operation a FileReader is in. A FileReader exists
  one of the following states:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState`"
  [this val]
  (aset this "readyState" val))

(defn result
  "Property.

  The `web.files.FileReader` result property returns the file's
  This property is only valid after the read operation is complete,
  the format of the data depends on which of the methods was used
  initiate the read operation.

  `var file = instanceOfFileReader.result`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result`"
  [this]
  (-> this (.-result)))

(defn set-result!
  "Property.

  The `web.files.FileReader` result property returns the file's
  This property is only valid after the read operation is complete,
  the format of the data depends on which of the methods was used
  initiate the read operation.

  `var file = instanceOfFileReader.result`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result`"
  [this val]
  (aset this "result" val))

(defn onabort
  "Property.

  The FileReader.onabort property contains an event handler executed
  the abort event is fired, i.e. when the process of reading the
  is aborted.

  `reader.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  The FileReader.onabort property contains an event handler executed
  the abort event is fired, i.e. when the process of reading the
  is aborted.

  `reader.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onerror
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onload
  "Property.

  The FileReader.onload property contains an event handler executed
  the load event is fired, when content read with readAsArrayBuffer,
  readAsDataURL or readAsText is available.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload`"
  [this]
  (-> this (.-onload)))

(defn set-onload!
  "Property.

  The FileReader.onload property contains an event handler executed
  the load event is fired, when content read with readAsArrayBuffer,
  readAsDataURL or readAsText is available.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload`"
  [this val]
  (aset this "onload" val))

(defn onloadstart
  "Property.

  A handler for the loadstart event. This event is triggered each
  the reading is starting."
  [this]
  (-> this (.-onloadstart)))

(defn set-onloadstart!
  "Property.

  A handler for the loadstart event. This event is triggered each
  the reading is starting."
  [this val]
  (aset this "onloadstart" val))

(defn onloadend
  "Property.

  A handler for the loadend event. This event is triggered each
  the reading operation is completed (either in success or failure)."
  [this]
  (-> this (.-onloadend)))

(defn set-onloadend!
  "Property.

  A handler for the loadend event. This event is triggered each
  the reading operation is completed (either in success or failure)."
  [this val]
  (aset this "onloadend" val))

(defn onprogress
  "Property.

  A handler for the progress event. This event is triggered while
  a Blob content."
  [this]
  (-> this (.-onprogress)))

(defn set-onprogress!
  "Property.

  A handler for the progress event. This event is triggered while
  a Blob content."
  [this val]
  (aset this "onprogress" val))

