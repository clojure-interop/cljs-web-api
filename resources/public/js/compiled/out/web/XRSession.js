// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.XRSession');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The updateRenderState method of `web.XRSession` interface of
 *   API submits a new `web.XRRenderState`.
 * 
 *   `XRSession.updateRenderState(...)
 * 
 * 
 *   Note: Set `web.inlineVerticalFieldOfView` if and only if the `web.XRSession` is \"inline\".`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/updateRenderState`
 */
web.XRSession.update_render_state = (function web$XRSession$update_render_state(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47854 = arguments.length;
var i__42557__auto___47855 = (0);
while(true){
if((i__42557__auto___47855 < len__42556__auto___47854)){
args__42563__auto__.push((arguments[i__42557__auto___47855]));

var G__47856 = (i__42557__auto___47855 + (1));
i__42557__auto___47855 = G__47856;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XRSession.update_render_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XRSession.update_render_state.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.updateRenderState,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XRSession.update_render_state.cljs$lang$maxFixedArity = (1);

web.XRSession.update_render_state.cljs$lang$applyTo = (function (seq47852){
var G__47853 = cljs.core.first.call(null,seq47852);
var seq47852__$1 = cljs.core.next.call(null,seq47852);
return web.XRSession.update_render_state.cljs$core$IFn$_invoke$arity$variadic(G__47853,seq47852__$1);
});

/**
 * Method.
 * 
 *   The requestAnimationFrame method of `web.XRSession` is the primary
 *   to run the application logic to update the scene during the XR
 *   The method will take a callback you provide and schedule it to
 *   run before the next repaint (once).
 * 
 *   `function onXRAnimationFrame(DOMHighResTimeStamp, XRFrame) { ... }
 *   XRSession.requestAnimationFrame(onXRAnimationFrame)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/requestAnimationFrame`
 */
web.XRSession.request_animation_frame = (function web$XRSession$request_animation_frame(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47859 = arguments.length;
var i__42557__auto___47860 = (0);
while(true){
if((i__42557__auto___47860 < len__42556__auto___47859)){
args__42563__auto__.push((arguments[i__42557__auto___47860]));

var G__47861 = (i__42557__auto___47860 + (1));
i__42557__auto___47860 = G__47861;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XRSession.request_animation_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XRSession.request_animation_frame.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestAnimationFrame,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XRSession.request_animation_frame.cljs$lang$maxFixedArity = (1);

web.XRSession.request_animation_frame.cljs$lang$applyTo = (function (seq47857){
var G__47858 = cljs.core.first.call(null,seq47857);
var seq47857__$1 = cljs.core.next.call(null,seq47857);
return web.XRSession.request_animation_frame.cljs$core$IFn$_invoke$arity$variadic(G__47858,seq47857__$1);
});

/**
 * Method.
 * 
 *   The XRSession.cancelAnimationFrame method cancels an animation
 *   previously requested via a call to `web.XRSession.requestAnimationFrame`.
 * 
 *   `XRSession.cancelAnimationFrame(handle)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/cancelAnimationFrame`
 */
web.XRSession.cancel_animation_frame = (function web$XRSession$cancel_animation_frame(this$,handle){
return this$.cancelAnimationFrame(handle);
});
/**
 * Method.
 * 
 *   The end method of `web.XRSession` shuts down the XR session that
 *   is invoked on and returns a promise.
 * 
 *   `XRSession.end()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XRSession/end`
 */
web.XRSession.end = (function web$XRSession$end(this$){
return this$.end();
});

//# sourceMappingURL=XRSession.js.map?rel=1565798823606
