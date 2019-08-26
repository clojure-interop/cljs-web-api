(ns web.drag.DataTransfer
  "The DataTransfer object is used to hold the data that is being
  during a drag and drop operation. It may hold one or more data
  each of one or more data types. For more information about drag
  drop, see HTML Drag and Drop API."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DataTransfer constructor creates a new `web.drag.DataTransfer` object instance.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/DataTransfer`"
  js/DataTransfer)

(defn clear-data
  "Method.

  The DataTransfer.clearData() method removes the drag operation's
  data` for the given type. If data for the given type does not
  this method does nothing.

  `DataTransfer.clearData([format]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/clearData`"
  [this & args]
  (apply (-> this .-clearData) (concat [this] args)))

(defn add-element
  "Method.

  The DataTransfer.addElement() method sets the drag source to
  given element. This element will be the element to which drag
  dragend events are fired, and not the defaut target (the node
  was dragged).

  `void dataTransfer.addElement(el);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/addElement`"
  [this el]
  (-> this (.addElement el)))

(defn get-data
  "Method.

  The DataTransfer.getData() method retrieves drag data (as a `web.dom.DOMString`)
  the specified type. If the drag operation does not include data,
  method returns an empty string.

  `dataTransfer.getData(format);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData`"
  [this format]
  (-> this (.getData format)))

(defn moz-clear-data-at
  "Method.

  The DataTransfer.mozClearDataAt() method removes the data associated
  the given format for an item at the specified index. The index
  be in the range from zero to the number of items minus one.

  `void dataTransfer.mozClearDataAt([type], index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozClearDataAt`"
  [this & args]
  (apply (-> this .-mozClearDataAt) (concat [this] args)))

(defn moz-get-data-at
  "Method.

  The DataTransfer.mozGetDataAt() method is used to retrieve an
  in the drag event's `data transfer` object, based on a given
  and index. This method returns null if the specified item does
  exist or if the index is not in the range from zero to the number
  items minus one.

  `nsIVariant dataTransfer.mozGetDataAt([type], index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozGetDataAt`"
  [this & args]
  (apply (-> this .-mozGetDataAt) (concat [this] args)))

(defn moz-set-data-at
  "Method.

  The DataTransfer.mozSetDataAt() method is used to add data to
  specific index in the drag event's `data transfer` object.

  `void dataTransfer.mozSetDataAt([type], data, index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozSetDataAt`"
  [this & args]
  (apply (-> this .-mozSetDataAt) (concat [this] args)))

(defn moz-types-at
  "Method.

  The DataTransfer.mozTypesAt() method returns a list of the format
  that are stored for an item at the specified index. If the index
  not in the range from 0 to the number of items minus one, an
  string list is returned.

  `nsIVariant dataTransfer.mozTypesAt(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozTypesAt`"
  [this index]
  (-> this (.mozTypesAt index)))

(defn set-data
  "Method.

  The DataTransfer.setData() method sets the drag operation's `drag
  to the specified data and type. If data for the given type does
  exist, it is added at the end of the drag data store, such that
  last item in the `types` list will be the new type. If data for
  given type already exists, the existing data is replaced in the
  position. That is, the order of the `types` list is not changed
  replacing data of the same type.

  `void dataTransfer.setData(format, data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData`"
  [this format data]
  (-> this (.setData format data)))

(defn set-drag-image
  "Method.

  When a drag occurs, a translucent image is generated from the
  target (the element the dragstart event is fired at), and follows
  mouse pointer during the drag. This image is created automatically,
  you do not need to create it yourself. However, if a custom image
  desired, the DataTransfer.setDragImage() method can be used to
  the custom image to be used. The image will typically be an `<image>`
  but it can also be a `<canvas>` or any other image element.

  `void dataTransfer.setDragImage(img, xOffset, yOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage`"
  [this img x-offset y-offset]
  (-> this (.setDragImage img x-offset y-offset)))

(defn drop-effect
  "Property.

  The DataTransfer.dropEffect property controls the feedback (typically
  the user is given during a drag and drop operation. It will affect
  cursor is displayed while dragging. For example, when the user
  over a target drop element, the browser's cursor may indicate
  type of operation will occur.

  `dataTransfer.dropEffect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect`"
  [this]
  (-> this (.dropEffect)))

(defn set-drop-effect!
  "Property.

  The DataTransfer.dropEffect property controls the feedback (typically
  the user is given during a drag and drop operation. It will affect
  cursor is displayed while dragging. For example, when the user
  over a target drop element, the browser's cursor may indicate
  type of operation will occur.

  `dataTransfer.dropEffect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect`"
  [this val]
  (aset this "dropEffect" val))

(defn moz-cursor
  "Property.

  The DataTransfer.mozCursor property returns or sets the drag
  state. This is primarily used to control the cursor during tab

  `dataTransfer.mozCursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozCursor`"
  [this]
  (-> this (.mozCursor)))

(defn set-moz-cursor!
  "Property.

  The DataTransfer.mozCursor property returns or sets the drag
  state. This is primarily used to control the cursor during tab

  `dataTransfer.mozCursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozCursor`"
  [this val]
  (aset this "mozCursor" val))

(defn effect-allowed
  "Property.

  The DataTransfer.effectAllowed property specifies the effect
  is allowed for a drag operation. The copy operation is used to
  that the data being dragged will be copied from its present location
  the drop location. The move operation is used to indicate that
  data being dragged will be moved, and the link operation is used
  indicate that some form of relationship or connection will be
  between the source and drop locations.

  `dataTransfer.effectAllowed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed`"
  [this]
  (-> this (.effectAllowed)))

(defn set-effect-allowed!
  "Property.

  The DataTransfer.effectAllowed property specifies the effect
  is allowed for a drag operation. The copy operation is used to
  that the data being dragged will be copied from its present location
  the drop location. The move operation is used to indicate that
  data being dragged will be moved, and the link operation is used
  indicate that some form of relationship or connection will be
  between the source and drop locations.

  `dataTransfer.effectAllowed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed`"
  [this val]
  (aset this "effectAllowed" val))

(defn files
  "Property.

  The DataTransfer.files property is a `list of the files` in the
  operation. If the operation includes no files, the list is empty.

  `dataTransfer.files;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files`"
  [this]
  (-> this (.files)))

(defn set-files!
  "Property.

  The DataTransfer.files property is a `list of the files` in the
  operation. If the operation includes no files, the list is empty.

  `dataTransfer.files;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files`"
  [this val]
  (aset this "files" val))

(defn items
  "Property.

  The read-only `web.drag.DataTransfer` property items property
  a `list` of the `data transfer items` in a drag operation. The
  includes one item for each item in the operation and if the operation
  no items, the list is empty.

  `itemList = dataTransfer.items;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items`"
  [this]
  (-> this (.items)))

(defn set-items!
  "Property.

  The read-only `web.drag.DataTransfer` property items property
  a `list` of the `data transfer items` in a drag operation. The
  includes one item for each item in the operation and if the operation
  no items, the list is empty.

  `itemList = dataTransfer.items;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items`"
  [this val]
  (aset this "items" val))

(defn moz-item-count
  "Property.

  The DataTransfer.mozItemCount property returns the number of
  being dragged. This can be used, for example, to get the number
  files being dragged.

  `dataTransfer.mozItemCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozItemCount`"
  [this]
  (-> this (.mozItemCount)))

(defn set-moz-item-count!
  "Property.

  The DataTransfer.mozItemCount property returns the number of
  being dragged. This can be used, for example, to get the number
  files being dragged.

  `dataTransfer.mozItemCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozItemCount`"
  [this val]
  (aset this "mozItemCount" val))

(defn moz-source-node
  "Property.

  The DataTransfer.mozSourceNode property is used to determine
  `web.Node` over which the mouse cursor was located when the the
  operation was initiated (for example, when a `<button>` was clicked).
  external drags or if the calling function cannot reach the node,
  is returned.

  `dataTransfer.mozSourceNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozSourceNode`"
  [this]
  (-> this (.mozSourceNode)))

(defn set-moz-source-node!
  "Property.

  The DataTransfer.mozSourceNode property is used to determine
  `web.Node` over which the mouse cursor was located when the the
  operation was initiated (for example, when a `<button>` was clicked).
  external drags or if the calling function cannot reach the node,
  is returned.

  `dataTransfer.mozSourceNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozSourceNode`"
  [this val]
  (aset this "mozSourceNode" val))

(defn moz-user-cancelled
  "Property.

  The DataTransfer.mozUserCancelled property is used in the dragend
  handler to determine if the user canceled the drag or not. If
  user canceled the event, the property returns true and returns
  otherwise. This property only applies to the dragend event.

  `dataTransfer.mozUserCancelled;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozUserCancelled`"
  [this]
  (-> this (.mozUserCancelled)))

(defn set-moz-user-cancelled!
  "Property.

  The DataTransfer.mozUserCancelled property is used in the dragend
  handler to determine if the user canceled the drag or not. If
  user canceled the event, the property returns true and returns
  otherwise. This property only applies to the dragend event.

  `dataTransfer.mozUserCancelled;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/mozUserCancelled`"
  [this val]
  (aset this "mozUserCancelled" val))

(defn types
  "Property.

  The DataTransfer.types read-only property returns an array of
  drag data formats (as `strings`) that were set in the dragstart
  The order of the formats is the same order as the data included
  the drag operation.

  `dataTransfer.types;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types`"
  [this]
  (-> this (.types)))

(defn set-types!
  "Property.

  The DataTransfer.types read-only property returns an array of
  drag data formats (as `strings`) that were set in the dragstart
  The order of the formats is the same order as the data included
  the drag operation.

  `dataTransfer.types;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types`"
  [this val]
  (aset this "types" val))

