(ns web.bluetooth.BluetoothRemoteGATTDescriptor
  "The BluetoothRemoteGATTDescriptor interface of the Web Bluetooth
  provides a GATT Descriptor, which provides further information
  a characteristic’s value."
  (:refer-clojure :exclude [uuid]))

(defn read-value
  "Method.

  The BluetoothRemoteGATTDescriptor.readValue() method returns
  `js.Promise` that resolves to an `js.ArrayBuffer` holding a duplicate
  the value property if it is available and supported. Otherwise
  throws an error.

  `BluetoothRemoteGATTDescriptor.readValue().then(function(value[]) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/readValue`"
  [this & args]
  (apply (-> this .-readValue) (concat [this] args)))

(defn characteristic
  "Property.

  The BluetoothRemoteGATTDescriptor.characteristic read-only property
  the `web.bluetooth.BluetoothRemoteGATTCharacteristic` this descriptor
  to.

  `var characteristic = BluetoothRemoteGATTCharacteristic.characteristic`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic`"
  [this]
  (-> this (.characteristic)))

(defn set-characteristic!
  "Property.

  The BluetoothRemoteGATTDescriptor.characteristic read-only property
  the `web.bluetooth.BluetoothRemoteGATTCharacteristic` this descriptor
  to.

  `var characteristic = BluetoothRemoteGATTCharacteristic.characteristic`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic`"
  [this val]
  (aset this "characteristic" val))

(defn uuid
  "Property.

  The BluetoothRemoteGATTDescriptor.uuid read-only property returns
  UUID of the characteristic descriptor, for example '00002902-0000-1000-8000-00805f9b34fb'
  theClient Characteristic Configuration descriptor.

  `var uuid = BluetoothRemoteGATTDescriptor.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid`"
  [this]
  (-> this (.uuid)))

(defn set-uuid!
  "Property.

  The BluetoothRemoteGATTDescriptor.uuid read-only property returns
  UUID of the characteristic descriptor, for example '00002902-0000-1000-8000-00805f9b34fb'
  theClient Characteristic Configuration descriptor.

  `var uuid = BluetoothRemoteGATTDescriptor.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid`"
  [this val]
  (aset this "uuid" val))

(defn value
  "Property.

  The BluetoothRemoteGATTDescriptor.value read-only property returns
  `js.ArrayBuffer` containing the currently cached descriptor value.
  value gets updated when the value of the descriptor is read.

  `var characteristic = BluetoothRemoteGATTDescriptor.characteristic`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The BluetoothRemoteGATTDescriptor.value read-only property returns
  `js.ArrayBuffer` containing the currently cached descriptor value.
  value gets updated when the value of the descriptor is read.

  `var characteristic = BluetoothRemoteGATTDescriptor.characteristic`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/value`"
  [this val]
  (aset this "value" val))

(defn write-value
  "Property.

  The BluetoothRemoteGATTDescriptor.writeValue() method sets the
  property to the bytes contained in an `js.ArrayBuffer` and returns
  `js.Promise`.

  `BluetoothRemoteGATTDescriptor.writeValue(array[]).then(function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/writeValue`"
  [this]
  (-> this (.writeValue)))

(defn set-write-value!
  "Property.

  The BluetoothRemoteGATTDescriptor.writeValue() method sets the
  property to the bytes contained in an `js.ArrayBuffer` and returns
  `js.Promise`.

  `BluetoothRemoteGATTDescriptor.writeValue(array[]).then(function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/writeValue`"
  [this val]
  (aset this "writeValue" val))

