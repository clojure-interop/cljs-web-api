(ns web.bluetooth.BluetoothAdvertisingData
  "The BluetoothDevice interface of the Web Bluetooth API provides
  data about a particular Bluetooth device."
  (:refer-clojure :exclude []))

(defn appearance
  "Property.

  The appearance read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns one of the values defined by the org.bluetooth.characteristic.gap.appearance

  `var appearance = BluetoothAdvertisingData.appearance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/appearance`"
  [this]
  (-> this (.appearance)))

(defn set-appearance!
  "Property.

  The appearance read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns one of the values defined by the org.bluetooth.characteristic.gap.appearance

  `var appearance = BluetoothAdvertisingData.appearance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/appearance`"
  [this val]
  (aset this "appearance" val))

(defn manufacturer-data
  "Property.

  The manufacturerData read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns a map that relates Company Identifier Codes to `ArrayBuffers`.

  `varmanufacturerData = BluetoothAdvertisingData.manufacturerData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/manufacturerData`"
  [this]
  (-> this (.manufacturerData)))

(defn set-manufacturer-data!
  "Property.

  The manufacturerData read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns a map that relates Company Identifier Codes to `ArrayBuffers`.

  `varmanufacturerData = BluetoothAdvertisingData.manufacturerData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/manufacturerData`"
  [this val]
  (aset this "manufacturerData" val))

(defn rssi
  "Property.

  The rssi read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns the power at which the device’s packets are being received,
  in dBm. This is used to compute the path loss as this.txPower
  this.rssi.

  `var rssi = BluetoothAdvertisingData.rssi;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/rssi`"
  [this]
  (-> this (.rssi)))

(defn set-rssi!
  "Property.

  The rssi read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns the power at which the device’s packets are being received,
  in dBm. This is used to compute the path loss as this.txPower
  this.rssi.

  `var rssi = BluetoothAdvertisingData.rssi;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/rssi`"
  [this val]
  (aset this "rssi" val))

(defn service-data
  "Property.

  The serviceData read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns a map that relates UUIDs to `ArrayBuffers`.

  `var serviceData = BluetoothAdvertisingData.serviceData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/serviceData`"
  [this]
  (-> this (.serviceData)))

(defn set-service-data!
  "Property.

  The serviceData read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns a map that relates UUIDs to `ArrayBuffers`.

  `var serviceData = BluetoothAdvertisingData.serviceData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/serviceData`"
  [this val]
  (aset this "serviceData" val))

(defn tx-power
  "Property.

  The txPower read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns the transmission power at which the device is broadcasting,
  in dBm. This is used to compute the path loss as this.txPower
  this.rssi.

  `var power = BluetoothAdvertisingData.txPower;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/txPower`"
  [this]
  (-> this (.txPower)))

(defn set-tx-power!
  "Property.

  The txPower read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns the transmission power at which the device is broadcasting,
  in dBm. This is used to compute the path loss as this.txPower
  this.rssi.

  `var power = BluetoothAdvertisingData.txPower;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/txPower`"
  [this val]
  (aset this "txPower" val))

