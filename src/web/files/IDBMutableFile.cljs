(ns web.files.IDBMutableFile
  "The IDBMutableFile interface provides access in read or write
  to a file, dealing with all the necessary locks."
  (:refer-clojure :exclude [name type]))

(defn open
  "Method.

  Returns a LockedFile object to read or write the associated file"
  [this & args]
  (apply (-> this .-open) (concat [this] args)))

(defn get-file
  "Method.

  The getFile method allows to retrieve a read-only snapshot of
  handled file in the form of a `web.files.File` object.

  `var request = instanceOfFileHandle.getFile();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/getFile`"
  [this ]
  (-> this (.getFile)))

(defn name
  "Property.

  The name of the handled file."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name of the handled file."
  [this val]
  (aset this "name" val))

(defn onabort
  "Property.

  The abort event is triggered each time the handled file is aborted."
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  The abort event is triggered each time the handled file is aborted."
  [this val]
  (aset this "onabort" val))

(defn onerror
  "Property.

  Specifies an event listener to receive error events. These events
  when something goes wrong.

  `instanceOfFileHandle.onerror = funcRef;

  Where funcRef is a function to be called when the error event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  Specifies an event listener to receive error events. These events
  when something goes wrong.

  `instanceOfFileHandle.onerror = funcRef;

  Where funcRef is a function to be called when the error event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onerror`"
  [this val]
  (aset this "onerror" val))

(defn type
  "Property.

  Provides the mime type of the file.

  `var type = instanceOfFileHandle.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  Provides the mime type of the file.

  `var type = instanceOfFileHandle.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/type`"
  [this val]
  (aset this "type" val))

