(ns web.storage.IDBDatabase
  "The IDBDatabase interface of the IndexedDB API provides a connection
  a database; you can use an IDBDatabase object to open a transaction
  your database then create, manipulate, and delete objects (data)
  that database. The interface provides the only way to get and
  versions of the database."
  (:refer-clojure :exclude [name]))

(defn close
  "Method.

  The connection is not actually closed until all transactions
  using this connection are complete. No new transactions can be
  for this connection once this method is called. Methods that
  transactions throw an exception if a closing operation is pending.

  `IDBDatabase.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/close`"
  [this ]
  (-> this (.close)))

(defn create-object-store
  "Method.

  The method takes the name of the store as well as a parameter
  that lets you define important optional properties. You can use
  property to uniquely identify individual objects in the store.
  the property is an identifier, it should be unique to every object,
  every object should have that property.

  `IDBDatabase.createObjectStore(name);
  IDBDatabase.createObjectStore(name, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore`"
  [this & args]
  (-> this .-createObjectStore (.apply this (clj->js args))))

(defn delete-object-store
  "Method.

  As with `IDBDatabase.createObjectStore`, this method can be called
  within a `versionchange` transaction.

  `dbInstance.deleteObjectStore(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/deleteObjectStore`"
  [this name]
  (-> this (.deleteObjectStore name)))

(defn transaction
  "Method.

  An `web.storage.IDBTransaction` object.

  `IDBDatabase.transaction(storeNames);
  IDBDatabase.transaction(storeNames, mode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction`"
  [this & args]
  (-> this .-transaction (.apply this (clj->js args))))

(defn name
  "Property.

  A `web.dom.DOMString` containing the name of the connected database.

  `var dbName = IDBDatabase.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A `web.dom.DOMString` containing the name of the connected database.

  `var dbName = IDBDatabase.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/name`"
  [this val]
  (aset this "name" val))

(defn version
  "Property.

  An integer containing the version of the connected database.

  `var myInteger = IDBDatabase.version;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/version`"
  [this]
  (-> this (.-version)))

(defn set-version!
  "Property.

  An integer containing the version of the connected database.

  `var myInteger = IDBDatabase.version;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/version`"
  [this val]
  (aset this "version" val))

(defn object-store-names
  "Property.

  A `web.dom.DOMStringList` containing a list of the names of the
  stores currently in the connected database.

  `var list[] = IDBDatabase.objectStoreNames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/objectStoreNames`"
  [this]
  (-> this (.-objectStoreNames)))

(defn set-object-store-names!
  "Property.

  A `web.dom.DOMStringList` containing a list of the names of the
  stores currently in the connected database.

  `var list[] = IDBDatabase.objectStoreNames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/objectStoreNames`"
  [this val]
  (aset this "objectStoreNames" val))

(defn onabort
  "Property.

  The onabort event handler of the `web.storage.IDBDatabase` interface
  the abort event, fired when a transaction is aborted and bubbles
  to the connection object.

  `IDBDatabase.onabort = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  The onabort event handler of the `web.storage.IDBDatabase` interface
  the abort event, fired when a transaction is aborted and bubbles
  to the connection object.

  `IDBDatabase.onabort = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onclose
  "Property.

  A function which is called when the close event is fired.

  `IDBDatabase.onclose = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onclose`"
  [this]
  (-> this (.-onclose)))

(defn set-onclose!
  "Property.

  A function which is called when the close event is fired.

  `IDBDatabase.onclose = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onclose`"
  [this val]
  (aset this "onclose" val))

(defn onerror
  "Property.

  The onerror event handler of the `web.storage.IDBDatabase` interface
  the error event, fired when a request returns an error and bubbles
  to the connection object.

  `IDBDatabase.onerror = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror event handler of the `web.storage.IDBDatabase` interface
  the error event, fired when a request returns an error and bubbles
  to the connection object.

  `IDBDatabase.onerror = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onversionchange
  "Property.

  This example shows an `IDBOpenDBRequest.onupgradeneeded` block
  creates a new object store; it also includes onerror and onabort
  to handle non-success cases, and an onversionchange function
  notify when a database structure change has occurred.

  `IDBDatabase.onversionchange = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onversionchange`"
  [this]
  (-> this (.-onversionchange)))

(defn set-onversionchange!
  "Property.

  This example shows an `IDBOpenDBRequest.onupgradeneeded` block
  creates a new object store; it also includes onerror and onabort
  to handle non-success cases, and an onversionchange function
  notify when a database structure change has occurred.

  `IDBDatabase.onversionchange = function(event) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onversionchange`"
  [this val]
  (aset this "onversionchange" val))

