(ns web.bluetooth.BluetoothRemoteGATTDescriptor
  "The BluetoothRemoteGATTDescriptor interface of the Web Bluetooth
  provides a GATT Descriptor, which provides further information
  a characteristic’s value."
  (:refer-clojure :exclude [uuid]))

(defn read-value
  "Method.

  [Experimental]

  The BluetoothRemoteGATTDescriptor.readValue() method returns
  `js.Promise` that resolves to an `js.ArrayBuffer` holding a duplicate
  the value property if it is available and supported. Otherwise
  throws an error.

  `BluetoothRemoteGATTDescriptor.readValue().then(function(value[]) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/readValue`"
  [this & args]
  (-> this .-readValue (.apply this (clj->js args))))

(defn write-value
  "Method.

  [Experimental]

  The BluetoothRemoteGATTDescriptor.writeValue() method sets the
  property to the bytes contained in an `js.ArrayBuffer` and returns
  `js.Promise`.

  `BluetoothRemoteGATTDescriptor.writeValue(array[]).then(function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/writeValue`"
  [this & args]
  (-> this .-writeValue (.apply this (clj->js args))))

(defn characteristic
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothRemoteGATTDescriptor.characteristic read-only property
  the `web.bluetooth.BluetoothRemoteGATTCharacteristic` this descriptor
  to.

  `var characteristic = BluetoothRemoteGATTCharacteristic.characteristic`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic`"
  [this]
  (-> this (.-characteristic)))

(defn uuid
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothRemoteGATTDescriptor.uuid read-only property returns
  UUID of the characteristic descriptor, for example '00002902-0000-1000-8000-00805f9b34fb'
  theClient Characteristic Configuration descriptor.

  `var uuid = BluetoothRemoteGATTDescriptor.uuid`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid`"
  [this]
  (-> this (.-uuid)))

(defn value
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothRemoteGATTDescriptor.value read-only property returns
  `js.ArrayBuffer` containing the currently cached descriptor value.
  value gets updated when the value of the descriptor is read.

  `var characteristic = BluetoothRemoteGATTDescriptor.characteristic`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor/value`"
  [this]
  (-> this (.-value)))

