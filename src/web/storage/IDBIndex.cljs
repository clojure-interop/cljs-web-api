(ns web.storage.IDBIndex
  "IDBIndex interface of the IndexedDB API provides asynchronous
  to an index in a database. An index is a kind of object store
  looking up records in another object store, called the referenced
  store. You use this interface to retrieve data."
  (:refer-clojure :exclude [name count get]))

(defn count
  "Method.

  A `web.storage.IDBRequest` object on which subsequent events
  to this operation are fired.

  `var request = myIndex.count();
  var request = myIndex.count(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/count`"
  [this & args]
  (-> this .-count (.apply this (clj->js args))))

(defn get
  "Method.

  If a value is found, then a structured clone of it is created
  set as the result of the request object: this returns the record
  key is associated with.

  `var request = myIndex.get(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/get`"
  [this key]
  (-> this (.get key)))

(defn get-key
  "Method.

  If a key is found it is set as the result of the request object:
  returns the primary key of the record the key is associated with,
  the whole record as `IDBIndex.get` does.

  `var request = myIndex.getKey(key);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/getKey`"
  [this key]
  (-> this (.getKey key)))

(defn get-all
  "Method.

  There is a performance cost associated with looking at the value
  of a cursor, because the object is created lazily. To use a feature
  getAll(), the browser has to create all the objects at once.
  you are just interested in looking at each of the keys, for instance,
  is more efficient to use a cursor. If you are trying to get an
  of all the objects in an object store, though, you should use

  `var getAllKeysRequest = IDBIndex.getAll();
  var getAllKeysRequest = IDBIndex.getAll(query);
  var getAllKeysRequest = IDBIndex.getAll(query, count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/getAll`"
  [this & args]
  (-> this .-getAll (.apply this (clj->js args))))

(defn get-all-keys
  "Method.

  An `web.storage.IDBRequest` object on which subsequent events
  to this operation are fired.

  `var allKeysRequest = IDBIndex.getAllKeys();
  var allKeysRequest = IDBIndex.getAllKeys(query);
  var allKeysRequest = IDBIndex.getAllKeys(query, count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/getAllKeys`"
  [this & args]
  (-> this .-getAllKeys (.apply this (clj->js args))))

(defn open-cursor
  "Method.

  The method sets the position of the cursor to the appropriate
  based on the specified direction.

  `var request = myIndex.openCursor();
  var request = myIndex.openCursor(range);
  var request = myIndex.openCursor(range, direction);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/openCursor`"
  [this & args]
  (-> this .-openCursor (.apply this (clj->js args))))

(defn open-key-cursor
  "Method.

  The method sets the position of the cursor to the appropriate
  based on the specified direction.

  `var request = myIndex.openKeyCursor();
  var request = myIndex.openKeyCursor(range);
  var request = myIndex.openKeyCursor(range, direction);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/openKeyCursor`"
  [this & args]
  (-> this .-openKeyCursor (.apply this (clj->js args))))

(defn is-auto-locale
  "Property.

  [Read Only]
  [Experimental]

  The isAutoLocale read-only property of the `web.storage.IDBIndex`
  returns a `js.Boolean` indicating whether the index had a locale
  of auto specified upon its creation (see createIndex()'s optionalParameters.)

  `var myIndex = objectStore.index('index');
  console.log(myIndex.isAutoLocale);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/isAutoLocale`"
  [this]
  (-> this (.-isAutoLocale)))

(defn locale
  "Property.

  [Read Only]
  [Experimental]

  The locale read-only property of the `web.storage.IDBIndex` interface
  the locale of the index (for example en-US, or pl) if it had
  locale value specified upon its creation (see createIndex()'s
  Note that this property always returns the current locale being
  in this index, in other words, it never returns \\\"auto\\\".

  `var myIndex = objectStore.index('index');
  console.log(myIndex.locale);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/locale`"
  [this]
  (-> this (.-locale)))

(defn name
  "Property.

  A `web.dom.DOMString` specifying a name for the index.

  `var indexName = IDBIndex.name;
  IDBIndex.name = indexName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A `web.dom.DOMString` specifying a name for the index.

  `var indexName = IDBIndex.name;
  IDBIndex.name = indexName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/name`"
  [this val]
  (aset this "name" val))

(defn object-store
  "Property.

  [Read Only]

  An `web.idb.IDBObjectStore`.

  `var myIDBObjectStore = myIndex.objectStore;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/objectStore`"
  [this]
  (-> this (.-objectStore)))

(defn key-path
  "Property.

  [Read Only]

  Any data type that can be used as a key path.

  `var myKeyPath = myIndex.keyPath;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/keyPath`"
  [this]
  (-> this (.-keyPath)))

(defn multi-entry
  "Property.

  [Read Only]

  A `js.Boolean`:

  `var isMultiEntry = myIndex.multiEntry;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/multiEntry`"
  [this]
  (-> this (.-multiEntry)))

(defn unique
  "Property.

  [Read Only]

  A `js.Boolean`:

  `var isUnique = IDBIndex.unique;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/unique`"
  [this]
  (-> this (.-unique)))

