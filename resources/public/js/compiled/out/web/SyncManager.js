// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SyncManager');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The SyncManager.getTags method of the `web.SyncManager` interface
 *   a list of developer-defined identifiers for SyncManager registrations.
 * 
 *   `SyncManager.getTags().then(function(tags[]) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncManager/getTags`
 */
web.SyncManager.get_tags = (function web$SyncManager$get_tags(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53110 = arguments.length;
var i__42557__auto___53111 = (0);
while(true){
if((i__42557__auto___53111 < len__42556__auto___53110)){
args__42563__auto__.push((arguments[i__42557__auto___53111]));

var G__53112 = (i__42557__auto___53111 + (1));
i__42557__auto___53111 = G__53112;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SyncManager.get_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SyncManager.get_tags.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getTags,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SyncManager.get_tags.cljs$lang$maxFixedArity = (1);

web.SyncManager.get_tags.cljs$lang$applyTo = (function (seq53108){
var G__53109 = cljs.core.first.call(null,seq53108);
var seq53108__$1 = cljs.core.next.call(null,seq53108);
return web.SyncManager.get_tags.cljs$core$IFn$_invoke$arity$variadic(G__53109,seq53108__$1);
});

/**
 * Method.
 * 
 *   The SyncManager.register method of the `web.SyncManager` interface
 *   a `web.Promise` that resolves to a `web.SyncRegistration` instance.
 * 
 *   `SyncManager.register([options]).then(function(syncRegistration) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncManager/register`
 */
web.SyncManager.register = (function web$SyncManager$register(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53115 = arguments.length;
var i__42557__auto___53116 = (0);
while(true){
if((i__42557__auto___53116 < len__42556__auto___53115)){
args__42563__auto__.push((arguments[i__42557__auto___53116]));

var G__53117 = (i__42557__auto___53116 + (1));
i__42557__auto___53116 = G__53117;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.SyncManager.register.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.SyncManager.register.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.register,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.SyncManager.register.cljs$lang$maxFixedArity = (1);

web.SyncManager.register.cljs$lang$applyTo = (function (seq53113){
var G__53114 = cljs.core.first.call(null,seq53113);
var seq53113__$1 = cljs.core.next.call(null,seq53113);
return web.SyncManager.register.cljs$core$IFn$_invoke$arity$variadic(G__53114,seq53113__$1);
});


//# sourceMappingURL=SyncManager.js.map?rel=1565798862345
