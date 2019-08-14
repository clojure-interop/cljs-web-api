// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.XR');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The supportsSession method of `web.XR` interface of WebXR API
 *   whether or not the device and User agent support a specific `web.XRSessionMode`.
 * 
 *   `XR.supportsSession(XRSessionMode)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XR/supportsSession`
 */
web.XR.supports_session = (function web$XR$supports_session(this$,xr_session_mode){
return this$.supportsSession(xr_session_mode);
});
/**
 * Method.
 * 
 *   The requestSession method of `web.XR` interface of WebXR API
 *   requests a new `web.XRSession` with a specific `web.XRSessionMode`
 *   is used for all interaction with WebXR environment.
 * 
 *   `XR.requestSession(XRSessionMode)
 *   XR.requestSession(XRSessionMode, XRSessionInit)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XR/requestSession`
 */
web.XR.request_session = (function web$XR$request_session(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44897 = arguments.length;
var i__42557__auto___44898 = (0);
while(true){
if((i__42557__auto___44898 < len__42556__auto___44897)){
args__42563__auto__.push((arguments[i__42557__auto___44898]));

var G__44899 = (i__42557__auto___44898 + (1));
i__42557__auto___44898 = G__44899;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XR.request_session.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XR.request_session.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestSession,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XR.request_session.cljs$lang$maxFixedArity = (1);

web.XR.request_session.cljs$lang$applyTo = (function (seq44895){
var G__44896 = cljs.core.first.call(null,seq44895);
var seq44895__$1 = cljs.core.next.call(null,seq44895);
return web.XR.request_session.cljs$core$IFn$_invoke$arity$variadic(G__44896,seq44895__$1);
});


//# sourceMappingURL=XR.js.map?rel=1565798817503
