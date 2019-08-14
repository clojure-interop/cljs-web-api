(ns idb.IDBTransaction
  "Note that as of Firefox 40, IndexedDB transactions have relaxed
  guarantees to increase performance (see bug 1112702.) Previously
  a readwrite transaction `idb.IDBTransaction.oncomplete` was fired
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

  The abort() method of the `idb.IDBTransaction` interface rolls
  all the changes to objects in the database associated with this

  `transaction.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/abort`"
  [this ]
  (-> this (.abort)))

(defn object-store
  "Method.

  The objectStore() method of the `idb.IDBTransaction` interface
  an object store that has already been added to the scope of this

  `IDBTransaction.objectStore(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/objectStore`"
  [this name]
  (-> this (.objectStore name)))

(defn commit
  "Method.

  The commit() method of the `idb.IDBTransaction` interface commits
  transaction if it is alled on an active transaction. If it is
  on a transaction that is not active, it throws and `web.InvalidStateError`

  `transaction.commit();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/commit`"
  [this ]
  (-> this (.commit)))

(defn db
  "Property.

  An `idb.IDBDatabase` object.

  `var myDatabase = transaction.db;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/db`"
  [this]
  (-> this (.db)))

(defn set-db!
  "Property.

  An `idb.IDBDatabase` object.

  `var myDatabase = transaction.db;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/db`"
  [this val]
  (aset this "db" val))

(defn error
  "Property.

  A `dom.DOMError` containing the relevant error. In Chrome 48+/Firefox
  this property returns a `dom.DOMException` because DOMError has
  removed from the DOM standard. The exact error is one of serveral
  It can be a reference to the same error as the request object
  raised it, or a transaction failure (for example `web.QuotaExceededError`
  `web.UnknownError`).

  `var myError = transaction.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  A `dom.DOMError` containing the relevant error. In Chrome 48+/Firefox
  this property returns a `dom.DOMException` because DOMError has
  removed from the DOM standard. The exact error is one of serveral
  It can be a reference to the same error as the request object
  raised it, or a transaction failure (for example `web.QuotaExceededError`
  `web.UnknownError`).

  `var myError = transaction.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error`"
  [this val]
  (aset this "error" val))

(defn mode
  "Property.

  An `idb.IDBTransactionMode` object defining the mode for isolating
  to data in the current object stores:

  `var myCurrentMode = IDBTransaction.mode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  An `idb.IDBTransactionMode` object defining the mode for isolating
  to data in the current object stores:

  `var myCurrentMode = IDBTransaction.mode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/mode`"
  [this val]
  (aset this "mode" val))

(defn object-store-names
  "Property.

  The objectStoreNames read-only property of the `idb.IDBTransaction`
  returns a `dom.DOMStringList` of names of `idb.IDBObjectStore`

  `var myDatabase = transactionObj.objectStoreNames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/ObjectStoreNames`"
  [this]
  (-> this (.objectStoreNames)))

(defn set-object-store-names!
  "Property.

  The objectStoreNames read-only property of the `idb.IDBTransaction`
  returns a `dom.DOMStringList` of names of `idb.IDBObjectStore`

  `var myDatabase = transactionObj.objectStoreNames;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/ObjectStoreNames`"
  [this val]
  (aset this "objectStoreNames" val))

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
  (-> this (.onabort)))

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

  The oncomplete event handler of the `idb.IDBTransaction` interface
  the complete event, fired when the transaction successfully completes.

  `transaction.oncomplete = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/oncomplete`"
  [this]
  (-> this (.oncomplete)))

(defn set-oncomplete!
  "Property.

  The oncomplete event handler of the `idb.IDBTransaction` interface
  the complete event, fired when the transaction successfully completes.

  `transaction.oncomplete = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/oncomplete`"
  [this val]
  (aset this "oncomplete" val))

(defn onerror
  "Property.

  The onerror event handler of the `idb.IDBTransaction` interface
  the error event, fired when a request returns an error and bubbles
  to the transaction object.

  `transaction.onerror = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror event handler of the `idb.IDBTransaction` interface
  the error event, fired when a request returns an error and bubbles
  to the transaction object.

  `transaction.onerror = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onerror`"
  [this val]
  (aset this "onerror" val))

