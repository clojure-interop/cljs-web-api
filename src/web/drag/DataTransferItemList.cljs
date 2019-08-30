(ns web.drag.DataTransferItemList
  "The DataTransferItemList object is a list of `web.drag.DataTransferItem`
  representing items being dragged. During a drag operation, each
  has a `dataTransfer` property and that property is a DataTransferItemList."
  (:refer-clojure :exclude [remove]))

(defn add
  "Method.

  The DataTransferItemList.add() method creates a new `web.drag.DataTransferItem`
  the specified data and adds it to the drag data list. The item
  be a `web.files.File` or a `string` of a given type. If the item
  successfully added to the list, the newly-created `web.drag.DataTransferItem`
  is returned.

  `DataTransferItem = DataTransferItemList.add(data, type);
  DataTransferItem = DataTransferItemList.add(file);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/add`"
  [this & args]
  (-> this .-add (.apply this (clj->js args))))

(defn remove
  "Method.

  `js.undefined`.

  `DataTransferItemList.remove(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/remove`"
  [this index]
  (-> this (.remove index)))

(defn clear
  "Method.

  The `web.drag.DataTransferItemList` method clear() removes all
  objects from the drag data items list, leaving the list empty.

  `DataTransferItemList.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/clear`"
  [this ]
  (-> this (.clear)))

(defn data-transfer-item
  "Method.

  The DataTransferItem() getter method implements support for accessing
  in the `web.drag.DataTransferItemList` using array-style syntax
  is DataTransferItem[index]).

  `dataItem = DataTransferItem[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/DataTransferItem`"
  [this ]
  (-> this (.DataTransferItem)))

(defn length
  "Property.

  [Read Only]

  The read-only length property of the `web.drag.DataTransferItemList`
  returns the number of items currently in the drag item list.

  `length = DataTransferItemList.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/length`"
  [this]
  (-> this (.-length)))

