// Compiled by ClojureScript 1.9.946 {}
goog.provide('bluetooth.BluetoothAdvertisingData');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The appearance read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns one of the values defined by the org.bluetooth.characteristic.gap.appearance
 * 
 *   `var appearance = BluetoothAdvertisingData.appearance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/appearance`
 */
bluetooth.BluetoothAdvertisingData.appearance = (function bluetooth$BluetoothAdvertisingData$appearance(this$){
return this$.appearance();
});
/**
 * Property.
 * 
 *   The appearance read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns one of the values defined by the org.bluetooth.characteristic.gap.appearance
 * 
 *   `var appearance = BluetoothAdvertisingData.appearance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/appearance`
 */
bluetooth.BluetoothAdvertisingData.set_appearance_BANG_ = (function bluetooth$BluetoothAdvertisingData$set_appearance_BANG_(this$,val){
return (this$["appearance"] = val);
});
/**
 * Property.
 * 
 *   The manufacturerData read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns a map that relates Company Identifier Codes to `web.ArrayBuffers`.
 * 
 *   `varmanufacturerData = BluetoothAdvertisingData.manufacturerData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/manufacturerData`
 */
bluetooth.BluetoothAdvertisingData.manufacturer_data = (function bluetooth$BluetoothAdvertisingData$manufacturer_data(this$){
return this$.manufacturerData();
});
/**
 * Property.
 * 
 *   The manufacturerData read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns a map that relates Company Identifier Codes to `web.ArrayBuffers`.
 * 
 *   `varmanufacturerData = BluetoothAdvertisingData.manufacturerData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/manufacturerData`
 */
bluetooth.BluetoothAdvertisingData.set_manufacturer_data_BANG_ = (function bluetooth$BluetoothAdvertisingData$set_manufacturer_data_BANG_(this$,val){
return (this$["manufacturerData"] = val);
});
/**
 * Property.
 * 
 *   The rssi read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns the power at which the device’s packets are being received,
 *   in dBm. This is used to compute the path loss as this.txPower
 *   this.rssi.
 * 
 *   `var rssi = BluetoothAdvertisingData.rssi;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/rssi`
 */
bluetooth.BluetoothAdvertisingData.rssi = (function bluetooth$BluetoothAdvertisingData$rssi(this$){
return this$.rssi();
});
/**
 * Property.
 * 
 *   The rssi read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns the power at which the device’s packets are being received,
 *   in dBm. This is used to compute the path loss as this.txPower
 *   this.rssi.
 * 
 *   `var rssi = BluetoothAdvertisingData.rssi;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/rssi`
 */
bluetooth.BluetoothAdvertisingData.set_rssi_BANG_ = (function bluetooth$BluetoothAdvertisingData$set_rssi_BANG_(this$,val){
return (this$["rssi"] = val);
});
/**
 * Property.
 * 
 *   The serviceData read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns a map that relates UUIDs to `web.ArrayBuffers`.
 * 
 *   `var serviceData = BluetoothAdvertisingData.serviceData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/serviceData`
 */
bluetooth.BluetoothAdvertisingData.service_data = (function bluetooth$BluetoothAdvertisingData$service_data(this$){
return this$.serviceData();
});
/**
 * Property.
 * 
 *   The serviceData read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns a map that relates UUIDs to `web.ArrayBuffers`.
 * 
 *   `var serviceData = BluetoothAdvertisingData.serviceData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/serviceData`
 */
bluetooth.BluetoothAdvertisingData.set_service_data_BANG_ = (function bluetooth$BluetoothAdvertisingData$set_service_data_BANG_(this$,val){
return (this$["serviceData"] = val);
});
/**
 * Property.
 * 
 *   The txPower read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns the transmission power at which the device is broadcasting,
 *   in dBm. This is used to compute the path loss as this.txPower
 *   this.rssi.
 * 
 *   `var power = BluetoothAdvertisingData.txPower;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/txPower`
 */
bluetooth.BluetoothAdvertisingData.tx_power = (function bluetooth$BluetoothAdvertisingData$tx_power(this$){
return this$.txPower();
});
/**
 * Property.
 * 
 *   The txPower read-only property of the `bluetooth.BluetoothAdvertisingData`
 *   returns the transmission power at which the device is broadcasting,
 *   in dBm. This is used to compute the path loss as this.txPower
 *   this.rssi.
 * 
 *   `var power = BluetoothAdvertisingData.txPower;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/txPower`
 */
bluetooth.BluetoothAdvertisingData.set_tx_power_BANG_ = (function bluetooth$BluetoothAdvertisingData$set_tx_power_BANG_(this$,val){
return (this$["txPower"] = val);
});

//# sourceMappingURL=BluetoothAdvertisingData.js.map?rel=1565798812781
