// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMMatrixReadOnly');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DOMMatrixReadOnly constructor creates a new `dom.DOMMatrixReadOnly` object which represents 4x4 matrices, suitable for 2D and 3D operations.
 * 
 *   init Optional
 *   \tEither a string containing a sequence of numbers or an array of integers specifying the matrix you want to create.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly`
 */
dom.DOMMatrixReadOnly.constructor$ = DOMMatrixReadOnly;
/**
 * Method.
 * 
 *   The flipX() method of the `dom.DOMMatrixReadOnly` interface creates
 *   new matrix being the result of the original matrix flipped about
 *   x-axis.
 * 
 *   `DOMMatrix.flipX()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/flipX`
 */
dom.DOMMatrixReadOnly.flip_x = (function dom$DOMMatrixReadOnly$flip_x(this$){
return this$.flipX();
});
/**
 * Method.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/scale`
 */
dom.DOMMatrixReadOnly.scale = (function dom$DOMMatrixReadOnly$scale(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43262 = arguments.length;
var i__42557__auto___43263 = (0);
while(true){
if((i__42557__auto___43263 < len__42556__auto___43262)){
args__42563__auto__.push((arguments[i__42557__auto___43263]));

var G__43264 = (i__42557__auto___43263 + (1));
i__42557__auto___43263 = G__43264;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return dom.DOMMatrixReadOnly.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

dom.DOMMatrixReadOnly.scale.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scale,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

dom.DOMMatrixReadOnly.scale.cljs$lang$maxFixedArity = (1);

dom.DOMMatrixReadOnly.scale.cljs$lang$applyTo = (function (seq43260){
var G__43261 = cljs.core.first.call(null,seq43260);
var seq43260__$1 = cljs.core.next.call(null,seq43260);
return dom.DOMMatrixReadOnly.scale.cljs$core$IFn$_invoke$arity$variadic(G__43261,seq43260__$1);
});

/**
 * Method.
 * 
 *   The translate() method of the `dom.DOMMatrixReadOnly` interface
 *   a new matrix being the result of the original matrix with a translation
 * 
 *   `The translate() method accepts two or three values.
 * 
 * 
 * 
 *   DOMMatrix.translate(translateX, translateY[, translateZ])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/translate`
 */
dom.DOMMatrixReadOnly.translate = (function dom$DOMMatrixReadOnly$translate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43267 = arguments.length;
var i__42557__auto___43268 = (0);
while(true){
if((i__42557__auto___43268 < len__42556__auto___43267)){
args__42563__auto__.push((arguments[i__42557__auto___43268]));

var G__43269 = (i__42557__auto___43268 + (1));
i__42557__auto___43268 = G__43269;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return dom.DOMMatrixReadOnly.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

dom.DOMMatrixReadOnly.translate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.translate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

dom.DOMMatrixReadOnly.translate.cljs$lang$maxFixedArity = (1);

dom.DOMMatrixReadOnly.translate.cljs$lang$applyTo = (function (seq43265){
var G__43266 = cljs.core.first.call(null,seq43265);
var seq43265__$1 = cljs.core.next.call(null,seq43265);
return dom.DOMMatrixReadOnly.translate.cljs$core$IFn$_invoke$arity$variadic(G__43266,seq43265__$1);
});


//# sourceMappingURL=DOMMatrixReadOnly.js.map?rel=1565798805154
