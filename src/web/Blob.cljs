(ns web.Blob
  "A Blob object represents a file-like object of immutable, raw
  Blobs represent data that isn't necessarily in a JavaScript-native
  The `file.File` interface is based on Blob, inheriting blob functionality
  expanding it to support files on the user's system."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The Blob() constructor returns a new `web.Blob` object. The content of the blob consists of the concatenation of the values given in the parameter array.

  array is an `web.Array` of `web.ArrayBuffer`, `web.ArrayBufferView`, `web.Blob`, `dom.DOMString` objects, or a mix of any of such objects, that will be put inside the `web.Blob`. DOMStrings are encoded as UTF-8.
  options is an optional BlobPropertyBag dictionary which may specify the following two attributes:

  type, with a default value of \\\"\\\", that represents the MIME type of the content of the array that will be put in the blob.
  endings, with a default value of \\\"transparent\\\", that specifies how strings containing the line ending character \\\\n are to be written out. It is one of the two values: \\\"native\\\", meaning that line ending characters are changed to match host OS filesystem convention, or \\\"transparent\\\", meaning that endings are stored in the blob without change.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob`"
  js/Blob)

(defn slice
  "Method.

  The Blob.slice() method is used to create a new `web.Blob` object
  the data in the specified range of bytes of the source `web.Blob`.

  `var blob = instanceOfBlob.slice([start [, end [, contentType]]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice`"
  [this & args]
  (apply (-> this .-slice) (concat [this] args)))

(defn stream
  "Method.

  The stream() method of the `web.Blob` interface transforms a
  into a `web.ReadableStream` of its data.

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

  The arrayBuffer() method of the `web.Blob` interface is used
  read the contents of a Blob as binary data. It returns a promise
  resolves with an `web.ArrayBuffer`.

  `blob.arrayBuffer().then(function (buffer) {
  // do something with buffer
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer`"
  [this & args]
  (apply (-> this .-arrayBuffer) (concat [this] args)))

(defn size
  "Property.

  The Blob.size property returns the size in bytes of the `web.Blob`
  a `file.File`.

  `var sizeInBytes = blob.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`"
  [this]
  (-> this (.size)))

(defn set-size!
  "Property.

  The Blob.size property returns the size in bytes of the `web.Blob`
  a `file.File`.

  `var sizeInBytes = blob.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/size`"
  [this val]
  (aset this "size" val))

(defn type
  "Property.

  The type property of a `web.Blob` object provides the MIME type
  the file. It returns an empty string if the type couldn't determined.

  `var mimetype = instanceOfFile.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type property of a `web.Blob` object provides the MIME type
  the file. It returns an empty string if the type couldn't determined.

  `var mimetype = instanceOfFile.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Blob/type`"
  [this val]
  (aset this "type" val))

