(ns bluetooth.BluetoothRemoteGATTCharacteristic
  "The BluetoothRemoteGattCharacteristic interface of the Web Bluetooth
  represents a GATT Characteristic, which is a basic data element
  provides further information about a peripheral’s service."
  (:refer-clojure :exclude [uuid]))

(defn get-descriptor
  "Method.

  The BluetoothRemoteGATTCharacteristic.getDescriptor() method
  a `web.Promise` that resolves to the first `bluetooth.BluetoothGATTDescriptor`
  a given descriptor UUID.

  `BluetoothRemoteGATTCharacteristic.getDescriptor(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptor) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor`"
  [this bluetooth-descriptor-uuid]
  (-> this (.getDescriptor bluetooth-descriptor-uuid)))

(defn get-descriptors
  "Method.

  The BluetoothRemoteGATTCharacteristic.getDescriptors() method
  a `web.Promise` that resolves to an `web.Array` of all `bluetooth.BluetoothGATTDescriptor`
  for a given descriptor UUID.

  `BluetoothRemoteGATTCharacteristic.getDescriptors(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptors[]) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors`"
  [this bluetooth-descriptor-uuid]
  (-> this (.getDescriptors bluetooth-descriptor-uuid)))

(defn read-value
  "Method.

  The BluetoothRemoteGATTCharacteristic.readValue() method returns
  `web.Promise` that resolves to a `web.DataView` holding a duplicate
  the value property if it is available and supported. Otherwise
  throws an error.

  `BluetoothRemoteGATTCharacteristic.readValue().then(function(dataView) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue`"
  [this & args]
  (apply (-> this .-readValue) (concat [this] args)))

(defn write-value
  "Method.

  The BluetoothRemoteGATTCharacteristic.writeValue() method sets
  value property to the bytes contained in an `web.ArrayBuffer`
  returns a `web.Promise`.

  `BluetoothRemoteGATTCharacteristic.writeValue(value).then(function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue`"
  [this value]
  (-> this (.writeValue value)))

(defn start-notifications
  "Method.

  The BluetoothRemoteGATTCharacteristic.startNotifications() method
  a `web.Promise` to the BluetoothRemoteGATTCharacteristic instance
  there is an active notification on it.

  `BluetoothRemoteGATTCharacteristic.startNotifications().then(function(BluetoothRemoteGATTCharacteristic) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications`"
  [this & args]
  (apply (-> this .-startNotifications) (concat [this] args)))

(defn stop-notifications
  "Method.

  The BluetoothRemoteGATTCharacteristic.stopNotifications() method
  a `web.Promise` to the BluetoothRemoteGATTCharacteristic instance
  there is no longer an active notification on it.

  `BluetoothRemoteGATTCharacteristic.stopNotifications().then(function(BluetoothRemoteGATTCharacteristic) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications`"
  [this & args]
  (apply (-> this .-stopNotifications) (concat [this] args)))

(defn properties
  "Property.

  The BluetoothRemoteGATTCharacteristic.properties read-only property
  a `bluetooth.BluetoothCharacteristicProperties` instance containing
  properties of this characteristic.

  `var properties = BluetoothRemoteGATTCharacteristic.properties`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties`"
  [this]
  (-> this (.properties)))

(defn set-properties!
  "Property.

  The BluetoothRemoteGATTCharacteristic.properties read-only property
  a `bluetooth.BluetoothCharacteristicProperties` instance containing
  properties of this characteristic.

  `var properties = BluetoothRemoteGATTCharacteristic.properties`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties`"
  [this val]
  (aset this "properties" val))

(defn service
  "Property.

  The BluetoothRemoteGATTCharacteristic.service read-only property
  the `bluetooth.BluetoothGATTService` this characteristic belongs

  `var bluetoothRemoteGATTServiceInstance = BluetoothRemoteGATTCharacteristic.service`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/service`"
  [this]
  (-> this (.service)))

(defn set-service!
  "Property.

  The BluetoothRemoteGATTCharacteristic.service read-only property
  the `bluetooth.BluetoothGATTService` this characteristic belongs

  `var bluetoothRemoteGATTServiceInstance = BluetoothRemoteGATTCharacteristic.service`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/service`"
  [this val]
  (aset this "service" val))

(defn uuid
  "Property.

  The BluetoothRemoteGATTCharacteristic.uuid read-only property
  `dom.DOMString` containing the UUID of the characteristic, for
  '00002a37-0000-1000-8000-00805f9b34fb' for the Heart Rate Measurement

  `var uuid = BluetoothRemoteGATTCharacteristic.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid`"
  [this]
  (-> this (.uuid)))

(defn set-uuid!
  "Property.

  The BluetoothRemoteGATTCharacteristic.uuid read-only property
  `dom.DOMString` containing the UUID of the characteristic, for
  '00002a37-0000-1000-8000-00805f9b34fb' for the Heart Rate Measurement

  `var uuid = BluetoothRemoteGATTCharacteristic.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid`"
  [this val]
  (aset this "uuid" val))

(defn value
  "Property.

  The BluetoothRemoteGATTCharacteristic.value read-only property
  currently cached characteristic value. This value gets updated
  the value of the characteristic is read or updated via a notification
  indication.

  `var value = BluetoothRemoteGATTCharacteristic.value`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic/value`"
  [this]
  (-> this (.value)))

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

