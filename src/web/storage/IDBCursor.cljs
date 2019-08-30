(ns web.storage.IDBCursor
  "The IDBCursor interface of the IndexedDB API represents a cursor
  traversing or iterating over multiple records in a database."
  (:refer-clojure :exclude [key update]))

(defn advance
  "Method.

  The advance() method of the `web.storage.IDBCursor` interface
  the number of times a cursor should move its position forward.

  `cursor.advance(count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/advance`"
  [this count]
  (-> this (.advance count)))

(defn continue
  "Method.

  The continue() method of the `web.storage.IDBCursor` interface
  the cursor to the next position along its direction, to the item
  key matches the optional key parameter. If no key is specified,
  cursor advances to the immediate next position, based on its

  `cursor.continue(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continue`"
  [this key]
  (-> this (.continue key)))

(defn continue-primary-key
  "Method.

  The continuePrimaryKey() method of the `web.storage.IDBCursor`
  advances the cursor to the to the item whose key matches the
  parameter as well as whose primary key matches the primary key

  `cursor.continuePrimaryKey(key, primaryKey);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continuePrimaryKey`"
  [this key primary-key]
  (-> this (.continuePrimaryKey key primary-key)))

(defn delete
  "Method.

  The delete() method of the `web.storage.IDBCursor` interface
  an `web.storage.IDBRequest` object, and, in a separate thread,
  the record at the cursor's position, without changing the cursor's
  Once the record is deleted, the cursor's value is set to null.

  `myIDBCursor.delete();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/delete`"
  [this ]
  (-> this (.delete)))

(defn update
  "Method.

  The update() method of the `web.storage.IDBCursor` interface
  an `web.storage.IDBRequest` object, and, in a separate thread,
  the value at the current position of the cursor in the object
  If the cursor points to a record that has just been deleted,
  new record is created.

  `var anIDBRequest = myIDBCursor.update(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/update`"
  [this value]
  (-> this (.update value)))

(defn source
  "Property.

  [Read Only]

  The `web.idb.IDBObjectStore` or `web.storage.IDBIndex` that the
  is iterating over.

  `var source = cursor.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/source`"
  [this]
  (-> this (.-source)))

(defn direction
  "Property.

  [Read Only]

  A string (defined by the IDBCursorDirection enum) indicating
  direction in which the cursor is traversing the data. Possible
  are:

  `var direction = cursor.direction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/direction`"
  [this]
  (-> this (.-direction)))

(defn key
  "Property.

  [Read Only]

  A value of any type.

  `var key = cursor.key;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/key`"
  [this]
  (-> this (.-key)))

(defn primary-key
  "Property.

  [Read Only]

  A value of any data type.

  `var value = cursor.primaryKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/primaryKey`"
  [this]
  (-> this (.-primaryKey)))

(defn request
  "Property.

  [Read Only]

  The request read-only property of the `web.storage.IDBCursor`
  returns the request if the cursor.

  `var request = cursor.request;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/request`"
  [this]
  (-> this (.-request)))

