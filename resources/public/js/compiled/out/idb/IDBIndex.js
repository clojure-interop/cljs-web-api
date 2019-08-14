// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBIndex');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   A `idb.IDBRequest` object on which subsequent events related
 *   this operation are fired.
 * 
 *   `var request = myIndex.count();
 *   var request = myIndex.count(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/count`
 */
idb.IDBIndex.count = (function idb$IDBIndex$count(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52623 = arguments.length;
var i__42557__auto___52624 = (0);
while(true){
if((i__42557__auto___52624 < len__42556__auto___52623)){
args__42563__auto__.push((arguments[i__42557__auto___52624]));

var G__52625 = (i__42557__auto___52624 + (1));
i__42557__auto___52624 = G__52625;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBIndex.count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBIndex.count.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.count,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBIndex.count.cljs$lang$maxFixedArity = (1);

idb.IDBIndex.count.cljs$lang$applyTo = (function (seq52621){
var G__52622 = cljs.core.first.call(null,seq52621);
var seq52621__$1 = cljs.core.next.call(null,seq52621);
return idb.IDBIndex.count.cljs$core$IFn$_invoke$arity$variadic(G__52622,seq52621__$1);
});

/**
 * Method.
 * 
 *   If a value is found, then a structured clone of it is created
 *   set as the result of the request object: this returns the record
 *   key is associated with.
 * 
 *   `var request = myIndex.get(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/get`
 */
idb.IDBIndex.get = (function idb$IDBIndex$get(this$,key){
return this$.get(key);
});
/**
 * Method.
 * 
 *   There is a performance cost associated with looking at the value
 *   of a cursor, because the object is created lazily. To use a feature
 *   getAll(), the browser has to create all the objects at once.
 *   you are just interested in looking at each of the keys, for instance,
 *   is more efficient to use a cursor. If you are trying to get an
 *   of all the objects in an object store, though, you should use
 * 
 *   `var getAllKeysRequest = IDBIndex.getAll();
 *   var getAllKeysRequest = IDBIndex.getAll(query);
 *   var getAllKeysRequest = IDBIndex.getAll(query, count);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/getAll`
 */
idb.IDBIndex.get_all = (function idb$IDBIndex$get_all(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52628 = arguments.length;
var i__42557__auto___52629 = (0);
while(true){
if((i__42557__auto___52629 < len__42556__auto___52628)){
args__42563__auto__.push((arguments[i__42557__auto___52629]));

var G__52630 = (i__42557__auto___52629 + (1));
i__42557__auto___52629 = G__52630;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBIndex.get_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBIndex.get_all.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBIndex.get_all.cljs$lang$maxFixedArity = (1);

idb.IDBIndex.get_all.cljs$lang$applyTo = (function (seq52626){
var G__52627 = cljs.core.first.call(null,seq52626);
var seq52626__$1 = cljs.core.next.call(null,seq52626);
return idb.IDBIndex.get_all.cljs$core$IFn$_invoke$arity$variadic(G__52627,seq52626__$1);
});

/**
 * Method.
 * 
 *   An `idb.IDBRequest` object on which subsequent events related
 *   this operation are fired.
 * 
 *   `var allKeysRequest = IDBIndex.getAllKeys();
 *   var allKeysRequest = IDBIndex.getAllKeys(query);
 *   var allKeysRequest = IDBIndex.getAllKeys(query, count);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/getAllKeys`
 */
idb.IDBIndex.get_all_keys = (function idb$IDBIndex$get_all_keys(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52633 = arguments.length;
var i__42557__auto___52634 = (0);
while(true){
if((i__42557__auto___52634 < len__42556__auto___52633)){
args__42563__auto__.push((arguments[i__42557__auto___52634]));

var G__52635 = (i__42557__auto___52634 + (1));
i__42557__auto___52634 = G__52635;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBIndex.get_all_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBIndex.get_all_keys.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getAllKeys,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBIndex.get_all_keys.cljs$lang$maxFixedArity = (1);

idb.IDBIndex.get_all_keys.cljs$lang$applyTo = (function (seq52631){
var G__52632 = cljs.core.first.call(null,seq52631);
var seq52631__$1 = cljs.core.next.call(null,seq52631);
return idb.IDBIndex.get_all_keys.cljs$core$IFn$_invoke$arity$variadic(G__52632,seq52631__$1);
});

/**
 * Method.
 * 
 *   If a key is found it is set as the result of the request object:
 *   returns the primary key of the record the key is associated with,
 *   the whole record as `idb.IDBIndex.get` does.
 * 
 *   `var request = myIndex.getKey(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/getKey`
 */
idb.IDBIndex.get_key = (function idb$IDBIndex$get_key(this$,key){
return this$.getKey(key);
});
/**
 * Method.
 * 
 *   The method sets the position of the cursor to the appropriate
 *   based on the specified direction.
 * 
 *   `var request = myIndex.openCursor();
 *   var request = myIndex.openCursor(range);
 *   var request = myIndex.openCursor(range, direction);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/openCursor`
 */
idb.IDBIndex.open_cursor = (function idb$IDBIndex$open_cursor(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52638 = arguments.length;
var i__42557__auto___52639 = (0);
while(true){
if((i__42557__auto___52639 < len__42556__auto___52638)){
args__42563__auto__.push((arguments[i__42557__auto___52639]));

var G__52640 = (i__42557__auto___52639 + (1));
i__42557__auto___52639 = G__52640;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBIndex.open_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBIndex.open_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openCursor,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBIndex.open_cursor.cljs$lang$maxFixedArity = (1);

idb.IDBIndex.open_cursor.cljs$lang$applyTo = (function (seq52636){
var G__52637 = cljs.core.first.call(null,seq52636);
var seq52636__$1 = cljs.core.next.call(null,seq52636);
return idb.IDBIndex.open_cursor.cljs$core$IFn$_invoke$arity$variadic(G__52637,seq52636__$1);
});

/**
 * Method.
 * 
 *   The method sets the position of the cursor to the appropriate
 *   based on the specified direction.
 * 
 *   `var request = myIndex.openKeyCursor();
 *   var request = myIndex.openKeyCursor(range);
 *   var request = myIndex.openKeyCursor(range, direction);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/openKeyCursor`
 */
idb.IDBIndex.open_key_cursor = (function idb$IDBIndex$open_key_cursor(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52643 = arguments.length;
var i__42557__auto___52644 = (0);
while(true){
if((i__42557__auto___52644 < len__42556__auto___52643)){
args__42563__auto__.push((arguments[i__42557__auto___52644]));

var G__52645 = (i__42557__auto___52644 + (1));
i__42557__auto___52644 = G__52645;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBIndex.open_key_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBIndex.open_key_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openKeyCursor,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBIndex.open_key_cursor.cljs$lang$maxFixedArity = (1);

idb.IDBIndex.open_key_cursor.cljs$lang$applyTo = (function (seq52641){
var G__52642 = cljs.core.first.call(null,seq52641);
var seq52641__$1 = cljs.core.next.call(null,seq52641);
return idb.IDBIndex.open_key_cursor.cljs$core$IFn$_invoke$arity$variadic(G__52642,seq52641__$1);
});

/**
 * Property.
 * 
 *   The isAutoLocale read-only property of the `idb.IDBIndex` interface
 *   a `web.Boolean` indicating whether the index had a locale value
 *   auto specified upon its creation (see createIndex()'s optionalParameters.)
 * 
 *   `var myIndex = objectStore.index('index');
 *   console.log(myIndex.isAutoLocale);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/isAutoLocale`
 */
idb.IDBIndex.is_auto_locale = (function idb$IDBIndex$is_auto_locale(this$){
return this$.isAutoLocale();
});
/**
 * Property.
 * 
 *   The isAutoLocale read-only property of the `idb.IDBIndex` interface
 *   a `web.Boolean` indicating whether the index had a locale value
 *   auto specified upon its creation (see createIndex()'s optionalParameters.)
 * 
 *   `var myIndex = objectStore.index('index');
 *   console.log(myIndex.isAutoLocale);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/isAutoLocale`
 */
idb.IDBIndex.set_is_auto_locale_BANG_ = (function idb$IDBIndex$set_is_auto_locale_BANG_(this$,val){
return (this$["isAutoLocale"] = val);
});
/**
 * Property.
 * 
 *   Any data type that can be used as a key path.
 * 
 *   `var myKeyPath = myIndex.keyPath;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/keyPath`
 */
idb.IDBIndex.key_path = (function idb$IDBIndex$key_path(this$){
return this$.keyPath();
});
/**
 * Property.
 * 
 *   Any data type that can be used as a key path.
 * 
 *   `var myKeyPath = myIndex.keyPath;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/keyPath`
 */
idb.IDBIndex.set_key_path_BANG_ = (function idb$IDBIndex$set_key_path_BANG_(this$,val){
return (this$["keyPath"] = val);
});
/**
 * Property.
 * 
 *   The locale read-only property of the `idb.IDBIndex` interface
 *   the locale of the index (for example en-US, or pl) if it had
 *   locale value specified upon its creation (see createIndex()'s
 *   Note that this property always returns the current locale being
 *   in this index, in other words, it never returns \"auto\".
 * 
 *   `var myIndex = objectStore.index('index');
 *   console.log(myIndex.locale);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/locale`
 */
idb.IDBIndex.locale = (function idb$IDBIndex$locale(this$){
return this$.locale();
});
/**
 * Property.
 * 
 *   The locale read-only property of the `idb.IDBIndex` interface
 *   the locale of the index (for example en-US, or pl) if it had
 *   locale value specified upon its creation (see createIndex()'s
 *   Note that this property always returns the current locale being
 *   in this index, in other words, it never returns \"auto\".
 * 
 *   `var myIndex = objectStore.index('index');
 *   console.log(myIndex.locale);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/locale`
 */
idb.IDBIndex.set_locale_BANG_ = (function idb$IDBIndex$set_locale_BANG_(this$,val){
return (this$["locale"] = val);
});
/**
 * Property.
 * 
 *   A `web.Boolean`:
 * 
 *   `var isMultiEntry = myIndex.multiEntry;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/multiEntry`
 */
idb.IDBIndex.multi_entry = (function idb$IDBIndex$multi_entry(this$){
return this$.multiEntry();
});
/**
 * Property.
 * 
 *   A `web.Boolean`:
 * 
 *   `var isMultiEntry = myIndex.multiEntry;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/multiEntry`
 */
idb.IDBIndex.set_multi_entry_BANG_ = (function idb$IDBIndex$set_multi_entry_BANG_(this$,val){
return (this$["multiEntry"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMString` specifying a name for the index.
 * 
 *   `var indexName = IDBIndex.name;
 *   IDBIndex.name = indexName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/name`
 */
idb.IDBIndex.name = (function idb$IDBIndex$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   A `dom.DOMString` specifying a name for the index.
 * 
 *   `var indexName = IDBIndex.name;
 *   IDBIndex.name = indexName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/name`
 */
idb.IDBIndex.set_name_BANG_ = (function idb$IDBIndex$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   An `idb.IDBObjectStore`.
 * 
 *   `var myIDBObjectStore = myIndex.objectStore;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/objectStore`
 */
idb.IDBIndex.object_store = (function idb$IDBIndex$object_store(this$){
return this$.objectStore();
});
/**
 * Property.
 * 
 *   An `idb.IDBObjectStore`.
 * 
 *   `var myIDBObjectStore = myIndex.objectStore;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/objectStore`
 */
idb.IDBIndex.set_object_store_BANG_ = (function idb$IDBIndex$set_object_store_BANG_(this$,val){
return (this$["objectStore"] = val);
});
/**
 * Property.
 * 
 *   A `web.Boolean`:
 * 
 *   `var isUnique = IDBIndex.unique;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/unique`
 */
idb.IDBIndex.unique = (function idb$IDBIndex$unique(this$){
return this$.unique();
});
/**
 * Property.
 * 
 *   A `web.Boolean`:
 * 
 *   `var isUnique = IDBIndex.unique;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex/unique`
 */
idb.IDBIndex.set_unique_BANG_ = (function idb$IDBIndex$set_unique_BANG_(this$,val){
return (this$["unique"] = val);
});

//# sourceMappingURL=IDBIndex.js.map?rel=1565798857202
