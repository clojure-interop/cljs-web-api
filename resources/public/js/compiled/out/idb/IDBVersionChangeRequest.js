// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBVersionChangeRequest');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   For older WebKit browsers, call this method before creating or
 *   an object store.
 * 
 *   `IDBVersionChangeRequest setVersion ([TreatNullAs=EmptyString] in DOMString version);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion`
 */
idb.IDBVersionChangeRequest.set_version = (function idb$IDBVersionChangeRequest$set_version(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52826 = arguments.length;
var i__42557__auto___52827 = (0);
while(true){
if((i__42557__auto___52827 < len__42556__auto___52826)){
args__42563__auto__.push((arguments[i__42557__auto___52827]));

var G__52828 = (i__42557__auto___52827 + (1));
i__42557__auto___52827 = G__52828;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return idb.IDBVersionChangeRequest.set_version.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

idb.IDBVersionChangeRequest.set_version.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setVersion,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

idb.IDBVersionChangeRequest.set_version.cljs$lang$maxFixedArity = (1);

idb.IDBVersionChangeRequest.set_version.cljs$lang$applyTo = (function (seq52824){
var G__52825 = cljs.core.first.call(null,seq52824);
var seq52824__$1 = cljs.core.next.call(null,seq52824);
return idb.IDBVersionChangeRequest.set_version.cljs$core$IFn$_invoke$arity$variadic(G__52825,seq52824__$1);
});


//# sourceMappingURL=IDBVersionChangeRequest.js.map?rel=1565798859621
