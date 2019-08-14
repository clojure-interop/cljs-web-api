(ns file.FileReader
  "The FileReader object lets web applications asynchronously read
  contents of files (or raw data buffers) stored on the user's
  using `file.File` or `web.Blob` objects to specify the file or
  to read."
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

  The `file.FileReader` interface's readAsArrayBuffer() method
  used to start reading the contents of a specified `web.Blob`
  `file.File`. When the read operation is finished, the `web.readyState`
  DONE, and the loadend is triggered. At that time, the `web.result`
  contains an `web.ArrayBuffer` representing the file's data.

  `instanceOfFileReader.readAsArrayBuffer(blob);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsArrayBuffer`"
  [this blob]
  (-> this (.readAsArrayBuffer blob)))

(defn read-as-binary-string
  "Method.

  The readAsBinaryString method is used to start reading the contents
  the specified `web.Blob` or `file.File`. When the read operation
  finished, the `web.readyState` becomes DONE, and the loadend
  triggered. At that time, the `web.result` attribute contains
  raw binary data from the file.

  `instanceOfFileReader.readAsBinaryString(blob);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString`"
  [this blob]
  (-> this (.readAsBinaryString blob)))

(defn read-as-data-url
  "Method.

  The readAsDataURL method is used to read the contents of the
  `web.Blob` or `file.File`. When the read operation is finished,
  `web.readyState` becomes DONE, and the loadend is triggered.
  that time, the `web.result` attribute contains the data as a
  URL representing the file's data as a base64 encoded string.

  `instanceOfFileReader.readAsDataURL(blob);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL`"
  [this blob]
  (-> this (.readAsDataURL blob)))

(defn read-as-text
  "Method.

  The readAsText() method is used to read the contents of the specified
  or `file.File`. When the read operation is complete, the `web.readyState`
  changed to DONE, the loadend event is triggered, and the `web.result`
  contains the contents of the file as a text string.

  `instanceOfFileReader.readAsText(blob[, encoding]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText`"
  [this & args]
  (apply (-> this .-readAsText) (concat [this] args)))

(defn error
  "Property.

  Returns the error that occurred while reading the file.

  `var error = instanceOfFileReader.error`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  Returns the error that occurred while reading the file.

  `var error = instanceOfFileReader.error`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/error`"
  [this val]
  (aset this "error" val))

(defn onabort
  "Property.

  The FileReader.onabort property contains an event handler executed
  the abort event is fired, i.e. when the process of reading the
  is aborted.

  `reader.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onabort`"
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  The FileReader.onabort property contains an event handler executed
  the abort event is fired, i.e. when the process of reading the
  is aborted.

  `reader.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onload
  "Property.

  The FileReader.onload property contains an event handler executed
  the load event is fired, when content read with readAsArrayBuffer,
  readAsDataURL or readAsText is available.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload`"
  [this]
  (-> this (.onload)))

(defn set-onload!
  "Property.

  The FileReader.onload property contains an event handler executed
  the load event is fired, when content read with readAsArrayBuffer,
  readAsDataURL or readAsText is available.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload`"
  [this val]
  (aset this "onload" val))

(defn ready-state
  "Property.

  The `file.FileReader` readyState property provides the current
  of the reading operation a FileReader is in. A FileReader exists
  one of the following states:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState`"
  [this]
  (-> this (.readyState)))

(defn set-ready-state!
  "Property.

  The `file.FileReader` readyState property provides the current
  of the reading operation a FileReader is in. A FileReader exists
  one of the following states:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState`"
  [this val]
  (aset this "readyState" val))

(defn result
  "Property.

  The `file.FileReader` result property returns the file's contents.
  property is only valid after the read operation is complete,
  the format of the data depends on which of the methods was used
  initiate the read operation.

  `var file = instanceOfFileReader.result`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result`"
  [this]
  (-> this (.result)))

(defn set-result!
  "Property.

  The `file.FileReader` result property returns the file's contents.
  property is only valid after the read operation is complete,
  the format of the data depends on which of the methods was used
  initiate the read operation.

  `var file = instanceOfFileReader.result`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result`"
  [this val]
  (aset this "result" val))

(defn onerror
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onerror`"
  [this val]
  (aset this "onerror" val))

