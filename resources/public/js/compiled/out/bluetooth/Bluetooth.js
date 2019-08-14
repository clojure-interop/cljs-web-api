// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.Bluetooth');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Bluetooth.requestDevice() method of the `bluetooth.Bluetooth`
 *   returns a `web.Promise` to a `bluetooth.BluetoothDevice` object
 *   the specified options. If there is no chooser UI, this method
 *   the first device matching the criteria.
 * 
 *   `Bluetooth.requestDevice([options])
 *   .then(function(bluetoothDevice) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice`
 */
bluetooth.Bluetooth.request_device = (function bluetooth$Bluetooth$request_device(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48019 = arguments.length;
var i__42557__auto___48020 = (0);
while(true){
if((i__42557__auto___48020 < len__42556__auto___48019)){
args__42563__auto__.push((arguments[i__42557__auto___48020]));

var G__48021 = (i__42557__auto___48020 + (1));
i__42557__auto___48020 = G__48021;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.Bluetooth.request_device.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.Bluetooth.request_device.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestDevice,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.Bluetooth.request_device.cljs$lang$maxFixedArity = (1);

bluetooth.Bluetooth.request_device.cljs$lang$applyTo = (function (seq48017){
var G__48018 = cljs.core.first.call(null,seq48017);
var seq48017__$1 = cljs.core.next.call(null,seq48017);
return bluetooth.Bluetooth.request_device.cljs$core$IFn$_invoke$arity$variadic(G__48018,seq48017__$1);
});


//# sourceMappingURL=Bluetooth.js.map?rel=1565798825115
