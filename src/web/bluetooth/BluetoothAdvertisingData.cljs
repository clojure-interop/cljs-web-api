(ns web.bluetooth.BluetoothAdvertisingData
  "The BluetoothDevice interface of the Web Bluetooth API provides
  data about a particular Bluetooth device."
  (:refer-clojure :exclude []))

(defn appearance
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The appearance read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns one of the values defined by the org.bluetooth.characteristic.gap.appearance

  `var appearance = BluetoothAdvertisingData.appearance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/appearance`"
  [this]
  (-> this (.-appearance)))

(defn tx-power
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The txPower read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns the transmission power at which the device is broadcasting,
  in dBm. This is used to compute the path loss as this.txPower
  this.rssi.

  `var power = BluetoothAdvertisingData.txPower;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/txPower`"
  [this]
  (-> this (.-txPower)))

(defn rssi
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The rssi read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns the power at which the device’s packets are being received,
  in dBm. This is used to compute the path loss as this.txPower
  this.rssi.

  `var rssi = BluetoothAdvertisingData.rssi;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/rssi`"
  [this]
  (-> this (.-rssi)))

(defn manufacturer-data
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The manufacturerData read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns a map that relates Company Identifier Codes to `ArrayBuffers`.

  `varmanufacturerData = BluetoothAdvertisingData.manufacturerData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/manufacturerData`"
  [this]
  (-> this (.-manufacturerData)))

(defn service-data
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The serviceData read-only property of the `web.bluetooth.BluetoothAdvertisingData`
  returns a map that relates UUIDs to `ArrayBuffers`.

  `var serviceData = BluetoothAdvertisingData.serviceData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothAdvertisingData/serviceData`"
  [this]
  (-> this (.-serviceData)))

