(ns idb.IDBMutableFile
  "The IDBMutableFile interface provides access in read or write
  to a file, dealing with all the necessary locks."
  (:refer-clojure :exclude [name type]))

(defn get-file
  "Method.

  The getFile method allows to retrieve a read-only snapshot of
  handled file in the form of a `file.File` object.

  `var request = instanceOfFileHandle.getFile();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/getFile`"
  [this ]
  (-> this (.getFile)))

(defn open
  "Method.

  The open method returns a `web.LockedFile` object that allows
  safely write in the file.

  `var myFile = instanceOfFileHandle.open(mode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/open`"
  [this mode]
  (-> this (.open mode)))

(defn name
  "Property.

  Provides the name of the file.

  `var name = instanceOfFileHandle.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  Provides the name of the file.

  `var name = instanceOfFileHandle.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/name`"
  [this val]
  (aset this "name" val))

(defn onabort
  "Property.

  Specifies an event listener to receive abort events. These events
  when the associated locked file has been aborted with the `web.LockedFile.abort()`

  `instanceOfFileHandle.onabort = funcRef;

  Where funcRef is a function to be called when the abort event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onabort`"
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  Specifies an event listener to receive abort events. These events
  when the associated locked file has been aborted with the `web.LockedFile.abort()`

  `instanceOfFileHandle.onabort = funcRef;

  Where funcRef is a function to be called when the abort event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBMutableFile/onabort`"
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

