// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.WEBGL_lose_context');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The WEBGL_lose_context.loseContext() method is part of the WebGL
 *   and allows you to simulate losing the context of a `gl.WebGLRenderingContext`
 * 
 *   `gl.getExtension('WEBGL_lose_context').loseContext();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context/loseContext`
 */
gl.WEBGL_lose_context.lose_context = (function gl$WEBGL_lose_context$lose_context(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52460 = arguments.length;
var i__42557__auto___52461 = (0);
while(true){
if((i__42557__auto___52461 < len__42556__auto___52460)){
args__42563__auto__.push((arguments[i__42557__auto___52461]));

var G__52462 = (i__42557__auto___52461 + (1));
i__42557__auto___52461 = G__52462;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WEBGL_lose_context.lose_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WEBGL_lose_context.lose_context.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.loseContext,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WEBGL_lose_context.lose_context.cljs$lang$maxFixedArity = (1);

gl.WEBGL_lose_context.lose_context.cljs$lang$applyTo = (function (seq52458){
var G__52459 = cljs.core.first.call(null,seq52458);
var seq52458__$1 = cljs.core.next.call(null,seq52458);
return gl.WEBGL_lose_context.lose_context.cljs$core$IFn$_invoke$arity$variadic(G__52459,seq52458__$1);
});

/**
 * Method.
 * 
 *   The WEBGL_lose_context.restoreContext() method is part of the
 *   API and allows you to simulate restoring the context of a `gl.WebGLRenderingContext`
 * 
 *   `gl.getExtension('WEBGL_lose_context').restoreContext();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context/restoreContext`
 */
gl.WEBGL_lose_context.restore_context = (function gl$WEBGL_lose_context$restore_context(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52465 = arguments.length;
var i__42557__auto___52466 = (0);
while(true){
if((i__42557__auto___52466 < len__42556__auto___52465)){
args__42563__auto__.push((arguments[i__42557__auto___52466]));

var G__52467 = (i__42557__auto___52466 + (1));
i__42557__auto___52466 = G__52467;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WEBGL_lose_context.restore_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WEBGL_lose_context.restore_context.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.restoreContext,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WEBGL_lose_context.restore_context.cljs$lang$maxFixedArity = (1);

gl.WEBGL_lose_context.restore_context.cljs$lang$applyTo = (function (seq52463){
var G__52464 = cljs.core.first.call(null,seq52463);
var seq52463__$1 = cljs.core.next.call(null,seq52463);
return gl.WEBGL_lose_context.restore_context.cljs$core$IFn$_invoke$arity$variadic(G__52464,seq52463__$1);
});


//# sourceMappingURL=WEBGL_lose_context.js.map?rel=1565798853901
