// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.StorageQuota');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The queryInfo() property of the `web.StorageQuota` interface
 *   a `web.StorageInfo` object containting the current data usage
 *   available quota information for the application.
 * 
 *   `StorageQuota.queryInfo().then(function(storageInfo) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/queryInfo`
 */
web.StorageQuota.query_info = (function web$StorageQuota$query_info(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43948 = arguments.length;
var i__42557__auto___43949 = (0);
while(true){
if((i__42557__auto___43949 < len__42556__auto___43948)){
args__42563__auto__.push((arguments[i__42557__auto___43949]));

var G__43950 = (i__42557__auto___43949 + (1));
i__42557__auto___43949 = G__43950;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.StorageQuota.query_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.StorageQuota.query_info.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.queryInfo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.StorageQuota.query_info.cljs$lang$maxFixedArity = (1);

web.StorageQuota.query_info.cljs$lang$applyTo = (function (seq43946){
var G__43947 = cljs.core.first.call(null,seq43946);
var seq43946__$1 = cljs.core.next.call(null,seq43946);
return web.StorageQuota.query_info.cljs$core$IFn$_invoke$arity$variadic(G__43947,seq43946__$1);
});

/**
 * Method.
 * 
 *   The requestPersistentQuota() property of the `web.StorageQuota`
 *   requests persistent storage for the requesting application and
 *   a `web.Promise` to an instance of `web.StorageInfo`.
 * 
 *   `StorageQuota.requestPersistentQuota().then(function(storageInfo) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/requestPersistentQuota`
 */
web.StorageQuota.request_persistent_quota = (function web$StorageQuota$request_persistent_quota(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43953 = arguments.length;
var i__42557__auto___43954 = (0);
while(true){
if((i__42557__auto___43954 < len__42556__auto___43953)){
args__42563__auto__.push((arguments[i__42557__auto___43954]));

var G__43955 = (i__42557__auto___43954 + (1));
i__42557__auto___43954 = G__43955;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.StorageQuota.request_persistent_quota.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.StorageQuota.request_persistent_quota.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestPersistentQuota,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.StorageQuota.request_persistent_quota.cljs$lang$maxFixedArity = (1);

web.StorageQuota.request_persistent_quota.cljs$lang$applyTo = (function (seq43951){
var G__43952 = cljs.core.first.call(null,seq43951);
var seq43951__$1 = cljs.core.next.call(null,seq43951);
return web.StorageQuota.request_persistent_quota.cljs$core$IFn$_invoke$arity$variadic(G__43952,seq43951__$1);
});

/**
 * Property.
 * 
 *   The supportedTypes read-only property of the `web.StorageQuota`
 *   returns a list of the available storage types.
 * 
 *   `var storageTypes = StorageQuota.supportedTypes`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`
 */
web.StorageQuota.supported_types = (function web$StorageQuota$supported_types(this$){
return this$.supportedTypes();
});
/**
 * Property.
 * 
 *   The supportedTypes read-only property of the `web.StorageQuota`
 *   returns a list of the available storage types.
 * 
 *   `var storageTypes = StorageQuota.supportedTypes`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageQuota/supportedTypes`
 */
web.StorageQuota.set_supported_types_BANG_ = (function web$StorageQuota$set_supported_types_BANG_(this$,val){
return (this$["supportedTypes"] = val);
});

//# sourceMappingURL=StorageQuota.js.map?rel=1565798810669
