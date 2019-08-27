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

  The BluetoothDevice.connectGATT() method returns a `js.Promise`
  resolves to an instance of `BluetoothGATTRemoteServer`.

  `instanceOfBluetoothDevice.connectGATT().then(function(BluetoothGATTRemoteServer) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/connectGATT`"
  [this & args]
  (-> this .-connectGATT (.apply this (clj->js args))))

(defn id
  "Property.

  The BluetoothDevice.id read-only property returns a `web.dom.DOMString`
  uniquely identifies a device.

  `var id = instanceOfBluetoothDevice.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/id`"
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  The BluetoothDevice.id read-only property returns a `web.dom.DOMString`
  uniquely identifies a device.

  `var id = instanceOfBluetoothDevice.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/id`"
  [this val]
  (aset this "id" val))

(defn name
  "Property.

  The BluetoothDevice.name read-only property returns a `web.dom.DOMString`
  provides a human-readable name for the device.

  `var name = instanceOfBluetoothDevice.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The BluetoothDevice.name read-only property returns a `web.dom.DOMString`
  provides a human-readable name for the device.

  `var name = instanceOfBluetoothDevice.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/name`"
  [this val]
  (aset this "name" val))

(defn gatt
  "Property.

  The BluetoothDevice.gatt read-only property returns a reference
  the device's `web.bluetooth.BluetoothRemoteGATTServer`.

  `var gattServer = instanceOfBluetoothDevice.gatt`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt`"
  [this]
  (-> this (.-gatt)))

(defn set-gatt!
  "Property.

  The BluetoothDevice.gatt read-only property returns a reference
  the device's `web.bluetooth.BluetoothRemoteGATTServer`.

  `var gattServer = instanceOfBluetoothDevice.gatt`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt`"
  [this val]
  (aset this "gatt" val))

(defn uuids
  "Property.

  The BluetoothDevice.uuids read-only property lists the UUIDs
  GATT services provided by the device, that the current origin
  allowed to access.

  `var uuids[] =​ instanceOfBluetoothDevice.uuids`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/uuids`"
  [this]
  (-> this (.-uuids)))

(defn set-uuids!
  "Property.

  The BluetoothDevice.uuids read-only property lists the UUIDs
  GATT services provided by the device, that the current origin
  allowed to access.

  `var uuids[] =​ instanceOfBluetoothDevice.uuids`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/uuids`"
  [this val]
  (aset this "uuids" val))

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

  The BluetoothDevice.adData read-only property returns instance
  `web.bluetooth.BluetoothAdvertisingData` containing the most
  advertising data received for the device.

  `var instanceOfBluetoothAdData = instanceOfBluetoothDevice.adData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/adData`"
  [this]
  (-> this (.-adData)))

(defn set-ad-data!
  "Property.

  The BluetoothDevice.adData read-only property returns instance
  `web.bluetooth.BluetoothAdvertisingData` containing the most
  advertising data received for the device.

  `var instanceOfBluetoothAdData = instanceOfBluetoothDevice.adData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/adData`"
  [this val]
  (aset this "adData" val))

(defn device-class
  "Property.

  The BluetoothDevice.deviceClass read-only property returns a
  representing the Bluetooth devices \\\"Class of Device\\\".

  `var deviceClass = instanceOfBluetoothDevice.deviceClass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/deviceClass`"
  [this]
  (-> this (.-deviceClass)))

(defn set-device-class!
  "Property.

  The BluetoothDevice.deviceClass read-only property returns a
  representing the Bluetooth devices \\\"Class of Device\\\".

  `var deviceClass = instanceOfBluetoothDevice.deviceClass`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/deviceClass`"
  [this val]
  (aset this "deviceClass" val))

(defn vendor-id-source
  "Property.

  The BluetoothDevice.vendorIDSource read-only property returns
  Vendor ID Source field in the pnp_id characteristic in the device_information

  `var vendorIDSource = instanceOfBluetoothDevice.vendorIDSource`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorIDSource`"
  [this]
  (-> this (.-vendorIDSource)))

(defn set-vendor-id-source!
  "Property.

  The BluetoothDevice.vendorIDSource read-only property returns
  Vendor ID Source field in the pnp_id characteristic in the device_information

  `var vendorIDSource = instanceOfBluetoothDevice.vendorIDSource`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorIDSource`"
  [this val]
  (aset this "vendorIDSource" val))

(defn vendor-id
  "Property.

  The BluetoothDevice.vendorID read-only property returns the 16-bit
  ID field in the pnp_id characteristic in the device_information

  `var vendorID = instanceOfBluetoothDevice.vendorID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorID`"
  [this]
  (-> this (.-vendorID)))

(defn set-vendor-id!
  "Property.

  The BluetoothDevice.vendorID read-only property returns the 16-bit
  ID field in the pnp_id characteristic in the device_information

  `var vendorID = instanceOfBluetoothDevice.vendorID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/vendorID`"
  [this val]
  (aset this "vendorID" val))

(defn product-id
  "Property.

  The BluetoothDevice.productID read-only property returns the
  Product ID field in the pnp_id characteristic in the device_information

  `var productID = instanceOfBluetoothDevice.productID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productID`"
  [this]
  (-> this (.-productID)))

(defn set-product-id!
  "Property.

  The BluetoothDevice.productID read-only property returns the
  Product ID field in the pnp_id characteristic in the device_information

  `var productID = instanceOfBluetoothDevice.productID`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productID`"
  [this val]
  (aset this "productID" val))

(defn product-version
  "Property.

  The BluetoothDevice.productVersion read-only property returns
  16-bit Product Version field in the pnp_id characteristic in
  device_information service.

  `var productVersion = instanceOfBluetoothDevice.productVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productVersion`"
  [this]
  (-> this (.-productVersion)))

(defn set-product-version!
  "Property.

  The BluetoothDevice.productVersion read-only property returns
  16-bit Product Version field in the pnp_id characteristic in
  device_information service.

  `var productVersion = instanceOfBluetoothDevice.productVersion`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/productVersion`"
  [this val]
  (aset this "productVersion" val))

(defn paired
  "Property.

  The BluetoothDevice.paired read-only property returns a `js.Boolean`
  indicating whether the device is paired with the system.

  `var paired = instanceOfBluetoothDevice.paired`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/paired`"
  [this]
  (-> this (.-paired)))

(defn set-paired!
  "Property.

  The BluetoothDevice.paired read-only property returns a `js.Boolean`
  indicating whether the device is paired with the system.

  `var paired = instanceOfBluetoothDevice.paired`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/paired`"
  [this val]
  (aset this "paired" val))

(defn gatt-server
  "Property.

  The BluetoothDevice.gattServer read-only property returns a reference
  the device's GATT server or null if the device is disconnected.

  `var gattServer = instanceOfBluetoothDevice.gattServer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gattServer`"
  [this]
  (-> this (.-gattServer)))

(defn set-gatt-server!
  "Property.

  The BluetoothDevice.gattServer read-only property returns a reference
  the device's GATT server or null if the device is disconnected.

  `var gattServer = instanceOfBluetoothDevice.gattServer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gattServer`"
  [this val]
  (aset this "gattServer" val))

