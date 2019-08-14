(ns web.DataTransferItem
  "The DataTransferItem object represents one drag data item. During
  drag operation, each `web.drag event` has a `web.dataTransfer`
  which contains a `web.list` of drag data items. Each item in
  list is a DataTransferItem object."
  (:refer-clojure :exclude [type]))

(defn get-as-file
  "Method.

  If the item is a file, the DataTransferItem.getAsFile() method
  the drag data item's `file.File` object. If the item is not a
  this method returns null.

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

  If the item described by the `web.DataTransferItem` is a file,
  returns a `file.FileSystemFileEntry` or `file.FileSystemDirectoryEntry`
  it. If the item isn't a file, null is returned.

  `DataTransferItem.webkitGetAsEntry();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry`"
  [this ]
  (-> this (.webkitGetAsEntry)))

(defn kind
  "Property.

  The read-only DataTransferItem.kind property returns a `web.DataTransferItem`
  the drag data item kind: some text or some file.

  `var itemKind = DataTransferItem.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind`"
  [this]
  (-> this (.kind)))

(defn set-kind!
  "Property.

  The read-only DataTransferItem.kind property returns a `web.DataTransferItem`
  the drag data item kind: some text or some file.

  `var itemKind = DataTransferItem.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind`"
  [this val]
  (aset this "kind" val))

(defn type
  "Property.

  The read-only DataTransferItem.type property returns the type
  of the `web.DataTransferItem` object representing the drag data
  The type is a Unicode string generally given by a MIME type,
  a MIME type is not required.

  `dataItem.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The read-only DataTransferItem.type property returns the type
  of the `web.DataTransferItem` object representing the drag data
  The type is a Unicode string generally given by a MIME type,
  a MIME type is not required.

  `dataItem.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/type`"
  [this val]
  (aset this "type" val))

