// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.LockManager');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The query() method of the `web.LockManager` interface returns
 *   `web.Promise` which resolves with an object containing information
 *   held and pending locks.
 * 
 *   `var promise<LockManagerSnapshot> = LockManager.query()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockManager/query`
 */
web.LockManager.query = (function web$LockManager$query(this$){
return this$.query();
});
/**
 * Method.
 * 
 *   The request() method of the `web.LockManager` interface requests
 *   `web.Lock` object with parameters specifying its name and characteristics.
 *   requested Lock is passed to a callback, while the function itself
 *   a `web.Promise` that resolves with `web.undefined`.
 * 
 *   `LockManager.request(var promise = name[, {options}], callback)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`
 */
web.LockManager.request = (function web$LockManager$request(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52898 = arguments.length;
var i__42557__auto___52899 = (0);
while(true){
if((i__42557__auto___52899 < len__42556__auto___52898)){
args__42563__auto__.push((arguments[i__42557__auto___52899]));

var G__52900 = (i__42557__auto___52899 + (1));
i__42557__auto___52899 = G__52900;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.LockManager.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.LockManager.request.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.request,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.LockManager.request.cljs$lang$maxFixedArity = (1);

web.LockManager.request.cljs$lang$applyTo = (function (seq52896){
var G__52897 = cljs.core.first.call(null,seq52896);
var seq52896__$1 = cljs.core.next.call(null,seq52896);
return web.LockManager.request.cljs$core$IFn$_invoke$arity$variadic(G__52897,seq52896__$1);
});


//# sourceMappingURL=LockManager.js.map?rel=1565798860337
