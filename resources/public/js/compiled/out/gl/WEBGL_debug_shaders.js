// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.WEBGL_debug_shaders');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The WEBGL_debug_shaders.getTranslatedShaderSource() method is
 *   of the WebGL API and allows you to debug a translated shader.
 * 
 *   `gl.getExtension('WEBGL_debug_shaders').getTranslatedShaderSource(shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource`
 */
gl.WEBGL_debug_shaders.get_translated_shader_source = (function gl$WEBGL_debug_shaders$get_translated_shader_source(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44187 = arguments.length;
var i__42557__auto___44188 = (0);
while(true){
if((i__42557__auto___44188 < len__42556__auto___44187)){
args__42563__auto__.push((arguments[i__42557__auto___44188]));

var G__44189 = (i__42557__auto___44188 + (1));
i__42557__auto___44188 = G__44189;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WEBGL_debug_shaders.get_translated_shader_source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WEBGL_debug_shaders.get_translated_shader_source.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getTranslatedShaderSource,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WEBGL_debug_shaders.get_translated_shader_source.cljs$lang$maxFixedArity = (1);

gl.WEBGL_debug_shaders.get_translated_shader_source.cljs$lang$applyTo = (function (seq44185){
var G__44186 = cljs.core.first.call(null,seq44185);
var seq44185__$1 = cljs.core.next.call(null,seq44185);
return gl.WEBGL_debug_shaders.get_translated_shader_source.cljs$core$IFn$_invoke$arity$variadic(G__44186,seq44185__$1);
});


//# sourceMappingURL=WEBGL_debug_shaders.js.map?rel=1565798812202
