// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.BluetoothDevice');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The BluetoothDevice.connectGATT() method returns a `web.Promise`
 *   resolves to an instance of `bluetooth.BluetoothGATTRemoteServer`.
 * 
 *   `instanceOfBluetoothDevice.connectGATT().then(function(BluetoothGATTRemoteServer) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/connectGATT`
 */
bluetooth.BluetoothDevice.connect_gatt = (function bluetooth$BluetoothDevice$connect_gatt(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52842 = arguments.length;
var i__42557__auto___52843 = (0);
while(true){
if((i__42557__auto___52843 < len__42556__auto___52842)){
args__42563__auto__.push((arguments[i__42557__auto___52843]));

var G__52844 = (i__42557__auto___52843 + (1));
i__42557__auto___52843 = G__52844;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return bluetooth.BluetoothDevice.connect_gatt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

bluetooth.BluetoothDevice.connect_gatt.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.connectGATT,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

bluetooth.BluetoothDevice.connect_gatt.cljs$lang$maxFixedArity = (1);

bluetooth.BluetoothDevice.connect_gatt.cljs$lang$applyTo = (function (seq52840){
var G__52841 = cljs.core.first.call(null,seq52840);
var seq52840__$1 = cljs.core.next.call(null,seq52840);
return bluetooth.BluetoothDevice.connect_gatt.cljs$core$IFn$_invoke$arity$variadic(G__52841,seq52840__$1);
});

/**
 * Property.
 * 
 *   The BluetoothDevice.adData read-only property returns instance
 *   `bluetooth.BluetoothAdvertisingData` containing the most recent
 *   data received for the device.
 * 
 *   `var instanceOfBluetoothAdData = instanceOfBluetoothDevice.adData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/adData`
 */
bluetooth.BluetoothDevice.ad_data = (function bluetooth$BluetoothDevice$ad_data(this$){
return this$.adData();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.adData read-only property returns instance
 *   `bluetooth.BluetoothAdvertisingData` containing the most recent
 *   data received for the device.
 * 
 *   `var instanceOfBluetoothAdData = instanceOfBluetoothDevice.adData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/adData`
 */
bluetooth.BluetoothDevice.set_ad_data_BANG_ = (function bluetooth$BluetoothDevice$set_ad_data_BANG_(this$,val){
return (this$["adData"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.deviceClass read-only property returns a
 *   representing the Bluetooth devices \"Class of Device\".
 * 
 *   `var deviceClass = instanceOfBluetoothDevice.deviceClass`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/deviceClass`
 */
bluetooth.BluetoothDevice.device_class = (function bluetooth$BluetoothDevice$device_class(this$){
return this$.deviceClass();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.deviceClass read-only property returns a
 *   representing the Bluetooth devices \"Class of Device\".
 * 
 *   `var deviceClass = instanceOfBluetoothDevice.deviceClass`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/deviceClass`
 */
bluetooth.BluetoothDevice.set_device_class_BANG_ = (function bluetooth$BluetoothDevice$set_device_class_BANG_(this$,val){
return (this$["deviceClass"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.gatt read-only property returns a reference
 *   the device's `bluetooth.BluetoothRemoteGATTServer`.
 * 
 *   `var gattServer = instanceOfBluetoothDevice.gatt`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt`
 */
bluetooth.BluetoothDevice.gatt = (function bluetooth$BluetoothDevice$gatt(this$){
return this$.gatt();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.gatt read-only property returns a reference
 *   the device's `bluetooth.BluetoothRemoteGATTServer`.
 * 
 *   `var gattServer = instanceOfBluetoothDevice.gatt`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt`
 */
bluetooth.BluetoothDevice.set_gatt_BANG_ = (function bluetooth$BluetoothDevice$set_gatt_BANG_(this$,val){
return (this$["gatt"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.gattServer read-only property returns a reference
 *   the device's GATT server or null if the device is disconnected.
 * 
 *   `var gattServer = instanceOfBluetoothDevice.gattServer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gattServer`
 */
bluetooth.BluetoothDevice.gatt_server = (function bluetooth$BluetoothDevice$gatt_server(this$){
return this$.gattServer();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.gattServer read-only property returns a reference
 *   the device's GATT server or null if the device is disconnected.
 * 
 *   `var gattServer = instanceOfBluetoothDevice.gattServer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gattServer`
 */
bluetooth.BluetoothDevice.set_gatt_server_BANG_ = (function bluetooth$BluetoothDevice$set_gatt_server_BANG_(this$,val){
return (this$["gattServer"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.id read-only property returns a `dom.DOMString`
 *   uniquely identifies a device.
 * 
 *   `var id = instanceOfBluetoothDevice.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/id`
 */
bluetooth.BluetoothDevice.id = (function bluetooth$BluetoothDevice$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.id read-only property returns a `dom.DOMString`
 *   uniquely identifies a device.
 * 
 *   `var id = instanceOfBluetoothDevice.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/id`
 */
bluetooth.BluetoothDevice.set_id_BANG_ = (function bluetooth$BluetoothDevice$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.name read-only property returns a `dom.DOMString`
 *   provides a human-readable name for the device.
 * 
 *   `var name = instanceOfBluetoothDevice.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/name`
 */
bluetooth.BluetoothDevice.name = (function bluetooth$BluetoothDevice$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.name read-only property returns a `dom.DOMString`
 *   provides a human-readable name for the device.
 * 
 *   `var name = instanceOfBluetoothDevice.name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/name`
 */
bluetooth.BluetoothDevice.set_name_BANG_ = (function bluetooth$BluetoothDevice$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.paired read-only property returns a `web.Boolean`
 *   indicating whether the device is paired with the system.
 * 
 *   `var paired = instanceOfBluetoothDevice.paired`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/paired`
 */
bluetooth.BluetoothDevice.paired = (function bluetooth$BluetoothDevice$paired(this$){
return this$.paired();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.paired read-only property returns a `web.Boolean`
 *   indicating whether the device is paired with the system.
 * 
 *   `var paired = instanceOfBluetoothDevice.paired`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/paired`
 */
bluetooth.BluetoothDevice.set_paired_BANG_ = (function bluetooth$BluetoothDevice$set_paired_BANG_(this$,val){
return (this$["paired"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.productID read-only property returns the
 *   Product ID field in the pnp_id characteristic in the device_information
 * 
 *   `var productID = instanceOfBluetoothDevice.productID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productID`
 */
bluetooth.BluetoothDevice.product_id = (function bluetooth$BluetoothDevice$product_id(this$){
return this$.productID();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.productID read-only property returns the
 *   Product ID field in the pnp_id characteristic in the device_information
 * 
 *   `var productID = instanceOfBluetoothDevice.productID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productID`
 */
bluetooth.BluetoothDevice.set_product_id_BANG_ = (function bluetooth$BluetoothDevice$set_product_id_BANG_(this$,val){
return (this$["productID"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.productVersion read-only property returns
 *   16-bit Product Version field in the pnp_id characteristic in
 *   device_information service.
 * 
 *   `var productVersion = instanceOfBluetoothDevice.productVersion`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productVersion`
 */
bluetooth.BluetoothDevice.product_version = (function bluetooth$BluetoothDevice$product_version(this$){
return this$.productVersion();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.productVersion read-only property returns
 *   16-bit Product Version field in the pnp_id characteristic in
 *   device_information service.
 * 
 *   `var productVersion = instanceOfBluetoothDevice.productVersion`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productVersion`
 */
bluetooth.BluetoothDevice.set_product_version_BANG_ = (function bluetooth$BluetoothDevice$set_product_version_BANG_(this$,val){
return (this$["productVersion"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.uuids read-only property lists the UUIDs
 *   GATT services provided by the device, that the current origin
 *   allowed to access.
 * 
 *   `var uuids[] =​ instanceOfBluetoothDevice.uuids`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/uuids`
 */
bluetooth.BluetoothDevice.uuids = (function bluetooth$BluetoothDevice$uuids(this$){
return this$.uuids();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.uuids read-only property lists the UUIDs
 *   GATT services provided by the device, that the current origin
 *   allowed to access.
 * 
 *   `var uuids[] =​ instanceOfBluetoothDevice.uuids`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/uuids`
 */
bluetooth.BluetoothDevice.set_uuids_BANG_ = (function bluetooth$BluetoothDevice$set_uuids_BANG_(this$,val){
return (this$["uuids"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.vendorID read-only property returns the 16-bit
 *   ID field in the pnp_id characteristic in the device_information
 * 
 *   `var vendorID = instanceOfBluetoothDevice.vendorID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorID`
 */
bluetooth.BluetoothDevice.vendor_id = (function bluetooth$BluetoothDevice$vendor_id(this$){
return this$.vendorID();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.vendorID read-only property returns the 16-bit
 *   ID field in the pnp_id characteristic in the device_information
 * 
 *   `var vendorID = instanceOfBluetoothDevice.vendorID`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorID`
 */
bluetooth.BluetoothDevice.set_vendor_id_BANG_ = (function bluetooth$BluetoothDevice$set_vendor_id_BANG_(this$,val){
return (this$["vendorID"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothDevice.vendorIDSource read-only property returns
 *   Vendor ID Source field in the pnp_id characteristic in the device_information
 * 
 *   `var vendorIDSource = instanceOfBluetoothDevice.vendorIDSource`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorIDSource`
 */
bluetooth.BluetoothDevice.vendor_id_source = (function bluetooth$BluetoothDevice$vendor_id_source(this$){
return this$.vendorIDSource();
});
/**
 * Property.
 * 
 *   The BluetoothDevice.vendorIDSource read-only property returns
 *   Vendor ID Source field in the pnp_id characteristic in the device_information
 * 
 *   `var vendorIDSource = instanceOfBluetoothDevice.vendorIDSource`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorIDSource`
 */
bluetooth.BluetoothDevice.set_vendor_id_source_BANG_ = (function bluetooth$BluetoothDevice$set_vendor_id_source_BANG_(this$,val){
return (this$["vendorIDSource"] = val);
});

//# sourceMappingURL=BluetoothDevice.js.map?rel=1565798859856
