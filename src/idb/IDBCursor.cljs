(ns idb.IDBCursor
  "The IDBCursor interface of the IndexedDB API represents a cursor
  traversing or iterating over multiple records in a database."
  (:refer-clojure :exclude [key update]))

(defn advance
  "Method.

  The advance() method of the `idb.IDBCursor` interface sets the
  of times a cursor should move its position forward.

  `cursor.advance(count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/advance`"
  [this count]
  (-> this (.advance count)))

(defn continue
  "Method.

  The continue() method of the `idb.IDBCursor` interface advances
  cursor to the next position along its direction, to the item
  key matches the optional key parameter. If no key is specified,
  cursor advances to the immediate next position, based on its

  `cursor.continue(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continue`"
  [this key]
  (-> this (.continue key)))

(defn continue-primary-key
  "Method.

  The continuePrimaryKey() method of the `idb.IDBCursor` interface
  the cursor to the to the item whose key matches the key parameter
  well as whose primary key matches the primary key parameter.

  `cursor.continuePrimaryKey(key, primaryKey);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continuePrimaryKey`"
  [this key primary-key]
  (-> this (.continuePrimaryKey key primary-key)))

(defn delete
  "Method.

  The delete() method of the `idb.IDBCursor` interface returns
  `idb.IDBRequest` object, and, in a separate thread, deletes the
  at the cursor's position, without changing the cursor's position.
  the record is deleted, the cursor's value is set to null.

  `myIDBCursor.delete();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/delete`"
  [this ]
  (-> this (.delete)))

(defn update
  "Method.

  The update() method of the `idb.IDBCursor` interface returns
  `idb.IDBRequest` object, and, in a separate thread, updates the
  at the current position of the cursor in the object store. If
  cursor points to a record that has just been deleted, a new record
  created.

  `var anIDBRequest = myIDBCursor.update(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/update`"
  [this value]
  (-> this (.update value)))

(defn direction
  "Property.

  A string (defined by the IDBCursorDirection enum) indicating
  direction in which the cursor is traversing the data. Possible
  are:

  `var direction = cursor.direction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/direction`"
  [this]
  (-> this (.direction)))

(defn set-direction!
  "Property.

  A string (defined by the IDBCursorDirection enum) indicating
  direction in which the cursor is traversing the data. Possible
  are:

  `var direction = cursor.direction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/direction`"
  [this val]
  (aset this "direction" val))

(defn key
  "Property.

  A value of any type.

  `var key = cursor.key;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/key`"
  [this]
  (-> this (.key)))

(defn set-key!
  "Property.

  A value of any type.

  `var key = cursor.key;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/key`"
  [this val]
  (aset this "key" val))

(defn primary-key
  "Property.

  A value of any data type.

  `var value = cursor.primaryKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/primaryKey`"
  [this]
  (-> this (.primaryKey)))

(defn set-primary-key!
  "Property.

  A value of any data type.

  `var value = cursor.primaryKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/primaryKey`"
  [this val]
  (aset this "primaryKey" val))

(defn request
  "Property.

  The request read-only property of the `idb.IDBCursor` interface
  the request if the cursor.

  `var request = cursor.request;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/request`"
  [this]
  (-> this (.request)))

(defn set-request!
  "Property.

  The request read-only property of the `idb.IDBCursor` interface
  the request if the cursor.

  `var request = cursor.request;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/request`"
  [this val]
  (aset this "request" val))

(defn source
  "Property.

  The `idb.IDBObjectStore` or `idb.IDBIndex` that the cursor is
  over.

  `var source = cursor.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/source`"
  [this]
  (-> this (.source)))

(defn set-source!
  "Property.

  The `idb.IDBObjectStore` or `idb.IDBIndex` that the cursor is
  over.

  `var source = cursor.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/source`"
  [this val]
  (aset this "source" val))

