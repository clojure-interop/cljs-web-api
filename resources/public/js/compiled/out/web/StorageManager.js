// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.StorageManager');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The estimate() method of the `web.StorageManager` interface asks
 *   Storage Manager to obtain quota and usage information for the
 *   origin. This method operates asynchronously, so it returns a
 *   which resolves once the information is available. The promise's
 *   handler receives as an input a `web.StorageEstimate` with the
 *   and quota data.
 * 
 *   `var estimatePromise = StorageManager.estimate();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate`
 */
web.StorageManager.estimate = (function web$StorageManager$estimate(this$){
return this$.estimate();
});
/**
 * Method.
 * 
 *   The persist() method of the `web.StorageManager` interface requests
 *   to use persistent storage, and returns a `web.Promise` that resolves
 *   true if permission is granted and box mode is persistent, and
 *   otherwise.
 * 
 *   `navigator.storage.persist().then(function(persistent) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist`
 */
web.StorageManager.persist = (function web$StorageManager$persist(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44034 = arguments.length;
var i__42557__auto___44035 = (0);
while(true){
if((i__42557__auto___44035 < len__42556__auto___44034)){
args__42563__auto__.push((arguments[i__42557__auto___44035]));

var G__44036 = (i__42557__auto___44035 + (1));
i__42557__auto___44035 = G__44036;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.StorageManager.persist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.StorageManager.persist.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.persist,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.StorageManager.persist.cljs$lang$maxFixedArity = (1);

web.StorageManager.persist.cljs$lang$applyTo = (function (seq44032){
var G__44033 = cljs.core.first.call(null,seq44032);
var seq44032__$1 = cljs.core.next.call(null,seq44032);
return web.StorageManager.persist.cljs$core$IFn$_invoke$arity$variadic(G__44033,seq44032__$1);
});

/**
 * Method.
 * 
 *   The persisted() method of the `web.StorageManager` interface
 *   a `web.Promise` that resolves to true if box mode is persistent
 *   your site's storage.
 * 
 *   `navigator.storage.persisted().then(function(persistent) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persisted`
 */
web.StorageManager.persisted = (function web$StorageManager$persisted(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44039 = arguments.length;
var i__42557__auto___44040 = (0);
while(true){
if((i__42557__auto___44040 < len__42556__auto___44039)){
args__42563__auto__.push((arguments[i__42557__auto___44040]));

var G__44041 = (i__42557__auto___44040 + (1));
i__42557__auto___44040 = G__44041;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.StorageManager.persisted.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.StorageManager.persisted.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.persisted,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.StorageManager.persisted.cljs$lang$maxFixedArity = (1);

web.StorageManager.persisted.cljs$lang$applyTo = (function (seq44037){
var G__44038 = cljs.core.first.call(null,seq44037);
var seq44037__$1 = cljs.core.next.call(null,seq44037);
return web.StorageManager.persisted.cljs$core$IFn$_invoke$arity$variadic(G__44038,seq44037__$1);
});


//# sourceMappingURL=StorageManager.js.map?rel=1565798811017
