// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaKeyStatusMap');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The entries() read-only property of the `media.MediaKeyStatusMap`
 *   returns a new Iterator object, containing an array of [key, value]
 *   for each element in the status map, in insertion order.
 * 
 *   `// TBD`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/entries`
 */
media.MediaKeyStatusMap.entries = (function media$MediaKeyStatusMap$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The forEach property of the `media.MediaKeyStatusMap` interface
 *   callback once for each key-value pair in the status map, in insertion
 *   If an argument is present it will be passed to the callback.
 * 
 *   `mediaKeyStatusMap.forEach(callback[, thisArg])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/forEach`
 */
media.MediaKeyStatusMap.for_each = (function media$MediaKeyStatusMap$for_each(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52833 = arguments.length;
var i__42557__auto___52834 = (0);
while(true){
if((i__42557__auto___52834 < len__42556__auto___52833)){
args__42563__auto__.push((arguments[i__42557__auto___52834]));

var G__52835 = (i__42557__auto___52834 + (1));
i__42557__auto___52834 = G__52835;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaKeyStatusMap.for_each.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaKeyStatusMap.for_each.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.forEach,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaKeyStatusMap.for_each.cljs$lang$maxFixedArity = (1);

media.MediaKeyStatusMap.for_each.cljs$lang$applyTo = (function (seq52831){
var G__52832 = cljs.core.first.call(null,seq52831);
var seq52831__$1 = cljs.core.next.call(null,seq52831);
return media.MediaKeyStatusMap.for_each.cljs$core$IFn$_invoke$arity$variadic(G__52832,seq52831__$1);
});

/**
 * Method.
 * 
 *   The get property of the `media.MediaKeyStatusMap` interface returns
 *   value associated with the given key, or undefined if there is
 * 
 *   `var value = mediaKeyStatusMap.get(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/get`
 */
media.MediaKeyStatusMap.get = (function media$MediaKeyStatusMap$get(this$,key){
return this$.get(key);
});
/**
 * Method.
 * 
 *   The has property of the `media.MediaKeyStatusMap` interface returns
 *   `web.Boolean`, asserting whether a value has been associated
 *   the given key.
 * 
 *   `var boolean = mediaKeyStatusMap(key)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/has`
 */
media.MediaKeyStatusMap.has = (function media$MediaKeyStatusMap$has(this$,key){
return this$.has(key);
});
/**
 * Method.
 * 
 *   The keys property of the `media.MediaKeyStatusMap` interface
 *   a new Iterator object, containing keys for each element in the
 *   map, in insertion order
 * 
 *   `var iterator = mediaKeyStatusMap.keys()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/keys`
 */
media.MediaKeyStatusMap.keys = (function media$MediaKeyStatusMap$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The values property of the `media.MediaKeyStatusMap` interface
 *   a new Iterator object, containing values for each element in
 *   status map, in insertion order.
 * 
 *   `var iterator = mediaKeyStatusMap.values()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/values`
 */
media.MediaKeyStatusMap.values = (function media$MediaKeyStatusMap$values(this$){
return this$.values();
});
/**
 * Property.
 * 
 *   The size read-only property of the `media.MediaKeyStatusMap`
 *   returns the number of key/value paIrs in the status map.
 * 
 *   `var size = MediaKeyStatusMap.size;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/size`
 */
media.MediaKeyStatusMap.size = (function media$MediaKeyStatusMap$size(this$){
return this$.size();
});
/**
 * Property.
 * 
 *   The size read-only property of the `media.MediaKeyStatusMap`
 *   returns the number of key/value paIrs in the status map.
 * 
 *   `var size = MediaKeyStatusMap.size;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap/size`
 */
media.MediaKeyStatusMap.set_size_BANG_ = (function media$MediaKeyStatusMap$set_size_BANG_(this$,val){
return (this$["size"] = val);
});

//# sourceMappingURL=MediaKeyStatusMap.js.map?rel=1565798859716
