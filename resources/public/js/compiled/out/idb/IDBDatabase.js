// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBDatabase');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The connection is not actually closed until all transactions
 *   using this connection are complete. No new transactions can be
 *   for this connection once this method is called. Methods that
 *   transactions throw an exception if a closing operation is pending.
 * 
 *   `IDBDatabase.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/close`
 */
idb.IDBDatabase.close = (function idb$IDBDatabase$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The method takes the name of the store as well as a parameter
 *   that lets you define important optional properties. You can use
 *   property to uniquely identify individual objects in the store.
 *   the property is an identifier, it should be unique to every object,
 *   every object should have that property.
 * 
 *   `IDBDatabase.createObjectStore(name);
 *   IDBDatabase.createObjectStore(name, options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore`
 */
idb.IDBDatabase.create_object_store = (function idb$IDBDatabase$create_object_store(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43545 = arguments.length;
var i__42557__auto___43546 = (0);
while(true){
if((i__42557__auto___43546 < len__42556__auto___43545)){
args__42563__auto__.push((arguments[i__42557__auto___43546]));

var G__43547 = (i__42557__auto___43546 + (1));
i__42557__auto___43546 = G__43547;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBDatabase.create_object_store.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBDatabase.create_object_store.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createObjectStore,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBDatabase.create_object_store.cljs$lang$maxFixedArity = (1);

idb.IDBDatabase.create_object_store.cljs$lang$applyTo = (function (seq43543){
var G__43544 = cljs.core.first.call(null,seq43543);
var seq43543__$1 = cljs.core.next.call(null,seq43543);
return idb.IDBDatabase.create_object_store.cljs$core$IFn$_invoke$arity$variadic(G__43544,seq43543__$1);
});

/**
 * Method.
 * 
 *   As with `idb.IDBDatabase.createObjectStore`, this method can
 *   called only within a `web.versionchange` transaction.
 * 
 *   `dbInstance.deleteObjectStore(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/deleteObjectStore`
 */
idb.IDBDatabase.delete_object_store = (function idb$IDBDatabase$delete_object_store(this$,name){
return this$.deleteObjectStore(name);
});
/**
 * Method.
 * 
 *   An `idb.IDBTransaction` object.
 * 
 *   `IDBDatabase.transaction(storeNames);
 *   IDBDatabase.transaction(storeNames, mode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction`
 */
idb.IDBDatabase.transaction = (function idb$IDBDatabase$transaction(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43550 = arguments.length;
var i__42557__auto___43551 = (0);
while(true){
if((i__42557__auto___43551 < len__42556__auto___43550)){
args__42563__auto__.push((arguments[i__42557__auto___43551]));

var G__43552 = (i__42557__auto___43551 + (1));
i__42557__auto___43551 = G__43552;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBDatabase.transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBDatabase.transaction.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.transaction,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBDatabase.transaction.cljs$lang$maxFixedArity = (1);

idb.IDBDatabase.transaction.cljs$lang$applyTo = (function (seq43548){
var G__43549 = cljs.core.first.call(null,seq43548);
var seq43548__$1 = cljs.core.next.call(null,seq43548);
return idb.IDBDatabase.transaction.cljs$core$IFn$_invoke$arity$variadic(G__43549,seq43548__$1);
});

/**
 * Property.
 * 
 *   A `dom.DOMString` containing the name of the connected database.
 * 
 *   `var dbName = IDBDatabase.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/name`
 */
idb.IDBDatabase.name = (function idb$IDBDatabase$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   A `dom.DOMString` containing the name of the connected database.
 * 
 *   `var dbName = IDBDatabase.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/name`
 */
idb.IDBDatabase.set_name_BANG_ = (function idb$IDBDatabase$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMStringList` containing a list of the names of the object
 *   currently in the connected database.
 * 
 *   `var list[] = IDBDatabase.objectStoreNames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/objectStoreNames`
 */
idb.IDBDatabase.object_store_names = (function idb$IDBDatabase$object_store_names(this$){
return this$.objectStoreNames();
});
/**
 * Property.
 * 
 *   A `dom.DOMStringList` containing a list of the names of the object
 *   currently in the connected database.
 * 
 *   `var list[] = IDBDatabase.objectStoreNames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/objectStoreNames`
 */
idb.IDBDatabase.set_object_store_names_BANG_ = (function idb$IDBDatabase$set_object_store_names_BANG_(this$,val){
return (this$["objectStoreNames"] = val);
});
/**
 * Property.
 * 
 *   The onabort event handler of the `idb.IDBDatabase` interface
 *   the abort event, fired when a transaction is aborted and bubbles
 *   to the connection object.
 * 
 *   `IDBDatabase.onabort = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onabort`
 */
idb.IDBDatabase.onabort = (function idb$IDBDatabase$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   The onabort event handler of the `idb.IDBDatabase` interface
 *   the abort event, fired when a transaction is aborted and bubbles
 *   to the connection object.
 * 
 *   `IDBDatabase.onabort = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onabort`
 */
idb.IDBDatabase.set_onabort_BANG_ = (function idb$IDBDatabase$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   A function which is called when the close event is fired.
 * 
 *   `IDBDatabase.onclose = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onclose`
 */
idb.IDBDatabase.onclose = (function idb$IDBDatabase$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   A function which is called when the close event is fired.
 * 
 *   `IDBDatabase.onclose = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onclose`
 */
idb.IDBDatabase.set_onclose_BANG_ = (function idb$IDBDatabase$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The onerror event handler of the `idb.IDBDatabase` interface
 *   the error event, fired when a request returns an error and bubbles
 *   to the connection object.
 * 
 *   `IDBDatabase.onerror = function(event) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onerror`
 */
idb.IDBDatabase.onerror = (function idb$IDBDatabase$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror event handler of the `idb.IDBDatabase` interface
 *   the error event, fired when a request returns an error and bubbles
 *   to the connection object.
 * 
 *   `IDBDatabase.onerror = function(event) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onerror`
 */
idb.IDBDatabase.set_onerror_BANG_ = (function idb$IDBDatabase$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   This example shows an `idb.IDBOpenDBRequest.onupgradeneeded`
 *   that creates a new object store; it also includes onerror and
 *   functions to handle non-success cases, and an onversionchange
 *   to notify when a database structure change has occurred.
 * 
 *   `IDBDatabase.onversionchange = function(event) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onversionchange`
 */
idb.IDBDatabase.onversionchange = (function idb$IDBDatabase$onversionchange(this$){
return this$.onversionchange();
});
/**
 * Property.
 * 
 *   This example shows an `idb.IDBOpenDBRequest.onupgradeneeded`
 *   that creates a new object store; it also includes onerror and
 *   functions to handle non-success cases, and an onversionchange
 *   to notify when a database structure change has occurred.
 * 
 *   `IDBDatabase.onversionchange = function(event) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onversionchange`
 */
idb.IDBDatabase.set_onversionchange_BANG_ = (function idb$IDBDatabase$set_onversionchange_BANG_(this$,val){
return (this$["onversionchange"] = val);
});
/**
 * Property.
 * 
 *   An integer containing the version of the connected database.
 * 
 *   `var myInteger = IDBDatabase.version;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/version`
 */
idb.IDBDatabase.version = (function idb$IDBDatabase$version(this$){
return this$.version();
});
/**
 * Property.
 * 
 *   An integer containing the version of the connected database.
 * 
 *   `var myInteger = IDBDatabase.version;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/version`
 */
idb.IDBDatabase.set_version_BANG_ = (function idb$IDBDatabase$set_version_BANG_(this$,val){
return (this$["version"] = val);
});

//# sourceMappingURL=IDBDatabase.js.map?rel=1565798807935
