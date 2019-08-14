// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.StylePropertyMapReadOnly');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The StylePropertyMapReadOnly.entries() method returns an array
 *   a given object's own enumerable property [key, value] pairs,
 *   the same order as that provided by a `web.for...in` loop (the
 *   being that a for-in loop enumerates properties in the prototype
 *   as well).
 * 
 *   `StylePropertyMapReadOnly.entries()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/entries`
 */
web.StylePropertyMapReadOnly.entries = (function web$StylePropertyMapReadOnly$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The StylePropertyMapReadOnly.forEach() method executes a provided
 *   once for each element of `web.StylePropertyMapReadOnly`.
 * 
 *   `StylePropertyMapReadOnly.forEach(function callback(currentValue[, index[, array]]) {
 *   //your code
 *   }[, thisArg]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/forEach`
 */
web.StylePropertyMapReadOnly.for_each = (function web$StylePropertyMapReadOnly$for_each(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50170 = arguments.length;
var i__42557__auto___50171 = (0);
while(true){
if((i__42557__auto___50171 < len__42556__auto___50170)){
args__42563__auto__.push((arguments[i__42557__auto___50171]));

var G__50172 = (i__42557__auto___50171 + (1));
i__42557__auto___50171 = G__50172;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.StylePropertyMapReadOnly.for_each.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.StylePropertyMapReadOnly.for_each.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.forEach,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.StylePropertyMapReadOnly.for_each.cljs$lang$maxFixedArity = (1);

web.StylePropertyMapReadOnly.for_each.cljs$lang$applyTo = (function (seq50168){
var G__50169 = cljs.core.first.call(null,seq50168);
var seq50168__$1 = cljs.core.next.call(null,seq50168);
return web.StylePropertyMapReadOnly.for_each.cljs$core$IFn$_invoke$arity$variadic(G__50169,seq50168__$1);
});

/**
 * Method.
 * 
 *   The get() method of the `web.StylePropertyMapReadOnly` interface
 *   a `css.CSSStyleValue` object for the first value of the specified
 * 
 *   `var declarationBlock = StylePropertyMapReadOnly.get(property)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/get`
 */
web.StylePropertyMapReadOnly.get = (function web$StylePropertyMapReadOnly$get(this$,property){
return this$.get(property);
});
/**
 * Method.
 * 
 *   The getAll() method of the `web.StylePropertyMapReadOnly` interface
 *   an array of `css.CSSStyleValue` objects containing the values
 *   the provided property.
 * 
 *   `var cssStyleValues[] = StylePropertyMapReadOnly.getAll(property)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/getAll`
 */
web.StylePropertyMapReadOnly.get_all = (function web$StylePropertyMapReadOnly$get_all(this$,property){
return this$.getAll(property);
});
/**
 * Method.
 * 
 *   The has() method of the `web.StylePropertyMapReadOnly` interface
 *   whether the specified property is in the StylePropertyMapReadOnly
 * 
 *   `var boolean = StylePropertyMapReadOnly.has(property)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/has`
 */
web.StylePropertyMapReadOnly.has = (function web$StylePropertyMapReadOnly$has(this$,property){
return this$.has(property);
});
/**
 * Method.
 * 
 *   The StylePropertyMapReadOnly.keys() method returns a new Array
 *   containing the keys for each item in StylePropertyMapReadOnly
 * 
 *   `StylePropertyMapReadOnly.keys()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/keys`
 */
web.StylePropertyMapReadOnly.keys = (function web$StylePropertyMapReadOnly$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The StylePropertyMapReadOnly.values() method returns a new Array
 *   containing the values for each index in the StylePropertyMapReadOnly
 * 
 *   `StylePropertyMapReadOnly.values()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/values`
 */
web.StylePropertyMapReadOnly.values = (function web$StylePropertyMapReadOnly$values(this$){
return this$.values();
});
/**
 * Property.
 * 
 *   The size read-only property of the `web.StylePropertyMapReadOnly`
 *   returns an unsinged long integer containing the size of the StylePropertyMapReadOnly
 * 
 *   `var size = StylePropertyMapReadOnly.size`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size`
 */
web.StylePropertyMapReadOnly.size = (function web$StylePropertyMapReadOnly$size(this$){
return this$.size();
});
/**
 * Property.
 * 
 *   The size read-only property of the `web.StylePropertyMapReadOnly`
 *   returns an unsinged long integer containing the size of the StylePropertyMapReadOnly
 * 
 *   `var size = StylePropertyMapReadOnly.size`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size`
 */
web.StylePropertyMapReadOnly.set_size_BANG_ = (function web$StylePropertyMapReadOnly$set_size_BANG_(this$,val){
return (this$["size"] = val);
});

//# sourceMappingURL=StylePropertyMapReadOnly.js.map?rel=1565798836559
