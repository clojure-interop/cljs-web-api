// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FontFaceSet');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   A `web.Boolean` that is true if the font list is available
 * 
 *   `bool = aFontFaceSet.check(font);
 *   bool = aFontFaceSet.check(font, text);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/check`
 */
web.FontFaceSet.check = (function web$FontFaceSet$check(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52907 = arguments.length;
var i__42557__auto___52908 = (0);
while(true){
if((i__42557__auto___52908 < len__42556__auto___52907)){
args__42563__auto__.push((arguments[i__42557__auto___52908]));

var G__52909 = (i__42557__auto___52908 + (1));
i__42557__auto___52908 = G__52909;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.FontFaceSet.check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.FontFaceSet.check.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.check,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.FontFaceSet.check.cljs$lang$maxFixedArity = (1);

web.FontFaceSet.check.cljs$lang$applyTo = (function (seq52905){
var G__52906 = cljs.core.first.call(null,seq52905);
var seq52905__$1 = cljs.core.next.call(null,seq52905);
return web.FontFaceSet.check.cljs$core$IFn$_invoke$arity$variadic(G__52906,seq52905__$1);
});

/**
 * Method.
 * 
 *   A `web.Promise` of an `web.Array` of `web.FontFace` loaded. The
 *   is fulfilled when all the fonts are loaded; it is rejected if
 *   of the fonts failed to load.
 * 
 *   `result = aFontFaceSet.load(font);
 * 
 *   result = aFontFaceSet.load(font, text);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/load`
 */
web.FontFaceSet.load = (function web$FontFaceSet$load(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52912 = arguments.length;
var i__42557__auto___52913 = (0);
while(true){
if((i__42557__auto___52913 < len__42556__auto___52912)){
args__42563__auto__.push((arguments[i__42557__auto___52913]));

var G__52914 = (i__42557__auto___52913 + (1));
i__42557__auto___52913 = G__52914;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.FontFaceSet.load.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.FontFaceSet.load.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.load,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.FontFaceSet.load.cljs$lang$maxFixedArity = (1);

web.FontFaceSet.load.cljs$lang$applyTo = (function (seq52910){
var G__52911 = cljs.core.first.call(null,seq52910);
var seq52910__$1 = cljs.core.next.call(null,seq52910);
return web.FontFaceSet.load.cljs$core$IFn$_invoke$arity$variadic(G__52911,seq52910__$1);
});

/**
 * Property.
 * 
 *   The ready readonly property of the `web.FontFaceSet` interface
 *   a `web.Promise` that resolves to the given `web.FontFaceSet`.
 * 
 *   `fontFaceSet.ready.then(function(fontFaceSet) {
 *   // ...
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready`
 */
web.FontFaceSet.ready = (function web$FontFaceSet$ready(this$){
return this$.ready();
});
/**
 * Property.
 * 
 *   The ready readonly property of the `web.FontFaceSet` interface
 *   a `web.Promise` that resolves to the given `web.FontFaceSet`.
 * 
 *   `fontFaceSet.ready.then(function(fontFaceSet) {
 *   // ...
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready`
 */
web.FontFaceSet.set_ready_BANG_ = (function web$FontFaceSet$set_ready_BANG_(this$,val){
return (this$["ready"] = val);
});

//# sourceMappingURL=FontFaceSet.js.map?rel=1565798860406
