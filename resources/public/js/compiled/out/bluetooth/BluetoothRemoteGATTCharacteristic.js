// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.BluetoothRemoteGATTCharacteristic');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTCharacteristic.getDescriptor() method
 *   a `web.Promise` that resolves to the first `bluetooth.BluetoothGATTDescriptor`
 *   a given descriptor UUID.
 * 
 *   `BluetoothRemoteGATTCharacteristic.getDescriptor(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptor) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.get_descriptor = (function bluetooth$BluetoothRemoteGATTCharacteristic$get_descriptor(this$,bluetooth_descriptor_uuid){
return this$.getDescriptor(bluetooth_descriptor_uuid);
});
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTCharacteristic.getDescriptors() method
 *   a `web.Promise` that resolves to an `web.Array` of all `bluetooth.BluetoothGATTDescriptor`
 *   for a given descriptor UUID.
 * 
 *   `BluetoothRemoteGATTCharacteristic.getDescriptors(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptors[]) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.get_descriptors = (function bluetooth$BluetoothRemoteGATTCharacteristic$get_descriptors(this$,bluetooth_descriptor_uuid){
return this$.getDescriptors(bluetooth_descriptor_uuid);
});
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTCharacteristic.readValue() method returns
 *   `web.Promise` that resolves to a `web.DataView` holding a duplicate
 *   the value property if it is available and supported. Otherwise
 *   throws an error.
 * 
 *   `BluetoothRemoteGATTCharacteristic.readValue().then(function(dataView) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.read_value = (function bluetooth$BluetoothRemoteGATTCharacteristic$read_value(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52868 = arguments.length;
var i__42557__auto___52869 = (0);
while(true){
if((i__42557__auto___52869 < len__42556__auto___52868)){
args__42563__auto__.push((arguments[i__42557__auto___52869]));

var G__52870 = (i__42557__auto___52869 + (1));
i__42557__auto___52869 = G__52870;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothRemoteGATTCharacteristic.read_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothRemoteGATTCharacteristic.read_value.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.readValue,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothRemoteGATTCharacteristic.read_value.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothRemoteGATTCharacteristic.read_value.cljs$lang$applyTo = (function (seq52866){
var G__52867 = cljs.core.first.call(null,seq52866);
var seq52866__$1 = cljs.core.next.call(null,seq52866);
return bluetooth.BluetoothRemoteGATTCharacteristic.read_value.cljs$core$IFn$_invoke$arity$variadic(G__52867,seq52866__$1);
});

/**
 * Method.
 * 
 *   The BluetoothRemoteGATTCharacteristic.writeValue() method sets
 *   value property to the bytes contained in an `web.ArrayBuffer`
 *   returns a `web.Promise`.
 * 
 *   `BluetoothRemoteGATTCharacteristic.writeValue(value).then(function() { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.write_value = (function bluetooth$BluetoothRemoteGATTCharacteristic$write_value(this$,value){
return this$.writeValue(value);
});
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTCharacteristic.startNotifications() method
 *   a `web.Promise` to the BluetoothRemoteGATTCharacteristic instance
 *   there is an active notification on it.
 * 
 *   `BluetoothRemoteGATTCharacteristic.startNotifications().then(function(BluetoothRemoteGATTCharacteristic) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.start_notifications = (function bluetooth$BluetoothRemoteGATTCharacteristic$start_notifications(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52873 = arguments.length;
var i__42557__auto___52874 = (0);
while(true){
if((i__42557__auto___52874 < len__42556__auto___52873)){
args__42563__auto__.push((arguments[i__42557__auto___52874]));

var G__52875 = (i__42557__auto___52874 + (1));
i__42557__auto___52874 = G__52875;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothRemoteGATTCharacteristic.start_notifications.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothRemoteGATTCharacteristic.start_notifications.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.startNotifications,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothRemoteGATTCharacteristic.start_notifications.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothRemoteGATTCharacteristic.start_notifications.cljs$lang$applyTo = (function (seq52871){
var G__52872 = cljs.core.first.call(null,seq52871);
var seq52871__$1 = cljs.core.next.call(null,seq52871);
return bluetooth.BluetoothRemoteGATTCharacteristic.start_notifications.cljs$core$IFn$_invoke$arity$variadic(G__52872,seq52871__$1);
});

/**
 * Method.
 * 
 *   The BluetoothRemoteGATTCharacteristic.stopNotifications() method
 *   a `web.Promise` to the BluetoothRemoteGATTCharacteristic instance
 *   there is no longer an active notification on it.
 * 
 *   `BluetoothRemoteGATTCharacteristic.stopNotifications().then(function(BluetoothRemoteGATTCharacteristic) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.stop_notifications = (function bluetooth$BluetoothRemoteGATTCharacteristic$stop_notifications(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52878 = arguments.length;
var i__42557__auto___52879 = (0);
while(true){
if((i__42557__auto___52879 < len__42556__auto___52878)){
args__42563__auto__.push((arguments[i__42557__auto___52879]));

var G__52880 = (i__42557__auto___52879 + (1));
i__42557__auto___52879 = G__52880;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothRemoteGATTCharacteristic.stop_notifications.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothRemoteGATTCharacteristic.stop_notifications.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.stopNotifications,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothRemoteGATTCharacteristic.stop_notifications.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothRemoteGATTCharacteristic.stop_notifications.cljs$lang$applyTo = (function (seq52876){
var G__52877 = cljs.core.first.call(null,seq52876);
var seq52876__$1 = cljs.core.next.call(null,seq52876);
return bluetooth.BluetoothRemoteGATTCharacteristic.stop_notifications.cljs$core$IFn$_invoke$arity$variadic(G__52877,seq52876__$1);
});

/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.properties read-only property
 *   a `bluetooth.BluetoothCharacteristicProperties` instance containing
 *   properties of this characteristic.
 * 
 *   `var properties = BluetoothRemoteGATTCharacteristic.properties`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.properties = (function bluetooth$BluetoothRemoteGATTCharacteristic$properties(this$){
return this$.properties();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.properties read-only property
 *   a `bluetooth.BluetoothCharacteristicProperties` instance containing
 *   properties of this characteristic.
 * 
 *   `var properties = BluetoothRemoteGATTCharacteristic.properties`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.set_properties_BANG_ = (function bluetooth$BluetoothRemoteGATTCharacteristic$set_properties_BANG_(this$,val){
return (this$["properties"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.service read-only property
 *   the `bluetooth.BluetoothGATTService` this characteristic belongs
 * 
 *   `var bluetoothRemoteGATTServiceInstance = BluetoothRemoteGATTCharacteristic.service`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/service`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.service = (function bluetooth$BluetoothRemoteGATTCharacteristic$service(this$){
return this$.service();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.service read-only property
 *   the `bluetooth.BluetoothGATTService` this characteristic belongs
 * 
 *   `var bluetoothRemoteGATTServiceInstance = BluetoothRemoteGATTCharacteristic.service`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/service`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.set_service_BANG_ = (function bluetooth$BluetoothRemoteGATTCharacteristic$set_service_BANG_(this$,val){
return (this$["service"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.uuid read-only property
 *   `dom.DOMString` containing the UUID of the characteristic, for
 *   '00002a37-0000-1000-8000-00805f9b34fb' for the Heart Rate Measurement
 * 
 *   `var uuid = BluetoothRemoteGATTCharacteristic.uuid`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.uuid = (function bluetooth$BluetoothRemoteGATTCharacteristic$uuid(this$){
return this$.uuid();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.uuid read-only property
 *   `dom.DOMString` containing the UUID of the characteristic, for
 *   '00002a37-0000-1000-8000-00805f9b34fb' for the Heart Rate Measurement
 * 
 *   `var uuid = BluetoothRemoteGATTCharacteristic.uuid`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.set_uuid_BANG_ = (function bluetooth$BluetoothRemoteGATTCharacteristic$set_uuid_BANG_(this$,val){
return (this$["uuid"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.value read-only property
 *   currently cached characteristic value. This value gets updated
 *   the value of the characteristic is read or updated via a notification
 *   indication.
 * 
 *   `var value = BluetoothRemoteGATTCharacteristic.value`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/value`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.value = (function bluetooth$BluetoothRemoteGATTCharacteristic$value(this$){
return this$.value();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTCharacteristic.value read-only property
 *   currently cached characteristic value. This value gets updated
 *   the value of the characteristic is read or updated via a notification
 *   indication.
 * 
 *   `var value = BluetoothRemoteGATTCharacteristic.value`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/value`
 */
bluetooth.BluetoothRemoteGATTCharacteristic.set_value_BANG_ = (function bluetooth$BluetoothRemoteGATTCharacteristic$set_value_BANG_(this$,val){
return (this$["value"] = val);
});

//# sourceMappingURL=BluetoothRemoteGATTCharacteristic.js.map?rel=1565798860093
