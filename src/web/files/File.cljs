(ns web.files.File
  "The File interface provides information about files and allows
  in a web page to access their content."
  (:refer-clojure :exclude [name type]))

(def constructor
  "Constructor.

  The File() constructor creates a new `web.files.File` object instance.

  bits
  An `js.Array` of `js.ArrayBuffer`, `web.typed.ArrayBufferView`, `web.files.Blob`, or `web.dom.DOMString` objects — or a mix of any such objects. This is the file content encoded as UTF-8.
  name
  A `web.USVString` representing the file name or the path to the file.
  options Optional
  An options object containing optional attributes for the file. Available options are as follows:

  type: A `web.dom.DOMString` representing the MIME type of the content that will be put into the file. Defaults to a value of \\\"\\\".
  lastModified: A number representing the number of milliseconds between the Unix time epoch and when the file was last modified. Defaults to a value of `Date.now()`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/File`"
  js/File)

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

(defn get-as-binary
  "Method.

  The getAsBinary method allows to access the file's data in raw
  format.

  `var binary = instanceOfFile.getAsBinary();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/getAsBinary`"
  [this ]
  (-> this (.getAsBinary)))

(defn get-as-data-url
  "Method.

  The getAsDataURL provides a `data:` URL that encodes the entire
  of the referenced file.

  `var url = instanceOfFile.getAsDataURL();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/getAsDataURL`"
  [this ]
  (-> this (.getAsDataURL)))

(defn get-as-text
  "Method.

  The getAsText method provides the file's data interpreted as
  using a given encoding.

  `var str = instanceOfFile.getAsText(encoding);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/getAsText`"
  [this encoding]
  (-> this (.getAsText encoding)))

(defn last-modified
  "Property.

  The File.lastModified read-only property provides the last modified
  of the file as the number of milliseconds since the Unix epoch
  1, 1970 at midnight). Files without a known last modified date
  the current date.

  `const time = instanceOfFile.lastModified;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified`"
  [this]
  (-> this (.-lastModified)))

(defn set-last-modified!
  "Property.

  The File.lastModified read-only property provides the last modified
  of the file as the number of milliseconds since the Unix epoch
  1, 1970 at midnight). Files without a known last modified date
  the current date.

  `const time = instanceOfFile.lastModified;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified`"
  [this val]
  (aset this "lastModified" val))

(defn last-modified-date
  "Property.

  The File.lastModifiedDate read-only property returns the last
  date of the file. Files without a known last modified date returns
  current date .

  `var time = instanceOfFile.lastModifiedDate`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/lastModifiedDate`"
  [this]
  (-> this (.-lastModifiedDate)))

(defn name
  "Property.

  Returns the name of the file represented by a `web.files.File`
  For security reasons, the path is excluded from this property.

  `var name = file.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Returns the name of the file represented by a `web.files.File`
  For security reasons, the path is excluded from this property.

  `var name = file.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/name`"
  [this val]
  (aset this "name" val))

(defn webkit-relative-path
  "Property.

  The File.webkitRelativePath is a read-only property that contains
  `web.USVString` which specifies the file's path relative to the
  selected by the user in an `<input>` element with its webkitdirectory
  set.

  `relativePath = File.webkitRelativePath`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/webkitRelativePath`"
  [this]
  (-> this (.-webkitRelativePath)))

(defn size
  "Property.

  Returns the size of a file in bytes.

  `var size = instanceOfFile.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  Returns the size of a file in bytes.

  `var size = instanceOfFile.size`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/size`"
  [this val]
  (aset this "size" val))

(defn type
  "Property.

  Returns the media type (MIME) of the file represented by a `web.files.File`

  `var name = file.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Returns the media type (MIME) of the file represented by a `web.files.File`

  `var name = file.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/type`"
  [this val]
  (aset this "type" val))

(defn file-name
  "Property.

  Returns the name of the file. For security reasons the path is
  from this property.

  `var name = instanceOfFile.fileName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileName`"
  [this]
  (-> this (.-fileName)))

(defn set-file-name!
  "Property.

  Returns the name of the file. For security reasons the path is
  from this property.

  `var name = instanceOfFile.fileName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileName`"
  [this val]
  (aset this "fileName" val))

(defn file-size
  "Property.

  Returns the size of a file in bytes.

  `var size = instanceOfFile.fileSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileSize`"
  [this]
  (-> this (.-fileSize)))

(defn set-file-size!
  "Property.

  Returns the size of a file in bytes.

  `var size = instanceOfFile.fileSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/fileSize`"
  [this val]
  (aset this "fileSize" val))

(defn moz-full-path
  "Property.

  A privileged exension to the `web.files.File` interface, the
  property contains the full pathname of the represented file.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/mozFullPath`"
  [this]
  (-> this (.-mozFullPath)))

(defn set-moz-full-path!
  "Property.

  A privileged exension to the `web.files.File` interface, the
  property contains the full pathname of the represented file.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/File/mozFullPath`"
  [this val]
  (aset this "mozFullPath" val))

