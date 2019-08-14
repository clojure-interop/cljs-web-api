// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.KeyboardLayoutMap');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The forEach() method of the `web.KeyboardLayoutMap` interface
 *   a provided function once for each element of the map.
 * 
 *   `KeyboardLayoutMap.forEach(function callback(currentValue[, index[, array]]) {
 *   //your iterator
 *   }[, thisArg]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/forEach`
 */
web.KeyboardLayoutMap.for_each = (function web$KeyboardLayoutMap$for_each(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52395 = arguments.length;
var i__42557__auto___52396 = (0);
while(true){
if((i__42557__auto___52396 < len__42556__auto___52395)){
args__42563__auto__.push((arguments[i__42557__auto___52396]));

var G__52397 = (i__42557__auto___52396 + (1));
i__42557__auto___52396 = G__52397;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.KeyboardLayoutMap.for_each.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.KeyboardLayoutMap.for_each.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.forEach,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.KeyboardLayoutMap.for_each.cljs$lang$maxFixedArity = (1);

web.KeyboardLayoutMap.for_each.cljs$lang$applyTo = (function (seq52393){
var G__52394 = cljs.core.first.call(null,seq52393);
var seq52393__$1 = cljs.core.next.call(null,seq52393);
return web.KeyboardLayoutMap.for_each.cljs$core$IFn$_invoke$arity$variadic(G__52394,seq52393__$1);
});

/**
 * Method.
 * 
 *   The get() method of the `web.KeyboardLayoutMap` interface returns
 *   element with the given key.
 * 
 *   `var value = KeyboardLayoutMap.get(key)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/get`
 */
web.KeyboardLayoutMap.get = (function web$KeyboardLayoutMap$get(this$,key){
return this$.get(key);
});
/**
 * Method.
 * 
 *   The has() method of the `web.KeyboardLayoutMap` interface returns
 *   boolean indicating whether the object has an element with the
 *   key.
 * 
 *   `var aBoolean = KeyboardLayoutMap.has(key)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/has`
 */
web.KeyboardLayoutMap.has = (function web$KeyboardLayoutMap$has(this$,key){
return this$.has(key);
});
/**
 * Property.
 * 
 *   The entries read-only property of the `web.KeyboardLayoutMap`
 *   returns an array of a given object's own enumerable property
 *   value] pairs, in the same order as that provided by a `web.for...in`
 *   (the difference being that a for-in loop enumerates properties
 *   the prototype chain as well).
 * 
 *   `KeyboardLayoutMap.entries()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/entries`
 */
web.KeyboardLayoutMap.entries = (function web$KeyboardLayoutMap$entries(this$){
return this$.entries();
});
/**
 * Property.
 * 
 *   The entries read-only property of the `web.KeyboardLayoutMap`
 *   returns an array of a given object's own enumerable property
 *   value] pairs, in the same order as that provided by a `web.for...in`
 *   (the difference being that a for-in loop enumerates properties
 *   the prototype chain as well).
 * 
 *   `KeyboardLayoutMap.entries()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/entries`
 */
web.KeyboardLayoutMap.set_entries_BANG_ = (function web$KeyboardLayoutMap$set_entries_BANG_(this$,val){
return (this$["entries"] = val);
});
/**
 * Property.
 * 
 *   The keys read-only property of the `web.KeyboardLayoutMap` interface
 *   a new object that contains the keys for each index in the array.
 * 
 *   `iterator = KeyboardLayoutMap.keys`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/keys`
 */
web.KeyboardLayoutMap.keys = (function web$KeyboardLayoutMap$keys(this$){
return this$.keys();
});
/**
 * Property.
 * 
 *   The keys read-only property of the `web.KeyboardLayoutMap` interface
 *   a new object that contains the keys for each index in the array.
 * 
 *   `iterator = KeyboardLayoutMap.keys`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/keys`
 */
web.KeyboardLayoutMap.set_keys_BANG_ = (function web$KeyboardLayoutMap$set_keys_BANG_(this$,val){
return (this$["keys"] = val);
});
/**
 * Property.
 * 
 *   The size read-only property of the `web.KeyboardLayoutMap` interface
 *   the number of elements in the map.
 * 
 *   `var size = KeyboardLayoutMap.size()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/size`
 */
web.KeyboardLayoutMap.size = (function web$KeyboardLayoutMap$size(this$){
return this$.size();
});
/**
 * Property.
 * 
 *   The size read-only property of the `web.KeyboardLayoutMap` interface
 *   the number of elements in the map.
 * 
 *   `var size = KeyboardLayoutMap.size()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/size`
 */
web.KeyboardLayoutMap.set_size_BANG_ = (function web$KeyboardLayoutMap$set_size_BANG_(this$,val){
return (this$["size"] = val);
});
/**
 * Property.
 * 
 *   The values read-only property of the `web.KeyboardLayoutMap`
 *   returns a new object that contains the values for each index
 *   the .
 * 
 *   `var iterator = KeyboardLayoutMap.values`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/values`
 */
web.KeyboardLayoutMap.values = (function web$KeyboardLayoutMap$values(this$){
return this$.values();
});
/**
 * Property.
 * 
 *   The values read-only property of the `web.KeyboardLayoutMap`
 *   returns a new object that contains the values for each index
 *   the .
 * 
 *   `var iterator = KeyboardLayoutMap.values`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap/values`
 */
web.KeyboardLayoutMap.set_values_BANG_ = (function web$KeyboardLayoutMap$set_values_BANG_(this$,val){
return (this$["values"] = val);
});

//# sourceMappingURL=KeyboardLayoutMap.js.map?rel=1565798852448
