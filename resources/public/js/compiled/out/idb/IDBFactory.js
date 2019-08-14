// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBFactory');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   An integer that indicates the result of the comparison; the table
 *   lists the possible values and their meanings:
 * 
 *   `var result = indexedDB.cmp(first, second);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/cmp`
 */
idb.IDBFactory.cmp = (function idb$IDBFactory$cmp(this$,first,second){
return this$.cmp(first,second);
});
/**
 * Method.
 * 
 *   The databases method of the `idb.IDBFactory` interface returns
 *   list represening all the available databases, including their
 *   and versions.
 * 
 *   `const promise = indexedDB.databases()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/databases`
 */
idb.IDBFactory.databases = (function idb$IDBFactory$databases(this$){
return this$.databases();
});
/**
 * Method.
 * 
 *   The deleteDatabase() method of the `idb.IDBFactory` interface
 *   the deletion of a database. The method returns an `idb.IDBOpenDBRequest`
 *   immediately, and performs the deletion operation asynchronously.
 * 
 *   `For the current standard:
 * 
 * 
 * 
 *   var request = indexedDB.deleteDatabase(name);
 * 
 *   For the experimental version with options (see below):
 * 
 * 
 * 
 *   var request = indexedDB.deleteDatabase(name, options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/deleteDatabase`
 */
idb.IDBFactory.delete_database = (function idb$IDBFactory$delete_database(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50228 = arguments.length;
var i__42557__auto___50229 = (0);
while(true){
if((i__42557__auto___50229 < len__42556__auto___50228)){
args__42563__auto__.push((arguments[i__42557__auto___50229]));

var G__50230 = (i__42557__auto___50229 + (1));
i__42557__auto___50229 = G__50230;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBFactory.delete_database.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBFactory.delete_database.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.deleteDatabase,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBFactory.delete_database.cljs$lang$maxFixedArity = (1);

idb.IDBFactory.delete_database.cljs$lang$applyTo = (function (seq50226){
var G__50227 = cljs.core.first.call(null,seq50226);
var seq50226__$1 = cljs.core.next.call(null,seq50226);
return idb.IDBFactory.delete_database.cljs$core$IFn$_invoke$arity$variadic(G__50227,seq50226__$1);
});

/**
 * Method.
 * 
 *   If an error occurs while the database connection is being opened,
 *   an error event is fired on the request object returned from this
 * 
 *   `For the current standard:
 * 
 * 
 * 
 *   var IDBOpenDBRequest = indexedDB.open(name);
 *   var IDBOpenDBRequest = indexedDB.open(name, version);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open`
 */
idb.IDBFactory.open = (function idb$IDBFactory$open(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50233 = arguments.length;
var i__42557__auto___50234 = (0);
while(true){
if((i__42557__auto___50234 < len__42556__auto___50233)){
args__42563__auto__.push((arguments[i__42557__auto___50234]));

var G__50235 = (i__42557__auto___50234 + (1));
i__42557__auto___50234 = G__50235;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBFactory.open.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBFactory.open.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.open,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBFactory.open.cljs$lang$maxFixedArity = (1);

idb.IDBFactory.open.cljs$lang$applyTo = (function (seq50231){
var G__50232 = cljs.core.first.call(null,seq50231);
var seq50231__$1 = cljs.core.next.call(null,seq50231);
return idb.IDBFactory.open.cljs$core$IFn$_invoke$arity$variadic(G__50232,seq50231__$1);
});


//# sourceMappingURL=IDBFactory.js.map?rel=1565798837136
