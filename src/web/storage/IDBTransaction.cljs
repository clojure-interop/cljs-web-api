(ns web.storage.IDBTransaction
  "Note that as of Firefox 40, IndexedDB transactions have relaxed
  guarantees to increase performance (see bug 1112702.) Previously
  a readwrite transaction `IDBTransaction.oncomplete` was fired
  when all data was guaranteed to have been flushed to disk. In
  40+ the complete event is fired after the OS has been told to
  the data but potentially before that data has actually been flushed
  disk. The complete event may thus be delivered quicker than before,
  there exists a small chance that the entire transaction will
  lost if the OS crashes or there is a loss of system power before
  data is flushed to disk. Since such catastrophic events are rare
  consumers should not need to concern themselves further."
  (:refer-clojure :exclude []))

(defn abort
  "Method.

  The abort() method of the `web.storage.IDBTransaction` interface
  back all the changes to objects in the database associated with
  transaction.

  `transaction.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/abort`"
  [this ]
  (-> this (.abort)))

(defn object-store
  "Method.

  The objectStore() method of the `web.storage.IDBTransaction`
  returns an object store that has already been added to the scope
  this transaction.

  `IDBTransaction.objectStore(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/objectStore`"
  [this name]
  (-> this (.objectStore name)))

(defn commit
  "Method.

  The commit() method of the `web.storage.IDBTransaction` interface
  the transaction if it is alled on an active transaction. If it
  called on a transaction that is not active, it throws and `InvalidStateError`

  `transaction.commit();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/commit`"
  [this ]
  (-> this (.commit)))

(defn db
  "Property.

  [Read Only]

  An `web.storage.IDBDatabase` object.

  `var myDatabase = transaction.db;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/db`"
  [this]
  (-> this (.-db)))

(defn error
  "Property.

  [Read Only]

  A `web.deprecated.DOMError` containing the relevant error. In
  48+/Firefox 58+ this property returns a `web.dom.DOMException`
  DOMError has been removed from the DOM standard. The exact error
  one of serveral possibilities. It can be a reference to the same
  as the request object that raised it, or a transaction failure
  example `QuotaExceededError` or `UnknownError`).

  `var myError = transaction.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error`"
  [this]
  (-> this (.-error)))

(defn mode
  "Property.

  [Read Only]

  An `IDBTransactionMode` object defining the mode for isolating
  to data in the current object stores:

  `var myCurrentMode = IDBTransaction.mode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/mode`"
  [this]
  (-> this (.-mode)))

(defn object-store-names
  "Property.

  [Read Only]
  [Experimental]

  The objectStoreNames read-only property of the `web.storage.IDBTransaction`
  returns a `web.dom.DOMStringList` of names of `web.idb.IDBObjectStore`

  `var myDatabase = transactionObj.objectStoreNames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/ObjectStoreNames`"
  [this]
  (-> this (.-objectStoreNames)))

(defn onabort
  "Property.

  In the following code snippet, we open a read/write transaction
  our database and add some data to an object store. Note also
  functions attached to transaction event handlers to report on
  outcome of the transaction opening in the event of success or
  Note the transaction.onabort = function(event) { }; block, reporting
  the transaction has been aborted. For a full working example,
  our To-do Notifications app (view example live.)

  `transaction.onabort = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  In the following code snippet, we open a read/write transaction
  our database and add some data to an object store. Note also
  functions attached to transaction event handlers to report on
  outcome of the transaction opening in the event of success or
  Note the transaction.onabort = function(event) { }; block, reporting
  the transaction has been aborted. For a full working example,
  our To-do Notifications app (view example live.)

  `transaction.onabort = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onabort`"
  [this val]
  (aset this "onabort" val))

(defn oncomplete
  "Property.

  The oncomplete event handler of the `web.storage.IDBTransaction`
  handles the complete event, fired when the transaction successfully

  `transaction.oncomplete = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/oncomplete`"
  [this]
  (-> this (.-oncomplete)))

(defn set-oncomplete!
  "Property.

  The oncomplete event handler of the `web.storage.IDBTransaction`
  handles the complete event, fired when the transaction successfully

  `transaction.oncomplete = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/oncomplete`"
  [this val]
  (aset this "oncomplete" val))

(defn onerror
  "Property.

  The onerror event handler of the `web.storage.IDBTransaction`
  handles the error event, fired when a request returns an error
  bubbles up to the transaction object.

  `transaction.onerror = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror event handler of the `web.storage.IDBTransaction`
  handles the error event, fired when a request returns an error
  bubbles up to the transaction object.

  `transaction.onerror = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onerror`"
  [this val]
  (aset this "onerror" val))

