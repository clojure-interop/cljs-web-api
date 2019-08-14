// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.BluetoothRemoteGATTService');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The BluetoothGATTService.getCharacteristic() method returns a
 *   to an instance of `bluetooth.BluetoothGATTCharacteristic` for
 *   given universally unique identifier (UUID).
 * 
 *   `bluetoothGATTServiceInstance.getCharacteristic(characteristic).then(function(BluetoothGATTCharacteristic) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristic`
 */
bluetooth.BluetoothRemoteGATTService.get_characteristic = (function bluetooth$BluetoothRemoteGATTService$get_characteristic(this$,characteristic){
return this$.getCharacteristic(characteristic);
});
/**
 * Method.
 * 
 *   The BluetoothGATTService.getCharacteristics() method returns
 *   `web.Promise` to a list of `bluetooth.BluetoothGATTCharacteristic`
 *   for a given universally unique identifier (UUID).
 * 
 *   `bluetoothGATTServiceInstance.getCharacteristics(characteristics).then(function(BluetoothGATTCharacteristic[]) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getCharacteristics`
 */
bluetooth.BluetoothRemoteGATTService.get_characteristics = (function bluetooth$BluetoothRemoteGATTService$get_characteristics(this$,characteristics){
return this$.getCharacteristics(characteristics);
});
/**
 * Method.
 * 
 *   The BluetoothGATTService.getIncludedService() method returns
 *   `web.Promise` to an instance of `bluetooth.BluetoothGATTService`
 *   a given universally unique identifier (UUID).
 * 
 *   `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedService`
 */
bluetooth.BluetoothRemoteGATTService.get_included_service = (function bluetooth$BluetoothRemoteGATTService$get_included_service(this$,service){
return this$.getIncludedService(service);
});
/**
 * Method.
 * 
 *   The BluetoothGATTService.getIncludedServices() method returns
 *   `web.Promise` to an `web.Array` of `bluetooth.BluetoothGATTService`
 *   for an optional universally unique identifier (UUID).
 * 
 *   `bluetoothGATTServiceInstance.getIncludedService(service).then(function(BluetoothGATTService) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/getIncludedServices`
 */
bluetooth.BluetoothRemoteGATTService.get_included_services = (function bluetooth$BluetoothRemoteGATTService$get_included_services(this$,service){
return this$.getIncludedServices(service);
});
/**
 * Property.
 * 
 *   The BluetoothGATTService.device read-only property returns information
 *   a Bluetooth device through an instance of `bluetooth.BluetoothDevice`.
 * 
 *   `var bluetoothDeviceInstance = BluetoothGATTService.device`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/device`
 */
bluetooth.BluetoothRemoteGATTService.device = (function bluetooth$BluetoothRemoteGATTService$device(this$){
return this$.device();
});
/**
 * Property.
 * 
 *   The BluetoothGATTService.device read-only property returns information
 *   a Bluetooth device through an instance of `bluetooth.BluetoothDevice`.
 * 
 *   `var bluetoothDeviceInstance = BluetoothGATTService.device`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/device`
 */
bluetooth.BluetoothRemoteGATTService.set_device_BANG_ = (function bluetooth$BluetoothRemoteGATTService$set_device_BANG_(this$,val){
return (this$["device"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothGATTService.isPrimary read-only property returns
 *   `web.Boolean` that indicates whether this is a primary service.
 *   it is not a primary service, it is a secondary service.
 * 
 *   `var isPrimary = BluetoothGATTService.isPrimary`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/isPrimary`
 */
bluetooth.BluetoothRemoteGATTService.is_primary = (function bluetooth$BluetoothRemoteGATTService$is_primary(this$){
return this$.isPrimary();
});
/**
 * Property.
 * 
 *   The BluetoothGATTService.isPrimary read-only property returns
 *   `web.Boolean` that indicates whether this is a primary service.
 *   it is not a primary service, it is a secondary service.
 * 
 *   `var isPrimary = BluetoothGATTService.isPrimary`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/isPrimary`
 */
bluetooth.BluetoothRemoteGATTService.set_is_primary_BANG_ = (function bluetooth$BluetoothRemoteGATTService$set_is_primary_BANG_(this$,val){
return (this$["isPrimary"] = val);
});
/**
 * Property.
 * 
 *   The BluetoothGATTService.uuid read-only property returns a `dom.DOMString`
 *   the UUID of this service.
 * 
 *   `var uuid = BluetoothGATTService.uuid`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid`
 */
bluetooth.BluetoothRemoteGATTService.uuid = (function bluetooth$BluetoothRemoteGATTService$uuid(this$){
return this$.uuid();
});
/**
 * Property.
 * 
 *   The BluetoothGATTService.uuid read-only property returns a `dom.DOMString`
 *   the UUID of this service.
 * 
 *   `var uuid = BluetoothGATTService.uuid`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid`
 */
bluetooth.BluetoothRemoteGATTService.set_uuid_BANG_ = (function bluetooth$BluetoothRemoteGATTService$set_uuid_BANG_(this$,val){
return (this$["uuid"] = val);
});

//# sourceMappingURL=BluetoothRemoteGATTService.js.map?rel=1565798842241
