(ns web.idb.IDBObjectStore
  "This example shows a variety of different uses of object stores,
  updating the data structure with `IDBObjectStore.createIndex`
  an onupgradeneeded function, to adding a new item to our object
  with `IDBObjectStore.add`. For a full working example, see our
  Notifications app (view example live.)"
  (:refer-clojure :exclude [name count get]))

(defn add
  "Method.

  To determine if the add operation has completed successfully,
  for the transaction’s complete event in addition to the IDBObjectStore.add
  success event, because the transaction may still fail after the
  event fires. In other words, the success event is only triggered
  the transaction has been successfully queued.

  `var request = objectStore.add(value);
  var request = objectStore.add(value, key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add`"
  [this & args]
  (-> this .-add (.apply this (clj->js args))))

(defn clear
  "Method.

  Clearing an object store consists of removing all records from
  object store and removing all records in indexes that reference
  object store. To remove only some of the records in a store,
  `IDBObjectStore.delete` passing a key or `web.storage.IDBKeyRange`.

  `var request = objectStore.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/clear`"
  [this ]
  (-> this (.clear)))

(defn count
  "Method.

  An `web.storage.IDBRequest` object on which subsequent events
  to this operation are fired.

  `var request = ObjectStore.count();
  var request = ObjectStore.count(query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/count`"
  [this & args]
  (-> this .-count (.apply this (clj->js args))))

(defn create-index
  "Method.

  Note that this method must be called only from a VersionChange
  mode callback.

  `var myIDBIndex = objectStore.createIndex(indexName, keyPath);
  var myIDBIndex = objectStore.createIndex(indexName, keyPath, objectParameters);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex`"
  [this & args]
  (-> this .-createIndex (.apply this (clj->js args))))

(defn delete
  "Method.

  An `web.storage.IDBRequest` object on which subsequent events
  to this operation are fired. The request.result attribute is
  to undefined.

  `var request = objectStore.delete(Key);

  var request = objectStore.delete(KeyRange);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete`"
  [this & args]
  (-> this .-delete (.apply this (clj->js args))))

(defn delete-index
  "Method.

  Note that this method must be called only from a VersionChange
  mode callback. Note that this method synchronously modifies the
  property.

  `objectStore.deleteIndex(indexName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/deleteIndex`"
  [this index-name]
  (-> this (.deleteIndex index-name)))

(defn get
  "Method.

  If a value is successfully found, then a structured clone of
  is created and set as the result of the request object.

  `var request = objectStore.get(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/get`"
  [this key]
  (-> this (.get key)))

(defn get-key
  "Method.

  If a key is successfully found, then a structured clone of it
  created and set as the result of the request object.

  `var request = objectStore.getKey(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getKey`"
  [this key]
  (-> this (.getKey key)))

(defn get-all
  "Method.

  If a value is successfully found, then a structured clone of
  is created and set as the result of the request object.

  `var request = objectStore.getAll();
  var request = objectStore.getAll(query);
  var request = objectStore.getAll(query, count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll`"
  [this & args]
  (-> this .-getAll (.apply this (clj->js args))))

(defn get-all-keys
  "Method.

  If a value is successfully found, then a structured clone of
  is created and set as the result of the request object.

  `var request = objectStore.getAllKeys();
  var request = objectStore.getAllKeys(query);
  var request = objectStore.getAllKeys(query, count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAllKeys`"
  [this & args]
  (-> this .-getAllKeys (.apply this (clj->js args))))

(defn index
  "Method.

  An `web.storage.IDBIndex` object for accessing the index.

  `var index = objectStore.index(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/index`"
  [this name]
  (-> this (.index name)))

(defn open-cursor
  "Method.

  To determine if the add operation has completed successfully,
  for the results’s success event.

  `var request = ObjectStore.openCursor();
  var request = ObjectStore.openCursor(query);
  var request = ObjectStore.openCursor(query, direction);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openCursor`"
  [this & args]
  (-> this .-openCursor (.apply this (clj->js args))))

(defn open-key-cursor
  "Method.

  To determine if the add operation has completed successfully,
  for the results’s success event.

  `var request = objectStore.openKeyCursor();
  var request = objectStore.openKeyCursor(query);
  var request = objectStore.openKeyCursor(query, direction);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openKeyCursor`"
  [this & args]
  (-> this .-openKeyCursor (.apply this (clj->js args))))

(defn put
  "Method.

  The put method is an update or insert method. See the `IDBObjectStore.add`
  for an insert only method.

  `var request = objectStore.put(item);
  var request = objectStore.put(item, key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/put`"
  [this & args]
  (-> this .-put (.apply this (clj->js args))))

(defn index-names
  "Property.

  [Read Only]

  A `web.dom.DOMStringList`.

  `var myindexNames = objectStore.indexNames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/indexNames`"
  [this]
  (-> this (.-indexNames)))

(defn key-path
  "Property.

  [Read Only]

  If this property is null, the application must provide a key
  each modification operation.

  `var mykeyPath = objectStore.keyPath;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/keyPath`"
  [this]
  (-> this (.-keyPath)))

(defn name
  "Property.

  A `web.dom.DOMString` containing the object store's name.

  `IDBObjectStore.name = myNewName;
  var myObjectStoreName = IDBObjectStore.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A `web.dom.DOMString` containing the object store's name.

  `IDBObjectStore.name = myNewName;
  var myObjectStoreName = IDBObjectStore.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/name`"
  [this val]
  (aset this "name" val))

(defn transaction
  "Property.

  [Read Only]

  An `web.storage.IDBTransaction` object.

  `var myTransaction = objectStore.transaction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/transaction`"
  [this]
  (-> this (.-transaction)))

(defn auto-increment
  "Property.

  [Read Only]

  A `js.Boolean`:

  `var myAutoIncrement = objectStore.autoIncrement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/autoIncrement`"
  [this]
  (-> this (.-autoIncrement)))

