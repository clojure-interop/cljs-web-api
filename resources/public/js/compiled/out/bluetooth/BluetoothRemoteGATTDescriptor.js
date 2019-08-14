// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.BluetoothRemoteGATTDescriptor');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTDescriptor.readValue() method returns
 *   `web.Promise` that resolves to an `web.ArrayBuffer` holding a
 *   of the value property if it is available and supported. Otherwise
 *   throws an error.
 * 
 *   `BluetoothRemoteGATTDescriptor.readValue().then(function(value[]) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/readValue`
 */
bluetooth.BluetoothRemoteGATTDescriptor.read_value = (function bluetooth$BluetoothRemoteGATTDescriptor$read_value(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50287 = arguments.length;
var i__42557__auto___50288 = (0);
while(true){
if((i__42557__auto___50288 < len__42556__auto___50287)){
args__42563__auto__.push((arguments[i__42557__auto___50288]));

var G__50289 = (i__42557__auto___50288 + (1));
i__42557__auto___50288 = G__50289;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothRemoteGATTDescriptor.read_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothRemoteGATTDescriptor.read_value.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.readValue,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothRemoteGATTDescriptor.read_value.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothRemoteGATTDescriptor.read_value.cljs$lang$applyTo = (function (seq50285){
var G__50286 = cljs.core.first.call(null,seq50285);
var seq50285__$1 = cljs.core.next.call(null,seq50285);
return bluetooth.BluetoothRemoteGATTDescriptor.read_value.cljs$core$IFn$_invoke$arity$variadic(G__50286,seq50285__$1);
});

/**
 * Method.
 * 
 *   The BluetoothRemoteGATTDescriptor.writeValue() method sets the
 *   property to the bytes contained in an `web.ArrayBuffer` and returns
 *   `web.Promise`.
 * 
 *   `BluetoothRemoteGATTDescriptor.writeValue(array[]).then(function() { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/writeValue`
 */
bluetooth.BluetoothRemoteGATTDescriptor.write_value = (function bluetooth$BluetoothRemoteGATTDescriptor$write_value(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50292 = arguments.length;
var i__42557__auto___50293 = (0);
while(true){
if((i__42557__auto___50293 < len__42556__auto___50292)){
args__42563__auto__.push((arguments[i__42557__auto___50293]));

var G__50294 = (i__42557__auto___50293 + (1));
i__42557__auto___50293 = G__50294;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothRemoteGATTDescriptor.write_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothRemoteGATTDescriptor.write_value.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.writeValue,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothRemoteGATTDescriptor.write_value.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothRemoteGATTDescriptor.write_value.cljs$lang$applyTo = (function (seq50290){
var G__50291 = cljs.core.first.call(null,seq50290);
var seq50290__$1 = cljs.core.next.call(null,seq50290);
return bluetooth.BluetoothRemoteGATTDescriptor.write_value.cljs$core$IFn$_invoke$arity$variadic(G__50291,seq50290__$1);
});

/**
 * Property.
 * 
 *   The BluetoothRemoteGATTDescriptor.uuid read-only property returns
 *   UUID of the characteristic descriptor, for example '00002902-0000-1000-8000-00805f9b34fb'
 *   theClient Characteristic Configuration descriptor.
 * 
 *   `var uuid = BluetoothRemoteGATTDescriptor.uuid`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid`
 */
bluetooth.BluetoothRemoteGATTDescriptor.uuid = (function bluetooth$BluetoothRemoteGATTDescriptor$uuid(this$){
return this$.uuid();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTDescriptor.uuid read-only property returns
 *   UUID of the characteristic descriptor, for example '00002902-0000-1000-8000-00805f9b34fb'
 *   theClient Characteristic Configuration descriptor.
 * 
 *   `var uuid = BluetoothRemoteGATTDescriptor.uuid`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid`
 */
bluetooth.BluetoothRemoteGATTDescriptor.set_uuid_BANG_ = (function bluetooth$BluetoothRemoteGATTDescriptor$set_uuid_BANG_(this$,val){
return (this$["uuid"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTDescriptor.value read-only property returns
 *   `web.ArrayBuffer` containing the currently cached descriptor
 *   This value gets updated when the value of the descriptor is read.
 * 
 *   `var characteristic = BluetoothRemoteGATTDescriptor.characteristic`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/value`
 */
bluetooth.BluetoothRemoteGATTDescriptor.value = (function bluetooth$BluetoothRemoteGATTDescriptor$value(this$){
return this$.value();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTDescriptor.value read-only property returns
 *   `web.ArrayBuffer` containing the currently cached descriptor
 *   This value gets updated when the value of the descriptor is read.
 * 
 *   `var characteristic = BluetoothRemoteGATTDescriptor.characteristic`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/value`
 */
bluetooth.BluetoothRemoteGATTDescriptor.set_value_BANG_ = (function bluetooth$BluetoothRemoteGATTDescriptor$set_value_BANG_(this$,val){
return (this$["value"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTDescriptor.characteristic read-only property
 *   the `bluetooth.BluetoothRemoteGATTCharacteristic` this descriptor
 *   to.
 * 
 *   `var characteristic = BluetoothRemoteGATTCharacteristic.characteristic`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic`
 */
bluetooth.BluetoothRemoteGATTDescriptor.characteristic = (function bluetooth$BluetoothRemoteGATTDescriptor$characteristic(this$){
return this$.characteristic();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTDescriptor.characteristic read-only property
 *   the `bluetooth.BluetoothRemoteGATTCharacteristic` this descriptor
 *   to.
 * 
 *   `var characteristic = BluetoothRemoteGATTCharacteristic.characteristic`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic`
 */
bluetooth.BluetoothRemoteGATTDescriptor.set_characteristic_BANG_ = (function bluetooth$BluetoothRemoteGATTDescriptor$set_characteristic_BANG_(this$,val){
return (this$["characteristic"] = val);
});

//# sourceMappingURL=BluetoothRemoteGATTDescriptor.js.map?rel=1565798837741
