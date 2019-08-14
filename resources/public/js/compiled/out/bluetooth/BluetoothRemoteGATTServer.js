// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.BluetoothRemoteGATTServer');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTServer.connect() method causes the script
 *   environment to connect to this.device.
 * 
 *   `BluetoothRemoteGATTServer.connect()
 *   .then(function(bluetoothRemoteGATTServer) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/connect`
 */
bluetooth.BluetoothRemoteGATTServer.connect = (function bluetooth$BluetoothRemoteGATTServer$connect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43218 = arguments.length;
var i__42557__auto___43219 = (0);
while(true){
if((i__42557__auto___43219 < len__42556__auto___43218)){
args__42563__auto__.push((arguments[i__42557__auto___43219]));

var G__43220 = (i__42557__auto___43219 + (1));
i__42557__auto___43219 = G__43220;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothRemoteGATTServer.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothRemoteGATTServer.connect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.connect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothRemoteGATTServer.connect.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothRemoteGATTServer.connect.cljs$lang$applyTo = (function (seq43216){
var G__43217 = cljs.core.first.call(null,seq43216);
var seq43216__$1 = cljs.core.next.call(null,seq43216);
return bluetooth.BluetoothRemoteGATTServer.connect.cljs$core$IFn$_invoke$arity$variadic(G__43217,seq43216__$1);
});

/**
 * Method.
 * 
 *   The BluetoothRemoteGATTServer.disconnect() method causes the
 *   execution environment to disconnect from this.device.
 * 
 *   `BluetoothRemoteGATTServer.disconnect()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/disconnect`
 */
bluetooth.BluetoothRemoteGATTServer.disconnect = (function bluetooth$BluetoothRemoteGATTServer$disconnect(this$){
return this$.disconnect();
});
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTServer.getPrimaryService() method returns
 *   promise to the primary `bluetooth.BluetoothGATTService` offered
 *   the bluetooth device for a specified `bluetooth.BluetoothServiceUUID`.
 * 
 *   `BluetoothRemoteGATTServer.getPrimaryService(bluetoothServiceUUID).then(function(bluetoothGATTService) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/getPrimaryService`
 */
bluetooth.BluetoothRemoteGATTServer.get_primary_service = (function bluetooth$BluetoothRemoteGATTServer$get_primary_service(this$,bluetooth_service_uuid){
return this$.getPrimaryService(bluetooth_service_uuid);
});
/**
 * Method.
 * 
 *   The BluetoothRemoteGATTServer.getPrimaryServices() method returns
 *   promise to a list of primary `bluetooth.BluetoothGATTService`
 *   offered by the bluetooth device for a specified BluetoothServiceUUID.
 * 
 *   `BluetoothRemoteGATTServer.getPrimaryServices(bluetoothServiceUUID).then(function(bluetoothGATTServices) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/getPrimaryServices`
 */
bluetooth.BluetoothRemoteGATTServer.get_primary_services = (function bluetooth$BluetoothRemoteGATTServer$get_primary_services(this$,bluetooth_service_uuid){
return this$.getPrimaryServices(bluetooth_service_uuid);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTServer.connected read-only property returns
 *   boolean value that returns true while this script execution environment
 *   connected to this.device. It can be false while the user agent
 *   physically connected.
 * 
 *   `var connected = BluetoothRemoteGATTServer.connected`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/connected`
 */
bluetooth.BluetoothRemoteGATTServer.connected = (function bluetooth$BluetoothRemoteGATTServer$connected(this$){
return this$.connected();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTServer.connected read-only property returns
 *   boolean value that returns true while this script execution environment
 *   connected to this.device. It can be false while the user agent
 *   physically connected.
 * 
 *   `var connected = BluetoothRemoteGATTServer.connected`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/connected`
 */
bluetooth.BluetoothRemoteGATTServer.set_connected_BANG_ = (function bluetooth$BluetoothRemoteGATTServer$set_connected_BANG_(this$,val){
return (this$["connected"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTServer.device read-only property returns
 *   reference to the `bluetooth.BluetoothDevice` running the server.
 * 
 *   `var device = BluetoothRemoteGATTServer.device`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/device`
 */
bluetooth.BluetoothRemoteGATTServer.device = (function bluetooth$BluetoothRemoteGATTServer$device(this$){
return this$.device();
});
/**
 * Property.
 * 
 *   The BluetoothRemoteGATTServer.device read-only property returns
 *   reference to the `bluetooth.BluetoothDevice` running the server.
 * 
 *   `var device = BluetoothRemoteGATTServer.device`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer/device`
 */
bluetooth.BluetoothRemoteGATTServer.set_device_BANG_ = (function bluetooth$BluetoothRemoteGATTServer$set_device_BANG_(this$,val){
return (this$["device"] = val);
});

//# sourceMappingURL=BluetoothRemoteGATTServer.js.map?rel=1565798804640
