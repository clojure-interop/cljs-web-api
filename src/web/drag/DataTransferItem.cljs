(ns web.drag.DataTransferItem
  "The DataTransferItem object represents one drag data item. During
  drag operation, each `drag event` has a `dataTransfer` property
  contains a `list` of drag data items. Each item in the list is
  DataTransferItem object."
  (:refer-clojure :exclude [type]))

(defn get-as-file
  "Method.

  If the item is a file, the DataTransferItem.getAsFile() method
  the drag data item's `web.files.File` object. If the item is
  a file, this method returns null.

  `File = DataTransferItem.getAsFile();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsFile`"
  [this ]
  (-> this (.getAsFile)))

(defn get-as-string
  "Method.

  The DataTransferItem.getAsString() method invokes the given callback
  the drag data item's string data as the argument if the item's
  is a Plain unicode string (i.e. kind is string).

  `dataTransferItem.getAsString(callback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/getAsString`"
  [this callback]
  (-> this (.getAsString callback)))

(defn webkit-get-as-entry
  "Method.

  If the item described by the `web.drag.DataTransferItem` is a
  webkitGetAsEntry() returns a `web.files.FileSystemFileEntry`
  `web.files.FileSystemDirectoryEntry` representing it. If the
  isn't a file, null is returned.

  `DataTransferItem.webkitGetAsEntry();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry`"
  [this ]
  (-> this (.webkitGetAsEntry)))

(defn kind
  "Property.

  The read-only DataTransferItem.kind property returns a `web.drag.DataTransferItem`
  the drag data item kind: some text or some file.

  `var itemKind = DataTransferItem.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind`"
  [this]
  (-> this (.-kind)))

(defn set-kind!
  "Property.

  The read-only DataTransferItem.kind property returns a `web.drag.DataTransferItem`
  the drag data item kind: some text or some file.

  `var itemKind = DataTransferItem.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind`"
  [this val]
  (aset this "kind" val))

(defn type
  "Property.

  The read-only DataTransferItem.type property returns the type
  of the `web.drag.DataTransferItem` object representing the drag
  item. The type is a Unicode string generally given by a MIME
  although a MIME type is not required.

  `dataItem.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The read-only DataTransferItem.type property returns the type
  of the `web.drag.DataTransferItem` object representing the drag
  item. The type is a Unicode string generally given by a MIME
  although a MIME type is not required.

  `dataItem.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/type`"
  [this val]
  (aset this "type" val))

