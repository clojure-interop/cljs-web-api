// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBRequest');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   A `dom.DOMError` containing the relevant error. In Chrome 48+/Firefox
 *   this property returns a `dom.DOMException` because DOMError has
 *   removed from the DOM standard. The following error codes are
 *   under certain conditions:
 * 
 *   `var myError = request.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error`
 */
idb.IDBRequest.error = (function idb$IDBRequest$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   A `dom.DOMError` containing the relevant error. In Chrome 48+/Firefox
 *   this property returns a `dom.DOMException` because DOMError has
 *   removed from the DOM standard. The following error codes are
 *   under certain conditions:
 * 
 *   `var myError = request.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error`
 */
idb.IDBRequest.set_error_BANG_ = (function idb$IDBRequest$set_error_BANG_(this$,val){
return (this$["error"] = val);
});
/**
 * Property.
 * 
 *   The following example requests a given record title, onsuccess
 *   the associated record from the `idb.IDBObjectStore` (made available
 *   objectStoreTitleRequest.result), updates one property of the
 *   and then puts the updated record back into the object store.
 *   included at the bottom is an onerror function that reports what
 *   error was if the request fails. For a full working example, see
 *   To-do Notifications app (view example live.)
 * 
 *   `request.onerror = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror`
 */
idb.IDBRequest.onerror = (function idb$IDBRequest$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The following example requests a given record title, onsuccess
 *   the associated record from the `idb.IDBObjectStore` (made available
 *   objectStoreTitleRequest.result), updates one property of the
 *   and then puts the updated record back into the object store.
 *   included at the bottom is an onerror function that reports what
 *   error was if the request fails. For a full working example, see
 *   To-do Notifications app (view example live.)
 * 
 *   `request.onerror = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror`
 */
idb.IDBRequest.set_onerror_BANG_ = (function idb$IDBRequest$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The following example requests a given record title, onsuccess
 *   the associated record from the `idb.IDBObjectStore` (made available
 *   objectStoreTitleRequest.result), updates one property of the
 *   and then puts the updated record back into the object store.
 *   a full working example, see our To-do Notifications app (view
 *   live.)
 * 
 *   `request.onsuccess = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess`
 */
idb.IDBRequest.onsuccess = (function idb$IDBRequest$onsuccess(this$){
return this$.onsuccess();
});
/**
 * Property.
 * 
 *   The following example requests a given record title, onsuccess
 *   the associated record from the `idb.IDBObjectStore` (made available
 *   objectStoreTitleRequest.result), updates one property of the
 *   and then puts the updated record back into the object store.
 *   a full working example, see our To-do Notifications app (view
 *   live.)
 * 
 *   `request.onsuccess = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess`
 */
idb.IDBRequest.set_onsuccess_BANG_ = (function idb$IDBRequest$set_onsuccess_BANG_(this$,val){
return (this$["onsuccess"] = val);
});
/**
 * Property.
 * 
 *   The `idb.IDBRequestReadyState` of the request, which takes one
 *   the following two values:
 * 
 *   `var currentReadyState = request.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/readyState`
 */
idb.IDBRequest.ready_state = (function idb$IDBRequest$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The `idb.IDBRequestReadyState` of the request, which takes one
 *   the following two values:
 * 
 *   `var currentReadyState = request.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/readyState`
 */
idb.IDBRequest.set_ready_state_BANG_ = (function idb$IDBRequest$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   any
 * 
 *   `var myResult = request.result;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result`
 */
idb.IDBRequest.result = (function idb$IDBRequest$result(this$){
return this$.result();
});
/**
 * Property.
 * 
 *   any
 * 
 *   `var myResult = request.result;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result`
 */
idb.IDBRequest.set_result_BANG_ = (function idb$IDBRequest$set_result_BANG_(this$,val){
return (this$["result"] = val);
});
/**
 * Property.
 * 
 *   An object representing the source of the request, such as an
 *   `idb.IDBObjectStore` or `idb.IDBCursor`.
 * 
 *   `var IDBIndex = request.source;
 *   var IDBCursor = request.source;
 *   var IDBObjectStore = request.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/source`
 */
idb.IDBRequest.source = (function idb$IDBRequest$source(this$){
return this$.source();
});
/**
 * Property.
 * 
 *   An object representing the source of the request, such as an
 *   `idb.IDBObjectStore` or `idb.IDBCursor`.
 * 
 *   `var IDBIndex = request.source;
 *   var IDBCursor = request.source;
 *   var IDBObjectStore = request.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/source`
 */
idb.IDBRequest.set_source_BANG_ = (function idb$IDBRequest$set_source_BANG_(this$,val){
return (this$["source"] = val);
});
/**
 * Property.
 * 
 *   An `idb.IDBTransaction`.
 * 
 *   `var myTransaction = request.transaction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/transaction`
 */
idb.IDBRequest.transaction = (function idb$IDBRequest$transaction(this$){
return this$.transaction();
});
/**
 * Property.
 * 
 *   An `idb.IDBTransaction`.
 * 
 *   `var myTransaction = request.transaction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/transaction`
 */
idb.IDBRequest.set_transaction_BANG_ = (function idb$IDBRequest$set_transaction_BANG_(this$,val){
return (this$["transaction"] = val);
});

//# sourceMappingURL=IDBRequest.js.map?rel=1565798842298
