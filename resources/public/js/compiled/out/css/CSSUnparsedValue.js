// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSUnparsedValue');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The CSSUnparsedValue() constructor creates a new `css.CSSUnparsedValue` object which represents property values that reference custom properties.
 * 
 *   members
 *   An array whose values must be either a `web.USVString` or a `css.CSSVariableReferenceValue`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue`
 */
css.CSSUnparsedValue.constructor$ = CSSUnparsedValue;
/**
 * Method.
 * 
 *   The CSSUnparsedValue.entries() method returns an array of a given
 *   own enumerable property [key, value] pairs in the same order
 *   that provided by a `web.for...in` loop (the difference being
 *   a for-in loop enumerates properties in the prototype chain as
 * 
 *   `CSSUnparsedValue.entries(obj)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/entries`
 */
css.CSSUnparsedValue.entries = (function css$CSSUnparsedValue$entries(this$,obj){
return this$.entries(obj);
});
/**
 * Method.
 * 
 *   The CSSUnparsedValue.forEach() method executes a provided function
 *   for each element of the `css.CSSUnparsedValue`.
 * 
 *   `CSSUnparsedValue.forEach(function callback(currentValue[, index[, array]]) {
 *   // your iterator
 *   }[, thisArg]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/forEach`
 */
css.CSSUnparsedValue.for_each = (function css$CSSUnparsedValue$for_each(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42955 = arguments.length;
var i__42557__auto___42956 = (0);
while(true){
if((i__42557__auto___42956 < len__42556__auto___42955)){
args__42563__auto__.push((arguments[i__42557__auto___42956]));

var G__42957 = (i__42557__auto___42956 + (1));
i__42557__auto___42956 = G__42957;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSUnparsedValue.for_each.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSUnparsedValue.for_each.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.forEach,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSUnparsedValue.for_each.cljs$lang$maxFixedArity = (1);

css.CSSUnparsedValue.for_each.cljs$lang$applyTo = (function (seq42953){
var G__42954 = cljs.core.first.call(null,seq42953);
var seq42953__$1 = cljs.core.next.call(null,seq42953);
return css.CSSUnparsedValue.for_each.cljs$core$IFn$_invoke$arity$variadic(G__42954,seq42953__$1);
});

/**
 * Method.
 * 
 *   The CSSUnparsedValue.keys() method returns a new Array Iterator
 *   that contains the keys for each index in the array.
 * 
 *   `CSSUnparsedValue.keys()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/keys`
 */
css.CSSUnparsedValue.keys = (function css$CSSUnparsedValue$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The CSSUnparsedValue.values() method returns a new Array Iterator
 *   that contains the values for each index in the CSSUnparsedValue
 * 
 *   `CSSUnparsedValue.values()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/values`
 */
css.CSSUnparsedValue.values = (function css$CSSUnparsedValue$values(this$){
return this$.values();
});
/**
 * Property.
 * 
 *   The length read-only property of the `css.CSSUnparsedValue` interface
 *   the number of items in the object.
 * 
 *   `var length = CSSUnparsedValue.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/length`
 */
css.CSSUnparsedValue.length = (function css$CSSUnparsedValue$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length read-only property of the `css.CSSUnparsedValue` interface
 *   the number of items in the object.
 * 
 *   `var length = CSSUnparsedValue.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/length`
 */
css.CSSUnparsedValue.set_length_BANG_ = (function css$CSSUnparsedValue$set_length_BANG_(this$,val){
return (this$["length"] = val);
});

//# sourceMappingURL=CSSUnparsedValue.js.map?rel=1565798801780
