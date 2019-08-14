// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.USB');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getDevices method of the `web.USB` interface returns a `web.Promise`
 *   resolves with an array of `web.USBDevice` objects for paired
 *   devices. For information on pairing devices, see `web.USB.requestDevice()`.
 * 
 *   `var promise[] = USB.getDevices();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/getDevices`
 */
web.USB.get_devices = (function web$USB$get_devices(this$){
return this$.getDevices();
});
/**
 * Method.
 * 
 *   The onconnect property of the `web.USB` interface is an event
 *   called whenever a paired device is connected.
 * 
 *   `USB.onconnect = connectFunction`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/onconnect`
 */
web.USB.onconnect = (function web$USB$onconnect(this$){
return this$.onconnect();
});
/**
 * Method.
 * 
 *   The ondisconnect property of the `web.USB` is an event handler
 *   whenever a paired device is disconnected.
 * 
 *   `USB.ondisconnect = disconnectFunction`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/ondisconnect`
 */
web.USB.ondisconnect = (function web$USB$ondisconnect(this$){
return this$.ondisconnect();
});
/**
 * Method.
 * 
 *   The requestDevice() method of the `web.USB` interface returns
 *   `web.Promise` that resolves with an instance of `web.USBDevice`
 *   the specified device is found. Calling this function triggers
 *   user agent's pairing flow.
 * 
 *   `var promise = USB.requestDevice([filters])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/USB/requestDevice`
 */
web.USB.request_device = (function web$USB$request_device(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43322 = arguments.length;
var i__42557__auto___43323 = (0);
while(true){
if((i__42557__auto___43323 < len__42556__auto___43322)){
args__42563__auto__.push((arguments[i__42557__auto___43323]));

var G__43324 = (i__42557__auto___43323 + (1));
i__42557__auto___43323 = G__43324;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.USB.request_device.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.USB.request_device.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestDevice,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.USB.request_device.cljs$lang$maxFixedArity = (1);

web.USB.request_device.cljs$lang$applyTo = (function (seq43320){
var G__43321 = cljs.core.first.call(null,seq43320);
var seq43320__$1 = cljs.core.next.call(null,seq43320);
return web.USB.request_device.cljs$core$IFn$_invoke$arity$variadic(G__43321,seq43320__$1);
});


//# sourceMappingURL=USB.js.map?rel=1565798805642
