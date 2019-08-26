(ns web.files.Blob
  "A Blob object represents a file-like object of immutable, raw
  Blobs represent data that isn't necessarily in a JavaScript-native
  The `web.files.File` interface is based on Blob, inheriting blob
  and expanding it to support files on the user's system."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The Blob() constructor returns a new `web.files.Blob` object. The content of the blob consists of the concatenation of the values given in the parameter array.

  array is an `js.Array` of `js.ArrayBuffer`, `web.typed.ArrayBufferView`, `web.files.Blob`, `web.dom.DOMString` objects, or a mix of any of such objects, that will be put inside the `web.files.Blob`. DOMStrings are encoded as UTF-8.
  options is an optional BlobPropertyBag dictionary which may specify the following two attributes:

  type, with a default value of \\\"\\\", that represents the MIME type of the content of the array that will be put in the blob.
  endings, with a default value of \\\"transparent\\\", that specifies how strings containing the line ending character \\\\n are to be written out. It is one of the two values: \\\"native\\\", meaning that line ending characters are changed to match host OS filesystem convention, or \\\"transparent\\\", meaning that endings are stored in the blob without change.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob`"
  js/Blob)

(defn slice
  "Method.

  The Blob.slice() method is used to create a new `web.files.Blob`
  containing the data in the specified range of bytes of the source

  `var blob = instanceOfBlob.slice([start [, end [, contentType]]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice`"
  [this & args]
  (apply (-> this .-slice) (concat [this] args)))

(defn stream
  "Method.

  The stream() method of the `web.files.Blob` interface transforms
  Blob into a `web.files.ReadableStream` of its data.

  `var stream = blob.stream();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream`"
  [this ]
  (-> this (.stream)))

(defn text
  "Method.



  `blob.text().then(function (text) {
  // do something with the text
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/text`"
  [this & args]
  (apply (-> this .-text) (concat [this] args)))

(defn array-buffer
  "Method.

  The arrayBuffer() method of the `web.files.Blob` interface is
  to read the contents of a Blob as binary data. It returns a promise
  resolves with an `js.ArrayBuffer`.

  `blob.arrayBuffer().then(function (buffer) {
  // do something with buffer
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer`"
  [this & args]
  (apply (-> this .-arrayBuffer) (concat [this] args)))

(defn size
  "Property.

  The Blob.size property returns the size in bytes of the `web.files.Blob`
  a `web.files.File`.

  `var sizeInBytes = blob.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  The Blob.size property returns the size in bytes of the `web.files.Blob`
  a `web.files.File`.

  `var sizeInBytes = blob.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`"
  [this val]
  (aset this "size" val))

(defn type
  "Property.

  The type property of a `web.files.Blob` object provides the MIME
  of the file. It returns an empty string if the type couldn't

  `var mimetype = instanceOfFile.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The type property of a `web.files.Blob` object provides the MIME
  of the file. It returns an empty string if the type couldn't

  `var mimetype = instanceOfFile.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`"
  [this val]
  (aset this "type" val))

