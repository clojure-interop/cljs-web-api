(ns web.bluetooth.BluetoothRemoteGATTCharacteristic
  "The BluetoothRemoteGattCharacteristic interface of the Web Bluetooth
  represents a GATT Characteristic, which is a basic data element
  provides further information about a peripheral’s service."
  (:refer-clojure :exclude [uuid]))

(defn get-descriptor
  "Method.

  The BluetoothRemoteGATTCharacteristic.getDescriptor() method
  a `js.Promise` that resolves to the first `BluetoothGATTDescriptor`
  a given descriptor UUID.

  `BluetoothRemoteGATTCharacteristic.getDescriptor(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptor) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor`"
  [this bluetooth-descriptor-uuid]
  (-> this (.getDescriptor bluetooth-descriptor-uuid)))

(defn get-descriptors
  "Method.

  The BluetoothRemoteGATTCharacteristic.getDescriptors() method
  a `js.Promise` that resolves to an `js.Array` of all `BluetoothGATTDescriptor`
  for a given descriptor UUID.

  `BluetoothRemoteGATTCharacteristic.getDescriptors(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptors[]) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors`"
  [this bluetooth-descriptor-uuid]
  (-> this (.getDescriptors bluetooth-descriptor-uuid)))

(defn read-value
  "Method.

  The BluetoothRemoteGATTCharacteristic.readValue() method returns
  `js.Promise` that resolves to a `js.DataView` holding a duplicate
  the value property if it is available and supported. Otherwise
  throws an error.

  `BluetoothRemoteGATTCharacteristic.readValue().then(function(dataView) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue`"
  [this & args]
  (-> this .-readValue (.apply this (clj->js args))))

(defn write-value
  "Method.

  The BluetoothRemoteGATTCharacteristic.writeValue() method sets
  value property to the bytes contained in an `js.ArrayBuffer`
  returns a `js.Promise`.

  `BluetoothRemoteGATTCharacteristic.writeValue(value).then(function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue`"
  [this value]
  (-> this (.writeValue value)))

(defn start-notifications
  "Method.

  The BluetoothRemoteGATTCharacteristic.startNotifications() method
  a `js.Promise` to the BluetoothRemoteGATTCharacteristic instance
  there is an active notification on it.

  `BluetoothRemoteGATTCharacteristic.startNotifications().then(function(BluetoothRemoteGATTCharacteristic) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications`"
  [this & args]
  (-> this .-startNotifications (.apply this (clj->js args))))

(defn stop-notifications
  "Method.

  The BluetoothRemoteGATTCharacteristic.stopNotifications() method
  a `js.Promise` to the BluetoothRemoteGATTCharacteristic instance
  there is no longer an active notification on it.

  `BluetoothRemoteGATTCharacteristic.stopNotifications().then(function(BluetoothRemoteGATTCharacteristic) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications`"
  [this & args]
  (-> this .-stopNotifications (.apply this (clj->js args))))

(defn service
  "Property.

  The BluetoothRemoteGATTCharacteristic.service read-only property
  the `BluetoothGATTService` this characteristic belongs to.

  `var bluetoothRemoteGATTServiceInstance = BluetoothRemoteGATTCharacteristic.service`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/service`"
  [this]
  (-> this (.-service)))

(defn set-service!
  "Property.

  The BluetoothRemoteGATTCharacteristic.service read-only property
  the `BluetoothGATTService` this characteristic belongs to.

  `var bluetoothRemoteGATTServiceInstance = BluetoothRemoteGATTCharacteristic.service`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/service`"
  [this val]
  (aset this "service" val))

(defn uuid
  "Property.

  The BluetoothRemoteGATTCharacteristic.uuid read-only property
  `web.dom.DOMString` containing the UUID of the characteristic,
  example '00002a37-0000-1000-8000-00805f9b34fb' for the Heart
  Measurement characteristic.

  `var uuid = BluetoothRemoteGATTCharacteristic.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid`"
  [this]
  (-> this (.-uuid)))

(defn set-uuid!
  "Property.

  The BluetoothRemoteGATTCharacteristic.uuid read-only property
  `web.dom.DOMString` containing the UUID of the characteristic,
  example '00002a37-0000-1000-8000-00805f9b34fb' for the Heart
  Measurement characteristic.

  `var uuid = BluetoothRemoteGATTCharacteristic.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid`"
  [this val]
  (aset this "uuid" val))

(defn properties
  "Property.

  The BluetoothRemoteGATTCharacteristic.properties read-only property
  a `web.bluetooth.BluetoothCharacteristicProperties` instance
  the properties of this characteristic.

  `var properties = BluetoothRemoteGATTCharacteristic.properties`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties`"
  [this]
  (-> this (.-properties)))

(defn set-properties!
  "Property.

  The BluetoothRemoteGATTCharacteristic.properties read-only property
  a `web.bluetooth.BluetoothCharacteristicProperties` instance
  the properties of this characteristic.

  `var properties = BluetoothRemoteGATTCharacteristic.properties`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties`"
  [this val]
  (aset this "properties" val))

(defn value
  "Property.

  The BluetoothRemoteGATTCharacteristic.value read-only property
  currently cached characteristic value. This value gets updated
  the value of the characteristic is read or updated via a notification
  indication.

  `var value = BluetoothRemoteGATTCharacteristic.value`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/value`"
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  The BluetoothRemoteGATTCharacteristic.value read-only property
  currently cached characteristic value. This value gets updated
  the value of the characteristic is read or updated via a notification
  indication.

  `var value = BluetoothRemoteGATTCharacteristic.value`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/value`"
  [this val]
  (aset this "value" val))

