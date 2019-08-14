(ns web.DataTransferItemList
  "The DataTransferItemList object is a list of `web.DataTransferItem`
  representing items being dragged. During a drag operation, each
  has a `web.dataTransfer` property and that property is a DataTransferItemList."
  (:refer-clojure :exclude [remove]))

(defn add
  "Method.

  The DataTransferItemList.add() method creates a new `web.DataTransferItem`
  the specified data and adds it to the drag data list. The item
  be a `file.File` or a `web.string` of a given type. If the item
  successfully added to the list, the newly-created `web.DataTransferItem`
  is returned.

  `DataTransferItem = DataTransferItemList.add(data, type);
  DataTransferItem = DataTransferItemList.add(file);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/add`"
  [this & args]
  (apply (-> this .-add) (concat [this] args)))

(defn clear
  "Method.

  The `web.DataTransferItemList` method clear() removes all `web.DataTransferItem`
  from the drag data items list, leaving the list empty.

  `DataTransferItemList.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/clear`"
  [this ]
  (-> this (.clear)))

(defn data-transfer-item
  "Method.

  The DataTransferItem() getter method implements support for accessing
  in the `web.DataTransferItemList` using array-style syntax (that
  DataTransferItem[index]).

  `dataItem = DataTransferItem[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/DataTransferItem`"
  [this ]
  (-> this (.DataTransferItem)))

(defn remove
  "Method.

  `web.undefined`.

  `DataTransferItemList.remove(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/remove`"
  [this index]
  (-> this (.remove index)))

(defn length
  "Property.

  The read-only length property of the `web.DataTransferItemList`
  returns the number of items currently in the drag item list.

  `length = DataTransferItemList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/length`"
  [this]
  (-> this (.length)))

