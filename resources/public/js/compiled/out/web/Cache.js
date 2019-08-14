// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Cache');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The add() method of the `web.Cache` interface takes a URL, retrieves
 *   and adds the resulting response object to the given cache.
 * 
 *   `cache.add(request).then(function() {
 *   // request has been added to the cache
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/add`
 */
web.Cache.add = (function web$Cache$add(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43967 = arguments.length;
var i__42557__auto___43968 = (0);
while(true){
if((i__42557__auto___43968 < len__42556__auto___43967)){
args__42563__auto__.push((arguments[i__42557__auto___43968]));

var G__43969 = (i__42557__auto___43968 + (1));
i__42557__auto___43968 = G__43969;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.add.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.add,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.add.cljs$lang$maxFixedArity = (1);

web.Cache.add.cljs$lang$applyTo = (function (seq43965){
var G__43966 = cljs.core.first.call(null,seq43965);
var seq43965__$1 = cljs.core.next.call(null,seq43965);
return web.Cache.add.cljs$core$IFn$_invoke$arity$variadic(G__43966,seq43965__$1);
});

/**
 * Method.
 * 
 *   The addAll() method of the `web.Cache` interface takes an array
 *   URLs, retrieves them, and adds the resulting response objects
 *   the given cache. The request objects created during retrieval
 *   keys to the stored response operations.
 * 
 *   `cache.addAll(requests[]).then(function() {
 *   // requests have been added to the cache
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll`
 */
web.Cache.add_all = (function web$Cache$add_all(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43972 = arguments.length;
var i__42557__auto___43973 = (0);
while(true){
if((i__42557__auto___43973 < len__42556__auto___43972)){
args__42563__auto__.push((arguments[i__42557__auto___43973]));

var G__43974 = (i__42557__auto___43973 + (1));
i__42557__auto___43973 = G__43974;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.add_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.add_all.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addAll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.add_all.cljs$lang$maxFixedArity = (1);

web.Cache.add_all.cljs$lang$applyTo = (function (seq43970){
var G__43971 = cljs.core.first.call(null,seq43970);
var seq43970__$1 = cljs.core.next.call(null,seq43970);
return web.Cache.add_all.cljs$core$IFn$_invoke$arity$variadic(G__43971,seq43970__$1);
});

/**
 * Method.
 * 
 *   The delete() method of the `web.Cache` interface finds the `web.Cache`
 *   whose key is the request, and if found, deletes the `web.Cache`
 *   and returns a `web.Promise` that resolves to true. If no `web.Cache`
 *   is found, it resolves to false.
 * 
 *   `cache.delete(request,{options}).then(function(true) {
 *   //your cache entry has been deleted
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete`
 */
web.Cache.delete$ = (function web$Cache$delete(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43977 = arguments.length;
var i__42557__auto___43978 = (0);
while(true){
if((i__42557__auto___43978 < len__42556__auto___43977)){
args__42563__auto__.push((arguments[i__42557__auto___43978]));

var G__43979 = (i__42557__auto___43978 + (1));
i__42557__auto___43978 = G__43979;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.delete,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.delete$.cljs$lang$maxFixedArity = (1);

web.Cache.delete$.cljs$lang$applyTo = (function (seq43975){
var G__43976 = cljs.core.first.call(null,seq43975);
var seq43975__$1 = cljs.core.next.call(null,seq43975);
return web.Cache.delete$.cljs$core$IFn$_invoke$arity$variadic(G__43976,seq43975__$1);
});

/**
 * Method.
 * 
 *   The keys() method of the `web.Cache` interface returns a `web.Promise`
 *   resolves to an array of `web.Cache` keys.
 * 
 *   `cache.keys(request,{options}).then(function(keys) {
 *   //do something with your array of requests
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/keys`
 */
web.Cache.keys = (function web$Cache$keys(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43982 = arguments.length;
var i__42557__auto___43983 = (0);
while(true){
if((i__42557__auto___43983 < len__42556__auto___43982)){
args__42563__auto__.push((arguments[i__42557__auto___43983]));

var G__43984 = (i__42557__auto___43983 + (1));
i__42557__auto___43983 = G__43984;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.keys.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.keys,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.keys.cljs$lang$maxFixedArity = (1);

web.Cache.keys.cljs$lang$applyTo = (function (seq43980){
var G__43981 = cljs.core.first.call(null,seq43980);
var seq43980__$1 = cljs.core.next.call(null,seq43980);
return web.Cache.keys.cljs$core$IFn$_invoke$arity$variadic(G__43981,seq43980__$1);
});

/**
 * Method.
 * 
 *   The match() method of the `web.Cache` interface returns a `web.Promise`
 *   resolves to the `web.Response` associated with the first matching
 *   in the `web.Cache` object. If no match is found, the `web.Promise`
 *   to `web.undefined`.
 * 
 *   `cache.match(request, {options}).then(function(response) {
 *   // Do something with the response
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/match`
 */
web.Cache.match = (function web$Cache$match(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43987 = arguments.length;
var i__42557__auto___43988 = (0);
while(true){
if((i__42557__auto___43988 < len__42556__auto___43987)){
args__42563__auto__.push((arguments[i__42557__auto___43988]));

var G__43989 = (i__42557__auto___43988 + (1));
i__42557__auto___43988 = G__43989;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.match.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.match,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.match.cljs$lang$maxFixedArity = (1);

web.Cache.match.cljs$lang$applyTo = (function (seq43985){
var G__43986 = cljs.core.first.call(null,seq43985);
var seq43985__$1 = cljs.core.next.call(null,seq43985);
return web.Cache.match.cljs$core$IFn$_invoke$arity$variadic(G__43986,seq43985__$1);
});

/**
 * Method.
 * 
 *   The matchAll() method of the `web.Cache` interface returns a
 *   that resolves to an array of all matching responses in the `web.Cache`
 * 
 *   `cache.matchAll(request,{options}).then(function(response) {
 *   //do something with the response array
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/matchAll`
 */
web.Cache.match_all = (function web$Cache$match_all(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43992 = arguments.length;
var i__42557__auto___43993 = (0);
while(true){
if((i__42557__auto___43993 < len__42556__auto___43992)){
args__42563__auto__.push((arguments[i__42557__auto___43993]));

var G__43994 = (i__42557__auto___43993 + (1));
i__42557__auto___43993 = G__43994;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.match_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.match_all.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.matchAll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.match_all.cljs$lang$maxFixedArity = (1);

web.Cache.match_all.cljs$lang$applyTo = (function (seq43990){
var G__43991 = cljs.core.first.call(null,seq43990);
var seq43990__$1 = cljs.core.next.call(null,seq43990);
return web.Cache.match_all.cljs$core$IFn$_invoke$arity$variadic(G__43991,seq43990__$1);
});

/**
 * Method.
 * 
 *   The put() method of the `web.Cache` interface allows key/value
 *   to be added to the current `web.Cache` object.
 * 
 *   `cache.put(request, response).then(function() {
 *   // request/response pair has been added to the cache
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/put`
 */
web.Cache.put = (function web$Cache$put(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43997 = arguments.length;
var i__42557__auto___43998 = (0);
while(true){
if((i__42557__auto___43998 < len__42556__auto___43997)){
args__42563__auto__.push((arguments[i__42557__auto___43998]));

var G__43999 = (i__42557__auto___43998 + (1));
i__42557__auto___43998 = G__43999;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Cache.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Cache.put.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.put,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Cache.put.cljs$lang$maxFixedArity = (1);

web.Cache.put.cljs$lang$applyTo = (function (seq43995){
var G__43996 = cljs.core.first.call(null,seq43995);
var seq43995__$1 = cljs.core.next.call(null,seq43995);
return web.Cache.put.cljs$core$IFn$_invoke$arity$variadic(G__43996,seq43995__$1);
});


//# sourceMappingURL=Cache.js.map?rel=1565798810810
