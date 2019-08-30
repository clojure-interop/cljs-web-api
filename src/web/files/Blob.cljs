(ns web.files.Blob
  "A Blob object represents a file-like object of immutable, raw
  Blobs represent data that isn't necessarily in a JavaScript-native
  The `web.files.File` interface is based on Blob, inheriting blob
  and expanding it to support files on the user's system."
  (:refer-clojure :exclude [type]))

(defn slice
  "Method.

  The Blob.slice() method is used to create a new `web.files.Blob`
  containing the data in the specified range of bytes of the source

  `var blob = instanceOfBlob.slice([start [, end [, contentType]]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice`"
  [this & args]
  (-> this .-slice (.apply this (clj->js args))))

(defn stream
  "Method.

  [Experimental]

  The stream() method of the `web.files.Blob` interface transforms
  Blob into a `web.files.ReadableStream` of its data.

  `var stream = blob.stream();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream`"
  [this ]
  (-> this (.stream)))

(defn text
  "Method.

  [Experimental]

  `blob.text().then(function (text) {
  // do something with the text
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/text`"
  [this & args]
  (-> this .-text (.apply this (clj->js args))))

(defn array-buffer
  "Method.

  [Experimental]

  The arrayBuffer() method of the `web.files.Blob` interface is
  to read the contents of a Blob as binary data. It returns a promise
  resolves with an `js.ArrayBuffer`.

  `blob.arrayBuffer().then(function (buffer) {
  // do something with buffer
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer`"
  [this & args]
  (-> this .-arrayBuffer (.apply this (clj->js args))))

(defn size
  "Property.

  [Read Only]

  The Blob.size property returns the size in bytes of the `web.files.Blob`
  a `web.files.File`.

  `var sizeInBytes = blob.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`"
  [this]
  (-> this (.-size)))

(defn type
  "Property.

  [Read Only]

  The type property of a `web.files.Blob` object provides the MIME
  of the file. It returns an empty string if the type couldn't

  `var mimetype = instanceOfFile.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`"
  [this]
  (-> this (.-type)))

