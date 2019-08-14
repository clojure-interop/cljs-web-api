// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.WEBGL_draw_buffers');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The WEBGL_draw_buffers.drawBuffersWEBGL() method is part of the
 *   API and allows you to define the draw buffers to which all fragment
 *   are written.
 * 
 *   `void gl.getExtension('WEBGL_draw_buffers').drawBuffersWEBGL(buffers);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL`
 */
gl.WEBGL_draw_buffers.draw_buffers_webgl = (function gl$WEBGL_draw_buffers$draw_buffers_webgl(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50280 = arguments.length;
var i__42557__auto___50281 = (0);
while(true){
if((i__42557__auto___50281 < len__42556__auto___50280)){
args__42563__auto__.push((arguments[i__42557__auto___50281]));

var G__50282 = (i__42557__auto___50281 + (1));
i__42557__auto___50281 = G__50282;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WEBGL_draw_buffers.draw_buffers_webgl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WEBGL_draw_buffers.draw_buffers_webgl.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.drawBuffersWEBGL,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WEBGL_draw_buffers.draw_buffers_webgl.cljs$lang$maxFixedArity = (1);

gl.WEBGL_draw_buffers.draw_buffers_webgl.cljs$lang$applyTo = (function (seq50278){
var G__50279 = cljs.core.first.call(null,seq50278);
var seq50278__$1 = cljs.core.next.call(null,seq50278);
return gl.WEBGL_draw_buffers.draw_buffers_webgl.cljs$core$IFn$_invoke$arity$variadic(G__50279,seq50278__$1);
});


//# sourceMappingURL=WEBGL_draw_buffers.js.map?rel=1565798837666
