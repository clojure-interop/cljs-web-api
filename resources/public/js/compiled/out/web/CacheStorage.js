// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CacheStorage');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The delete() method of the `web.CacheStorage` interface finds
 *   `web.Cache` object matching the cacheName, and if found, deletes
 *   `web.Cache` object and returns a `web.Promise` that resolves
 *   true. If no `web.Cache` object is found, it returns false.
 * 
 *   `caches.delete(cacheName).then(function(boolean) {
 *   // your cache is now deleted
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete`
 */
web.CacheStorage.delete$ = (function web$CacheStorage$delete(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53043 = arguments.length;
var i__42557__auto___53044 = (0);
while(true){
if((i__42557__auto___53044 < len__42556__auto___53043)){
args__42563__auto__.push((arguments[i__42557__auto___53044]));

var G__53045 = (i__42557__auto___53044 + (1));
i__42557__auto___53044 = G__53045;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CacheStorage.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CacheStorage.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.delete,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CacheStorage.delete$.cljs$lang$maxFixedArity = (1);

web.CacheStorage.delete$.cljs$lang$applyTo = (function (seq53041){
var G__53042 = cljs.core.first.call(null,seq53041);
var seq53041__$1 = cljs.core.next.call(null,seq53041);
return web.CacheStorage.delete$.cljs$core$IFn$_invoke$arity$variadic(G__53042,seq53041__$1);
});

/**
 * Method.
 * 
 *   The has() method of the `web.CacheStorage` interface returns
 *   `web.Promise` that resolves to true if a `web.Cache` object matches
 *   cacheName.
 * 
 *   `caches.has(cacheName).then(function(boolean) {
 *   // true: your cache exists!
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/has`
 */
web.CacheStorage.has = (function web$CacheStorage$has(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53048 = arguments.length;
var i__42557__auto___53049 = (0);
while(true){
if((i__42557__auto___53049 < len__42556__auto___53048)){
args__42563__auto__.push((arguments[i__42557__auto___53049]));

var G__53050 = (i__42557__auto___53049 + (1));
i__42557__auto___53049 = G__53050;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CacheStorage.has.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CacheStorage.has.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.has,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CacheStorage.has.cljs$lang$maxFixedArity = (1);

web.CacheStorage.has.cljs$lang$applyTo = (function (seq53046){
var G__53047 = cljs.core.first.call(null,seq53046);
var seq53046__$1 = cljs.core.next.call(null,seq53046);
return web.CacheStorage.has.cljs$core$IFn$_invoke$arity$variadic(G__53047,seq53046__$1);
});

/**
 * Method.
 * 
 *   The keys() method of the `web.CacheStorage` interface returns
 *   `web.Promise` that will resolve with an array containing strings
 *   to all of the named `web.Cache` objects tracked by the `web.CacheStorage`
 *   in the order they were created. Use this method to iterate over
 *   list of all `web.Cache` objects.
 * 
 *   `caches.keys().then(function(keyList) {
 *   //do something with your keyList
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/keys`
 */
web.CacheStorage.keys = (function web$CacheStorage$keys(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53053 = arguments.length;
var i__42557__auto___53054 = (0);
while(true){
if((i__42557__auto___53054 < len__42556__auto___53053)){
args__42563__auto__.push((arguments[i__42557__auto___53054]));

var G__53055 = (i__42557__auto___53054 + (1));
i__42557__auto___53054 = G__53055;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CacheStorage.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CacheStorage.keys.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.keys,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CacheStorage.keys.cljs$lang$maxFixedArity = (1);

web.CacheStorage.keys.cljs$lang$applyTo = (function (seq53051){
var G__53052 = cljs.core.first.call(null,seq53051);
var seq53051__$1 = cljs.core.next.call(null,seq53051);
return web.CacheStorage.keys.cljs$core$IFn$_invoke$arity$variadic(G__53052,seq53051__$1);
});

/**
 * Method.
 * 
 *   The match() method of the `web.CacheStorage` interface (available
 *   as caches) checks if a given `web.Request` or url string is a
 *   for a stored `web.Response`. This method returns a `web.Promise`
 *   a `web.Response`, or undefined if no match is found.
 * 
 *   `caches.match(request, options).then(function(response) {
 *   // Do something with the response
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/match`
 */
web.CacheStorage.match = (function web$CacheStorage$match(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53058 = arguments.length;
var i__42557__auto___53059 = (0);
while(true){
if((i__42557__auto___53059 < len__42556__auto___53058)){
args__42563__auto__.push((arguments[i__42557__auto___53059]));

var G__53060 = (i__42557__auto___53059 + (1));
i__42557__auto___53059 = G__53060;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CacheStorage.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CacheStorage.match.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.match,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CacheStorage.match.cljs$lang$maxFixedArity = (1);

web.CacheStorage.match.cljs$lang$applyTo = (function (seq53056){
var G__53057 = cljs.core.first.call(null,seq53056);
var seq53056__$1 = cljs.core.next.call(null,seq53056);
return web.CacheStorage.match.cljs$core$IFn$_invoke$arity$variadic(G__53057,seq53056__$1);
});

/**
 * Method.
 * 
 *   The open() method of the `web.CacheStorage` interface returns
 *   `web.Promise` that resolves to the `web.Cache` object matching
 *   cacheName.
 * 
 *   `// \"caches\" is a global read-only variable, which is an instance of CacheStorage,
 *   // For more info, refer to: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches
 * 
 *   caches.open(cacheName).then(function(cache) {
 *   // Do something with your cache
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open`
 */
web.CacheStorage.open = (function web$CacheStorage$open(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53063 = arguments.length;
var i__42557__auto___53064 = (0);
while(true){
if((i__42557__auto___53064 < len__42556__auto___53063)){
args__42563__auto__.push((arguments[i__42557__auto___53064]));

var G__53065 = (i__42557__auto___53064 + (1));
i__42557__auto___53064 = G__53065;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CacheStorage.open.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CacheStorage.open.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.open,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CacheStorage.open.cljs$lang$maxFixedArity = (1);

web.CacheStorage.open.cljs$lang$applyTo = (function (seq53061){
var G__53062 = cljs.core.first.call(null,seq53061);
var seq53061__$1 = cljs.core.next.call(null,seq53061);
return web.CacheStorage.open.cljs$core$IFn$_invoke$arity$variadic(G__53062,seq53061__$1);
});


//# sourceMappingURL=CacheStorage.js.map?rel=1565798861935
