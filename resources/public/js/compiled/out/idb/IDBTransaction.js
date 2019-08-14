// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBTransaction');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The abort() method of the `idb.IDBTransaction` interface rolls
 *   all the changes to objects in the database associated with this
 * 
 *   `transaction.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/abort`
 */
idb.IDBTransaction.abort = (function idb$IDBTransaction$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   The objectStore() method of the `idb.IDBTransaction` interface
 *   an object store that has already been added to the scope of this
 * 
 *   `IDBTransaction.objectStore(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/objectStore`
 */
idb.IDBTransaction.object_store = (function idb$IDBTransaction$object_store(this$,name){
return this$.objectStore(name);
});
/**
 * Method.
 * 
 *   The commit() method of the `idb.IDBTransaction` interface commits
 *   transaction if it is alled on an active transaction. If it is
 *   on a transaction that is not active, it throws and `web.InvalidStateError`
 * 
 *   `transaction.commit();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/commit`
 */
idb.IDBTransaction.commit = (function idb$IDBTransaction$commit(this$){
return this$.commit();
});
/**
 * Property.
 * 
 *   An `idb.IDBDatabase` object.
 * 
 *   `var myDatabase = transaction.db;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/db`
 */
idb.IDBTransaction.db = (function idb$IDBTransaction$db(this$){
return this$.db();
});
/**
 * Property.
 * 
 *   An `idb.IDBDatabase` object.
 * 
 *   `var myDatabase = transaction.db;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/db`
 */
idb.IDBTransaction.set_db_BANG_ = (function idb$IDBTransaction$set_db_BANG_(this$,val){
return (this$["db"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMError` containing the relevant error. In Chrome 48+/Firefox
 *   this property returns a `dom.DOMException` because DOMError has
 *   removed from the DOM standard. The exact error is one of serveral
 *   It can be a reference to the same error as the request object
 *   raised it, or a transaction failure (for example `web.QuotaExceededError`
 *   `web.UnknownError`).
 * 
 *   `var myError = transaction.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error`
 */
idb.IDBTransaction.error = (function idb$IDBTransaction$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   A `dom.DOMError` containing the relevant error. In Chrome 48+/Firefox
 *   this property returns a `dom.DOMException` because DOMError has
 *   removed from the DOM standard. The exact error is one of serveral
 *   It can be a reference to the same error as the request object
 *   raised it, or a transaction failure (for example `web.QuotaExceededError`
 *   `web.UnknownError`).
 * 
 *   `var myError = transaction.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error`
 */
idb.IDBTransaction.set_error_BANG_ = (function idb$IDBTransaction$set_error_BANG_(this$,val){
return (this$["error"] = val);
});
/**
 * Property.
 * 
 *   An `idb.IDBTransactionMode` object defining the mode for isolating
 *   to data in the current object stores:
 * 
 *   `var myCurrentMode = IDBTransaction.mode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/mode`
 */
idb.IDBTransaction.mode = (function idb$IDBTransaction$mode(this$){
return this$.mode();
});
/**
 * Property.
 * 
 *   An `idb.IDBTransactionMode` object defining the mode for isolating
 *   to data in the current object stores:
 * 
 *   `var myCurrentMode = IDBTransaction.mode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/mode`
 */
idb.IDBTransaction.set_mode_BANG_ = (function idb$IDBTransaction$set_mode_BANG_(this$,val){
return (this$["mode"] = val);
});
/**
 * Property.
 * 
 *   The objectStoreNames read-only property of the `idb.IDBTransaction`
 *   returns a `dom.DOMStringList` of names of `idb.IDBObjectStore`
 * 
 *   `var myDatabase = transactionObj.objectStoreNames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/ObjectStoreNames`
 */
idb.IDBTransaction.object_store_names = (function idb$IDBTransaction$object_store_names(this$){
return this$.objectStoreNames();
});
/**
 * Property.
 * 
 *   The objectStoreNames read-only property of the `idb.IDBTransaction`
 *   returns a `dom.DOMStringList` of names of `idb.IDBObjectStore`
 * 
 *   `var myDatabase = transactionObj.objectStoreNames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/ObjectStoreNames`
 */
idb.IDBTransaction.set_object_store_names_BANG_ = (function idb$IDBTransaction$set_object_store_names_BANG_(this$,val){
return (this$["objectStoreNames"] = val);
});
/**
 * Property.
 * 
 *   In the following code snippet, we open a read/write transaction
 *   our database and add some data to an object store. Note also
 *   functions attached to transaction event handlers to report on
 *   outcome of the transaction opening in the event of success or
 *   Note the transaction.onabort = function(event) { }; block, reporting
 *   the transaction has been aborted. For a full working example,
 *   our To-do Notifications app (view example live.)
 * 
 *   `transaction.onabort = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onabort`
 */
idb.IDBTransaction.onabort = (function idb$IDBTransaction$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   In the following code snippet, we open a read/write transaction
 *   our database and add some data to an object store. Note also
 *   functions attached to transaction event handlers to report on
 *   outcome of the transaction opening in the event of success or
 *   Note the transaction.onabort = function(event) { }; block, reporting
 *   the transaction has been aborted. For a full working example,
 *   our To-do Notifications app (view example live.)
 * 
 *   `transaction.onabort = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onabort`
 */
idb.IDBTransaction.set_onabort_BANG_ = (function idb$IDBTransaction$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   The oncomplete event handler of the `idb.IDBTransaction` interface
 *   the complete event, fired when the transaction successfully completes.
 * 
 *   `transaction.oncomplete = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/oncomplete`
 */
idb.IDBTransaction.oncomplete = (function idb$IDBTransaction$oncomplete(this$){
return this$.oncomplete();
});
/**
 * Property.
 * 
 *   The oncomplete event handler of the `idb.IDBTransaction` interface
 *   the complete event, fired when the transaction successfully completes.
 * 
 *   `transaction.oncomplete = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/oncomplete`
 */
idb.IDBTransaction.set_oncomplete_BANG_ = (function idb$IDBTransaction$set_oncomplete_BANG_(this$,val){
return (this$["oncomplete"] = val);
});
/**
 * Property.
 * 
 *   The onerror event handler of the `idb.IDBTransaction` interface
 *   the error event, fired when a request returns an error and bubbles
 *   to the transaction object.
 * 
 *   `transaction.onerror = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onerror`
 */
idb.IDBTransaction.onerror = (function idb$IDBTransaction$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror event handler of the `idb.IDBTransaction` interface
 *   the error event, fired when a request returns an error and bubbles
 *   to the transaction object.
 * 
 *   `transaction.onerror = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/onerror`
 */
idb.IDBTransaction.set_onerror_BANG_ = (function idb$IDBTransaction$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});

//# sourceMappingURL=IDBTransaction.js.map?rel=1565798817046
