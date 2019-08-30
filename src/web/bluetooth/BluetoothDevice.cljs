(ns web.bluetooth.BluetoothDevice
  "The BluetoothDevice interface of the Web Bluetooth API represents
  Bluetooth device inside a particular script execution environment."
  (:refer-clojure :exclude [name]))

(defn watch-advertisments
  "Method.

  A Promise that resolves to undefined or is rejected with an error
  advetisments can’t shown for any reason."
  [this & args]
  (-> this .-watchAdvertisments (.apply this (clj->js args))))

(defn unwatch-advertisments
  "Method.

  Stops watching for advertisments."
  [this & args]
  (-> this .-unwatchAdvertisments (.apply this (clj->js args))))

(defn connect-gatt
  "Method.

  [Non Standard]
  [Obsolute]

  The BluetoothDevice.connectGATT() method returns a `js.Promise`
  resolves to an instance of `BluetoothGATTRemoteServer`.

  `instanceOfBluetoothDevice.connectGATT().then(function(BluetoothGATTRemoteServer) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/connectGATT`"
  [this & args]
  (-> this .-connectGATT (.apply this (clj->js args))))

(defn id
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothDevice.id read-only property returns a `web.dom.DOMString`
  uniquely identifies a device.

  `var id = instanceOfBluetoothDevice.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/id`"
  [this]
  (-> this (.-id)))

(defn name
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothDevice.name read-only property returns a `web.dom.DOMString`
  provides a human-readable name for the device.

  `var name = instanceOfBluetoothDevice.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/name`"
  [this]
  (-> this (.-name)))

(defn gatt
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothDevice.gatt read-only property returns a reference
  the device's `web.bluetooth.BluetoothRemoteGATTServer`.

  `var gattServer = instanceOfBluetoothDevice.gatt`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt`"
  [this]
  (-> this (.-gatt)))

(defn uuids
  "Property.

  [Read Only]
  [Experimental]

  The BluetoothDevice.uuids read-only property lists the UUIDs
  GATT services provided by the device, that the current origin
  allowed to access.

  `var uuids[] =​ instanceOfBluetoothDevice.uuids`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/uuids`"
  [this]
  (-> this (.-uuids)))

(defn watching-advertisements
  "Property.

  If advertisments were activated using BluetoothDevice.watchAdvertisements()."
  [this]
  (-> this (.-watchingAdvertisements)))

(defn set-watching-advertisements!
  "Property.

  If advertisments were activated using BluetoothDevice.watchAdvertisements()."
  [this val]
  (aset this "watchingAdvertisements" val))

(defn ad-data
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.adData read-only property returns instance
  `web.bluetooth.BluetoothAdvertisingData` containing the most
  advertising data received for the device.

  `var instanceOfBluetoothAdData = instanceOfBluetoothDevice.adData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/adData`"
  [this]
  (-> this (.-adData)))

(defn device-class
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.deviceClass read-only property returns a
  representing the Bluetooth devices \\\"Class of Device\\\".

  `var deviceClass = instanceOfBluetoothDevice.deviceClass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/deviceClass`"
  [this]
  (-> this (.-deviceClass)))

(defn vendor-id-source
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.vendorIDSource read-only property returns
  Vendor ID Source field in the pnp_id characteristic in the device_information

  `var vendorIDSource = instanceOfBluetoothDevice.vendorIDSource`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorIDSource`"
  [this]
  (-> this (.-vendorIDSource)))

(defn vendor-id
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.vendorID read-only property returns the 16-bit
  ID field in the pnp_id characteristic in the device_information

  `var vendorID = instanceOfBluetoothDevice.vendorID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorID`"
  [this]
  (-> this (.-vendorID)))

(defn product-id
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.productID read-only property returns the
  Product ID field in the pnp_id characteristic in the device_information

  `var productID = instanceOfBluetoothDevice.productID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productID`"
  [this]
  (-> this (.-productID)))

(defn product-version
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.productVersion read-only property returns
  16-bit Product Version field in the pnp_id characteristic in
  device_information service.

  `var productVersion = instanceOfBluetoothDevice.productVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productVersion`"
  [this]
  (-> this (.-productVersion)))

(defn paired
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.paired read-only property returns a `js.Boolean`
  indicating whether the device is paired with the system.

  `var paired = instanceOfBluetoothDevice.paired`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/paired`"
  [this]
  (-> this (.-paired)))

(defn gatt-server
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The BluetoothDevice.gattServer read-only property returns a reference
  the device's GATT server or null if the device is disconnected.

  `var gattServer = instanceOfBluetoothDevice.gattServer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gattServer`"
  [this]
  (-> this (.-gattServer)))

