// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBObjectStore');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   To determine if the add operation has completed successfully,
 *   for the transaction’s complete event in addition to the IDBObjectStore.add
 *   success event, because the transaction may still fail after the
 *   event fires. In other words, the success event is only triggered
 *   the transaction has been successfully queued.
 * 
 *   `var request = objectStore.add(value);
 *   var request = objectStore.add(value, key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add`
 */
idb.IDBObjectStore.add = (function idb$IDBObjectStore$add(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52652 = arguments.length;
var i__42557__auto___52653 = (0);
while(true){
if((i__42557__auto___52653 < len__42556__auto___52652)){
args__42563__auto__.push((arguments[i__42557__auto___52653]));

var G__52654 = (i__42557__auto___52653 + (1));
i__42557__auto___52653 = G__52654;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.add.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.add,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.add.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.add.cljs$lang$applyTo = (function (seq52650){
var G__52651 = cljs.core.first.call(null,seq52650);
var seq52650__$1 = cljs.core.next.call(null,seq52650);
return idb.IDBObjectStore.add.cljs$core$IFn$_invoke$arity$variadic(G__52651,seq52650__$1);
});

/**
 * Method.
 * 
 *   Clearing an object store consists of removing all records from
 *   object store and removing all records in indexes that reference
 *   object store. To remove only some of the records in a store,
 *   `idb.IDBObjectStore.delete` passing a key or `idb.IDBKeyRange`.
 * 
 *   `var request = objectStore.clear();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/clear`
 */
idb.IDBObjectStore.clear = (function idb$IDBObjectStore$clear(this$){
return this$.clear();
});
/**
 * Method.
 * 
 *   An `idb.IDBRequest` object on which subsequent events related
 *   this operation are fired.
 * 
 *   `var request = ObjectStore.count();
 *   var request = ObjectStore.count(query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/count`
 */
idb.IDBObjectStore.count = (function idb$IDBObjectStore$count(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52657 = arguments.length;
var i__42557__auto___52658 = (0);
while(true){
if((i__42557__auto___52658 < len__42556__auto___52657)){
args__42563__auto__.push((arguments[i__42557__auto___52658]));

var G__52659 = (i__42557__auto___52658 + (1));
i__42557__auto___52658 = G__52659;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.count.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.count,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.count.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.count.cljs$lang$applyTo = (function (seq52655){
var G__52656 = cljs.core.first.call(null,seq52655);
var seq52655__$1 = cljs.core.next.call(null,seq52655);
return idb.IDBObjectStore.count.cljs$core$IFn$_invoke$arity$variadic(G__52656,seq52655__$1);
});

/**
 * Method.
 * 
 *   Note that this method must be called only from a VersionChange
 *   mode callback.
 * 
 *   `var myIDBIndex = objectStore.createIndex(indexName, keyPath);
 *   var myIDBIndex = objectStore.createIndex(indexName, keyPath, objectParameters);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex`
 */
idb.IDBObjectStore.create_index = (function idb$IDBObjectStore$create_index(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52662 = arguments.length;
var i__42557__auto___52663 = (0);
while(true){
if((i__42557__auto___52663 < len__42556__auto___52662)){
args__42563__auto__.push((arguments[i__42557__auto___52663]));

var G__52664 = (i__42557__auto___52663 + (1));
i__42557__auto___52663 = G__52664;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.create_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.create_index.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createIndex,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.create_index.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.create_index.cljs$lang$applyTo = (function (seq52660){
var G__52661 = cljs.core.first.call(null,seq52660);
var seq52660__$1 = cljs.core.next.call(null,seq52660);
return idb.IDBObjectStore.create_index.cljs$core$IFn$_invoke$arity$variadic(G__52661,seq52660__$1);
});

/**
 * Method.
 * 
 *   An `idb.IDBRequest` object on which subsequent events related
 *   this operation are fired. The request.result attribute is set
 *   undefined.
 * 
 *   `var request = objectStore.delete(Key);
 * 
 *   var request = objectStore.delete(KeyRange);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete`
 */
idb.IDBObjectStore.delete$ = (function idb$IDBObjectStore$delete(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52667 = arguments.length;
var i__42557__auto___52668 = (0);
while(true){
if((i__42557__auto___52668 < len__42556__auto___52667)){
args__42563__auto__.push((arguments[i__42557__auto___52668]));

var G__52669 = (i__42557__auto___52668 + (1));
i__42557__auto___52668 = G__52669;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.delete,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.delete$.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.delete$.cljs$lang$applyTo = (function (seq52665){
var G__52666 = cljs.core.first.call(null,seq52665);
var seq52665__$1 = cljs.core.next.call(null,seq52665);
return idb.IDBObjectStore.delete$.cljs$core$IFn$_invoke$arity$variadic(G__52666,seq52665__$1);
});

/**
 * Method.
 * 
 *   Note that this method must be called only from a VersionChange
 *   mode callback. Note that this method synchronously modifies the
 *   property.
 * 
 *   `objectStore.deleteIndex(indexName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/deleteIndex`
 */
idb.IDBObjectStore.delete_index = (function idb$IDBObjectStore$delete_index(this$,index_name){
return this$.deleteIndex(index_name);
});
/**
 * Method.
 * 
 *   If a value is successfully found, then a structured clone of
 *   is created and set as the result of the request object.
 * 
 *   `var request = objectStore.get(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/get`
 */
idb.IDBObjectStore.get = (function idb$IDBObjectStore$get(this$,key){
return this$.get(key);
});
/**
 * Method.
 * 
 *   If a value is successfully found, then a structured clone of
 *   is created and set as the result of the request object.
 * 
 *   `var request = objectStore.getAll();
 *   var request = objectStore.getAll(query);
 *   var request = objectStore.getAll(query, count);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll`
 */
idb.IDBObjectStore.get_all = (function idb$IDBObjectStore$get_all(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52672 = arguments.length;
var i__42557__auto___52673 = (0);
while(true){
if((i__42557__auto___52673 < len__42556__auto___52672)){
args__42563__auto__.push((arguments[i__42557__auto___52673]));

var G__52674 = (i__42557__auto___52673 + (1));
i__42557__auto___52673 = G__52674;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.get_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.get_all.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.get_all.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.get_all.cljs$lang$applyTo = (function (seq52670){
var G__52671 = cljs.core.first.call(null,seq52670);
var seq52670__$1 = cljs.core.next.call(null,seq52670);
return idb.IDBObjectStore.get_all.cljs$core$IFn$_invoke$arity$variadic(G__52671,seq52670__$1);
});

/**
 * Method.
 * 
 *   If a value is successfully found, then a structured clone of
 *   is created and set as the result of the request object.
 * 
 *   `var request = objectStore.getAllKeys();
 *   var request = objectStore.getAllKeys(query);
 *   var request = objectStore.getAllKeys(query, count);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAllKeys`
 */
idb.IDBObjectStore.get_all_keys = (function idb$IDBObjectStore$get_all_keys(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52677 = arguments.length;
var i__42557__auto___52678 = (0);
while(true){
if((i__42557__auto___52678 < len__42556__auto___52677)){
args__42563__auto__.push((arguments[i__42557__auto___52678]));

var G__52679 = (i__42557__auto___52678 + (1));
i__42557__auto___52678 = G__52679;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.get_all_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.get_all_keys.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAllKeys,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.get_all_keys.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.get_all_keys.cljs$lang$applyTo = (function (seq52675){
var G__52676 = cljs.core.first.call(null,seq52675);
var seq52675__$1 = cljs.core.next.call(null,seq52675);
return idb.IDBObjectStore.get_all_keys.cljs$core$IFn$_invoke$arity$variadic(G__52676,seq52675__$1);
});

/**
 * Method.
 * 
 *   If a key is successfully found, then a structured clone of it
 *   created and set as the result of the request object.
 * 
 *   `var request = objectStore.getKey(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getKey`
 */
idb.IDBObjectStore.get_key = (function idb$IDBObjectStore$get_key(this$,key){
return this$.getKey(key);
});
/**
 * Method.
 * 
 *   An `idb.IDBIndex` object for accessing the index.
 * 
 *   `var index = objectStore.index(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/index`
 */
idb.IDBObjectStore.index = (function idb$IDBObjectStore$index(this$,name){
return this$.index(name);
});
/**
 * Method.
 * 
 *   To determine if the add operation has completed successfully,
 *   for the results’s success event.
 * 
 *   `var request = ObjectStore.openCursor();
 *   var request = ObjectStore.openCursor(query);
 *   var request = ObjectStore.openCursor(query, direction);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openCursor`
 */
idb.IDBObjectStore.open_cursor = (function idb$IDBObjectStore$open_cursor(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52682 = arguments.length;
var i__42557__auto___52683 = (0);
while(true){
if((i__42557__auto___52683 < len__42556__auto___52682)){
args__42563__auto__.push((arguments[i__42557__auto___52683]));

var G__52684 = (i__42557__auto___52683 + (1));
i__42557__auto___52683 = G__52684;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.open_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.open_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openCursor,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.open_cursor.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.open_cursor.cljs$lang$applyTo = (function (seq52680){
var G__52681 = cljs.core.first.call(null,seq52680);
var seq52680__$1 = cljs.core.next.call(null,seq52680);
return idb.IDBObjectStore.open_cursor.cljs$core$IFn$_invoke$arity$variadic(G__52681,seq52680__$1);
});

/**
 * Method.
 * 
 *   To determine if the add operation has completed successfully,
 *   for the results’s success event.
 * 
 *   `var request = objectStore.openKeyCursor();
 *   var request = objectStore.openKeyCursor(query);
 *   var request = objectStore.openKeyCursor(query, direction);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openKeyCursor`
 */
idb.IDBObjectStore.open_key_cursor = (function idb$IDBObjectStore$open_key_cursor(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52687 = arguments.length;
var i__42557__auto___52688 = (0);
while(true){
if((i__42557__auto___52688 < len__42556__auto___52687)){
args__42563__auto__.push((arguments[i__42557__auto___52688]));

var G__52689 = (i__42557__auto___52688 + (1));
i__42557__auto___52688 = G__52689;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.open_key_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.open_key_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openKeyCursor,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.open_key_cursor.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.open_key_cursor.cljs$lang$applyTo = (function (seq52685){
var G__52686 = cljs.core.first.call(null,seq52685);
var seq52685__$1 = cljs.core.next.call(null,seq52685);
return idb.IDBObjectStore.open_key_cursor.cljs$core$IFn$_invoke$arity$variadic(G__52686,seq52685__$1);
});

/**
 * Method.
 * 
 *   The put method is an update or insert method. See the `idb.IDBObjectStore.add`
 *   for an insert only method.
 * 
 *   `var request = objectStore.put(item);
 *   var request = objectStore.put(item, key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/put`
 */
idb.IDBObjectStore.put = (function idb$IDBObjectStore$put(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52692 = arguments.length;
var i__42557__auto___52693 = (0);
while(true){
if((i__42557__auto___52693 < len__42556__auto___52692)){
args__42563__auto__.push((arguments[i__42557__auto___52693]));

var G__52694 = (i__42557__auto___52693 + (1));
i__42557__auto___52693 = G__52694;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBObjectStore.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBObjectStore.put.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.put,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBObjectStore.put.cljs$lang$maxFixedArity = (1);

idb.IDBObjectStore.put.cljs$lang$applyTo = (function (seq52690){
var G__52691 = cljs.core.first.call(null,seq52690);
var seq52690__$1 = cljs.core.next.call(null,seq52690);
return idb.IDBObjectStore.put.cljs$core$IFn$_invoke$arity$variadic(G__52691,seq52690__$1);
});

/**
 * Property.
 * 
 *   A `web.Boolean`:
 * 
 *   `var myAutoIncrement = objectStore.autoIncrement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/autoIncrement`
 */
idb.IDBObjectStore.auto_increment = (function idb$IDBObjectStore$auto_increment(this$){
return this$.autoIncrement();
});
/**
 * Property.
 * 
 *   A `web.Boolean`:
 * 
 *   `var myAutoIncrement = objectStore.autoIncrement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/autoIncrement`
 */
idb.IDBObjectStore.set_auto_increment_BANG_ = (function idb$IDBObjectStore$set_auto_increment_BANG_(this$,val){
return (this$["autoIncrement"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMStringList`.
 * 
 *   `var myindexNames = objectStore.indexNames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/indexNames`
 */
idb.IDBObjectStore.index_names = (function idb$IDBObjectStore$index_names(this$){
return this$.indexNames();
});
/**
 * Property.
 * 
 *   A `dom.DOMStringList`.
 * 
 *   `var myindexNames = objectStore.indexNames;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/indexNames`
 */
idb.IDBObjectStore.set_index_names_BANG_ = (function idb$IDBObjectStore$set_index_names_BANG_(this$,val){
return (this$["indexNames"] = val);
});
/**
 * Property.
 * 
 *   If this property is null, the application must provide a key
 *   each modification operation.
 * 
 *   `var mykeyPath = objectStore.keyPath;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/keyPath`
 */
idb.IDBObjectStore.key_path = (function idb$IDBObjectStore$key_path(this$){
return this$.keyPath();
});
/**
 * Property.
 * 
 *   If this property is null, the application must provide a key
 *   each modification operation.
 * 
 *   `var mykeyPath = objectStore.keyPath;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/keyPath`
 */
idb.IDBObjectStore.set_key_path_BANG_ = (function idb$IDBObjectStore$set_key_path_BANG_(this$,val){
return (this$["keyPath"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMString` containing the object store's name.
 * 
 *   `IDBObjectStore.name = myNewName;
 *   var myObjectStoreName = IDBObjectStore.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/name`
 */
idb.IDBObjectStore.name = (function idb$IDBObjectStore$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   A `dom.DOMString` containing the object store's name.
 * 
 *   `IDBObjectStore.name = myNewName;
 *   var myObjectStoreName = IDBObjectStore.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/name`
 */
idb.IDBObjectStore.set_name_BANG_ = (function idb$IDBObjectStore$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   An `idb.IDBTransaction` object.
 * 
 *   `var myTransaction = objectStore.transaction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/transaction`
 */
idb.IDBObjectStore.transaction = (function idb$IDBObjectStore$transaction(this$){
return this$.transaction();
});
/**
 * Property.
 * 
 *   An `idb.IDBTransaction` object.
 * 
 *   `var myTransaction = objectStore.transaction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/transaction`
 */
idb.IDBObjectStore.set_transaction_BANG_ = (function idb$IDBObjectStore$set_transaction_BANG_(this$,val){
return (this$["transaction"] = val);
});

//# sourceMappingURL=IDBObjectStore.js.map?rel=1565798857517
